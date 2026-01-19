import C, { createContext as Ue, useRef as St, useLayoutEffect as oa, useEffect as Vn, useContext as Q, useId as aa, useCallback as Yr, useMemo as Nt, Fragment as Gr, createElement as la, useInsertionEffect as ca, forwardRef as ua, Component as da } from "react";
const Hr = {
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
}, Vh = {
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
}, Eh = {
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
}, Dh = {
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
}, Nh = {
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
}, Mh = {
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
}, Ee = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}, Lh = {
  xs: `(min-width: ${Ee.xs})`,
  sm: `(min-width: ${Ee.sm})`,
  md: `(min-width: ${Ee.md})`,
  lg: `(min-width: ${Ee.lg})`,
  xl: `(min-width: ${Ee.xl})`,
  "2xl": `(min-width: ${Ee["2xl"]})`
}, Oh = {
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
var xt = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var js;
function fa() {
  if (js) return Xe;
  js = 1;
  var e = C, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, u) {
    var c, f = {}, m = null, p = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (c in l) s.call(l, c) && !o.hasOwnProperty(c) && (f[c] = l[c]);
    if (a && a.defaultProps) for (c in l = a.defaultProps, l) f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: t, type: a, key: m, ref: p, props: f, _owner: r.current };
  }
  return Xe.Fragment = n, Xe.jsx = i, Xe.jsxs = i, Xe;
}
var qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var As;
function ha() {
  return As || (As = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = C, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function S(d) {
      if (d === null || typeof d != "object")
        return null;
      var g = y && d[y] || d[b];
      return typeof g == "function" ? g : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(d) {
      {
        for (var g = arguments.length, T = new Array(g > 1 ? g - 1 : 0), A = 1; A < g; A++)
          T[A - 1] = arguments[A];
        P("error", d, T);
      }
    }
    function P(d, g, T) {
      {
        var A = x.ReactDebugCurrentFrame, D = A.getStackAddendum();
        D !== "" && (g += "%s", T = T.concat([D]));
        var M = T.map(function(E) {
          return String(E);
        });
        M.unshift("Warning: " + g), Function.prototype.apply.call(console[d], console, M);
      }
    }
    var V = !1, _ = !1, N = !1, I = !1, R = !1, Y;
    Y = Symbol.for("react.module.reference");
    function Z(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === s || d === o || R || d === r || d === u || d === c || I || d === p || V || _ || N || typeof d == "object" && d !== null && (d.$$typeof === m || d.$$typeof === f || d.$$typeof === i || d.$$typeof === a || d.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === Y || d.getModuleId !== void 0));
    }
    function ge(d, g, T) {
      var A = d.displayName;
      if (A)
        return A;
      var D = g.displayName || g.name || "";
      return D !== "" ? T + "(" + D + ")" : T;
    }
    function He(d) {
      return d.displayName || "Context";
    }
    function le(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case r:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case a:
            var g = d;
            return He(g) + ".Consumer";
          case i:
            var T = d;
            return He(T._context) + ".Provider";
          case l:
            return ge(d, d.render, "ForwardRef");
          case f:
            var A = d.displayName || null;
            return A !== null ? A : le(d.type) || "Memo";
          case m: {
            var D = d, M = D._payload, E = D._init;
            try {
              return le(E(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ce = Object.assign, ye = 0, Ft, U, z, ue, fe, ht, us;
    function ds() {
    }
    ds.__reactDisabledLog = !0;
    function Do() {
      {
        if (ye === 0) {
          Ft = console.log, U = console.info, z = console.warn, ue = console.error, fe = console.group, ht = console.groupCollapsed, us = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: ds,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        ye++;
      }
    }
    function No() {
      {
        if (ye--, ye === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ce({}, d, {
              value: Ft
            }),
            info: ce({}, d, {
              value: U
            }),
            warn: ce({}, d, {
              value: z
            }),
            error: ce({}, d, {
              value: ue
            }),
            group: ce({}, d, {
              value: fe
            }),
            groupCollapsed: ce({}, d, {
              value: ht
            }),
            groupEnd: ce({}, d, {
              value: us
            })
          });
        }
        ye < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var It = x.ReactCurrentDispatcher, Bt;
    function mt(d, g, T) {
      {
        if (Bt === void 0)
          try {
            throw Error();
          } catch (D) {
            var A = D.stack.trim().match(/\n( *(at )?)/);
            Bt = A && A[1] || "";
          }
        return `
` + Bt + d;
      }
    }
    var $t = !1, pt;
    {
      var Mo = typeof WeakMap == "function" ? WeakMap : Map;
      pt = new Mo();
    }
    function fs(d, g) {
      if (!d || $t)
        return "";
      {
        var T = pt.get(d);
        if (T !== void 0)
          return T;
      }
      var A;
      $t = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = It.current, It.current = null, Do();
      try {
        if (g) {
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
            } catch (J) {
              A = J;
            }
            Reflect.construct(d, [], E);
          } else {
            try {
              E.call();
            } catch (J) {
              A = J;
            }
            d.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            A = J;
          }
          d();
        }
      } catch (J) {
        if (J && A && typeof J.stack == "string") {
          for (var k = J.stack.split(`
`), X = A.stack.split(`
`), B = k.length - 1, W = X.length - 1; B >= 1 && W >= 0 && k[B] !== X[W]; )
            W--;
          for (; B >= 1 && W >= 0; B--, W--)
            if (k[B] !== X[W]) {
              if (B !== 1 || W !== 1)
                do
                  if (B--, W--, W < 0 || k[B] !== X[W]) {
                    var te = `
` + k[B].replace(" at new ", " at ");
                    return d.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", d.displayName)), typeof d == "function" && pt.set(d, te), te;
                  }
                while (B >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        $t = !1, It.current = M, No(), Error.prepareStackTrace = D;
      }
      var Ve = d ? d.displayName || d.name : "", Te = Ve ? mt(Ve) : "";
      return typeof d == "function" && pt.set(d, Te), Te;
    }
    function Lo(d, g, T) {
      return fs(d, !1);
    }
    function Oo(d) {
      var g = d.prototype;
      return !!(g && g.isReactComponent);
    }
    function gt(d, g, T) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return fs(d, Oo(d));
      if (typeof d == "string")
        return mt(d);
      switch (d) {
        case u:
          return mt("Suspense");
        case c:
          return mt("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            return Lo(d.render);
          case f:
            return gt(d.type, g, T);
          case m: {
            var A = d, D = A._payload, M = A._init;
            try {
              return gt(M(D), g, T);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, hs = {}, ms = x.ReactDebugCurrentFrame;
    function yt(d) {
      if (d) {
        var g = d._owner, T = gt(d.type, d._source, g ? g.type : null);
        ms.setExtraStackFrame(T);
      } else
        ms.setExtraStackFrame(null);
    }
    function Fo(d, g, T, A, D) {
      {
        var M = Function.call.bind(ze);
        for (var E in d)
          if (M(d, E)) {
            var k = void 0;
            try {
              if (typeof d[E] != "function") {
                var X = Error((A || "React class") + ": " + T + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              k = d[E](g, E, A, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              k = B;
            }
            k && !(k instanceof Error) && (yt(D), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", T, E, typeof k), yt(null)), k instanceof Error && !(k.message in hs) && (hs[k.message] = !0, yt(D), w("Failed %s type: %s", T, k.message), yt(null));
          }
      }
    }
    var Io = Array.isArray;
    function Ut(d) {
      return Io(d);
    }
    function Bo(d) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, T = g && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return T;
      }
    }
    function $o(d) {
      try {
        return ps(d), !1;
      } catch {
        return !0;
      }
    }
    function ps(d) {
      return "" + d;
    }
    function gs(d) {
      if ($o(d))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bo(d)), ps(d);
    }
    var ys = x.ReactCurrentOwner, Uo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xs, vs;
    function Wo(d) {
      if (ze.call(d, "ref")) {
        var g = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Ko(d) {
      if (ze.call(d, "key")) {
        var g = Object.getOwnPropertyDescriptor(d, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Yo(d, g) {
      typeof d.ref == "string" && ys.current;
    }
    function Go(d, g) {
      {
        var T = function() {
          xs || (xs = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function Ho(d, g) {
      {
        var T = function() {
          vs || (vs = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var zo = function(d, g, T, A, D, M, E) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: g,
        ref: T,
        props: E,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Xo(d, g, T, A, D) {
      {
        var M, E = {}, k = null, X = null;
        T !== void 0 && (gs(T), k = "" + T), Ko(g) && (gs(g.key), k = "" + g.key), Wo(g) && (X = g.ref, Yo(g, D));
        for (M in g)
          ze.call(g, M) && !Uo.hasOwnProperty(M) && (E[M] = g[M]);
        if (d && d.defaultProps) {
          var B = d.defaultProps;
          for (M in B)
            E[M] === void 0 && (E[M] = B[M]);
        }
        if (k || X) {
          var W = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          k && Go(E, W), X && Ho(E, W);
        }
        return zo(d, k, X, D, A, ys.current, E);
      }
    }
    var Wt = x.ReactCurrentOwner, bs = x.ReactDebugCurrentFrame;
    function ke(d) {
      if (d) {
        var g = d._owner, T = gt(d.type, d._source, g ? g.type : null);
        bs.setExtraStackFrame(T);
      } else
        bs.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function Yt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function ws() {
      {
        if (Wt.current) {
          var d = le(Wt.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function qo(d) {
      return "";
    }
    var Ts = {};
    function Zo(d) {
      {
        var g = ws();
        if (!g) {
          var T = typeof d == "string" ? d : d.displayName || d.name;
          T && (g = `

Check the top-level render call using <` + T + ">.");
        }
        return g;
      }
    }
    function Ss(d, g) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var T = Zo(g);
        if (Ts[T])
          return;
        Ts[T] = !0;
        var A = "";
        d && d._owner && d._owner !== Wt.current && (A = " It was passed a child from " + le(d._owner.type) + "."), ke(d), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, A), ke(null);
      }
    }
    function Ps(d, g) {
      {
        if (typeof d != "object")
          return;
        if (Ut(d))
          for (var T = 0; T < d.length; T++) {
            var A = d[T];
            Yt(A) && Ss(A, g);
          }
        else if (Yt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var D = S(d);
          if (typeof D == "function" && D !== d.entries)
            for (var M = D.call(d), E; !(E = M.next()).done; )
              Yt(E.value) && Ss(E.value, g);
        }
      }
    }
    function Jo(d) {
      {
        var g = d.type;
        if (g == null || typeof g == "string")
          return;
        var T;
        if (typeof g == "function")
          T = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === f))
          T = g.propTypes;
        else
          return;
        if (T) {
          var A = le(g);
          Fo(T, d.props, "prop", A, d);
        } else if (g.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var D = le(g);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qo(d) {
      {
        for (var g = Object.keys(d.props), T = 0; T < g.length; T++) {
          var A = g[T];
          if (A !== "children" && A !== "key") {
            ke(d), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), ke(null);
            break;
          }
        }
        d.ref !== null && (ke(d), w("Invalid attribute `ref` supplied to `React.Fragment`."), ke(null));
      }
    }
    var Cs = {};
    function _s(d, g, T, A, D, M) {
      {
        var E = Z(d);
        if (!E) {
          var k = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = qo();
          X ? k += X : k += ws();
          var B;
          d === null ? B = "null" : Ut(d) ? B = "array" : d !== void 0 && d.$$typeof === t ? (B = "<" + (le(d.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : B = typeof d, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, k);
        }
        var W = Xo(d, g, T, D, M);
        if (W == null)
          return W;
        if (E) {
          var te = g.children;
          if (te !== void 0)
            if (A)
              if (Ut(te)) {
                for (var Ve = 0; Ve < te.length; Ve++)
                  Ps(te[Ve], d);
                Object.freeze && Object.freeze(te);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ps(te, d);
        }
        if (ze.call(g, "key")) {
          var Te = le(d), J = Object.keys(g).filter(function(ia) {
            return ia !== "key";
          }), Gt = J.length > 0 ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Cs[Te + Gt]) {
            var ra = J.length > 0 ? "{" + J.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gt, Te, ra, Te), Cs[Te + Gt] = !0;
          }
        }
        return d === s ? Qo(W) : Jo(W), W;
      }
    }
    function ea(d, g, T) {
      return _s(d, g, T, !0);
    }
    function ta(d, g, T) {
      return _s(d, g, T, !1);
    }
    var na = ta, sa = ea;
    qe.Fragment = s, qe.jsx = na, qe.jsxs = sa;
  })()), qe;
}
var Rs;
function ma() {
  return Rs || (Rs = 1, process.env.NODE_ENV === "production" ? xt.exports = fa() : xt.exports = ha()), xt.exports;
}
var h = ma();
const zr = Ue({});
function pa(e) {
  const t = St(null);
  return t.current === null && (t.current = e()), t.current;
}
const En = typeof window < "u", ga = En ? oa : Vn, Dn = /* @__PURE__ */ Ue(null);
function Nn(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Mn(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const he = (e, t, n) => n > t ? t : n < e ? e : n;
function cn(e, t) {
  return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
let We = () => {
}, me = () => {
};
process.env.NODE_ENV !== "production" && (We = (e, t, n) => {
  !e && typeof console < "u" && console.warn(cn(t, n));
}, me = (e, t, n) => {
  if (!e)
    throw new Error(cn(t, n));
});
const pe = {}, Xr = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function qr(e) {
  return typeof e == "object" && e !== null;
}
const Zr = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Ln(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const ie = /* @__NO_SIDE_EFFECTS__ */ (e) => e, ya = (e, t) => (n) => t(e(n)), ct = (...e) => e.reduce(ya), st = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const s = t - e;
  return s === 0 ? 1 : (n - e) / s;
};
class On {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Nn(this.subscriptions, t), () => Mn(this.subscriptions, t);
  }
  notify(t, n, s) {
    const r = this.subscriptions.length;
    if (r)
      if (r === 1)
        this.subscriptions[0](t, n, s);
      else
        for (let o = 0; o < r; o++) {
          const i = this.subscriptions[o];
          i && i(t, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ae = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, re = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function Jr(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ks = /* @__PURE__ */ new Set();
function Fn(e, t, n) {
  e || ks.has(t) || (console.warn(cn(t, n)), ks.add(t));
}
const Qr = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, xa = 1e-7, va = 12;
function ba(e, t, n, s, r) {
  let o, i, a = 0;
  do
    i = t + (n - t) / 2, o = Qr(i, s, r) - e, o > 0 ? n = i : t = i;
  while (Math.abs(o) > xa && ++a < va);
  return i;
}
function ut(e, t, n, s) {
  if (e === t && n === s)
    return ie;
  const r = (o) => ba(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Qr(r(o), t, s);
}
const ei = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ti = (e) => (t) => 1 - e(1 - t), ni = /* @__PURE__ */ ut(0.33, 1.53, 0.69, 0.99), In = /* @__PURE__ */ ti(ni), si = /* @__PURE__ */ ei(In), ri = (e) => (e *= 2) < 1 ? 0.5 * In(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Bn = (e) => 1 - Math.sin(Math.acos(e)), ii = ti(Bn), oi = ei(Bn), wa = /* @__PURE__ */ ut(0.42, 0, 1, 1), Ta = /* @__PURE__ */ ut(0, 0, 0.58, 1), ai = /* @__PURE__ */ ut(0.42, 0, 0.58, 1), Sa = (e) => Array.isArray(e) && typeof e[0] != "number", li = (e) => Array.isArray(e) && typeof e[0] == "number", Vs = {
  linear: ie,
  easeIn: wa,
  easeInOut: ai,
  easeOut: Ta,
  circIn: Bn,
  circInOut: oi,
  circOut: ii,
  backIn: In,
  backInOut: si,
  backOut: ni,
  anticipate: ri
}, Pa = (e) => typeof e == "string", Es = (e) => {
  if (li(e)) {
    me(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [t, n, s, r] = e;
    return ut(t, n, s, r);
  } else if (Pa(e))
    return me(Vs[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), Vs[e];
  return e;
}, vt = [
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
function Ca(e, t) {
  let n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), r = !1, o = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    i.has(c) && (u.schedule(c), e()), c(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, f = !1, m = !1) => {
      const y = m && r ? n : s;
      return f && i.add(c), y.has(c) || y.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      s.delete(c), i.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (a = c, r) {
        o = !0;
        return;
      }
      r = !0, [n, s] = [s, n], n.forEach(l), n.clear(), r = !1, o && (o = !1, u.process(c));
    }
  };
  return u;
}
const _a = 40;
function ci(e, t) {
  let n = !1, s = !0;
  const r = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, i = vt.reduce((P, V) => (P[V] = Ca(o), P), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: f, preRender: m, render: p, postRender: y } = i, b = () => {
    const P = pe.useManualTiming ? r.timestamp : performance.now();
    n = !1, pe.useManualTiming || (r.delta = s ? 1e3 / 60 : Math.max(Math.min(P - r.timestamp, _a), 1)), r.timestamp = P, r.isProcessing = !0, a.process(r), l.process(r), u.process(r), c.process(r), f.process(r), m.process(r), p.process(r), y.process(r), r.isProcessing = !1, n && t && (s = !1, e(b));
  }, S = () => {
    n = !0, s = !0, r.isProcessing || e(b);
  };
  return { schedule: vt.reduce((P, V) => {
    const _ = i[V];
    return P[V] = (N, I = !1, R = !1) => (n || S(), _.schedule(N, I, R)), P;
  }, {}), cancel: (P) => {
    for (let V = 0; V < vt.length; V++)
      i[vt[V]].cancel(P);
  }, state: r, steps: i };
}
const { schedule: L, cancel: ve, state: G, steps: Ht } = /* @__PURE__ */ ci(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ie, !0);
let Pt;
function ja() {
  Pt = void 0;
}
const ee = {
  now: () => (Pt === void 0 && ee.set(G.isProcessing || pe.useManualTiming ? G.timestamp : performance.now()), Pt),
  set: (e) => {
    Pt = e, queueMicrotask(ja);
  }
}, ui = (e) => (t) => typeof t == "string" && t.startsWith(e), $n = /* @__PURE__ */ ui("--"), Aa = /* @__PURE__ */ ui("var(--"), Un = (e) => Aa(e) ? Ra.test(e.split("/*")[0].trim()) : !1, Ra = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ke = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, rt = {
  ...Ke,
  transform: (e) => he(0, 1, e)
}, bt = {
  ...Ke,
  default: 1
}, Qe = (e) => Math.round(e * 1e5) / 1e5, Wn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ka(e) {
  return e == null;
}
const Va = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Kn = (e, t) => (n) => !!(typeof n == "string" && Va.test(n) && n.startsWith(e) || t && !ka(n) && Object.prototype.hasOwnProperty.call(n, t)), di = (e, t, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [r, o, i, a] = s.match(Wn);
  return {
    [e]: parseFloat(r),
    [t]: parseFloat(o),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Ea = (e) => he(0, 255, e), zt = {
  ...Ke,
  transform: (e) => Math.round(Ea(e))
}, Ce = {
  test: /* @__PURE__ */ Kn("rgb", "red"),
  parse: /* @__PURE__ */ di("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: s = 1 }) => "rgba(" + zt.transform(e) + ", " + zt.transform(t) + ", " + zt.transform(n) + ", " + Qe(rt.transform(s)) + ")"
};
function Da(e) {
  let t = "", n = "", s = "", r = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), s = e.substring(5, 7), r = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), s = e.substring(3, 4), r = e.substring(4, 5), t += t, n += n, s += s, r += r), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: r ? parseInt(r, 16) / 255 : 1
  };
}
const un = {
  test: /* @__PURE__ */ Kn("#"),
  parse: Da,
  transform: Ce.transform
}, dt = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), xe = /* @__PURE__ */ dt("deg"), de = /* @__PURE__ */ dt("%"), j = /* @__PURE__ */ dt("px"), Na = /* @__PURE__ */ dt("vh"), Ma = /* @__PURE__ */ dt("vw"), Ds = {
  ...de,
  parse: (e) => de.parse(e) / 100,
  transform: (e) => de.transform(e * 100)
}, De = {
  test: /* @__PURE__ */ Kn("hsl", "hue"),
  parse: /* @__PURE__ */ di("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(e) + ", " + de.transform(Qe(t)) + ", " + de.transform(Qe(n)) + ", " + Qe(rt.transform(s)) + ")"
}, K = {
  test: (e) => Ce.test(e) || un.test(e) || De.test(e),
  parse: (e) => Ce.test(e) ? Ce.parse(e) : De.test(e) ? De.parse(e) : un.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Ce.transform(e) : De.transform(e),
  getAnimatableNone: (e) => {
    const t = K.parse(e);
    return t.alpha = 0, K.transform(t);
  }
}, La = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Oa(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Wn)) == null ? void 0 : t.length) || 0) + (((n = e.match(La)) == null ? void 0 : n.length) || 0) > 0;
}
const fi = "number", hi = "color", Fa = "var", Ia = "var(", Ns = "${}", Ba = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function it(e) {
  const t = e.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, r = [];
  let o = 0;
  const a = t.replace(Ba, (l) => (K.test(l) ? (s.color.push(o), r.push(hi), n.push(K.parse(l))) : l.startsWith(Ia) ? (s.var.push(o), r.push(Fa), n.push(l)) : (s.number.push(o), r.push(fi), n.push(parseFloat(l))), ++o, Ns)).split(Ns);
  return { values: n, split: a, indexes: s, types: r };
}
function mi(e) {
  return it(e).values;
}
function pi(e) {
  const { split: t, types: n } = it(e), s = t.length;
  return (r) => {
    let o = "";
    for (let i = 0; i < s; i++)
      if (o += t[i], r[i] !== void 0) {
        const a = n[i];
        a === fi ? o += Qe(r[i]) : a === hi ? o += K.transform(r[i]) : o += r[i];
      }
    return o;
  };
}
const $a = (e) => typeof e == "number" ? 0 : K.test(e) ? K.getAnimatableNone(e) : e;
function Ua(e) {
  const t = mi(e);
  return pi(e)(t.map($a));
}
const be = {
  test: Oa,
  parse: mi,
  createTransformer: pi,
  getAnimatableNone: Ua
};
function Xt(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Wa({ hue: e, saturation: t, lightness: n, alpha: s }) {
  e /= 360, t /= 100, n /= 100;
  let r = 0, o = 0, i = 0;
  if (!t)
    r = o = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    r = Xt(l, a, e + 1 / 3), o = Xt(l, a, e), i = Xt(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(o * 255),
    blue: Math.round(i * 255),
    alpha: s
  };
}
function At(e, t) {
  return (n) => n > 0 ? t : e;
}
const F = (e, t, n) => e + (t - e) * n, qt = (e, t, n) => {
  const s = e * e, r = n * (t * t - s) + s;
  return r < 0 ? 0 : Math.sqrt(r);
}, Ka = [un, Ce, De], Ya = (e) => Ka.find((t) => t.test(e));
function Ms(e) {
  const t = Ya(e);
  if (We(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t)
    return !1;
  let n = t.parse(e);
  return t === De && (n = Wa(n)), n;
}
const Ls = (e, t) => {
  const n = Ms(e), s = Ms(t);
  if (!n || !s)
    return At(e, t);
  const r = { ...n };
  return (o) => (r.red = qt(n.red, s.red, o), r.green = qt(n.green, s.green, o), r.blue = qt(n.blue, s.blue, o), r.alpha = F(n.alpha, s.alpha, o), Ce.transform(r));
}, dn = /* @__PURE__ */ new Set(["none", "hidden"]);
function Ga(e, t) {
  return dn.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Ha(e, t) {
  return (n) => F(e, t, n);
}
function Yn(e) {
  return typeof e == "number" ? Ha : typeof e == "string" ? Un(e) ? At : K.test(e) ? Ls : qa : Array.isArray(e) ? gi : typeof e == "object" ? K.test(e) ? Ls : za : At;
}
function gi(e, t) {
  const n = [...e], s = n.length, r = e.map((o, i) => Yn(o)(o, t[i]));
  return (o) => {
    for (let i = 0; i < s; i++)
      n[i] = r[i](o);
    return n;
  };
}
function za(e, t) {
  const n = { ...e, ...t }, s = {};
  for (const r in n)
    e[r] !== void 0 && t[r] !== void 0 && (s[r] = Yn(e[r])(e[r], t[r]));
  return (r) => {
    for (const o in s)
      n[o] = s[o](r);
    return n;
  };
}
function Xa(e, t) {
  const n = [], s = { color: 0, var: 0, number: 0 };
  for (let r = 0; r < t.values.length; r++) {
    const o = t.types[r], i = e.indexes[o][s[o]], a = e.values[i] ?? 0;
    n[r] = a, s[o]++;
  }
  return n;
}
const qa = (e, t) => {
  const n = be.createTransformer(t), s = it(e), r = it(t);
  return s.indexes.var.length === r.indexes.var.length && s.indexes.color.length === r.indexes.color.length && s.indexes.number.length >= r.indexes.number.length ? dn.has(e) && !r.values.length || dn.has(t) && !s.values.length ? Ga(e, t) : ct(gi(Xa(s, r), r.values), n) : (We(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), At(e, t));
};
function yi(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? F(e, t, n) : Yn(e)(e, t);
}
const Za = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => L.update(t, n),
    stop: () => ve(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => G.isProcessing ? G.timestamp : ee.now()
  };
}, xi = (e, t, n = 10) => {
  let s = "";
  const r = Math.max(Math.round(t / n), 2);
  for (let o = 0; o < r; o++)
    s += Math.round(e(o / (r - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, Rt = 2e4;
function Gn(e) {
  let t = 0;
  const n = 50;
  let s = e.next(t);
  for (; !s.done && t < Rt; )
    t += n, s = e.next(t);
  return t >= Rt ? 1 / 0 : t;
}
function Ja(e, t = 100, n) {
  const s = n({ ...e, keyframes: [0, t] }), r = Math.min(Gn(s), Rt);
  return {
    type: "keyframes",
    ease: (o) => s.next(r * o).value / t,
    duration: /* @__PURE__ */ re(r)
  };
}
const Qa = 5;
function vi(e, t, n) {
  const s = Math.max(t - Qa, 0);
  return Jr(n - e(s), t - s);
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
}, Zt = 1e-3;
function el({ duration: e = O.duration, bounce: t = O.bounce, velocity: n = O.velocity, mass: s = O.mass }) {
  let r, o;
  We(e <= /* @__PURE__ */ ae(O.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let i = 1 - t;
  i = he(O.minDamping, O.maxDamping, i), e = he(O.minDuration, O.maxDuration, /* @__PURE__ */ re(e)), i < 1 ? (r = (u) => {
    const c = u * i, f = c * e, m = c - n, p = fn(u, i), y = Math.exp(-f);
    return Zt - m / p * y;
  }, o = (u) => {
    const f = u * i * e, m = f * n + n, p = Math.pow(i, 2) * Math.pow(u, 2) * e, y = Math.exp(-f), b = fn(Math.pow(u, 2), i);
    return (-r(u) + Zt > 0 ? -1 : 1) * ((m - p) * y) / b;
  }) : (r = (u) => {
    const c = Math.exp(-u * e), f = (u - n) * e + 1;
    return -Zt + c * f;
  }, o = (u) => {
    const c = Math.exp(-u * e), f = (n - u) * (e * e);
    return c * f;
  });
  const a = 5 / e, l = nl(r, o, a);
  if (e = /* @__PURE__ */ ae(e), isNaN(l))
    return {
      stiffness: O.stiffness,
      damping: O.damping,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * s;
    return {
      stiffness: u,
      damping: i * 2 * Math.sqrt(s * u),
      duration: e
    };
  }
}
const tl = 12;
function nl(e, t, n) {
  let s = n;
  for (let r = 1; r < tl; r++)
    s = s - e(s) / t(s);
  return s;
}
function fn(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const sl = ["duration", "bounce"], rl = ["stiffness", "damping", "mass"];
function Os(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function il(e) {
  let t = {
    velocity: O.velocity,
    stiffness: O.stiffness,
    damping: O.damping,
    mass: O.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Os(e, rl) && Os(e, sl))
    if (e.visualDuration) {
      const n = e.visualDuration, s = 2 * Math.PI / (n * 1.2), r = s * s, o = 2 * he(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(r);
      t = {
        ...t,
        mass: O.mass,
        stiffness: r,
        damping: o
      };
    } else {
      const n = el(e);
      t = {
        ...t,
        ...n,
        mass: O.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function kt(e = O.visualDuration, t = O.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: s, restDelta: r } = n;
  const o = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: f, velocity: m, isResolvedFromDuration: p } = il({
    ...n,
    velocity: -/* @__PURE__ */ re(n.velocity || 0)
  }), y = m || 0, b = u / (2 * Math.sqrt(l * c)), S = i - o, x = /* @__PURE__ */ re(Math.sqrt(l / c)), w = Math.abs(S) < 5;
  s || (s = w ? O.restSpeed.granular : O.restSpeed.default), r || (r = w ? O.restDelta.granular : O.restDelta.default);
  let P;
  if (b < 1) {
    const _ = fn(x, b);
    P = (N) => {
      const I = Math.exp(-b * x * N);
      return i - I * ((y + b * x * S) / _ * Math.sin(_ * N) + S * Math.cos(_ * N));
    };
  } else if (b === 1)
    P = (_) => i - Math.exp(-x * _) * (S + (y + x * S) * _);
  else {
    const _ = x * Math.sqrt(b * b - 1);
    P = (N) => {
      const I = Math.exp(-b * x * N), R = Math.min(_ * N, 300);
      return i - I * ((y + b * x * S) * Math.sinh(R) + _ * S * Math.cosh(R)) / _;
    };
  }
  const V = {
    calculatedDuration: p && f || null,
    next: (_) => {
      const N = P(_);
      if (p)
        a.done = _ >= f;
      else {
        let I = _ === 0 ? y : 0;
        b < 1 && (I = _ === 0 ? /* @__PURE__ */ ae(y) : vi(P, _, N));
        const R = Math.abs(I) <= s, Y = Math.abs(i - N) <= r;
        a.done = R && Y;
      }
      return a.value = a.done ? i : N, a;
    },
    toString: () => {
      const _ = Math.min(Gn(V), Rt), N = xi((I) => V.next(_ * I).value, _, 30);
      return _ + "ms " + N;
    },
    toTransition: () => {
    }
  };
  return V;
}
kt.applyToOptions = (e) => {
  const t = Ja(e, 100, kt);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ ae(t.duration), e.type = "keyframes", e;
};
function hn({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: r = 10, bounceStiffness: o = 500, modifyTarget: i, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const f = e[0], m = {
    done: !1,
    value: f
  }, p = (R) => a !== void 0 && R < a || l !== void 0 && R > l, y = (R) => a === void 0 ? l : l === void 0 || Math.abs(a - R) < Math.abs(l - R) ? a : l;
  let b = n * t;
  const S = f + b, x = i === void 0 ? S : i(S);
  x !== S && (b = x - f);
  const w = (R) => -b * Math.exp(-R / s), P = (R) => x + w(R), V = (R) => {
    const Y = w(R), Z = P(R);
    m.done = Math.abs(Y) <= u, m.value = m.done ? x : Z;
  };
  let _, N;
  const I = (R) => {
    p(m.value) && (_ = R, N = kt({
      keyframes: [m.value, y(m.value)],
      velocity: vi(P, R, m.value),
      // TODO: This should be passing * 1000
      damping: r,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return I(0), {
    calculatedDuration: null,
    next: (R) => {
      let Y = !1;
      return !N && _ === void 0 && (Y = !0, V(R), I(R)), _ !== void 0 && R >= _ ? N.next(R - _) : (!Y && V(R), m);
    }
  };
}
function ol(e, t, n) {
  const s = [], r = n || pe.mix || yi, o = e.length - 1;
  for (let i = 0; i < o; i++) {
    let a = r(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || ie : t;
      a = ct(l, a);
    }
    s.push(a);
  }
  return s;
}
function al(e, t, { clamp: n = !0, ease: s, mixer: r } = {}) {
  const o = e.length;
  if (me(o === t.length, "Both input and output ranges must be the same length", "range-length"), o === 1)
    return () => t[0];
  if (o === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = ol(t, s, r), l = a.length, u = (c) => {
    if (i && c < e[0])
      return t[0];
    let f = 0;
    if (l > 1)
      for (; f < e.length - 2 && !(c < e[f + 1]); f++)
        ;
    const m = /* @__PURE__ */ st(e[f], e[f + 1], c);
    return a[f](m);
  };
  return n ? (c) => u(he(e[0], e[o - 1], c)) : u;
}
function ll(e, t) {
  const n = e[e.length - 1];
  for (let s = 1; s <= t; s++) {
    const r = /* @__PURE__ */ st(0, t, s);
    e.push(F(n, 1, r));
  }
}
function cl(e) {
  const t = [0];
  return ll(t, e.length - 1), t;
}
function ul(e, t) {
  return e.map((n) => n * t);
}
function dl(e, t) {
  return e.map(() => t || ai).splice(0, e.length - 1);
}
function Ne({ duration: e = 300, keyframes: t, times: n, ease: s = "easeInOut" }) {
  const r = Sa(s) ? s.map(Es) : Es(s), o = {
    done: !1,
    value: t[0]
  }, i = ul(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : cl(t),
    e
  ), a = al(i, t, {
    ease: Array.isArray(r) ? r : dl(t, r)
  });
  return {
    calculatedDuration: e,
    next: (l) => (o.value = a(l), o.done = l >= e, o)
  };
}
const fl = (e) => e !== null;
function Hn(e, { repeat: t, repeatType: n = "loop" }, s, r = 1) {
  const o = e.filter(fl), a = r < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !a || s === void 0 ? o[a] : s;
}
const hl = {
  decay: hn,
  inertia: hn,
  tween: Ne,
  keyframes: Ne,
  spring: kt
};
function bi(e) {
  typeof e.type == "string" && (e.type = hl[e.type]);
}
class zn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
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
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const ml = (e) => e / 100;
class Xn extends zn {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var s, r;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== ee.now() && this.tick(ee.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (r = (s = this.options).onStop) == null || r.call(s));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    bi(t);
    const { type: n = Ne, repeat: s = 0, repeatDelay: r = 0, repeatType: o, velocity: i = 0 } = t;
    let { keyframes: a } = t;
    const l = n || Ne;
    process.env.NODE_ENV !== "production" && l !== Ne && me(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== Ne && typeof a[0] != "number" && (this.mixKeyframes = ct(ml, yi(a[0], a[1])), a = [0, 100]);
    const u = l({ ...t, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -i
    })), u.calculatedDuration === null && (u.calculatedDuration = Gn(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + r, this.totalDuration = this.resolvedDuration * (s + 1) - r, this.generator = u;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: s, totalDuration: r, mixKeyframes: o, mirroredGenerator: i, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return s.next(0);
    const { delay: u = 0, keyframes: c, repeat: f, repeatType: m, repeatDelay: p, type: y, onUpdate: b, finalKeyframe: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - r / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const x = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), w = this.playbackSpeed >= 0 ? x < 0 : x > r;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
    let P = this.currentTime, V = s;
    if (f) {
      const R = Math.min(this.currentTime, r) / a;
      let Y = Math.floor(R), Z = R % 1;
      !Z && R >= 1 && (Z = 1), Z === 1 && Y--, Y = Math.min(Y, f + 1), !!(Y % 2) && (m === "reverse" ? (Z = 1 - Z, p && (Z -= p / a)) : m === "mirror" && (V = i)), P = he(0, 1, Z) * a;
    }
    const _ = w ? { done: !1, value: c[0] } : V.next(P);
    o && (_.value = o(_.value));
    let { done: N } = _;
    !w && l !== null && (N = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
    const I = this.holdTime === null && (this.state === "finished" || this.state === "running" && N);
    return I && y !== hn && (_.value = Hn(c, this.options, S, this.speed)), b && b(_.value), I && this.finish(), _;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return /* @__PURE__ */ re(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ re(t);
  }
  get time() {
    return /* @__PURE__ */ re(this.currentTime);
  }
  set time(t) {
    var n;
    t = /* @__PURE__ */ ae(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(ee.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ re(this.currentTime));
  }
  play() {
    var r, o;
    if (this.isStopped)
      return;
    const { driver: t = Za, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), (o = (r = this.options).onPlay) == null || o.call(r);
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = n ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ee.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var t, n;
    this.notifyFinished(), this.teardown(), this.state = "finished", (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), t.observe(this);
  }
}
function pl(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const _e = (e) => e * 180 / Math.PI, mn = (e) => {
  const t = _e(Math.atan2(e[1], e[0]));
  return pn(t);
}, gl = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: mn,
  rotateZ: mn,
  skewX: (e) => _e(Math.atan(e[1])),
  skewY: (e) => _e(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, pn = (e) => (e = e % 360, e < 0 && (e += 360), e), Fs = mn, Is = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Bs = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), yl = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Is,
  scaleY: Bs,
  scale: (e) => (Is(e) + Bs(e)) / 2,
  rotateX: (e) => pn(_e(Math.atan2(e[6], e[5]))),
  rotateY: (e) => pn(_e(Math.atan2(-e[2], e[0]))),
  rotateZ: Fs,
  rotate: Fs,
  skewX: (e) => _e(Math.atan(e[4])),
  skewY: (e) => _e(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function gn(e) {
  return e.includes("scale") ? 1 : 0;
}
function yn(e, t) {
  if (!e || e === "none")
    return gn(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, r;
  if (n)
    s = yl, r = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = gl, r = a;
  }
  if (!r)
    return gn(t);
  const o = s[t], i = r[1].split(",").map(vl);
  return typeof o == "function" ? o(i) : i[o];
}
const xl = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return yn(n, t);
};
function vl(e) {
  return parseFloat(e.trim());
}
const Ye = [
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
], Ge = new Set(Ye), $s = (e) => e === Ke || e === j, bl = /* @__PURE__ */ new Set(["x", "y", "z"]), wl = Ye.filter((e) => !bl.has(e));
function Tl(e) {
  const t = [];
  return wl.forEach((n) => {
    const s = e.getValue(n);
    s !== void 0 && (t.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const je = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => yn(t, "x"),
  y: (e, { transform: t }) => yn(t, "y")
};
je.translateX = je.x;
je.translateY = je.y;
const Ae = /* @__PURE__ */ new Set();
let xn = !1, vn = !1, bn = !1;
function wi() {
  if (vn) {
    const e = Array.from(Ae).filter((s) => s.needsMeasurement), t = new Set(e.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    t.forEach((s) => {
      const r = Tl(s);
      r.length && (n.set(s, r), s.render());
    }), e.forEach((s) => s.measureInitialState()), t.forEach((s) => {
      s.render();
      const r = n.get(s);
      r && r.forEach(([o, i]) => {
        var a;
        (a = s.getValue(o)) == null || a.set(i);
      });
    }), e.forEach((s) => s.measureEndState()), e.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  vn = !1, xn = !1, Ae.forEach((e) => e.complete(bn)), Ae.clear();
}
function Ti() {
  Ae.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (vn = !0);
  });
}
function Sl() {
  bn = !0, Ti(), wi(), bn = !1;
}
class qn {
  constructor(t, n, s, r, o, i = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = s, this.motionValue = r, this.element = o, this.isAsync = i;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Ae.add(this), xn || (xn = !0, L.read(Ti), L.resolveKeyframes(wi))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: s, motionValue: r } = this;
    if (t[0] === null) {
      const o = r == null ? void 0 : r.get(), i = t[t.length - 1];
      if (o !== void 0)
        t[0] = o;
      else if (s && n) {
        const a = s.readValue(n, i);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = i), r && o === void 0 && r.set(t[0]);
    }
    pl(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Ae.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ae.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Pl = (e) => e.startsWith("--");
function Cl(e, t, n) {
  Pl(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const _l = /* @__PURE__ */ Ln(() => window.ScrollTimeline !== void 0), jl = {};
function Al(e, t) {
  const n = /* @__PURE__ */ Ln(e);
  return () => jl[t] ?? n();
}
const Si = /* @__PURE__ */ Al(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Je = ([e, t, n, s]) => `cubic-bezier(${e}, ${t}, ${n}, ${s})`, Us = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Je([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Je([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Je([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Je([0.33, 1.53, 0.69, 0.99])
};
function Pi(e, t) {
  if (e)
    return typeof e == "function" ? Si() ? xi(e, t) : "ease-out" : li(e) ? Je(e) : Array.isArray(e) ? e.map((n) => Pi(n, t) || Us.easeOut) : Us[e];
}
function Rl(e, t, n, { delay: s = 0, duration: r = 300, repeat: o = 0, repeatType: i = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [t]: n
  };
  l && (c.offset = l);
  const f = Pi(a, r);
  Array.isArray(f) && (c.easing = f);
  const m = {
    delay: s,
    duration: r,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: o + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  };
  return u && (m.pseudoElement = u), e.animate(c, m);
}
function Ci(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function kl({ type: e, ...t }) {
  return Ci(e) && Si() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Vl extends zn {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: s, keyframes: r, pseudoElement: o, allowFlatten: i = !1, finalKeyframe: a, onComplete: l } = t;
    this.isPseudoElement = !!o, this.allowFlatten = i, this.options = t, me(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = kl(t);
    this.animation = Rl(n, s, r, u, o), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const c = Hn(r, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : Cl(n, s, c), this.animation.cancel();
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
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
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
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
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
    var t, n;
    this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t);
  }
  get duration() {
    var n, s;
    const t = ((s = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : s.call(n).duration) || 0;
    return /* @__PURE__ */ re(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ re(t);
  }
  get time() {
    return /* @__PURE__ */ re(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ ae(t);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, observe: n }) {
    var s;
    return this.allowFlatten && ((s = this.animation.effect) == null || s.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && _l() ? (this.animation.timeline = t, ie) : n(this);
  }
}
const _i = {
  anticipate: ri,
  backInOut: si,
  circInOut: oi
};
function El(e) {
  return e in _i;
}
function Dl(e) {
  typeof e.ease == "string" && El(e.ease) && (e.ease = _i[e.ease]);
}
const Ws = 10;
class Nl extends Vl {
  constructor(t) {
    Dl(t), bi(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: s, onComplete: r, element: o, ...i } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Xn({
      ...i,
      autoplay: !1
    }), l = /* @__PURE__ */ ae(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - Ws).value, a.sample(l).value, Ws), a.stop();
  }
}
const Ks = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(be.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Ml(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function Ll(e, t, n, s) {
  const r = e[0];
  if (r === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], i = Ks(r, t), a = Ks(o, t);
  return We(i === a, `You are trying to animate ${t} from "${r}" to "${o}". "${i ? o : r}" is not an animatable value.`, "value-not-animatable"), !i || !a ? !1 : Ml(e) || (n === "spring" || Ci(n)) && s;
}
function wn(e) {
  e.duration = 0, e.type = "keyframes";
}
const Ol = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), Fl = /* @__PURE__ */ Ln(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Il(e) {
  var c;
  const { motionValue: t, name: n, repeatDelay: s, repeatType: r, damping: o, type: i } = e;
  if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return Fl() && n && Ol.has(n) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !s && r !== "mirror" && o !== 0 && i !== "inertia";
}
const Bl = 40;
class $l extends zn {
  constructor({ autoplay: t = !0, delay: n = 0, type: s = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: i = "loop", keyframes: a, name: l, motionValue: u, element: c, ...f }) {
    var y;
    super(), this.stop = () => {
      var b, S;
      this._animation && (this._animation.stop(), (b = this.stopTimeline) == null || b.call(this)), (S = this.keyframeResolver) == null || S.cancel();
    }, this.createdAt = ee.now();
    const m = {
      autoplay: t,
      delay: n,
      type: s,
      repeat: r,
      repeatDelay: o,
      repeatType: i,
      name: l,
      motionValue: u,
      element: c,
      ...f
    }, p = (c == null ? void 0 : c.KeyframeResolver) || qn;
    this.keyframeResolver = new p(a, (b, S, x) => this.onKeyframesResolved(b, S, m, !x), l, u, c), (y = this.keyframeResolver) == null || y.scheduleResolve();
  }
  onKeyframesResolved(t, n, s, r) {
    this.keyframeResolver = void 0;
    const { name: o, type: i, velocity: a, delay: l, isHandoff: u, onUpdate: c } = s;
    this.resolvedAt = ee.now(), Ll(t, o, i, a) || ((pe.instantAnimations || !l) && (c == null || c(Hn(t, s, n))), t[0] = t[t.length - 1], wn(s), s.repeat = 0);
    const m = {
      startTime: r ? this.resolvedAt ? this.resolvedAt - this.createdAt > Bl ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...s,
      keyframes: t
    }, p = !u && Il(m) ? new Nl({
      ...m,
      element: m.motionValue.owner.current
    }) : new Xn(m);
    p.finished.then(() => this.notifyFinished()).catch(ie), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    var t;
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), Sl()), this._animation;
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
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
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
    var t;
    this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel();
  }
}
const Ul = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Wl(e) {
  const t = Ul.exec(e);
  if (!t)
    return [,];
  const [, n, s, r] = t;
  return [`--${n ?? s}`, r];
}
const Kl = 4;
function ji(e, t, n = 1) {
  me(n <= Kl, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [s, r] = Wl(e);
  if (!s)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(s);
  if (o) {
    const i = o.trim();
    return Xr(i) ? parseFloat(i) : i;
  }
  return Un(r) ? ji(r, t, n + 1) : r;
}
function Zn(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Ai = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ye
]), Yl = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Ri = (e) => (t) => t.test(e), ki = [Ke, j, de, xe, Ma, Na, Yl], Ys = (e) => ki.find(Ri(e));
function Gl(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Zr(e) : !0;
}
const Hl = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function zl(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [s] = n.match(Wn) || [];
  if (!s)
    return e;
  const r = n.replace(s, "");
  let o = Hl.has(t) ? 1 : 0;
  return s !== n && (o *= 100), t + "(" + o + r + ")";
}
const Xl = /\b([a-z-]*)\(.*?\)/gu, Tn = {
  ...be,
  getAnimatableNone: (e) => {
    const t = e.match(Xl);
    return t ? t.map(zl).join(" ") : e;
  }
}, Gs = {
  ...Ke,
  transform: Math.round
}, ql = {
  rotate: xe,
  rotateX: xe,
  rotateY: xe,
  rotateZ: xe,
  scale: bt,
  scaleX: bt,
  scaleY: bt,
  scaleZ: bt,
  skew: xe,
  skewX: xe,
  skewY: xe,
  distance: j,
  translateX: j,
  translateY: j,
  translateZ: j,
  x: j,
  y: j,
  z: j,
  perspective: j,
  transformPerspective: j,
  opacity: rt,
  originX: Ds,
  originY: Ds,
  originZ: j
}, Jn = {
  // Border props
  borderWidth: j,
  borderTopWidth: j,
  borderRightWidth: j,
  borderBottomWidth: j,
  borderLeftWidth: j,
  borderRadius: j,
  radius: j,
  borderTopLeftRadius: j,
  borderTopRightRadius: j,
  borderBottomRightRadius: j,
  borderBottomLeftRadius: j,
  // Positioning props
  width: j,
  maxWidth: j,
  height: j,
  maxHeight: j,
  top: j,
  right: j,
  bottom: j,
  left: j,
  // Spacing props
  padding: j,
  paddingTop: j,
  paddingRight: j,
  paddingBottom: j,
  paddingLeft: j,
  margin: j,
  marginTop: j,
  marginRight: j,
  marginBottom: j,
  marginLeft: j,
  // Misc
  backgroundPositionX: j,
  backgroundPositionY: j,
  ...ql,
  zIndex: Gs,
  // SVG
  fillOpacity: rt,
  strokeOpacity: rt,
  numOctaves: Gs
}, Zl = {
  ...Jn,
  // Color props
  color: K,
  backgroundColor: K,
  outlineColor: K,
  fill: K,
  stroke: K,
  // Border props
  borderColor: K,
  borderTopColor: K,
  borderRightColor: K,
  borderBottomColor: K,
  borderLeftColor: K,
  filter: Tn,
  WebkitFilter: Tn
}, Vi = (e) => Zl[e];
function Ei(e, t) {
  let n = Vi(e);
  return n !== Tn && (n = be), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Jl = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Ql(e, t, n) {
  let s = 0, r;
  for (; s < e.length && !r; ) {
    const o = e[s];
    typeof o == "string" && !Jl.has(o) && it(o).values.length && (r = e[s]), s++;
  }
  if (r && n)
    for (const o of t)
      e[o] = Ei(n, r);
}
class ec extends qn {
  constructor(t, n, s, r, o) {
    super(t, n, s, r, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && (u = u.trim(), Un(u))) {
        const c = ji(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Ai.has(s) || t.length !== 2)
      return;
    const [r, o] = t, i = Ys(r), a = Ys(o);
    if (i !== a)
      if ($s(i) && $s(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else je[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, s = [];
    for (let r = 0; r < t.length; r++)
      (t[r] === null || Gl(t[r])) && s.push(r);
    s.length && Ql(t, s, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: s } = this;
    if (!t || !t.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = je[s](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const r = n[n.length - 1];
    r !== void 0 && t.getValue(s, r).jump(r, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: s } = this;
    if (!t || !t.current)
      return;
    const r = t.getValue(n);
    r && r.jump(this.measuredOrigin, !1);
    const o = s.length - 1, i = s[o];
    s[o] = je[n](t.measureViewportBox(), window.getComputedStyle(t.current)), i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
      t.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function tc(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let s = document;
    const r = (n == null ? void 0 : n[e]) ?? s.querySelectorAll(e);
    return r ? Array.from(r) : [];
  }
  return Array.from(e);
}
const Di = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function nc(e) {
  return qr(e) && "offsetHeight" in e;
}
const Hs = 30, sc = (e) => !isNaN(parseFloat(e));
class rc {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s) => {
      var o;
      const r = ee.now();
      if (this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && ((o = this.events.change) == null || o.notify(this.current), this.dependents))
        for (const i of this.dependents)
          i.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = ee.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = sc(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
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
  onChange(t) {
    return process.env.NODE_ENV !== "production" && Fn(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new On());
    const s = this.events[t].add(n);
    return t === "change" ? () => {
      s(), L.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
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
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
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
    const t = ee.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Hs)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Hs);
    return Jr(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
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
    var t, n;
    (t = this.dependents) == null || t.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Be(e, t) {
  return new rc(e, t);
}
const { schedule: Qn } = /* @__PURE__ */ ci(queueMicrotask, !1), oe = {
  x: !1,
  y: !1
};
function Ni() {
  return oe.x || oe.y;
}
function ic(e) {
  return e === "x" || e === "y" ? oe[e] ? null : (oe[e] = !0, () => {
    oe[e] = !1;
  }) : oe.x || oe.y ? null : (oe.x = oe.y = !0, () => {
    oe.x = oe.y = !1;
  });
}
function Mi(e, t) {
  const n = tc(e), s = new AbortController(), r = {
    passive: !0,
    ...t,
    signal: s.signal
  };
  return [n, r, () => s.abort()];
}
function zs(e) {
  return !(e.pointerType === "touch" || Ni());
}
function oc(e, t, n = {}) {
  const [s, r, o] = Mi(e, n), i = (a) => {
    if (!zs(a))
      return;
    const { target: l } = a, u = t(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (f) => {
      zs(f) && (u(f), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, r);
  };
  return s.forEach((a) => {
    a.addEventListener("pointerenter", i, r);
  }), o;
}
const Li = (e, t) => t ? e === t ? !0 : Li(e, t.parentElement) : !1, es = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, ac = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function lc(e) {
  return ac.has(e.tagName) || e.tabIndex !== -1;
}
const Ct = /* @__PURE__ */ new WeakSet();
function Xs(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Jt(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const cc = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const s = Xs(() => {
    if (Ct.has(n))
      return;
    Jt(n, "down");
    const r = Xs(() => {
      Jt(n, "up");
    }), o = () => Jt(n, "cancel");
    n.addEventListener("keyup", r, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", s, t), n.addEventListener("blur", () => n.removeEventListener("keydown", s), t);
};
function qs(e) {
  return es(e) && !Ni();
}
function uc(e, t, n = {}) {
  const [s, r, o] = Mi(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!qs(a))
      return;
    Ct.add(l);
    const u = t(l, a), c = (p, y) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", m), Ct.has(l) && Ct.delete(l), qs(p) && typeof u == "function" && u(p, { success: y });
    }, f = (p) => {
      c(p, l === window || l === document || n.useGlobalTarget || Li(l, p.target));
    }, m = (p) => {
      c(p, !1);
    };
    window.addEventListener("pointerup", f, r), window.addEventListener("pointercancel", m, r);
  };
  return s.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, r), nc(a) && (a.addEventListener("focus", (u) => cc(u, r)), !lc(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function Oi(e) {
  return qr(e) && "ownerSVGElement" in e;
}
function dc(e) {
  return Oi(e) && e.tagName === "svg";
}
const H = (e) => !!(e && e.getVelocity), fc = [...ki, K, be], hc = (e) => fc.find(Ri(e)), Fi = Ue({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function mc(e = !0) {
  const t = Q(Dn);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: s, register: r } = t, o = aa();
  Vn(() => {
    if (e)
      return r(o);
  }, [e]);
  const i = Yr(() => e && s && s(o), [o, s, e]);
  return !n && s ? [!1, i] : [!0];
}
const Ii = Ue({ strict: !1 }), Zs = {
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
}, $e = {};
for (const e in Zs)
  $e[e] = {
    isEnabled: (t) => Zs[e].some((n) => !!t[n])
  };
function pc(e) {
  for (const t in e)
    $e[t] = {
      ...$e[t],
      ...e[t]
    };
}
const gc = /* @__PURE__ */ new Set([
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
function Vt(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || gc.has(e);
}
let Bi = (e) => !Vt(e);
function yc(e) {
  typeof e == "function" && (Bi = (t) => t.startsWith("on") ? !Vt(t) : e(t));
}
try {
  yc(require("@emotion/is-prop-valid").default);
} catch {
}
function xc(e, t, n) {
  const s = {};
  for (const r in e)
    r === "values" && typeof e.values == "object" || (Bi(r) || n === !0 && Vt(r) || !t && !Vt(r) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && r.startsWith("onDrag")) && (s[r] = e[r]);
  return s;
}
const Mt = /* @__PURE__ */ Ue({});
function Lt(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function ot(e) {
  return typeof e == "string" || Array.isArray(e);
}
const ts = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ns = ["initial", ...ts];
function Ot(e) {
  return Lt(e.animate) || ns.some((t) => ot(e[t]));
}
function $i(e) {
  return !!(Ot(e) || e.variants);
}
function vc(e, t) {
  if (Ot(e)) {
    const { initial: n, animate: s } = e;
    return {
      initial: n === !1 || ot(n) ? n : void 0,
      animate: ot(s) ? s : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function bc(e) {
  const { initial: t, animate: n } = vc(e, Q(Mt));
  return Nt(() => ({ initial: t, animate: n }), [Js(t), Js(n)]);
}
function Js(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const at = {};
function wc(e) {
  for (const t in e)
    at[t] = e[t], $n(t) && (at[t].isCSSVariable = !0);
}
function Ui(e, { layout: t, layoutId: n }) {
  return Ge.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!at[e] || e === "opacity");
}
const Tc = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Sc = Ye.length;
function Pc(e, t, n) {
  let s = "", r = !0;
  for (let o = 0; o < Sc; o++) {
    const i = Ye[o], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Di(a, Jn[i]);
      if (!l) {
        r = !1;
        const c = Tc[i] || i;
        s += `${c}(${u}) `;
      }
      n && (t[i] = u);
    }
  }
  return s = s.trim(), n ? s = n(t, r ? "" : s) : r && (s = "none"), s;
}
function ss(e, t, n) {
  const { style: s, vars: r, transformOrigin: o } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const u = t[l];
    if (Ge.has(l)) {
      i = !0;
      continue;
    } else if ($n(l)) {
      r[l] = u;
      continue;
    } else {
      const c = Di(u, Jn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : s[l] = c;
    }
  }
  if (t.transform || (i || n ? s.transform = Pc(t, e.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
const rs = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Wi(e, t, n) {
  for (const s in t)
    !H(t[s]) && !Ui(s, n) && (e[s] = t[s]);
}
function Cc({ transformTemplate: e }, t) {
  return Nt(() => {
    const n = rs();
    return ss(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function _c(e, t) {
  const n = e.style || {}, s = {};
  return Wi(s, n, e), Object.assign(s, Cc(e, t)), s;
}
function jc(e, t) {
  const n = {}, s = _c(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const Ac = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Rc = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function kc(e, t, n = 1, s = 0, r = !0) {
  e.pathLength = 1;
  const o = r ? Ac : Rc;
  e[o.offset] = j.transform(-s);
  const i = j.transform(t), a = j.transform(n);
  e[o.array] = `${i} ${a}`;
}
function Ki(e, {
  attrX: t,
  attrY: n,
  attrScale: s,
  pathLength: r,
  pathSpacing: o = 1,
  pathOffset: i = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, u, c) {
  if (ss(e, a, u), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: m } = e;
  f.transform && (m.transform = f.transform, delete f.transform), (m.transform || f.transformOrigin) && (m.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), m.transform && (m.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete f.transformBox), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), s !== void 0 && (f.scale = s), r !== void 0 && kc(f, r, o, i, !1);
}
const Yi = () => ({
  ...rs(),
  attrs: {}
}), Gi = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Vc(e, t, n, s) {
  const r = Nt(() => {
    const o = Yi();
    return Ki(o, t, Gi(s), e.transformTemplate, e.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    Wi(o, e.style, e), r.style = { ...o, ...r.style };
  }
  return r;
}
const Ec = [
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
function is(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Ec.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Dc(e, t, n, { latestValues: s }, r, o = !1) {
  const a = (is(e) ? Vc : jc)(t, s, r, e), l = xc(t, typeof e == "string", o), u = e !== Gr ? { ...l, ...a, ref: n } : {}, { children: c } = t, f = Nt(() => H(c) ? c.get() : c, [c]);
  return la(e, {
    ...u,
    children: f
  });
}
function Qs(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, s) => {
    t[0][s] = n.get(), t[1][s] = n.getVelocity();
  }), t;
}
function os(e, t, n, s) {
  if (typeof t == "function") {
    const [r, o] = Qs(s);
    t = t(n !== void 0 ? n : e.custom, r, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [r, o] = Qs(s);
    t = t(n !== void 0 ? n : e.custom, r, o);
  }
  return t;
}
function _t(e) {
  return H(e) ? e.get() : e;
}
function Nc({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, s, r) {
  return {
    latestValues: Mc(n, s, r, e),
    renderState: t()
  };
}
function Mc(e, t, n, s) {
  const r = {}, o = s(e, {});
  for (const m in o)
    r[m] = _t(o[m]);
  let { initial: i, animate: a } = e;
  const l = Ot(e), u = $i(e);
  t && u && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || i === !1;
  const f = c ? a : i;
  if (f && typeof f != "boolean" && !Lt(f)) {
    const m = Array.isArray(f) ? f : [f];
    for (let p = 0; p < m.length; p++) {
      const y = os(e, m[p]);
      if (y) {
        const { transitionEnd: b, transition: S, ...x } = y;
        for (const w in x) {
          let P = x[w];
          if (Array.isArray(P)) {
            const V = c ? P.length - 1 : 0;
            P = P[V];
          }
          P !== null && (r[w] = P);
        }
        for (const w in b)
          r[w] = b[w];
      }
    }
  }
  return r;
}
const Hi = (e) => (t, n) => {
  const s = Q(Mt), r = Q(Dn), o = () => Nc(e, t, s, r);
  return n ? o() : pa(o);
};
function as(e, t, n) {
  var o;
  const { style: s } = e, r = {};
  for (const i in s)
    (H(s[i]) || t.style && H(t.style[i]) || Ui(i, e) || ((o = n == null ? void 0 : n.getValue(i)) == null ? void 0 : o.liveStyle) !== void 0) && (r[i] = s[i]);
  return r;
}
const Lc = /* @__PURE__ */ Hi({
  scrapeMotionValuesFromProps: as,
  createRenderState: rs
});
function zi(e, t, n) {
  const s = as(e, t, n);
  for (const r in e)
    if (H(e[r]) || H(t[r])) {
      const o = Ye.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      s[o] = e[r];
    }
  return s;
}
const Oc = /* @__PURE__ */ Hi({
  scrapeMotionValuesFromProps: zi,
  createRenderState: Yi
}), Fc = Symbol.for("motionComponentSymbol");
function Me(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Ic(e, t, n) {
  return Yr(
    (s) => {
      s && e.onMount && e.onMount(s), t && (s ? t.mount(s) : t.unmount()), n && (typeof n == "function" ? n(s) : Me(n) && (n.current = s));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [t]
  );
}
const ls = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Bc = "framerAppearId", Xi = "data-" + ls(Bc), qi = Ue({});
function $c(e, t, n, s, r) {
  var b, S;
  const { visualElement: o } = Q(Mt), i = Q(Ii), a = Q(Dn), l = Q(Fi).reducedMotion, u = St(null);
  s = s || i.renderer, !u.current && s && (u.current = s(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, f = Q(qi);
  c && !c.projection && r && (c.type === "html" || c.type === "svg") && Uc(u.current, n, r, f);
  const m = St(!1);
  ca(() => {
    c && m.current && c.update(n, a);
  });
  const p = n[Xi], y = St(!!p && !((b = window.MotionHandoffIsComplete) != null && b.call(window, p)) && ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, p)));
  return ga(() => {
    c && (m.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), y.current && c.animationState && c.animationState.animateChanges());
  }), Vn(() => {
    c && (!y.current && c.animationState && c.animationState.animateChanges(), y.current && (queueMicrotask(() => {
      var x;
      (x = window.MotionHandoffMarkAsComplete) == null || x.call(window, p);
    }), y.current = !1), c.enteringChildren = void 0);
  }), c;
}
function Uc(e, t, n, s) {
  const { layoutId: r, layout: o, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Zi(e.parent)), e.projection.setOptions({
    layoutId: r,
    layout: o,
    alwaysMeasureLayout: !!i || a && Me(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: s,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: u
  });
}
function Zi(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Zi(e.parent);
}
function Qt(e, { forwardMotionProps: t = !1 } = {}, n, s) {
  n && pc(n);
  const r = is(e) ? Oc : Lc;
  function o(a, l) {
    let u;
    const c = {
      ...Q(Fi),
      ...a,
      layoutId: Wc(a)
    }, { isStatic: f } = c, m = bc(a), p = r(a, f);
    if (!f && En) {
      Kc(c, n);
      const y = Yc(c);
      u = y.MeasureLayout, m.visualElement = $c(e, p, c, s, y.ProjectionNode);
    }
    return h.jsxs(Mt.Provider, { value: m, children: [u && m.visualElement ? h.jsx(u, { visualElement: m.visualElement, ...c }) : null, Dc(e, a, Ic(p, m.visualElement, l), p, f, t)] });
  }
  o.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const i = ua(o);
  return i[Fc] = e, i;
}
function Wc({ layoutId: e }) {
  const t = Q(zr).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Kc(e, t) {
  const n = Q(Ii).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? We(!1, s, "lazy-strict-mode") : me(!1, s, "lazy-strict-mode");
  }
}
function Yc(e) {
  const { drag: t, layout: n } = $e;
  if (!t && !n)
    return {};
  const s = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
function Gc(e, t) {
  if (typeof Proxy > "u")
    return Qt;
  const n = /* @__PURE__ */ new Map(), s = (o, i) => Qt(o, i, e, t), r = (o, i) => (process.env.NODE_ENV !== "production" && Fn(!1, "motion() is deprecated. Use motion.create() instead."), s(o, i));
  return new Proxy(r, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, i) => i === "create" ? s : (n.has(i) || n.set(i, Qt(i, void 0, e, t)), n.get(i))
  });
}
function Ji({ top: e, left: t, right: n, bottom: s }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: s }
  };
}
function Hc({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function zc(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), s = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
function en(e) {
  return e === void 0 || e === 1;
}
function Sn({ scale: e, scaleX: t, scaleY: n }) {
  return !en(e) || !en(t) || !en(n);
}
function Pe(e) {
  return Sn(e) || Qi(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Qi(e) {
  return er(e.x) || er(e.y);
}
function er(e) {
  return e && e !== "0%";
}
function Et(e, t, n) {
  const s = e - n, r = t * s;
  return n + r;
}
function tr(e, t, n, s, r) {
  return r !== void 0 && (e = Et(e, r, s)), Et(e, n, s) + t;
}
function Pn(e, t = 0, n = 1, s, r) {
  e.min = tr(e.min, t, n, s, r), e.max = tr(e.max, t, n, s, r);
}
function eo(e, { x: t, y: n }) {
  Pn(e.x, t.translate, t.scale, t.originPoint), Pn(e.y, n.translate, n.scale, n.originPoint);
}
const nr = 0.999999999999, sr = 1.0000000000001;
function Xc(e, t, n, s = !1) {
  const r = n.length;
  if (!r)
    return;
  t.x = t.y = 1;
  let o, i;
  for (let a = 0; a < r; a++) {
    o = n[a], i = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && Oe(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, eo(e, i)), s && Pe(o.latestValues) && Oe(e, o.latestValues));
  }
  t.x < sr && t.x > nr && (t.x = 1), t.y < sr && t.y > nr && (t.y = 1);
}
function Le(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function rr(e, t, n, s, r = 0.5) {
  const o = F(e.min, e.max, r);
  Pn(e, t, n, o, s);
}
function Oe(e, t) {
  rr(e.x, t.x, t.scaleX, t.scale, t.originX), rr(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function to(e, t) {
  return Ji(zc(e.getBoundingClientRect(), t));
}
function qc(e, t, n) {
  const s = to(e, n), { scroll: r } = t;
  return r && (Le(s.x, r.offset.x), Le(s.y, r.offset.y)), s;
}
const ir = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Fe = () => ({
  x: ir(),
  y: ir()
}), or = () => ({ min: 0, max: 0 }), $ = () => ({
  x: or(),
  y: or()
}), Cn = { current: null }, no = { current: !1 };
function Zc() {
  if (no.current = !0, !!En)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Cn.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Cn.current = !1;
}
const Jc = /* @__PURE__ */ new WeakMap();
function Qc(e, t, n) {
  for (const s in t) {
    const r = t[s], o = n[s];
    if (H(r))
      e.addValue(s, r);
    else if (H(o))
      e.addValue(s, Be(r, { owner: e }));
    else if (o !== r)
      if (e.hasValue(s)) {
        const i = e.getValue(s);
        i.liveStyle === !0 ? i.jump(r) : i.hasAnimated || i.set(r);
      } else {
        const i = e.getStaticValue(s);
        e.addValue(s, Be(i !== void 0 ? i : r, { owner: e }));
      }
  }
  for (const s in n)
    t[s] === void 0 && e.removeValue(s);
  return t;
}
const ar = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class eu {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, s) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: s, reducedMotionConfig: r, blockInitialAnimation: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = qn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const m = ee.now();
      this.renderScheduledAt < m && (this.renderScheduledAt = m, L.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = i;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = s, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Ot(n), this.isVariantNode = $i(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const m in f) {
      const p = f[m];
      l[m] !== void 0 && H(p) && p.set(l[m]);
    }
  }
  mount(t) {
    var n;
    this.current = t, Jc.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((s, r) => this.bindToMotionValue(r, s)), no.current || Zc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Cn.current, process.env.NODE_ENV !== "production" && Fn(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), (n = this.parent) == null || n.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(), ve(this.notifyUpdate), ve(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features) {
      const s = this.features[n];
      s && (s.unmount(), s.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const s = Ge.has(t);
    s && this.onBindTransform && this.onBindTransform();
    const r = n.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && L.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      r(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in $e) {
      const n = $e[t];
      if (!n)
        continue;
      const { isEnabled: s, Feature: r } = n;
      if (!this.features[t] && r && s(this.props) && (this.features[t] = new r(this)), this.features[t]) {
        const o = this.features[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : $();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < ar.length; s++) {
      const r = ar[s];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const o = "on" + r, i = t[o];
      i && (this.propEventSubscriptions[r] = this.on(r, i));
    }
    this.prevMotionValues = Qc(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
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
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const s = this.values.get(t);
    n !== s && (s && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let s = this.values.get(t);
    return s === void 0 && n !== void 0 && (s = Be(n === null ? void 0 : n, { owner: this }), this.addValue(t, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && (Xr(s) || Zr(s)) ? s = parseFloat(s) : !hc(s) && be.test(n) && (s = Ei(t, n)), this.setBaseTarget(t, H(s) ? s.get() : s)), H(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var o;
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const i = os(this.props, n, (o = this.presenceContext) == null ? void 0 : o.custom);
      i && (s = i[t]);
    }
    if (n && s !== void 0)
      return s;
    const r = this.getBaseTargetFromProps(this.props, t);
    return r !== void 0 && !H(r) ? r : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new On()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Qn.render(this.render);
  }
}
class so extends eu {
  constructor() {
    super(...arguments), this.KeyframeResolver = ec;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: s }) {
    delete n[t], delete s[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    H(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function ro(e, { style: t, vars: n }, s, r) {
  const o = e.style;
  let i;
  for (i in t)
    o[i] = t[i];
  r == null || r.applyProjectionStyles(o, s);
  for (i in n)
    o.setProperty(i, n[i]);
}
function tu(e) {
  return window.getComputedStyle(e);
}
class nu extends so {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = ro;
  }
  readValueFromInstance(t, n) {
    var s;
    if (Ge.has(n))
      return (s = this.projection) != null && s.isProjecting ? gn(n) : xl(t, n);
    {
      const r = tu(t), o = ($n(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return to(t, n);
  }
  build(t, n, s) {
    ss(t, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return as(t, n, s);
  }
}
const io = /* @__PURE__ */ new Set([
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
function su(e, t, n, s) {
  ro(e, t, void 0, s);
  for (const r in t.attrs)
    e.setAttribute(io.has(r) ? r : ls(r), t.attrs[r]);
}
class ru extends so {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = $;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ge.has(n)) {
      const s = Vi(n);
      return s && s.default || 0;
    }
    return n = io.has(n) ? n : ls(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return zi(t, n, s);
  }
  build(t, n, s) {
    Ki(t, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(t, n, s, r) {
    su(t, n, s, r);
  }
  mount(t) {
    this.isSVGTag = Gi(t.tagName), super.mount(t);
  }
}
const iu = (e, t) => is(e) ? new ru(t) : new nu(t, {
  allowProjection: e !== Gr
});
function Ie(e, t, n) {
  const s = e.getProps();
  return os(s, t, n !== void 0 ? n : s.custom, e);
}
const _n = (e) => Array.isArray(e);
function ou(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Be(n));
}
function au(e) {
  return _n(e) ? e[e.length - 1] || 0 : e;
}
function lu(e, t) {
  const n = Ie(e, t);
  let { transitionEnd: s = {}, transition: r = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const i in o) {
    const a = au(o[i]);
    ou(e, i, a);
  }
}
function cu(e) {
  return !!(H(e) && e.add);
}
function jn(e, t) {
  const n = e.getValue("willChange");
  if (cu(n))
    return n.add(t);
  if (!n && pe.WillChange) {
    const s = new pe.WillChange("auto");
    e.addValue("willChange", s), s.add(t);
  }
}
function oo(e) {
  return e.props[Xi];
}
const uu = (e) => e !== null;
function du(e, { repeat: t, repeatType: n = "loop" }, s) {
  const r = e.filter(uu), o = t && n !== "loop" && t % 2 === 1 ? 0 : r.length - 1;
  return r[o];
}
const fu = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, hu = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), mu = {
  type: "keyframes",
  duration: 0.8
}, pu = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, gu = (e, { keyframes: t }) => t.length > 2 ? mu : Ge.has(e) ? e.startsWith("scale") ? hu(t[1]) : fu : pu;
function yu({ when: e, delay: t, delayChildren: n, staggerChildren: s, staggerDirection: r, repeat: o, repeatType: i, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const cs = (e, t, n, s = {}, r, o) => (i) => {
  const a = Zn(s, e) || {}, l = a.delay || s.delay || 0;
  let { elapsed: u = 0 } = s;
  u = u - /* @__PURE__ */ ae(l);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (m) => {
      t.set(m), a.onUpdate && a.onUpdate(m);
    },
    onComplete: () => {
      i(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: o ? void 0 : r
  };
  yu(a) || Object.assign(c, gu(e, c)), c.duration && (c.duration = /* @__PURE__ */ ae(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ ae(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (wn(c), c.delay === 0 && (f = !0)), (pe.instantAnimations || pe.skipAnimations) && (f = !0, wn(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, f && !o && t.get() !== void 0) {
    const m = du(c.keyframes, a);
    if (m !== void 0) {
      L.update(() => {
        c.onUpdate(m), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Xn(c) : new $l(c);
};
function xu({ protectedKeys: e, needsAnimating: t }, n) {
  const s = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, s;
}
function ao(e, t, { delay: n = 0, transitionOverride: s, type: r } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: i, ...a } = t;
  s && (o = s);
  const l = [], u = r && e.animationState && e.animationState.getState()[r];
  for (const c in a) {
    const f = e.getValue(c, e.latestValues[c] ?? null), m = a[c];
    if (m === void 0 || u && xu(u, c))
      continue;
    const p = {
      delay: n,
      ...Zn(o || {}, c)
    }, y = f.get();
    if (y !== void 0 && !f.isAnimating && !Array.isArray(m) && m === y && !p.velocity)
      continue;
    let b = !1;
    if (window.MotionHandoffAnimation) {
      const x = oo(e);
      if (x) {
        const w = window.MotionHandoffAnimation(x, c, L);
        w !== null && (p.startTime = w, b = !0);
      }
    }
    jn(e, c), f.start(cs(c, f, m, e.shouldReduceMotion && Ai.has(c) ? { type: !1 } : p, e, b));
    const S = f.animation;
    S && l.push(S);
  }
  return i && Promise.all(l).then(() => {
    L.update(() => {
      i && lu(e, i);
    });
  }), l;
}
function lo(e, t, n, s = 0, r = 1) {
  const o = Array.from(e).sort((u, c) => u.sortNodePosition(c)).indexOf(t), i = e.size, a = (i - 1) * s;
  return typeof n == "function" ? n(o, i) : r === 1 ? o * s : a - o * s;
}
function An(e, t, n = {}) {
  var l;
  const s = Ie(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: r = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (r = n.transitionOverride);
  const o = s ? () => Promise.all(ao(e, s, n)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: f, staggerDirection: m } = r;
    return vu(e, t, u, c, f, m, n);
  } : () => Promise.resolve(), { when: a } = r;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, i] : [i, o];
    return u().then(() => c());
  } else
    return Promise.all([o(), i(n.delay)]);
}
function vu(e, t, n = 0, s = 0, r = 0, o = 1, i) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), a.push(An(l, t, {
      ...i,
      delay: n + (typeof s == "function" ? 0 : s) + lo(e.variantChildren, l, s, r, o)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function bu(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let s;
  if (Array.isArray(t)) {
    const r = t.map((o) => An(e, o, n));
    s = Promise.all(r);
  } else if (typeof t == "string")
    s = An(e, t, n);
  else {
    const r = typeof t == "function" ? Ie(e, t, n.custom) : t;
    s = Promise.all(ao(e, r, n));
  }
  return s.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function co(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (t[s] !== e[s])
      return !1;
  return !0;
}
const wu = ns.length;
function uo(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? uo(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < wu; n++) {
    const s = ns[n], r = e.props[s];
    (ot(r) || r === !1) && (t[s] = r);
  }
  return t;
}
const Tu = [...ts].reverse(), Su = ts.length;
function Pu(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: s }) => bu(e, n, s)));
}
function Cu(e) {
  let t = Pu(e), n = lr(), s = !0;
  const r = (l) => (u, c) => {
    var m;
    const f = Ie(e, c, l === "exit" ? (m = e.presenceContext) == null ? void 0 : m.custom : void 0);
    if (f) {
      const { transition: p, transitionEnd: y, ...b } = f;
      u = { ...u, ...b, ...y };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function i(l) {
    const { props: u } = e, c = uo(e.parent) || {}, f = [], m = /* @__PURE__ */ new Set();
    let p = {}, y = 1 / 0;
    for (let S = 0; S < Su; S++) {
      const x = Tu[S], w = n[x], P = u[x] !== void 0 ? u[x] : c[x], V = ot(P), _ = x === l ? w.isActive : null;
      _ === !1 && (y = S);
      let N = P === c[x] && P !== u[x] && V;
      if (N && s && e.manuallyAnimateOnMount && (N = !1), w.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && _ === null || // If we didn't and don't have any defined prop for this animation type
      !P && !w.prevProp || // Or if the prop doesn't define an animation
      Lt(P) || typeof P == "boolean")
        continue;
      const I = _u(w.prevProp, P);
      let R = I || // If we're making this variant active, we want to always make it active
      x === l && w.isActive && !N && V || // If we removed a higher-priority variant (i is in reverse order)
      S > y && V, Y = !1;
      const Z = Array.isArray(P) ? P : [P];
      let ge = Z.reduce(r(x), {});
      _ === !1 && (ge = {});
      const { prevResolvedValues: He = {} } = w, le = {
        ...He,
        ...ge
      }, ce = (U) => {
        R = !0, m.has(U) && (Y = !0, m.delete(U)), w.needsAnimating[U] = !0;
        const z = e.getValue(U);
        z && (z.liveStyle = !1);
      };
      for (const U in le) {
        const z = ge[U], ue = He[U];
        if (p.hasOwnProperty(U))
          continue;
        let fe = !1;
        _n(z) && _n(ue) ? fe = !co(z, ue) : fe = z !== ue, fe ? z != null ? ce(U) : m.add(U) : z !== void 0 && m.has(U) ? ce(U) : w.protectedKeys[U] = !0;
      }
      w.prevProp = P, w.prevResolvedValues = ge, w.isActive && (p = { ...p, ...ge }), s && e.blockInitialAnimation && (R = !1);
      const ye = N && I;
      R && (!ye || Y) && f.push(...Z.map((U) => {
        const z = { type: x };
        if (typeof U == "string" && s && !ye && e.manuallyAnimateOnMount && e.parent) {
          const { parent: ue } = e, fe = Ie(ue, U);
          if (ue.enteringChildren && fe) {
            const { delayChildren: ht } = fe.transition || {};
            z.delay = lo(ue.enteringChildren, e, ht);
          }
        }
        return {
          animation: U,
          options: z
        };
      }));
    }
    if (m.size) {
      const S = {};
      if (typeof u.initial != "boolean") {
        const x = Ie(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        x && x.transition && (S.transition = x.transition);
      }
      m.forEach((x) => {
        const w = e.getBaseTarget(x), P = e.getValue(x);
        P && (P.liveStyle = !0), S[x] = w ?? null;
      }), f.push({ animation: S });
    }
    let b = !!f.length;
    return s && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (b = !1), s = !1, b ? t(f) : Promise.resolve();
  }
  function a(l, u) {
    var f;
    if (n[l].isActive === u)
      return Promise.resolve();
    (f = e.variantChildren) == null || f.forEach((m) => {
      var p;
      return (p = m.animationState) == null ? void 0 : p.setActive(l, u);
    }), n[l].isActive = u;
    const c = i(l);
    for (const m in n)
      n[m].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = lr();
    }
  };
}
function _u(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !co(t, e) : !1;
}
function Se(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function lr() {
  return {
    animate: Se(!0),
    whileInView: Se(),
    whileHover: Se(),
    whileTap: Se(),
    whileDrag: Se(),
    whileFocus: Se(),
    exit: Se()
  };
}
class we {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class ju extends we {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Cu(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Lt(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this);
  }
}
let Au = 0;
class Ru extends we {
  constructor() {
    super(...arguments), this.id = Au++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === s)
      return;
    const r = this.node.animationState.setActive("exit", !t);
    n && !t && r.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const ku = {
  animation: {
    Feature: ju
  },
  exit: {
    Feature: Ru
  }
};
function lt(e, t, n, s = { passive: !0 }) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n);
}
function ft(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const Vu = (e) => (t) => es(t) && e(t, ft(t));
function et(e, t, n, s) {
  return lt(e, t, Vu(n), s);
}
const fo = 1e-4, Eu = 1 - fo, Du = 1 + fo, ho = 0.01, Nu = 0 - ho, Mu = 0 + ho;
function q(e) {
  return e.max - e.min;
}
function Lu(e, t, n) {
  return Math.abs(e - t) <= n;
}
function cr(e, t, n, s = 0.5) {
  e.origin = s, e.originPoint = F(t.min, t.max, e.origin), e.scale = q(n) / q(t), e.translate = F(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Eu && e.scale <= Du || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Nu && e.translate <= Mu || isNaN(e.translate)) && (e.translate = 0);
}
function tt(e, t, n, s) {
  cr(e.x, t.x, n.x, s ? s.originX : void 0), cr(e.y, t.y, n.y, s ? s.originY : void 0);
}
function ur(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + q(t);
}
function Ou(e, t, n) {
  ur(e.x, t.x, n.x), ur(e.y, t.y, n.y);
}
function dr(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + q(t);
}
function nt(e, t, n) {
  dr(e.x, t.x, n.x), dr(e.y, t.y, n.y);
}
function se(e) {
  return [e("x"), e("y")];
}
const mo = ({ current: e }) => e ? e.ownerDocument.defaultView : null, fr = (e, t) => Math.abs(e - t);
function Fu(e, t) {
  const n = fr(e.x, t.x), s = fr(e.y, t.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class po {
  constructor(t, n, { transformPagePoint: s, contextWindow: r = window, dragSnapToOrigin: o = !1, distanceThreshold: i = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const m = nn(this.lastMoveEventInfo, this.history), p = this.startEvent !== null, y = Fu(m.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!p && !y)
        return;
      const { point: b } = m, { timestamp: S } = G;
      this.history.push({ ...b, timestamp: S });
      const { onStart: x, onMove: w } = this.handlers;
      p || (x && x(this.lastMoveEvent, m), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, m);
    }, this.handlePointerMove = (m, p) => {
      this.lastMoveEvent = m, this.lastMoveEventInfo = tn(p, this.transformPagePoint), L.update(this.updatePoint, !0);
    }, this.handlePointerUp = (m, p) => {
      this.end();
      const { onEnd: y, onSessionEnd: b, resumeAnimation: S } = this.handlers;
      if (this.dragSnapToOrigin && S && S(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = nn(m.type === "pointercancel" ? this.lastMoveEventInfo : tn(p, this.transformPagePoint), this.history);
      this.startEvent && y && y(m, x), b && b(m, x);
    }, !es(t))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.distanceThreshold = i, this.contextWindow = r || window;
    const a = ft(t), l = tn(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = G;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: f } = n;
    f && f(t, nn(l, this.history)), this.removeListeners = ct(et(this.contextWindow, "pointermove", this.handlePointerMove), et(this.contextWindow, "pointerup", this.handlePointerUp), et(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ve(this.updatePoint);
  }
}
function tn(e, t) {
  return t ? { point: t(e.point) } : e;
}
function hr(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function nn({ point: e }, t) {
  return {
    point: e,
    delta: hr(e, go(t)),
    offset: hr(e, Iu(t)),
    velocity: Bu(t, 0.1)
  };
}
function Iu(e) {
  return e[0];
}
function go(e) {
  return e[e.length - 1];
}
function Bu(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, s = null;
  const r = go(e);
  for (; n >= 0 && (s = e[n], !(r.timestamp - s.timestamp > /* @__PURE__ */ ae(t))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ re(r.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (r.x - s.x) / o,
    y: (r.y - s.y) / o
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function $u(e, { min: t, max: n }, s) {
  return t !== void 0 && e < t ? e = s ? F(t, e, s.min) : Math.max(e, t) : n !== void 0 && e > n && (e = s ? F(n, e, s.max) : Math.min(e, n)), e;
}
function mr(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Uu(e, { top: t, left: n, bottom: s, right: r }) {
  return {
    x: mr(e.x, n, r),
    y: mr(e.y, t, s)
  };
}
function pr(e, t) {
  let n = t.min - e.min, s = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, s] = [s, n]), { min: n, max: s };
}
function Wu(e, t) {
  return {
    x: pr(e.x, t.x),
    y: pr(e.y, t.y)
  };
}
function Ku(e, t) {
  let n = 0.5;
  const s = q(e), r = q(t);
  return r > s ? n = /* @__PURE__ */ st(t.min, t.max - s, e.min) : s > r && (n = /* @__PURE__ */ st(e.min, e.max - r, t.min)), he(0, 1, n);
}
function Yu(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Rn = 0.35;
function Gu(e = Rn) {
  return e === !1 ? e = 0 : e === !0 && (e = Rn), {
    x: gr(e, "left", "right"),
    y: gr(e, "top", "bottom")
  };
}
function gr(e, t, n) {
  return {
    min: yr(e, t),
    max: yr(e, n)
  };
}
function yr(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Hu = /* @__PURE__ */ new WeakMap();
class zu {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = $(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: s } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (f) => {
      const { dragSnapToOrigin: m } = this.getProps();
      m ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ft(f).point);
    }, i = (f, m) => {
      const { drag: p, dragPropagation: y, onDragStart: b } = this.getProps();
      if (p && !y && (this.openDragLock && this.openDragLock(), this.openDragLock = ic(p), !this.openDragLock))
        return;
      this.latestPointerEvent = f, this.latestPanInfo = m, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), se((x) => {
        let w = this.getAxisMotionValue(x).get() || 0;
        if (de.test(w)) {
          const { projection: P } = this.visualElement;
          if (P && P.layout) {
            const V = P.layout.layoutBox[x];
            V && (w = q(V) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[x] = w;
      }), b && L.postRender(() => b(f, m)), jn(this.visualElement, "transform");
      const { animationState: S } = this.visualElement;
      S && S.setActive("whileDrag", !0);
    }, a = (f, m) => {
      this.latestPointerEvent = f, this.latestPanInfo = m;
      const { dragPropagation: p, dragDirectionLock: y, onDirectionLock: b, onDrag: S } = this.getProps();
      if (!p && !this.openDragLock)
        return;
      const { offset: x } = m;
      if (y && this.currentDirection === null) {
        this.currentDirection = Xu(x), this.currentDirection !== null && b && b(this.currentDirection);
        return;
      }
      this.updateAxis("x", m.point, x), this.updateAxis("y", m.point, x), this.visualElement.render(), S && S(f, m);
    }, l = (f, m) => {
      this.latestPointerEvent = f, this.latestPanInfo = m, this.stop(f, m), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => se((f) => {
      var m;
      return this.getAnimationState(f) === "paused" && ((m = this.getAxisMotionValue(f).animation) == null ? void 0 : m.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new po(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: s,
      contextWindow: mo(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const s = t || this.latestPointerEvent, r = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !r || !s)
      return;
    const { velocity: i } = r;
    this.startAnimation(i);
    const { onDragEnd: a } = this.getProps();
    a && L.postRender(() => a(s, r));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, s) {
    const { drag: r } = this.getProps();
    if (!s || !wt(t, r, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + s[t];
    this.constraints && this.constraints[t] && (i = $u(i, this.constraints[t], this.elastic[t])), o.set(i);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout, r = this.constraints;
    t && Me(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && s ? this.constraints = Uu(s.layoutBox, t) : this.constraints = !1, this.elastic = Gu(n), r !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && se((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = Yu(s.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Me(t))
      return !1;
    const s = t.current;
    me(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: r } = this.visualElement;
    if (!r || !r.layout)
      return !1;
    const o = qc(s, r.root, this.visualElement.getTransformPagePoint());
    let i = Wu(r.layout.layoutBox, o);
    if (n) {
      const a = n(Hc(i));
      this.hasMutatedConstraints = !!a, a && (i = Ji(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: s, dragElastic: r, dragTransition: o, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = se((c) => {
      if (!wt(c, n, this.currentDirection))
        return;
      let f = l && l[c] || {};
      i && (f = { min: 0, max: 0 });
      const m = r ? 200 : 1e6, p = r ? 40 : 1e7, y = {
        type: "inertia",
        velocity: s ? t[c] : 0,
        bounceStiffness: m,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...f
      };
      return this.startAxisValueAnimation(c, y);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const s = this.getAxisMotionValue(t);
    return jn(this.visualElement, t), s.start(cs(t, s, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    se((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    se((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, s = this.visualElement.getProps(), r = s[n];
    return r || this.visualElement.getValue(t, (s.initial ? s.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    se((n) => {
      const { drag: s } = this.getProps();
      if (!wt(n, s, this.currentDirection))
        return;
      const { projection: r } = this.visualElement, o = this.getAxisMotionValue(n);
      if (r && r.layout) {
        const { min: i, max: a } = r.layout.layoutBox[n];
        o.set(t[n] - F(i, a, 0.5));
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
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!Me(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const r = { x: 0, y: 0 };
    se((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        r[i] = Ku({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), se((i) => {
      if (!wt(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: u } = this.constraints[i];
      a.set(F(l, u, r[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Hu.set(this.visualElement, this);
    const t = this.visualElement.current, n = et(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      Me(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: r } = this.visualElement, o = r.addEventListener("measure", s);
    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), L.read(s);
    const i = lt(window, "resize", () => this.scalePositionWithinConstraints()), a = r.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (se((c) => {
        const f = this.getAxisMotionValue(c);
        f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate));
      }), this.visualElement.render());
    }));
    return () => {
      i(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: r = !1, dragConstraints: o = !1, dragElastic: i = Rn, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: r,
      dragConstraints: o,
      dragElastic: i,
      dragMomentum: a
    };
  }
}
function wt(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Xu(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class qu extends we {
  constructor(t) {
    super(t), this.removeGroupControls = ie, this.removeListeners = ie, this.controls = new zu(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ie;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const xr = (e) => (t, n) => {
  e && L.postRender(() => e(t, n));
};
class Zu extends we {
  constructor() {
    super(...arguments), this.removePointerDownListener = ie;
  }
  onPointerDown(t) {
    this.session = new po(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: mo(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: s, onPanEnd: r } = this.node.getProps();
    return {
      onSessionStart: xr(t),
      onStart: xr(n),
      onMove: s,
      onEnd: (o, i) => {
        delete this.session, r && L.postRender(() => r(o, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = et(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const jt = {
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
function vr(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ze = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (j.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = vr(e, t.target.x), s = vr(e, t.target.y);
    return `${n}% ${s}%`;
  }
}, Ju = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const s = e, r = be.parse(e);
    if (r.length > 5)
      return s;
    const o = be.createTransformer(e), i = typeof r[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    r[0 + i] /= a, r[1 + i] /= l;
    const u = F(a, l, 0.5);
    return typeof r[2 + i] == "number" && (r[2 + i] /= u), typeof r[3 + i] == "number" && (r[3 + i] /= u), o(r);
  }
};
let sn = !1;
class Qu extends da {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: s, layoutId: r } = this.props, { projection: o } = t;
    wc(ed), o && (n.group && n.group.add(o), s && s.register && r && s.register(o), sn && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), jt.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: s, drag: r, isPresent: o } = this.props, { projection: i } = s;
    return i && (i.isPresent = o, sn = !0, r || t.layoutDependency !== n || n === void 0 || t.isPresent !== o ? i.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? i.promote() : i.relegate() || L.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Qn.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: r } = t;
    sn = !0, r && (r.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(r), s && s.deregister && s.deregister(r));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function yo(e) {
  const [t, n] = mc(), s = Q(zr);
  return h.jsx(Qu, { ...e, layoutGroup: s, switchLayoutGroup: Q(qi), isPresent: t, safeToRemove: n });
}
const ed = {
  borderRadius: {
    ...Ze,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ze,
  borderTopRightRadius: Ze,
  borderBottomLeftRadius: Ze,
  borderBottomRightRadius: Ze,
  boxShadow: Ju
};
function td(e, t, n) {
  const s = H(e) ? e : Be(e);
  return s.start(cs("", s, t, n)), s.animation;
}
const nd = (e, t) => e.depth - t.depth;
class sd {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Nn(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Mn(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(nd), this.isDirty = !1, this.children.forEach(t);
  }
}
function rd(e, t) {
  const n = ee.now(), s = ({ timestamp: r }) => {
    const o = r - n;
    o >= t && (ve(s), e(o - t));
  };
  return L.setup(s, !0), () => ve(s);
}
const xo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], id = xo.length, br = (e) => typeof e == "string" ? parseFloat(e) : e, wr = (e) => typeof e == "number" || j.test(e);
function od(e, t, n, s, r, o) {
  r ? (e.opacity = F(0, n.opacity ?? 1, ad(s)), e.opacityExit = F(t.opacity ?? 1, 0, ld(s))) : o && (e.opacity = F(t.opacity ?? 1, n.opacity ?? 1, s));
  for (let i = 0; i < id; i++) {
    const a = `border${xo[i]}Radius`;
    let l = Tr(t, a), u = Tr(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || wr(l) === wr(u) ? (e[a] = Math.max(F(br(l), br(u), s), 0), (de.test(u) || de.test(l)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = F(t.rotate || 0, n.rotate || 0, s));
}
function Tr(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ad = /* @__PURE__ */ vo(0, 0.5, ii), ld = /* @__PURE__ */ vo(0.5, 0.95, ie);
function vo(e, t, n) {
  return (s) => s < e ? 0 : s > t ? 1 : n(/* @__PURE__ */ st(e, t, s));
}
function Sr(e, t) {
  e.min = t.min, e.max = t.max;
}
function ne(e, t) {
  Sr(e.x, t.x), Sr(e.y, t.y);
}
function Pr(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Cr(e, t, n, s, r) {
  return e -= t, e = Et(e, 1 / n, s), r !== void 0 && (e = Et(e, 1 / r, s)), e;
}
function cd(e, t = 0, n = 1, s = 0.5, r, o = e, i = e) {
  if (de.test(t) && (t = parseFloat(t), t = F(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = F(o.min, o.max, s);
  e === o && (a -= t), e.min = Cr(e.min, t, n, a, r), e.max = Cr(e.max, t, n, a, r);
}
function _r(e, t, [n, s, r], o, i) {
  cd(e, t[n], t[s], t[r], t.scale, o, i);
}
const ud = ["x", "scaleX", "originX"], dd = ["y", "scaleY", "originY"];
function jr(e, t, n, s) {
  _r(e.x, t, ud, n ? n.x : void 0, s ? s.x : void 0), _r(e.y, t, dd, n ? n.y : void 0, s ? s.y : void 0);
}
function Ar(e) {
  return e.translate === 0 && e.scale === 1;
}
function bo(e) {
  return Ar(e.x) && Ar(e.y);
}
function Rr(e, t) {
  return e.min === t.min && e.max === t.max;
}
function fd(e, t) {
  return Rr(e.x, t.x) && Rr(e.y, t.y);
}
function kr(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function wo(e, t) {
  return kr(e.x, t.x) && kr(e.y, t.y);
}
function Vr(e) {
  return q(e.x) / q(e.y);
}
function Er(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class hd {
  constructor() {
    this.members = [];
  }
  add(t) {
    Nn(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Mn(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((r) => t === r);
    if (n === 0)
      return !1;
    let s;
    for (let r = n; r >= 0; r--) {
      const o = this.members[r];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(t, n) {
    const s = this.lead;
    if (t !== s && (this.prevLead = s, this.lead = t, t.show(), s)) {
      s.instance && s.scheduleRender(), t.scheduleRender(), t.resumeFrom = s, n && (t.resumeFrom.preserveOpacity = !0), s.snapshot && (t.snapshot = s.snapshot, t.snapshot.latestValues = s.animationValues || s.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: r } = t.options;
      r === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: s } = t;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
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
function md(e, t, n) {
  let s = "";
  const r = e.x.translate / t.x, o = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((r || o || i) && (s = `translate3d(${r}px, ${o}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (s += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: m, skewX: p, skewY: y } = n;
    u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), f && (s += `rotateX(${f}deg) `), m && (s += `rotateY(${m}deg) `), p && (s += `skewX(${p}deg) `), y && (s += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const rn = ["", "X", "Y", "Z"], pd = 1e3;
let gd = 0;
function on(e, t, n, s) {
  const { latestValues: r } = t;
  r[e] && (n[e] = r[e], t.setStaticValue(e, 0), s && (s[e] = 0));
}
function To(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = oo(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: r, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", L, !(r || o));
  }
  const { parent: s } = e;
  s && !s.hasCheckedOptimisedAppear && To(s);
}
function So({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: s, resetTransform: r }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = gd++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(vd), this.nodes.forEach(Sd), this.nodes.forEach(Pd), this.nodes.forEach(bd);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new sd());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new On()), this.eventHandlers.get(i).add(a);
    }
    notifyListeners(i, ...a) {
      const l = this.eventHandlers.get(i);
      l && l.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i) {
      if (this.instance)
        return;
      this.isSVG = Oi(i) && !dc(i), this.instance = i;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
        let c, f = 0;
        const m = () => this.root.updateBlockedByResize = !1;
        L.read(() => {
          f = window.innerWidth;
        }), e(i, () => {
          const p = window.innerWidth;
          p !== f && (f = p, this.root.updateBlockedByResize = !0, c && c(), c = rd(m, 250), jt.hasAnimatedSinceResize && (jt.hasAnimatedSinceResize = !1, this.nodes.forEach(Mr)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: f, hasRelativeLayoutChanged: m, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || u.getDefaultTransition() || Rd, { onLayoutAnimationStart: b, onLayoutAnimationComplete: S } = u.getProps(), x = !this.targetLayout || !wo(this.targetLayout, p), w = !f && m;
        if (this.options.layoutRoot || this.resumeFrom || w || f && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const P = {
            ...Zn(y, "layout"),
            onPlay: b,
            onComplete: S
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (P.delay = 0, P.type = !1), this.startAnimation(P), this.setAnimationOrigin(c, w);
        } else
          f || Mr(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ve(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Cd), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && To(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Dr);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Nr);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Td), this.nodes.forEach(yd), this.nodes.forEach(xd)) : this.nodes.forEach(Nr), this.clearAllSnapshots();
      const a = ee.now();
      G.delta = he(0, 1e3 / 60, a - G.timestamp), G.timestamp = a, G.isProcessing = !0, Ht.update.process(G), Ht.preRender.process(G), Ht.render.process(G), G.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Qn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(wd), this.sharedNodes.forEach(_d);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, L.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      L.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !q(this.snapshot.measuredBox.x) && !q(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = $(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a && this.instance) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: i,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!r)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !bo(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      i && this.instance && (a || Pe(this.latestValues) || c) && (r(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), kd(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var u;
      const { visualElement: i } = this.options;
      if (!i)
        return $();
      const a = i.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(Vd))) {
        const { scroll: c } = this.root;
        c && (Le(a.x, c.offset.x), Le(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(i) {
      var l;
      const a = $();
      if (ne(a, i), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: f, options: m } = c;
        c !== this.root && f && m.layoutScroll && (f.wasRoot && ne(a, i), Le(a.x, f.offset.x), Le(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(i, a = !1) {
      const l = $();
      ne(l, i);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Oe(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Pe(c.latestValues) && Oe(l, c.latestValues);
      }
      return Pe(this.latestValues) && Oe(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = $();
      ne(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Pe(u.latestValues))
          continue;
        Sn(u.latestValues) && u.updateSnapshot();
        const c = $(), f = u.measurePageBox();
        ne(c, f), jr(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Pe(this.latestValues) && jr(a, this.latestValues), a;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== G.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var m;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(i || l && this.isSharedProjectionDirty || this.isProjectionDirty || (m = this.parent) != null && m.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!(!this.layout || !(c || f))) {
        if (this.resolvedRelativeTargetAt = G.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = $(), this.relativeTargetOrigin = $(), nt(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = $(), this.targetWithTransforms = $()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Ou(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ne(this.target, this.layout.layoutBox), eo(this.target, this.targetDelta)) : ne(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const p = this.getClosestProjectingParent();
          p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = $(), this.relativeTargetOrigin = $(), nt(this.relativeTargetOrigin, this.target, p.target), ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Sn(this.parent.latestValues) || Qi(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var y;
      const i = this.getLead(), a = !!this.resumingFrom || this !== i;
      let l = !0;
      if ((this.isProjectionDirty || (y = this.parent) != null && y.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === G.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      ne(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, m = this.treeScale.y;
      Xc(this.layoutCorrected, this.treeScale, this.path, a), i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox, i.targetWithTransforms = $());
      const { target: p } = i;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Pr(this.prevProjectionDelta.x, this.projectionDelta.x), Pr(this.prevProjectionDelta.y, this.projectionDelta.y)), tt(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== m || !Er(this.projectionDelta.x, this.prevProjectionDelta.x) || !Er(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var a;
      if ((a = this.options.visualElement) == null || a.scheduleRender(), i) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Fe(), this.projectionDelta = Fe(), this.projectionDeltaWithTransform = Fe();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = Fe();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const m = $(), p = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, b = p !== y, S = this.getStack(), x = !S || S.members.length <= 1, w = !!(b && !x && this.options.crossfade === !0 && !this.path.some(Ad));
      this.animationProgress = 0;
      let P;
      this.mixTargetDelta = (V) => {
        const _ = V / 1e3;
        Lr(f.x, i.x, _), Lr(f.y, i.y, _), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (nt(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), jd(this.relativeTarget, this.relativeTargetOrigin, m, _), P && fd(this.relativeTarget, P) && (this.isProjectionDirty = !1), P || (P = $()), ne(P, this.relativeTarget)), b && (this.animationValues = c, od(c, u, this.latestValues, _, w, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = _;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      var a, l, u;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (ve(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = L.update(() => {
        jt.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Be(0)), this.currentAnimation = td(this.motionValue, [0, 1e3], {
          ...i,
          velocity: 0,
          isSync: !0,
          onUpdate: (c) => {
            this.mixTargetDelta(c), i.onUpdate && i.onUpdate(c);
          },
          onStop: () => {
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(pd), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = i;
      if (!(!a || !l || !u)) {
        if (this !== i && this.layout && u && Po(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || $();
          const f = q(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + f;
          const m = q(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + m;
        }
        ne(a, l), Oe(a, c), tt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new hd()), this.sharedNodes.get(i).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: i } = this.options;
      return i ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: i } = this.options;
      return i ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let a = !1;
      const { latestValues: l } = i;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && on("z", i, u, this.animationValues);
      for (let c = 0; c < rn.length; c++)
        on(`rotate${rn[c]}`, i, u, this.animationValues), on(`skew${rn[c]}`, i, u, this.animationValues);
      i.render();
      for (const c in u)
        i.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      i.scheduleRender();
    }
    applyProjectionStyles(i, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        i.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, i.visibility = "", i.opacity = "", i.pointerEvents = _t(a == null ? void 0 : a.pointerEvents) || "", i.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (i.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, i.pointerEvents = _t(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Pe(this.latestValues) && (i.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      i.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let f = md(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (f = l(c, f)), i.transform = f;
      const { x: m, y: p } = this.projectionDelta;
      i.transformOrigin = `${m.origin * 100}% ${p.origin * 100}% 0`, u.animationValues ? i.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : i.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const y in at) {
        if (c[y] === void 0)
          continue;
        const { correct: b, applyTo: S, isCSSVariable: x } = at[y], w = f === "none" ? c[y] : b(c[y], u);
        if (S) {
          const P = S.length;
          for (let V = 0; V < P; V++)
            i[S[V]] = w;
        } else
          x ? this.options.visualElement.renderState.vars[y] = w : i[y] = w;
      }
      this.options.layoutId && (i.pointerEvents = u === this ? _t(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(Dr), this.root.sharedNodes.clear();
    }
  };
}
function yd(e) {
  e.updateLayout();
}
function xd(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: r } = e.layout, { animationType: o } = e.options, i = t.source !== e.layout.source;
    o === "size" ? se((f) => {
      const m = i ? t.measuredBox[f] : t.layoutBox[f], p = q(m);
      m.min = s[f].min, m.max = m.min + p;
    }) : Po(o, t.layoutBox, s) && se((f) => {
      const m = i ? t.measuredBox[f] : t.layoutBox[f], p = q(s[f]);
      m.max = m.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + p);
    });
    const a = Fe();
    tt(a, s, t.layoutBox);
    const l = Fe();
    i ? tt(l, e.applyTransform(r, !0), t.measuredBox) : tt(l, s, t.layoutBox);
    const u = !bo(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: m, layout: p } = f;
        if (m && p) {
          const y = $();
          nt(y, t.layoutBox, m.layoutBox);
          const b = $();
          nt(b, s, p.layoutBox), wo(y, b) || (c = !0), f.options.layoutRoot && (e.relativeTarget = b, e.relativeTargetOrigin = y, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: s } = e.options;
    s && s();
  }
  e.options.transition = void 0;
}
function vd(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function bd(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function wd(e) {
  e.clearSnapshot();
}
function Dr(e) {
  e.clearMeasurements();
}
function Nr(e) {
  e.isLayoutDirty = !1;
}
function Td(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Mr(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Sd(e) {
  e.resolveTargetDelta();
}
function Pd(e) {
  e.calcProjection();
}
function Cd(e) {
  e.resetSkewAndRotation();
}
function _d(e) {
  e.removeLeadSnapshot();
}
function Lr(e, t, n) {
  e.translate = F(t.translate, 0, n), e.scale = F(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Or(e, t, n, s) {
  e.min = F(t.min, n.min, s), e.max = F(t.max, n.max, s);
}
function jd(e, t, n, s) {
  Or(e.x, t.x, n.x, s), Or(e.y, t.y, n.y, s);
}
function Ad(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Rd = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Fr = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Ir = Fr("applewebkit/") && !Fr("chrome/") ? Math.round : ie;
function Br(e) {
  e.min = Ir(e.min), e.max = Ir(e.max);
}
function kd(e) {
  Br(e.x), Br(e.y);
}
function Po(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Lu(Vr(t), Vr(n), 0.2);
}
function Vd(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Ed = So({
  attachResizeListener: (e, t) => lt(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), an = {
  current: void 0
}, Co = So({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!an.current) {
      const e = new Ed({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), an.current = e;
    }
    return an.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Dd = {
  pan: {
    Feature: Zu
  },
  drag: {
    Feature: qu,
    ProjectionNode: Co,
    MeasureLayout: yo
  }
};
function $r(e, t, n) {
  const { props: s } = e;
  e.animationState && s.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const r = "onHover" + n, o = s[r];
  o && L.postRender(() => o(t, ft(t)));
}
class Nd extends we {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = oc(t, (n, s) => ($r(this.node, s, "Start"), (r) => $r(this.node, r, "End"))));
  }
  unmount() {
  }
}
class Md extends we {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = ct(lt(this.node.current, "focus", () => this.onFocus()), lt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Ur(e, t, n) {
  const { props: s } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && s.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const r = "onTap" + (n === "End" ? "" : n), o = s[r];
  o && L.postRender(() => o(t, ft(t)));
}
class Ld extends we {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = uc(t, (n, s) => (Ur(this.node, s, "Start"), (r, { success: o }) => Ur(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const kn = /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ new WeakMap(), Od = (e) => {
  const t = kn.get(e.target);
  t && t(e);
}, Fd = (e) => {
  e.forEach(Od);
};
function Id({ root: e, ...t }) {
  const n = e || document;
  ln.has(n) || ln.set(n, {});
  const s = ln.get(n), r = JSON.stringify(t);
  return s[r] || (s[r] = new IntersectionObserver(Fd, { root: e, ...t })), s[r];
}
function Bd(e, t, n) {
  const s = Id(t);
  return kn.set(e, n), s.observe(e), () => {
    kn.delete(e), s.unobserve(e);
  };
}
const $d = {
  some: 0,
  all: 1
};
class Ud extends we {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: s, amount: r = "some", once: o } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof r == "number" ? r : $d[r]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), m = u ? c : f;
      m && m(l);
    };
    return Bd(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Wd(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Wd({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Kd = {
  inView: {
    Feature: Ud
  },
  tap: {
    Feature: Ld
  },
  focus: {
    Feature: Md
  },
  hover: {
    Feature: Nd
  }
}, Yd = {
  layout: {
    ProjectionNode: Co,
    MeasureLayout: yo
  }
}, Gd = {
  ...ku,
  ...Kd,
  ...Dd,
  ...Yd
}, Hd = /* @__PURE__ */ Gc(Gd, iu), zd = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm hover-lift",
  secondary: "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-sm hover-lift",
  ghost: "bg-transparent text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500 border border-secondary-300",
  link: "bg-transparent text-primary-600 hover:text-primary-700 hover:underline focus:ring-primary-500 p-0",
  danger: "bg-error-600 text-white hover:bg-error-700 focus:ring-error-500 shadow-sm hover-lift",
  success: "bg-success-600 text-white hover:bg-success-700 focus:ring-success-500 shadow-sm hover-lift"
}, Xd = {
  xs: "px-3 py-1.5 text-xs rounded-md",
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-lg",
  xl: "px-10 py-5 text-xl rounded-xl"
}, qd = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl"
}, Dt = C.forwardRef(
  ({
    className: e,
    variant: t = "primary",
    size: n = "md",
    isLoading: s = !1,
    leftIcon: r,
    rightIcon: o,
    children: i,
    disabled: a,
    animated: l = !0,
    ...u
  }, c) => {
    const f = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-ring disabled:opacity-50 disabled:pointer-events-none", m = zd[t], p = t === "link" ? qd[n] : Xd[n], y = v(
      (s || a) && "cursor-not-allowed",
      s && "opacity-70"
    ), b = v(
      "animate-spin -ml-1 mr-2",
      n === "xs" && "h-3 w-3",
      (n === "sm" || n === "md") && "h-4 w-4",
      n === "lg" && "h-5 w-5",
      n === "xl" && "h-6 w-6",
      !!i && "mr-2"
    ), S = v(
      ["xs", "sm", "md"].includes(n) && "mr-2",
      ["lg", "xl"].includes(n) && "mr-3"
    ), x = v(
      ["xs", "sm", "md"].includes(n) && "ml-2",
      ["lg", "xl"].includes(n) && "ml-3"
    ), w = l ? {
      whileHover: a ? {} : { scale: 1.02 },
      whileTap: a ? {} : { scale: 0.98 }
    } : {};
    return l === !0 ? /* @__PURE__ */ h.jsxs(
      Hd.button,
      {
        ref: c,
        className: v(
          f,
          m,
          p,
          y,
          e
        ),
        disabled: a || s,
        ...w,
        ...u,
        children: [
          s && /* @__PURE__ */ h.jsxs(
            "svg",
            {
              className: b,
              fill: "none",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ h.jsx(
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
                /* @__PURE__ */ h.jsx(
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
          !s && r && /* @__PURE__ */ h.jsx("span", { className: S, children: r }),
          i,
          !s && o && /* @__PURE__ */ h.jsx("span", { className: x, children: o })
        ]
      }
    ) : /* @__PURE__ */ h.jsxs(
      "button",
      {
        ref: c,
        className: v(
          f,
          m,
          p,
          y,
          e
        ),
        disabled: a || s,
        ...u,
        children: [
          s && /* @__PURE__ */ h.jsxs(
            "svg",
            {
              className: b,
              fill: "none",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ h.jsx(
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
                /* @__PURE__ */ h.jsx(
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
          !s && r && /* @__PURE__ */ h.jsx("span", { className: S, children: r }),
          i,
          !s && o && /* @__PURE__ */ h.jsx("span", { className: x, children: o })
        ]
      }
    );
  }
);
Dt.displayName = "Button";
const Zd = {
  sm: 18,
  md: 24,
  lg: 32
}, Re = ({
  name: e,
  size: t = "md",
  color: n = "currentColor",
  className: s,
  onClick: r,
  disabled: o = !1,
  style: i = {}
}) => {
  const a = Hr[e];
  if (!a)
    return console.warn(`Icon "${e}" not found in icon set`), null;
  const l = typeof t == "string" ? Zd[t] : t, u = !!r && !o;
  return /* @__PURE__ */ h.jsx(
    "span",
    {
      className: v(
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
        s
      ),
      style: {
        fontSize: l,
        width: l,
        height: l,
        color: n,
        ...i
      },
      onClick: u ? r : void 0,
      role: u ? "button" : "img",
      "aria-label": e,
      tabIndex: u ? 0 : -1,
      children: a
    }
  );
}, Jd = {
  xs: "px-3 py-1.5 text-sm h-8 rounded-lg",
  sm: "px-3.5 py-2 text-sm h-9 rounded-lg",
  md: "px-4 py-2.5 text-base h-10 rounded-xl",
  lg: "px-4 py-3 text-lg h-11 rounded-xl",
  xl: "px-5 py-3.5 text-xl h-12 rounded-xl"
}, Qd = {
  default: "border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
  error: "border-red-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20",
  disabled: "border-gray-100 bg-gray-50 text-gray-400 placeholder:text-gray-400 cursor-not-allowed",
  readonly: "border-gray-100 bg-gray-50 text-gray-700 placeholder:text-gray-500 cursor-not-allowed"
}, _o = C.forwardRef(
  ({
    className: e,
    size: t = "md",
    state: n = "default",
    leftIcon: s,
    rightIcon: r,
    fullWidth: o = !1,
    disabled: i,
    readOnly: a,
    label: l,
    helperText: u,
    id: c,
    ...f
  }, m) => {
    const p = i ? "disabled" : a ? "readonly" : n, y = c || `input-${Math.random().toString(36).substr(2, 9)}`, b = s ? t === "xs" ? "pl-9" : t === "sm" ? "pl-10" : t === "md" ? "pl-11" : t === "lg" ? "pl-12" : t === "xl" ? "pl-14" : "" : void 0, S = r ? t === "xs" ? "pr-9" : t === "sm" ? "pr-10" : t === "md" ? "pr-11" : t === "lg" ? "pr-12" : t === "xl" ? "pr-14" : "" : void 0;
    return /* @__PURE__ */ h.jsxs("div", { className: v("space-y-2", o && "w-full"), children: [
      l && /* @__PURE__ */ h.jsx(
        "label",
        {
          htmlFor: y,
          className: v(
            "block text-sm font-medium text-gray-700 transition-colors",
            p === "disabled" && "text-gray-400",
            p === "error" && "text-red-600"
          ),
          children: l
        }
      ),
      /* @__PURE__ */ h.jsxs("div", { className: "relative", children: [
        s && /* @__PURE__ */ h.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none", children: /* @__PURE__ */ h.jsx(
          "div",
          {
            className: v(
              "text-gray-400 transition-colors",
              t === "xs" && "text-xs",
              t === "sm" && "text-sm",
              t === "md" && "text-base",
              t === "lg" && "text-lg",
              t === "xl" && "text-xl",
              p === "error" && "text-red-500",
              p === "disabled" && "text-gray-300"
            ),
            children: s
          }
        ) }),
        /* @__PURE__ */ h.jsx(
          "input",
          {
            ref: m,
            id: y,
            className: v(
              // Base styles
              "block w-full border-2 bg-white/95 backdrop-blur-sm",
              "transition-all duration-200",
              "focus:outline-none focus:shadow-sm",
              "disabled:cursor-not-allowed",
              "placeholder:text-gray-400",
              "shadow-sm",
              b,
              S,
              // Size and state
              Jd[t],
              Qd[p],
              // Additional styles
              o && "w-full",
              e
            ),
            disabled: i || p === "disabled",
            readOnly: a || p === "readonly",
            ...f
          }
        ),
        r && /* @__PURE__ */ h.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none", children: /* @__PURE__ */ h.jsx(
          "div",
          {
            className: v(
              "text-gray-400 transition-colors",
              t === "xs" && "text-xs",
              t === "sm" && "text-sm",
              t === "md" && "text-base",
              t === "lg" && "text-lg",
              t === "xl" && "text-xl",
              p === "error" && "text-red-500",
              p === "disabled" && "text-gray-300"
            ),
            children: r
          }
        ) })
      ] }),
      u && /* @__PURE__ */ h.jsx(
        "p",
        {
          className: v(
            "text-sm transition-colors",
            p === "error" ? "text-red-600" : "text-gray-500",
            p === "disabled" && "text-gray-400"
          ),
          children: u
        }
      )
    ] });
  }
);
_o.displayName = "Input";
const ef = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-7 w-7"
}, tf = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg"
}, nf = C.forwardRef(
  ({
    className: e,
    label: t,
    description: n,
    size: s = "md",
    id: r,
    disabled: o,
    ...i
  }, a) => {
    const l = C.useId(), u = r || l;
    return /* @__PURE__ */ h.jsxs(
      "label",
      {
        htmlFor: u,
        className: v(
          "flex cursor-pointer items-start gap-3",
          o && "cursor-not-allowed opacity-60"
        ),
        children: [
          /* @__PURE__ */ h.jsxs("span", { className: "relative flex items-center", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                ref: a,
                id: u,
                type: "checkbox",
                className: v(
                  "peer absolute h-full w-full cursor-pointer opacity-0",
                  o && "cursor-not-allowed"
                ),
                disabled: o,
                ...i
              }
            ),
            /* @__PURE__ */ h.jsx(
              "span",
              {
                className: v(
                  "flex items-center justify-center rounded-md border border-neutral-300 bg-white text-white transition-all",
                  "peer-checked:border-primary-500 peer-checked:bg-primary-500",
                  "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2",
                  ef[s],
                  e
                ),
                children: /* @__PURE__ */ h.jsx(
                  "svg",
                  {
                    className: "h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100",
                    viewBox: "0 0 12 10",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ h.jsx("path", { d: "M1 5.5L4.5 9L11 1" })
                  }
                )
              }
            )
          ] }),
          (t || n) && /* @__PURE__ */ h.jsxs("span", { className: "space-y-1", children: [
            t && /* @__PURE__ */ h.jsx("span", { className: v("block font-medium text-neutral-900", tf[s]), children: t }),
            n && /* @__PURE__ */ h.jsx("span", { className: "block text-xs text-neutral-500", children: n })
          ] })
        ]
      }
    );
  }
);
nf.displayName = "Checkbox";
const sf = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-7 w-7"
}, rf = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2.5 w-2.5",
  lg: "h-3 w-3",
  xl: "h-3.5 w-3.5"
}, of = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg"
}, af = C.forwardRef(
  ({
    className: e,
    label: t,
    description: n,
    size: s = "md",
    id: r,
    disabled: o,
    ...i
  }, a) => {
    const l = C.useId(), u = r || l;
    return /* @__PURE__ */ h.jsxs(
      "label",
      {
        htmlFor: u,
        className: v(
          "flex cursor-pointer items-start gap-3",
          o && "cursor-not-allowed opacity-60"
        ),
        children: [
          /* @__PURE__ */ h.jsxs("span", { className: "relative flex items-center", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                ref: a,
                id: u,
                type: "radio",
                className: v(
                  "peer absolute h-full w-full cursor-pointer opacity-0",
                  o && "cursor-not-allowed"
                ),
                disabled: o,
                ...i
              }
            ),
            /* @__PURE__ */ h.jsx(
              "span",
              {
                className: v(
                  "flex items-center justify-center rounded-full border border-neutral-300 bg-white transition-all",
                  "peer-checked:border-primary-500 peer-checked:bg-primary-500",
                  "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2",
                  sf[s],
                  e
                ),
                children: /* @__PURE__ */ h.jsx(
                  "span",
                  {
                    className: v(
                      "rounded-full bg-white opacity-0 transition-opacity peer-checked:opacity-100",
                      rf[s]
                    )
                  }
                )
              }
            )
          ] }),
          (t || n) && /* @__PURE__ */ h.jsxs("span", { className: "space-y-1", children: [
            t && /* @__PURE__ */ h.jsx("span", { className: v("block font-medium text-neutral-900", of[s]), children: t }),
            n && /* @__PURE__ */ h.jsx("span", { className: "block text-xs text-neutral-500", children: n })
          ] })
        ]
      }
    );
  }
);
af.displayName = "Radio";
const lf = {
  xs: "px-3 py-1.5 text-sm h-8",
  sm: "px-3 py-2 text-sm h-9",
  md: "px-4 py-2.5 text-base h-10",
  lg: "px-4 py-3 text-lg h-11",
  xl: "px-5 py-3.5 text-xl h-12"
}, cf = C.forwardRef(
  ({
    className: e,
    size: t = "md",
    options: n,
    children: s,
    fullWidth: r = !1,
    disabled: o,
    ...i
  }, a) => /* @__PURE__ */ h.jsxs("div", { className: v("relative", r && "w-full"), children: [
    /* @__PURE__ */ h.jsx(
      "select",
      {
        ref: a,
        className: v(
          "block w-full appearance-none rounded-lg border border-gray-300 bg-white text-gray-900 transition-all duration-200",
          "focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
          lf[t],
          e
        ),
        disabled: o,
        ...i,
        children: n ? n.map((l) => /* @__PURE__ */ h.jsx(
          "option",
          {
            value: l.value,
            disabled: l.disabled,
            children: l.label
          },
          `${l.value}`
        )) : s
      }
    ),
    /* @__PURE__ */ h.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400", children: /* @__PURE__ */ h.jsx(Re, { name: "expand_more", size: "sm" }) })
  ] })
);
cf.displayName = "Select";
const uf = {
  xs: "h-4 w-7",
  sm: "h-5 w-9",
  md: "h-6 w-11",
  lg: "h-7 w-14",
  xl: "h-8 w-16"
}, df = {
  xs: "h-3 w-3 translate-x-0.5",
  sm: "h-4 w-4 translate-x-0.5",
  md: "h-5 w-5 translate-x-0.5",
  lg: "h-6 w-6 translate-x-0.5",
  xl: "h-7 w-7 translate-x-0.5"
}, ff = {
  xs: "peer-checked:translate-x-3",
  sm: "peer-checked:translate-x-4",
  md: "peer-checked:translate-x-5",
  lg: "peer-checked:translate-x-7",
  xl: "peer-checked:translate-x-8"
}, hf = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg"
}, mf = C.forwardRef(
  ({
    className: e,
    label: t,
    description: n,
    size: s = "md",
    id: r,
    disabled: o,
    ...i
  }, a) => {
    const l = C.useId(), u = r || l;
    return /* @__PURE__ */ h.jsxs(
      "label",
      {
        htmlFor: u,
        className: v(
          "flex cursor-pointer items-start gap-3",
          o && "cursor-not-allowed opacity-60"
        ),
        children: [
          /* @__PURE__ */ h.jsxs("span", { className: "relative flex items-center", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                ref: a,
                id: u,
                type: "checkbox",
                className: "peer sr-only",
                disabled: o,
                ...i
              }
            ),
            /* @__PURE__ */ h.jsx(
              "span",
              {
                className: v(
                  "flex items-center rounded-full border border-neutral-300 bg-neutral-200 transition-colors",
                  "peer-checked:border-primary-500 peer-checked:bg-primary-500",
                  "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2",
                  uf[s]
                ),
                children: /* @__PURE__ */ h.jsx(
                  "span",
                  {
                    className: v(
                      "rounded-full bg-white shadow-sm transition-transform",
                      df[s],
                      ff[s],
                      e
                    )
                  }
                )
              }
            )
          ] }),
          (t || n) && /* @__PURE__ */ h.jsxs("span", { className: "space-y-1", children: [
            t && /* @__PURE__ */ h.jsx("span", { className: v("block font-medium text-neutral-900", hf[s]), children: t }),
            n && /* @__PURE__ */ h.jsx("span", { className: "block text-xs text-neutral-500", children: n })
          ] })
        ]
      }
    );
  }
);
mf.displayName = "Switch";
const pf = C.forwardRef(
  (e, t) => /* @__PURE__ */ h.jsx(_o, { ref: t, type: "date", ...e })
);
pf.displayName = "DatePicker";
const gf = C.forwardRef(
  ({ className: e, label: t, helperText: n, id: s, disabled: r, ...o }, i) => {
    const a = C.useId(), l = s || a;
    return /* @__PURE__ */ h.jsxs("div", { className: "space-y-2", children: [
      t && /* @__PURE__ */ h.jsx(
        "label",
        {
          htmlFor: l,
          className: "text-sm font-medium text-neutral-700",
          children: t
        }
      ),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          ref: i,
          id: l,
          type: "range",
          className: v(
            "w-full cursor-pointer accent-primary-500",
            "disabled:cursor-not-allowed disabled:opacity-50",
            e
          ),
          disabled: r,
          ...o
        }
      ),
      n && /* @__PURE__ */ h.jsx("p", { className: "text-xs text-neutral-500", children: n })
    ] });
  }
);
gf.displayName = "Slider";
const jo = C.createContext(null), Ao = () => {
  const e = C.useContext(jo);
  if (!e)
    throw new Error("Tabs components must be used within <Tabs />");
  return e;
}, yf = C.forwardRef(
  ({ className: e, value: t, defaultValue: n, onValueChange: s, ...r }, o) => {
    const [i, a] = C.useState(
      n || ""
    ), l = t ?? i, u = (c) => {
      t === void 0 && a(c), s == null || s(c);
    };
    return /* @__PURE__ */ h.jsx(jo.Provider, { value: { value: l, setValue: u }, children: /* @__PURE__ */ h.jsx("div", { ref: o, className: v("space-y-4", e), ...r }) });
  }
), xf = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
    "div",
    {
      ref: n,
      className: v(
        "inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white p-1",
        e
      ),
      ...t
    }
  )
), vf = C.forwardRef(
  ({ className: e, value: t, ...n }, s) => {
    const { value: r, setValue: o } = Ao(), i = r === t;
    return /* @__PURE__ */ h.jsx(
      "button",
      {
        ref: s,
        type: "button",
        className: v(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          i ? "bg-primary-50 text-primary-700" : "text-neutral-500 hover:text-neutral-800",
          e
        ),
        onClick: () => o(t),
        "aria-pressed": i,
        ...n
      }
    );
  }
), bf = C.forwardRef(
  ({ className: e, value: t, ...n }, s) => {
    const { value: r } = Ao();
    return r !== t ? null : /* @__PURE__ */ h.jsx(
      "div",
      {
        ref: s,
        className: v("rounded-2xl border border-neutral-200 bg-white p-6", e),
        ...n
      }
    );
  }
);
yf.displayName = "Tabs";
xf.displayName = "TabsList";
vf.displayName = "TabsTrigger";
bf.displayName = "TabsContent";
const wf = C.forwardRef(
  ({ className: e, items: t, separator: n, ...s }, r) => /* @__PURE__ */ h.jsx(
    "nav",
    {
      ref: r,
      "aria-label": "Breadcrumb",
      className: v("text-sm text-neutral-500", e),
      ...s,
      children: /* @__PURE__ */ h.jsx("ol", { className: "flex flex-wrap items-center gap-2", children: t.map((o, i) => {
        const a = i === t.length - 1, l = o.href ? /* @__PURE__ */ h.jsx(
          "a",
          {
            href: o.href,
            className: "text-neutral-600 hover:text-neutral-900",
            onClick: o.onClick,
            children: o.label
          }
        ) : /* @__PURE__ */ h.jsx("span", { className: v(a ? "text-neutral-900" : "text-neutral-600"), children: o.label });
        return /* @__PURE__ */ h.jsxs("li", { className: "flex items-center gap-2", children: [
          l,
          !a && /* @__PURE__ */ h.jsx("span", { className: "text-neutral-300", children: n || /* @__PURE__ */ h.jsx(Re, { name: "chevron_right", size: "sm" }) })
        ] }, `${o.label}-${i}`);
      }) })
    }
  )
);
wf.displayName = "Breadcrumbs";
const Tf = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
    "div",
    {
      ref: n,
      className: v("rounded-2xl border border-neutral-200 bg-white p-2", e),
      ...t
    }
  )
), Sf = C.forwardRef(
  ({ className: e, icon: t, active: n = !1, badge: s, children: r, ...o }, i) => /* @__PURE__ */ h.jsxs(
    "button",
    {
      ref: i,
      type: "button",
      className: v(
        "flex w-full items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium transition-colors",
        n ? "bg-primary-50 text-primary-700" : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900",
        e
      ),
      ...o,
      children: [
        t && /* @__PURE__ */ h.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500", children: t }),
        /* @__PURE__ */ h.jsx("span", { className: "flex-1 text-left", children: r }),
        s && /* @__PURE__ */ h.jsx("span", { className: "text-xs text-neutral-400", children: s })
      ]
    }
  )
);
Tf.displayName = "Menu";
Sf.displayName = "MenuItem";
const Pf = {
  primary: "border-primary-200 bg-primary-50 text-primary-700",
  secondary: "border-secondary-200 bg-secondary-50 text-secondary-700",
  success: "border-success-200 bg-success-50 text-success-700",
  warning: "border-warning-200 bg-warning-50 text-warning-700",
  error: "border-error-200 bg-error-50 text-error-700",
  info: "border-info-200 bg-info-50 text-info-700"
}, Cf = {
  primary: "info",
  secondary: "info",
  success: "check_circle",
  warning: "warning",
  error: "error",
  info: "info"
}, _f = C.forwardRef(
  ({
    className: e,
    title: t,
    description: n,
    variant: s = "info",
    icon: r,
    ...o
  }, i) => /* @__PURE__ */ h.jsxs(
    "div",
    {
      ref: i,
      className: v(
        "flex gap-3 rounded-xl border px-4 py-3",
        Pf[s],
        e
      ),
      role: "alert",
      ...o,
      children: [
        /* @__PURE__ */ h.jsx("div", { className: "mt-0.5 text-current", children: r ?? /* @__PURE__ */ h.jsx(Re, { name: Cf[s], size: "sm" }) }),
        /* @__PURE__ */ h.jsxs("div", { className: "space-y-1", children: [
          t && /* @__PURE__ */ h.jsx("p", { className: "text-sm font-semibold", children: t }),
          n && /* @__PURE__ */ h.jsx("div", { className: "text-sm text-current", children: n })
        ] })
      ]
    }
  )
);
_f.displayName = "Alert";
const jf = {
  default: "bg-secondary-400",
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  error: "bg-error-500",
  info: "bg-info-500"
}, Af = C.forwardRef(
  ({
    className: e,
    value: t,
    max: n = 100,
    variant: s = "primary",
    showLabel: r = !1,
    ...o
  }, i) => {
    const a = Math.min(Math.max(t, 0), n), l = Math.round(a / n * 100);
    return /* @__PURE__ */ h.jsxs("div", { ref: i, className: v("space-y-2", e), ...o, children: [
      r && /* @__PURE__ */ h.jsxs("div", { className: "flex items-center justify-between text-sm text-neutral-600", children: [
        /* @__PURE__ */ h.jsx("span", { children: "Progress" }),
        /* @__PURE__ */ h.jsxs("span", { children: [
          l,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "h-2 w-full rounded-full bg-secondary-100", children: /* @__PURE__ */ h.jsx(
        "div",
        {
          className: v("h-2 rounded-full transition-all", jf[s]),
          style: { width: `${l}%` }
        }
      ) })
    ] });
  }
);
Af.displayName = "ProgressBar";
const Rf = {
  xs: 16,
  sm: 24,
  md: 40,
  lg: 56,
  xl: 72
}, kf = {
  default: "text-gray-600",
  primary: "text-blue-600",
  secondary: "text-indigo-600",
  success: "text-emerald-600",
  warning: "text-amber-600",
  error: "text-rose-600",
  info: "text-sky-600"
}, Vf = C.forwardRef(
  ({ className: e, size: t = "md", variant: n = "primary", withRing: s = !0, ...r }, o) => {
    const i = typeof t == "number" ? t : Rf[t];
    return /* @__PURE__ */ h.jsxs("div", { className: v("relative", s && "p-4"), children: [
      s && /* @__PURE__ */ h.jsx("div", { className: "absolute inset-0 rounded-full border-[6px] border-gray-200" }),
      /* @__PURE__ */ h.jsxs(
        "svg",
        {
          ref: o,
          className: v(
            "animate-spin",
            kf[n],
            "drop-shadow-sm",
            s && "scale-90",
            e
          ),
          width: i,
          height: i,
          viewBox: "0 0 24 24",
          fill: "none",
          "aria-label": "Loading",
          ...r,
          children: [
            /* @__PURE__ */ h.jsx(
              "circle",
              {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeOpacity: "0.3",
                fill: "none"
              }
            ),
            /* @__PURE__ */ h.jsx(
              "path",
              {
                d: "M12 2C6.48 2 2 6.48 2 12c0 1.6.36 3.12 1 4.5",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none"
              }
            )
          ]
        }
      )
    ] });
  }
);
Vf.displayName = "Spinner";
const Ef = {
  none: "rounded-none",
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full"
}, Df = C.forwardRef(
  ({ className: e, rounded: t = "md", ...n }, s) => /* @__PURE__ */ h.jsx(
    "div",
    {
      ref: s,
      className: v(
        "animate-pulse bg-secondary-100",
        Ef[t],
        e
      ),
      ...n
    }
  )
);
Df.displayName = "Skeleton";
const Nf = {
  primary: "border-primary-200 bg-primary-50 text-primary-800",
  secondary: "border-secondary-200 bg-secondary-50 text-secondary-800",
  success: "border-success-200 bg-success-50 text-success-800",
  warning: "border-warning-200 bg-warning-50 text-warning-800",
  error: "border-error-200 bg-error-50 text-error-800",
  info: "border-info-200 bg-info-50 text-info-800"
}, Mf = {
  primary: "info",
  secondary: "info",
  success: "check_circle",
  warning: "warning",
  error: "error",
  info: "info"
}, Lf = C.forwardRef(
  ({
    className: e,
    title: t,
    description: n,
    variant: s = "info",
    action: r,
    ...o
  }, i) => /* @__PURE__ */ h.jsxs(
    "div",
    {
      ref: i,
      className: v(
        "flex w-full items-start gap-3 rounded-xl border px-4 py-3 shadow-sm",
        Nf[s],
        e
      ),
      role: "status",
      ...o,
      children: [
        /* @__PURE__ */ h.jsx(Re, { name: Mf[s], size: "sm" }),
        /* @__PURE__ */ h.jsxs("div", { className: "flex-1 space-y-1", children: [
          t && /* @__PURE__ */ h.jsx("p", { className: "text-sm font-semibold", children: t }),
          n && /* @__PURE__ */ h.jsx("div", { className: "text-sm text-current", children: n })
        ] }),
        r && /* @__PURE__ */ h.jsx("div", { className: "pl-2", children: r })
      ]
    }
  )
);
Lf.displayName = "Toast";
const Of = {
  top: "bottom-full left-1/2 -translate-x-1/2 -translate-y-2",
  bottom: "top-full left-1/2 -translate-x-1/2 translate-y-2",
  left: "right-full top-1/2 -translate-y-1/2 -translate-x-2",
  right: "left-full top-1/2 -translate-y-1/2 translate-x-2",
  "top-start": "bottom-full left-0 -translate-y-2",
  "top-end": "bottom-full right-0 -translate-y-2",
  "bottom-start": "top-full left-0 translate-y-2",
  "bottom-end": "top-full right-0 translate-y-2"
}, Ih = ({
  content: e,
  position: t = "top",
  children: n,
  className: s
}) => /* @__PURE__ */ h.jsxs("span", { className: "relative inline-flex group", children: [
  n,
  /* @__PURE__ */ h.jsx(
    "span",
    {
      className: v(
        "pointer-events-none absolute z-20 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity",
        "group-hover:opacity-100 group-focus-within:opacity-100",
        Of[t],
        s
      ),
      role: "tooltip",
      children: e
    }
  )
] }), Ff = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
  secondary: "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500",
  ghost: "bg-transparent text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500 border border-secondary-300",
  link: "bg-transparent text-primary-600 hover:text-primary-700 focus:ring-primary-500",
  danger: "bg-error-600 text-white hover:bg-error-700 focus:ring-error-500",
  success: "bg-success-600 text-white hover:bg-success-700 focus:ring-success-500"
}, If = {
  xs: "h-7 w-7 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
  xl: "h-14 w-14 text-xl"
}, Bf = C.forwardRef(
  ({
    className: e,
    icon: t,
    ariaLabel: n,
    variant: s = "primary",
    size: r = "md",
    isLoading: o = !1,
    disabled: i,
    ...a
  }, l) => /* @__PURE__ */ h.jsx(
    "button",
    {
      ref: l,
      type: "button",
      className: v(
        "inline-flex items-center justify-center rounded-lg transition-all duration-200 focus-ring",
        "disabled:opacity-50 disabled:pointer-events-none",
        Ff[s],
        If[r],
        e
      ),
      "aria-label": n,
      disabled: i || o,
      ...a,
      children: o ? /* @__PURE__ */ h.jsxs(
        "svg",
        {
          className: "animate-spin",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ h.jsx(
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
            /* @__PURE__ */ h.jsx(
              "path",
              {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              }
            )
          ]
        }
      ) : t
    }
  )
);
Bf.displayName = "IconButton";
const $f = C.forwardRef(({ isLoading: e = !1, children: t, loadingText: n, ...s }, r) => /* @__PURE__ */ h.jsx(Dt, { ref: r, isLoading: e, ...s, children: e && n ? n : t }));
$f.displayName = "LoadingButton";
const Wr = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
  secondary: "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500",
  ghost: "bg-transparent text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500 border border-secondary-300",
  danger: "bg-error-600 text-white hover:bg-error-700 focus:ring-error-500",
  success: "bg-success-600 text-white hover:bg-success-700 focus:ring-success-500"
}, Uf = {
  xs: "px-3 py-1.5 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl"
}, Wf = {
  xs: "px-2 py-1.5",
  sm: "px-2.5 py-2",
  md: "px-3 py-3",
  lg: "px-3.5 py-4",
  xl: "px-4 py-5"
}, Kf = ({
  label: e,
  onClick: t,
  onToggle: n,
  disabled: s = !1,
  size: r = "md",
  variant: o = "primary",
  toggleAriaLabel: i = "Open menu"
}) => /* @__PURE__ */ h.jsxs("div", { className: "inline-flex", children: [
  /* @__PURE__ */ h.jsx(
    "button",
    {
      type: "button",
      className: v(
        "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-ring",
        "rounded-l-lg",
        "disabled:opacity-50 disabled:pointer-events-none",
        Wr[o],
        Uf[r]
      ),
      onClick: t,
      disabled: s,
      children: e
    }
  ),
  /* @__PURE__ */ h.jsx(
    "button",
    {
      type: "button",
      className: v(
        "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-ring",
        "rounded-r-lg border-l border-white/20",
        "disabled:opacity-50 disabled:pointer-events-none",
        Wr[o],
        Wf[r]
      ),
      onClick: n,
      disabled: s,
      "aria-label": i,
      children: /* @__PURE__ */ h.jsx(Re, { name: "expand_more", size: "sm" })
    }
  )
] });
Kf.displayName = "SplitButton";
const Yf = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl"
}, Ro = C.forwardRef(
  ({ className: e, open: t, onClose: n, title: s, description: r, footer: o, size: i = "md", children: a, ...l }, u) => (C.useEffect(() => {
    if (!t) return;
    const c = (f) => {
      f.key === "Escape" && n();
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [t, n]), t ? /* @__PURE__ */ h.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4", children: [
    /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/40",
        onClick: n,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: u,
        role: "dialog",
        "aria-modal": "true",
        className: v(
          "relative w-full rounded-2xl bg-white shadow-xl",
          Yf[i],
          e
        ),
        onClick: (c) => c.stopPropagation(),
        ...l,
        children: [
          (s || r) && /* @__PURE__ */ h.jsxs("div", { className: "border-b border-neutral-200 px-6 py-4", children: [
            s && /* @__PURE__ */ h.jsx("h2", { className: "text-heading-small text-neutral-900", children: s }),
            r && /* @__PURE__ */ h.jsx("p", { className: "text-body-small text-neutral-500", children: r })
          ] }),
          /* @__PURE__ */ h.jsx("div", { className: "px-6 py-5", children: a }),
          o && /* @__PURE__ */ h.jsx("div", { className: "border-t border-neutral-200 px-6 py-4", children: o })
        ]
      }
    )
  ] }) : null)
);
Ro.displayName = "Modal";
const Gf = {
  sm: "w-72",
  md: "w-96",
  lg: "w-[28rem]"
}, Hf = C.forwardRef(
  ({
    className: e,
    open: t,
    onClose: n,
    title: s,
    footer: r,
    side: o = "right",
    size: i = "md",
    children: a,
    ...l
  }, u) => (C.useEffect(() => {
    if (!t) return;
    const c = (f) => {
      f.key === "Escape" && n();
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [t, n]), t ? /* @__PURE__ */ h.jsxs("div", { className: "fixed inset-0 z-50 flex", children: [
    /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/30",
        onClick: n,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: u,
        role: "dialog",
        "aria-modal": "true",
        className: v(
          "relative ml-auto h-full bg-white shadow-xl",
          o === "left" && "ml-0 mr-auto",
          Gf[i],
          e
        ),
        onClick: (c) => c.stopPropagation(),
        ...l,
        children: [
          s && /* @__PURE__ */ h.jsx("div", { className: "border-b border-neutral-200 px-6 py-4", children: /* @__PURE__ */ h.jsx("h2", { className: "text-heading-small text-neutral-900", children: s }) }),
          /* @__PURE__ */ h.jsx("div", { className: "px-6 py-5", children: a }),
          r && /* @__PURE__ */ h.jsx("div", { className: "border-t border-neutral-200 px-6 py-4", children: r })
        ]
      }
    )
  ] }) : null)
);
Hf.displayName = "Drawer";
const zf = {
  top: "bottom-full left-1/2 -translate-x-1/2 -translate-y-2",
  bottom: "top-full left-1/2 -translate-x-1/2 translate-y-2",
  left: "right-full top-1/2 -translate-y-1/2 -translate-x-2",
  right: "left-full top-1/2 -translate-y-1/2 translate-x-2",
  "top-start": "bottom-full left-0 -translate-y-2",
  "top-end": "bottom-full right-0 -translate-y-2",
  "bottom-start": "top-full left-0 translate-y-2",
  "bottom-end": "top-full right-0 translate-y-2"
}, Bh = ({
  trigger: e,
  content: t,
  open: n,
  defaultOpen: s = !1,
  onOpenChange: r,
  position: o = "bottom",
  className: i
}) => {
  const [a, l] = C.useState(s), u = n ?? a, c = C.useRef(null), f = (m) => {
    n === void 0 && l(m), r == null || r(m);
  };
  return C.useEffect(() => {
    if (!u) return;
    const m = (p) => {
      var y;
      (y = c.current) != null && y.contains(p.target) || f(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [u]), /* @__PURE__ */ h.jsxs("div", { ref: c, className: "relative inline-flex", children: [
    /* @__PURE__ */ h.jsx("span", { onClick: () => f(!u), children: e }),
    u && /* @__PURE__ */ h.jsx(
      "div",
      {
        className: v(
          "absolute z-30 min-w-[12rem] rounded-xl border border-neutral-200 bg-white p-4 shadow-lg",
          zf[o],
          i
        ),
        role: "dialog",
        children: t
      }
    )
  ] });
}, $h = ({
  open: e,
  onClose: t,
  title: n,
  description: s,
  confirmText: r = "Confirm",
  cancelText: o = "Cancel",
  onConfirm: i,
  onCancel: a
}) => /* @__PURE__ */ h.jsx(
  Ro,
  {
    open: e,
    onClose: t,
    title: n,
    description: s,
    footer: /* @__PURE__ */ h.jsxs("div", { className: "flex justify-end gap-3", children: [
      /* @__PURE__ */ h.jsx(
        Dt,
        {
          variant: "ghost",
          onClick: () => {
            a == null || a(), t();
          },
          children: o
        }
      ),
      /* @__PURE__ */ h.jsx(
        Dt,
        {
          variant: "primary",
          onClick: () => {
            i == null || i(), t();
          },
          children: r
        }
      )
    ] })
  }
), Xf = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full"
}, qf = C.forwardRef(
  ({ className: e, size: t = "xl", ...n }, s) => /* @__PURE__ */ h.jsx(
    "div",
    {
      ref: s,
      className: v("mx-auto w-full px-4 sm:px-6 lg:px-8", Xf[t], e),
      ...n
    }
  )
), Zf = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx("div", { ref: n, className: v(e), ...t })
), ko = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8"
}, Jf = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}, Qf = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between"
}, eh = C.forwardRef(
  ({
    className: e,
    direction: t = "column",
    gap: n = "md",
    align: s = "start",
    justify: r = "start",
    wrap: o = !1,
    ...i
  }, a) => /* @__PURE__ */ h.jsx(
    "div",
    {
      ref: a,
      className: v(
        "flex",
        t === "row" ? "flex-row" : "flex-col",
        ko[n],
        Jf[s],
        Qf[r],
        o && "flex-wrap",
        e
      ),
      ...i
    }
  )
), th = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6"
}, nh = C.forwardRef(
  ({ className: e, cols: t = 2, gap: n = "md", ...s }, r) => /* @__PURE__ */ h.jsx(
    "div",
    {
      ref: r,
      className: v("grid", th[t], ko[n], e),
      ...s
    }
  )
), sh = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
    "hr",
    {
      ref: n,
      className: v("border-neutral-200", e),
      ...t
    }
  )
);
qf.displayName = "Container";
Zf.displayName = "Box";
eh.displayName = "Stack";
nh.displayName = "Grid";
sh.displayName = "Divider";
const rh = {
  default: "bg-secondary-50 text-secondary-700 border-secondary-200",
  primary: "bg-primary-50 text-primary-700 border-primary-200",
  secondary: "bg-secondary-100 text-secondary-700 border-secondary-200",
  success: "bg-success-50 text-success-700 border-success-200",
  warning: "bg-warning-50 text-warning-700 border-warning-200",
  error: "bg-error-50 text-error-700 border-error-200",
  info: "bg-info-50 text-info-700 border-info-200"
}, ih = {
  default: "bg-secondary-500",
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  error: "bg-error-500",
  info: "bg-info-500"
}, oh = {
  xs: "text-xs px-2 py-0.5",
  sm: "text-xs px-2.5 py-1",
  md: "text-sm px-3 py-1.5",
  lg: "text-base px-4 py-2",
  xl: "text-base px-5 py-2.5"
}, Vo = C.forwardRef(
  ({ className: e, variant: t = "default", size: n = "sm", dot: s = !1, ...r }, o) => /* @__PURE__ */ h.jsxs(
    "span",
    {
      ref: o,
      className: v(
        "inline-flex items-center gap-2 rounded-full border font-medium",
        rh[t],
        oh[n],
        e
      ),
      ...r,
      children: [
        s && /* @__PURE__ */ h.jsx("span", { className: v("h-2 w-2 rounded-full", ih[t]) }),
        r.children
      ]
    }
  )
);
Vo.displayName = "Badge";
const ah = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg"
}, lh = {
  circle: "rounded-full",
  square: "rounded-lg"
}, ch = (e) => {
  var r, o;
  if (!e) return "";
  const t = e.trim().split(/\s+/), n = ((r = t[0]) == null ? void 0 : r[0]) ?? "", s = t.length > 1 ? ((o = t[t.length - 1]) == null ? void 0 : o[0]) ?? "" : "";
  return `${n}${s}`.toUpperCase();
}, uh = C.forwardRef(
  ({ className: e, src: t, alt: n, name: s, size: r = "md", shape: o = "circle", ...i }, a) => {
    const l = ch(s || n);
    return /* @__PURE__ */ h.jsx(
      "div",
      {
        ref: a,
        className: v(
          "inline-flex items-center justify-center overflow-hidden bg-secondary-100 text-secondary-700 font-semibold",
          ah[r],
          lh[o],
          e
        ),
        ...i,
        children: t ? /* @__PURE__ */ h.jsx(
          "img",
          {
            src: t,
            alt: n || s || "Avatar",
            className: "h-full w-full object-cover"
          }
        ) : /* @__PURE__ */ h.jsx("span", { children: l || "?" })
      }
    );
  }
);
uh.displayName = "Avatar";
const dh = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
}, Eo = C.forwardRef(
  ({ className: e, padding: t = "md", ...n }, s) => /* @__PURE__ */ h.jsx(
    "div",
    {
      ref: s,
      className: v(
        "rounded-2xl border border-neutral-200 bg-white shadow-sm",
        dh[t],
        e
      ),
      ...n
    }
  )
), fh = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx("div", { ref: n, className: v("mb-4 space-y-1", e), ...t })
), hh = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
    "h3",
    {
      ref: n,
      className: v("text-body-large font-semibold text-neutral-900", e),
      ...t
    }
  )
), mh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "p",
  {
    ref: n,
    className: v("text-body-small text-neutral-500", e),
    ...t
  }
)), ph = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx("div", { ref: n, className: v("space-y-4", e), ...t })
), gh = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
    "div",
    {
      ref: n,
      className: v("mt-6 flex items-center justify-between", e),
      ...t
    }
  )
);
Eo.displayName = "Card";
fh.displayName = "CardHeader";
hh.displayName = "CardTitle";
mh.displayName = "CardDescription";
ph.displayName = "CardContent";
gh.displayName = "CardFooter";
const yh = C.forwardRef(
  ({
    className: e,
    title: t,
    value: n,
    icon: s,
    badgeLabel: r,
    badgeVariant: o = "success",
    helperText: i,
    ...a
  }, l) => /* @__PURE__ */ h.jsxs(
    Eo,
    {
      ref: l,
      padding: "none",
      className: v("p-6", e),
      ...a,
      children: [
        /* @__PURE__ */ h.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3", children: [
            s && /* @__PURE__ */ h.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600", children: s }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("p", { className: "text-body-small text-neutral-500", children: t }),
              /* @__PURE__ */ h.jsx("p", { className: "text-heading-medium font-semibold text-neutral-900", children: n })
            ] })
          ] }),
          r && /* @__PURE__ */ h.jsx(Vo, { size: "xs", variant: o, children: r })
        ] }),
        i && /* @__PURE__ */ h.jsx("p", { className: "mt-3 text-caption text-neutral-500", children: i })
      ]
    }
  )
);
yh.displayName = "StatCard";
const xh = C.forwardRef(({ className: e, title: t, description: n, icon: s, ...r }, o) => /* @__PURE__ */ h.jsx(
  "button",
  {
    ref: o,
    type: "button",
    className: v(
      "w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
      e
    ),
    ...r,
    children: /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-4", children: [
      s && /* @__PURE__ */ h.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600", children: s }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("p", { className: "text-body-medium font-semibold text-neutral-900", children: t }),
        n && /* @__PURE__ */ h.jsx("p", { className: "text-body-small text-neutral-500", children: n })
      ] })
    ] })
  }
));
xh.displayName = "QuickActionCard";
const vh = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
    "div",
    {
      ref: n,
      className: v(
        "divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white",
        e
      ),
      ...t
    }
  )
), bh = C.forwardRef(
  ({ className: e, leading: t, title: n, subtitle: s, meta: r, trailing: o, ...i }, a) => /* @__PURE__ */ h.jsxs(
    "div",
    {
      ref: a,
      className: v("flex items-start gap-4 p-4", e),
      ...i,
      children: [
        t && /* @__PURE__ */ h.jsx("div", { className: "flex h-10 w-10 items-center justify-center", children: t }),
        /* @__PURE__ */ h.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("p", { className: "text-body-medium font-semibold text-neutral-900", children: n }),
              s && /* @__PURE__ */ h.jsx("p", { className: "text-body-small text-neutral-500", children: s })
            ] }),
            r && /* @__PURE__ */ h.jsx("div", { className: "text-caption text-neutral-400", children: r })
          ] }),
          o && /* @__PURE__ */ h.jsx("div", { className: "mt-3", children: o })
        ] })
      ]
    }
  )
);
vh.displayName = "List";
bh.displayName = "ListItem";
const wh = C.forwardRef(
  ({ className: e, dense: t = !1, ...n }, s) => /* @__PURE__ */ h.jsx("div", { className: "w-full overflow-x-auto rounded-xl border border-neutral-200 bg-white", children: /* @__PURE__ */ h.jsx(
    "table",
    {
      ref: s,
      className: v(
        "w-full border-separate border-spacing-0 text-sm text-neutral-700",
        t ? "text-xs" : "text-sm",
        e
      ),
      ...n
    }
  ) })
), Th = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "thead",
  {
    ref: n,
    className: v("bg-neutral-50 text-neutral-600", e),
    ...t
  }
)), Sh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx("tbody", { ref: n, className: v("bg-white", e), ...t })), Ph = C.forwardRef(
  ({ className: e, hoverable: t = !0, ...n }, s) => /* @__PURE__ */ h.jsx(
    "tr",
    {
      ref: s,
      className: v(t && "hover:bg-neutral-50", e),
      ...n
    }
  )
), Ch = C.forwardRef(({ className: e, align: t = "left", ...n }, s) => /* @__PURE__ */ h.jsx(
  "th",
  {
    ref: s,
    className: v(
      "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600",
      t === "center" && "text-center",
      t === "right" && "text-right",
      "border-b border-neutral-200",
      e
    ),
    ...n
  }
)), _h = C.forwardRef(
  ({ className: e, align: t = "left", muted: n = !1, ...s }, r) => /* @__PURE__ */ h.jsx(
    "td",
    {
      ref: r,
      className: v(
        "px-4 py-4 border-b border-neutral-200",
        t === "center" && "text-center",
        t === "right" && "text-right",
        n && "text-neutral-500",
        e
      ),
      ...s
    }
  )
);
wh.displayName = "Table";
Th.displayName = "TableHead";
Sh.displayName = "TableBody";
Ph.displayName = "TableRow";
Ch.displayName = "TableHeaderCell";
_h.displayName = "TableCell";
const Tt = (e, t) => Array.from({ length: t - e + 1 }, (n, s) => e + s), jh = (e, t, n) => {
  const s = n * 2 + 3, r = s + 2;
  if (t <= r)
    return Tt(1, t);
  const o = Math.max(e - n, 1), i = Math.min(e + n, t), a = o > 2, l = i < t - 1;
  return !a && l ? [...Tt(1, s), "...", t] : a && !l ? [1, "...", ...Tt(t - s + 1, t)] : [1, "...", ...Tt(o, i), "...", t];
}, Ah = C.forwardRef(
  ({
    className: e,
    currentPage: t,
    totalPages: n,
    onPageChange: s,
    siblingCount: r = 1,
    ...o
  }, i) => {
    const a = jh(t, n, r), l = t <= 1, u = t >= n;
    return /* @__PURE__ */ h.jsxs(
      "div",
      {
        ref: i,
        className: v("inline-flex items-center gap-2", e),
        ...o,
        children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: v(
                "inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-600",
                l ? "opacity-40 cursor-not-allowed" : "hover:bg-neutral-50"
              ),
              onClick: () => !l && (s == null ? void 0 : s(t - 1)),
              disabled: l,
              "aria-label": "Previous page",
              children: /* @__PURE__ */ h.jsx(Re, { name: "chevron_left", size: "sm" })
            }
          ),
          a.map(
            (c, f) => typeof c == "string" ? /* @__PURE__ */ h.jsx("span", { className: "px-2 text-neutral-500", children: c }, `ellipsis-${f}`) : /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                className: v(
                  "min-w-[2rem] rounded-md border px-2 py-1 text-sm font-medium",
                  c === t ? "border-primary-500 bg-primary-50 text-primary-700" : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                ),
                onClick: () => s == null ? void 0 : s(c),
                "aria-current": c === t ? "page" : void 0,
                children: c
              },
              c
            )
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: v(
                "inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-600",
                u ? "opacity-40 cursor-not-allowed" : "hover:bg-neutral-50"
              ),
              onClick: () => !u && (s == null ? void 0 : s(t + 1)),
              disabled: u,
              "aria-label": "Next page",
              children: /* @__PURE__ */ h.jsx(Re, { name: "chevron_right", size: "sm" })
            }
          )
        ]
      }
    );
  }
);
Ah.displayName = "Pagination";
function v(...e) {
  return e.filter(Boolean).join(" ");
}
const Kr = () => Object.keys(Hr), Uh = (e) => typeof e != "string" ? Kr() : Kr().filter(
  (t) => t.toLowerCase().includes(e.toLowerCase())
), Rh = {
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
}, Wh = (e) => Rh[e];
export {
  _f as Alert,
  uh as Avatar,
  Vo as Badge,
  Zf as Box,
  wf as Breadcrumbs,
  Dt as Button,
  Eo as Card,
  ph as CardContent,
  mh as CardDescription,
  gh as CardFooter,
  fh as CardHeader,
  hh as CardTitle,
  nf as Checkbox,
  qf as Container,
  pf as DatePicker,
  $h as Dialog,
  sh as Divider,
  Hf as Drawer,
  nh as Grid,
  Re as Icon,
  Bf as IconButton,
  _o as Input,
  vh as List,
  bh as ListItem,
  $f as LoadingButton,
  Tf as Menu,
  Sf as MenuItem,
  Ro as Modal,
  Ah as Pagination,
  Bh as Popover,
  Af as ProgressBar,
  xh as QuickActionCard,
  af as Radio,
  cf as Select,
  Df as Skeleton,
  gf as Slider,
  Vf as Spinner,
  Kf as SplitButton,
  eh as Stack,
  yh as StatCard,
  mf as Switch,
  wh as Table,
  Sh as TableBody,
  _h as TableCell,
  Th as TableHead,
  Ch as TableHeaderCell,
  Ph as TableRow,
  yf as Tabs,
  bf as TabsContent,
  xf as TabsList,
  vf as TabsTrigger,
  Lf as Toast,
  Ih as Tooltip,
  Oh as animations,
  Nh as borders,
  Ee as breakpoints,
  v as cn,
  Vh as colors,
  Kr as getAllIconNames,
  Wh as getIconsByCategory,
  Rh as iconCategories,
  Lh as mediaQueries,
  Hd as motion,
  Uh as searchIcons,
  Dh as spacing,
  Eh as typography,
  Mh as zIndex
};
