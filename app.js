"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;
var CHANNEL_ID = 'UCOsM3EhSrxLLbYSukirSytw';
function AnimatedCounter(_ref) {
  var value = _ref.value,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 1500 : _ref$duration;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var counterRef = useRef(null);
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hasAnimated = _useState4[0],
    setHasAnimated = _useState4[1];
  useEffect(function () {
    if (value === null || value === undefined) return;
    var observer = new IntersectionObserver(function (entries) {
      var _entries = _slicedToArray(entries, 1),
        entry = _entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        var start = null;
        var targetValue = parseInt(value, 10);
        var _step = function step(timestamp) {
          if (!start) start = timestamp;
          var progress = timestamp - start;

          // Ease-out effect
          var easeOutQuart = 1 - Math.pow(1 - progress / duration, 4);
          var currentCount = Math.min(Math.floor(targetValue * easeOutQuart), targetValue);
          setCount(currentCount);
          if (progress < duration) {
            requestAnimationFrame(_step);
          } else {
            setCount(targetValue);
            setHasAnimated(true);
          }
        };
        requestAnimationFrame(_step);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return function () {
      return observer.disconnect();
    };
  }, [value, duration, hasAnimated]);

  // Add comma separators for readability (e.g. 3,842)
  var formattedCount = new Intl.NumberFormat().format(count);
  return /*#__PURE__*/React.createElement("span", {
    ref: counterRef
  }, value === null ? '...' : formattedCount);
}
function App() {
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isScrolled = _useState6[0],
    setIsScrolled = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    mobileMenuOpen = _useState8[0],
    setMobileMenuOpen = _useState8[1];
  var _useState9 = useState('home'),
    _useState0 = _slicedToArray(_useState9, 2),
    activeSection = _useState0[0],
    setActiveSection = _useState0[1];
  var _useState1 = useState([]),
    _useState10 = _slicedToArray(_useState1, 2),
    latestVideos = _useState10[0],
    setLatestVideos = _useState10[1];
  var _useState11 = useState(true),
    _useState12 = _slicedToArray(_useState11, 2),
    isLoading = _useState12[0],
    setIsLoading = _useState12[1];
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    activeVideoId = _useState14[0],
    setActiveVideoId = _useState14[1];
  var _useState15 = useState('idle'),
    _useState16 = _slicedToArray(_useState15, 2),
    formStatus = _useState16[0],
    setFormStatus = _useState16[1];
  var _useState17 = useState({
      name: '',
      email: '',
      message: ''
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    formData = _useState18[0],
    setFormData = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    fabOpen = _useState20[0],
    setFabOpen = _useState20[1];
  var _useState21 = useState({
      subscriberCount: null,
      viewCount: null,
      videoCount: null
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    stats = _useState22[0],
    setStats = _useState22[1];
  useEffect(function () {
    var addGoogleTranslateScript = function addGoogleTranslateScript() {
      var scriptId = 'google-translate-script';
      if (!document.getElementById(scriptId)) {
        var script = document.createElement('script');
        script.id = scriptId;
        script.type = 'text/javascript';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
        window.googleTranslateElementInit = function () {
          if (window.google && window.google.translate) {
            if (document.getElementById('google_translate_element')) {
              new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'ur,en',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
            if (document.getElementById('google_translate_element_mobile')) {
              new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'ur,en',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element_mobile');
            }
          }
        };
      }
    };
    addGoogleTranslateScript();
  }, []);
  useEffect(function () {
    var fetchStats = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return fetch('https://api.socialcounts.org/youtube-live-subscriber-count/UCOsM3EhSrxLLbYSukirSytw');
            case 1:
              response = _context.v;
              if (!response.ok) {
                _context.n = 3;
                break;
              }
              _context.n = 2;
              return response.json();
            case 2:
              data = _context.v;
              setStats({
                subscriberCount: data.counters.api.subscriberCount,
                viewCount: data.counters.api.viewCount,
                videoCount: data.counters.api.videoCount
              });
            case 3:
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error('Error fetching stats:', _t);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[0, 4]]);
      }));
      return function fetchStats() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchStats();
  }, []);
  useEffect(function () {
    var handleScroll = function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(function () {
    var sections = ['home', 'latest', 'programs', 'services', 'about', 'contact'];
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-150px 0px -150px 0px',
      threshold: 0.1
    });
    sections.forEach(function (sectionId) {
      var element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });
    return function () {
      sections.forEach(function (sectionId) {
        var element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  var scrollToSection = function scrollToSection(e, sectionId) {
    e.preventDefault();
    setMobileMenuOpen(false);
    var element = document.getElementById(sectionId);
    if (element) {
      var offset = 80;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  useEffect(function () {
    var fetchVideos = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var rssUrl, response, data, formattedVideos, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (CHANNEL_ID) {
                _context2.n = 1;
                break;
              }
              loadMockData();
              return _context2.a(2);
            case 1:
              _context2.p = 1;
              rssUrl = "https://www.youtube.com/feeds/videos.xml?channel_id=".concat(CHANNEL_ID);
              _context2.n = 2;
              return fetch("https://api.rss2json.com/v1/api.json?rss_url=".concat(encodeURIComponent(rssUrl)));
            case 2:
              response = _context2.v;
              if (response.ok) {
                _context2.n = 3;
                break;
              }
              throw new Error('Network response was not ok');
            case 3:
              _context2.n = 4;
              return response.json();
            case 4:
              data = _context2.v;
              if (!(data.status === 'ok')) {
                _context2.n = 5;
                break;
              }
              formattedVideos = data.items.slice(0, 6).map(function (item) {
                var videoId = item.link.split('v=')[1];
                return {
                  id: videoId,
                  title: item.title,
                  thumbnail: item.thumbnail || "https://i.ytimg.com/vi/".concat(videoId, "/maxresdefault.jpg"),
                  date: new Date(item.pubDate).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })
                };
              });
              setLatestVideos(formattedVideos);
              setIsLoading(false);
              _context2.n = 6;
              break;
            case 5:
              throw new Error('Failed to parse RSS');
            case 6:
              _context2.n = 8;
              break;
            case 7:
              _context2.p = 7;
              _t2 = _context2.v;
              console.error("Error fetching videos:", _t2);
              loadMockData();
            case 8:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 7]]);
      }));
      return function fetchVideos() {
        return _ref3.apply(this, arguments);
      };
    }();
    fetchVideos();
  }, []);
  var loadMockData = function loadMockData() {
    setTimeout(function () {
      setLatestVideos([{
        id: 'dQw4w9WgXcQ',
        title: 'Loading latest video...',
        thumbnail: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=600',
        date: 'Recent'
      }]);
      setIsLoading(false);
    }, 1200);
  };
  var handleFormSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(e) {
      var sanitizedName, sanitizedEmail, sanitizedMessage, response, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            e.preventDefault();
            setFormStatus('submitting');

            // Basic validation (although HTML5 required attributes handle most of this)
            sanitizedName = formData.name.trim().replace(/<[^>]*>?/gm, ''); // Basic strip HTML
            sanitizedEmail = formData.email.trim();
            sanitizedMessage = formData.message.trim().replace(/<[^>]*>?/gm, ''); // Basic strip HTML
            if (!(!sanitizedName || !sanitizedEmail || !sanitizedMessage)) {
              _context3.n = 1;
              break;
            }
            alert("Please fill out all fields with valid information.");
            setFormStatus('idle');
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            _context3.n = 2;
            return fetch('https://formsubmit.co/ajax/muftimujahid@gmail.com', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                name: sanitizedName,
                email: sanitizedEmail,
                message: sanitizedMessage,
                _subject: "New Message from ".concat(sanitizedName, " via Website"),
                _captcha: "false"
              })
            });
          case 2:
            response = _context3.v;
            if (!response.ok) {
              _context3.n = 3;
              break;
            }
            setFormStatus('success');
            setFormData({
              name: '',
              email: '',
              message: ''
            });
            setTimeout(function () {
              return setFormStatus('idle');
            }, 5000);
            _context3.n = 4;
            break;
          case 3:
            throw new Error('Form submission failed');
          case 4:
            _context3.n = 6;
            break;
          case 5:
            _context3.p = 5;
            _t3 = _context3.v;
            console.error("Error submitting form:", _t3);
            alert("There was an error sending your message. Please try again later or email directly.");
            setFormStatus('idle');
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 5]]);
    }));
    return function handleFormSubmit(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
  };
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isMiniPlayer = _useState24[0],
    setIsMiniPlayer = _useState24[1];
  useEffect(function () {
    if (activeVideoId && !isMiniPlayer) {
      // Do not lock scrolling if we want them to scroll down and trigger the mini player.
      // Instead, we will let them scroll naturally.
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'auto';
    }
    var handleScrollForPlayer = function handleScrollForPlayer() {
      if (activeVideoId) {
        if (window.scrollY > 300) {
          setIsMiniPlayer(true);
        } else {
          setIsMiniPlayer(false);
        }
      }
    };
    window.addEventListener('scroll', handleScrollForPlayer, {
      passive: true
    });
    return function () {
      return window.removeEventListener('scroll', handleScrollForPlayer);
    };
  }, [activeVideoId, isMiniPlayer]);
  var categories = [{
    title: 'Dars-e-Nizami',
    icon: 'fa-book-open',
    desc: 'Deep dives into classical Islamic texts like Hidaya and Noor ul Anwaar.',
    link: 'https://www.youtube.com/@drmuftimujahid/playlists'
  }, {
    title: 'Juma Bayans',
    icon: 'fa-users',
    desc: 'Friday khutbahs and sermons delivered at Masjid E Rahmath.',
    link: 'https://m.youtube.com/playlist?list=PLK_7akT-u6Cgkx6OQ3hZz4vsjyD-2vaAs'
  }, {
    title: 'Dars-e-Hadees',
    icon: 'fa-bookmark',
    desc: 'Short episodes and practical sessions on prophetic traditions.',
    link: 'https://www.youtube.com/@drmuftimujahid/playlists'
  }, {
    title: 'Daily Masail',
    icon: 'fa-heart',
    desc: 'Practical guidance explaining the rulings of Islam for daily life.',
    link: 'https://www.youtube.com/@drmuftimujahid/playlists'
  }];
  var servicesData = [{
    title: 'Islamic Studies',
    icon: 'fa-graduation-cap',
    desc: 'Comprehensive foundation in authentic Islamic knowledge, history, and principles.'
  }, {
    title: 'Quran Tajweed',
    icon: 'fa-book-quran',
    desc: 'Master the proper pronunciation and articulation rules for reciting the Holy Quran.'
  }, {
    title: 'Translation',
    icon: 'fa-language',
    desc: 'In-depth translation and exegesis of classical Islamic texts and scriptures.'
  }, {
    title: 'Hadith',
    icon: 'fa-book',
    desc: 'Study the sayings, actions, and approvals of Prophet Muhammad (PBUH).'
  }, {
    title: 'Fiqh',
    icon: 'fa-scale-balanced',
    desc: 'Understanding Islamic jurisprudence and practical rulings for daily life.'
  }, {
    title: 'Alim Course',
    icon: 'fa-certificate',
    desc: 'Complete, rigorous training on the Quran and Hadith to become a qualified scholar.'
  }, {
    title: 'Mufti Training',
    icon: 'fa-pen-nib',
    desc: 'Advanced training in Quran, Hadith, and Fiqh, qualifying one to issue religious edicts (Fatawa).'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 font-sans text-stone-100 selection:bg-amber-500/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] transform-gpu will-change-transform"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-[40%] right-[-5%] w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-[150px] transform-gpu will-change-transform"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] bg-teal-500/20 rounded-full blur-[130px] transform-gpu will-change-transform"
  })), activeVideoId && /*#__PURE__*/React.createElement("div", {
    className: "fixed z-[100] transition-all duration-500 ease-in-out ".concat(isMiniPlayer ? 'bottom-24 right-6 w-72 sm:w-96 rounded-2xl shadow-2xl border-2 border-white/20 hover:scale-105' : 'inset-0 flex items-center justify-center p-4 sm:p-6')
  }, !isMiniPlayer && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer transition-opacity",
    onClick: function onClick() {
      return setActiveVideoId(null);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative bg-black overflow-hidden z-10 aspect-video transition-all duration-500 ".concat(isMiniPlayer ? 'w-full h-full rounded-xl' : 'w-full max-w-5xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/20')
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-2 right-2 z-20 flex gap-2"
  }, isMiniPlayer && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setIsMiniPlayer(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    className: "w-8 h-8 bg-black/70 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors border border-white/20 backdrop-blur-md"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-expand text-xs"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveVideoId(null);
    },
    className: "bg-black/70 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors border border-white/20 backdrop-blur-md ".concat(isMiniPlayer ? 'w-8 h-8' : 'w-10 h-10 top-4 right-4 absolute')
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark text-sm"
  }))), /*#__PURE__*/React.createElement("iframe", {
    loading: "lazy",
    src: "https://www.youtube.com/embed/".concat(activeVideoId, "?autoplay=1"),
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "w-full h-full"
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "fixed w-full z-50 transition-all duration-300 ".concat(isScrolled ? 'py-3' : 'py-6')
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center transition-all duration-300 ".concat(isScrolled ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-2xl px-6 py-3' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 cursor-pointer",
    onClick: function onClick(e) {
      return scrollToSection(e, 'home');
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-emerald-950 font-serif font-bold text-xl shadow-lg"
  }, "MQ"), /*#__PURE__*/React.createElement("span", {
    className: "font-serif font-bold text-lg md:text-xl tracking-wide text-white drop-shadow-md"
  }, "Dr. Mufti Mujahid Ali Qasmi")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center space-x-8"
  }, ['home', 'latest', 'programs', 'services', 'about', 'contact'].map(function (item) {
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#".concat(item),
      onClick: function onClick(e) {
        return scrollToSection(e, item);
      },
      className: "text-sm font-medium transition-colors capitalize ".concat(activeSection === item ? 'text-amber-400' : 'text-white/80 hover:text-amber-400')
    }, item === 'latest' ? 'Videos' : item);
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/@drmuftimujahid?sub_confirmation=1",
    target: "_blank",
    rel: "noreferrer",
    className: "bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg hover:shadow-white/10"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-youtube text-red-500 text-lg"
  }), " Subscribe"), /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:block"
  }, /*#__PURE__*/React.createElement("div", {
    id: "google_translate_element",
    className: "translate-widget min-w-[120px] bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "md:hidden flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    className: "text-white",
    onClick: function onClick() {
      return setMobileMenuOpen(!mobileMenuOpen);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid ".concat(mobileMenuOpen ? 'fa-xmark' : 'fa-bars', " text-2xl")
  }))))), mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden absolute top-full left-4 right-4 mt-2 bg-emerald-950/95 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-2xl py-6 flex flex-col items-center space-y-5 z-50"
  }, ['home', 'latest', 'programs', 'services', 'about', 'contact'].map(function (item) {
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#".concat(item),
      onClick: function onClick(e) {
        return scrollToSection(e, item);
      },
      className: "text-lg font-medium capitalize ".concat(activeSection === item ? 'text-amber-400' : 'text-white')
    }, item === 'latest' ? 'Latest Videos' : item);
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/@drmuftimujahid?sub_confirmation=1",
    target: "_blank",
    rel: "noreferrer",
    className: "bg-red-600/90 backdrop-blur-md text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mt-4"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-youtube text-lg"
  }), " Subscribe Channel"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden fixed bottom-6 right-4 z-[60] bg-emerald-950/90 backdrop-blur-md p-1.5 rounded-xl shadow-2xl border border-white/20 scale-90 origin-bottom-right"
  }, /*#__PURE__*/React.createElement("div", {
    id: "google_translate_element_mobile",
    className: "translate-widget"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-6 left-6 z-[60] flex flex-col items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 transition-all duration-300 origin-bottom-left ".concat(fabOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10 pointer-events-none')
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/919700440940?text=Assalamu%20Alaikum%2C%20I%20have%20a%20query...",
    target: "_blank",
    rel: "noreferrer",
    className: "flex items-center gap-3 bg-white text-emerald-950 px-4 py-2 rounded-full font-bold shadow-xl hover:bg-green-100 transition-colors"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-whatsapp text-green-500 text-xl"
  }), " Ask on WhatsApp"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      setFabOpen(false);
      scrollToSection(e, 'contact');
    },
    className: "flex items-center gap-3 bg-white text-emerald-950 px-4 py-2 rounded-full font-bold shadow-xl hover:bg-amber-100 transition-colors text-left"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-envelope text-amber-500 text-xl"
  }), " Ask via Form")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFabOpen(!fabOpen);
    },
    className: "w-14 h-14 bg-gradient-to-tr from-amber-500 to-amber-400 text-emerald-950 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform border-2 border-white/20"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid transition-transform duration-300 ".concat(fabOpen ? 'fa-xmark rotate-90' : 'fa-comment-dots rotate-0')
  }))), /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-amber-300 text-sm font-semibold tracking-wider mb-8 shadow-lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-amber-400 animate-pulse"
  }), "ISLAMIC SCHOLAR & EDUCATOR"), /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block text-amber-400/90 text-2xl md:text-4xl mb-2 tracking-widest uppercase"
  }, "Dr."), "MUFTI MUJAHID ", /*#__PURE__*/React.createElement("br", {
    className: "hidden md:block"
  }), " ALI QASMI"), /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl mb-10 shadow-2xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-lg md:text-xl text-emerald-50/90 leading-relaxed font-light"
  }, "Guiding souls through the light of Quran & Sunnah. Join for deep insights into classical Islamic texts, daily spiritual guidance, and profound Friday sermons.")), /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-2xl mx-auto mb-10"
  }, latestVideos.length > 0 ? /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setActiveVideoId(latestVideos[0].id);
    },
    className: "relative w-full aspect-video rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border-4 border-white/10 hover:border-amber-400/50 transition-all duration-300"
  }, /*#__PURE__*/React.createElement("img", {
    src: latestVideos[0].thumbnail,
    alt: latestVideos[0].title,
    className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-20 bg-red-600/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(220,38,38,0.6)] transform group-hover:scale-110 transition-transform"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-play text-3xl ml-2"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-white font-bold text-lg line-clamp-1 drop-shadow-md text-left"
  }, latestVideos[0].title))) : /*#__PURE__*/React.createElement("div", {
    className: "w-full aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center animate-pulse"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 border-4 border-amber-400/30 border-t-amber-400 rounded-full animate-spin"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      return scrollToSection(e, 'latest');
    },
    className: "w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-400 text-emerald-950 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:scale-105 flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-layer-group text-xl"
  }), " Browse All Videos"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/@drmuftimujahid",
    target: "_blank",
    rel: "noreferrer",
    className: "w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:scale-105"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-youtube text-red-500 text-xl"
  }), " Explore Channel")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-6 px-8 shadow-xl notranslate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-md"
  }, /*#__PURE__*/React.createElement(AnimatedCounter, {
    value: stats.subscriberCount,
    duration: 2000
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-amber-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-youtube text-red-500"
  }), " Subscribers")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block w-px h-12 bg-white/20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-md"
  }, /*#__PURE__*/React.createElement(AnimatedCounter, {
    value: stats.viewCount,
    duration: 2000
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-teal-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-eye text-emerald-500"
  }), " Total Views")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block w-px h-12 bg-white/20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-md"
  }, /*#__PURE__*/React.createElement(AnimatedCounter, {
    value: stats.videoCount,
    duration: 2000
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-purple-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-video text-purple-500"
  }), " Videos"))))), /*#__PURE__*/React.createElement("section", {
    id: "latest",
    className: "py-24 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-end justify-between mb-16 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-xl"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-amber-400 font-semibold mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-youtube text-lg"
  }), " AUTOMATIC FEED"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-serif font-bold text-white mb-4"
  }, "Latest Uploads"), /*#__PURE__*/React.createElement("p", {
    className: "text-emerald-100/70 max-w-2xl text-lg"
  }, "Click any video below to watch it directly on this page without leaving the website.")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/@drmuftimujahid/videos",
    target: "_blank",
    rel: "noreferrer",
    className: "mt-6 md:mt-0 flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full font-medium transition-all backdrop-blur-sm group"
  }, "View All ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right text-sm group-hover:translate-x-1 transition-transform"
  }))), isLoading ? /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  }, [1, 2, 3].map(function (skeleton) {
    return /*#__PURE__*/React.createElement("div", {
      key: skeleton,
      className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-4 animate-pulse"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full h-52 bg-white/10 rounded-2xl mb-4"
    }), /*#__PURE__*/React.createElement("div", {
      className: "h-6 bg-white/10 rounded-lg w-3/4 mb-3"
    }), /*#__PURE__*/React.createElement("div", {
      className: "h-4 bg-white/10 rounded-lg w-1/2 mb-6"
    }));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  }, latestVideos.map(function (video) {
    return /*#__PURE__*/React.createElement("div", {
      key: video.id,
      onClick: function onClick() {
        return setActiveVideoId(video.id);
      },
      className: "cursor-pointer group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(251,191,36,0.15)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative overflow-hidden rounded-2xl"
    }, /*#__PURE__*/React.createElement("img", {
      loading: "lazy",
      src: video.thumbnail,
      alt: video.title,
      className: "w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-700 will-change-transform"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-emerald-900/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-16 h-16 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center text-white shadow-2xl transform scale-90 group-hover:scale-100 transition-transform bg-red-600/90 border-red-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-play text-2xl ml-1"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "p-6 pt-2 flex flex-col flex-grow relative z-10"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-xl text-white line-clamp-2 mb-4 group-hover:text-amber-300 transition-colors leading-snug notranslate"
    }, video.title), /*#__PURE__*/React.createElement("div", {
      className: "mt-auto flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 text-sm text-emerald-100/60 font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/5"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-regular fa-clock"
    }), " ", video.date), /*#__PURE__*/React.createElement("span", {
      className: "text-amber-400 text-sm font-bold uppercase tracking-wider flex items-center gap-1 group-hover:text-white transition-colors"
    }, "Play Now ", /*#__PURE__*/React.createElement("i", {
      className: "fa-regular fa-circle-play"
    })))));
  })))), /*#__PURE__*/React.createElement("section", {
    id: "programs",
    className: "py-24 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-16"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-md"
  }, "Educational Programs"), /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-emerald-100/80 max-w-2xl mx-auto text-lg"
  }, "Structured learning and regular spiritual gatherings covering various aspects of authentic Islamic knowledge.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  }, categories.map(function (cat, index) {
    return /*#__PURE__*/React.createElement("a", {
      key: index,
      href: cat.link,
      target: "_blank",
      rel: "noreferrer",
      className: "block bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 shadow-xl relative"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-up-right-from-square text-amber-400/50"
    })), /*#__PURE__*/React.createElement("div", {
      className: "w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/20 rounded-2xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-400/50 transition-all duration-300 shadow-inner"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid ".concat(cat.icon, " text-2xl")
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors"
    }, cat.title), /*#__PURE__*/React.createElement("p", {
      className: "text-emerald-50/70 leading-relaxed text-sm"
    }, cat.desc));
  })))), /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "py-24 relative z-10 bg-black/20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-16"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-md"
  }, "Our Services & Specializations"), /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-emerald-100/80 max-w-2xl mx-auto text-lg"
  }, "Comprehensive Islamic education ranging from foundational studies to advanced scholarly training.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  }, servicesData.map(function (service, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "flex flex-col bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 shadow-xl group hover:-translate-y-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/20 rounded-2xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500/30 transition-all duration-300 shadow-inner"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid ".concat(service.icon, " text-2xl")
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors"
    }, service.title), /*#__PURE__*/React.createElement("p", {
      className: "text-emerald-50/70 leading-relaxed text-sm mb-6 flex-grow"
    }, service.desc), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        return scrollToSection(e, 'contact');
      },
      className: "mt-auto w-full bg-white/10 hover:bg-amber-500 hover:text-emerald-950 text-white border border-white/20 px-4 py-3 rounded-xl font-medium transition-all backdrop-blur-sm flex items-center justify-center gap-2 group/btn"
    }, "Contact Us ", /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-right text-sm group-hover/btn:translate-x-1 transition-transform"
    })));
  })))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "py-24 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:w-1/2 relative w-full flex justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-emerald-500/20 rounded-[3rem] blur-xl z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 rounded-3xl shadow-2xl w-full max-w-sm h-auto aspect-[3/4] border border-white/20 bg-gradient-to-br from-emerald-800 to-emerald-950 flex flex-col items-center justify-center p-8 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMGw4IDhaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-40 h-40 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-emerald-950 font-serif font-bold text-6xl shadow-2xl mb-8 border-4 border-white/10 z-10 transform hover:scale-105 transition-transform duration-500"
  }, "MQ"), /*#__PURE__*/React.createElement("div", {
    className: "text-center z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-amber-400 font-bold text-lg mb-1 tracking-widest uppercase"
  }, "Dr. Mufti"), /*#__PURE__*/React.createElement("div", {
    className: "text-white font-serif font-bold text-2xl drop-shadow-lg"
  }, "Mujahid Ali Qasmi"), /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-1 bg-amber-500/50 mx-auto mt-4 rounded-full"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lg:w-1/2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-sm font-bold tracking-widest mb-6"
  }, "BIOGRAPHY"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight"
  }, "Dr. MUFTI MUJAHID ALI QASMI"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 text-emerald-50/80 text-lg leading-relaxed mb-10"
  }, /*#__PURE__*/React.createElement("p", null, "A dedicated Islamic scholar committed to spreading the authentic teachings of Islam. With a profound understanding of classical texts, he bridges the gap between historical wisdom and contemporary challenges."), /*#__PURE__*/React.createElement("p", null, "He regularly delivers Friday sermons (Khutbahs) at ", /*#__PURE__*/React.createElement("span", {
    className: "text-amber-300 font-semibold"
  }, "Masjid E Rahmath"), " in Banjara Hills, Hyderabad, and conducts special lectures at institutions like ", /*#__PURE__*/React.createElement("span", {
    className: "text-amber-300 font-semibold"
  }, "Misbah Ul Uloom"), ". His teachings cover a wide array of subjects including Fiqh (Jurisprudence), Tafseer (Quranic Exegesis), and Hadees.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-amber-400 flex-shrink-0"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-envelope text-xl"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-white"
  }, "Email Address"), /*#__PURE__*/React.createElement("p", {
    className: "text-emerald-100/60 text-sm break-all"
  }, "muftimujahid@gmail.com"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-amber-400 flex-shrink-0"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone text-xl"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-white"
  }, "Phone / WhatsApp"), /*#__PURE__*/React.createElement("p", {
    className: "text-emerald-100/60 text-sm"
  }, "+91-9700440940 (Masail)"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-amber-400 flex-shrink-0"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-youtube text-xl"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-white"
  }, "Official Channel"), /*#__PURE__*/React.createElement("p", {
    className: "text-emerald-100/60 text-sm"
  }, "@drmuftimujahid"))))))))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "py-24 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row gap-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:w-5/12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-sm font-bold tracking-widest mb-6"
  }, "GET IN TOUCH"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight"
  }, "Send a Message"), /*#__PURE__*/React.createElement("p", {
    className: "text-emerald-100/70 text-lg mb-10 leading-relaxed"
  }, "If you have a question regarding a specific Masail, or wish to invite Mufti Sahab for a Bayan, please send a message using the secure form.")), /*#__PURE__*/React.createElement("div", {
    className: "lg:w-7/12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden"
  }, formStatus === 'success' && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-20 bg-emerald-950/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-check text-5xl text-emerald-400 mb-6"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-3xl font-serif font-bold text-white mb-3"
  }, "Message Sent!"), /*#__PURE__*/React.createElement("p", {
    className: "text-emerald-100/80 text-lg"
  }, "Thank you for reaching out. We will get back to you soon.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleFormSubmit,
    className: "space-y-6 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-emerald-100/80 mb-2"
  }, "Your Name"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "text",
    name: "name",
    value: formData.name,
    onChange: handleInputChange,
    className: "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all",
    placeholder: "e.g. Abdullah"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-emerald-100/80 mb-2"
  }, "Email Address"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    name: "email",
    value: formData.email,
    onChange: handleInputChange,
    className: "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all",
    placeholder: "your@email.com"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-emerald-100/80 mb-2"
  }, "Your Message / Query"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    name: "message",
    value: formData.message,
    onChange: handleInputChange,
    rows: "5",
    className: "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all resize-none",
    placeholder: "Type your message or masail query here..."
  })), /*#__PURE__*/React.createElement("button", {
    disabled: formStatus === 'submitting',
    type: "submit",
    className: "w-full bg-amber-500 hover:bg-amber-400 text-emerald-950 px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
  }, formStatus === 'submitting' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-spinner fa-spin text-lg"
  }), " Preparing...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-paper-plane text-lg"
  }), " Send Message")))))))), /*#__PURE__*/React.createElement("footer", {
    className: "relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-lg pt-16 pb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-6",
    onClick: function onClick(e) {
      return scrollToSection(e, 'home');
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-emerald-950 font-serif font-bold text-xl shadow-lg cursor-pointer"
  }, "MQ"), /*#__PURE__*/React.createElement("span", {
    className: "font-serif font-bold text-xl text-white cursor-pointer"
  }, "Dr. Mufti Mujahid Ali")), /*#__PURE__*/React.createElement("p", {
    className: "text-emerald-100/60 text-sm leading-relaxed max-w-sm"
  }, "Dedicated to providing authentic Islamic knowledge, daily guidance, and spiritual awakening through the teachings of Quran and Sunnah.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-white font-bold text-lg mb-6"
  }, "Quick Links"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-4 text-emerald-100/60"
  }, ['home', 'latest', 'programs', 'services', 'contact'].map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item
    }, /*#__PURE__*/React.createElement("a", {
      href: "#".concat(item),
      onClick: function onClick(e) {
        return scrollToSection(e, item);
      },
      className: "hover:text-amber-400 transition-colors flex items-center gap-2 capitalize"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-chevron-right text-xs"
    }), " ", item === 'latest' ? 'Videos' : item));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-white font-bold text-lg mb-6"
  }, "Connect"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4 mb-6"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/@drmuftimujahid",
    target: "_blank",
    rel: "noreferrer",
    className: "w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-500 text-white transition-all shadow-lg hover:scale-110"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-brands fa-youtube text-xl"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "flex items-center gap-2 text-emerald-100/60 text-sm mb-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-location-dot text-amber-400 w-4"
  }), " Hyderabad, India"), /*#__PURE__*/React.createElement("p", {
    className: "flex items-center gap-2 text-emerald-100/60 text-sm mb-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone text-amber-400 w-4"
  }), " +91-9700440940"), /*#__PURE__*/React.createElement("p", {
    className: "flex items-center gap-2 text-emerald-100/60 text-sm"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-envelope text-amber-400 w-4"
  }), " muftimujahid@gmail.com"))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-100/40"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Dr. Mufti Mujahid Ali Qasmi. All rights reserved.")))));
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
