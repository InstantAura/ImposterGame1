var _SETTINGS = {
  API: {
    Enabled: !1,
    Log: {
      Events: {
        InitializeGame: !0,
        EndGame: !0,
        Level: {
          Begin: !0,
          End: !0,
          Win: !0,
          Lose: !0,
          Draw: !0
        }
      }
    }
  },
  Ad: {
    Mobile: {
      Preroll: {
        Enabled: !1,
        Duration: 5,
        Width: 300,
        Height: 250,
        Rotation: {
          Enabled: !1,
          Weight: {
            MobileAdInGamePreroll: 40,
            MobileAdInGamePreroll2: 40,
            MobileAdInGamePreroll3: 20
          }
        }
      },
      Header: {
        Enabled: !1,
        Duration: 5,
        Width: 320,
        Height: 50,
        Rotation: {
          Enabled: !1,
          Weight: {
            MobileAdInGameHeader: 40,
            MobileAdInGameHeader2: 40,
            MobileAdInGameHeader3: 20
          }
        }
      },
      Footer: {
        Enabled: !1,
        Duration: 5,
        Width: 320,
        Height: 50,
        Rotation: {
          Enabled: !1,
          Weight: {
            MobileAdInGameFooter: 40,
            MobileAdInGameFooter2: 40,
            MobileAdInGameFooter3: 20
          }
        }
      },
      End: {
        Enabled: !1,
        Duration: 1,
        Width: 300,
        Height: 250,
        Rotation: {
          Enabled: !1,
          Weight: {
            MobileAdInGameEnd: 40,
            MobileAdInGameEnd2: 40,
            MobileAdInGameEnd3: 20
          }
        }
      }
    }
  },
  Language: {
    Default: "en"
  },
  DeveloperBranding: {
    Splash: {
      Enabled: !1
    },
    Logo: {
      Enabled: !1,
      Link: "http://google.com",
      LinkEnabled: !1,
      NewWindow: !0,
      Width: 166,
      Height: 61
    }
  },
  Branding: {
    Splash: {
      Enabled: !1
    },
    Logo: {
      Enabled: !0,
      Link: "http://google.com",
      LinkEnabled: !1,
      NewWindow: !0,
      Width: 166,
      Height: 61
    }
  },
  MoreGames: {
    Enabled: !1,
    Link: "http://www.marketjs.com/game/links/mobile",
    NewWindow: !0
  }
};
var _STRINGS = {
  Ad: {
    Mobile: {
      Preroll: {
        ReadyIn: "The game is ready in ",
        Loading: "Your game is loading...",
        Close: "Close"
      },
      Header: {
        ReadyIn: "The game is ready in ",
        Loading: "Your game is loading...",
        Close: "Close"
      },
      End: {
        ReadyIn: "Advertisement ends in ",
        Loading: "Please wait ...",
        Close: "Close"
      }
    }
  },
  Splash: {
    Loading: "Loading ...",
    LogoLine1: "Some text here",
    LogoLine2: "powered by MarketJS",
    LogoLine3: "none"
  },
  Game: {
    Out: "OUT!",
    Deuce: "DEUCE!",
    MatchPoint: "MATCH POINT!",
    GamePoint: "GAME POINT!",
    NoStamina: "NO STAMINA!",
    Paused: "PAUSED",
    MatchStart: "BEGIN MATCH",
    BestOfThree: "BEST OF THREE",
    GameStart: "GAME # START",
    GameSet: "GAME # SET",
    MatchOver: "MATCH IS OVER",
    Win: "YOU WIN!",
    Lose: "YOU LOSE!",
    PowerupSpeed: "SPEED BURST",
    PowerupTime: "TIME SLOW",
    PowerupSmash: "SUPER SMASH",
    PowerupIllusion: "ILLUSION",
    MatchResult: "MATCH RESULT",
    YouWin: "YOU WIN",
    YouLose: "YOU LOSE"
  },
  Tutorial: {
    Title: "TUTORIAL",
    TapAny: "TAP ANYWHERE TO CONTINUE",
    Desktop: {
      1 : "PRESS A OR D OR ARROW KEYS TO MOVE",
      2 : "PRESS J TO HIT SHORT",
      3 : "PRESS K TO HIT LONG",
      4 : "PRESS L TO JUMP SMASH"
    },
    Mobile: {
      1 : "TAP TO MOVE LEFT/RIGHT",
      2 : "TAP TO HIT SHORT",
      3 : "TAP TO HIT LONG",
      4 : "TAP TO JUMP SMASH"
    },
    Both: {
      5 : "STAMINA BAR",
      6 : "POWER BAR",
      7 : "HITTING THE BALL \nFILLS UP THE POWER BAR",
      8 : "A FULL POWER BAR \nACTIVATES YOUR SPECIAL POWER",
      9 : "5 POINTS TO WIN A GAME \nFIRST PLAYER TO WIN 2 GAMES \nWINS THE MATCH",
      10 : "TAP ANYWHERE TO START"
    }
  },
  Mainmenu: {
    SelectCharacter: "SELECT CHARACTER",
    Settings: "SETTINGS",
    Mode: "MODE",
    Match: "MATCH",
    Training: "TRAINING",
    Venue: "VENUE",
    Power: "POWER",
    Ball: "BALL"
  }
};
var MobileAdInGamePreroll = {
  ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
  ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
  ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
  ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
  loading: _STRINGS.Ad.Mobile.Preroll.Loading,
  close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
  Initialize: function() {
    if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
      var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
      c = b.MobileAdInGamePreroll,
      d = c + b.MobileAdInGamePreroll2,
      b = d + b.MobileAdInGamePreroll3,
      e = Math.floor(100 * Math.random());
      console.log("seed: ", e);
      e <= c ? this.selectedOverlayName = "MobileAdInGamePreroll": e <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2": e <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
      console.log("Ad rotating preroll enabled")
    } else this.selectedOverlayName = "MobileAdInGamePreroll",
    console.log("Ad rotating preroll disabled");
    console.log("selected:", this.selectedOverlayName);
    this.overlay = $("#" + this.selectedOverlayName);
    this.box = $("#" + this.selectedOverlayName + "-Box");
    this.game = $("#game");
    this.boxContents = {
      footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
      header: $("#" + this.selectedOverlayName + "-Box-Header"),
      close: $("#" + this.selectedOverlayName + "-Box-Close"),
      body: $("#" + this.selectedOverlayName + "-Box-Body")
    };
    this.box.width(this.ad_width);
    this.box.height(this.ad_height);
    this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
    this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
    this.overlay.show(this.Timer(this.ad_duration))
  },
  Timer: function(b) {
    var c = b,
    d = setInterval(function() {
      MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
      MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
      c--;
      0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close), MobileAdInGamePreroll.boxContents.footer.text(""))
    },
    1E3)
  },
  Close: function() {
    this.boxContents.close.hide();
    this.overlay.hide()
  }
};
var MobileAdInGameHeader = {
  ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
  ad_width: _SETTINGS.Ad.Mobile.Header.Width,
  ad_height: _SETTINGS.Ad.Mobile.Header.Height,
  Initialize: function() {
    if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
      var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
      c = b.MobileAdInGameHeader,
      d = c + b.MobileAdInGameHeader2,
      b = d + b.MobileAdInGameHeader3,
      e = Math.floor(100 * Math.random());
      console.log("seed: ", e);
      e <= c ? this.selectedOverlayName = "MobileAdInGameHeader": e <= d ? this.selectedOverlayName = "MobileAdInGameHeader2": e <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
      console.log("Ad rotating header enabled")
    } else this.selectedOverlayName = "MobileAdInGameHeader",
    console.log("Ad rotating header disabled");
    this.div = $("#" + this.selectedOverlayName);
    this.game = $("#game");
    this.div.width(this.ad_width);
    this.div.height(this.ad_height);
    this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
    this.div.css("top", 0);
    this.div.show(this.Timer(this.ad_duration))
  },
  Timer: function(b) {
    var c = setInterval(function() {
      b--;
      0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
    },
    1E3)
  }
};
var MobileAdInGameFooter = {
  ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
  ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
  ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
  Initialize: function() {
    if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
      var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
      c = b.MobileAdInGameFooter,
      d = c + b.MobileAdInGameFooter2,
      b = d + b.MobileAdInGameFooter3,
      e = Math.floor(100 * Math.random());
      console.log("seed: ", e);
      e <= c ? this.selectedOverlayName = "MobileAdInGameFooter": e <= d ? this.selectedOverlayName = "MobileAdInGameFooter2": e <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
      console.log("Ad rotating footer enabled")
    } else this.selectedOverlayName = "MobileAdInGameFooter",
    console.log("Ad rotating footer disabled");
    this.div = $("#" + this.selectedOverlayName);
    this.game = $("#game");
    this.div.width(this.ad_width);
    this.div.height(this.ad_height);
    this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
    this.div.css("top", this.game.height() - this.div.height() - 5);
    this.div.show(this.Timer(this.ad_duration))
  },
  Timer: function(b) {
    var c = setInterval(function() {
      b--;
      0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
    },
    1E3)
  }
};
var MobileAdInGameEnd = {
  ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
  ad_width: _SETTINGS.Ad.Mobile.End.Width,
  ad_height: _SETTINGS.Ad.Mobile.End.Height,
  ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
  loading: _STRINGS.Ad.Mobile.End.Loading,
  close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
  Initialize: function() {
    if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
      var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
      c = b.MobileAdInGameEnd,
      d = c + b.MobileAdInGameEnd2,
      b = d + b.MobileAdInGameEnd3,
      e = Math.floor(100 * Math.random());
      console.log("seed: ", e);
      e <= c ? this.selectedOverlayName = "MobileAdInGameEnd": e <= d ? this.selectedOverlayName = "MobileAdInGameEnd2": e <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
      console.log("Ad rotating end enabled")
    } else this.selectedOverlayName = "MobileAdInGameEnd",
    console.log("Ad rotating end disabled");
    console.log("selected:", this.selectedOverlayName);
    this.overlay = $("#" + this.selectedOverlayName);
    this.box = $("#" + this.selectedOverlayName + "-Box");
    this.game = $("#game");
    this.boxContents = {
      footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
      header: $("#" + this.selectedOverlayName + "-Box-Header"),
      close: $("#" + this.selectedOverlayName + "-Box-Close"),
      body: $("#" + this.selectedOverlayName + "-Box-Body")
    };
    this.box.width(this.ad_width);
    this.box.height(this.ad_height);
    this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
    this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
    this.overlay.show(this.Timer(this.ad_duration))
  },
  Timer: function(b) {
    var c = b,
    d = setInterval(function() {
      MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
      MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
      c--;
      0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
    },
    1E3)
  },
  Close: function() {
    this.boxContents.close.hide();
    this.overlay.hide()
  }
}; !
function(b, c) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = b.document ? c(b, !0) : function(b) {
    if (!b.document) throw Error("jQuery requires a window with a document");
    return c(b)
  }: c(b)
} ("undefined" != typeof window ? window: this,
function(b, c) {
  function d(b, c) {
    c = c || z;
    var d = c.createElement("script");
    d.text = b;
    c.head.appendChild(d).parentNode.removeChild(d)
  }
  function e(b) {
    var c = !!b && "length" in b && b.length,
    d = j.type(b);
    return "function" !== d && !j.isWindow(b) && ("array" === d || 0 === c || "number" == typeof c && 0 < c && c - 1 in b)
  }
  function f(b, c) {
    return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
  }
  function g(b, c, d) {
    return j.isFunction(c) ? j.grep(b,
    function(b, x) {
      return !! c.call(b, x, b) !== d
    }) : c.nodeType ? j.grep(b,
    function(b) {
      return b === c !== d
    }) : "string" != typeof c ? j.grep(b,
    function(b) {
      return - 1 < Ca.call(c, b) !== d
    }) : Cc.test(c) ? j.filter(c, b, d) : (c = j.filter(c, b), j.grep(b,
    function(b) {
      return - 1 < Ca.call(c, b) !== d && 1 === b.nodeType
    }))
  }
  function n(b, c) {
    for (; (b = b[c]) && 1 !== b.nodeType;);
    return b
  }
  function m(b) {
    return b
  }
  function l(b) {
    throw b;
  }
  function p(b, c, d, e) {
    var l;
    try {
      b && j.isFunction(l = b.promise) ? l.call(b).done(c).fail(d) : b && j.isFunction(l = b.then) ? l.call(b, c, d) : c.apply(void 0, [b].slice(e))
    } catch(f) {
      d.apply(void 0, [f])
    }
  }
  function q() {
    z.removeEventListener("DOMContentLoaded", q);
    b.removeEventListener("load", q);
    j.ready()
  }
  function r() {
    this.expando = j.expando + r.uid++
  }
  function s(b, c, d) {
    var e;
    if (void 0 === d && 1 === b.nodeType) if (e = "data-" + c.replace(Dc, "-$&").toLowerCase(), d = b.getAttribute(e), "string" == typeof d) {
      try {
        d = "true" === d || "false" !== d && ("null" === d ? null: d === +d + "" ? +d: Ec.test(d) ? JSON.parse(d) : d)
      } catch(l) {}
      P.set(b, c, d)
    } else d = void 0;
    return d
  }
  function u(b, c, d, e) {
    var l, f = 1,
    g = 20,
    p = e ?
    function() {
      return e.cur()
    }: function() {
      return j.css(b, c, "")
    },
    q = p(),
    m = d && d[3] || (j.cssNumber[c] ? "": "px"),
    r = (j.cssNumber[c] || "px" !== m && +q) && Ea.exec(j.css(b, c));
    if (r && r[3] !== m) {
      m = m || r[3];
      d = d || [];
      r = +q || 1;
      do f = f || ".5",
      r /= f,
      j.style(b, c, r + m);
      while (f !== (f = p() / q) && 1 !== f && --g)
    }
    return d && (r = +r || +q || 0, l = d[1] ? r + (d[1] + 1) * d[2] : +d[2], e && (e.unit = m, e.start = r, e.end = l)),
    l
  }
  function t(b, c) {
    for (var d, e, l = [], f = 0, g = b.length; f < g; f++) if (e = b[f], e.style) if (d = e.style.display, c) {
      if ("none" === d && (l[f] = B.get(e, "display") || null, l[f] || (e.style.display = "")), "" === e.style.display && Ma(e)) {
        d = l;
        var p = f,
        q, m = void 0;
        q = e.ownerDocument;
        var r = e.nodeName;
        q = (e = Ab[r]) ? e: (m = q.body.appendChild(q.createElement(r)), e = j.css(m, "display"), m.parentNode.removeChild(m), "none" === e && (e = "block"), Ab[r] = e, e);
        d[p] = q
      }
    } else "none" !== d && (l[f] = "none", B.set(e, "display", d));
    for (f = 0; f < g; f++) null != l[f] && (b[f].style.display = l[f]);
    return b
  }
  function y(b, c) {
    var d;
    return d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : [],
    void 0 === c || c && f(b, c) ? j.merge([b], d) : d
  }
  function F(b, c) {
    for (var d = 0,
    e = b.length; d < e; d++) B.set(b[d], "globalEval", !c || B.get(c[d], "globalEval"))
  }
  function E(b, c, d, e, l) {
    for (var f, g, p, q, m = c.createDocumentFragment(), r = [], n = 0, s = b.length; n < s; n++) if (f = b[n], f || 0 === f) if ("object" === j.type(f)) j.merge(r, f.nodeType ? [f] : f);
    else if (Fc.test(f)) {
      g = g || m.appendChild(c.createElement("div"));
      p = (Bb.exec(f) || ["", ""])[1].toLowerCase();
      p = S[p] || S._default;
      g.innerHTML = p[1] + j.htmlPrefilter(f) + p[2];
      for (p = p[0]; p--;) g = g.lastChild;
      j.merge(r, g.childNodes);
      g = m.firstChild;
      g.textContent = ""
    } else r.push(c.createTextNode(f));
    m.textContent = "";
    for (n = 0; f = r[n++];) if (e && -1 < j.inArray(f, e)) l && l.push(f);
    else if (q = j.contains(f.ownerDocument, f), g = y(m.appendChild(f), "script"), q && F(g), d) for (p = 0; f = g[p++];) Cb.test(f.type || "") && d.push(f);
    return m
  }
  function J() {
    return ! 0
  }
  function T() {
    return ! 1
  }
  function la() {
    try {
      return z.activeElement
    } catch(b) {}
  }
  function O(b, c, d, e, l, f) {
    var g, p;
    if ("object" == typeof c) {
      "string" != typeof d && (e = e || d, d = void 0);
      for (p in c) O(b, p, d, e, c[p], f);
      return b
    }
    if (null == e && null == l ? (l = d, e = d = void 0) : null == l && ("string" == typeof d ? (l = e, e = void 0) : (l = e, e = d, d = void 0)), !1 === l) l = T;
    else if (!l) return b;
    return 1 === f && (g = l, l = function(b) {
      return j().off(b),
      g.apply(this, arguments)
    },
    l.guid = g.guid || (g.guid = j.guid++)),
    b.each(function() {
      j.event.add(this, c, l, e, d)
    })
  }
  function Db(b, c) {
    return f(b, "table") && f(11 !== c.nodeType ? c: c.firstChild, "tr") ? j(">tbody", b)[0] || b: b
  }
  function Gc(b) {
    return b.type = (null !== b.getAttribute("type")) + "/" + b.type,
    b
  }
  function Hc(b) {
    var c = Ic.exec(b.type);
    return c ? b.type = c[1] : b.removeAttribute("type"),
    b
  }
  function Eb(b, c) {
    var d, e, l, f, g, p;
    if (1 === c.nodeType) {
      if (B.hasData(b) && (d = B.access(b), e = B.set(c, d), p = d.events)) for (l in delete e.handle, e.events = {},
      p) {
        d = 0;
        for (e = p[l].length; d < e; d++) j.event.add(c, l, p[l][d])
      }
      P.hasData(b) && (f = P.access(b), g = j.extend({},
      f), P.set(c, g))
    }
  }
  function wa(b, c, e, l) {
    c = Fb.apply([], c);
    var f, g, p, q, m = 0,
    r = b.length,
    n = r - 1,
    s = c[0],
    u = j.isFunction(s);
    if (u || 1 < r && "string" == typeof s && !G.checkClone && Jc.test(s)) return b.each(function(d) {
      var f = b.eq(d);
      u && (c[0] = s.call(this, d, f.html()));
      wa(f, c, e, l)
    });
    if (r && (f = E(c, b[0].ownerDocument, !1, b, l), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || l)) {
      g = j.map(y(f, "script"), Gc);
      for (p = g.length; m < r; m++) q = f,
      m !== n && (q = j.clone(q, !0, !0), p && j.merge(g, y(q, "script"))),
      e.call(b[m], q, m);
      if (p) {
        f = g[g.length - 1].ownerDocument;
        j.map(g, Hc);
        for (m = 0; m < p; m++) q = g[m],
        Cb.test(q.type || "") && !B.access(q, "globalEval") && j.contains(f, q) && (q.src ? j._evalUrl && j._evalUrl(q.src) : d(q.textContent.replace(Lc, ""), f))
      }
    }
    return b
  }
  function Gb(b, c, d) {
    for (var e = c ? j.filter(c, b) : b, l = 0; null != (c = e[l]); l++) d || 1 !== c.nodeType || j.cleanData(y(c)),
    c.parentNode && (d && j.contains(c.ownerDocument, c) && F(y(c, "script")), c.parentNode.removeChild(c));
    return b
  }
  function Fa(b, c, d) {
    var e, l, f, g, p = b.style;
    return d = d || Na(b),
    d && (g = d.getPropertyValue(c) || d[c], "" !== g || j.contains(b.ownerDocument, b) || (g = j.style(b, c)), !G.pixelMarginRight() && gb.test(g) && Hb.test(c) && (e = p.width, l = p.minWidth, f = p.maxWidth, p.minWidth = p.maxWidth = p.width = g, g = d.width, p.width = e, p.minWidth = l, p.maxWidth = f)),
    void 0 !== g ? g + "": g
  }
  function Ib(b, c) {
    return {
      get: function() {
        return b() ? void delete this.get: (this.get = c).apply(this, arguments)
      }
    }
  }
  function Jb(b) {
    var c = j.cssProps[b];
    if (!c) {
      var c = j.cssProps,
      d;
      a: if (d = b, !(d in Kb)) {
        for (var e = d[0].toUpperCase() + d.slice(1), l = Lb.length; l--;) if (d = Lb[l] + e, d in Kb) break a;
        d = void 0
      }
      c = c[b] = d || b
    }
    return c
  }
  function Mb(b, c, d) {
    return (b = Ea.exec(c)) ? Math.max(0, b[2] - (d || 0)) + (b[3] || "px") : c
  }
  function Nb(b, c, d, e, l) {
    var f = 0;
    for (c = d === (e ? "border": "content") ? 4 : "width" === c ? 1 : 0; 4 > c; c += 2)"margin" === d && (f += j.css(b, d + ma[c], !0, l)),
    e ? ("content" === d && (f -= j.css(b, "padding" + ma[c], !0, l)), "margin" !== d && (f -= j.css(b, "border" + ma[c] + "Width", !0, l))) : (f += j.css(b, "padding" + ma[c], !0, l), "padding" !== d && (f += j.css(b, "border" + ma[c] + "Width", !0, l)));
    return f
  }
  function Ob(b, c, d) {
    var e, l = Na(b),
    f = Fa(b, c, l),
    g = "border-box" === j.css(b, "boxSizing", !1, l);
    return gb.test(f) ? f: (e = g && (G.boxSizingReliable() || f === b.style[c]), "auto" === f && (f = b["offset" + c[0].toUpperCase() + c.slice(1)]), f = parseFloat(f) || 0, f + Nb(b, c, d || (g ? "border": "content"), e, l) + "px")
  }
  function Q(b, c, d, e, l) {
    return new Q.prototype.init(b, c, d, e, l)
  }
  function hb() {
    Oa && (!1 === z.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(hb) : b.setTimeout(hb, j.fx.interval), j.fx.tick())
  }
  function Pb() {
    return b.setTimeout(function() {
      xa = void 0
    }),
    xa = j.now()
  }
  function Pa(b, c) {
    var d, e = 0,
    l = {
      height: b
    };
    for (c = c ? 1 : 0; 4 > e; e += 2 - c) d = ma[e],
    l["margin" + d] = l["padding" + d] = b;
    return c && (l.opacity = l.width = b),
    l
  }
  function Qb(b, c, d) {
    for (var e, l = (Y.tweeners[c] || []).concat(Y.tweeners["*"]), f = 0, j = l.length; f < j; f++) if (e = l[f].call(d, c, b)) return e
  }
  function Y(b, c, d) {
    var e, l, f = 0,
    g = Y.prefilters.length,
    p = j.Deferred().always(function() {
      delete q.elem
    }),
    q = function() {
      if (l) return ! 1;
      for (var c = xa || Pb(), c = Math.max(0, m.startTime + m.duration - c), d = 1 - (c / m.duration || 0), D = 0, e = m.tweens.length; D < e; D++) m.tweens[D].run(d);
      return p.notifyWith(b, [m, d, c]),
      1 > d && e ? c: (e || p.notifyWith(b, [m, 1, 0]), p.resolveWith(b, [m]), !1)
    },
    m = p.promise({
      elem: b,
      props: j.extend({},
      c),
      opts: j.extend(!0, {
        specialEasing: {},
        easing: j.easing._default
      },
      d),
      originalProperties: c,
      originalOptions: d,
      startTime: xa || Pb(),
      duration: d.duration,
      tweens: [],
      createTween: function(c, d) {
        var D = j.Tween(b, m.opts, c, d, m.opts.specialEasing[c] || m.opts.easing);
        return m.tweens.push(D),
        D
      },
      stop: function(c) {
        var d = 0,
        D = c ? m.tweens.length: 0;
        if (l) return this;
        for (l = !0; d < D; d++) m.tweens[d].run(1);
        return c ? (p.notifyWith(b, [m, 1, 0]), p.resolveWith(b, [m, c])) : p.rejectWith(b, [m, c]),
        this
      }
    });
    c = m.props;
    d = m.opts.specialEasing;
    var r, n, s, u;
    for (e in c) if (r = j.camelCase(e), n = d[r], s = c[e], Array.isArray(s) && (n = s[1], s = c[e] = s[0]), e !== r && (c[r] = s, delete c[e]), u = j.cssHooks[r], u && "expand" in u) for (e in s = u.expand(s), delete c[r], s) e in c || (c[e] = s[e], d[e] = n);
    else d[r] = n;
    for (; f < g; f++) if (e = Y.prefilters[f].call(m, b, c, m.opts)) return j.isFunction(e.stop) && (j._queueHooks(m.elem, m.opts.queue).stop = j.proxy(e.stop, e)),
    e;
    return j.map(c, Qb, m),
    j.isFunction(m.opts.start) && m.opts.start.call(b, m),
    m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always),
    j.fx.timer(j.extend(q, {
      elem: b,
      anim: m,
      queue: m.opts.queue
    })),
    m
  }
  function na(b) {
    return (b.match(U) || []).join(" ")
  }
  function oa(b) {
    return b.getAttribute && b.getAttribute("class") || ""
  }
  function ib(b, c, d, e) {
    var l;
    if (Array.isArray(c)) j.each(c,
    function(c, D) {
      d || Mc.test(b) ? e(b, D) : ib(b + "[" + ("object" == typeof D && null != D ? c: "") + "]", D, d, e)
    });
    else if (d || "object" !== j.type(c)) e(b, c);
    else for (l in c) ib(b + "[" + l + "]", c[l], d, e)
  }
  function Rb(b) {
    return function(c, d) {
      "string" != typeof c && (d = c, c = "*");
      var e, l = 0,
      f = c.toLowerCase().match(U) || [];
      if (j.isFunction(d)) for (; e = f[l++];)"+" === e[0] ? (e = e.slice(1) || "*", (b[e] = b[e] || []).unshift(d)) : (b[e] = b[e] || []).push(d)
    }
  }
  function Sb(b, c, d, e) {
    function l(p) {
      var q;
      return f[p] = !0,
      j.each(b[p] || [],
      function(b, x) {
        var j = x(c, d, e);
        return "string" != typeof j || g || f[j] ? g ? !(q = j) : void 0 : (c.dataTypes.unshift(j), l(j), !1)
      }),
      q
    }
    var f = {},
    g = b === jb;
    return l(c.dataTypes[0]) || !f["*"] && l("*")
  }
  function kb(b, c) {
    var d, e, l = j.ajaxSettings.flatOptions || {};
    for (d in c) void 0 !== c[d] && ((l[d] ? b: e || (e = {}))[d] = c[d]);
    return e && j.extend(!0, b, e),
    b
  }
  var pa = [],
  z = b.document,
  Nc = Object.getPrototypeOf,
  qa = pa.slice,
  Fb = pa.concat,
  lb = pa.push,
  Ca = pa.indexOf,
  Qa = {},
  Tb = Qa.toString,
  Ra = Qa.hasOwnProperty,
  Ub = Ra.toString,
  Oc = Ub.call(Object),
  G = {},
  j = function(b, c) {
    return new j.fn.init(b, c)
  },
  Pc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  Qc = /^-ms-/,
  Rc = /-([a-z])/g,
  Sc = function(b, c) {
    return c.toUpperCase()
  };
  j.fn = j.prototype = {
    jquery: "3.2.1",
    constructor: j,
    length: 0,
    toArray: function() {
      return qa.call(this)
    },
    get: function(b) {
      return null == b ? qa.call(this) : 0 > b ? this[b + this.length] : this[b]
    },
    pushStack: function(b) {
      b = j.merge(this.constructor(), b);
      return b.prevObject = this,
      b
    },
    each: function(b) {
      return j.each(this, b)
    },
    map: function(b) {
      return this.pushStack(j.map(this,
      function(c, d) {
        return b.call(c, d, c)
      }))
    },
    slice: function() {
      return this.pushStack(qa.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq( - 1)
    },
    eq: function(b) {
      var c = this.length;
      b = +b + (0 > b ? c: 0);
      return this.pushStack(0 <= b && b < c ? [this[b]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: lb,
    sort: pa.sort,
    splice: pa.splice
  };
  j.extend = j.fn.extend = function() {
    var b, c, d, e, l, f, g = arguments[0] || {},
    p = 1,
    q = arguments.length,
    m = !1;
    "boolean" == typeof g && (m = g, g = arguments[p] || {},
    p++);
    "object" == typeof g || j.isFunction(g) || (g = {});
    for (p === q && (g = this, p--); p < q; p++) if (null != (b = arguments[p])) for (c in b) d = g[c],
    e = b[c],
    g !== e && (m && e && (j.isPlainObject(e) || (l = Array.isArray(e))) ? (l ? (l = !1, f = d && Array.isArray(d) ? d: []) : f = d && j.isPlainObject(d) ? d: {},
    g[c] = j.extend(m, f, e)) : void 0 !== e && (g[c] = e));
    return g
  };
  j.extend({
    expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(b) {
      throw Error(b);
    },
    noop: function() {},
    isFunction: function(b) {
      return "function" === j.type(b)
    },
    isWindow: function(b) {
      return null != b && b === b.window
    },
    isNumeric: function(b) {
      var c = j.type(b);
      return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b))
    },
    isPlainObject: function(b) {
      var c, d;
      return ! (!b || "[object Object]" !== Tb.call(b)) && (!(c = Nc(b)) || (d = Ra.call(c, "constructor") && c.constructor, "function" == typeof d && Ub.call(d) === Oc))
    },
    isEmptyObject: function(b) {
      for (var c in b) return ! 1;
      return ! 0
    },
    type: function(b) {
      return null == b ? b + "": "object" == typeof b || "function" == typeof b ? Qa[Tb.call(b)] || "object": typeof b
    },
    globalEval: function(b) {
      d(b)
    },
    camelCase: function(b) {
      return b.replace(Qc, "ms-").replace(Rc, Sc)
    },
    each: function(b, c) {
      var d, l = 0;
      if (e(b)) for (d = b.length; l < d && !1 !== c.call(b[l], l, b[l]); l++);
      else for (l in b) if (!1 === c.call(b[l], l, b[l])) break;
      return b
    },
    trim: function(b) {
      return null == b ? "": (b + "").replace(Pc, "")
    },
    makeArray: function(b, c) {
      var d = c || [];
      return null != b && (e(Object(b)) ? j.merge(d, "string" == typeof b ? [b] : b) : lb.call(d, b)),
      d
    },
    inArray: function(b, c, d) {
      return null == c ? -1 : Ca.call(c, b, d)
    },
    merge: function(b, c) {
      for (var d = +c.length,
      e = 0,
      l = b.length; e < d; e++) b[l++] = c[e];
      return b.length = l,
      b
    },
    grep: function(b, c, d) {
      for (var e = [], l = 0, f = b.length, j = !d; l < f; l++) d = !c(b[l], l),
      d !== j && e.push(b[l]);
      return e
    },
    map: function(b, c, d) {
      var l, f, j = 0,
      g = [];
      if (e(b)) for (l = b.length; j < l; j++) f = c(b[j], j, d),
      null != f && g.push(f);
      else for (j in b) f = c(b[j], j, d),
      null != f && g.push(f);
      return Fb.apply([], g)
    },
    guid: 1,
    proxy: function(b, c) {
      var d, e, l;
      if ("string" == typeof c && (d = b[c], c = b, b = d), j.isFunction(b)) return e = qa.call(arguments, 2),
      l = function() {
        return b.apply(c || this, e.concat(qa.call(arguments)))
      },
      l.guid = b.guid = b.guid || j.guid++,
      l
    },
    now: Date.now,
    support: G
  });
  "function" == typeof Symbol && (j.fn[Symbol.iterator] = pa[Symbol.iterator]);
  j.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
  function(b, c) {
    Qa["[object " + c + "]"] = c.toLowerCase()
  });
  var ha, mb = b,
  C = function(b, c, d, e) {
    var l, f, j, g, p, q = c && c.ownerDocument,
    m = c ? c.nodeType: 9;
    if (d = d || [], "string" != typeof b || !b || 1 !== m && 9 !== m && 11 !== m) return d;
    if (!e && ((c ? c.ownerDocument || c: V) !== H && ia(c), c = c || H, W)) {
      if (11 !== m && (g = Tc.exec(b))) if (l = g[1]) if (9 === m) {
        if (! (f = c.getElementById(l))) return d;
        if (f.id === l) return d.push(f),
        d
      } else {
        if (q && (f = q.getElementById(l)) && Ga(c, f) && f.id === l) return d.push(f),
        d
      } else {
        if (g[2]) return ja.apply(d, c.getElementsByTagName(b)),
        d;
        if ((l = g[3]) && L.getElementsByClassName && c.getElementsByClassName) return ja.apply(d, c.getElementsByClassName(l)),
        d
      }
      if (L.qsa && !Sa[b + " "] && (!N || !N.test(b))) {
        if (1 !== m) q = c,
        p = b;
        else if ("object" !== c.nodeName.toLowerCase()) { (j = c.getAttribute("id")) ? j = j.replace(Vb, Wb) : c.setAttribute("id", j = M);
          f = Ha(b);
          for (l = f.length; l--;) f[l] = "#" + j + " " + Ta(f[l]);
          p = f.join(",");
          q = nb.test(b) && ob(c.parentNode) || c
        }
        if (p) try {
          return ja.apply(d, q.querySelectorAll(p)),
          d
        } catch(r) {} finally {
          j === M && c.removeAttribute("id")
        }
      }
    }
    return Xb(b.replace(Ua, "$1"), c, d, e)
  },
  pb = function() {
    function b(d, e) {
      return c.push(d + " ") > A.cacheLength && delete b[c.shift()],
      b[d + " "] = e
    }
    var c = [];
    return b
  },
  Z = function(b) {
    return b[M] = !0,
    b
  },
  ba = function(b) {
    var c = H.createElement("fieldset");
    try {
      return !! b(c)
    } catch(d) {
      return ! 1
    } finally {
      c.parentNode && c.parentNode.removeChild(c)
    }
  },
  qb = function(b, c) {
    for (var d = b.split("|"), e = d.length; e--;) A.attrHandle[d[e]] = c
  },
  Yb = function(b, c) {
    var d = c && b,
    e = d && 1 === b.nodeType && 1 === c.nodeType && b.sourceIndex - c.sourceIndex;
    if (e) return e;
    if (d) for (; d = d.nextSibling;) if (d === c) return - 1;
    return b ? 1 : -1
  },
  Uc = function(b) {
    return function(c) {
      return "input" === c.nodeName.toLowerCase() && c.type === b
    }
  },
  Vc = function(b) {
    return function(c) {
      var d = c.nodeName.toLowerCase();
      return ("input" === d || "button" === d) && c.type === b
    }
  },
  Zb = function(b) {
    return function(c) {
      return "form" in c ? c.parentNode && !1 === c.disabled ? "label" in c ? "label" in c.parentNode ? c.parentNode.disabled === b: c.disabled === b: c.isDisabled === b || c.isDisabled !== !b && Wc(c) === b: c.disabled === b: "label" in c && c.disabled === b
    }
  },
  ra = function(b) {
    return Z(function(c) {
      return c = +c,
      Z(function(d, e) {
        for (var l, f = b([], d.length, c), j = f.length; j--;) d[l = f[j]] && (d[l] = !(e[l] = d[l]))
      })
    })
  },
  ob = function(b) {
    return b && "undefined" != typeof b.getElementsByTagName && b
  },
  $b = function() {},
  Ta = function(b) {
    for (var c = 0,
    d = b.length,
    e = ""; c < d; c++) e += b[c].value;
    return e
  },
  Va = function(b, c, d) {
    var e = c.dir,
    l = c.next,
    f = l || e,
    j = d && "parentNode" === f,
    g = Xc++;
    return c.first ?
    function(c, d, l) {
      for (; c = c[e];) if (1 === c.nodeType || j) return b(c, d, l);
      return ! 1
    }: function(c, d, D) {
      var I, p, q, m = [ca, g];
      if (D) for (; c = c[e];) {
        if ((1 === c.nodeType || j) && b(c, d, D)) return ! 0
      } else for (; c = c[e];) if (1 === c.nodeType || j) if (q = c[M] || (c[M] = {}), p = q[c.uniqueID] || (q[c.uniqueID] = {}), l && l === c.nodeName.toLowerCase()) c = c[e] || c;
      else {
        if ((I = p[f]) && I[0] === ca && I[1] === g) return m[2] = I[2];
        if (p[f] = m, m[2] = b(c, d, D)) return ! 0
      }
      return ! 1
    }
  },
  rb = function(b) {
    return 1 < b.length ?
    function(c, d, e) {
      for (var l = b.length; l--;) if (!b[l](c, d, e)) return ! 1;
      return ! 0
    }: b[0]
  },
  Wa = function(b, c, d, e, l) {
    for (var f, j = [], g = 0, p = b.length, q = null != c; g < p; g++)(f = b[g]) && (d && !d(f, e, l) || (j.push(f), q && c.push(g)));
    return j
  },
  sb = function(b, c, d, e, l, f) {
    return e && !e[M] && (e = sb(e)),
    l && !l[M] && (l = sb(l, f)),
    Z(function(f, j, g, p) {
      var q, m, Da = [],
      r = [],
      n = j.length,
      s;
      if (! (s = f)) {
        s = c || "*";
        for (var u = g.nodeType ? [g] : g, t = [], y = 0, B = u.length; y < B; y++) C(s, u[y], t);
        s = t
      }
      s = !b || !f && c ? s: Wa(s, Da, b, g, p);
      u = d ? l || (f ? b: n || e) ? [] : j: s;
      if (d && d(s, u, g, p), e) {
        q = Wa(u, r);
        e(q, [], g, p);
        for (g = q.length; g--;)(m = q[g]) && (u[r[g]] = !(s[r[g]] = m))
      }
      if (f) {
        if (l || b) {
          if (l) {
            q = [];
            for (g = u.length; g--;)(m = u[g]) && q.push(s[g] = m);
            l(null, u = [], q, p)
          }
          for (g = u.length; g--;)(m = u[g]) && -1 < (q = l ? sa(f, m) : Da[g]) && (f[q] = !(j[q] = m))
        }
      } else u = Wa(u === j ? u.splice(n, u.length) : u),
      l ? l(null, j, u, p) : ja.apply(j, u)
    })
  },
  tb = function(b) {
    var c, d, e, l = b.length,
    f = A.relative[b[0].type];
    d = f || A.relative[" "];
    for (var j = f ? 1 : 0, g = Va(function(b) {
      return b === c
    },
    d, !0), p = Va(function(b) {
      return - 1 < sa(c, b)
    },
    d, !0), q = [function(b, d, x) {
      b = !f && (x || d !== Xa) || ((c = d).nodeType ? g(b, d, x) : p(b, d, x));
      return c = null,
      b
    }]; j < l; j++) if (d = A.relative[b[j].type]) q = [Va(rb(q), d)];
    else {
      if (d = A.filter[b[j].type].apply(null, b[j].matches), d[M]) {
        for (e = ++j; e < l && !A.relative[b[e].type]; e++);
        return sb(1 < j && rb(q), 1 < j && Ta(b.slice(0, j - 1).concat({
          value: " " === b[j - 2].type ? "*": ""
        })).replace(Ua, "$1"), d, j < e && tb(b.slice(j, e)), e < l && tb(b = b.slice(e)), e < l && Ta(b))
      }
      q.push(d)
    }
    return rb(q)
  },
  ya,
  L,
  A,
  Ya,
  ac,
  Ha,
  ub,
  Xb,
  Xa,
  ka,
  za,
  ia,
  H,
  X,
  W,
  N,
  ta,
  Za,
  Ga,
  M = "sizzle" + 1 * new Date,
  V = mb.document,
  ca = 0,
  Xc = 0,
  bc = pb(),
  cc = pb(),
  Sa = pb(),
  vb = function(b, c) {
    return b === c && (za = !0),
    0
  },
  Yc = {}.hasOwnProperty,
  ua = [],
  Zc = ua.pop,
  $c = ua.push,
  ja = ua.push,
  dc = ua.slice,
  sa = function(b, c) {
    for (var d = 0,
    e = b.length; d < e; d++) if (b[d] === c) return d;
    return - 1
  },
  ad = /[\x20\t\r\n\f]+/g,
  Ua = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
  bd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
  cd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
  dd = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
  ed = RegExp(":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
  fd = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
  $a = {
    ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
    CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
    TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
    ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
    PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
    bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
    needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
  },
  gd = /^(?:input|select|textarea|button)$/i,
  hd = /^h\d$/i,
  Ia = /^[^{]+\{\s*\[native \w/,
  Tc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
  nb = /[+~]/,
  da = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
  ea = function(b, c, d) {
    b = "0x" + c - 65536;
    return b !== b || d ? c: 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320)
  },
  Vb = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
  Wb = function(b, c) {
    return c ? "\x00" === b ? "\ufffd": b.slice(0, -1) + "\\" + b.charCodeAt(b.length - 1).toString(16) + " ": "\\" + b
  },
  ec = function() {
    ia()
  },
  Wc = Va(function(b) {
    return ! 0 === b.disabled && ("form" in b || "label" in b)
  },
  {
    dir: "parentNode",
    next: "legend"
  });
  try {
    ja.apply(ua = dc.call(V.childNodes), V.childNodes),
    ua[V.childNodes.length].nodeType
  } catch(Kd) {
    ja = {
      apply: ua.length ?
      function(b, c) {
        $c.apply(b, dc.call(c))
      }: function(b, c) {
        for (var d = b.length,
        e = 0; b[d++] = c[e++];);
        b.length = d - 1
      }
    }
  }
  L = C.support = {};
  ac = C.isXML = function(b) {
    b = b && (b.ownerDocument || b).documentElement;
    return !! b && "HTML" !== b.nodeName
  };
  ia = C.setDocument = function(b) {
    var c, d;
    b = b ? b.ownerDocument || b: V;
    return b !== H && 9 === b.nodeType && b.documentElement ? (H = b, X = H.documentElement, W = !ac(H), V !== H && (d = H.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", ec, !1) : d.attachEvent && d.attachEvent("onunload", ec)), L.attributes = ba(function(b) {
      return b.className = "i",
      !b.getAttribute("className")
    }), L.getElementsByTagName = ba(function(b) {
      return b.appendChild(H.createComment("")),
      !b.getElementsByTagName("*").length
    }), L.getElementsByClassName = Ia.test(H.getElementsByClassName), L.getById = ba(function(b) {
      return X.appendChild(b).id = M,
      !H.getElementsByName || !H.getElementsByName(M).length
    }), L.getById ? (A.filter.ID = function(b) {
      var c = b.replace(da, ea);
      return function(b) {
        return b.getAttribute("id") === c
      }
    },
    A.find.ID = function(b, c) {
      if ("undefined" != typeof c.getElementById && W) {
        var d = c.getElementById(b);
        return d ? [d] : []
      }
    }) : (A.filter.ID = function(b) {
      var c = b.replace(da, ea);
      return function(b) {
        return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === c
      }
    },
    A.find.ID = function(b, c) {
      if ("undefined" != typeof c.getElementById && W) {
        var d, x, e, l = c.getElementById(b);
        if (l) {
          if (d = l.getAttributeNode("id"), d && d.value === b) return [l];
          e = c.getElementsByName(b);
          for (x = 0; l = e[x++];) if (d = l.getAttributeNode("id"), d && d.value === b) return [l]
        }
        return []
      }
    }), A.find.TAG = L.getElementsByTagName ?
    function(b, c) {
      return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName(b) : L.qsa ? c.querySelectorAll(b) : void 0
    }: function(b, c) {
      var d, x = [],
      e = 0,
      l = c.getElementsByTagName(b);
      if ("*" === b) {
        for (; d = l[e++];) 1 === d.nodeType && x.push(d);
        return x
      }
      return l
    },
    A.find.CLASS = L.getElementsByClassName &&
    function(b, c) {
      if ("undefined" != typeof c.getElementsByClassName && W) return c.getElementsByClassName(b)
    },
    ta = [], N = [], (L.qsa = Ia.test(H.querySelectorAll)) && (ba(function(b) {
      X.appendChild(b).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>";
      b.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
      b.querySelectorAll("[selected]").length || N.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
      b.querySelectorAll("[id~=" + M + "-]").length || N.push("~=");
      b.querySelectorAll(":checked").length || N.push(":checked");
      b.querySelectorAll("a#" + M + "+*").length || N.push(".#.+[+~]")
    }), ba(function(b) {
      b.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
      var c = H.createElement("input");
      c.setAttribute("type", "hidden");
      b.appendChild(c).setAttribute("name", "D");
      b.querySelectorAll("[name=d]").length && N.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
      2 !== b.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled");
      X.appendChild(b).disabled = !0;
      2 !== b.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled");
      b.querySelectorAll("*,:x");
      N.push(",.*:")
    })), (L.matchesSelector = Ia.test(Za = X.matches || X.webkitMatchesSelector || X.mozMatchesSelector || X.oMatchesSelector || X.msMatchesSelector)) && ba(function(b) {
      L.disconnectedMatch = Za.call(b, "*");
      Za.call(b, "[s!='']:x");
      ta.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
    }), N = N.length && RegExp(N.join("|")), ta = ta.length && RegExp(ta.join("|")), c = Ia.test(X.compareDocumentPosition), Ga = c || Ia.test(X.contains) ?
    function(b, c) {
      var d = 9 === b.nodeType ? b.documentElement: b,
      x = c && c.parentNode;
      return b === x || !(!x || 1 !== x.nodeType || !(d.contains ? d.contains(x) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(x)))
    }: function(b, c) {
      if (c) for (; c = c.parentNode;) if (c === b) return ! 0;
      return ! 1
    },
    vb = c ?
    function(b, c) {
      if (b === c) return za = !0,
      0;
      var d = !b.compareDocumentPosition - !c.compareDocumentPosition;
      return d ? d: (d = (b.ownerDocument || b) === (c.ownerDocument || c) ? b.compareDocumentPosition(c) : 1, 1 & d || !L.sortDetached && c.compareDocumentPosition(b) === d ? b === H || b.ownerDocument === V && Ga(V, b) ? -1 : c === H || c.ownerDocument === V && Ga(V, c) ? 1 : ka ? sa(ka, b) - sa(ka, c) : 0 : 4 & d ? -1 : 1)
    }: function(b, c) {
      if (b === c) return za = !0,
      0;
      var d, x = 0;
      d = b.parentNode;
      var e = c.parentNode,
      l = [b],
      f = [c];
      if (!d || !e) return b === H ? -1 : c === H ? 1 : d ? -1 : e ? 1 : ka ? sa(ka, b) - sa(ka, c) : 0;
      if (d === e) return Yb(b, c);
      for (d = b; d = d.parentNode;) l.unshift(d);
      for (d = c; d = d.parentNode;) f.unshift(d);
      for (; l[x] === f[x];) x++;
      return x ? Yb(l[x], f[x]) : l[x] === V ? -1 : f[x] === V ? 1 : 0
    },
    H) : H
  };
  C.matches = function(b, c) {
    return C(b, null, null, c)
  };
  C.matchesSelector = function(b, c) {
    if ((b.ownerDocument || b) !== H && ia(b), c = c.replace(dd, "='$1']"), L.matchesSelector && W && !Sa[c + " "] && (!ta || !ta.test(c)) && (!N || !N.test(c))) try {
      var d = Za.call(b, c);
      if (d || L.disconnectedMatch || b.document && 11 !== b.document.nodeType) return d
    } catch(e) {}
    return 0 < C(c, H, null, [b]).length
  };
  C.contains = function(b, c) {
    return (b.ownerDocument || b) !== H && ia(b),
    Ga(b, c)
  };
  C.attr = function(b, c) { (b.ownerDocument || b) !== H && ia(b);
    var d = A.attrHandle[c.toLowerCase()],
    d = d && Yc.call(A.attrHandle, c.toLowerCase()) ? d(b, c, !W) : void 0;
    return void 0 !== d ? d: L.attributes || !W ? b.getAttribute(c) : (d = b.getAttributeNode(c)) && d.specified ? d.value: null
  };
  C.escape = function(b) {
    return (b + "").replace(Vb, Wb)
  };
  C.error = function(b) {
    throw Error("Syntax error, unrecognized expression: " + b);
  };
  C.uniqueSort = function(b) {
    var c, d = [],
    e = 0,
    l = 0;
    if (za = !L.detectDuplicates, ka = !L.sortStable && b.slice(0), b.sort(vb), za) {
      for (; c = b[l++];) c === b[l] && (e = d.push(l));
      for (; e--;) b.splice(d[e], 1)
    }
    return ka = null,
    b
  };
  Ya = C.getText = function(b) {
    var c, d = "",
    e = 0;
    if (c = b.nodeType) if (1 === c || 9 === c || 11 === c) {
      if ("string" == typeof b.textContent) return b.textContent;
      for (b = b.firstChild; b; b = b.nextSibling) d += Ya(b)
    } else {
      if (3 === c || 4 === c) return b.nodeValue
    } else for (; c = b[e++];) d += Ya(c);
    return d
  };
  A = C.selectors = {
    cacheLength: 50,
    createPseudo: Z,
    match: $a,
    attrHandle: {},
    find: {},
    relative: {
      ">": {
        dir: "parentNode",
        first: !0
      },
      " ": {
        dir: "parentNode"
      },
      "+": {
        dir: "previousSibling",
        first: !0
      },
      "~": {
        dir: "previousSibling"
      }
    },
    preFilter: {
      ATTR: function(b) {
        return b[1] = b[1].replace(da, ea),
        b[3] = (b[3] || b[4] || b[5] || "").replace(da, ea),
        "~=" === b[2] && (b[3] = " " + b[3] + " "),
        b.slice(0, 4)
      },
      CHILD: function(b) {
        return b[1] = b[1].toLowerCase(),
        "nth" === b[1].slice(0, 3) ? (b[3] || C.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && C.error(b[0]),
        b
      },
      PSEUDO: function(b) {
        var c, d = !b[6] && b[2];
        return $a.CHILD.test(b[0]) ? null: (b[3] ? b[2] = b[4] || b[5] || "": d && ed.test(d) && (c = Ha(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (b[0] = b[0].slice(0, c), b[2] = d.slice(0, c)), b.slice(0, 3))
      }
    },
    filter: {
      TAG: function(b) {
        var c = b.replace(da, ea).toLowerCase();
        return "*" === b ?
        function() {
          return ! 0
        }: function(b) {
          return b.nodeName && b.nodeName.toLowerCase() === c
        }
      },
      CLASS: function(b) {
        var c = bc[b + " "];
        return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && bc(b,
        function(b) {
          return c.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") || "")
        })
      },
      ATTR: function(b, c, d) {
        return function(e) {
          e = C.attr(e, b);
          return null == e ? "!=" === c: !c || (e += "", "=" === c ? e === d: "!=" === c ? e !== d: "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.slice( - d.length) === d: "~=" === c ? -1 < (" " + e.replace(ad, " ") + " ").indexOf(d) : "|=" === c && (e === d || e.slice(0, d.length + 1) === d + "-"))
        }
      },
      CHILD: function(b, c, d, e, l) {
        var f = "nth" !== b.slice(0, 3),
        j = "last" !== b.slice( - 4),
        g = "of-type" === c;
        return 1 === e && 0 === l ?
        function(b) {
          return !! b.parentNode
        }: function(c, d, D) {
          var I, p, q, m, r, n;
          d = f !== j ? "nextSibling": "previousSibling";
          var s = c.parentNode,
          u = g && c.nodeName.toLowerCase();
          D = !D && !g;
          var t = !1;
          if (s) {
            if (f) {
              for (; d;) {
                for (m = c; m = m[d];) if (g ? m.nodeName.toLowerCase() === u: 1 === m.nodeType) return ! 1;
                n = d = "only" === b && !n && "nextSibling"
              }
              return ! 0
            }
            if (n = [j ? s.firstChild: s.lastChild], j && D) {
              m = s;
              q = m[M] || (m[M] = {});
              p = q[m.uniqueID] || (q[m.uniqueID] = {});
              I = p[b] || [];
              t = (r = I[0] === ca && I[1]) && I[2];
              for (m = r && s.childNodes[r]; m = ++r && m && m[d] || (t = r = 0) || n.pop();) if (1 === m.nodeType && ++t && m === c) {
                p[b] = [ca, r, t];
                break
              }
            } else if (D && (m = c, q = m[M] || (m[M] = {}), p = q[m.uniqueID] || (q[m.uniqueID] = {}), I = p[b] || [], r = I[0] === ca && I[1], t = r), !1 === t) for (; (m = ++r && m && m[d] || (t = r = 0) || n.pop()) && (!(g ? m.nodeName.toLowerCase() === u: 1 === m.nodeType) || !++t || !(D && (q = m[M] || (m[M] = {}), p = q[m.uniqueID] || (q[m.uniqueID] = {}), p[b] = [ca, t]), m === c)););
            return t -= l,
            t === e || 0 === t % e && 0 <= t / e
          }
        }
      },
      PSEUDO: function(b, c) {
        var d, e = A.pseudos[b] || A.setFilters[b.toLowerCase()] || C.error("unsupported pseudo: " + b);
        return e[M] ? e(c) : 1 < e.length ? (d = [b, b, "", c], A.setFilters.hasOwnProperty(b.toLowerCase()) ? Z(function(b, d) {
          for (var x, l = e(b, c), f = l.length; f--;) x = sa(b, l[f]),
          b[x] = !(d[x] = l[f])
        }) : function(b) {
          return e(b, 0, d)
        }) : e
      }
    },
    pseudos: {
      not: Z(function(b) {
        var c = [],
        d = [],
        e = ub(b.replace(Ua, "$1"));
        return e[M] ? Z(function(b, c, d, x) {
          var l;
          d = e(b, null, x, []);
          for (x = b.length; x--;)(l = d[x]) && (b[x] = !(c[x] = l))
        }) : function(b, x, l) {
          return c[0] = b,
          e(c, null, l, d),
          c[0] = null,
          !d.pop()
        }
      }),
      has: Z(function(b) {
        return function(c) {
          return 0 < C(b, c).length
        }
      }),
      contains: Z(function(b) {
        return b = b.replace(da, ea),
        function(c) {
          return - 1 < (c.textContent || c.innerText || Ya(c)).indexOf(b)
        }
      }),
      lang: Z(function(b) {
        return fd.test(b || "") || C.error("unsupported lang: " + b),
        b = b.replace(da, ea).toLowerCase(),
        function(c) {
          var d;
          do
          if (d = W ? c.lang: c.getAttribute("xml:lang") || c.getAttribute("lang")) return d = d.toLowerCase(),
          d === b || 0 === d.indexOf(b + "-");
          while ((c = c.parentNode) && 1 === c.nodeType);
          return ! 1
        }
      }),
      target: function(b) {
        var c = mb.location && mb.location.hash;
        return c && c.slice(1) === b.id
      },
      root: function(b) {
        return b === X
      },
      focus: function(b) {
        return b === H.activeElement && (!H.hasFocus || H.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
      },
      enabled: Zb(!1),
      disabled: Zb(!0),
      checked: function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && !!b.checked || "option" === c && !!b.selected
      },
      selected: function(b) {
        return b.parentNode && b.parentNode.selectedIndex,
        !0 === b.selected
      },
      empty: function(b) {
        for (b = b.firstChild; b; b = b.nextSibling) if (6 > b.nodeType) return ! 1;
        return ! 0
      },
      parent: function(b) {
        return ! A.pseudos.empty(b)
      },
      header: function(b) {
        return hd.test(b.nodeName)
      },
      input: function(b) {
        return gd.test(b.nodeName)
      },
      button: function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && "button" === b.type || "button" === c
      },
      text: function(b) {
        var c;
        return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (c = b.getAttribute("type")) || "text" === c.toLowerCase())
      },
      first: ra(function() {
        return [0]
      }),
      last: ra(function(b, c) {
        return [c - 1]
      }),
      eq: ra(function(b, c, d) {
        return [0 > d ? d + c: d]
      }),
      even: ra(function(b, c) {
        for (var d = 0; d < c; d += 2) b.push(d);
        return b
      }),
      odd: ra(function(b, c) {
        for (var d = 1; d < c; d += 2) b.push(d);
        return b
      }),
      lt: ra(function(b, c, d) {
        for (c = 0 > d ? d + c: d; 0 <= --c;) b.push(c);
        return b
      }),
      gt: ra(function(b, c, d) {
        for (d = 0 > d ? d + c: d; ++d < c;) b.push(d);
        return b
      })
    }
  };
  A.pseudos.nth = A.pseudos.eq;
  for (ya in {
    radio: !0,
    checkbox: !0,
    file: !0,
    password: !0,
    image: !0
  }) A.pseudos[ya] = Uc(ya);
  for (ya in {
    submit: !0,
    reset: !0
  }) A.pseudos[ya] = Vc(ya);
  $b.prototype = A.filters = A.pseudos;
  A.setFilters = new $b;
  Ha = C.tokenize = function(b, c) {
    var d, e, l, f, j, g, p;
    if (j = cc[b + " "]) return c ? 0 : j.slice(0);
    j = b;
    g = [];
    for (p = A.preFilter; j;) {
      d && !(e = bd.exec(j)) || (e && (j = j.slice(e[0].length) || j), g.push(l = []));
      d = !1; (e = cd.exec(j)) && (d = e.shift(), l.push({
        value: d,
        type: e[0].replace(Ua, " ")
      }), j = j.slice(d.length));
      for (f in A.filter) ! (e = $a[f].exec(j)) || p[f] && !(e = p[f](e)) || (d = e.shift(), l.push({
        value: d,
        type: f,
        matches: e
      }), j = j.slice(d.length));
      if (!d) break
    }
    return c ? j.length: j ? C.error(b) : cc(b, g).slice(0)
  };
  ha = (ub = C.compile = function(b, c) {
    var d, e = [],
    l = [],
    f = Sa[b + " "];
    if (!f) {
      c || (c = Ha(b));
      for (d = c.length; d--;) f = tb(c[d]),
      f[M] ? e.push(f) : l.push(f);
      d = Sa;
      var j = 0 < e.length,
      g = 0 < l.length,
      f = function(b, c, d, x, f) {
        var D, p, I, q = 0,
        m = "0",
        r = b && [],
        n = [],
        s = Xa,
        Da = b || g && A.find.TAG("*", f),
        u = ca += null == s ? 1 : Math.random() || 0.1,
        t = Da.length;
        for (f && (Xa = c === H || c || f); m !== t && null != (D = Da[m]); m++) {
          if (g && D) {
            p = 0;
            for (c || D.ownerDocument === H || (ia(D), d = !W); I = l[p++];) if (I(D, c || H, d)) {
              x.push(D);
              break
            }
            f && (ca = u)
          }
          j && ((D = !I && D) && q--, b && r.push(D))
        }
        if (q += m, j && m !== q) {
          for (p = 0; I = e[p++];) I(r, n, c, d);
          if (b) {
            if (0 < q) for (; m--;) r[m] || n[m] || (n[m] = Zc.call(x));
            n = Wa(n)
          }
          ja.apply(x, n);
          f && !b && 0 < n.length && 1 < q + e.length && C.uniqueSort(x)
        }
        return f && (ca = u, Xa = s),
        r
      },
      f = j ? Z(f) : f,
      f = d(b, f);
      f.selector = b
    }
    return f
  },
  Xb = C.select = function(b, c, d, e) {
    var l, f, j, g, p, q = "function" == typeof b && b,
    m = !e && Ha(b = q.selector || b);
    if (d = d || [], 1 === m.length) {
      if (f = m[0] = m[0].slice(0), 2 < f.length && "ID" === (j = f[0]).type && 9 === c.nodeType && W && A.relative[f[1].type]) {
        if (c = (A.find.ID(j.matches[0].replace(da, ea), c) || [])[0], !c) return d;
        q && (c = c.parentNode);
        b = b.slice(f.shift().value.length)
      }
      for (l = $a.needsContext.test(b) ? 0 : f.length; l--&&!(j = f[l], A.relative[g = j.type]);) if ((p = A.find[g]) && (e = p(j.matches[0].replace(da, ea), nb.test(f[0].type) && ob(c.parentNode) || c))) {
        if (f.splice(l, 1), b = e.length && Ta(f), !b) return ja.apply(d, e),
        d;
        break
      }
    }
    return (q || ub(b, m))(e, c, !W, d, !c || nb.test(b) && ob(c.parentNode) || c),
    d
  },
  L.sortStable = M.split("").sort(vb).join("") === M, L.detectDuplicates = !!za, ia(), L.sortDetached = ba(function(b) {
    return 1 & b.compareDocumentPosition(H.createElement("fieldset"))
  }), ba(function(b) {
    return b.innerHTML = "<a href='#'></a>",
    "#" === b.firstChild.getAttribute("href")
  }) || qb("type|href|height|width",
  function(b, c, d) {
    if (!d) return b.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
  }), L.attributes && ba(function(b) {
    return b.innerHTML = "<input/>",
    b.firstChild.setAttribute("value", ""),
    "" === b.firstChild.getAttribute("value")
  }) || qb("value",
  function(b, c, d) {
    if (!d && "input" === b.nodeName.toLowerCase()) return b.defaultValue
  }), ba(function(b) {
    return null == b.getAttribute("disabled")
  }) || qb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
  function(b, c, d) {
    var e;
    if (!d) return ! 0 === b[c] ? c.toLowerCase() : (e = b.getAttributeNode(c)) && e.specified ? e.value: null
  }), C);
  j.find = ha;
  j.expr = ha.selectors;
  j.expr[":"] = j.expr.pseudos;
  j.uniqueSort = j.unique = ha.uniqueSort;
  j.text = ha.getText;
  j.isXMLDoc = ha.isXML;
  j.contains = ha.contains;
  j.escapeSelector = ha.escape;
  var Aa = function(b, c, d) {
    for (var e = [], l = void 0 !== d; (b = b[c]) && 9 !== b.nodeType;) if (1 === b.nodeType) {
      if (l && j(b).is(d)) break;
      e.push(b)
    }
    return e
  },
  fc = function(b, c) {
    for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
    return d
  },
  gc = j.expr.match.needsContext,
  hc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
  Cc = /^.[^:#\[\.,]*$/;
  j.filter = function(b, c, d) {
    var e = c[0];
    return d && (b = ":not(" + b + ")"),
    1 === c.length && 1 === e.nodeType ? j.find.matchesSelector(e, b) ? [e] : [] : j.find.matches(b, j.grep(c,
    function(b) {
      return 1 === b.nodeType
    }))
  };
  j.fn.extend({
    find: function(b) {
      var c, d, e = this.length,
      l = this;
      if ("string" != typeof b) return this.pushStack(j(b).filter(function() {
        for (c = 0; c < e; c++) if (j.contains(l[c], this)) return ! 0
      }));
      d = this.pushStack([]);
      for (c = 0; c < e; c++) j.find(b, l[c], d);
      return 1 < e ? j.uniqueSort(d) : d
    },
    filter: function(b) {
      return this.pushStack(g(this, b || [], !1))
    },
    not: function(b) {
      return this.pushStack(g(this, b || [], !0))
    },
    is: function(b) {
      return !! g(this, "string" == typeof b && gc.test(b) ? j(b) : b || [], !1).length
    }
  });
  var ic, id = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (j.fn.init = function(b, c, d) {
    var e, l;
    if (!b) return this;
    if (d = d || ic, "string" == typeof b) {
      if (e = "<" === b[0] && ">" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : id.exec(b), !e || !e[1] && c) return ! c || c.jquery ? (c || d).find(b) : this.constructor(c).find(b);
      if (e[1]) {
        if (c = c instanceof j ? c[0] : c, j.merge(this, j.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c: z, !0)), hc.test(e[1]) && j.isPlainObject(c)) for (e in c) j.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
        return this
      }
      return l = z.getElementById(e[2]),
      l && (this[0] = l, this.length = 1),
      this
    }
    return b.nodeType ? (this[0] = b, this.length = 1, this) : j.isFunction(b) ? void 0 !== d.ready ? d.ready(b) : b(j) : j.makeArray(b, this)
  }).prototype = j.fn;
  ic = j(z);
  var jd = /^(?:parents|prev(?:Until|All))/,
  kd = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  j.fn.extend({
    has: function(b) {
      var c = j(b, this),
      d = c.length;
      return this.filter(function() {
        for (var b = 0; b < d; b++) if (j.contains(this, c[b])) return ! 0
      })
    },
    closest: function(b, c) {
      var d, e = 0,
      l = this.length,
      f = [],
      g = "string" != typeof b && j(b);
      if (!gc.test(b)) for (; e < l; e++) for (d = this[e]; d && d !== c; d = d.parentNode) if (11 > d.nodeType && (g ? -1 < g.index(d) : 1 === d.nodeType && j.find.matchesSelector(d, b))) {
        f.push(d);
        break
      }
      return this.pushStack(1 < f.length ? j.uniqueSort(f) : f)
    },
    index: function(b) {
      return b ? "string" == typeof b ? Ca.call(j(b), this[0]) : Ca.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
    },
    add: function(b, c) {
      return this.pushStack(j.uniqueSort(j.merge(this.get(), j(b, c))))
    },
    addBack: function(b) {
      return this.add(null == b ? this.prevObject: this.prevObject.filter(b))
    }
  });
  j.each({
    parent: function(b) {
      return (b = b.parentNode) && 11 !== b.nodeType ? b: null
    },
    parents: function(b) {
      return Aa(b, "parentNode")
    },
    parentsUntil: function(b, c, d) {
      return Aa(b, "parentNode", d)
    },
    next: function(b) {
      return n(b, "nextSibling")
    },
    prev: function(b) {
      return n(b, "previousSibling")
    },
    nextAll: function(b) {
      return Aa(b, "nextSibling")
    },
    prevAll: function(b) {
      return Aa(b, "previousSibling")
    },
    nextUntil: function(b, c, d) {
      return Aa(b, "nextSibling", d)
    },
    prevUntil: function(b, c, d) {
      return Aa(b, "previousSibling", d)
    },
    siblings: function(b) {
      return fc((b.parentNode || {}).firstChild, b)
    },
    children: function(b) {
      return fc(b.firstChild)
    },
    contents: function(b) {
      return f(b, "iframe") ? b.contentDocument: (f(b, "template") && (b = b.content || b), j.merge([], b.childNodes))
    }
  },
  function(b, c) {
    j.fn[b] = function(d, e) {
      var l = j.map(this, c, d);
      return "Until" !== b.slice( - 5) && (e = d),
      e && "string" == typeof e && (l = j.filter(e, l)),
      1 < this.length && (kd[b] || j.uniqueSort(l), jd.test(b) && l.reverse()),
      this.pushStack(l)
    }
  });
  var U = /[^\x20\t\r\n\f]+/g;
  j.Callbacks = function(b) {
    var c;
    if ("string" == typeof b) {
      var d = {};
      c = (j.each(b.match(U) || [],
      function(b, c) {
        d[c] = !0
      }), d)
    } else c = j.extend({},
    b);
    b = c;
    var e, l, f, g, p = [],
    q = [],
    m = -1,
    r = function() {
      g = g || b.once;
      for (f = e = !0; q.length; m = -1) for (l = q.shift(); ++m < p.length;) ! 1 === p[m].apply(l[0], l[1]) && b.stopOnFalse && (m = p.length, l = !1);
      b.memory || (l = !1);
      e = !1;
      g && (p = l ? [] : "")
    },
    n = {
      add: function() {
        return p && (l && !e && (m = p.length - 1, q.push(l)),
        function Kc(c) {
          j.each(c,
          function(c, d) {
            j.isFunction(d) ? b.unique && n.has(d) || p.push(d) : d && d.length && "string" !== j.type(d) && Kc(d)
          })
        } (arguments), l && !e && r()),
        this
      },
      remove: function() {
        return j.each(arguments,
        function(b, c) {
          for (var d; - 1 < (d = j.inArray(c, p, d));) p.splice(d, 1),
          d <= m && m--
        }),
        this
      },
      has: function(b) {
        return b ? -1 < j.inArray(b, p) : 0 < p.length
      },
      empty: function() {
        return p && (p = []),
        this
      },
      disable: function() {
        return g = q = [],
        p = l = "",
        this
      },
      disabled: function() {
        return ! p
      },
      lock: function() {
        return g = q = [],
        l || e || (p = l = ""),
        this
      },
      locked: function() {
        return !! g
      },
      fireWith: function(b, c) {
        return g || (c = c || [], c = [b, c.slice ? c.slice() : c], q.push(c), e || r()),
        this
      },
      fire: function() {
        return n.fireWith(this, arguments),
        this
      },
      fired: function() {
        return !! f
      }
    };
    return n
  };
  j.extend({
    Deferred: function(c) {
      var d = [["notify", "progress", j.Callbacks("memory"), j.Callbacks("memory"), 2], ["resolve", "done", j.Callbacks("once memory"), j.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", j.Callbacks("once memory"), j.Callbacks("once memory"), 1, "rejected"]],
      e = "pending",
      f = {
        state: function() {
          return e
        },
        always: function() {
          return g.done(arguments).fail(arguments),
          this
        },
        "catch": function(b) {
          return f.then(null, b)
        },
        pipe: function() {
          var b = arguments;
          return j.Deferred(function(c) {
            j.each(d,
            function(d, e) {
              var l = j.isFunction(b[e[4]]) && b[e[4]];
              g[e[1]](function() {
                var b = l && l.apply(this, arguments);
                b && j.isFunction(b.promise) ? b.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[e[0] + "With"](this, l ? [b] : arguments)
              })
            });
            b = null
          }).promise()
        },
        then: function(c, e, f) {
          function x(c, d, e, f) {
            return function() {
              var D = this,
              p = arguments,
              q = function() {
                var b, q;
                if (! (c < g)) {
                  if (b = e.apply(D, p), b === d.promise()) throw new TypeError("Thenable self-resolution");
                  q = b && ("object" == typeof b || "function" == typeof b) && b.then;
                  j.isFunction(q) ? f ? q.call(b, x(g, d, m, f), x(g, d, l, f)) : (g++, q.call(b, x(g, d, m, f), x(g, d, l, f), x(g, d, m, d.notifyWith))) : (e !== m && (D = void 0, p = [b]), (f || d.resolveWith)(D, p))
                }
              },
              I = f ? q: function() {
                try {
                  q()
                } catch(b) {
                  j.Deferred.exceptionHook && j.Deferred.exceptionHook(b, I.stackTrace),
                  c + 1 >= g && (e !== l && (D = void 0, p = [b]), d.rejectWith(D, p))
                }
              };
              c ? I() : (j.Deferred.getStackHook && (I.stackTrace = j.Deferred.getStackHook()), b.setTimeout(I))
            }
          }
          var g = 0;
          return j.Deferred(function(b) {
            d[0][3].add(x(0, b, j.isFunction(f) ? f: m, b.notifyWith));
            d[1][3].add(x(0, b, j.isFunction(c) ? c: m));
            d[2][3].add(x(0, b, j.isFunction(e) ? e: l))
          }).promise()
        },
        promise: function(b) {
          return null != b ? j.extend(b, f) : f
        }
      },
      g = {};
      return j.each(d,
      function(b, c) {
        var l = c[2],
        x = c[5];
        f[c[1]] = l.add;
        x && l.add(function() {
          e = x
        },
        d[3 - b][2].disable, d[0][2].lock);
        l.add(c[3].fire);
        g[c[0]] = function() {
          return g[c[0] + "With"](this === g ? void 0 : this, arguments),
          this
        };
        g[c[0] + "With"] = l.fireWith
      }),
      f.promise(g),
      c && c.call(g, g),
      g
    },
    when: function(b) {
      var c = arguments.length,
      d = c,
      e = Array(d),
      l = qa.call(arguments),
      f = j.Deferred(),
      g = function(b) {
        return function(d) {
          e[b] = this;
          l[b] = 1 < arguments.length ? qa.call(arguments) : d; --c || f.resolveWith(e, l)
        }
      };
      if (1 >= c && (p(b, f.done(g(d)).resolve, f.reject, !c), "pending" === f.state() || j.isFunction(l[d] && l[d].then))) return f.then();
      for (; d--;) p(l[d], g(d), f.reject);
      return f.promise()
    }
  });
  var ld = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  j.Deferred.exceptionHook = function(c, d) {
    b.console && b.console.warn && c && ld.test(c.name) && b.console.warn("jQuery.Deferred exception: " + c.message, c.stack, d)
  };
  j.readyException = function(c) {
    b.setTimeout(function() {
      throw c;
    })
  };
  var wb = j.Deferred();
  j.fn.ready = function(b) {
    return wb.then(b)["catch"](function(b) {
      j.readyException(b)
    }),
    this
  };
  j.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(b) { (!0 === b ? --j.readyWait: j.isReady) || (j.isReady = !0, !0 !== b && 0 < --j.readyWait || wb.resolveWith(z, [j]))
    }
  });
  j.ready.then = wb.then;
  "complete" === z.readyState || "loading" !== z.readyState && !z.documentElement.doScroll ? b.setTimeout(j.ready) : (z.addEventListener("DOMContentLoaded", q), b.addEventListener("load", q));
  var fa = function(b, c, d, e, l, f, g) {
    var p = 0,
    q = b.length,
    m = null == d;
    if ("object" === j.type(d)) for (p in l = !0, d) fa(b, c, p, d[p], !0, f, g);
    else if (void 0 !== e && (l = !0, j.isFunction(e) || (g = !0), m && (g ? (c.call(b, e), c = null) : (m = c, c = function(b, c, d) {
      return m.call(j(b), d)
    })), c)) for (; p < q; p++) c(b[p], d, g ? e: e.call(b[p], p, c(b[p], d)));
    return l ? b: m ? c.call(b) : q ? c(b[0], d) : f
  },
  ab = function(b) {
    return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
  };
  r.uid = 1;
  r.prototype = {
    cache: function(b) {
      var c = b[this.expando];
      return c || (c = {},
      ab(b) && (b.nodeType ? b[this.expando] = c: Object.defineProperty(b, this.expando, {
        value: c,
        configurable: !0
      }))),
      c
    },
    set: function(b, c, d) {
      var e;
      b = this.cache(b);
      if ("string" == typeof c) b[j.camelCase(c)] = d;
      else for (e in c) b[j.camelCase(e)] = c[e];
      return b
    },
    get: function(b, c) {
      return void 0 === c ? this.cache(b) : b[this.expando] && b[this.expando][j.camelCase(c)]
    },
    access: function(b, c, d) {
      return void 0 === c || c && "string" == typeof c && void 0 === d ? this.get(b, c) : (this.set(b, c, d), void 0 !== d ? d: c)
    },
    remove: function(b, c) {
      var d, e = b[this.expando];
      if (void 0 !== e) {
        if (void 0 !== c) {
          Array.isArray(c) ? c = c.map(j.camelCase) : (c = j.camelCase(c), c = c in e ? [c] : c.match(U) || []);
          for (d = c.length; d--;) delete e[c[d]]
        } (void 0 === c || j.isEmptyObject(e)) && (b.nodeType ? b[this.expando] = void 0 : delete b[this.expando])
      }
    },
    hasData: function(b) {
      b = b[this.expando];
      return void 0 !== b && !j.isEmptyObject(b)
    }
  };
  var B = new r,
  P = new r,
  Ec = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  Dc = /[A-Z]/g;
  j.extend({
    hasData: function(b) {
      return P.hasData(b) || B.hasData(b)
    },
    data: function(b, c, d) {
      return P.access(b, c, d)
    },
    removeData: function(b, c) {
      P.remove(b, c)
    },
    _data: function(b, c, d) {
      return B.access(b, c, d)
    },
    _removeData: function(b, c) {
      B.remove(b, c)
    }
  });
  j.fn.extend({
    data: function(b, c) {
      var d, e, l, f = this[0],
      g = f && f.attributes;
      if (void 0 === b) {
        if (this.length && (l = P.get(f), 1 === f.nodeType && !B.get(f, "hasDataAttrs"))) {
          for (d = g.length; d--;) g[d] && (e = g[d].name, 0 === e.indexOf("data-") && (e = j.camelCase(e.slice(5)), s(f, e, l[e])));
          B.set(f, "hasDataAttrs", !0)
        }
        return l
      }
      return "object" == typeof b ? this.each(function() {
        P.set(this, b)
      }) : fa(this,
      function(c) {
        var d;
        if (f && void 0 === c) {
          if ((d = P.get(f, b), void 0 !== d) || (d = s(f, b), void 0 !== d)) return d
        } else this.each(function() {
          P.set(this, b, c)
        })
      },
      null, c, 1 < arguments.length, null, !0)
    },
    removeData: function(b) {
      return this.each(function() {
        P.remove(this, b)
      })
    }
  });
  j.extend({
    queue: function(b, c, d) {
      var e;
      if (b) return c = (c || "fx") + "queue",
      e = B.get(b, c),
      d && (!e || Array.isArray(d) ? e = B.access(b, c, j.makeArray(d)) : e.push(d)),
      e || []
    },
    dequeue: function(b, c) {
      c = c || "fx";
      var d = j.queue(b, c),
      e = d.length,
      l = d.shift(),
      f = j._queueHooks(b, c),
      g = function() {
        j.dequeue(b, c)
      };
      "inprogress" === l && (l = d.shift(), e--);
      l && ("fx" === c && d.unshift("inprogress"), delete f.stop, l.call(b, g, f)); ! e && f && f.empty.fire()
    },
    _queueHooks: function(b, c) {
      var d = c + "queueHooks";
      return B.get(b, d) || B.access(b, d, {
        empty: j.Callbacks("once memory").add(function() {
          B.remove(b, [c + "queue", d])
        })
      })
    }
  });
  j.fn.extend({
    queue: function(b, c) {
      var d = 2;
      return "string" != typeof b && (c = b, b = "fx", d--),
      arguments.length < d ? j.queue(this[0], b) : void 0 === c ? this: this.each(function() {
        var d = j.queue(this, b, c);
        j._queueHooks(this, b);
        "fx" === b && "inprogress" !== d[0] && j.dequeue(this, b)
      })
    },
    dequeue: function(b) {
      return this.each(function() {
        j.dequeue(this, b)
      })
    },
    clearQueue: function(b) {
      return this.queue(b || "fx", [])
    },
    promise: function(b, c) {
      var d, e = 1,
      l = j.Deferred(),
      f = this,
      g = this.length,
      p = function() {--e || l.resolveWith(f, [f])
      };
      "string" != typeof b && (c = b, b = void 0);
      for (b = b || "fx"; g--;)(d = B.get(f[g], b + "queueHooks")) && d.empty && (e++, d.empty.add(p));
      return p(),
      l.promise(c)
    }
  });
  var jc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  Ea = RegExp("^(?:([+-])=|)(" + jc + ")([a-z%]*)$", "i"),
  ma = ["Top", "Right", "Bottom", "Left"],
  Ma = function(b, c) {
    return b = c || b,
    "none" === b.style.display || "" === b.style.display && j.contains(b.ownerDocument, b) && "none" === j.css(b, "display")
  },
  kc = function(b, c, d, e) {
    var l, f = {};
    for (l in c) f[l] = b.style[l],
    b.style[l] = c[l];
    d = d.apply(b, e || []);
    for (l in c) b.style[l] = f[l];
    return d
  },
  Ab = {};
  j.fn.extend({
    show: function() {
      return t(this, !0)
    },
    hide: function() {
      return t(this)
    },
    toggle: function(b) {
      return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
        Ma(this) ? j(this).show() : j(this).hide()
      })
    }
  });
  var lc = /^(?:checkbox|radio)$/i,
  Bb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
  Cb = /^$|\/(?:java|ecma)script/i,
  S = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  S.optgroup = S.option;
  S.tbody = S.tfoot = S.colgroup = S.caption = S.thead;
  S.th = S.td;
  var Fc = /<|&#?\w+;/,
  bb = z.createDocumentFragment().appendChild(z.createElement("div")),
  cb = z.createElement("input");
  cb.setAttribute("type", "radio");
  cb.setAttribute("checked", "checked");
  cb.setAttribute("name", "t");
  bb.appendChild(cb);
  G.checkClone = bb.cloneNode(!0).cloneNode(!0).lastChild.checked;
  bb.innerHTML = "<textarea>x</textarea>";
  G.noCloneChecked = !!bb.cloneNode(!0).lastChild.defaultValue; ! 0;
  var db = z.documentElement,
  md = /^key/,
  nd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  mc = /^([^.]*)(?:\.(.+)|)/;
  j.event = {
    global: {},
    add: function(b, c, d, e, l) {
      var f, g, p, q, m, r, n, s, u, t;
      if (m = B.get(b)) {
        d.handler && (f = d, d = f.handler, l = f.selector);
        l && j.find.matchesSelector(db, l);
        d.guid || (d.guid = j.guid++); (q = m.events) || (q = m.events = {}); (g = m.handle) || (g = m.handle = function(c) {
          return "undefined" != typeof j && j.event.triggered !== c.type ? j.event.dispatch.apply(b, arguments) : void 0
        });
        c = (c || "").match(U) || [""];
        for (m = c.length; m--;) p = mc.exec(c[m]) || [],
        u = t = p[1],
        p = (p[2] || "").split(".").sort(),
        u && (n = j.event.special[u] || {},
        u = (l ? n.delegateType: n.bindType) || u, n = j.event.special[u] || {},
        r = j.extend({
          type: u,
          origType: t,
          data: e,
          handler: d,
          guid: d.guid,
          selector: l,
          needsContext: l && j.expr.match.needsContext.test(l),
          namespace: p.join(".")
        },
        f), (s = q[u]) || (s = q[u] = [], s.delegateCount = 0, n.setup && !1 !== n.setup.call(b, e, p, g) || b.addEventListener && b.addEventListener(u, g)), n.add && (n.add.call(b, r), r.handler.guid || (r.handler.guid = d.guid)), l ? s.splice(s.delegateCount++, 0, r) : s.push(r), j.event.global[u] = !0)
      }
    },
    remove: function(b, c, d, e, l) {
      var f, g, p, q, m, r, n, s, u, t, y, A = B.hasData(b) && B.get(b);
      if (A && (q = A.events)) {
        c = (c || "").match(U) || [""];
        for (m = c.length; m--;) if (p = mc.exec(c[m]) || [], u = y = p[1], t = (p[2] || "").split(".").sort(), u) {
          n = j.event.special[u] || {};
          u = (e ? n.delegateType: n.bindType) || u;
          s = q[u] || [];
          p = p[2] && RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)");
          for (g = f = s.length; f--;) r = s[f],
          !l && y !== r.origType || d && d.guid !== r.guid || p && !p.test(r.namespace) || e && e !== r.selector && ("**" !== e || !r.selector) || (s.splice(f, 1), r.selector && s.delegateCount--, n.remove && n.remove.call(b, r));
          g && !s.length && (n.teardown && !1 !== n.teardown.call(b, t, A.handle) || j.removeEvent(b, u, A.handle), delete q[u])
        } else for (u in q) j.event.remove(b, u + c[m], d, e, !0);
        j.isEmptyObject(q) && B.remove(b, "handle events")
      }
    },
    dispatch: function(b) {
      var c = j.event.fix(b),
      d,
      e,
      l,
      f,
      g,
      p,
      q = Array(arguments.length);
      e = (B.get(this, "events") || {})[c.type] || [];
      var m = j.event.special[c.type] || {};
      q[0] = c;
      for (d = 1; d < arguments.length; d++) q[d] = arguments[d];
      if (c.delegateTarget = this, !m.preDispatch || !1 !== m.preDispatch.call(this, c)) {
        p = j.event.handlers.call(this, c, e);
        for (d = 0; (f = p[d++]) && !c.isPropagationStopped();) {
          c.currentTarget = f.elem;
          for (e = 0; (g = f.handlers[e++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !c.rnamespace.test(g.namespace) || (c.handleObj = g, c.data = g.data, l = ((j.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, q), void 0 !== l && !1 === (c.result = l) && (c.preventDefault(), c.stopPropagation()))
        }
        return m.postDispatch && m.postDispatch.call(this, c),
        c.result
      }
    },
    handlers: function(b, c) {
      var d, e, l, f, g, p = [],
      q = c.delegateCount,
      m = b.target;
      if (q && m.nodeType && !("click" === b.type && 1 <= b.button)) for (; m !== this; m = m.parentNode || this) if (1 === m.nodeType && ("click" !== b.type || !0 !== m.disabled)) {
        f = [];
        g = {};
        for (d = 0; d < q; d++) e = c[d],
        l = e.selector + " ",
        void 0 === g[l] && (g[l] = e.needsContext ? -1 < j(l, this).index(m) : j.find(l, this, null, [m]).length),
        g[l] && f.push(e);
        f.length && p.push({
          elem: m,
          handlers: f
        })
      }
      return m = this,
      q < c.length && p.push({
        elem: m,
        handlers: c.slice(q)
      }),
      p
    },
    addProp: function(b, c) {
      Object.defineProperty(j.Event.prototype, b, {
        enumerable: !0,
        configurable: !0,
        get: j.isFunction(c) ?
        function() {
          if (this.originalEvent) return c(this.originalEvent)
        }: function() {
          if (this.originalEvent) return this.originalEvent[b]
        },
        set: function(c) {
          Object.defineProperty(this, b, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: c
          })
        }
      })
    },
    fix: function(b) {
      return b[j.expando] ? b: new j.Event(b)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== la() && this.focus) return this.focus(),
          !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === la() && this.blur) return this.blur(),
          !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && f(this, "input")) return this.click(),
          !1
        },
        _default: function(b) {
          return f(b.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(b) {
          void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
        }
      }
    }
  };
  j.removeEvent = function(b, c, d) {
    b.removeEventListener && b.removeEventListener(c, d)
  };
  j.Event = function(b, c) {
    return this instanceof j.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? J: T, this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode: b.target, this.currentTarget = b.currentTarget, this.relatedTarget = b.relatedTarget) : this.type = b, c && j.extend(this, c), this.timeStamp = b && b.timeStamp || j.now(), void(this[j.expando] = !0)) : new j.Event(b, c)
  };
  j.Event.prototype = {
    constructor: j.Event,
    isDefaultPrevented: T,
    isPropagationStopped: T,
    isImmediatePropagationStopped: T,
    isSimulated: !1,
    preventDefault: function() {
      var b = this.originalEvent;
      this.isDefaultPrevented = J;
      b && !this.isSimulated && b.preventDefault()
    },
    stopPropagation: function() {
      var b = this.originalEvent;
      this.isPropagationStopped = J;
      b && !this.isSimulated && b.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var b = this.originalEvent;
      this.isImmediatePropagationStopped = J;
      b && !this.isSimulated && b.stopImmediatePropagation();
      this.stopPropagation()
    }
  };
  j.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function(b) {
      var c = b.button;
      return null == b.which && md.test(b.type) ? null != b.charCode ? b.charCode: b.keyCode: !b.which && void 0 !== c && nd.test(b.type) ? 1 & c ? 1 : 2 & c ? 3 : 4 & c ? 2 : 0 : b.which
    }
  },
  j.event.addProp);
  j.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  },
  function(b, c) {
    j.event.special[b] = {
      delegateType: c,
      bindType: c,
      handle: function(b) {
        var d, e = b.relatedTarget,
        l = b.handleObj;
        return e && (e === this || j.contains(this, e)) || (b.type = l.origType, d = l.handler.apply(this, arguments), b.type = c),
        d
      }
    }
  });
  j.fn.extend({
    on: function(b, c, d, e) {
      return O(this, b, c, d, e)
    },
    one: function(b, c, d, e) {
      return O(this, b, c, d, e, 1)
    },
    off: function(b, c, d) {
      var e, l;
      if (b && b.preventDefault && b.handleObj) return e = b.handleObj,
      j(b.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace: e.origType, e.selector, e.handler),
      this;
      if ("object" == typeof b) {
        for (l in b) this.off(l, c, b[l]);
        return this
      }
      return ! 1 !== c && "function" != typeof c || (d = c, c = void 0),
      !1 === d && (d = T),
      this.each(function() {
        j.event.remove(this, b, d, c)
      })
    }
  });
  var od = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
  pd = /<script|<style|<link/i,
  Jc = /checked\s*(?:[^=]|=\s*.checked.)/i,
  Ic = /^true\/(.*)/,
  Lc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  j.extend({
    htmlPrefilter: function(b) {
      return b.replace(od, "<$1></$2>")
    },
    clone: function(b, c, d) {
      var e, l, f, g, p = b.cloneNode(!0),
      m = j.contains(b.ownerDocument, b);
      if (!G.noCloneChecked && !(1 !== b.nodeType && 11 !== b.nodeType || j.isXMLDoc(b))) {
        g = y(p);
        f = y(b);
        e = 0;
        for (l = f.length; e < l; e++) {
          var q = f[e],
          r = g[e],
          n = r.nodeName.toLowerCase();
          "input" === n && lc.test(q.type) ? r.checked = q.checked: "input" !== n && "textarea" !== n || (r.defaultValue = q.defaultValue)
        }
      }
      if (c) if (d) {
        f = f || y(b);
        g = g || y(p);
        e = 0;
        for (l = f.length; e < l; e++) Eb(f[e], g[e])
      } else Eb(b, p);
      return g = y(p, "script"),
      0 < g.length && F(g, !m && y(b, "script")),
      p
    },
    cleanData: function(b) {
      for (var c, d, e, l = j.event.special,
      f = 0; void 0 !== (d = b[f]); f++) if (ab(d)) {
        if (c = d[B.expando]) {
          if (c.events) for (e in c.events) l[e] ? j.event.remove(d, e) : j.removeEvent(d, e, c.handle);
          d[B.expando] = void 0
        }
        d[P.expando] && (d[P.expando] = void 0)
      }
    }
  });
  j.fn.extend({
    detach: function(b) {
      return Gb(this, b, !0)
    },
    remove: function(b) {
      return Gb(this, b)
    },
    text: function(b) {
      return fa(this,
      function(b) {
        return void 0 === b ? j.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b)
        })
      },
      null, b, arguments.length)
    },
    append: function() {
      return wa(this, arguments,
      function(b) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && Db(this, b).appendChild(b)
      })
    },
    prepend: function() {
      return wa(this, arguments,
      function(b) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var c = Db(this, b);
          c.insertBefore(b, c.firstChild)
        }
      })
    },
    before: function() {
      return wa(this, arguments,
      function(b) {
        this.parentNode && this.parentNode.insertBefore(b, this)
      })
    },
    after: function() {
      return wa(this, arguments,
      function(b) {
        this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
      })
    },
    empty: function() {
      for (var b, c = 0; null != (b = this[c]); c++) 1 === b.nodeType && (j.cleanData(y(b, !1)), b.textContent = "");
      return this
    },
    clone: function(b, c) {
      return b = null != b && b,
      c = null == c ? b: c,
      this.map(function() {
        return j.clone(this, b, c)
      })
    },
    html: function(b) {
      return fa(this,
      function(b) {
        var c = this[0] || {},
        d = 0,
        e = this.length;
        if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
        if ("string" == typeof b && !pd.test(b) && !S[(Bb.exec(b) || ["", ""])[1].toLowerCase()]) {
          b = j.htmlPrefilter(b);
          try {
            for (; d < e; d++) c = this[d] || {},
            1 === c.nodeType && (j.cleanData(y(c, !1)), c.innerHTML = b);
            c = 0
          } catch(l) {}
        }
        c && this.empty().append(b)
      },
      null, b, arguments.length)
    },
    replaceWith: function() {
      var b = [];
      return wa(this, arguments,
      function(c) {
        var d = this.parentNode;
        0 > j.inArray(this, b) && (j.cleanData(y(this)), d && d.replaceChild(c, this))
      },
      b)
    }
  });
  j.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  },
  function(b, c) {
    j.fn[b] = function(b) {
      for (var d = [], e = j(b), l = e.length - 1, f = 0; f <= l; f++) b = f === l ? this: this.clone(!0),
      j(e[f])[c](b),
      lb.apply(d, b.get());
      return this.pushStack(d)
    }
  });
  var Hb = /^margin/,
  gb = RegExp("^(" + jc + ")(?!px)[a-z%]+$", "i"),
  Na = function(c) {
    var d = c.ownerDocument.defaultView;
    return d && d.opener || (d = b),
    d.getComputedStyle(c)
  },
  fb = function() {
    if (aa) {
      aa.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
      aa.innerHTML = "";
      db.appendChild(eb);
      var c = b.getComputedStyle(aa);
      nc = "1%" !== c.top;
      oc = "2px" === c.marginLeft;
      pc = "4px" === c.width;
      aa.style.marginRight = "50%";
      qc = "4px" === c.marginRight;
      db.removeChild(eb);
      aa = null
    }
  },
  nc,
  pc,
  qc,
  oc,
  eb = z.createElement("div"),
  aa = z.createElement("div");
  aa.style && (aa.style.backgroundClip = "content-box", aa.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === aa.style.backgroundClip, eb.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", eb.appendChild(aa), j.extend(G, {
    pixelPosition: function() {
      return fb(),
      nc
    },
    boxSizingReliable: function() {
      return fb(),
      pc
    },
    pixelMarginRight: function() {
      return fb(),
      qc
    },
    reliableMarginLeft: function() {
      return fb(),
      oc
    }
  })); ! 0;
  var qd = /^(none|table(?!-c[ea]).+)/,
  rc = /^--/,
  rd = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
  sc = {
    letterSpacing: "0",
    fontWeight: "400"
  },
  Lb = ["Webkit", "Moz", "ms"],
  Kb = z.createElement("div").style;
  j.extend({
    cssHooks: {
      opacity: {
        get: function(b, c) {
          if (c) {
            var d = Fa(b, "opacity");
            return "" === d ? "1": d
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function(b, c, d, e) {
      if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
        var l, f, g, p = j.camelCase(c),
        q = rc.test(c),
        m = b.style;
        return q || (c = Jb(p)),
        g = j.cssHooks[c] || j.cssHooks[p],
        void 0 === d ? g && "get" in g && void 0 !== (l = g.get(b, !1, e)) ? l: m[c] : (f = typeof d, "string" === f && (l = Ea.exec(d)) && l[1] && (d = u(b, c, l), f = "number"), null != d && d === d && ("number" === f && (d += l && l[3] || (j.cssNumber[p] ? "": "px")), G.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (m[c] = "inherit"), g && "set" in g && void 0 === (d = g.set(b, d, e)) || (q ? m.setProperty(c, d) : m[c] = d)), void 0)
      }
    },
    css: function(b, c, d, e) {
      var l, f, g, p = j.camelCase(c);
      return rc.test(c) || (c = Jb(p)),
      g = j.cssHooks[c] || j.cssHooks[p],
      g && "get" in g && (l = g.get(b, !0, d)),
      void 0 === l && (l = Fa(b, c, e)),
      "normal" === l && c in sc && (l = sc[c]),
      "" === d || d ? (f = parseFloat(l), !0 === d || isFinite(f) ? f || 0 : l) : l
    }
  });
  j.each(["height", "width"],
  function(b, c) {
    j.cssHooks[c] = {
      get: function(b, d, e) {
        if (d) return ! qd.test(j.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? Ob(b, c, e) : kc(b, rd,
        function() {
          return Ob(b, c, e)
        })
      },
      set: function(b, d, e) {
        var l, f = e && Na(b);
        e = e && Nb(b, c, e, "border-box" === j.css(b, "boxSizing", !1, f), f);
        return e && (l = Ea.exec(d)) && "px" !== (l[3] || "px") && (b.style[c] = d, d = j.css(b, c)),
        Mb(b, d, e)
      }
    }
  });
  j.cssHooks.marginLeft = Ib(G.reliableMarginLeft,
  function(b, c) {
    if (c) return (parseFloat(Fa(b, "marginLeft")) || b.getBoundingClientRect().left - kc(b, {
      marginLeft: 0
    },
    function() {
      return b.getBoundingClientRect().left
    })) + "px"
  });
  j.each({
    margin: "",
    padding: "",
    border: "Width"
  },
  function(b, c) {
    j.cssHooks[b + c] = {
      expand: function(d) {
        var e = 0,
        l = {};
        for (d = "string" == typeof d ? d.split(" ") : [d]; 4 > e; e++) l[b + ma[e] + c] = d[e] || d[e - 2] || d[0];
        return l
      }
    };
    Hb.test(b) || (j.cssHooks[b + c].set = Mb)
  });
  j.fn.extend({
    css: function(b, c) {
      return fa(this,
      function(b, c, d) {
        var e, l = {},
        f = 0;
        if (Array.isArray(c)) {
          d = Na(b);
          for (e = c.length; f < e; f++) l[c[f]] = j.css(b, c[f], !1, d);
          return l
        }
        return void 0 !== d ? j.style(b, c, d) : j.css(b, c)
      },
      b, c, 1 < arguments.length)
    }
  });
  j.Tween = Q;
  Q.prototype = {
    constructor: Q,
    init: function(b, c, d, e, l, f) {
      this.elem = b;
      this.prop = d;
      this.easing = l || j.easing._default;
      this.options = c;
      this.start = this.now = this.cur();
      this.end = e;
      this.unit = f || (j.cssNumber[d] ? "": "px")
    },
    cur: function() {
      var b = Q.propHooks[this.prop];
      return b && b.get ? b.get(this) : Q.propHooks._default.get(this)
    },
    run: function(b) {
      var c, d = Q.propHooks[this.prop];
      return this.options.duration ? this.pos = c = j.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b,
      this.now = (this.end - this.start) * c + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      d && d.set ? d.set(this) : Q.propHooks._default.set(this),
      this
    }
  };
  Q.prototype.init.prototype = Q.prototype;
  Q.propHooks = {
    _default: {
      get: function(b) {
        var c;
        return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = j.css(b.elem, b.prop, ""), c && "auto" !== c ? c: 0)
      },
      set: function(b) {
        j.fx.step[b.prop] ? j.fx.step[b.prop](b) : 1 !== b.elem.nodeType || null == b.elem.style[j.cssProps[b.prop]] && !j.cssHooks[b.prop] ? b.elem[b.prop] = b.now: j.style(b.elem, b.prop, b.now + b.unit)
      }
    }
  };
  Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
    set: function(b) {
      b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
    }
  };
  j.easing = {
    linear: function(b) {
      return b
    },
    swing: function(b) {
      return 0.5 - Math.cos(b * Math.PI) / 2
    },
    _default: "swing"
  };
  j.fx = Q.prototype.init;
  j.fx.step = {};
  var xa, Oa, sd = /^(?:toggle|show|hide)$/,
  td = /queueHooks$/;
  j.Animation = j.extend(Y, {
    tweeners: {
      "*": [function(b, c) {
        var d = this.createTween(b, c);
        return u(d.elem, b, Ea.exec(c), d),
        d
      }]
    },
    tweener: function(b, c) {
      j.isFunction(b) ? (c = b, b = ["*"]) : b = b.match(U);
      for (var d, e = 0,
      l = b.length; e < l; e++) d = b[e],
      Y.tweeners[d] = Y.tweeners[d] || [],
      Y.tweeners[d].unshift(c)
    },
    prefilters: [function(b, c, d) {
      var e, l, f, g, p, m, q, r, n = "width" in c || "height" in c,
      s = this,
      u = {},
      y = b.style,
      A = b.nodeType && Ma(b),
      z = B.get(b, "fxshow");
      d.queue || (g = j._queueHooks(b, "fx"), null == g.unqueued && (g.unqueued = 0, p = g.empty.fire, g.empty.fire = function() {
        g.unqueued || p()
      }), g.unqueued++, s.always(function() {
        s.always(function() {
          g.unqueued--;
          j.queue(b, "fx").length || g.empty.fire()
        })
      }));
      for (e in c) if (l = c[e], sd.test(l)) {
        if (delete c[e], f = f || "toggle" === l, l === (A ? "hide": "show")) {
          if ("show" !== l || !z || void 0 === z[e]) continue;
          A = !0
        }
        u[e] = z && z[e] || j.style(b, e)
      }
      if (m = !j.isEmptyObject(c), m || !j.isEmptyObject(u)) for (e in n && 1 === b.nodeType && (d.overflow = [y.overflow, y.overflowX, y.overflowY], q = z && z.display, null == q && (q = B.get(b, "display")), r = j.css(b, "display"), "none" === r && (q ? r = q: (t([b], !0), q = b.style.display || q, r = j.css(b, "display"), t([b]))), ("inline" === r || "inline-block" === r && null != q) && "none" === j.css(b, "float") && (m || (s.done(function() {
        y.display = q
      }), null == q && (r = y.display, q = "none" === r ? "": r)), y.display = "inline-block")), d.overflow && (y.overflow = "hidden", s.always(function() {
        y.overflow = d.overflow[0];
        y.overflowX = d.overflow[1];
        y.overflowY = d.overflow[2]
      })), m = !1, u) m || (z ? "hidden" in z && (A = z.hidden) : z = B.access(b, "fxshow", {
        display: q
      }), f && (z.hidden = !A), A && t([b], !0), s.done(function() {
        A || t([b]);
        B.remove(b, "fxshow");
        for (e in u) j.style(b, e, u[e])
      })),
      m = Qb(A ? z[e] : 0, e, s),
      e in z || (z[e] = m.start, A && (m.end = m.start, m.start = 0))
    }],
    prefilter: function(b, c) {
      c ? Y.prefilters.unshift(b) : Y.prefilters.push(b)
    }
  });
  j.speed = function(b, c, d) {
    var e = b && "object" == typeof b ? j.extend({},
    b) : {
      complete: d || !d && c || j.isFunction(b) && b,
      duration: b,
      easing: d && c || c && !j.isFunction(c) && c
    };
    return j.fx.off ? e.duration = 0 : "number" != typeof e.duration && (e.duration in j.fx.speeds ? e.duration = j.fx.speeds[e.duration] : e.duration = j.fx.speeds._default),
    null != e.queue && !0 !== e.queue || (e.queue = "fx"),
    e.old = e.complete,
    e.complete = function() {
      j.isFunction(e.old) && e.old.call(this);
      e.queue && j.dequeue(this, e.queue)
    },
    e
  };
  j.fn.extend({
    fadeTo: function(b, c, d, e) {
      return this.filter(Ma).css("opacity", 0).show().end().animate({
        opacity: c
      },
      b, d, e)
    },
    animate: function(b, c, d, e) {
      var l = j.isEmptyObject(b),
      f = j.speed(c, d, e);
      c = function() {
        var c = Y(this, j.extend({},
        b), f); (l || B.get(this, "finish")) && c.stop(!0)
      };
      return c.finish = c,
      l || !1 === f.queue ? this.each(c) : this.queue(f.queue, c)
    },
    stop: function(b, c, d) {
      var e = function(b) {
        var c = b.stop;
        delete b.stop;
        c(d)
      };
      return "string" != typeof b && (d = c, c = b, b = void 0),
      c && !1 !== b && this.queue(b || "fx", []),
      this.each(function() {
        var c = !0,
        l = null != b && b + "queueHooks",
        f = j.timers,
        g = B.get(this);
        if (l) g[l] && g[l].stop && e(g[l]);
        else for (l in g) g[l] && g[l].stop && td.test(l) && e(g[l]);
        for (l = f.length; l--;) f[l].elem !== this || null != b && f[l].queue !== b || (f[l].anim.stop(d), c = !1, f.splice(l, 1)); ! c && d || j.dequeue(this, b)
      })
    },
    finish: function(b) {
      return ! 1 !== b && (b = b || "fx"),
      this.each(function() {
        var c, d = B.get(this),
        e = d[b + "queue"];
        c = d[b + "queueHooks"];
        var l = j.timers,
        f = e ? e.length: 0;
        d.finish = !0;
        j.queue(this, b, []);
        c && c.stop && c.stop.call(this, !0);
        for (c = l.length; c--;) l[c].elem === this && l[c].queue === b && (l[c].anim.stop(!0), l.splice(c, 1));
        for (c = 0; c < f; c++) e[c] && e[c].finish && e[c].finish.call(this);
        delete d.finish
      })
    }
  });
  j.each(["toggle", "show", "hide"],
  function(b, c) {
    var d = j.fn[c];
    j.fn[c] = function(b, e, l) {
      return null == b || "boolean" == typeof b ? d.apply(this, arguments) : this.animate(Pa(c, !0), b, e, l)
    }
  });
  j.each({
    slideDown: Pa("show"),
    slideUp: Pa("hide"),
    slideToggle: Pa("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  },
  function(b, c) {
    j.fn[b] = function(b, d, e) {
      return this.animate(c, b, d, e)
    }
  });
  j.timers = [];
  j.fx.tick = function() {
    var b, c = 0,
    d = j.timers;
    for (xa = j.now(); c < d.length; c++) b = d[c],
    b() || d[c] !== b || d.splice(c--, 1);
    d.length || j.fx.stop();
    xa = void 0
  };
  j.fx.timer = function(b) {
    j.timers.push(b);
    j.fx.start()
  };
  j.fx.interval = 13;
  j.fx.start = function() {
    Oa || (Oa = !0, hb())
  };
  j.fx.stop = function() {
    Oa = null
  };
  j.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  j.fn.delay = function(c, d) {
    return c = j.fx ? j.fx.speeds[c] || c: c,
    d = d || "fx",
    this.queue(d,
    function(d, e) {
      var l = b.setTimeout(d, c);
      e.stop = function() {
        b.clearTimeout(l)
      }
    })
  };
  var Ba = z.createElement("input"),
  ud = z.createElement("select").appendChild(z.createElement("option"));
  Ba.type = "checkbox";
  G.checkOn = "" !== Ba.value;
  G.optSelected = ud.selected;
  Ba = z.createElement("input");
  Ba.value = "t";
  Ba.type = "radio";
  G.radioValue = "t" === Ba.value;
  var tc, Ja = j.expr.attrHandle;
  j.fn.extend({
    attr: function(b, c) {
      return fa(this, j.attr, b, c, 1 < arguments.length)
    },
    removeAttr: function(b) {
      return this.each(function() {
        j.removeAttr(this, b)
      })
    }
  });
  j.extend({
    attr: function(b, c, d) {
      var e, l, f = b.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof b.getAttribute ? j.prop(b, c, d) : (1 === f && j.isXMLDoc(b) || (l = j.attrHooks[c.toLowerCase()] || (j.expr.match.bool.test(c) ? tc: void 0)), void 0 !== d ? null === d ? void j.removeAttr(b, c) : l && "set" in l && void 0 !== (e = l.set(b, d, c)) ? e: (b.setAttribute(c, d + ""), d) : l && "get" in l && null !== (e = l.get(b, c)) ? e: (e = j.find.attr(b, c), null == e ? void 0 : e))
    },
    attrHooks: {
      type: {
        set: function(b, c) {
          if (!G.radioValue && "radio" === c && f(b, "input")) {
            var d = b.value;
            return b.setAttribute("type", c),
            d && (b.value = d),
            c
          }
        }
      }
    },
    removeAttr: function(b, c) {
      var d, e = 0,
      l = c && c.match(U);
      if (l && 1 === b.nodeType) for (; d = l[e++];) b.removeAttribute(d)
    }
  });
  tc = {
    set: function(b, c, d) {
      return ! 1 === c ? j.removeAttr(b, d) : b.setAttribute(d, d),
      d
    }
  };
  j.each(j.expr.match.bool.source.match(/\w+/g),
  function(b, c) {
    var d = Ja[c] || j.find.attr;
    Ja[c] = function(b, c, e) {
      var l, f, j = c.toLowerCase();
      return e || (f = Ja[j], Ja[j] = l, l = null != d(b, c, e) ? j: null, Ja[j] = f),
      l
    }
  });
  var vd = /^(?:input|select|textarea|button)$/i,
  wd = /^(?:a|area)$/i;
  j.fn.extend({
    prop: function(b, c) {
      return fa(this, j.prop, b, c, 1 < arguments.length)
    },
    removeProp: function(b) {
      return this.each(function() {
        delete this[j.propFix[b] || b]
      })
    }
  });
  j.extend({
    prop: function(b, c, d) {
      var e, l, f = b.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && j.isXMLDoc(b) || (c = j.propFix[c] || c, l = j.propHooks[c]),
      void 0 !== d ? l && "set" in l && void 0 !== (e = l.set(b, d, c)) ? e: b[c] = d: l && "get" in l && null !== (e = l.get(b, c)) ? e: b[c]
    },
    propHooks: {
      tabIndex: {
        get: function(b) {
          var c = j.find.attr(b, "tabindex");
          return c ? parseInt(c, 10) : vd.test(b.nodeName) || wd.test(b.nodeName) && b.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });
  G.optSelected || (j.propHooks.selected = {
    get: function(b) {
      b = b.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex,
      null
    },
    set: function(b) {
      b = b.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
    }
  });
  j.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
  function() {
    j.propFix[this.toLowerCase()] = this
  });
  j.fn.extend({
    addClass: function(b) {
      var c, d, e, l, f, g, p = 0;
      if (j.isFunction(b)) return this.each(function(c) {
        j(this).addClass(b.call(this, c, oa(this)))
      });
      if ("string" == typeof b && b) for (c = b.match(U) || []; d = this[p++];) if (l = oa(d), e = 1 === d.nodeType && " " + na(l) + " ") {
        for (g = 0; f = c[g++];) 0 > e.indexOf(" " + f + " ") && (e += f + " ");
        e = na(e);
        l !== e && d.setAttribute("class", e)
      }
      return this
    },
    removeClass: function(b) {
      var c, d, e, l, f, g, p = 0;
      if (j.isFunction(b)) return this.each(function(c) {
        j(this).removeClass(b.call(this, c, oa(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof b && b) for (c = b.match(U) || []; d = this[p++];) if (l = oa(d), e = 1 === d.nodeType && " " + na(l) + " ") {
        for (g = 0; f = c[g++];) for (; - 1 < e.indexOf(" " + f + " ");) e = e.replace(" " + f + " ", " ");
        e = na(e);
        l !== e && d.setAttribute("class", e)
      }
      return this
    },
    toggleClass: function(b, c) {
      var d = typeof b;
      return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : j.isFunction(b) ? this.each(function(d) {
        j(this).toggleClass(b.call(this, d, oa(this), c), c)
      }) : this.each(function() {
        var c, e, l, f;
        if ("string" === d) {
          e = 0;
          l = j(this);
          for (f = b.match(U) || []; c = f[e++];) l.hasClass(c) ? l.removeClass(c) : l.addClass(c)
        } else void 0 !== b && "boolean" !== d || (c = oa(this), c && B.set(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || !1 === b ? "": B.get(this, "__className__") || ""))
      })
    },
    hasClass: function(b) {
      var c, d = 0;
      for (b = " " + b + " "; c = this[d++];) if (1 === c.nodeType && -1 < (" " + na(oa(c)) + " ").indexOf(b)) return ! 0;
      return ! 1
    }
  });
  var xd = /\r/g;
  j.fn.extend({
    val: function(b) {
      var c, d, e, l = this[0];
      if (arguments.length) return e = j.isFunction(b),
      this.each(function(d) {
        var l;
        1 === this.nodeType && (l = e ? b.call(this, d, j(this).val()) : b, null == l ? l = "": "number" == typeof l ? l += "": Array.isArray(l) && (l = j.map(l,
        function(b) {
          return null == b ? "": b + ""
        })), c = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, l, "value") || (this.value = l))
      });
      if (l) return c = j.valHooks[l.type] || j.valHooks[l.nodeName.toLowerCase()],
      c && "get" in c && void 0 !== (d = c.get(l, "value")) ? d: (d = l.value, "string" == typeof d ? d.replace(xd, "") : null == d ? "": d)
    }
  });
  j.extend({
    valHooks: {
      option: {
        get: function(b) {
          var c = j.find.attr(b, "value");
          return null != c ? c: na(j.text(b))
        }
      },
      select: {
        get: function(b) {
          var c, d, e = b.options,
          l = b.selectedIndex,
          g = "select-one" === b.type,
          p = g ? null: [],
          q = g ? l + 1 : e.length;
          for (d = 0 > l ? q: g ? l: 0; d < q; d++) if (c = e[d], (c.selected || d === l) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup"))) {
            if (b = j(c).val(), g) return b;
            p.push(b)
          }
          return p
        },
        set: function(b, c) {
          for (var d, e, l = b.options,
          f = j.makeArray(c), g = l.length; g--;) e = l[g],
          (e.selected = -1 < j.inArray(j.valHooks.option.get(e), f)) && (d = !0);
          return d || (b.selectedIndex = -1),
          f
        }
      }
    }
  });
  j.each(["radio", "checkbox"],
  function() {
    j.valHooks[this] = {
      set: function(b, c) {
        if (Array.isArray(c)) return b.checked = -1 < j.inArray(j(b).val(), c)
      }
    };
    G.checkOn || (j.valHooks[this].get = function(b) {
      return null === b.getAttribute("value") ? "on": b.value
    })
  });
  var uc = /^(?:focusinfocus|focusoutblur)$/;
  j.extend(j.event, {
    trigger: function(c, d, e, l) {
      var f, g, p, q, m, r, n, s = [e || z],
      u = Ra.call(c, "type") ? c.type: c;
      f = Ra.call(c, "namespace") ? c.namespace.split(".") : [];
      if (g = p = e = e || z, 3 !== e.nodeType && 8 !== e.nodeType && !uc.test(u + j.event.triggered) && ( - 1 < u.indexOf(".") && (f = u.split("."), u = f.shift(), f.sort()), m = 0 > u.indexOf(":") && "on" + u, c = c[j.expando] ? c: new j.Event(u, "object" == typeof c && c), c.isTrigger = l ? 2 : 3, c.namespace = f.join("."), c.rnamespace = c.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = e), d = null == d ? [c] : j.makeArray(d, [c]), n = j.event.special[u] || {},
      l || !n.trigger || !1 !== n.trigger.apply(e, d))) {
        if (!l && !n.noBubble && !j.isWindow(e)) {
          q = n.delegateType || u;
          for (uc.test(q + u) || (g = g.parentNode); g; g = g.parentNode) s.push(g),
          p = g;
          p === (e.ownerDocument || z) && s.push(p.defaultView || p.parentWindow || b)
        }
        for (f = 0; (g = s[f++]) && !c.isPropagationStopped();) c.type = 1 < f ? q: n.bindType || u,
        (r = (B.get(g, "events") || {})[c.type] && B.get(g, "handle")) && r.apply(g, d),
        (r = m && g[m]) && r.apply && ab(g) && (c.result = r.apply(g, d), !1 === c.result && c.preventDefault());
        return c.type = u,
        l || c.isDefaultPrevented() || n._default && !1 !== n._default.apply(s.pop(), d) || !ab(e) || m && j.isFunction(e[u]) && !j.isWindow(e) && (p = e[m], p && (e[m] = null), j.event.triggered = u, e[u](), j.event.triggered = void 0, p && (e[m] = p)),
        c.result
      }
    },
    simulate: function(b, c, d) {
      b = j.extend(new j.Event, d, {
        type: b,
        isSimulated: !0
      });
      j.event.trigger(b, null, c)
    }
  });
  j.fn.extend({
    trigger: function(b, c) {
      return this.each(function() {
        j.event.trigger(b, c, this)
      })
    },
    triggerHandler: function(b, c) {
      var d = this[0];
      if (d) return j.event.trigger(b, c, d, !0)
    }
  });
  j.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
  function(b, c) {
    j.fn[c] = function(b, d) {
      return 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
    }
  });
  j.fn.extend({
    hover: function(b, c) {
      return this.mouseenter(b).mouseleave(c || b)
    }
  });
  G.focusin = "onfocusin" in b;
  G.focusin || j.each({
    focus: "focusin",
    blur: "focusout"
  },
  function(b, c) {
    var d = function(b) {
      j.event.simulate(c, b.target, j.event.fix(b))
    };
    j.event.special[c] = {
      setup: function() {
        var e = this.ownerDocument || this,
        l = B.access(e, c);
        l || e.addEventListener(b, d, !0);
        B.access(e, c, (l || 0) + 1)
      },
      teardown: function() {
        var e = this.ownerDocument || this,
        l = B.access(e, c) - 1;
        l ? B.access(e, c, l) : (e.removeEventListener(b, d, !0), B.remove(e, c))
      }
    }
  });
  var Ka = b.location,
  vc = j.now(),
  xb = /\?/;
  j.parseXML = function(c) {
    var d;
    if (!c || "string" != typeof c) return null;
    try {
      d = (new b.DOMParser).parseFromString(c, "text/xml")
    } catch(e) {
      d = void 0
    }
    return d && !d.getElementsByTagName("parsererror").length || j.error("Invalid XML: " + c),
    d
  };
  var Mc = /\[\]$/,
  wc = /\r?\n/g,
  yd = /^(?:submit|button|image|reset|file)$/i,
  zd = /^(?:input|select|textarea|keygen)/i;
  j.param = function(b, c) {
    var d, e = [],
    l = function(b, c) {
      var d = j.isFunction(c) ? c() : c;
      e[e.length] = encodeURIComponent(b) + "=" + encodeURIComponent(null == d ? "": d)
    };
    if (Array.isArray(b) || b.jquery && !j.isPlainObject(b)) j.each(b,
    function() {
      l(this.name, this.value)
    });
    else for (d in b) ib(d, b[d], c, l);
    return e.join("&")
  };
  j.fn.extend({
    serialize: function() {
      return j.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var b = j.prop(this, "elements");
        return b ? j.makeArray(b) : this
      }).filter(function() {
        var b = this.type;
        return this.name && !j(this).is(":disabled") && zd.test(this.nodeName) && !yd.test(b) && (this.checked || !lc.test(b))
      }).map(function(b, c) {
        var d = j(this).val();
        return null == d ? null: Array.isArray(d) ? j.map(d,
        function(b) {
          return {
            name: c.name,
            value: b.replace(wc, "\r\n")
          }
        }) : {
          name: c.name,
          value: d.replace(wc, "\r\n")
        }
      }).get()
    }
  });
  var Ad = /%20/g,
  Bd = /#.*$/,
  Cd = /([?&])_=[^&]*/,
  Dd = /^(.*?):[ \t]*([^\r\n]*)$/gm,
  Ed = /^(?:GET|HEAD)$/,
  Fd = /^\/\//,
  xc = {},
  jb = {},
  yc = "*/".concat("*"),
  yb = z.createElement("a");
  yb.href = Ka.href;
  j.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ka.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ka.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": yc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": j.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(b, c) {
      return c ? kb(kb(b, j.ajaxSettings), c) : kb(j.ajaxSettings, b)
    },
    ajaxPrefilter: Rb(xc),
    ajaxTransport: Rb(jb),
    ajax: function(c, d) {
      function e(c, d, p, q) {
        var s, u, x, D, I = d;
        if (!r) {
          r = !0;
          m && b.clearTimeout(m);
          l = void 0;
          g = q || "";
          K.readyState = 0 < c ? 4 : 0;
          q = 200 <= c && 300 > c || 304 === c;
          if (p) {
            x = t;
            for (var va = K,
            z, F, E, C, M = x.contents,
            G = x.dataTypes;
            "*" === G[0];) G.shift(),
            void 0 === z && (z = x.mimeType || va.getResponseHeader("Content-Type"));
            if (z) for (F in M) if (M[F] && M[F].test(z)) {
              G.unshift(F);
              break
            }
            if (G[0] in p) E = G[0];
            else {
              for (F in p) {
                if (!G[0] || x.converters[F + " " + G[0]]) {
                  E = F;
                  break
                }
                C || (C = F)
              }
              E = E || C
            }
            p = E ? (E !== G[0] && G.unshift(E), p[E]) : void 0;
            x = p
          }
          var L;
          a: {
            p = t;
            z = x;
            F = K;
            E = q;
            var R, O, N;
            x = {};
            va = p.dataTypes.slice();
            if (va[1]) for (R in p.converters) x[R.toLowerCase()] = p.converters[R];
            for (C = va.shift(); C;) if (p.responseFields[C] && (F[p.responseFields[C]] = z), !N && E && p.dataFilter && (z = p.dataFilter(z, p.dataType)), N = C, C = va.shift()) if ("*" === C) C = N;
            else if ("*" !== N && N !== C) {
              if (R = x[N + " " + C] || x["* " + C], !R) for (L in x) if (O = L.split(" "), O[1] === C && (R = x[N + " " + O[0]] || x["* " + O[0]])) { ! 0 === R ? R = x[L] : !0 !== x[L] && (C = O[0], va.unshift(O[1]));
                break
              }
              if (!0 !== R) if (R && p["throws"]) z = R(z);
              else try {
                z = R(z)
              } catch(P) {
                L = {
                  state: "parsererror",
                  error: R ? P: "No conversion from " + N + " to " + C
                };
                break a
              }
            }
            L = {
              state: "success",
              data: z
            }
          }
          x = L;
          q ? (t.ifModified && (D = K.getResponseHeader("Last-Modified"), D && (j.lastModified[f] = D), D = K.getResponseHeader("etag"), D && (j.etag[f] = D)), 204 === c || "HEAD" === t.type ? I = "nocontent": 304 === c ? I = "notmodified": (I = x.state, s = x.data, u = x.error, q = !u)) : (u = I, !c && I || (I = "error", 0 > c && (c = 0)));
          K.status = c;
          K.statusText = (d || I) + "";
          q ? B.resolveWith(y, [s, I, K]) : B.rejectWith(y, [K, I, u]);
          K.statusCode(J);
          J = void 0;
          n && A.trigger(q ? "ajaxSuccess": "ajaxError", [K, t, q ? s: u]);
          H.fireWith(y, [K, I]);
          n && (A.trigger("ajaxComplete", [K, t]), --j.active || j.event.trigger("ajaxStop"))
        }
      }
      "object" == typeof c && (d = c, c = void 0);
      d = d || {};
      var l, f, g, p, m, q, r, n, s, u, t = j.ajaxSetup({},
      d),
      y = t.context || t,
      A = t.context && (y.nodeType || y.jquery) ? j(y) : j.event,
      B = j.Deferred(),
      H = j.Callbacks("once memory"),
      J = t.statusCode || {},
      F = {},
      E = {},
      C = "canceled",
      K = {
        readyState: 0,
        getResponseHeader: function(b) {
          var c;
          if (r) {
            if (!p) for (p = {}; c = Dd.exec(g);) p[c[1].toLowerCase()] = c[2];
            c = p[b.toLowerCase()]
          }
          return null == c ? null: c
        },
        getAllResponseHeaders: function() {
          return r ? g: null
        },
        setRequestHeader: function(b, c) {
          return null == r && (b = E[b.toLowerCase()] = E[b.toLowerCase()] || b, F[b] = c),
          this
        },
        overrideMimeType: function(b) {
          return null == r && (t.mimeType = b),
          this
        },
        statusCode: function(b) {
          var c;
          if (b) if (r) K.always(b[K.status]);
          else for (c in b) J[c] = [J[c], b[c]];
          return this
        },
        abort: function(b) {
          b = b || C;
          return l && l.abort(b),
          e(0, b),
          this
        }
      };
      if (B.promise(K), t.url = ((c || t.url || Ka.href) + "").replace(Fd, Ka.protocol + "//"), t.type = d.method || d.type || t.method || t.type, t.dataTypes = (t.dataType || "*").toLowerCase().match(U) || [""], null == t.crossDomain) {
        q = z.createElement("a");
        try {
          q.href = t.url,
          q.href = q.href,
          t.crossDomain = yb.protocol + "//" + yb.host != q.protocol + "//" + q.host
        } catch(G) {
          t.crossDomain = !0
        }
      }
      if (t.data && t.processData && "string" != typeof t.data && (t.data = j.param(t.data, t.traditional)), Sb(xc, t, d, K), r) return K; (n = j.event && t.global) && 0 === j.active++&&j.event.trigger("ajaxStart");
      t.type = t.type.toUpperCase();
      t.hasContent = !Ed.test(t.type);
      f = t.url.replace(Bd, "");
      t.hasContent ? t.data && t.processData && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && (t.data = t.data.replace(Ad, "+")) : (u = t.url.slice(f.length), t.data && (f += (xb.test(f) ? "&": "?") + t.data, delete t.data), !1 === t.cache && (f = f.replace(Cd, "$1"), u = (xb.test(f) ? "&": "?") + "_=" + vc+++u), t.url = f + u);
      t.ifModified && (j.lastModified[f] && K.setRequestHeader("If-Modified-Since", j.lastModified[f]), j.etag[f] && K.setRequestHeader("If-None-Match", j.etag[f])); (t.data && t.hasContent && !1 !== t.contentType || d.contentType) && K.setRequestHeader("Content-Type", t.contentType);
      K.setRequestHeader("Accept", t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", " + yc + "; q=0.01": "") : t.accepts["*"]);
      for (s in t.headers) K.setRequestHeader(s, t.headers[s]);
      if (t.beforeSend && (!1 === t.beforeSend.call(y, K, t) || r)) return K.abort();
      if (C = "abort", H.add(t.complete), K.done(t.success), K.fail(t.error), l = Sb(jb, t, d, K)) {
        if (K.readyState = 1, n && A.trigger("ajaxSend", [K, t]), r) return K;
        t.async && 0 < t.timeout && (m = b.setTimeout(function() {
          K.abort("timeout")
        },
        t.timeout));
        try {
          r = !1,
          l.send(F, e)
        } catch(M) {
          if (r) throw M;
          e( - 1, M)
        }
      } else e( - 1, "No Transport");
      return K
    },
    getJSON: function(b, c, d) {
      return j.get(b, c, d, "json")
    },
    getScript: function(b, c) {
      return j.get(b, void 0, c, "script")
    }
  });
  j.each(["get", "post"],
  function(b, c) {
    j[c] = function(b, d, e, l) {
      return j.isFunction(d) && (l = l || e, e = d, d = void 0),
      j.ajax(j.extend({
        url: b,
        type: c,
        dataType: l,
        data: d,
        success: e
      },
      j.isPlainObject(b) && b))
    }
  });
  j._evalUrl = function(b) {
    return j.ajax({
      url: b,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    })
  };
  j.fn.extend({
    wrapAll: function(b) {
      var c;
      return this[0] && (j.isFunction(b) && (b = b.call(this[0])), c = j(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
        for (var b = this; b.firstElementChild;) b = b.firstElementChild;
        return b
      }).append(this)),
      this
    },
    wrapInner: function(b) {
      return j.isFunction(b) ? this.each(function(c) {
        j(this).wrapInner(b.call(this, c))
      }) : this.each(function() {
        var c = j(this),
        d = c.contents();
        d.length ? d.wrapAll(b) : c.append(b)
      })
    },
    wrap: function(b) {
      var c = j.isFunction(b);
      return this.each(function(d) {
        j(this).wrapAll(c ? b.call(this, d) : b)
      })
    },
    unwrap: function(b) {
      return this.parent(b).not("body").each(function() {
        j(this).replaceWith(this.childNodes)
      }),
      this
    }
  });
  j.expr.pseudos.hidden = function(b) {
    return ! j.expr.pseudos.visible(b)
  };
  j.expr.pseudos.visible = function(b) {
    return ! (!b.offsetWidth && !b.offsetHeight && !b.getClientRects().length)
  };
  j.ajaxSettings.xhr = function() {
    try {
      return new b.XMLHttpRequest
    } catch(c) {}
  };
  var Gd = {
    "0": 200,
    1223 : 204
  },
  La = j.ajaxSettings.xhr();
  G.cors = !!La && "withCredentials" in La;
  G.ajax = La = !!La;
  j.ajaxTransport(function(c) {
    var d, e;
    if (G.cors || La && !c.crossDomain) return {
      send: function(l, f) {
        var g, j = c.xhr();
        if (j.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields) for (g in c.xhrFields) j[g] = c.xhrFields[g];
        c.mimeType && j.overrideMimeType && j.overrideMimeType(c.mimeType);
        c.crossDomain || l["X-Requested-With"] || (l["X-Requested-With"] = "XMLHttpRequest");
        for (g in l) j.setRequestHeader(g, l[g]);
        d = function(b) {
          return function() {
            d && (d = e = j.onload = j.onerror = j.onabort = j.onreadystatechange = null, "abort" === b ? j.abort() : "error" === b ? "number" != typeof j.status ? f(0, "error") : f(j.status, j.statusText) : f(Gd[j.status] || j.status, j.statusText, "text" !== (j.responseType || "text") || "string" != typeof j.responseText ? {
              binary: j.response
            }: {
              text: j.responseText
            },
            j.getAllResponseHeaders()))
          }
        };
        j.onload = d();
        e = j.onerror = d("error");
        void 0 !== j.onabort ? j.onabort = e: j.onreadystatechange = function() {
          4 === j.readyState && b.setTimeout(function() {
            d && e()
          })
        };
        d = d("abort");
        try {
          j.send(c.hasContent && c.data || null)
        } catch(p) {
          if (d) throw p;
        }
      },
      abort: function() {
        d && d()
      }
    }
  });
  j.ajaxPrefilter(function(b) {
    b.crossDomain && (b.contents.script = !1)
  });
  j.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(b) {
        return j.globalEval(b),
        b
      }
    }
  });
  j.ajaxPrefilter("script",
  function(b) {
    void 0 === b.cache && (b.cache = !1);
    b.crossDomain && (b.type = "GET")
  });
  j.ajaxTransport("script",
  function(b) {
    if (b.crossDomain) {
      var c, d;
      return {
        send: function(e, l) {
          c = j("<script>").prop({
            charset: b.scriptCharset,
            src: b.url
          }).on("load error", d = function(b) {
            c.remove();
            d = null;
            b && l("error" === b.type ? 404 : 200, b.type)
          });
          z.head.appendChild(c[0])
        },
        abort: function() {
          d && d()
        }
      }
    }
  });
  var zc = [],
  zb = /(=)\?(?=&|$)|\?\?/;
  j.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var b = zc.pop() || j.expando + "_" + vc++;
      return this[b] = !0,
      b
    }
  });
  j.ajaxPrefilter("json jsonp",
  function(c, d, e) {
    var l, f, g, p = !1 !== c.jsonp && (zb.test(c.url) ? "url": "string" == typeof c.data && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && zb.test(c.data) && "data");
    if (p || "jsonp" === c.dataTypes[0]) return l = c.jsonpCallback = j.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback,
    p ? c[p] = c[p].replace(zb, "$1" + l) : !1 !== c.jsonp && (c.url += (xb.test(c.url) ? "&": "?") + c.jsonp + "=" + l),
    c.converters["script json"] = function() {
      return g || j.error(l + " was not called"),
      g[0]
    },
    c.dataTypes[0] = "json",
    f = b[l],
    b[l] = function() {
      g = arguments
    },
    e.always(function() {
      void 0 === f ? j(b).removeProp(l) : b[l] = f;
      c[l] && (c.jsonpCallback = d.jsonpCallback, zc.push(l));
      g && j.isFunction(f) && f(g[0]);
      g = f = void 0
    }),
    "script"
  });
  var Hd = G,
  Ac, Bc = z.implementation.createHTMLDocument("").body;
  Ac = (Bc.innerHTML = "<form></form><form></form>", 2 === Bc.childNodes.length);
  Hd.createHTMLDocument = Ac;
  j.parseHTML = function(b, c, d) {
    if ("string" != typeof b) return [];
    "boolean" == typeof c && (d = c, c = !1);
    var e, l, f;
    return c || (G.createHTMLDocument ? (c = z.implementation.createHTMLDocument(""), e = c.createElement("base"), e.href = z.location.href, c.head.appendChild(e)) : c = z),
    l = hc.exec(b),
    f = !d && [],
    l ? [c.createElement(l[1])] : (l = E([b], c, f), f && f.length && j(f).remove(), j.merge([], l.childNodes))
  };
  j.fn.load = function(b, c, d) {
    var e, l, f, g = this,
    p = b.indexOf(" ");
    return - 1 < p && (e = na(b.slice(p)), b = b.slice(0, p)),
    j.isFunction(c) ? (d = c, c = void 0) : c && "object" == typeof c && (l = "POST"),
    0 < g.length && j.ajax({
      url: b,
      type: l || "GET",
      dataType: "html",
      data: c
    }).done(function(b) {
      f = arguments;
      g.html(e ? j("<div>").append(j.parseHTML(b)).find(e) : b)
    }).always(d &&
    function(b, c) {
      g.each(function() {
        d.apply(this, f || [b.responseText, c, b])
      })
    }),
    this
  };
  j.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
  function(b, c) {
    j.fn[c] = function(b) {
      return this.on(c, b)
    }
  });
  j.expr.pseudos.animated = function(b) {
    return j.grep(j.timers,
    function(c) {
      return b === c.elem
    }).length
  };
  j.offset = {
    setOffset: function(b, c, d) {
      var e, l, f, g, p, q, m = j.css(b, "position"),
      r = j(b),
      n = {};
      "static" === m && (b.style.position = "relative");
      p = r.offset();
      f = j.css(b, "top");
      q = j.css(b, "left"); ("absolute" === m || "fixed" === m) && -1 < (f + q).indexOf("auto") ? (e = r.position(), g = e.top, l = e.left) : (g = parseFloat(f) || 0, l = parseFloat(q) || 0);
      j.isFunction(c) && (c = c.call(b, d, j.extend({},
      p)));
      null != c.top && (n.top = c.top - p.top + g);
      null != c.left && (n.left = c.left - p.left + l);
      "using" in c ? c.using.call(b, n) : r.css(n)
    }
  };
  j.fn.extend({
    offset: function(b) {
      if (arguments.length) return void 0 === b ? this: this.each(function(c) {
        j.offset.setOffset(this, b, c)
      });
      var c, d, e, l, f = this[0];
      if (f) return f.getClientRects().length ? (e = f.getBoundingClientRect(), c = f.ownerDocument, d = c.documentElement, l = c.defaultView, {
        top: e.top + l.pageYOffset - d.clientTop,
        left: e.left + l.pageXOffset - d.clientLeft
      }) : {
        top: 0,
        left: 0
      }
    },
    position: function() {
      if (this[0]) {
        var b, c, d = this[0],
        e = {
          top: 0,
          left: 0
        };
        return "fixed" === j.css(d, "position") ? c = d.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), f(b[0], "html") || (e = b.offset()), e = {
          top: e.top + j.css(b[0], "borderTopWidth", !0),
          left: e.left + j.css(b[0], "borderLeftWidth", !0)
        }),
        {
          top: c.top - e.top - j.css(d, "marginTop", !0),
          left: c.left - e.left - j.css(d, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var b = this.offsetParent; b && "static" === j.css(b, "position");) b = b.offsetParent;
        return b || db
      })
    }
  });
  j.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  },
  function(b, c) {
    var d = "pageYOffset" === c;
    j.fn[b] = function(e) {
      return fa(this,
      function(b, e, l) {
        var f;
        return j.isWindow(b) ? f = b: 9 === b.nodeType && (f = b.defaultView),
        void 0 === l ? f ? f[c] : b[e] : void(f ? f.scrollTo(d ? f.pageXOffset: l, d ? l: f.pageYOffset) : b[e] = l)
      },
      b, e, arguments.length)
    }
  });
  j.each(["top", "left"],
  function(b, c) {
    j.cssHooks[c] = Ib(G.pixelPosition,
    function(b, d) {
      if (d) return d = Fa(b, c),
      gb.test(d) ? j(b).position()[c] + "px": d
    })
  });
  j.each({
    Height: "height",
    Width: "width"
  },
  function(b, c) {
    j.each({
      padding: "inner" + b,
      content: c,
      "": "outer" + b
    },
    function(d, e) {
      j.fn[e] = function(l, f) {
        var g = arguments.length && (d || "boolean" != typeof l),
        p = d || (!0 === l || !0 === f ? "margin": "border");
        return fa(this,
        function(c, d, l) {
          var f;
          return j.isWindow(c) ? 0 === e.indexOf("outer") ? c["inner" + b] : c.document.documentElement["client" + b] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + b], f["scroll" + b], c.body["offset" + b], f["offset" + b], f["client" + b])) : void 0 === l ? j.css(c, d, p) : j.style(c, d, l, p)
        },
        c, g ? l: void 0, g)
      }
    })
  });
  j.fn.extend({
    bind: function(b, c, d) {
      return this.on(b, null, c, d)
    },
    unbind: function(b, c) {
      return this.off(b, null, c)
    },
    delegate: function(b, c, d, e) {
      return this.on(c, b, d, e)
    },
    undelegate: function(b, c, d) {
      return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
    }
  });
  j.holdReady = function(b) {
    b ? j.readyWait++:j.ready(!0)
  };
  j.isArray = Array.isArray;
  j.parseJSON = JSON.parse;
  j.nodeName = f;
  "function" == typeof define && define.amd && define("jquery", [],
  function() {
    return j
  });
  var Id = b.jQuery,
  Jd = b.$;
  return j.noConflict = function(c) {
    return b.$ === j && (b.$ = Jd),
    c && b.jQuery === j && (b.jQuery = Id),
    j
  },
  c || (b.jQuery = b.$ = j),
  j
});
function getInternetExplorerVersion() {
  var b = -1;
  "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
  return b
}
var ie = getInternetExplorerVersion();
function getQueryVariable(b) {
  for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
    var e = c[d].split("=");
    if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
  }
};
this.jukebox = {};
jukebox.Player = function(b, c) {
  this.id = ++jukebox.__jukeboxId;
  this.origin = c || null;
  this.settings = {};
  for (var d in this.defaults) this.settings[d] = this.defaults[d];
  if ("[object Object]" === Object.prototype.toString.call(b)) for (var e in b) this.settings[e] = b[e];
  "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
  this.resource = this.isPlaying = null;
  this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
  if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
  this.__init();
  return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
  defaults: {
    resources: [],
    autoplay: !1,
    spritemap: {},
    flashMediaElement: "./swf/FlashMediaElement.swf",
    timeout: 1E3
  },
  __addToManager: function() { ! 0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
  },
  __init: function() {
    var b = this,
    c = this.settings,
    d = {},
    e;
    jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
    if (!0 === d.html5audio) {
      this.context = new Audio;
      this.context.src = this.resource;
      if (null === this.origin) {
        var f = function(c) {
          b.__addToManager(c)
        };
        this.context.addEventListener("canplaythrough", f, !0);
        window.setTimeout(function() {
          b.context.removeEventListener("canplaythrough", f, !0);
          f("timeout")
        },
        c.timeout)
      }
      this.context.autobuffer = !0;
      this.context.preload = !0;
      for (e in this.HTML5API) this[e] = this.HTML5API[e];
      1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
      1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide",
      function() {
        null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
      }), window.addEventListener("pageshow",
      function() {
        b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
      }))
    } else if (!0 === d.flashaudio) {
      for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
      d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
      this.__initFlashContext(d); ! 0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
    } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
  },
  __initFlashContext: function(b) {
    var c, d = this.settings.flashMediaElement,
    e, f = {
      flashvars: b.join("&"),
      quality: "high",
      bgcolor: "#000000",
      wmode: "transparent",
      allowscriptaccess: "always",
      allowfullscreen: "true"
    };
    if (navigator.userAgent.match(/MSIE/)) {
      c = document.createElement("div");
      document.getElementsByTagName("body")[0].appendChild(c);
      var g = document.createElement("object");
      g.id = "jukebox-flashstream-" + this.id;
      g.setAttribute("type", "application/x-shockwave-flash");
      g.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
      g.setAttribute("width", "0");
      g.setAttribute("height", "0");
      f.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
      f.flashvars = b.join("&amp;");
      for (e in f) b = document.createElement("param"),
      b.setAttribute("name", e),
      b.setAttribute("value", f[e]),
      g.appendChild(b);
      c.outerHTML = g.outerHTML;
      this.context = document.getElementById("jukebox-flashstream-" + this.id)
    } else {
      c = document.createElement("embed");
      c.id = "jukebox-flashstream-" + this.id;
      c.setAttribute("type", "application/x-shockwave-flash");
      c.setAttribute("width", "100");
      c.setAttribute("height", "100");
      f.play = !1;
      f.loop = !1;
      f.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
      for (e in f) c.setAttribute(e, f[e]);
      document.getElementsByTagName("body")[0].appendChild(c);
      this.context = c
    }
  },
  backgroundHackForiOS: function() {
    if (void 0 !== this.backgroundMusic) {
      var b = Date.now ? Date.now() : +new Date;
      void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
    }
  },
  play: function(b, c) {
    if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
    else {
      var d = this.settings.spritemap,
      e;
      if (void 0 !== d[b]) e = d[b].start;
      else if ("number" === typeof b) {
        e = b;
        for (var f in d) if (e >= d[f].start && e <= d[f].end) {
          b = f;
          break
        }
      }
      void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
    }
  },
  stop: function() {
    this.__lastPosition = 0;
    this.isPlaying = null;
    this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
    return ! 0
  },
  pause: function() {
    this.isPlaying = null;
    this.__lastPosition = this.getCurrentTime();
    this.context.pause();
    return this.__lastPosition
  },
  resume: function(b) {
    b = "number" === typeof b ? b: this.__lastPosition;
    if (null !== b) return this.play(b),
    this.__lastPosition = null,
    !0;
    this.context.play();
    return ! 1
  },
  HTML5API: {
    getVolume: function() {
      return this.context.volume || 1
    },
    setVolume: function(b) {
      this.context.volume = b;
      return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
    },
    getCurrentTime: function() {
      return this.context.currentTime || 0
    },
    setCurrentTime: function(b) {
      try {
        return this.context.currentTime = b,
        !0
      } catch(c) {
        return ! 1
      }
    }
  },
  FLASHAPI: {
    getVolume: function() {
      return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
    },
    setVolume: function(b) {
      return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
    },
    getCurrentTime: function() {
      return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
    },
    setCurrentTime: function(b) {
      return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
    }
  }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
  this.features = {};
  this.codecs = {};
  this.__players = {};
  this.__playersLength = 0;
  this.__clones = {};
  this.__queue = [];
  this.settings = {};
  for (var c in this.defaults) this.settings[c] = this.defaults[c];
  if ("[object Object]" === Object.prototype.toString.call(b)) for (var d in b) this.settings[d] = b[d];
  this.__detectFeatures();
  jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
    jukebox.Manager.loop()
  },
  20) : !0
};
jukebox.Manager.prototype = {
  defaults: {
    useFlash: !1,
    useGameLoop: !1
  },
  __detectFeatures: function() {
    var b = window.Audio && new Audio;
    if (b && b.canPlayType && !1 === this.settings.useFlash) {
      for (var c = [{
        e: "3gp",
        m: ["audio/3gpp", "audio/amr"]
      },
      {
        e: "aac",
        m: ["audio/aac", "audio/aacp"]
      },
      {
        e: "amr",
        m: ["audio/amr", "audio/3gpp"]
      },
      {
        e: "caf",
        m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
      },
      {
        e: "m4a",
        m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
      },
      {
        e: "mp3",
        m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
      },
      {
        e: "mpga",
        m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
      },
      {
        e: "mp4",
        m: ["audio/mp4", "video/mp4"]
      },
      {
        e: "ogg",
        m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
      },
      {
        e: "wav",
        m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
      },
      {
        e: "webm",
        m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
      }], d, e, f = 0, g = c.length; f < g; f++) if (e = c[f].e, c[f].m.length && "object" === typeof c[f].m) for (var n = 0,
      m = c[f].m.length; n < m; n++) if (d = c[f].m[n], "" !== b.canPlayType(d)) {
        this.codecs[e] = d;
        break
      } else this.codecs[e] || (this.codecs[e] = !1);
      this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
      this.features.channels = 8;
      b.volume = 0.1337;
      this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
      navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
    }
    this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
    if (window.ActiveXObject) try {
      new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"),
      this.features.flashaudio = !0
    } catch(l) {} ! 0 === this.settings.useFlash && (this.features.flashaudio = !0); ! 0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
  },
  __getPlayerById: function(b) {
    return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
  },
  __getClone: function(b, c) {
    for (var d in this.__clones) {
      var e = this.__clones[d];
      if (null === e.isPlaying && e.origin === b) return e
    }
    if ("[object Object]" === Object.prototype.toString.call(c)) {
      d = {};
      for (var f in c) d[f] = c[f];
      d.autoplay = !1;
      f = new jukebox.Player(d, b);
      f.isClone = !0;
      f.wasReady = !1;
      return this.__clones[f.id] = f
    }
    return null
  },
  loop: function() {
    if (0 !== this.__playersLength) if (this.__queue.length && this.__playersLength < this.features.channels) {
      var b = this.__queue[0],
      c = this.__getPlayerById(b.origin);
      if (null !== c) {
        var d = this.__getClone(b.origin, c.settings);
        null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
      }
      this.__queue.splice(0, 1)
    } else for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
    c = b.getCurrentTime() || 0,
    b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
  },
  getPlayableResource: function(b) {
    "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
    for (var c = 0,
    d = b.length; c < d; c++) {
      var e = b[c],
      f = e.match(/\.([^\.]*)$/)[1];
      if (f && this.codecs[f]) return e
    }
    return null
  },
  add: function(b) {
    return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
  },
  remove: function(b) {
    return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
  },
  addToQueue: function(b, c) {
    return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
      pointer: b,
      origin: c
    }), !0) : !1
  }
}; (function() {
  var b = function() {
    this.init()
  };
  b.prototype = {
    init: function() {
      var b = this || c;
      b._codecs = {};
      b._howls = [];
      b._muted = !1;
      b._volume = 1;
      b._canPlayEvent = "canplaythrough";
      b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator: null;
      b.masterGain = null;
      b.noAudio = !1;
      b.usingWebAudio = !0;
      b.autoSuspend = !0;
      b.ctx = null;
      b.mobileAutoEnable = !0;
      b._setup();
      return b
    },
    volume: function(b) {
      var d = this || c;
      b = parseFloat(b);
      d.ctx || m();
      if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
        d._volume = b;
        if (d._muted) return d;
        d.usingWebAudio && (d.masterGain.gain.value = b);
        for (var e = 0; e < d._howls.length; e++) if (!d._howls[e]._webAudio) for (var f = d._howls[e]._getSoundIds(), g = 0; g < f.length; g++) {
          var n = d._howls[e]._soundById(f[g]);
          n && n._node && (n._node.volume = n._volume * b)
        }
        return d
      }
      return d._volume
    },
    mute: function(b) {
      var d = this || c;
      d.ctx || m();
      d._muted = b;
      d.usingWebAudio && (d.masterGain.gain.value = b ? 0 : d._volume);
      for (var e = 0; e < d._howls.length; e++) if (!d._howls[e]._webAudio) for (var f = d._howls[e]._getSoundIds(), g = 0; g < f.length; g++) {
        var n = d._howls[e]._soundById(f[g]);
        n && n._node && (n._node.muted = b ? !0 : n._muted)
      }
      return d
    },
    unload: function() {
      for (var b = this || c,
      d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
      b.usingWebAudio && (b.ctx && "undefined" !== typeof b.ctx.close) && (b.ctx.close(), b.ctx = null, m());
      return b
    },
    codecs: function(b) {
      return (this || c)._codecs[b.replace(/^x-/, "")]
    },
    _setup: function() {
      var b = this || c;
      b.state = b.ctx ? b.ctx.state || "running": "running";
      b._autoSuspend();
      if (!b.usingWebAudio) if ("undefined" !== typeof Audio) try {
        var d = new Audio;
        "undefined" === typeof d.oncanplaythrough && (b._canPlayEvent = "canplay")
      } catch(e) {
        b.noAudio = !0
      } else b.noAudio = !0;
      try {
        d = new Audio,
        d.muted && (b.noAudio = !0)
      } catch(f) {}
      b.noAudio || b._setupCodecs();
      return b
    },
    _setupCodecs: function() {
      var b = this || c,
      d = null;
      try {
        d = "undefined" !== typeof Audio ? new Audio: null
      } catch(e) {
        return b
      }
      if (!d || "function" !== typeof d.canPlayType) return b;
      var f = d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
      g = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
      g = g && 33 > parseInt(g[0].split("/")[1], 10);
      b._codecs = {
        mp3: !(g || !f && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
        mpeg: !!f,
        opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
        aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
        caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
        m4a: !!(d.canPlayType("audio/x-m4a;") || d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
        webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
        dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
        flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
      };
      return b
    },
    _enableMobileAudio: function() {
      var b = this || c,
      d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(b._navigator && b._navigator.userAgent),
      e = !!("ontouchend" in window || b._navigator && 0 < b._navigator.maxTouchPoints || b._navigator && 0 < b._navigator.msMaxTouchPoints);
      if (!b._mobileEnabled && b.ctx && (d || e)) {
        b._mobileEnabled = !1; ! b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
        b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
        var f = function() {
          var c = b.ctx.createBufferSource();
          c.buffer = b._scratchBuffer;
          c.connect(b.ctx.destination);
          "undefined" === typeof c.start ? c.noteOn(0) : c.start(0);
          c.onended = function() {
            c.disconnect(0);
            b._mobileEnabled = !0;
            b.mobileAutoEnable = !1;
            document.removeEventListener("touchend", f, !0)
          }
        };
        document.addEventListener("touchend", f, !0);
        return b
      }
    },
    _autoSuspend: function() {
      var b = this;
      if (b.autoSuspend && b.ctx && "undefined" !== typeof b.ctx.suspend && c.usingWebAudio) {
        for (var d = 0; d < b._howls.length; d++) if (b._howls[d]._webAudio) for (var e = 0; e < b._howls[d]._sounds.length; e++) if (!b._howls[d]._sounds[e]._paused) return b;
        b._suspendTimer && clearTimeout(b._suspendTimer);
        b._suspendTimer = setTimeout(function() {
          b.autoSuspend && (b._suspendTimer = null, b.state = "suspending", b.ctx.suspend().then(function() {
            b.state = "suspended";
            b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume())
          }))
        },
        3E4);
        return b
      }
    },
    _autoResume: function() {
      var b = this;
      if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.state = "resuming", b.ctx.resume().then(function() {
        b.state = "running";
        for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
      }), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0),
      b
    }
  };
  var c = new b,
  d = function(b) { ! b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(b)
  };
  d.prototype = {
    init: function(b) {
      var d = this;
      c.ctx || m();
      d._autoplay = b.autoplay || !1;
      d._format = "string" !== typeof b.format ? b.format: [b.format];
      d._html5 = b.html5 || !1;
      d._muted = b.mute || !1;
      d._loop = b.loop || !1;
      d._pool = b.pool || 5;
      d._preload = "boolean" === typeof b.preload ? b.preload: !0;
      d._rate = b.rate || 1;
      d._sprite = b.sprite || {};
      d._src = "string" !== typeof b.src ? b.src: [b.src];
      d._volume = void 0 !== b.volume ? b.volume: 1;
      d._duration = 0;
      d._state = "unloaded";
      d._sounds = [];
      d._endTimers = {};
      d._queue = [];
      d._onend = b.onend ? [{
        fn: b.onend
      }] : [];
      d._onfade = b.onfade ? [{
        fn: b.onfade
      }] : [];
      d._onload = b.onload ? [{
        fn: b.onload
      }] : [];
      d._onloaderror = b.onloaderror ? [{
        fn: b.onloaderror
      }] : [];
      d._onpause = b.onpause ? [{
        fn: b.onpause
      }] : [];
      d._onplay = b.onplay ? [{
        fn: b.onplay
      }] : [];
      d._onstop = b.onstop ? [{
        fn: b.onstop
      }] : [];
      d._onmute = b.onmute ? [{
        fn: b.onmute
      }] : [];
      d._onvolume = b.onvolume ? [{
        fn: b.onvolume
      }] : [];
      d._onrate = b.onrate ? [{
        fn: b.onrate
      }] : [];
      d._onseek = b.onseek ? [{
        fn: b.onseek
      }] : [];
      d._onresume = [];
      d._webAudio = c.usingWebAudio && !d._html5;
      "undefined" !== typeof c.ctx && (c.ctx && c.mobileAutoEnable) && c._enableMobileAudio();
      c._howls.push(d);
      d._autoplay && d._queue.push({
        event: "play",
        action: function() {
          d.play()
        }
      });
      d._preload && d.load();
      return d
    },
    load: function() {
      var b = null;
      if (c.noAudio) this._emit("loaderror", null, "No audio support.");
      else {
        "string" === typeof this._src && (this._src = [this._src]);
        for (var d = 0; d < this._src.length; d++) {
          var m, r;
          if (this._format && this._format[d]) m = this._format[d];
          else {
            r = this._src[d];
            if ("string" !== typeof r) {
              this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
              continue
            } (m = /^data:audio\/([^;,]+);/i.exec(r)) || (m = /\.([^.]+)$/.exec(r.split("?", 1)[0]));
            m && (m = m[1].toLowerCase())
          }
          if (c.codecs(m)) {
            b = this._src[d];
            break
          }
        }
        if (b) {
          this._src = b;
          this._state = "loading";
          "https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
          new e(this);
          if (this._webAudio) {
            var s = this,
            u = s._src;
            if (f[u]) s._duration = f[u].duration,
            n(s);
            else if (/^data:[^;]+;base64,/.test(u)) {
              b = atob(u.split(",")[1]);
              d = new Uint8Array(b.length);
              for (m = 0; m < b.length; ++m) d[m] = b.charCodeAt(m);
              g(d.buffer, s)
            } else {
              var t = new XMLHttpRequest;
              t.open("GET", u, !0);
              t.responseType = "arraybuffer";
              t.onload = function() {
                var b = (t.status + "")[0];
                "0" !== b && "2" !== b && "3" !== b ? s._emit("loaderror", null, "Failed loading audio file with status: " + t.status + ".") : g(t.response, s)
              };
              t.onerror = function() {
                s._webAudio && (s._html5 = !0, s._webAudio = !1, s._sounds = [], delete f[u], s.load())
              };
              try {
                t.send()
              } catch(y) {
                t.onerror()
              }
            }
          }
          return this
        }
        this._emit("loaderror", null, "No codec support for selected audio sources.")
      }
    },
    play: function(b, d) {
      var e = this,
      f = null;
      if ("number" === typeof b) f = b,
      b = null;
      else {
        if ("string" === typeof b && "loaded" === e._state && !e._sprite[b]) return null;
        if ("undefined" === typeof b) {
          b = "__default";
          for (var g = 0,
          m = 0; m < e._sounds.length; m++) e._sounds[m]._paused && !e._sounds[m]._ended && (g++, f = e._sounds[m]._id);
          1 === g ? b = null: f = null
        }
      }
      var n = f ? e._soundById(f) : e._inactiveSound();
      if (!n) return null;
      f && !b && (b = n._sprite || "__default");
      if ("loaded" !== e._state && !e._sprite[b]) return e._queue.push({
        event: "play",
        action: function() {
          e.play(e._soundById(n._id) ? n._id: void 0)
        }
      }),
      n._id;
      if (f && !n._paused) return d || setTimeout(function() {
        e._emit("play", n._id)
      },
      0),
      n._id;
      e._webAudio && c._autoResume();
      var y = Math.max(0, 0 < n._seek ? n._seek: e._sprite[b][0] / 1E3),
      F = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) / 1E3 - y),
      E = 1E3 * F / Math.abs(n._rate);
      n._paused = !1;
      n._ended = !1;
      n._sprite = b;
      n._seek = y;
      n._start = e._sprite[b][0] / 1E3;
      n._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
      n._loop = !(!n._loop && !e._sprite[b][2]);
      var J = n._node;
      if (e._webAudio) f = function() {
        e._refreshBuffer(n);
        J.gain.setValueAtTime(n._muted || e._muted ? 0 : n._volume, c.ctx.currentTime);
        n._playStart = c.ctx.currentTime;
        "undefined" === typeof J.bufferSource.start ? n._loop ? J.bufferSource.noteGrainOn(0, y, 86400) : J.bufferSource.noteGrainOn(0, y, F) : n._loop ? J.bufferSource.start(0, y, 86400) : J.bufferSource.start(0, y, F);
        Infinity !== E && (e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), E));
        d || setTimeout(function() {
          e._emit("play", n._id)
        },
        0)
      },
      g = "running" === c.state,
      "loaded" === e._state && g ? f() : (e.once(g ? "load": "resume", f, g ? n._id: null), e._clearTimer(n._id));
      else {
        var T = function() {
          J.currentTime = y;
          J.muted = n._muted || e._muted || c._muted || J.muted;
          J.volume = n._volume * c.volume();
          J.playbackRate = n._rate;
          setTimeout(function() {
            J.play();
            Infinity !== E && (e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), E));
            d || e._emit("play", n._id)
          },
          0)
        },
        f = "loaded" === e._state && (window && window.ejecta || !J.readyState && c._navigator.isCocoonJS);
        if (4 === J.readyState || f) T();
        else {
          var la = function() {
            T();
            J.removeEventListener(c._canPlayEvent, la, !1)
          };
          J.addEventListener(c._canPlayEvent, la, !1);
          e._clearTimer(n._id)
        }
      }
      return n._id
    },
    pause: function(b, c) {
      var d = this;
      if ("loaded" !== d._state) return d._queue.push({
        event: "pause",
        action: function() {
          d.pause(b)
        }
      }),
      d;
      for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
        d._clearTimer(e[f]);
        var g = d._soundById(e[f]);
        if (g && !g._paused && (g._seek = d.seek(e[f]), g._rateSeek = 0, g._paused = !0, d._stopFade(e[f]), g._node)) if (d._webAudio) {
          if (!g._node.bufferSource) break;
          "undefined" === typeof g._node.bufferSource.stop ? g._node.bufferSource.noteOff(0) : g._node.bufferSource.stop(0);
          d._cleanBuffer(g._node)
        } else(!isNaN(g._node.duration) || Infinity === g._node.duration) && g._node.pause();
        c || d._emit("pause", g ? g._id: null)
      }
      return d
    },
    stop: function(b, c) {
      var d = this;
      if ("loaded" !== d._state) return d._queue.push({
        event: "stop",
        action: function() {
          d.stop(b)
        }
      }),
      d;
      for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
        d._clearTimer(e[f]);
        var g = d._soundById(e[f]);
        if (g && (g._seek = g._start || 0, g._rateSeek = 0, g._paused = !0, g._ended = !0, d._stopFade(e[f]), g._node)) if (d._webAudio) {
          if (!g._node.bufferSource) {
            c || d._emit("stop", g._id);
            break
          }
          "undefined" === typeof g._node.bufferSource.stop ? g._node.bufferSource.noteOff(0) : g._node.bufferSource.stop(0);
          d._cleanBuffer(g._node)
        } else if (!isNaN(g._node.duration) || Infinity === g._node.duration) g._node.currentTime = g._start || 0,
        g._node.pause();
        g && !c && d._emit("stop", g._id)
      }
      return d
    },
    mute: function(b, d) {
      var e = this;
      if ("loaded" !== e._state) return e._queue.push({
        event: "mute",
        action: function() {
          e.mute(b, d)
        }
      }),
      e;
      if ("undefined" === typeof d) if ("boolean" === typeof b) e._muted = b;
      else return e._muted;
      for (var f = e._getSoundIds(d), g = 0; g < f.length; g++) {
        var m = e._soundById(f[g]);
        m && (m._muted = b, e._webAudio && m._node ? m._node.gain.setValueAtTime(b ? 0 : m._volume, c.ctx.currentTime) : m._node && (m._node.muted = c._muted ? !0 : b), e._emit("mute", m._id))
      }
      return e
    },
    volume: function() {
      var b = this,
      d = arguments,
      e, f;
      if (0 === d.length) return b._volume;
      1 === d.length || 2 === d.length && "undefined" === typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
      var g;
      if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
        if ("loaded" !== b._state) return b._queue.push({
          event: "volume",
          action: function() {
            b.volume.apply(b, d)
          }
        }),
        b;
        "undefined" === typeof f && (b._volume = e);
        f = b._getSoundIds(f);
        for (var m = 0; m < f.length; m++) if (g = b._soundById(f[m])) g._volume = e,
        d[2] || b._stopFade(f[m]),
        b._webAudio && g._node && !g._muted ? g._node.gain.setValueAtTime(e, c.ctx.currentTime) : g._node && !g._muted && (g._node.volume = e * c.volume()),
        b._emit("volume", g._id)
      } else return (g = f ? b._soundById(f) : b._sounds[0]) ? g._volume: 0;
      return b
    },
    fade: function(b, d, e, f) {
      var g = this,
      m = Math.abs(b - d),
      n = b > d ? "out": "in",
      y = m / 0.01,
      m = 0 < y ? e / y: e;
      4 > m && (y = Math.ceil(y / (4 / m)), m = 4);
      if ("loaded" !== g._state) return g._queue.push({
        event: "fade",
        action: function() {
          g.fade(b, d, e, f)
        }
      }),
      g;
      g.volume(b, f);
      for (var F = g._getSoundIds(f), E = 0; E < F.length; E++) {
        var J = g._soundById(F[E]);
        if (J) {
          f || g._stopFade(F[E]);
          if (g._webAudio && !J._muted) {
            var T = c.ctx.currentTime,
            la = T + e / 1E3;
            J._volume = b;
            J._node.gain.setValueAtTime(b, T);
            J._node.gain.linearRampToValueAtTime(d, la)
          }
          var O = b;
          J._interval = setInterval(function(b, c) {
            0 < y && (O += "in" === n ? 0.01 : -0.01);
            O = Math.max(0, O);
            O = Math.min(1, O);
            O = Math.round(100 * O) / 100;
            g._webAudio ? ("undefined" === typeof f && (g._volume = O), c._volume = O) : g.volume(O, b, !0);
            O === d && (clearInterval(c._interval), c._interval = null, g.volume(O, b), g._emit("fade", b))
          }.bind(g, F[E], J), m)
        }
      }
      return g
    },
    _stopFade: function(b) {
      var d = this._soundById(b);
      d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this._emit("fade", b));
      return this
    },
    loop: function() {
      var b = arguments,
      c, d;
      if (0 === b.length) return this._loop;
      if (1 === b.length) if ("boolean" === typeof b[0]) this._loop = c = b[0];
      else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop: !1;
      else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
      d = this._getSoundIds(d);
      for (var e = 0; e < d.length; e++) if (b = this._soundById(d[e])) if (b._loop = c, this._webAudio && (b._node && b._node.bufferSource) && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0,
      b._node.bufferSource.loopEnd = b._stop;
      return this
    },
    rate: function() {
      var b = this,
      d = arguments,
      e, f;
      0 === d.length ? f = b._sounds[0]._id: 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
      var g;
      if ("number" === typeof e) {
        if ("loaded" !== b._state) return b._queue.push({
          event: "rate",
          action: function() {
            b.rate.apply(b, d)
          }
        }),
        b;
        "undefined" === typeof f && (b._rate = e);
        f = b._getSoundIds(f);
        for (var m = 0; m < f.length; m++) if (g = b._soundById(f[m])) {
          g._rateSeek = b.seek(f[m]);
          g._playStart = b._webAudio ? c.ctx.currentTime: g._playStart;
          g._rate = e;
          b._webAudio && g._node && g._node.bufferSource ? g._node.bufferSource.playbackRate.value = e: g._node && (g._node.playbackRate = e);
          var n = b.seek(f[m]),
          n = 1E3 * ((b._sprite[g._sprite][0] + b._sprite[g._sprite][1]) / 1E3 - n) / Math.abs(g._rate);
          if (b._endTimers[f[m]] || !g._paused) b._clearTimer(f[m]),
          b._endTimers[f[m]] = setTimeout(b._ended.bind(b, g), n);
          b._emit("rate", g._id)
        }
      } else return (g = b._soundById(f)) ? g._rate: b._rate;
      return b
    },
    seek: function() {
      var b = this,
      d = arguments,
      e, f;
      0 === d.length ? f = b._sounds[0]._id: 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : (f = b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
      if ("undefined" === typeof f) return b;
      if ("loaded" !== b._state) return b._queue.push({
        event: "seek",
        action: function() {
          b.seek.apply(b, d)
        }
      }),
      b;
      var g = b._soundById(f);
      if (g) if ("number" === typeof e && 0 <= e) {
        var m = b.playing(f);
        m && b.pause(f, !0);
        g._seek = e;
        g._ended = !1;
        b._clearTimer(f);
        m && b.play(f, !0); ! b._webAudio && g._node && (g._node.currentTime = e);
        b._emit("seek", f)
      } else return b._webAudio ? (e = b.playing(f) ? c.ctx.currentTime - g._playStart: 0, g._seek + ((g._rateSeek ? g._rateSeek - g._seek: 0) + e * Math.abs(g._rate))) : g._node.currentTime;
      return b
    },
    playing: function(b) {
      if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused: !1;
      for (b = 0; b < this._sounds.length; b++) if (!this._sounds[b]._paused) return ! 0;
      return ! 1
    },
    duration: function(b) {
      var c = this._duration; (b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1E3);
      return c
    },
    state: function() {
      return this._state
    },
    unload: function() {
      for (var b = this._sounds,
      d = 0; d < b.length; d++) {
        b[d]._paused || (this.stop(b[d]._id), this._emit("end", b[d]._id));
        this._webAudio || (b[d]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1));
        delete b[d]._node;
        this._clearTimer(b[d]._id);
        var e = c._howls.indexOf(this);
        0 <= e && c._howls.splice(e, 1)
      }
      b = !0;
      for (d = 0; d < c._howls.length; d++) if (c._howls[d]._src === this._src) {
        b = !1;
        break
      }
      f && b && delete f[this._src];
      c.noAudio = !1;
      this._state = "unloaded";
      this._sounds = [];
      return null
    },
    on: function(b, c, d, e) {
      b = this["_on" + b];
      "function" === typeof c && b.push(e ? {
        id: d,
        fn: c,
        once: e
      }: {
        id: d,
        fn: c
      });
      return this
    },
    off: function(b, c, d) {
      var e = this["_on" + b],
      f = 0;
      if (c) for (f = 0; f < e.length; f++) {
        if (c === e[f].fn && d === e[f].id) {
          e.splice(f, 1);
          break
        }
      } else if (b) this["_on" + b] = [];
      else {
        b = Object.keys(this);
        for (f = 0; f < b.length; f++) 0 === b[f].indexOf("_on") && Array.isArray(this[b[f]]) && (this[b[f]] = [])
      }
      return this
    },
    once: function(b, c, d) {
      this.on(b, c, d, 1);
      return this
    },
    _emit: function(b, c, d) {
      for (var e = this["_on" + b], f = e.length - 1; 0 <= f; f--) if (!e[f].id || e[f].id === c || "load" === b) setTimeout(function(b) {
        b.call(this, c, d)
      }.bind(this, e[f].fn), 0),
      e[f].once && this.off(b, e[f].fn, e[f].id);
      return this
    },
    _loadQueue: function() {
      var b = this;
      if (0 < b._queue.length) {
        var c = b._queue[0];
        b.once(c.event,
        function() {
          b._queue.shift();
          b._loadQueue()
        });
        c.action()
      }
      return b
    },
    _ended: function(b) {
      var d = b._sprite,
      d = !(!b._loop && !this._sprite[d][2]);
      this._emit("end", b._id); ! this._webAudio && d && this.stop(b._id, !0).play(b._id);
      if (this._webAudio && d) {
        this._emit("play", b._id);
        b._seek = b._start || 0;
        b._rateSeek = 0;
        b._playStart = c.ctx.currentTime;
        var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
        this._endTimers[b._id] = setTimeout(this._ended.bind(this, b), e)
      }
      this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start || 0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend()); ! this._webAudio && !d && this.stop(b._id);
      return this
    },
    _clearTimer: function(b) {
      this._endTimers[b] && (clearTimeout(this._endTimers[b]), delete this._endTimers[b]);
      return this
    },
    _soundById: function(b) {
      for (var c = 0; c < this._sounds.length; c++) if (b === this._sounds[c]._id) return this._sounds[c];
      return null
    },
    _inactiveSound: function() {
      this._drain();
      for (var b = 0; b < this._sounds.length; b++) if (this._sounds[b]._ended) return this._sounds[b].reset();
      return new e(this)
    },
    _drain: function() {
      var b = this._pool,
      c = 0,
      d = 0;
      if (! (this._sounds.length < b)) {
        for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
        for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--)
      }
    },
    _getSoundIds: function(b) {
      if ("undefined" === typeof b) {
        b = [];
        for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
        return b
      }
      return [b]
    },
    _refreshBuffer: function(b) {
      b._node.bufferSource = c.ctx.createBufferSource();
      b._node.bufferSource.buffer = f[this._src];
      b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
      if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0,
      b._node.bufferSource.loopEnd = b._stop;
      b._node.bufferSource.playbackRate.value = b._rate;
      return this
    },
    _cleanBuffer: function(b) {
      if (this._scratchBuffer) {
        b.bufferSource.onended = null;
        b.bufferSource.disconnect(0);
        try {
          b.bufferSource.buffer = this._scratchBuffer
        } catch(c) {}
      }
      b.bufferSource = null;
      return this
    }
  };
  var e = function(b) {
    this._parent = b;
    this.init()
  };
  e.prototype = {
    init: function() {
      var b = this._parent;
      this._muted = b._muted;
      this._loop = b._loop;
      this._volume = b._volume;
      this._muted = b._muted;
      this._rate = b._rate;
      this._seek = 0;
      this._ended = this._paused = !0;
      this._sprite = "__default";
      this._id = Math.round(Date.now() * Math.random());
      b._sounds.push(this);
      this.create();
      return this
    },
    create: function() {
      var b = this._parent,
      d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
      b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent, this._loadFn, !1), this._node.src = b._src, this._node.preload = "auto", this._node.volume = d * c.volume(), this._node.load());
      return this
    },
    reset: function() {
      var b = this._parent;
      this._muted = b._muted;
      this._loop = b._loop;
      this._volume = b._volume;
      this._muted = b._muted;
      this._rate = b._rate;
      this._rateSeek = this._seek = 0;
      this._ended = this._paused = !0;
      this._sprite = "__default";
      this._id = Math.round(Date.now() * Math.random());
      return this
    },
    _errorListener: function() {
      this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code: 0);
      this._node.removeEventListener("error", this._errorListener, !1)
    },
    _loadListener: function() {
      var b = this._parent;
      b._duration = Math.ceil(10 * this._node.duration) / 10;
      0 === Object.keys(b._sprite).length && (b._sprite = {
        __default: [0, 1E3 * b._duration]
      });
      "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
      this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
    }
  };
  var f = {},
  g = function(b, d) {
    c.ctx.decodeAudioData(b,
    function(b) {
      b && 0 < d._sounds.length && (f[d._src] = b, n(d, b))
    },
    function() {
      d._emit("loaderror", null, "Decoding audio data failed.")
    })
  },
  n = function(b, c) {
    c && !b._duration && (b._duration = c.duration);
    0 === Object.keys(b._sprite).length && (b._sprite = {
      __default: [0, 1E3 * b._duration]
    });
    "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
  },
  m = function() {
    try {
      "undefined" !== typeof AudioContext ? c.ctx = new AudioContext: "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext: c.usingWebAudio = !1
    } catch(b) {
      c.usingWebAudio = !1
    }
    var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
    e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
    e = e ? parseInt(e[1], 10) : null;
    if (d && (e && 9 > e) && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !d || c._navigator && !c._navigator.standalone && !d)) c.usingWebAudio = !1;
    c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.value = 1, c.masterGain.connect(c.ctx.destination));
    c._setup()
  };
  "function" === typeof define && define.amd && define([],
  function() {
    return {
      Howler: c,
      Howl: d
    }
  });
  "undefined" !== typeof exports && (exports.Howler = c, exports.Howl = d);
  "undefined" !== typeof window ? (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = e) : "undefined" !== typeof global && (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = e)
})(); (function() {
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
  HowlerGlobal.prototype.stereo = function(b) {
    if (!this.ctx || !this.ctx.listener) return this;
    for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
    return this
  };
  HowlerGlobal.prototype.pos = function(b, c, d) {
    if (!this.ctx || !this.ctx.listener) return this;
    c = "number" !== typeof c ? this._pos[1] : c;
    d = "number" !== typeof d ? this._pos[2] : d;
    if ("number" === typeof b) this._pos = [b, c, d],
    this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
    else return this._pos;
    return this
  };
  HowlerGlobal.prototype.orientation = function(b, c, d, e, l, p) {
    if (!this.ctx || !this.ctx.listener) return this;
    var q = this._orientation;
    c = "number" !== typeof c ? q[1] : c;
    d = "number" !== typeof d ? q[2] : d;
    e = "number" !== typeof e ? q[3] : e;
    l = "number" !== typeof l ? q[4] : l;
    p = "number" !== typeof p ? q[5] : p;
    if ("number" === typeof b) this._orientation = [b, c, d, e, l, p],
    this.ctx.listener.setOrientation(b, c, d, e, l, p);
    else return q;
    return this
  };
  var b = Howl.prototype.init;
  Howl.prototype.init = function(c) {
    this._orientation = c.orientation || [1, 0, 0];
    this._stereo = c.stereo || null;
    this._pos = c.pos || null;
    this._pannerAttr = {
      coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle: 360,
      coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle: 360,
      coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain: 0,
      distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel: "inverse",
      maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance: 1E4,
      panningModel: "undefined" !== typeof c.panningModel ? c.panningModel: "HRTF",
      refDistance: "undefined" !== typeof c.refDistance ? c.refDistance: 1,
      rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor: 1
    };
    this._onstereo = c.onstereo ? [{
      fn: c.onstereo
    }] : [];
    this._onpos = c.onpos ? [{
      fn: c.onpos
    }] : [];
    this._onorientation = c.onorientation ? [{
      fn: c.onorientation
    }] : [];
    return b.call(this, c)
  };
  Howl.prototype.stereo = function(b, c) {
    var d = this;
    if (!d._webAudio) return d;
    if ("loaded" !== d._state) return d._queue.push({
      event: "stereo",
      action: function() {
        d.stereo(b, c)
      }
    }),
    d;
    var m = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial": "stereo";
    if ("undefined" === typeof c) if ("number" === typeof b) d._stereo = b,
    d._pos = [b, 0, 0];
    else return d._stereo;
    for (var l = d._getSoundIds(c), p = 0; p < l.length; p++) {
      var q = d._soundById(l[p]);
      if (q) if ("number" === typeof b) q._stereo = b,
      q._pos = [b, 0, 0],
      q._node && (q._pannerAttr.panningModel = "equalpower", (!q._panner || !q._panner.pan) && e(q, m), "spatial" === m ? q._panner.setPosition(b, 0, 0) : q._panner.pan.value = b),
      d._emit("stereo", q._id);
      else return q._stereo
    }
    return d
  };
  Howl.prototype.pos = function(b, c, d, m) {
    var l = this;
    if (!l._webAudio) return l;
    if ("loaded" !== l._state) return l._queue.push({
      event: "pos",
      action: function() {
        l.pos(b, c, d, m)
      }
    }),
    l;
    c = "number" !== typeof c ? 0 : c;
    d = "number" !== typeof d ? -0.5 : d;
    if ("undefined" === typeof m) if ("number" === typeof b) l._pos = [b, c, d];
    else return l._pos;
    for (var p = l._getSoundIds(m), q = 0; q < p.length; q++) {
      var r = l._soundById(p[q]);
      if (r) if ("number" === typeof b) r._pos = [b, c, d],
      r._node && ((!r._panner || r._panner.pan) && e(r, "spatial"), r._panner.setPosition(b, c, d)),
      l._emit("pos", r._id);
      else return r._pos
    }
    return l
  };
  Howl.prototype.orientation = function(b, c, d, m) {
    var l = this;
    if (!l._webAudio) return l;
    if ("loaded" !== l._state) return l._queue.push({
      event: "orientation",
      action: function() {
        l.orientation(b, c, d, m)
      }
    }),
    l;
    c = "number" !== typeof c ? l._orientation[1] : c;
    d = "number" !== typeof d ? l._orientation[2] : d;
    if ("undefined" === typeof m) if ("number" === typeof b) l._orientation = [b, c, d];
    else return l._orientation;
    for (var p = l._getSoundIds(m), q = 0; q < p.length; q++) {
      var r = l._soundById(p[q]);
      if (r) if ("number" === typeof b) r._orientation = [b, c, d],
      r._node && (r._panner || (r._pos || (r._pos = l._pos || [0, 0, -0.5]), e(r, "spatial")), r._panner.setOrientation(b, c, d)),
      l._emit("orientation", r._id);
      else return r._orientation
    }
    return l
  };
  Howl.prototype.pannerAttr = function() {
    var b = arguments,
    c, d;
    if (!this._webAudio) return this;
    if (0 === b.length) return this._pannerAttr;
    if (1 === b.length) if ("object" === typeof b[0]) c = b[0],
    "undefined" === typeof d && (this._pannerAttr = {
      coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle: this._coneInnerAngle,
      coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle: this._coneOuterAngle,
      coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain: this._coneOuterGain,
      distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel: this._distanceModel,
      maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance: this._maxDistance,
      panningModel: "undefined" !== typeof c.panningModel ? c.panningModel: this._panningModel,
      refDistance: "undefined" !== typeof c.refDistance ? c.refDistance: this._refDistance,
      rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor: this._rolloffFactor
    });
    else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr: this._pannerAttr;
    else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
    d = this._getSoundIds(d);
    for (var m = 0; m < d.length; m++) if (b = this._soundById(d[m])) {
      var l = b._pannerAttr,
      l = {
        coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle: l.coneInnerAngle,
        coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle: l.coneOuterAngle,
        coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain: l.coneOuterGain,
        distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel: l.distanceModel,
        maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance: l.maxDistance,
        panningModel: "undefined" !== typeof c.panningModel ? c.panningModel: l.panningModel,
        refDistance: "undefined" !== typeof c.refDistance ? c.refDistance: l.refDistance,
        rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor: l.rolloffFactor
      },
      p = b._panner;
      p ? (p.coneInnerAngle = l.coneInnerAngle, p.coneOuterAngle = l.coneOuterAngle, p.coneOuterGain = l.coneOuterGain, p.distanceModel = l.distanceModel, p.maxDistance = l.maxDistance, p.panningModel = l.panningModel, p.refDistance = l.refDistance, p.rolloffFactor = l.rolloffFactor) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), e(b, "spatial"))
    }
    return this
  };
  var c = Sound.prototype.init;
  Sound.prototype.init = function() {
    var b = this._parent;
    this._orientation = b._orientation;
    this._stereo = b._stereo;
    this._pos = b._pos;
    this._pannerAttr = b._pannerAttr;
    c.call(this);
    this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
  };
  var d = Sound.prototype.reset;
  Sound.prototype.reset = function() {
    var b = this._parent;
    this._orientation = b._orientation;
    this._pos = b._pos;
    this._pannerAttr = b._pannerAttr;
    return d.call(this)
  };
  var e = function(b, c) {
    "spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain, b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.panningModel = b._pannerAttr.panningModel, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]), b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner = Howler.ctx.createStereoPanner(), b._panner.pan.value = b._stereo);
    b._panner.connect(b._node);
    b._paused || b._parent.pause(b._id, !0).play(b._id)
  }
})(); (function(b, c, d, e, f, g, n) {
  b.GoogleAnalyticsObject = f;
  b[f] = b[f] ||
  function() { (b[f].q = b[f].q || []).push(arguments)
  };
  b[f].l = 1 * new Date;
  g = c.createElement(d);
  n = c.getElementsByTagName(d)[0];
  g.async = 1;
  g.src = e;
  n.parentNode.insertBefore(g, n)
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-102691241-1", {
  name: "marketjs"
});
ga("marketjs.send", "pageview"); (function(b) {
  Number.prototype.map = function(b, c, d, e) {
    return d + (e - d) * ((this - b) / (c - b))
  };
  Number.prototype.limit = function(b, c) {
    return Math.min(c, Math.max(b, this))
  };
  Number.prototype.round = function(b) {
    b = Math.pow(10, b || 0);
    return Math.round(this * b) / b
  };
  Number.prototype.floor = function() {
    return Math.floor(this)
  };
  Number.prototype.ceil = function() {
    return Math.ceil(this)
  };
  Number.prototype.toInt = function() {
    return this | 0
  };
  Number.prototype.toRad = function() {
    return this / 180 * Math.PI
  };
  Number.prototype.toDeg = function() {
    return 180 * this / Math.PI
  };
  Array.prototype.erase = function(b) {
    for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
    return this
  };
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)]
  };
  Function.prototype.bind = Function.prototype.bind ||
  function(b) {
    if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var c = Array.prototype.slice.call(arguments, 1),
    d = this,
    e = function() {},
    f = function() {
      return d.apply(this instanceof e && b ? this: b, c.concat(Array.prototype.slice.call(arguments)))
    };
    e.prototype = this.prototype;
    f.prototype = new e;
    return f
  };
  b.ig = {
    game: null,
    debug: null,
    version: "1.23",
    global: b,
    modules: {},
    resources: [],
    ready: !1,
    baked: !1,
    nocache: "",
    ua: {},
    prefix: b.ImpactPrefix || "",
    lib: "lib/",
    _current: null,
    _loadQueue: [],
    _waitForOnload: 0,
    $: function(b) {
      return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
    },
    $new: function(b) {
      return document.createElement(b)
    },
    copy: function(b) {
      if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
      if (b instanceof Array) for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
      else for (d in c = {},
      b) c[d] = ig.copy(b[d]);
      return c
    },
    merge: function(b, c) {
      for (var d in c) {
        var e = c[d];
        if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
        else {
          if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
          ig.merge(b[d], e)
        }
      }
      return b
    },
    ksort: function(b) {
      if (!b || "object" != typeof b) return [];
      var c = [],
      d = [],
      e;
      for (e in b) c.push(e);
      c.sort();
      for (e = 0; e < c.length; e++) d.push(b[c[e]]);
      return d
    },
    setVendorAttribute: function(b, c, d) {
      var e = c.charAt(0).toUpperCase() + c.substr(1);
      b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d: b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
    },
    getVendorAttribute: function(b, c) {
      var d = c.charAt(0).toUpperCase() + c.substr(1);
      return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
    },
    normalizeVendorAttribute: function(b, c) {
      var d = ig.getVendorAttribute(b, c); ! b[c] && d && (b[c] = d)
    },
    getImagePixels: function(b, c, d, e, f) {
      var g = ig.$new("canvas");
      g.width = b.width;
      g.height = b.height;
      var n = g.getContext("2d");
      ig.System.SCALE.CRISP(g, n);
      var t = ig.getVendorAttribute(n, "backingStorePixelRatio") || 1;
      ig.normalizeVendorAttribute(n, "getImageDataHD");
      var y = b.width / t,
      F = b.height / t;
      g.width = Math.ceil(y);
      g.height = Math.ceil(F);
      n.drawImage(b, 0, 0, y, F);
      return 1 === t ? n.getImageData(c, d, e, f) : n.getImageDataHD(c, d, e, f)
    },
    module: function(b) {
      if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
      if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
      ig._current = {
        name: b,
        requires: [],
        loaded: !1,
        body: null
      };
      ig.modules[b] = ig._current;
      ig._loadQueue.push(ig._current);
      return ig
    },
    requires: function() {
      ig._current.requires = Array.prototype.slice.call(arguments);
      return ig
    },
    defines: function(b) {
      ig._current.body = b;
      ig._current = null;
      ig._initDOMReady()
    },
    addResource: function(b) {
      ig.resources.push(b)
    },
    setNocache: function(b) {
      ig.nocache = b ? "?" + Date.now() : ""
    },
    log: function() {},
    assert: function() {},
    show: function() {},
    mark: function() {},
    _loadScript: function(b, c) {
      ig.modules[b] = {
        name: b,
        requires: [],
        loaded: !1,
        body: null
      };
      ig._waitForOnload++;
      var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
      e = ig.$new("script");
      e.type = "text/javascript";
      e.src = d;
      e.onload = function() {
        ig._waitForOnload--;
        ig._execModules()
      };
      e.onerror = function() {
        throw "Failed to load module " + b + " at " + d + " required from " + c;
      };
      ig.$("head")[0].appendChild(e)
    },
    _execModules: function() {
      for (var b = !1,
      c = 0; c < ig._loadQueue.length; c++) {
        for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
          var g = d.requires[f];
          ig.modules[g] ? ig.modules[g].loaded || (e = !1) : (e = !1, ig._loadScript(g, d.name))
        }
        e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
      }
      if (b) ig._execModules();
      else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
        b = [];
        for (c = 0; c < ig._loadQueue.length; c++) {
          e = [];
          g = ig._loadQueue[c].requires;
          for (f = 0; f < g.length; f++) d = ig.modules[g[f]],
          (!d || !d.loaded) && e.push(g[f]);
          b.push(ig._loadQueue[c].name + " (requires: " + e.join(", ") + ")")
        }
        throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
      }
    },
    _DOMReady: function() {
      if (!ig.modules["dom.ready"].loaded) {
        if (!document.body) return setTimeout(ig._DOMReady, 13);
        ig.modules["dom.ready"].loaded = !0;
        ig._waitForOnload--;
        ig._execModules()
      }
      return 0
    },
    _boot: function() {
      document.location.href.match(/\?nocache/) && ig.setNocache(!0);
      ig.ua.pixelRatio = b.devicePixelRatio || 1;
      ig.ua.viewport = {
        width: b.innerWidth,
        height: b.innerHeight
      };
      ig.ua.screen = {
        width: b.screen.availWidth * ig.ua.pixelRatio,
        height: b.screen.availHeight * ig.ua.pixelRatio
      };
      ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
      ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
      ig.ua.iPad = /iPad/i.test(navigator.userAgent);
      ig.ua.android = /android/i.test(navigator.userAgent);
      ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
      ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
      ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
      ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
      ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
      ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
      ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
      ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
      ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
      ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
      ig.ua.touchDevice = "ontouchstart" in b || b.navigator.msMaxTouchPoints;
      ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
    },
    _initDOMReady: function() {
      ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
        requires: [],
        loaded: !1,
        body: null
      },
      ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
    }
  };
  ig.normalizeVendorAttribute(b, "requestAnimationFrame");
  if (b.requestAnimationFrame) {
    var c = 1,
    d = {};
    b.ig.setAnimation = function(e, f) {
      var g = c++;
      d[g] = !0;
      var n = function() {
        d[g] && (b.requestAnimationFrame(n, f), e())
      };
      b.requestAnimationFrame(n, f);
      return g
    };
    b.ig.clearAnimation = function(b) {
      delete d[b]
    }
  } else b.ig.setAnimation = function(c) {
    return b.setInterval(c, 1E3 / 60)
  },
  b.ig.clearAnimation = function(c) {
    b.clearInterval(c)
  };
  var e = !1,
  f = /xyz/.test(function() {
    xyz
  }) ? /\bparent\b/: /.*/,
  g = 0;
  b.ig.Class = function() {};
  var n = function(b) {
    var c = this.prototype,
    d = {},
    e;
    for (e in b)"function" == typeof b[e] && "function" == typeof c[e] && f.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
      return function() {
        var e = this.parent;
        this.parent = d[b];
        var f = c.apply(this, arguments);
        this.parent = e;
        return f
      }
    } (e, b[e])) : c[e] = b[e]
  };
  b.ig.Class.extend = function(c) {
    function d() {
      if (!e) {
        if (this.staticInstantiate) {
          var b = this.staticInstantiate.apply(this, arguments);
          if (b) return b
        }
        for (var c in this)"object" == typeof this[c] && (this[c] = ig.copy(this[c]));
        this.init && this.init.apply(this, arguments)
      }
      return this
    }
    var p = this.prototype;
    e = !0;
    var q = new this;
    e = !1;
    for (var r in c) q[r] = "function" == typeof c[r] && "function" == typeof p[r] && f.test(c[r]) ?
    function(b, c) {
      return function() {
        var d = this.parent;
        this.parent = p[b];
        var e = c.apply(this, arguments);
        this.parent = d;
        return e
      }
    } (r, c[r]) : c[r];
    d.prototype = q;
    d.prototype.constructor = d;
    d.extend = b.ig.Class.extend;
    d.inject = n;
    d.classId = q.classId = ++g;
    return d
  };
  b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
  ig.Image = ig.Class.extend({
    data: null,
    width: 0,
    height: 0,
    loaded: !1,
    failed: !1,
    loadCallback: null,
    path: "",
    staticInstantiate: function(b) {
      return ig.Image.cache[b] || null
    },
    init: function(b) {
      this.path = b;
      this.load()
    },
    load: function(b) {
      this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
    },
    reload: function() {
      this.loaded = !1;
      this.data = new Image;
      this.data.onload = this.onload.bind(this);
      this.data.src = this.path + "?" + Date.now()
    },
    onload: function() {
      this.width = this.data.width;
      this.height = this.data.height;
      this.loaded = !0;
      1 != ig.system.scale && this.resize(ig.system.scale);
      this.loadCallback && this.loadCallback(this.path, !0)
    },
    onerror: function() {
      this.failed = !0;
      this.loadCallback && this.loadCallback(this.path, !1)
    },
    resize: function(b) {
      var c = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
      d = this.width * b,
      e = this.height * b,
      f = ig.$new("canvas");
      f.width = d;
      f.height = e;
      for (var g = f.getContext("2d"), n = g.getImageData(0, 0, d, e), m = 0; m < e; m++) for (var l = 0; l < d; l++) {
        var p = 4 * (Math.floor(m / b) * this.width + Math.floor(l / b)),
        q = 4 * (m * d + l);
        n.data[q] = c.data[p];
        n.data[q + 1] = c.data[p + 1];
        n.data[q + 2] = c.data[p + 2];
        n.data[q + 3] = c.data[p + 3]
      }
      g.putImageData(n, 0, 0);
      this.data = f
    },
    draw: function(b, c, d, e, f, g) {
      if (this.loaded) {
        var n = ig.system.scale;
        f = (f ? f: this.width) * n;
        g = (g ? g: this.height) * n;
        ig.system.context.drawImage(this.data, d ? d * n: 0, e ? e * n: 0, f, g, ig.system.getDrawPos(b), ig.system.getDrawPos(c), f, g);
        ig.Image.drawCount++
      }
    },
    drawTile: function(b, c, d, e, f, g, n) {
      f = f ? f: e;
      if (this.loaded && !(e > this.width || f > this.height)) {
        var m = ig.system.scale,
        l = Math.floor(e * m),
        p = Math.floor(f * m),
        q = g ? -1 : 1,
        r = n ? -1 : 1;
        if (g || n) ig.system.context.save(),
        ig.system.context.scale(q, r);
        ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * m, Math.floor(d * e / this.width) * f * m, l, p, ig.system.getDrawPos(b) * q - (g ? l: 0), ig.system.getDrawPos(c) * r - (n ? p: 0), l, p); (g || n) && ig.system.context.restore();
        ig.Image.drawCount++
      }
    }
  });
  ig.Image.drawCount = 0;
  ig.Image.cache = {};
  ig.Image.reloadCache = function() {
    for (var b in ig.Image.cache) ig.Image.cache[b].reload()
  }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
  ig.Font = ig.Image.extend({
    widthMap: [],
    indices: [],
    firstChar: 32,
    alpha: 1,
    letterSpacing: 1,
    lineSpacing: 0,
    onload: function(b) {
      this._loadMetrics(this.data);
      this.parent(b)
    },
    widthForString: function(b) {
      if ( - 1 !== b.indexOf("\n")) {
        b = b.split("\n");
        for (var c = 0,
        d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
        return c
      }
      return this._widthForLine(b)
    },
    _widthForLine: function(b) {
      for (var c = 0,
      d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] + this.letterSpacing;
      return c
    },
    heightForString: function(b) {
      return b.split("\n").length * (this.height + this.lineSpacing)
    },
    draw: function(b, c, d, e) {
      "string" != typeof b && (b = b.toString());
      if ( - 1 !== b.indexOf("\n")) {
        b = b.split("\n");
        for (var f = this.height + this.lineSpacing,
        g = 0; g < b.length; g++) this.draw(b[g], c, d + g * f, e)
      } else {
        if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) g = this._widthForLine(b),
        c -= e == ig.Font.ALIGN.CENTER ? g / 2 : g;
        1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
        for (g = 0; g < b.length; g++) e = b.charCodeAt(g),
        c += this._drawChar(e - this.firstChar, c, d);
        1 !== this.alpha && (ig.system.context.globalAlpha = 1);
        ig.Image.drawCount += b.length
      }
    },
    _drawChar: function(b, c, d) {
      if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
      var e = ig.system.scale,
      f = this.widthMap[b] * e,
      g = (this.height - 2) * e;
      ig.system.context.drawImage(this.data, this.indices[b] * e, 0, f, g, ig.system.getDrawPos(c), ig.system.getDrawPos(d), f, g);
      return this.widthMap[b] + this.letterSpacing
    },
    _loadMetrics: function(b) {
      this.height = b.height - 1;
      this.widthMap = [];
      this.indices = [];
      for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, f = 0; f < b.width; f++) {
        var g = 4 * f + 3;
        127 < c.data[g] ? e++:128 > c.data[g] && e && (this.widthMap.push(e), this.indices.push(f - e), d++, e = 0)
      }
      this.widthMap.push(e);
      this.indices.push(f - e)
    }
  });
  ig.Font.ALIGN = {
    LEFT: 0,
    RIGHT: 1,
    CENTER: 2
  }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
  ig.SoundManager = ig.Class.extend({
    clips: {},
    volume: 1,
    format: null,
    init: function() {
      if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
      else {
        for (var b = new Audio,
        c = 0; c < ig.Sound.use.length; c++) {
          var d = ig.Sound.use[c];
          if (b.canPlayType(d.mime)) {
            this.format = d;
            break
          }
        }
        this.format || (ig.Sound.enabled = !1)
      }
    },
    load: function(b, c, d) {
      var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
      if (this.clips[b]) {
        if (c && this.clips[b].length < ig.Sound.channels) for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
          var f = new Audio(e);
          f.load();
          this.clips[b].push(f)
        }
        return this.clips[b][0]
      }
      var g = new Audio(e);
      d && (g.addEventListener("canplaythrough",
      function m(c) {
        g.removeEventListener("canplaythrough", m, !1);
        d(b, !0, c)
      },
      !1), g.addEventListener("error",
      function(c) {
        d(b, !1, c)
      },
      !1));
      g.preload = "auto";
      g.load();
      this.clips[b] = [g];
      if (c) for (c = 1; c < ig.Sound.channels; c++) f = new Audio(e),
      f.load(),
      this.clips[b].push(f);
      return g
    },
    get: function(b) {
      b = this.clips[b];
      for (var c = 0,
      d; d = b[c++];) if (d.paused || d.ended) return d.ended && (d.currentTime = 0),
      d;
      b[0].pause();
      b[0].currentTime = 0;
      return b[0]
    }
  });
  ig.Music = ig.Class.extend({
    tracks: [],
    namedTracks: {},
    currentTrack: null,
    currentIndex: 0,
    random: !1,
    _volume: 1,
    _loop: !1,
    _fadeInterval: 0,
    _fadeTimer: null,
    _endedCallbackBound: null,
    init: function() {
      this._endedCallbackBound = this._endedCallback.bind(this);
      Object.defineProperty ? (Object.defineProperty(this, "volume", {
        get: this.getVolume.bind(this),
        set: this.setVolume.bind(this)
      }), Object.defineProperty(this, "loop", {
        get: this.getLooping.bind(this),
        set: this.setLooping.bind(this)
      })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
    },
    add: function(b, c) {
      if (ig.Sound.enabled) {
        var d = ig.soundManager.load(b instanceof ig.Sound ? b.path: b, !1);
        d.loop = this._loop;
        d.volume = this._volume;
        d.addEventListener("ended", this._endedCallbackBound, !1);
        this.tracks.push(d);
        c && (this.namedTracks[c] = d);
        this.currentTrack || (this.currentTrack = d)
      }
    },
    next: function() {
      this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
    },
    pause: function() {
      this.currentTrack && this.currentTrack.pause()
    },
    stop: function() {
      this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
    },
    play: function(b) {
      if (b && this.namedTracks[b]) b = this.namedTracks[b],
      b != this.currentTrack && (this.stop(), this.currentTrack = b);
      else if (!this.currentTrack) return;
      this.currentTrack.play()
    },
    getLooping: function() {
      return this._loop
    },
    setLooping: function(b) {
      this._loop = b;
      for (var c in this.tracks) this.tracks[c].loop = b
    },
    getVolume: function() {
      return this._volume
    },
    setVolume: function(b) {
      this._volume = b.limit(0, 1);
      for (var c in this.tracks) this.tracks[c].volume = this._volume
    },
    fadeOut: function(b) {
      this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
    },
    _fadeStep: function() {
      var b = this.fadeTimer.delta().map( - this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
      0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
    },
    _endedCallback: function() {
      this._loop ? this.play() : this.next()
    }
  });
  ig.Sound = ig.Class.extend({
    path: "",
    volume: 1,
    currentClip: null,
    multiChannel: !0,
    init: function(b, c) {
      this.path = b;
      this.multiChannel = !1 !== c;
      this.load()
    },
    load: function(b) {
      ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
    },
    play: function() {
      ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
    },
    stop: function() {
      this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
    }
  });
  ig.Sound.FORMAT = {
    MP3: {
      ext: "mp3",
      mime: "audio/mpeg"
    },
    M4A: {
      ext: "m4a",
      mime: "audio/mp4; codecs=mp4a"
    },
    OGG: {
      ext: "ogg",
      mime: "audio/ogg; codecs=vorbis"
    },
    WEBM: {
      ext: "webm",
      mime: "audio/webm; codecs=vorbis"
    },
    CAF: {
      ext: "caf",
      mime: "audio/x-caf"
    }
  };
  ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
  ig.Sound.channels = 4;
  ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
  ig.Loader = ig.Class.extend({
    resources: [],
    gameClass: null,
    status: 0,
    done: !1,
    _unloaded: [],
    _drawStatus: 0,
    _intervalId: 0,
    _loadCallbackBound: null,
    init: function(b, c) {
      this.gameClass = b;
      this.resources = c;
      this._loadCallbackBound = this._loadCallback.bind(this);
      for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
    },
    load: function() {
      ig.system.clear("#000");
      if (this.resources.length) {
        for (var b = 0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
        this._intervalId = setInterval(this.draw.bind(this), 16)
      } else this.end()
    },
    loadResource: function(b) {
      b.load(this._loadCallbackBound)
    },
    end: function() {
      this.done || (this.done = !0, clearInterval(this._intervalId))
    },
    draw: function() {},
    _loadCallback: function(b, c) {
      if (c) this._unloaded.erase(b);
      else throw "Failed to load resource: " + b;
      this.status = 1 - this._unloaded.length / this.resources.length;
      0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
    }
  })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
  ig.Timer = ig.Class.extend({
    target: 0,
    base: 0,
    last: 0,
    pausedAt: 0,
    init: function(b) {
      this.last = this.base = ig.Timer.time;
      this.target = b || 0
    },
    set: function(b) {
      this.target = b || 0;
      this.base = ig.Timer.time;
      this.pausedAt = 0
    },
    reset: function() {
      this.base = ig.Timer.time;
      this.pausedAt = 0
    },
    tick: function() {
      var b = ig.Timer.time - this.last;
      this.last = ig.Timer.time;
      return this.pausedAt ? 0 : b
    },
    delta: function() {
      return (this.pausedAt || ig.Timer.time) - this.base - this.target
    },
    pause: function() {
      this.pausedAt || (this.pausedAt = ig.Timer.time)
    },
    unpause: function() {
      this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
    }
  });
  ig.Timer._last = 0;
  ig.Timer.time = Number.MIN_VALUE;
  ig.Timer.timeScale = 1;
  ig.Timer.maxStep = 0.05;
  ig.Timer.step = function() {
    var b = Date.now();
    ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
    ig.Timer._last = b
  }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
  ig.System = ig.Class.extend({
    fps: 30,
    width: 320,
    height: 240,
    realWidth: 320,
    realHeight: 240,
    scale: 1,
    tick: 0,
    animationId: 0,
    newGameClass: null,
    running: !1,
    delegate: null,
    clock: null,
    canvas: null,
    context: null,
    init: function(b, c, d, e, f) {
      this.fps = c;
      this.clock = new ig.Timer;
      this.canvas = ig.$(b);
      this.resize(d, e, f);
      this.context = this.canvas.getContext("2d");
      this.getDrawPos = ig.System.drawMode;
      1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
      ig.System.scaleMode(this.canvas, this.context)
    },
    resize: function(b, c, d) {
      this.width = b;
      this.height = c;
      this.scale = d || this.scale;
      this.realWidth = this.width * this.scale;
      this.realHeight = this.height * this.scale;
      this.canvas.width = this.realWidth;
      this.canvas.height = this.realHeight
    },
    setGame: function(b) {
      this.running ? this.newGameClass = b: this.setGameNow(b)
    },
    setGameNow: function(b) {
      ig.game = new b;
      ig.system.setDelegate(ig.game)
    },
    setDelegate: function(b) {
      if ("function" == typeof b.run) this.delegate = b,
      this.startRunLoop();
      else throw "System.setDelegate: No run() function in object";
    },
    stopRunLoop: function() {
      ig.clearAnimation(this.animationId);
      this.running = !1
    },
    startRunLoop: function() {
      this.stopRunLoop();
      this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
      this.running = !0
    },
    clear: function(b) {
      this.context.fillStyle = b;
      this.context.fillRect(0, 0, this.realWidth, this.realHeight)
    },
    run: function() {
      ig.Timer.step();
      this.tick = this.clock.tick();
      this.delegate.run();
      ig.input.clearPressed();
      this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
    },
    getDrawPos: null
  });
  ig.System.DRAW = {
    AUTHENTIC: function(b) {
      return Math.round(b) * this.scale
    },
    SMOOTH: function(b) {
      return Math.round(b * this.scale)
    },
    SUBPIXEL: function(b) {
      return b * this.scale
    }
  };
  ig.System.drawMode = ig.System.DRAW.SMOOTH;
  ig.System.SCALE = {
    CRISP: function(b, c) {
      ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
      b.style.imageRendering = "-moz-crisp-edges";
      b.style.imageRendering = "-o-crisp-edges";
      b.style.imageRendering = "-webkit-optimize-contrast";
      b.style.imageRendering = "crisp-edges";
      b.style.msInterpolationMode = "nearest-neighbor"
    },
    SMOOTH: function(b, c) {
      ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
      b.style.imageRendering = "";
      b.style.msInterpolationMode = ""
    }
  };
  ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
  ig.KEY = {
    MOUSE1: -1,
    MOUSE2: -3,
    MWHEEL_UP: -4,
    MWHEEL_DOWN: -5,
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    PAUSE: 19,
    CAPS: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    INSERT: 45,
    DELETE: 46,
    _0: 48,
    _1: 49,
    _2: 50,
    _3: 51,
    _4: 52,
    _5: 53,
    _6: 54,
    _7: 55,
    _8: 56,
    _9: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_3: 99,
    NUMPAD_4: 100,
    NUMPAD_5: 101,
    NUMPAD_6: 102,
    NUMPAD_7: 103,
    NUMPAD_8: 104,
    NUMPAD_9: 105,
    MULTIPLY: 106,
    ADD: 107,
    SUBSTRACT: 109,
    DECIMAL: 110,
    DIVIDE: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PLUS: 187,
    COMMA: 188,
    MINUS: 189,
    PERIOD: 190
  };
  ig.Input = ig.Class.extend({
    bindings: {},
    actions: {},
    presses: {},
    locks: {},
    delayedKeyup: {},
    isUsingMouse: !1,
    isUsingKeyboard: !1,
    isUsingAccelerometer: !1,
    mouse: {
      x: 0,
      y: 0
    },
    accel: {
      x: 0,
      y: 0,
      z: 0
    },
    initMouse: function() {
      if (!this.isUsingMouse) {
        this.isUsingMouse = !0;
        var b = this.mousewheel.bind(this);
        ig.system.canvas.addEventListener("mousewheel", b, !1);
        ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
        ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
        ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
        ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
        ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
        ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
      }
    },
    initKeyboard: function() {
      this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
    },
    initAccelerometer: function() {
      this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
    },
    mousewheel: function(b) {
      var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta: -1 * b.detail) ? ig.KEY.MWHEEL_UP: ig.KEY.MWHEEL_DOWN];
      c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
    },
    mousemove: function(b) {
      var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
      ig.ua.mobile && (c = ig.system.realWidth);
      var c = ig.system.scale * (c / ig.system.realWidth),
      d = {
        left: 0,
        top: 0
      };
      ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
      b = b.touches ? b.touches[0] : b;
      this.mouse.x = (b.clientX - d.left) / c;
      this.mouse.y = (b.clientY - d.top) / c
    },
    contextmenu: function(b) {
      this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
    },
    keydown: function(b) {
      var c = b.target.tagName;
      if (! ("INPUT" == c || "TEXTAREA" == c)) if (c = "keydown" == b.type ? b.keyCode: 2 == b.button ? ig.KEY.MOUSE2: ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0,
      this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0),
      b.stopPropagation(),
      b.preventDefault()
    },
    keyup: function(b) {
      var c = b.target.tagName;
      if (! ("INPUT" == c || "TEXTAREA" == c)) if (c = this.bindings["keyup" == b.type ? b.keyCode: 2 == b.button ? ig.KEY.MOUSE2: ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0,
      b.stopPropagation(),
      b.preventDefault()
    },
    devicemotion: function(b) {
      this.accel = b.accelerationIncludingGravity
    },
    bind: function(b, c) {
      0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
      this.bindings[b] = c
    },
    bindTouch: function(b, c) {
      var d = ig.$(b),
      e = this;
      d.addEventListener("touchstart",
      function(b) {
        e.touchStart(b, c)
      },
      !1);
      d.addEventListener("touchend",
      function(b) {
        e.touchEnd(b, c)
      },
      !1);
      d.addEventListener("MSPointerDown",
      function(b) {
        e.touchStart(b, c)
      },
      !1);
      d.addEventListener("MSPointerUp",
      function(b) {
        e.touchEnd(b, c)
      },
      !1)
    },
    unbind: function(b) {
      this.delayedKeyup[this.bindings[b]] = !0;
      this.bindings[b] = null
    },
    unbindAll: function() {
      this.bindings = {};
      this.actions = {};
      this.presses = {};
      this.locks = {};
      this.delayedKeyup = {}
    },
    state: function(b) {
      return this.actions[b]
    },
    pressed: function(b) {
      return this.presses[b]
    },
    released: function(b) {
      return !! this.delayedKeyup[b]
    },
    clearPressed: function() {
      for (var b in this.delayedKeyup) this.actions[b] = !1,
      this.locks[b] = !1;
      this.delayedKeyup = {};
      this.presses = {}
    },
    touchStart: function(b, c) {
      this.actions[c] = !0;
      this.presses[c] = !0;
      b.stopPropagation();
      b.preventDefault();
      return ! 1
    },
    touchEnd: function(b, c) {
      this.delayedKeyup[c] = !0;
      b.stopPropagation();
      b.preventDefault();
      return ! 1
    }
  })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
  ig.main = function(b, c, d, e, f, g, n) {
    ig.system = new ig.System(b, d, e, f, g || 1);
    ig.input = new ig.Input;
    ig.soundManager = new ig.SoundManager;
    ig.music = new ig.Music;
    ig.ready = !0; (new(n || ig.Loader)(c, ig.resources)).load()
  }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
  ig.AnimationSheet = ig.Class.extend({
    width: 8,
    height: 8,
    image: null,
    init: function(b, c, d) {
      this.width = c;
      this.height = d;
      this.image = new ig.Image(b)
    }
  });
  ig.Animation = ig.Class.extend({
    sheet: null,
    timer: null,
    sequence: [],
    flip: {
      x: !1,
      y: !1
    },
    pivot: {
      x: 0,
      y: 0
    },
    frame: 0,
    tile: 0,
    loopCount: 0,
    alpha: 1,
    angle: 0,
    init: function(b, c, d, e) {
      this.sheet = b;
      this.pivot = {
        x: b.width / 2,
        y: b.height / 2
      };
      this.timer = new ig.Timer;
      this.frameTime = c;
      this.sequence = d;
      this.stop = !!e;
      this.tile = this.sequence[0]
    },
    rewind: function() {
      this.timer.set();
      this.frame = this.loopCount = 0;
      this.tile = this.sequence[0];
      return this
    },
    gotoFrame: function(b) {
      this.timer.set(this.frameTime * -b - 1E-4);
      this.update()
    },
    gotoRandomFrame: function() {
      this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
    },
    update: function() {
      var b = Math.floor(this.timer.delta() / this.frameTime);
      this.loopCount = Math.floor(b / this.sequence.length);
      this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
      this.tile = this.sequence[this.frame]
    },
    draw: function(b, c) {
      var d = Math.max(this.sheet.width, this.sheet.height);
      b > ig.system.width || (c > ig.system.height || 0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile( - this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
    }
  })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
  ig.Entity = ig.Class.extend({
    id: 0,
    settings: {},
    size: {
      x: 16,
      y: 16
    },
    offset: {
      x: 0,
      y: 0
    },
    pos: {
      x: 0,
      y: 0
    },
    last: {
      x: 0,
      y: 0
    },
    vel: {
      x: 0,
      y: 0
    },
    accel: {
      x: 0,
      y: 0
    },
    friction: {
      x: 0,
      y: 0
    },
    maxVel: {
      x: 100,
      y: 100
    },
    zIndex: 0,
    gravityFactor: 1,
    standing: !1,
    bounciness: 0,
    minBounceVelocity: 40,
    anims: {},
    animSheet: null,
    currentAnim: null,
    health: 10,
    type: 0,
    checkAgainst: 0,
    collides: 0,
    _killed: !1,
    slopeStanding: {
      min: (44).toRad(),
      max: (136).toRad()
    },
    init: function(b, c, d) {
      this.id = ++ig.Entity._lastId;
      this.pos.x = this.last.x = b;
      this.pos.y = this.last.y = c;
      ig.merge(this, d)
    },
    reset: function(b, c, d) {
      var e = this.constructor.prototype;
      this.pos.x = b;
      this.pos.y = c;
      this.last.x = b;
      this.last.y = c;
      this.vel.x = e.vel.x;
      this.vel.y = e.vel.y;
      this.accel.x = e.accel.x;
      this.accel.y = e.accel.y;
      this.health = e.health;
      this._killed = e._killed;
      this.standing = e.standing;
      this.type = e.type;
      this.checkAgainst = e.checkAgainst;
      this.collides = e.collides;
      ig.merge(this, d)
    },
    addAnim: function(b, c, d, e) {
      if (!this.animSheet) throw "No animSheet to add the animation " + b + " to.";
      c = new ig.Animation(this.animSheet, c, d, e);
      this.anims[b] = c;
      this.currentAnim || (this.currentAnim = c);
      return c
    },
    update: function() {
      this.last.x = this.pos.x;
      this.last.y = this.pos.y;
      this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
      this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
      this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
      var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
      this.handleMovementTrace(b);
      this.currentAnim && this.currentAnim.update()
    },
    getNewVelocity: function(b, c, d, e) {
      return c ? (b + c * ig.system.tick).limit( - e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c: 0 > b + c ? b + c: 0) : b.limit( - e, e)
    },
    handleMovementTrace: function(b) {
      this.standing = !1;
      b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness: (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
      b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness: 0);
      if (b.collision.slope) {
        var c = b.collision.slope;
        if (0 < this.bounciness) {
          var d = this.vel.x * c.nx + this.vel.y * c.ny;
          this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
          this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
        } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y),
        this.vel.x = c.x * d,
        this.vel.y = c.y * d,
        c = Math.atan2(c.x, c.y),
        c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
      }
      this.pos = b.pos
    },
    draw: function() {
      this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
    },
    kill: function() {
      ig.game.removeEntity(this)
    },
    receiveDamage: function(b) {
      this.health -= b;
      0 >= this.health && this.kill()
    },
    touches: function(b) {
      return ! (this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
    },
    distanceTo: function(b) {
      var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
      b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
      return Math.sqrt(c * c + b * b)
    },
    angleTo: function(b) {
      return Math.atan2(b.pos.y + b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
    },
    check: function() {},
    collideWith: function() {},
    ready: function() {},
    erase: function() {}
  });
  ig.Entity._lastId = 0;
  ig.Entity.COLLIDES = {
    NEVER: 0,
    LITE: 1,
    PASSIVE: 2,
    ACTIVE: 4,
    FIXED: 8
  };
  ig.Entity.TYPE = {
    NONE: 0,
    A: 1,
    B: 2,
    BOTH: 3
  };
  ig.Entity.checkPair = function(b, c) {
    b.checkAgainst & c.type && b.check(c);
    c.checkAgainst & b.type && c.check(b);
    b.collides && (c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE) && ig.Entity.solveCollision(b, c)
  };
  ig.Entity.solveCollision = function(b, c) {
    var d = null;
    if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
    else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
    b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
  };
  ig.Entity.seperateOnXAxis = function(b, c, d) {
    var e = b.pos.x + b.size.x - c.pos.x;
    d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c: b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e: e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
  };
  ig.Entity.seperateOnYAxis = function(b, c, d) {
    var e = b.pos.y + b.size.y - c.pos.y;
    if (d) {
      c = b === d ? c: b;
      d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
      var f = 0;
      d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, f = c.vel.x * ig.system.tick);
      b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f, d == b ? -e: e, d.size.x, d.size.y);
      d.pos.y = b.pos.y;
      d.pos.x = b.pos.x
    } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness: (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, f = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, f, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
  }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
  ig.Map = ig.Class.extend({
    tilesize: 8,
    width: 1,
    height: 1,
    data: [[]],
    name: null,
    init: function(b, c) {
      this.tilesize = b;
      this.data = c;
      this.height = c.length;
      this.width = c[0].length;
      this.pxWidth = this.width * this.tilesize;
      this.pxHeight = this.height * this.tilesize
    },
    getTile: function(b, c) {
      var d = Math.floor(b / this.tilesize),
      e = Math.floor(c / this.tilesize);
      return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
    },
    setTile: function(b, c, d) {
      b = Math.floor(b / this.tilesize);
      c = Math.floor(c / this.tilesize);
      0 <= b && b < this.width && (0 <= c && c < this.height) && (this.data[c][b] = d)
    }
  })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
  ig.CollisionMap = ig.Map.extend({
    lastSlope: 1,
    tiledef: null,
    init: function(b, c, f) {
      this.parent(b, c);
      this.tiledef = f || ig.CollisionMap.defaultTileDef;
      for (var g in this.tiledef) g | 0 > this.lastSlope && (this.lastSlope = g | 0)
    },
    trace: function(b, c, f, g, n, m) {
      var l = {
        collision: {
          x: !1,
          y: !1,
          slope: !1
        },
        pos: {
          x: b,
          y: c
        },
        tile: {
          x: 0,
          y: 0
        }
      },
      p = Math.ceil(Math.max(Math.abs(f), Math.abs(g)) / this.tilesize);
      if (1 < p) for (var q = f / p,
      r = g / p,
      s = 0; s < p && (q || r) && !(this._traceStep(l, b, c, q, r, n, m, f, g, s), b = l.pos.x, c = l.pos.y, l.collision.x && (f = q = 0), l.collision.y && (g = r = 0), l.collision.slope); s++);
      else this._traceStep(l, b, c, f, g, n, m, f, g, 0);
      return l
    },
    _traceStep: function(b, c, f, g, n, m, l, p, q, r) {
      b.pos.x += g;
      b.pos.y += n;
      var s = 0;
      if (g) {
        var u = 0 < g ? m: 0,
        t = 0 > g ? this.tilesize: 0,
        s = Math.max(Math.floor(f / this.tilesize), 0),
        y = Math.min(Math.ceil((f + l) / this.tilesize), this.height);
        g = Math.floor((b.pos.x + u) / this.tilesize);
        var F = Math.floor((c + u) / this.tilesize);
        if (0 < r || g == F || 0 > F || F >= this.width) F = -1;
        if (0 <= g && g < this.width) for (var E = s; E < y && !( - 1 != F && (s = this.data[E][F], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, p, q, m, l, F, E))); E++) if (s = this.data[E][g], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, f, p, q, m, l, g, E)) {
          if (1 < s && s <= this.lastSlope && b.collision.slope) break;
          b.collision.x = !0;
          b.tile.x = s;
          c = b.pos.x = g * this.tilesize - u + t;
          p = 0;
          break
        }
      }
      if (n) {
        u = 0 < n ? l: 0;
        n = 0 > n ? this.tilesize: 0;
        s = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
        t = Math.min(Math.ceil((b.pos.x + m) / this.tilesize), this.width);
        E = Math.floor((b.pos.y + u) / this.tilesize);
        y = Math.floor((f + u) / this.tilesize);
        if (0 < r || E == y || 0 > y || y >= this.height) y = -1;
        if (0 <= E && E < this.height) for (g = s; g < t && !( - 1 != y && (s = this.data[y][g], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, p, q, m, l, g, y))); g++) if (s = this.data[E][g], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, f, p, q, m, l, g, E)) {
          if (1 < s && s <= this.lastSlope && b.collision.slope) break;
          b.collision.y = !0;
          b.tile.y = s;
          b.pos.y = E * this.tilesize - u + n;
          break
        }
      }
    },
    _checkTileDef: function(b, c, f, g, n, m, l, p, q, r) {
      var s = this.tiledef[c];
      if (!s) return ! 1;
      c = (s[2] - s[0]) * this.tilesize;
      var u = (s[3] - s[1]) * this.tilesize,
      t = s[4];
      l = f + n + (0 > u ? l: 0) - (q + s[0]) * this.tilesize;
      p = g + m + (0 < c ? p: 0) - (r + s[1]) * this.tilesize;
      if (0 < c * p - u * l) {
        if (0 > n * -u + m * c) return t;
        q = Math.sqrt(c * c + u * u);
        r = u / q;
        q = -c / q;
        var y = l * r + p * q,
        s = r * y,
        y = q * y;
        if (s * s + y * y >= n * n + m * m) return t || 0.5 > c * (p - m) - u * (l - n);
        b.pos.x = f + n - s;
        b.pos.y = g + m - y;
        b.collision.slope = {
          x: c,
          y: u,
          nx: r,
          ny: q
        };
        return ! 0
      }
      return ! 1
    }
  });
  var b = 1 / 3,
  c = 2 / 3;
  ig.CollisionMap.defaultTileDef = {
    5 : [0, 1, 1, c, !0],
    6 : [0, c, 1, b, !0],
    7 : [0, b, 1, 0, !0],
    3 : [0, 1, 1, 0.5, !0],
    4 : [0, 0.5, 1, 0, !0],
    2 : [0, 1, 1, 0, !0],
    10 : [0.5, 1, 1, 0, !0],
    21 : [0, 1, 0.5, 0, !0],
    32 : [c, 1, 1, 0, !0],
    43 : [b, 1, c, 0, !0],
    54 : [0, 1, b, 0, !0],
    27 : [0, 0, 1, b, !0],
    28 : [0, b, 1, c, !0],
    29 : [0, c, 1, 1, !0],
    25 : [0, 0, 1, 0.5, !0],
    26 : [0, 0.5, 1, 1, !0],
    24 : [0, 0, 1, 1, !0],
    11 : [0, 0, 0.5, 1, !0],
    22 : [0.5, 0, 1, 1, !0],
    33 : [0, 0, b, 1, !0],
    44 : [b, 0, c, 1, !0],
    55 : [c, 0, 1, 1, !0],
    16 : [1, b, 0, 0, !0],
    17 : [1, c, 0, b, !0],
    18 : [1, 1, 0, c, !0],
    14 : [1, 0.5, 0, 0, !0],
    15 : [1, 1, 0, 0.5, !0],
    13 : [1, 1, 0, 0, !0],
    8 : [0.5, 1, 0, 0, !0],
    19 : [1, 1, 0.5, 0, !0],
    30 : [b, 1, 0, 0, !0],
    41 : [c, 1, b, 0, !0],
    52 : [1, 1, c, 0, !0],
    38 : [1, c, 0, 1, !0],
    39 : [1, b, 0, c, !0],
    40 : [1, 0, 0, b, !0],
    36 : [1, 0.5, 0, 1, !0],
    37 : [1, 0, 0, 0.5, !0],
    35 : [1, 0, 0, 1, !0],
    9 : [1, 0, 0.5, 1, !0],
    20 : [0.5, 0, 0, 1, !0],
    31 : [1, 0, c, 1, !0],
    42 : [c, 0, b, 1, !0],
    53 : [b, 0, 0, 1, !0],
    12 : [0, 0, 1, 0, !1],
    23 : [1, 1, 0, 1, !1],
    34 : [1, 0, 1, 1, !1],
    45 : [0, 1, 0, 0, !1]
  };
  ig.CollisionMap.staticNoCollision = {
    trace: function(b, c, f, g) {
      return {
        collision: {
          x: !1,
          y: !1,
          slope: !1
        },
        pos: {
          x: b + f,
          y: c + g
        },
        tile: {
          x: 0,
          y: 0
        }
      }
    }
  }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
  ig.BackgroundMap = ig.Map.extend({
    tiles: null,
    scroll: {
      x: 0,
      y: 0
    },
    distance: 1,
    repeat: !1,
    tilesetName: "",
    foreground: !1,
    enabled: !0,
    preRender: !1,
    preRenderedChunks: null,
    chunkSize: 512,
    debugChunks: !1,
    anims: {},
    init: function(b, c, d) {
      this.parent(b, c);
      this.setTileset(d)
    },
    setTileset: function(b) {
      this.tilesetName = b instanceof ig.Image ? b.path: b;
      this.tiles = new ig.Image(this.tilesetName);
      this.preRenderedChunks = null
    },
    setScreenPos: function(b, c) {
      this.scroll.x = b / this.distance;
      this.scroll.y = c / this.distance
    },
    preRenderMapToChunks: function() {
      var b = this.width * this.tilesize * ig.system.scale,
      c = this.height * this.tilesize * ig.system.scale;
      this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
      var d = Math.ceil(b / this.chunkSize),
      e = Math.ceil(c / this.chunkSize);
      this.preRenderedChunks = [];
      for (var f = 0; f < e; f++) {
        this.preRenderedChunks[f] = [];
        for (var g = 0; g < d; g++) this.preRenderedChunks[f][g] = this.preRenderChunk(g, f, g == d - 1 ? b - g * this.chunkSize: this.chunkSize, f == e - 1 ? c - f * this.chunkSize: this.chunkSize)
      }
    },
    preRenderChunk: function(b, c, d, e) {
      var f = d / this.tilesize / ig.system.scale + 1,
      g = e / this.tilesize / ig.system.scale + 1,
      n = b * this.chunkSize / ig.system.scale % this.tilesize,
      m = c * this.chunkSize / ig.system.scale % this.tilesize;
      b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
      c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
      var l = ig.$new("canvas");
      l.width = d;
      l.height = e;
      l.retinaResolutionEnabled = !1;
      e = l.getContext("2d");
      ig.System.scaleMode(l, e);
      d = ig.system.context;
      ig.system.context = e;
      for (e = 0; e < f; e++) for (var p = 0; p < g; p++) if (e + b < this.width && p + c < this.height) {
        var q = this.data[p + c][e + b];
        q && this.tiles.drawTile(e * this.tilesize - n, p * this.tilesize - m, q - 1, this.tilesize)
      }
      ig.system.context = d;
      return l
    },
    draw: function() {
      this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
    },
    drawPreRendered: function() {
      this.preRenderedChunks || this.preRenderMapToChunks();
      var b = ig.system.getDrawPos(this.scroll.x),
      c = ig.system.getDrawPos(this.scroll.y);
      if (this.repeat) var d = this.width * this.tilesize * ig.system.scale,
      b = (b % d + d) % d,
      d = this.height * this.tilesize * ig.system.scale,
      c = (c % d + d) % d;
      var d = Math.max(Math.floor(b / this.chunkSize), 0),
      e = Math.max(Math.floor(c / this.chunkSize), 0),
      f = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
      g = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
      n = this.preRenderedChunks[0].length,
      m = this.preRenderedChunks.length;
      this.repeat || (f = Math.min(f, n), g = Math.min(g, m));
      for (var l = 0; e < g; e++) {
        for (var p = 0,
        q = d; q < f; q++) {
          var r = this.preRenderedChunks[e % m][q % n],
          s = -b + q * this.chunkSize - p,
          u = -c + e * this.chunkSize - l;
          ig.system.context.drawImage(r, s, u);
          ig.Image.drawCount++;
          this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(s, u, this.chunkSize, this.chunkSize));
          this.repeat && (r.width < this.chunkSize && s + r.width < ig.system.realWidth) && (p += this.chunkSize - r.width, f++)
        }
        this.repeat && (r.height < this.chunkSize && u + r.height < ig.system.realHeight) && (l += this.chunkSize - r.height, g++)
      }
    },
    drawTiled: function() {
      for (var b = 0,
      c = null,
      d = (this.scroll.x / this.tilesize).toInt(), e = (this.scroll.y / this.tilesize).toInt(), f = this.scroll.x % this.tilesize, g = this.scroll.y % this.tilesize, n = -f - this.tilesize, f = ig.system.width + this.tilesize - f, m = ig.system.height + this.tilesize - g, l = -1, g = -g - this.tilesize; g < m; l++, g += this.tilesize) {
        var p = l + e;
        if (p >= this.height || 0 > p) {
          if (!this.repeat) continue;
          p = (p % this.height + this.height) % this.height
        }
        for (var q = -1,
        r = n; r < f; q++, r += this.tilesize) {
          b = q + d;
          if (b >= this.width || 0 > b) {
            if (!this.repeat) continue;
            b = (b % this.width + this.width) % this.width
          }
          if (b = this.data[p][b])(c = this.anims[b - 1]) ? c.draw(r, g) : this.tiles.drawTile(r, g, b - 1, this.tilesize)
        }
      }
    }
  })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
  ig.Game = ig.Class.extend({
    clearColor: "#000000",
    gravity: 0,
    screen: {
      x: 0,
      y: 0
    },
    _rscreen: {
      x: 0,
      y: 0
    },
    entities: [],
    namedEntities: {},
    collisionMap: ig.CollisionMap.staticNoCollision,
    backgroundMaps: [],
    backgroundAnims: {},
    autoSort: !1,
    sortBy: null,
    cellSize: 64,
    _deferredKill: [],
    _levelToLoad: null,
    _doSortEntities: !1,
    staticInstantiate: function() {
      this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
      ig.game = this;
      return null
    },
    loadLevel: function(b) {
      this.screen = {
        x: 0,
        y: 0
      };
      this.entities = [];
      this.namedEntities = {};
      for (var c = 0; c < b.entities.length; c++) {
        var d = b.entities[c];
        this.spawnEntity(d.type, d.x, d.y, d.settings)
      }
      this.sortEntities();
      this.collisionMap = ig.CollisionMap.staticNoCollision;
      this.backgroundMaps = [];
      for (c = 0; c < b.layer.length; c++) if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
      else {
        var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
        e.anims = this.backgroundAnims[d.tilesetName] || {};
        e.repeat = d.repeat;
        e.distance = d.distance;
        e.foreground = !!d.foreground;
        e.preRender = !!d.preRender;
        e.name = d.name;
        this.backgroundMaps.push(e)
      }
      for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
    },
    loadLevelDeferred: function(b) {
      this._levelToLoad = b
    },
    getMapByName: function(b) {
      if ("collision" == b) return this.collisionMap;
      for (var c = 0; c < this.backgroundMaps.length; c++) if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
      return null
    },
    getEntityByName: function(b) {
      return this.namedEntities[b]
    },
    getEntitiesByType: function(b) {
      b = "string" === typeof b ? ig.global[b] : b;
      for (var c = [], d = 0; d < this.entities.length; d++) {
        var e = this.entities[d];
        e instanceof b && !e._killed && c.push(e)
      }
      return c
    },
    spawnEntity: function(b, c, d, e) {
      var f = "string" === typeof b ? ig.global[b] : b;
      if (!f) throw "Can't spawn entity of type " + b;
      b = new f(c, d, e || {});
      this.entities.push(b);
      b.name && (this.namedEntities[b.name] = b);
      return b
    },
    sortEntities: function() {
      this.entities.sort(this.sortBy)
    },
    sortEntitiesDeferred: function() {
      this._doSortEntities = !0
    },
    removeEntity: function(b) {
      b.name && delete this.namedEntities[b.name];
      b._killed = !0;
      b.type = ig.Entity.TYPE.NONE;
      b.checkAgainst = ig.Entity.TYPE.NONE;
      b.collides = ig.Entity.COLLIDES.NEVER;
      this._deferredKill.push(b)
    },
    run: function() {
      this.update();
      this.draw()
    },
    update: function() {
      this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
      this.updateEntities();
      this.checkEntities();
      for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(),
      this.entities.erase(this._deferredKill[b]);
      this._deferredKill = [];
      if (this._doSortEntities || this.autoSort) this.sortEntities(),
      this._doSortEntities = !1;
      for (var c in this.backgroundAnims) {
        var b = this.backgroundAnims[c],
        d;
        for (d in b) b[d].update()
      }
    },
    updateEntities: function() {
      for (var b = 0; b < this.entities.length; b++) {
        var c = this.entities[b];
        c._killed || c.update()
      }
    },
    draw: function() {
      this.clearColor && ig.system.clear(this.clearColor);
      this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
      this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
      var b;
      for (b = 0; b < this.backgroundMaps.length; b++) {
        var c = this.backgroundMaps[b];
        if (c.foreground) break;
        c.setScreenPos(this.screen.x, this.screen.y);
        c.draw()
      }
      this.drawEntities();
      for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b],
      c.setScreenPos(this.screen.x, this.screen.y),
      c.draw()
    },
    drawEntities: function() {
      for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
    },
    checkEntities: function() {
      for (var b = {},
      c = 0; c < this.entities.length; c++) {
        var d = this.entities[c];
        if (! (d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER)) for (var e = {},
        f = Math.floor(d.pos.y / this.cellSize), g = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, n = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, m = Math.floor(d.pos.x / this.cellSize); m < g; m++) for (var l = f; l < n; l++) if (b[m]) if (b[m][l]) {
          for (var p = b[m][l], q = 0; q < p.length; q++) d.touches(p[q]) && !e[p[q].id] && (e[p[q].id] = !0, ig.Entity.checkPair(d, p[q]));
          p.push(d)
        } else b[m][l] = [d];
        else b[m] = {},
        b[m][l] = [d]
      }
    }
  });
  ig.Game.SORT = {
    Z_INDEX: function(b, c) {
      return b.zIndex - c.zIndex
    },
    POS_X: function(b, c) {
      return b.pos.x + b.size.x - (c.pos.x + c.size.x)
    },
    POS_Y: function(b, c) {
      return b.pos.y + b.size.y - (c.pos.y + c.size.y)
    }
  }
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
  ig.System && (ig.System.SCALE = {
    CRISP: function(b, c) {
      c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
      b.style.imageRendering = "-moz-crisp-edges";
      b.style.imageRendering = "-o-crisp-edges";
      b.style.imageRendering = "-webkit-optimize-contrast";
      b.style.imageRendering = "crisp-edges";
      b.style.msInterpolationMode = "nearest-neighbor"
    },
    SMOOTH: function(b, c) {
      c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
      b.style.imageRendering = "";
      b.style.msInterpolationMode = ""
    }
  },
  ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
  var b = !1;
  try {
    b = window.self !== window.top,
    !1 === b && (b = 0 < window.frames.length)
  } catch(c) {
    b = !0
  }
  ig.Input.inject({
    keydown: function(c) {
      var e = c.target.tagName;
      if (! ("INPUT" == e || "TEXTAREA" == e)) if (e = "keydown" == c.type ? c.keyCode: 2 == c.button ? ig.KEY.MOUSE2: ig.KEY.MOUSE1, b && 0 > e && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), e = this.bindings[e]) this.actions[e] = !0,
      this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0),
      c.stopPropagation(),
      c.preventDefault()
    }
  })
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
  ig.DomHandler = ig.Class.extend({
    JQUERYAVAILABLE: !1,
    init: function() {
      this.JQUERYAVAILABLE = this._jqueryAvailable()
    },
    _jqueryAvailable: function() {
      return "undefined" !== typeof jQuery
    },
    addEvent: function(b, c, d, e) {
      if (this.JQUERYAVAILABLE) b.on(c, d);
      else b.addEventListener(c, d, e)
    },
    create: function(b) {
      return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
    },
    getElementByClass: function(b) {
      return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
    },
    getElementById: function(b) {
      return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null: ig.$(b)
    },
    appendChild: function(b, c) {
      this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
    },
    appendToBody: function(b) {
      this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
    },
    resize: function(b, c, d) {
      if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)),
      b.height(d.toFixed(2));
      else {
        var e = b.style.visibility;
        c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
        this.attr(b, "style", c);
        b.style.visibility = e
      }
    },
    resizeOffsetLeft: function(b, c, d, e) {
      if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)),
      b.height(d.toFixed(2)),
      b.css("left", e);
      else {
        var f = b.style.visibility;
        c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
        this.attr(b, "style", c);
        b.style.visibility = f
      }
    },
    resizeOffset: function(b, c, d, e, f) {
      if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)),
      b.height(d.toFixed(2)),
      b.css("left", e),
      b.css("top", f);
      else {
        var g = b.style.visibility;
        c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px; top: " + f.toFixed(2) + "px;";
        this.attr(b, "style", c);
        b.style.visibility = g
      }
    },
    css: function(b, c) {
      if (this.JQUERYAVAILABLE) b.css(c);
      else {
        var d = "",
        e;
        for (e in c) d += e + ":" + c[e] + ";";
        this.attr(b, "style", d)
      }
    },
    getOffsets: function(b) {
      return this.JQUERYAVAILABLE ? (b = b.offset(), {
        left: b.left,
        top: b.top
      }) : {
        left: b.offsetLeft,
        top: b.offsetTop
      }
    },
    attr: function(b, c, d) {
      if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
      this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
    },
    show: function(b) {
      this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible": b[0] && (b[0].style.visibility = "visible"))
    },
    hide: function(b) {
      this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden": b[0] && (b[0].style.visibility = "hidden"))
    },
    getQueryVariable: function(b) {
      for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
      }
    },
    forcedDeviceDetection: function() {
      var b = this.getQueryVariable("device");
      if (b) switch (b) {
      case "mobile":
        console.log("serving mobile version ...");
        ig.ua.mobile = !0;
        break;
      case "desktop":
        console.log("serving desktop version ...");
        ig.ua.mobile = !1;
        break;
      default:
        console.log("serving universal version ...")
      } else console.log("serving universal version ...")
    },
    forcedDeviceRotation: function() {
      var b = this.getQueryVariable("force-rotate");
      if (b) switch (b) {
      case "portrait":
        console.log("force rotate to portrait");
        window.orientation = 0;
        break;
      case "landscape":
        console.log("force rotate to horizontal");
        window.orientation = 90;
        break;
      default:
        alert("wrong command/type in param force-rotate. Defaulting value to portrait"),
        window.orientation = 0
      }
    }
  })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
  Vector2 = function(b, c) {
    this.x = b || 0;
    this.y = c || 0
  };
  Vector2.prototype = {
    valType: "number",
    neg: function() {
      this.x = -this.x;
      this.y = -this.y;
      return this
    },
    row: function(b) {
      typeof b === this.valType && (this.y = b);
      return this.y
    },
    col: function(b) {
      typeof b === this.valType && (this.x = b);
      return this.x
    },
    add: function(b) {
      b instanceof Vector2 ? (this.x += b.x, this.y += b.y) : (this.x += b, this.y += b);
      return this
    },
    sub: function(b) {
      b instanceof Vector2 ? (this.x -= b.x, this.y -= b.y) : (this.x -= b, this.y -= b);
      return this
    },
    mul: function(b) {
      b instanceof Vector2 ? (this.x *= b.x, this.y *= b.y) : (this.x *= b, this.y *= b);
      return this
    },
    div: function(b) {
      b instanceof Vector2 ? (0 != b.x && (this.x /= b.x), 0 != b.y && (this.y /= b.y)) : 0 != b && (this.x /= b, this.y /= b);
      return this
    },
    equals: function(b) {
      return this.x == b.x && this.y == b.y
    },
    dot: function(b) {
      return this.x * b.x + this.y * b.y
    },
    cross: function(b) {
      return this.x * b.y - this.y * b.x
    },
    length: function() {
      return Math.sqrt(this.dot(this))
    },
    norm: function() {
      return this.divide(this.length())
    },
    min: function() {
      return Math.min(this.x, this.y)
    },
    max: function() {
      return Math.max(this.x, this.y)
    },
    toAngles: function() {
      return - Math.atan2( - this.y, this.x)
    },
    angleTo: function(b) {
      return Math.acos(this.dot(b) / (this.length() * b.length()))
    },
    toArray: function(b) {
      return [this.x, this.y].slice(0, b || 2)
    },
    clone: function() {
      return new Vector2(this.x, this.y)
    },
    set: function(b, c) {
      this.x = b;
      this.y = c;
      return this
    },
    unit: function() {
      var b = this.length();
      if (0 < b) return new Vector2(this.x / b, this.y / b);
      throw "Divide by 0 error in unitVector function of vector:" + this;
    },
    turnRight: function() {
      var b = this.x;
      this.x = -this.y;
      this.y = b;
      return this
    },
    turnLeft: function() {
      var b = this.x;
      this.x = this.y;
      this.y = -b;
      return this
    },
    rotate: function(b) {
      var c = this.clone();
      this.x = c.x * Math.cos(b) - c.y * Math.sin(b);
      this.y = c.x * Math.sin(b) + c.y * Math.cos(b);
      return this
    }
  };
  Vector2.negative = function(b) {
    return new Vector2( - b.x, -b.y)
  };
  Vector2.add = function(b, c) {
    return c instanceof Vector2 ? new Vector2(b.x + c.x, b.y + c.y) : new Vector2(b.x + v, b.y + v)
  };
  Vector2.subtract = function(b, c) {
    return c instanceof Vector2 ? new Vector2(b.x - c.x, b.y - c.y) : new Vector2(b.x - v, b.y - v)
  };
  Vector2.multiply = function(b, c) {
    return c instanceof Vector2 ? new Vector2(b.x * c.x, b.y * c.y) : new Vector2(b.x * v, b.y * v)
  };
  Vector2.divide = function(b, c) {
    return c instanceof Vector2 ? new Vector2(b.x / c.x, b.y / c.y) : new Vector2(b.x / v, b.y / v)
  };
  Vector2.equals = function(b, c) {
    return b.x == c.x && b.y == c.y
  };
  Vector2.dot = function(b, c) {
    return b.x * c.x + b.y * c.y
  };
  Vector2.cross = function(b, c) {
    return b.x * c.y - b.y * c.x
  }
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
  ig.SizeHandler = ig.Class.extend({
    portraitMode: !1,
    disableStretchToFitOnMobileFlag: !1,
    enableStretchToFitOnAntiPortraitModeFlag: !0,
    enableScalingLimitsOnMobileFlag: !1,
    minScalingOnMobile: 0,
    maxScalingOnMobile: 1,
    enableStretchToFitOnDesktopFlag: !1,
    enableScalingLimitsOnDesktopFlag: !1,
    minScalingOnDesktop: 0,
    maxScalingOnDesktop: 1,
    desktop: {
      actualSize: new Vector2(window.innerWidth, window.innerHeight),
      actualResolution: new Vector2(960, 540)
    },
    mobile: {
      actualSize: new Vector2(window.innerWidth, window.innerHeight),
      actualResolution: new Vector2(960, 540)
    },
    windowSize: new Vector2(window.innerWidth, window.innerHeight),
    scaleRatioMultiplier: new Vector2(1, 1),
    sizeRatio: new Vector2(1, 1),
    scale: 1,
    domHandler: null,
    dynamicClickableEntityDivs: {},
    coreDivsToResize: ["#canvas", "#play", "#orientate"],
    adsToResize: {
      MobileAdInGamePreroll: {
        "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
        "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
      },
      MobileAdInGameEnd: {
        "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
        "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
      },
      MobileAdInGamePreroll2: {
        "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
        "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
      },
      MobileAdInGameEnd2: {
        "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
        "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
      },
      MobileAdInGamePreroll3: {
        "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
        "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
      },
      MobileAdInGameEnd3: {
        "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
        "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
      }
    },
    init: function(b) {
      this.domHandler = b;
      if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
      this.sizeCalcs();
      this.eventListenerSetup();
      this.samsungFix()
    },
    sizeCalcs: function() {
      this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
      if (ig.ua.mobile) {
        this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
        var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
        this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
        if (this.disableStretchToFitOnMobileFlag) {
          var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
          this.enableScalingLimitsOnMobileFlag && (c > this.maxScalingOnMobile && (c = this.maxScalingOnMobile), c < this.maxScalingOnMobile && (c = this.maxScalingOnMobile));
          this.mobile.actualSize.x = b.x * c;
          this.mobile.actualSize.y = b.y * c;
          this.scaleRatioMultiplier.x = c;
          this.scaleRatioMultiplier.y = c
        } else this.sizeRatio.x = this.scaleRatioMultiplier.x,
        this.sizeRatio.y = this.scaleRatioMultiplier.y,
        this.scaleRatioMultiplier.x = 1,
        this.scaleRatioMultiplier.y = 1
      } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight),
      b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y),
      this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y),
      this.enableStretchToFitOnDesktopFlag ? (this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1) : (c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.enableScalingLimitsOnDesktopFlag && (c > this.maxScalingOnDesktop && (c = this.maxScalingOnDesktop), c < this.minScalingOnDesktop && (c = this.minScalingOnDesktop)), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c, this.scaleRatioMultiplier.x = c, this.scaleRatioMultiplier.y = c)
    },
    resizeLayers: function() {
      for (var b = 0; b < this.coreDivsToResize.length; b++) {
        var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
        if (ig.ua.mobile) if (this.disableStretchToFitOnMobileFlag) {
          var d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.mobile.actualSize.x / 2),
          e = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.mobile.actualSize.y / 2);
          0 > d && (d = 0);
          0 > e && (e = 0);
          ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y), d, e);
          var f = !1;
          if (f = this.portraitMode ? window.innerHeight < window.innerWidth: window.innerHeight > window.innerWidth) if (this.enableStretchToFitOnAntiPortraitModeFlag) ig.domHandler.resizeOffset(c, Math.floor(window.innerWidth), Math.floor(window.innerHeight), 0, 0);
          else {
            var f = new Vector2(window.innerWidth / this.mobile.actualResolution.y, window.innerHeight / this.mobile.actualResolution.x),
            d = Math.min(f.x, f.y),
            f = this.mobile.actualResolution.y * d,
            g = this.mobile.actualResolution.x * d,
            d = Math.floor(ig.sizeHandler.windowSize.x / 2 - f / 2),
            e = Math.floor(ig.sizeHandler.windowSize.y / 2 - g / 2);
            0 > d && (d = 0);
            0 > e && (e = 0);
            ig.domHandler.resizeOffset(c, Math.floor(f), Math.floor(g), d, e)
          }
        } else ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y));
        else this.enableStretchToFitOnDesktopFlag ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y)) : (d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2), e = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.desktop.actualSize.y / 2), 0 > d && (d = 0), 0 > e && (e = 0), ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), d, e))
      }
      for (var n in this.adsToResize) b = ig.domHandler.getElementById("#" + n),
      c = ig.domHandler.getElementById("#" + n + "-Box"),
      f = (window.innerWidth - this.adsToResize[n]["box-width"]) / 2 + "px",
      d = (window.innerHeight - this.adsToResize[n]["box-height"]) / 2 + "px",
      b && ig.domHandler.css(b, {
        width: window.innerWidth,
        height: window.innerHeight
      }),
      c && ig.domHandler.css(c, {
        left: f,
        top: d
      });
      for (n in this.dynamicClickableEntityDivs) {
        b = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
        c = ig.domHandler.getElementById("#" + n);
        if (ig.ua.mobile) {
          console.log("adjustMobile");
          var g = this.dynamicClickableEntityDivs[n].entity_pos_x,
          e = this.dynamicClickableEntityDivs[n].entity_pos_y,
          d = this.dynamicClickableEntityDivs[n].width,
          f = this.dynamicClickableEntityDivs[n].height,
          m = ig.domHandler.getElementById("#canvas"),
          l = ig.domHandler.getOffsets(m),
          p = l.left,
          m = l.top;
          console.log(l.left);
          ig.sizeHandler.disableStretchToFitOnMobileFlag ? (g = Math.floor(p + g * ig.sizeHandler.scaleRatioMultiplier.x) + "px", e = Math.floor(m + e * ig.sizeHandler.scaleRatioMultiplier.y) + "px", d = Math.floor(d * ig.sizeHandler.scaleRatioMultiplier.x) + "px", f = Math.floor(f * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (g = Math.floor(g * ig.sizeHandler.sizeRatio.x) + "px", e = Math.floor(e * ig.sizeHandler.sizeRatio.y) + "px", d = Math.floor(d * ig.sizeHandler.sizeRatio.x) + "px", f = Math.floor(f * ig.sizeHandler.sizeRatio.y) + "px")
        } else m = ig.domHandler.getElementById("#canvas"),
        l = ig.domHandler.getOffsets(m),
        p = l.left,
        m = l.top,
        g = this.dynamicClickableEntityDivs[n].entity_pos_x,
        e = this.dynamicClickableEntityDivs[n].entity_pos_y,
        d = this.dynamicClickableEntityDivs[n].width,
        f = this.dynamicClickableEntityDivs[n].height,
        g = Math.floor(p + g * b) + "px",
        e = Math.floor(m + e * b) + "px",
        d = Math.floor(d * b) + "px",
        f = Math.floor(f * b) + "px";
        ig.domHandler.css(c, {
          "float": "left",
          position: "absolute",
          left: g,
          top: e,
          width: d,
          height: f,
          "z-index": 3
        });
        this.dynamicClickableEntityDivs[n]["font-size"] && ig.domHandler.css(c, {
          "font-size": this.dynamicClickableEntityDivs[n]["font-size"] * b + "px"
        })
      }
    },
    resize: function() {
      this.sizeCalcs();
      this.resizeLayers()
    },
    reorient: function() {
      console.log("changing orientation ...");
      if (ig.ua.mobile) {
        var b = !1,
        b = this.portraitMode ? window.innerHeight < window.innerWidth: window.innerHeight > window.innerWidth,
        c = this.domHandler.getElementById("#orientate"),
        d = this.domHandler.getElementById("#game");
        b ? (this.domHandler.show(c), this.domHandler.hide(d), console.log("portrait" + window.innerWidth + "," + window.innerHeight)) : (this.domHandler.show(d), this.domHandler.hide(c), console.log("landscape" + window.innerWidth + "," + window.innerHeight))
      }
      ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
    },
    resizeAds: function() {
      for (var b in this.adsToResize) {
        var c = ig.domHandler.getElementById("#" + b),
        d = ig.domHandler.getElementById("#" + b + "-Box"),
        e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
        f = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
        c && ig.domHandler.css(c, {
          width: window.innerWidth,
          height: window.innerHeight
        });
        d && ig.domHandler.css(d, {
          left: e,
          top: f
        })
      }
    },
    samsungFix: function() {
      ig.ua.android && (!(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && !(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart",
      function(b) {
        b.preventDefault();
        return ! 1
      },
      !1), document.addEventListener("touchmove",
      function(b) {
        b.preventDefault();
        return ! 1
      },
      !1), document.addEventListener("touchend",
      function(b) {
        b.preventDefault();
        return ! 1
      },
      !1))
    },
    orientationInterval: null,
    orientationTimeout: null,
    orientationHandler: function() {
      this.reorient();
      window.scrollTo(0, 1)
    },
    orientationDelayHandler: function() {
      null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 100));
      null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function() {
        this.clearAllIntervals()
      }.bind(this), 2E3))
    },
    clearAllIntervals: function() {
      window.clearInterval(this.orientationInterval);
      this.orientationInterval = null;
      window.clearTimeout(this.orientationTimeout);
      this.orientationTimeout = null
    },
    eventListenerSetup: function() {
      ig.ua.iOS ? (window.addEventListener("orientationchange", this.orientationDelayHandler.bind(this)), window.addEventListener("resize", this.orientationDelayHandler.bind(this))) : (window.addEventListener("orientationchange", this.orientationHandler.bind(this)), window.addEventListener("resize", this.orientationHandler.bind(this)));
      document.ontouchmove = function(b) {
        window.scrollTo(0, 1);
        b.preventDefault()
      }
    }
  })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
  ig.ApiHandler = ig.Class.extend({
    apiAvailable: {
      MJSPreroll: function() {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
      },
      MJSHeader: function() {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
      },
      MJSFooter: function() {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
      },
      MJSEnd: function() {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
      }
    },
    run: function(b, c) {
      if (this.apiAvailable[b]) this.apiAvailable[b](c)
    }
  })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
  SoundPlayer = ig.Class.extend({
    tagName: "SoundPlayer",
    stayMuteFlag: !1,
    debug: !1,
    init: function() {
      this.debug && console.log(this.tagName)
    },
    play: function(b) {
      this.debug && console.log("play sound ", b)
    },
    stop: function() {
      this.debug && console.log("stop sound ")
    },
    volume: function() {
      this.debug && console.log("set volume")
    },
    mute: function(b) {
      this.debug && console.log("mute");
      "undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
    },
    unmute: function(b) {
      this.debug && console.log("unmute");
      "undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
    }
  })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
  ImpactMusicPlayer = SoundPlayer.extend({
    tagName: "ImpactMusicPlayer",
    bgmPlaying: !1,
    soundList: {},
    init: function(b, c) {
      this.parent(b, c);
      for (var d in b) this.soundList[d] = d,
      ig.music.add(b[d].path + ".*", d);
      c && c.loop && (ig.music.loop = c.loop)
    },
    play: function(b) {
      this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
    },
    stop: function() {
      this.bgmPlaying = !1;
      ig.music.pause()
    },
    volume: function(b) {
      console.log("impactmusic:", b);
      ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
    },
    getVolume: function() {
      return ig.music.volume
    },
    mute: function(b) {
      this.parent(b);
      this.bgmPlaying && this.stop()
    },
    unmute: function(b) {
      this.parent(b);
      this.play()
    }
  })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
  ImpactSoundPlayer = SoundPlayer.extend({
    tagName: "ImpactSoundPlayer",
    soundList: {},
    init: function(b, c) {
      this.parent(b, c);
      for (var d in b) {
        var e = new ig.Sound(b[d].path + ".*");
        this.soundList[d] = e
      }
    },
    play: function(b) {
      this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
    },
    stop: function(b) {
      this.parent(b);
      b.stop()
    },
    volume: function(b) {
      ig.soundManager.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
    },
    getVolume: function() {
      return ig.soundManager.volume
    },
    mute: function(b) {
      this.parent(b);
      ig.Sound.enabled = !1
    },
    unmute: function(b) {
      this.parent(b);
      ig.Sound.enabled = !0
    }
  })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
  HowlerPlayer = SoundPlayer.extend({
    tagName: "HowlerPlayer",
    soundList: {},
    init: function(b, c) {
      this.parent(b, c);
      for (var d in b) {
        var e = b[d].path,
        e = new Howl({
          src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext]
        });
        this.soundList[d] = e
      }
    },
    play: function(b) {
      this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
    },
    stop: function(b) {
      this.parent(b);
      "object" === typeof b ? b.stop() : "string" === typeof b && this.soundList[b].stop()
    },
    volume: function(b) {
      for (var c in this.soundList) {
        if (0 > b) {
          this.soundList[c].volume(0);
          break
        }
        isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
      }
    },
    getVolume: function() {
      for (var b in this.soundList) return this.soundList[b].volume()
    },
    mute: function(b) {
      this.parent(b);
      Howler.mute(!0)
    },
    unmute: function(b) {
      this.parent(b);
      Howler.mute(!1)
    }
  })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
  HowlerMusicPlayer = SoundPlayer.extend({
    tagName: "HowlerMusicPlayer",
    bgmPlaying: !1,
    soundList: {},
    init: function(b, c) {
      this.parent(b, c);
      for (var d in b) {
        var e = b[d].path,
        e = new Howl({
          src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
          loop: !0,
          autoplay: !1,
          onend: function() {}.bind(this)
        });
        this.soundList[d] = e
      }
    },
    play: function(b) {
      if (!this.stayMuteFlag && !this.bgmPlaying) if ("object" === typeof b) this.bgmPlaying = !0,
      b.play();
      else if ("string" === typeof b) this.bgmPlaying = !0,
      this.soundList[b].play();
      else for (var c in this.soundList) {
        this.soundList[c].play();
        this.bgmPlaying = !0;
        break
      }
    },
    stop: function(b) {
      this.parent(b);
      if (this.bgmPlaying) {
        for (var c in this.soundList) this.soundList[c].stop();
        this.bgmPlaying = !1
      }
    },
    volume: function(b) {
      console.log("howler", b);
      for (var c in this.soundList) {
        if (0 > b) {
          this.soundList[c].volume(0);
          break
        }
        isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
      }
    },
    getVolume: function() {
      for (var b in this.soundList) return this.soundList[b].volume()
    },
    mute: function(b) {
      this.parent(b);
      Howler.mute(!0)
    },
    unmute: function(b) {
      this.parent(b);
      Howler.mute(!1)
    }
  })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
  JukeboxPlayer = SoundPlayer.extend({
    tagName: "JukeboxPlayer",
    bgmPlaying: !1,
    soundList: {},
    jukeboxPlayer: null,
    pausePosition: 0,
    premuteVolume: 0,
    minVolume: 0.001,
    init: function(b, c) {
      this.parent(b, c);
      for (var d in b) {
        this.soundList[d] = d;
        var e = b[d].path;
        this.jukeboxPlayer = new jukebox.Player({
          resources: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
          autoplay: !1,
          spritemap: {
            music: {
              start: b[d].startMp3,
              end: b[d].endMp3,
              loop: !0
            }
          }
        })
      }
    },
    play: function() {
      this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
    },
    stop: function() {
      this.bgmPlaying = !1;
      this.pausePosition = this.jukeboxPlayer.pause()
    },
    volume: function(b) {
      console.log("jukebox:", b);
      0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) : 1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
    },
    getVolume: function() {
      return this.jukeboxPlayer.getVolume()
    },
    mute: function(b) {
      this.parent(b);
      this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
    },
    unmute: function(b) {
      this.parent(b);
      this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
    }
  })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
  WebaudioMusicPlayer = SoundPlayer.extend({
    tagName: "WebaudioMusicPlayer",
    bgmPlaying: !1,
    isSupported: !1,
    muteFlag: !1,
    pausedTime: 0,
    webaudio: null,
    useHTML5Audio: !1,
    audio: null,
    inactiveAudio: null,
    codecs: null,
    reinitOnPlay: !1,
    inputList: null,
    _volume: 1,
    soundList: {},
    init: function(b) {
      this.webaudio = {
        compatibility: {},
        gainNode: null,
        buffer: null,
        source_loop: {},
        source_once: {}
      };
      try {
        Howler && Howler.ctx ? this.webaudio.context = Howler.ctx: ig && ig.webaudio_ctx ? this.webaudio.context = ig.webaudio_ctx: (this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, ig.webaudio_ctx = this.webaudio.context),
        this.isSupported = !0
      } catch(c) {
        console.log("Web Audio API not supported in this browser."),
        this.webaudio = null,
        this.useHTML5Audio = !0
      }
      if (this.useHTML5Audio) if ("undefined" !== typeof Audio) try {
        new Audio
      } catch(d) {
        this.useHTML5Audio = !1
      } else this.useHTML5Audio = !1;
      this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b));
      if (!this.isSupported) return null;
      this.webaudio && (this.inputList = b, this.initWebAudio(b))
    },
    initWebAudio: function(b) {
      ig.ua.iOS && this.initIOSWebAudioUnlock();
      this.webaudio.gainNode = this.webaudio.context.createGain();
      this.webaudio.gainNode.connect(this.webaudio.context.destination);
      this.webaudio.gainNode.gain.value = this._volume;
      this.webaudio.buffer = null;
      var c = "start",
      d = "stop",
      e = this.webaudio.context.createBufferSource();
      "function" !== typeof e.start && (c = "noteOn");
      this.webaudio.compatibility.start = c;
      "function" !== typeof e.stop && (d = "noteOff");
      this.webaudio.compatibility.stop = d;
      for (var f in b) {
        this.soundList[f] = f;
        var d = b[f].path,
        c = d + "." + ig.Sound.FORMAT.MP3.ext,
        g = d + "." + ig.Sound.FORMAT.OGG.ext;
        ig.ua.mobile ? ig.ua.iOS && (g = c) : (d = navigator.userAgent.toLowerCase(), -1 != d.indexOf("safari") && -1 >= d.indexOf("chrome") && (g = c), d.indexOf("win64") && (g = c));
        var n = new XMLHttpRequest;
        n.open("GET", g, !0);
        n.responseType = "arraybuffer";
        n.onload = function() {
          this.webaudio.context.decodeAudioData(n.response,
          function(b) {
            this.webaudio.buffer = b;
            this.webaudio.source_loop = {};
            this.bgmPlaying ? this.play(null, !0) : this.stop()
          }.bind(this),
          function() {
            console.log('Error decoding audio "' + g + '".')
          })
        }.bind(this);
        n.send();
        if (4 == n.readyState && "undefined" !== typeof Audio) {
          this.useHTML5Audio = !0;
          try {
            new Audio
          } catch(m) {
            this.useHTML5Audio = !1
          }
          this.useHTML5Audio && (console.log("Using HTML5 Audio"), this.webaudio = null, this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b))
        }
        break
      }
    },
    initIOSWebAudioUnlock: function() {
      if (this.webaudio) {
        webaudio = this.webaudio;
        var b = function() {
          var c = webaudio.context,
          d = c.createBuffer(1, 1, 22050),
          e = c.createBufferSource();
          e.buffer = d;
          e.connect(c.destination);
          "undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
          setTimeout(function() { (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
          }.bind(this), 0)
        };
        window.addEventListener("touchend", b, !1)
      }
    },
    initHTML5Audio: function(b) {
      if (this.useHTML5Audio && this.audio) {
        var c = this.audio;
        this.codecs = {};
        this.codecs = {
          mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
          ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
          aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
          m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
          mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
          weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
        };
        this.is = {
          ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
          ie: Boolean(document.all && !window.opera),
          opera: Boolean(window.opera),
          chrome: Boolean(window.chrome),
          safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
        };
        this.playDelay = -60;
        this.stopDelay = 30;
        this.is.chrome && (this.playDelay = -25);
        this.is.chrome && (this.stopDelay = 25);
        this.is.ff && (this.playDelay = -25);
        this.is.ff && (this.stopDelay = 85);
        this.is.opera && (this.playDelay = 5);
        this.is.opera && (this.stopDelay = 0);
        for (var d in b) {
          this.soundList[d] = d;
          var e = b[d].path,
          c = e + "." + ig.Sound.FORMAT.OGG.ext,
          e = e + "." + ig.Sound.FORMAT.MP3.ext,
          f = null;
          this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? f = c: this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (f = e);
          if (f) {
            ig.ua.mobile ? ig.ua.iOS && (f = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (f = e));
            this.audio.addEventListener("error",
            function() {
              this.audio.error && 4 === this.audio.error.code && (this.isSupported = !1)
            },
            !1);
            this.audio.src = f;
            this.audio._pos = 0;
            this.audio.preload = "auto";
            this.audio.volume = this._volume;
            this.inactiveAudio = new Audio;
            this.inactiveAudio.src = f;
            this.inactiveAudio._pos = 0;
            this.inactiveAudio.preload = "auto";
            this.inactiveAudio.volume = this._volume;
            this.inactiveAudio.load();
            var g = function() {
              this._duration = this.audio.duration;
              this._loaded || (this._loaded = !0);
              this.bgmPlaying ? this.play(null, !0) : this.stop();
              this.audio.removeEventListener("canplaythrough", g, !1)
            }.bind(this);
            this.audio.addEventListener("canplaythrough", g, !1);
            this.audio.load();
            break
          }
        }
      }
    },
    play: function(b, c) {
      if (this.isSupported) if (this.bgmPlaying = !0, this.webaudio) {
        if (!c && this.reinitOnPlay && this.webaudio.source_loop.buffer == this.webaudio.buffer) {
          if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0);
          try {
            this.webaudio.context.close();
            this.webaudio.context = new this.AudioContext;
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var d = "start",
            e = "stop",
            f = this.webaudio.context.createBufferSource();
            "function" !== typeof f.start && (d = "noteOn");
            this.webaudio.compatibility.start = d;
            "function" !== typeof f.stop && (e = "noteOff");
            this.webaudio.compatibility.stop = e;
            this.webaudio.source_loop = {};
            this.play(null, !0)
          } catch(g) {}
        }
        if (this.webaudio.buffer) {
          if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
            this.webaudio.source_loop.buffer = this.webaudio.buffer;
            this.webaudio.source_loop.loop = !0;
            this.webaudio.source_loop.connect(this.webaudio.gainNode);
            if (null == b || isNaN(b)) b = 0,
            this.pausedTime && (b = this.pausedTime);
            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(),
            this.webaudio.source_once.buffer = this.webaudio.buffer,
            this.webaudio.source_once.connect(this.webaudio.gainNode),
            this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b),
            this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration - b));
            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
            this.webaudio.source_loop._playing = !0
          }
        } else this.bgmPlaying = !0
      } else if (this.audio) {
        var n = this.audio;
        if (!this.muteFlag) if (this.bgmPlaying = !0, isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime)), d = this._duration - b, this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null), this._onEndTimer = setTimeout(function() {
          this.audio.currentTime = 0;
          this.audio.pause();
          this.pausedTime = 0;
          if (this.inactiveAudio) {
            var b = this.audio;
            this.audio = this.inactiveAudio;
            this.inactiveAudio = b
          }
          this.play()
        }.bind(this), 1E3 * d + this.playDelay), 4 === n.readyState || !n.readyState && navigator.isCocoonJS) n.readyState = 4,
        n.currentTime = b,
        n.muted = this.muteFlag || n.muted,
        n.volume = this._volume,
        setTimeout(function() {
          n.play()
        },
        0);
        else {
          clearTimeout(this._onEndTimer);
          this._onEndTimer = null;
          var m = function() {
            typeof("function" == this.play) && (this.play(), n.removeEventListener("canplaythrough", m, !1))
          }.bind(this);
          n.addEventListener("canplaythrough", m, !1)
        }
      }
    },
    stop: function() {
      this.bgmPlaying = !1;
      if (this.isSupported) if (this.webaudio) {
        if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
      } else if (this.audio) {
        var b = this.audio;
        4 == b.readyState && (this.pausedTime = b.currentTime, b.currentTime = 0, b.pause(), clearTimeout(this._onEndTimer), this._onEndTimer = null)
      }
    },
    volume: function(b) {
      if (isNaN(b) || null == b) return this.getVolume();
      this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
    },
    getVolume: function() {
      return ! this.isSupported ? 0 : this._volume
    },
    mute: function(b) {
      this.parent(b); ! 1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
    },
    unmute: function(b) {
      this.parent(b); ! this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
    }
  })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
  SoundInfo = ig.Class.extend({
    FORMATS: {
      OGG: ".ogg",
      MP3: ".mp3"
    },
    sfx: {
      kittyopeningSound: {
        path: "media/audio/opening/kittyopening"
      },
      staticSound: {
        path: "media/audio/play/static"
      },
      openingSound: {
        path: "media/audio/opening/opening"
      },
      clapHighSound: {
        path: "media/audio/clap-high"
      },
      clapLowSound: {
        path: "media/audio/clap-low"
      },
      lobLongSound: {
        path: "media/audio/lob-long"
      },
      lobShortSound: {
        path: "media/audio/lob-short"
      },
      powerSound: {
        path: "media/audio/power"
      },
      smashSound: {
        path: "media/audio/smash"
      },
      squeakBackSound: {
        path: "media/audio/squeak-back"
      },
      squeakForwardSound: {
        path: "media/audio/squeak-forward"
      },
      winSound: {
        path: "media/audio/win"
      },
      clickSound: {
        path: "media/audio/click"
      }
    },
    bgm: {
      background: {
        path: "media/audio/bgm",
        startOgg: 0,
        endOgg: 8.934,
        startMp3: 0,
        endMp3: 8.934
      }
    }
  })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
  ig.SoundHandler = ig.Class.extend({
    bgmPlayer: null,
    sfxPlayer: null,
    focusBlurMute: !1,
    soundInfo: new SoundInfo,
    init: function() {
      console.log("Initiating sound handler");
      this.initWindowHandler();
      ig.ua.mobile ? (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
        loop: !0
      }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
        loop: !0
      }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
        loop: !0
      }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
        loop: !0
      })));
      this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
    },
    checkBGM: function() {
      return this.bgmPlayer.stayMuteFlag
    },
    checkSFX: function() {
      return this.sfxPlayer.stayMuteFlag
    },
    muteSFX: function(b) {
      this.sfxPlayer && this.sfxPlayer.mute(b)
    },
    muteBGM: function(b) {
      this.bgmPlayer && this.bgmPlayer.mute(b)
    },
    unmuteSFX: function(b) {
      this.sfxPlayer && this.sfxPlayer.unmute(b)
    },
    unmuteBGM: function(b) {
      this.bgmPlayer && this.bgmPlayer.unmute(b)
    },
    muteAll: function(b) {
      this.muteSFX(b);
      this.muteBGM(b)
    },
    unmuteAll: function(b) {
      this.unmuteSFX(b);
      this.unmuteBGM(b)
    },
    forceMuteAll: function() {
      this.focusBlurMute || this.muteAll(!1);
      this.focusBlurMute = !0
    },
    forceUnMuteAll: function() {
      this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
    },
    initWindowHandler: function() {
      "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() { (!ig.gd || !ig.gd.isFreez) && ig.soundHandler && ig.soundHandler.forceUnMuteAll()
      }), $(window).blur(function() {
        ig.soundHandler && ig.soundHandler.forceMuteAll()
      })) : (window.onfocus = function() { (!ig.gd || !ig.gd.isFreez) && ig.soundHandler && ig.soundHandler.forceUnMuteAll()
      },
      window.onblur = function() {
        ig.soundHandler && ig.soundHandler.forceMuteAll()
      })
    },
    initPowerButtonFix: function() {
      var b = this.getHiddenProp();
      b && (b = b.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, this.visChange));
      window.addEventListener("pagehide",
      function() {
        ig.soundHandler && ig.soundHandler.forceMuteAll()
      },
      !1);
      window.addEventListener("pageshow",
      function() { (!ig.gd || !ig.gd.isFreez) && ig.soundHandler && ig.soundHandler.forceUnMuteAll()
      },
      !1)
    },
    getHiddenProp: function() {
      var b = ["webkit", "moz", "ms", "o"];
      if ("hidden" in document) return "hidden";
      for (var c = 0; c < b.length; c++) if (b[c] + "Hidden" in document) return b[c] + "Hidden";
      return null
    },
    isHidden: function() {
      var b = this.getHiddenProp();
      return ! b ? !1 : document[b]
    },
    visChange: function() {
      ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : (!ig.gd || !ig.gd.isFreez) && ig.soundHandler && ig.soundHandler.forceUnMuteAll()
    },
    saveVolume: function() {
      this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
      this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
    },
    forceLoopBGM: function() {
      var b;
      if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
        var c = this.bgmPlayer.jukeboxPlayer;
        if (c) {
          null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
          b = Boolean(window.chrome); ! window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
          var d = 0.1;
          ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
          c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
            ig.soundHandler.forcelooped = !1
          },
          d)) : c.setCurrentTime(b)))
        } else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
          ig.soundHandler.forcelooped = !1
        },
        d)) : ig.music.currentTrack.currentTime = c)))
      }
    }
  })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
  ig.Storage = ig.Class.extend({
    staticInstantiate: function() {
      return ! ig.Storage.instance ? null: ig.Storage.instance
    },
    init: function() {
      ig.Storage.instance = this
    },
    isCapable: function() {
      return "undefined" !== typeof window.localStorage
    },
    isSet: function(b) {
      return null !== this.get(b)
    },
    initUnset: function(b, c) {
      null === this.get(b) && this.set(b, c)
    },
    get: function(b) {
      if (!this.isCapable()) return null;
      try {
        return JSON.parse(localStorage.getItem(b))
      } catch(c) {
        return window.localStorage.getItem(b)
      }
    },
    getInt: function(b) {
      return~~this.get(b)
    },
    getFloat: function(b) {
      return parseFloat(this.get(b))
    },
    getBool: function(b) {
      return !! this.get(b)
    },
    key: function(b) {
      return this.isCapable() ? window.localStorage.key(b) : null
    },
    set: function(b, c) {
      if (!this.isCapable()) return null;
      try {
        window.localStorage.setItem(b, JSON.stringify(c))
      } catch(d) {
        console.log(d)
      }
    },
    setHighest: function(b, c) {
      c > this.getFloat(b) && this.set(b, c)
    },
    remove: function(b) {
      if (!this.isCapable()) return null;
      window.localStorage.removeItem(b)
    },
    clear: function() {
      if (!this.isCapable()) return null;
      window.localStorage.clear()
    }
  })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
  Mouse = ig.Class.extend({
    bindings: {
      click: [ig.KEY.MOUSE1]
    },
    init: function() {
      ig.input.initMouse();
      for (var b in this.bindings) {
        this[b] = b;
        for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
      }
    },
    getPos: function() {
      if (ig.ua.mobile) {
        var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
        c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
        return new Vector2(b / ig.sizeHandler.scaleRatioMultiplier.x, c / ig.sizeHandler.scaleRatioMultiplier.y)
      }
      b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x;
      c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
      return new Vector2(b, c)
    }
  })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
  Keyboard = ig.Class.extend({
    bindings: {
      jump: [ig.KEY.W, ig.KEY.UP_ARROW],
      moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
      moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
      shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
    },
    init: function() {
      for (var b in this.bindings) {
        this[b] = b;
        for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
      }
    }
  })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
  ig.PADKEY = {
    BUTTON_0: 0,
    PADBUTTON_1: 1,
    BUTTON_2: 2,
    BUTTON_3: 3,
    BUTTON_LEFT_BUMPER: 4,
    BUTTON_RIGHT_BUMPER: 5,
    BUTTON_LEFT_TRIGGER: 6,
    BUTTON_RIGHT_TRIGGER: 7,
    BUTTON_LEFT_JOYSTICK: 10,
    BUTTON_RIGHT_JOYSTICK: 11,
    BUTTON_DPAD_UP: 12,
    BUTTON_DPAD_DOWN: 13,
    BUTTON_DPAD_LEFT: 14,
    BUTTON_DPAD_RIGHT: 15,
    BUTTON_MENU: 16,
    AXIS_LEFT_JOYSTICK_X: 0,
    AXIS_LEFT_JOYSTICK_Y: 1,
    AXIS_RIGHT_JOYSTICK_X: 2,
    AXIS_RIGHT_JOYSTICK_Y: 3
  };
  ig.GamepadInput = ig.Class.extend({
    isInit: !1,
    isSupported: !1,
    list: [],
    bindings: {},
    states: {},
    presses: {},
    releases: {},
    downLocks: {},
    upLocks: {},
    leftStick: {
      x: 0,
      y: 0
    },
    rightStick: {
      x: 0,
      y: 0
    },
    start: function() {
      if (!this.isInit) {
        this.isInit = !0;
        var b = navigator.getGamepads || navigator.webkitGetGamepads;
        b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
        this.isSupported = b
      }
    },
    isAvailable: function() {
      return this.isInit && this.isSupported
    },
    buttonPressed: function(b) {
      return "object" == typeof b ? b.pressed: 1 == b
    },
    buttonDown: function(b) {
      if (b = this.bindings[b]) this.states[b] = !0,
      this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
    },
    buttonUp: function(b) {
      if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1,
      this.releases[b] = !0,
      this.upLocks[b] = !0
    },
    clearPressed: function() {
      for (var b in this.releases) this.states[b] = !1,
      this.downLocks[b] = !1;
      this.releases = {};
      this.presses = {};
      this.upLocks = {}
    },
    bind: function(b, c) {
      this.bindings[b] = c
    },
    unbind: function(b) {
      this.releases[this.bindings[b]] = !0;
      this.bindings[b] = null
    },
    unbindAll: function() {
      this.bindings = {};
      this.states = {};
      this.presses = {};
      this.releases = {};
      this.downLocks = {};
      this.upLocks = {}
    },
    state: function(b) {
      return this.states[b]
    },
    pressed: function(b) {
      return this.presses[b]
    },
    released: function(b) {
      return this.releases[b]
    },
    clamp: function(b, c, d) {
      return b < c ? c: b > d ? d: b
    },
    pollGamepads: function() {
      if (this.isSupported) {
        this.leftStick.x = 0;
        this.leftStick.y = 0;
        this.rightStick.x = 0;
        this.rightStick.y = 0;
        this.list = navigator.getGamepads();
        for (var b in this.bindings) {
          for (var c = !1,
          d = 0; d < this.list.length; d++) {
            var e = this.list[d];
            if (e && e.buttons && this.buttonPressed(e.buttons[b])) {
              c = !0;
              break
            }
          }
          c ? this.buttonDown(b) : this.buttonUp(b)
        }
        for (d = 0; d < this.list.length; d++) if ((e = this.list[d]) && e.axes) {
          b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
          var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
          f = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
          e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
          this.leftStick.x += isNaN(b) ? 0 : b;
          this.leftStick.y += isNaN(c) ? 0 : c;
          this.rightStick.x += isNaN(f) ? 0 : f;
          this.rightStick.y += isNaN(e) ? 0 : e
        }
        0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
      }
    }
  })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
  Gamepad = ig.Class.extend({
    bindings: {
      padJump: [ig.PADKEY.BUTTON_0]
    },
    init: function() {
      ig.gamepadInput.start();
      for (var b in this.bindings) for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
    },
    press: function() {},
    held: function() {},
    release: function() {}
  })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
  Multitouch = ig.Class.extend({
    init: function() {
      ig.multitouchInput.start()
    },
    getTouchesPos: function() {
      if (ig.ua.mobile) {
        if (0 < ig.multitouchInput.touches.length) {
          for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
            var d = ig.multitouchInput.touches[c];
            b.push({
              x: d.x,
              y: d.y
            })
          }
          return b
        }
        return null
      }
    }
  })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
  ig.MultitouchInput = ig.Class.extend({
    isStart: !1,
    touches: [],
    multitouchCapable: !1,
    lastEventUp: null,
    start: function() {
      this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
    },
    touchmove: function(b) {
      if (ig.ua.touchDevice) {
        var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
        c = ig.system.scale * (c / ig.system.realWidth),
        d = ig.system.scale * (d / ig.system.realHeight);
        if (b.touches) {
          for (; 0 < this.touches.length;) this.touches.pop(); ! this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
          var e = {
            left: 0,
            top: 0
          };
          ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
          for (var f = 0; f < b.touches.length; f++) {
            var g = b.touches[f];
            g && this.touches.push({
              x: (g.clientX - e.left) / c,
              y: (g.clientY - e.top) / d
            })
          }
        } else this.windowMove(b)
      }
    },
    touchdown: function(b) {
      var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
      d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
      c = ig.system.scale * (c / ig.system.realWidth),
      d = ig.system.scale * (d / ig.system.realHeight);
      if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
      else if (ig.ua.touchDevice && b.touches) {
        for (; 0 < this.touches.length;) this.touches.pop(); ! this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
        var e = {
          left: 0,
          top: 0
        };
        ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
        for (var f = 0; f < b.touches.length; f++) {
          var g = b.touches[f];
          g && this.touches.push({
            x: (g.clientX - e.left) / c,
            y: (g.clientY - e.top) / d
          })
        }
      }
    },
    touchup: function(b) {
      var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
      parseInt(ig.system.canvas.offsetHeight);
      c = ig.system.scale * (c / ig.system.realWidth);
      if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
      else {
        this.lastEventUp = b;
        var d = {
          left: 0,
          top: 0
        };
        ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
        if (ig.ua.touchDevice) {
          b = (b.changedTouches[0].clientX - d.left) / c;
          for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
        }
      }
    },
    windowKeyDown: function(b) {
      var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
      d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
      c = ig.system.scale * (c / ig.system.realWidth),
      d = ig.system.scale * (d / ig.system.realHeight);
      if (window.navigator.msPointerEnabled) {
        var e = {
          left: 0,
          top: 0
        };
        ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
        b = b.changedTouches ? b.changedTouches: [b];
        for (var f = 0; f < b.length; ++f) {
          for (var g = b[f], n = "undefined" != typeof g.identifier ? g.identifier: "undefined" != typeof g.pointerId ? g.pointerId: 1, m = (g.clientX - e.left) / c, g = (g.clientY - e.top) / d, l = 0; l < this.touches.length; ++l) this.touches[l].identifier == n && this.touches.splice(l, 1);
          this.touches.push({
            x: m,
            y: g,
            identifier: n
          })
        }
        for (c = 0; c < this.touches.length; c++);
      }
    },
    windowKeyUp: function(b) {
      b = "undefined" != typeof b.identifier ? b.identifier: "undefined" != typeof b.pointerId ? b.pointerId: 1;
      for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
      for (; 0 < this.touches.length;) this.touches.pop()
    },
    windowMove: function(b) {
      var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
      d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
      c = ig.system.scale * (c / ig.system.realWidth),
      d = ig.system.scale * (d / ig.system.realHeight),
      e = {
        left: 0,
        top: 0
      };
      ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
      if (window.navigator.msPointerEnabled) for (var f = "undefined" != typeof b.identifier ? b.identifier: "undefined" != typeof b.pointerId ? b.pointerId: 1, g = 0; g < this.touches.length; ++g) if (this.touches[g].identifier == f) {
        var n = (b.clientY - e.top) / d;
        this.touches[g].x = (b.clientX - e.left) / c;
        this.touches[g].y = n
      }
    }
  })
});
ig.baked = !0;
ig.module("plugins.io.fake-storage").requires("impact.game").defines(function() {
  ig.FakeStorage = ig.Class.extend({
    tempData: {},
    init: function() {
      ig.FakeStorage.instance = this
    },
    initUnset: function(b, c) {
      null === this.get(b) && this.set(b, c)
    },
    set: function(b, c) {
      this.tempData[b] = JSON.stringify(c)
    },
    setHighest: function(b, c) {
      c > this.getFloat(b) && this.set(b, c)
    },
    get: function(b) {
      return "undefined" == typeof this.tempData[b] ? null: JSON.parse(this.tempData[b])
    },
    getInt: function(b) {
      return~~this.get(b)
    },
    getFloat: function(b) {
      return parseFloat(this.get(b))
    },
    getBool: function(b) {
      return !! this.get(b)
    },
    isSet: function(b) {
      return null !== this.get(b)
    },
    remove: function(b) {
      delete this.tempData[b]
    },
    clear: function() {
      this.tempData = {}
    }
  })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input", "plugins.io.fake-storage").defines(function() {
  IoManager = ig.Class.extend({
    storage: null,
    localStorageSupport: !1,
    mouse: null,
    keyboard: null,
    multitouch: null,
    gamepad: null,
    init: function() {
      ig.multitouchInput = new ig.MultitouchInput;
      ig.gamepadInput = new ig.GamepadInput;
      this.unbindAll();
      this.initStorage();
      this.initMouse();
      this.initKeyboard()
    },
    unbindAll: function() {
      ig.input.unbindAll();
      ig.gamepadInput.unbindAll()
    },
    initStorage: function() {
      try {
        window.localStorage.setItem("test", "test"),
        this.storage = new ig.Storage
      } catch(b) {
        console.log("using fake storage"),
        this.storage = new ig.FakeStorage
      } finally {
        window.localStorage.removeItem("test")
      }
    },
    initMouse: function() {
      this.mouse = new Mouse
    },
    initKeyboard: function() {
      this.keyboard = new Keyboard
    },
    initMultitouch: function() {
      this.multitouch = new Multitouch
    },
    initGamepad: function() {
      this.gamepad = new Gamepad
    },
    press: function(b) {
      return ig.input.pressed(b) || this.gamepad && this.gamepad.press(b) ? !0 : !1
    },
    held: function(b) {
      return ig.input.state(b) || this.gamepad && this.gamepad.state(b) ? !0 : !1
    },
    release: function(b) {
      return ig.input.released(b) || this.gamepad && this.gamepad.released(b) ? !0 : !1
    },
    getClickPos: function() {
      return this.mouse.getPos()
    },
    getTouchesPos: function() {
      return this.multitouch.getTouchesPos()
    },
    checkOverlap: function(b, c, d, e, f) {
      return b.x > c + e || b.x < c || b.y > d + f || b.y < d ? !1 : !0
    },
    _supportsLocalStorage: function() {
      try {
        return localStorage.setItem("test", "test"),
        localStorage.removeItem("test"),
        this.localStorageSupport = "localStorage" in window && null !== window.localStorage
      } catch(b) {
        return this.localStorageSupport
      }
    },
    storageIsSet: function(b) {
      return ! this.localStorageSupport ? null: this.storage.isSet(b)
    },
    storageGet: function(b) {
      return ! this.localStorageSupport ? null: this.storage.get(b)
    },
    storageSet: function(b, c) {
      if (!this.localStorageSupport) return null;
      this.storage.set(b, c)
    },
    assert: function(b, c, d) {
      if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " + b;
    }
  })
});
ig.baked = !0;
ig.module("plugins.io.storage-manager").requires("impact.game", "plugins.io.io-manager").defines(function() {
  ig.Game.prototype.name = "MJS-Game";
  ig.Game.prototype.version = "1.0";
  ig.Game.prototype.sessionData = {};
  ig.Game.prototype.initData = function() {
    return this.sessionData = {
      sound: 0.5,
      music: 0.5,
      level: 1,
      score: 0
    }
  };
  ig.Game.prototype.setupStorageManager = function() {
    "undefined" === typeof this.name ? console.error("Cannot found Game Name, Storage Manager Cancelled.") : "undefined" === typeof this.version ? console.error("Cannot found Game Version, Storage Manager Cancelled.") : (this.io || (this.io = new IoManager, console.log("IO Manager doesn't existed. Initialize...")), console.log("Plug in Storage Manager"), this.storage = this.io.storage, this.storageName = this.name + "-v" + this.version, this.loadAll())
  };
  ig.Game.prototype.loadAll = function() {
    var b = this.storage.get(this.storageName);
    if (null === b || "undefined" === typeof b || this.isDataMismatch()) b = this.initData();
    this.initData();
    for (var c in b) void 0 != b[c] && (this.sessionData[c] = b[c]);
    this.storage.set(this.storageName, b)
  };
  ig.Game.prototype.isDataMismatch = function() {
    var b = this.storage.get(this.storageName),
    c;
    for (c in this.sessionData) if (void 0 === b[c]) return ! 0;
    return ! 1
  };
  ig.Game.prototype.saveAll = function() {
    var b = this.storage.get(this.storageName),
    c;
    for (c in this.sessionData) b[c] = this.sessionData[c];
    this.storage.set(this.storageName, b)
  };
  ig.Game.prototype.load = function(b) {
    return this.storage.get(this.storageName)[b]
  };
  ig.Game.prototype.save = function(b, c) {
    var d = this.storage.get(this.storageName);
    d[b] = c;
    this.storage.set(this.storageName, d)
  }
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader").defines(function() {
  ig.SplashLoader = ig.Loader.extend({
    loadingbg: new ig.Image("media/graphics/game/bg/main-menu-bg.png"),
    barBgImg: new ig.Image("media/graphics/splash/loading/bar-bg.png"),
    barFillImg: new ig.Image("media/graphics/splash/loading/bar-fill.png"),
    barFgImg: new ig.Image("media/graphics/splash/loading/bar-fg.png"),
    timeBar: null,
    init: function(b, c) {
      this.parent(b, c);
      ig.apiHandler.run("MJSPreroll")
    },
    end: function() {
      this.parent();
      if (ig.ua.mobile) {
        var b = ig.domHandler.getElementById("#play");
        ig.domHandler.show(b)
      }
      ig.system.setGame(MyGame)
    },
    draw: function() {
      this._drawStatus += (this.status - this._drawStatus) / 5;
      this.loadingbg.draw(0, 0);
      this.barBgImg.draw((ig.system.width - this.barBgImg.width) / 2, ig.system.height / 2 + 100);
      var b = ig.system.context;
      b.save();
      var c = this._drawStatus / ig.system.scale + 0.04;
      b.translate((ig.system.width - this.barBgImg.width) / 2 + 5, ig.system.height / 2 + 110);
      b.scale(c, 1);
      this.barFillImg.draw(0, 0);
      b.fillStyle = "#ffffff";
      b.font = "10px mainfont";
      b.fillText(" ", 0, 0);
      b.fillStyle = "#ffffff";
      b.font = "10px secondaryfont";
      b.fillText(" ", 0, 0);
      b.restore();
      this.barFgImg.draw((ig.system.width - this.barBgImg.width) / 2, ig.system.height / 2 + 100)
    }
  })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
  Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
    for (var c = 0; c < this.length; ++c) if (this[c] === b) return c;
    return - 1
  });
  ig.Entity.prototype.tweens = [];
  ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
  ig.Entity.prototype.update = function() {
    this._preTweenUpdate();
    if (0 < this.tweens.length) {
      for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(),
      this.tweens[c].complete || b.push(this.tweens[c]);
      this.tweens = b
    }
  };
  ig.Entity.prototype.delayedCall = function(b, c, d) {
    void 0 === d && (d = !0);
    b = new ig.Tween(this, {},
    b, {
      onComplete: c
    });
    this.tweens.push(b);
    d && b.start();
    return b
  };
  ig.Entity.prototype.tween = function(b, c, d) {
    b = new ig.Tween(this, b, c, d);
    this.tweens.push(b);
    return b
  };
  ig.Entity.prototype.pauseTweens = function() {
    for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
  };
  ig.Entity.prototype.resumeTweens = function() {
    for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
  };
  ig.Entity.prototype.stopTweens = function(b) {
    for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
  };
  ig.Tween = function(b, c, d, e) {
    var f = {},
    g = {},
    n = {},
    m = 0,
    l = !1,
    p = !1,
    q = !1;
    this.duration = d;
    this.paused = this.complete = !1;
    this.easing = ig.Tween.Easing.Linear.EaseNone;
    this.onComplete = !1;
    this.loop = this.delay = 0;
    this.loopCount = -1;
    ig.merge(this, e);
    this.loopNum = this.loopCount;
    this.chain = function(b) {
      q = b
    };
    this.initEnd = function(b, c, d) {
      if ("object" !== typeof c[b]) d[b] = c[b];
      else for (subprop in c[b]) d[b] || (d[b] = {}),
      this.initEnd(subprop, c[b], d[b])
    };
    this.initStart = function(b, c, d, e) {
      if ("object" !== typeof d[b])"undefined" !== typeof c[b] && (e[b] = d[b]);
      else for (subprop in d[b]) e[b] || (e[b] = {}),
      "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], e[b])
    };
    this.start = function() {
      this.paused = this.complete = !1;
      this.loopNum = this.loopCount;
      m = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
      p = !0;
      l = new ig.Timer;
      for (var d in c) this.initEnd(d, c, g);
      for (d in g) this.initStart(d, g, b, f),
      this.initDelta(d, n, b, g)
    };
    this.initDelta = function(b, c, d, e) {
      if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
      else for (subprop in e[b]) c[b] || (c[b] = {}),
      this.initDelta(subprop, c[b], d[b], e[b])
    };
    this.propUpdate = function(b, c, d, e, f) {
      if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ? d[b] + e[b] * f: c[b];
      else for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f)
    };
    this.propSet = function(b, c, d) {
      if ("object" !== typeof c[b]) d[b] = c[b];
      else for (subprop in c[b]) d[b] || (d[b] = {}),
      this.propSet(subprop, c[b], d[b])
    };
    this.update = function() {
      if (!p) return ! 1;
      if (this.delay) {
        if (l.delta() < this.delay) return;
        this.delay = 0;
        l.reset()
      }
      if (this.paused || this.complete) return ! 1;
      var c = (l.delta() + m) / this.duration,
      c = 1 < c ? 1 : c,
      d = this.easing(c);
      for (property in n) this.propUpdate(property, b, f, n, d);
      if (1 <= c) {
        if (0 == this.loopNum || !this.loop) {
          this.complete = !0;
          if (this.onComplete) this.onComplete();
          q && q.start();
          return ! 1
        }
        if (this.loop == ig.Tween.Loop.Revert) {
          for (property in f) this.propSet(property, f, b);
          m = 0;
          l.reset(); - 1 != this.loopNum && this.loopNum--
        } else if (this.loop == ig.Tween.Loop.Reverse) {
          c = {};
          d = {};
          ig.merge(c, g);
          ig.merge(d, f);
          ig.merge(f, c);
          ig.merge(g, d);
          for (property in g) this.initDelta(property, n, b, g);
          m = 0;
          l.reset(); - 1 != this.loopNum && this.loopNum--
        }
      }
    };
    this.pause = function() {
      this.paused = !0;
      l && l.delta && (m += l.delta())
    };
    this.resume = function() {
      this.paused = !1;
      l && l.reset && l.reset()
    };
    this.stop = function(b) {
      b && (this.loop = this.complete = this.paused = !1, m += d, this.update());
      this.complete = !0
    }
  };
  ig.Tween.Loop = {
    Revert: 1,
    Reverse: 2
  };
  ig.Tween.Easing = {
    Linear: {},
    Quadratic: {},
    Cubic: {},
    Quartic: {},
    Quintic: {},
    Sinusoidal: {},
    Exponential: {},
    Circular: {},
    Elastic: {},
    Back: {},
    Bounce: {}
  };
  ig.Tween.Easing.Linear.EaseNone = function(b) {
    return b
  };
  ig.Tween.Easing.Quadratic.EaseIn = function(b) {
    return b * b
  };
  ig.Tween.Easing.Quadratic.EaseOut = function(b) {
    return - b * (b - 2)
  };
  ig.Tween.Easing.Quadratic.EaseInOut = function(b) {
    return 1 > (b *= 2) ? 0.5 * b * b: -0.5 * (--b * (b - 2) - 1)
  };
  ig.Tween.Easing.Cubic.EaseIn = function(b) {
    return b * b * b
  };
  ig.Tween.Easing.Cubic.EaseOut = function(b) {
    return--b * b * b + 1
  };
  ig.Tween.Easing.Cubic.EaseInOut = function(b) {
    return 1 > (b *= 2) ? 0.5 * b * b * b: 0.5 * ((b -= 2) * b * b + 2)
  };
  ig.Tween.Easing.Quartic.EaseIn = function(b) {
    return b * b * b * b
  };
  ig.Tween.Easing.Quartic.EaseOut = function(b) {
    return - (--b * b * b * b - 1)
  };
  ig.Tween.Easing.Quartic.EaseInOut = function(b) {
    return 1 > (b *= 2) ? 0.5 * b * b * b * b: -0.5 * ((b -= 2) * b * b * b - 2)
  };
  ig.Tween.Easing.Quintic.EaseIn = function(b) {
    return b * b * b * b * b
  };
  ig.Tween.Easing.Quintic.EaseOut = function(b) {
    return (b -= 1) * b * b * b * b + 1
  };
  ig.Tween.Easing.Quintic.EaseInOut = function(b) {
    return 1 > (b *= 2) ? 0.5 * b * b * b * b * b: 0.5 * ((b -= 2) * b * b * b * b + 2)
  };
  ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
    return - Math.cos(b * Math.PI / 2) + 1
  };
  ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
    return Math.sin(b * Math.PI / 2)
  };
  ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
    return - 0.5 * (Math.cos(Math.PI * b) - 1)
  };
  ig.Tween.Easing.Exponential.EaseIn = function(b) {
    return 0 == b ? 0 : Math.pow(2, 10 * (b - 1))
  };
  ig.Tween.Easing.Exponential.EaseOut = function(b) {
    return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
  };
  ig.Tween.Easing.Exponential.EaseInOut = function(b) {
    return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * ( - Math.pow(2, -10 * (b - 1)) + 2)
  };
  ig.Tween.Easing.Circular.EaseIn = function(b) {
    return - (Math.sqrt(1 - b * b) - 1)
  };
  ig.Tween.Easing.Circular.EaseOut = function(b) {
    return Math.sqrt(1 - --b * b)
  };
  ig.Tween.Easing.Circular.EaseInOut = function(b) {
    return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
  };
  ig.Tween.Easing.Elastic.EaseIn = function(b) {
    var c, d = 0.1,
    e = 0.4;
    if (0 == b) return 0;
    if (1 == b) return 1;
    e || (e = 0.3); ! d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
    return - (d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e))
  };
  ig.Tween.Easing.Elastic.EaseOut = function(b) {
    var c, d = 0.1,
    e = 0.4;
    if (0 == b) return 0;
    if (1 == b) return 1;
    e || (e = 0.3); ! d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
    return d * Math.pow(2, -10 * b) * Math.sin((b - c) * 2 * Math.PI / e) + 1
  };
  ig.Tween.Easing.Elastic.EaseInOut = function(b) {
    var c, d = 0.1,
    e = 0.4;
    if (0 == b) return 0;
    if (1 == b) return 1;
    e || (e = 0.3); ! d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
    return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e) + 1
  };
  ig.Tween.Easing.Back.EaseIn = function(b) {
    return b * b * (2.70158 * b - 1.70158)
  };
  ig.Tween.Easing.Back.EaseOut = function(b) {
    return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
  };
  ig.Tween.Easing.Back.EaseInOut = function(b) {
    return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
  };
  ig.Tween.Easing.Bounce.EaseIn = function(b) {
    return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
  };
  ig.Tween.Easing.Bounce.EaseOut = function(b) {
    return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b: b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
  };
  ig.Tween.Easing.Bounce.EaseInOut = function(b) {
    return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
  };
  ig.Tween.Interpolation = {
    Linear: function(b, c) {
      var d = b.length - 1,
      e = d * c,
      f = Math.floor(e),
      g = TWEEN.Interpolation.Utils.Linear;
      return 0 > c ? g(b[0], b[1], e) : 1 < c ? g(b[d], b[d - 1], d - e) : g(b[f], b[f + 1 > d ? d: f + 1], e - f)
    }
  }
});
ig.baked = !0;
ig.module("plugins.patches.entity-patch").requires("impact.entity").defines(function() {
  ig.Entity.inject({
    handleMovementTrace: function(b) {
      this.standing = !1;
      b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness: (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
      b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness: 0);
      if (b.collision.slope) {
        var c = b.collision.slope;
        if (0 < this.bounciness) {
          var d = this.vel.x * c.nx + this.vel.y * c.ny;
          this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
          this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
        } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y),
        this.vel.x = c.x * d,
        this.vel.y = c.y * d,
        c = Math.atan2(c.x, c.y),
        c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
      }
      this.pos.x = b.pos.x;
      this.pos.y = b.pos.y
    }
  })
});
ig.baked = !0;
ig.module("plugins.tweens-handler").requires("impact.entity", "plugins.tween", "plugins.patches.entity-patch").defines(function() {
  Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
    for (var d = 0; d < this.length; ++d) if (this[d] === b) return d;
    return - 1
  });
  ig.TweensHandler = ig.Class.extend({
    _tweens: [],
    _systemPausedTweens: [],
    init: function() {},
    getAll: function() {
      return this._tweens
    },
    removeAll: function() {
      this._tweens = []
    },
    add: function(b) {
      this._tweens.push(b)
    },
    remove: function(b) {
      b = this._tweens.indexOf(b); - 1 !== b && this._tweens.splice(b, 1)
    },
    onSystemPause: function() {
      if (0 === this._tweens.length) return ! 1;
      for (var b = 0,
      d = null; b < this._tweens.length;) d = this._tweens[b],
      d._isPlaying && (this._systemPausedTweens.push(d), d.pause()),
      b++;
      return ! 0
    },
    onSystemResume: function() {
      if (0 === this._systemPausedTweens.length) return ! 1;
      for (var b = 0; b < this._systemPausedTweens.length;) this._systemPausedTweens[b].resume(),
      b++;
      this._systemPausedTweens = [];
      return ! 0
    },
    update: function(b, d) {
      if (0 === this._tweens.length) return ! 1;
      var e = 0;
      for (b = void 0 !== b ? b: ig.game.tweens.now(); e < this._tweens.length;) this._tweens[e].update(b) || d ? e++:this._tweens.splice(e, 1);
      return ! 0
    },
    now: function() {
      return Date.now()
    }
  });
  ig.TweenDef = ig.Class.extend({
    _ent: null,
    _valuesStart: {},
    _valuesEnd: {},
    _valuesStartRepeat: {},
    _duration: 1E3,
    _repeat: 0,
    _yoyo: !1,
    _isPlaying: !1,
    _reversed: !1,
    _delayTime: 0,
    _startTime: null,
    _pauseTime: null,
    _easingFunction: ig.Tween.Easing.Linear.EaseNone,
    _interpolationFunction: ig.Tween.Interpolation.Linear,
    _chainedTweens: [],
    _onStartCallback: null,
    _onStartCallbackFired: !1,
    _onUpdateCallback: null,
    _onCompleteCallback: null,
    _onStopCallback: null,
    _onPauseCallback: null,
    _onResumeCallback: null,
    _currentElapsed: 0,
    init: function(b) {
      this._object = b
    },
    to: function(b, d) {
      this._valuesEnd = b;
      void 0 !== d && (this._duration = d);
      return this
    },
    start: function(b) {
      if (this._isPlaying) return this;
      ig.game.tweens.add(this);
      this._isPlaying = !0;
      this._onStartCallbackFired = !1;
      this._startTime = void 0 !== b ? b: ig.game.tweens.now();
      this._startTime += this._delayTime;
      for (var d in this._valuesEnd) {
        if (this._valuesEnd[d] instanceof Array) {
          if (0 === this._valuesEnd[d].length) continue;
          this._valuesEnd[d] = [this._object[d]].concat(this._valuesEnd[d])
        }
        void 0 !== this._object[d] && (this._valuesStart[d] = this._object[d], !1 === this._valuesStart[d] instanceof Array && (this._valuesStart[d] *= 1), this._valuesStartRepeat[d] = this._valuesStart[d] || 0)
      }
      return this
    },
    stop: function() {
      if (!this._isPlaying) return this;
      ig.game.tweens.remove(this);
      this._isPlaying = !1;
      null !== this._onStopCallback && this._onStopCallback.call(this._object, this._object);
      this.stopChainedTweens();
      return this
    },
    pause: function() {
      if (!this._isPlaying) return this;
      ig.game.tweens.remove(this);
      this._isPlaying = !1;
      this._pauseTime = ig.game.tweens.now();
      null !== this._onPauseCallback && this._onPauseCallback.call(this._object, this._object);
      return this
    },
    resume: function() {
      if (this._isPlaying || !this._pauseTime) return this;
      var b = ig.game.tweens.now() - this._pauseTime;
      this._startTime += b;
      ig.game.tweens.add(this);
      this._isPlaying = !0;
      null !== this._onResumeCallback && this._onResumeCallback.call(this._object, this._object);
      this._pauseTime = null;
      return this
    },
    end: function() {
      this.update(this._startTime + this._duration);
      return this
    },
    stopChainedTweens: function() {
      for (var b = 0,
      d = this._chainedTweens.length; b < d; b++) this._chainedTweens[b].stop()
    },
    delay: function(b) {
      this._delayTime = b;
      return this
    },
    repeat: function(b) {
      this._repeat = b;
      return this
    },
    repeatDelay: function(b) {
      this._repeatDelayTime = b;
      return this
    },
    yoyo: function(b) {
      this._yoyo = b;
      return this
    },
    easing: function(b) {
      this._easingFunction = b;
      return this
    },
    interpolation: function(b) {
      this._interpolationFunction = b;
      return this
    },
    chain: function() {
      this._chainedTweens = arguments;
      return this
    },
    onStart: function(b) {
      this._onStartCallback = b;
      return this
    },
    onUpdate: function(b) {
      this._onUpdateCallback = b;
      return this
    },
    onComplete: function(b) {
      this._onCompleteCallback = b;
      return this
    },
    onStop: function(b) {
      this._onStopCallback = b;
      return this
    },
    onPause: function(b) {
      this._onPauseCallback = b;
      return this
    },
    onResume: function(b) {
      this._onResumeCallback = b;
      return this
    },
    update: function(b) {
      var d, e, f;
      if (b < this._startTime) return ! 0; ! 1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback.call(this._object, this._object), this._onStartCallbackFired = !0);
      e = (b - this._startTime) / this._duration;
      this._currentElapsed = e = 1 < e ? 1 : e;
      f = this._easingFunction(e);
      for (d in this._valuesEnd) if (void 0 !== this._valuesStart[d]) {
        var g = this._valuesStart[d] || 0,
        n = this._valuesEnd[d];
        n instanceof Array ? this._object[d] = this._interpolationFunction(n, f) : ("string" === typeof n && (n = "+" === n.charAt(0) || "-" === n.charAt(0) ? g + parseFloat(n) : parseFloat(n)), "number" === typeof n && (this._object[d] = g + (n - g) * f))
      }
      null !== this._onUpdateCallback && this._onUpdateCallback.call(this._object, this._object, f);
      if (1 === e) if (0 < this._repeat) {
        isFinite(this._repeat) && this._repeat--;
        for (d in this._valuesStartRepeat)"string" === typeof this._valuesEnd[d] && (this._valuesStartRepeat[d] = _valuesStartRepeat[d] + parseFloat(_valuesEnd[d])),
        this._yoyo && (e = this._valuesStartRepeat[d], this._valuesStartRepeat[d] = this._valuesEnd[d], this._valuesEnd[d] = e),
        this._valuesStart[d] = this._valuesStartRepeat[d];
        this._yoyo && (this._reversed = !this._reversed);
        this._startTime = void 0 !== this._repeatDelayTime ? b + this._repeatDelayTime: b + this._delayTime
      } else {
        null !== this._onCompleteCallback && this._onCompleteCallback.call(this._object, this._object);
        b = 0;
        for (d = this._chainedTweens.length; b < d; b++) this._chainedTweens[b].start(this._startTime + this._duration);
        return ! 1
      }
      return ! 0
    }
  });
  var b = [1];
  ig.Tween.Interpolation = {
    Linear: function(b, d) {
      var e = b.length - 1,
      f = e * d,
      g = Math.floor(f),
      n = ig.Tween.Interpolation.Utils.Linear;
      return 0 > d ? n(b[0], b[1], f) : 1 < d ? n(b[e], b[e - 1], e - f) : n(b[g], b[g + 1 > e ? e: g + 1], f - g)
    },
    Bezier: function(b, d) {
      for (var e = 0,
      f = b.length - 1,
      g = Math.pow,
      n = ig.Tween.Interpolation.Utils.Bernstein,
      m = 0; m <= f; m++) e += g(1 - d, f - m) * g(d, m) * b[m] * n(f, m);
      return e
    },
    CatmullRom: function(b, d) {
      var e = b.length - 1,
      f = e * d,
      g = Math.floor(f),
      n = ig.Tween.Interpolation.Utils.CatmullRom;
      return b[0] === b[e] ? (0 > d && (g = Math.floor(f = e * (1 + d))), n(b[(g - 1 + e) % e], b[g], b[(g + 1) % e], b[(g + 2) % e], f - g)) : 0 > d ? b[0] - (n(b[0], b[0], b[1], b[1], -f) - b[0]) : 1 < d ? b[e] - (n(b[e], b[e], b[e - 1], b[e - 1], f - e) - b[e]) : n(b[g ? g - 1 : 0], b[g], b[e < g + 1 ? e: g + 1], b[e < g + 2 ? e: g + 2], f - g)
    },
    Utils: {
      Linear: function(b, d, e) {
        return (d - b) * e + b
      },
      Bernstein: function(b, d) {
        var e = ig.Tween.Interpolation.Utils.Factorial;
        return e(b) / e(d) / e(b - d)
      },
      Factorial: function(c) {
        var d = 1;
        if (b[c]) return b[c];
        for (var e = c; 1 < e; e--) d *= e;
        return b[c] = d
      },
      CatmullRom: function(b, d, e, f, g) {
        b = 0.5 * (e - b);
        f = 0.5 * (f - d);
        var n = g * g;
        return (2 * d - 2 * e + b + f) * g * n + ( - 3 * d + 3 * e - 2 * b - f) * n + b * g + d
      }
    }
  }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
  ig.UrlParameters = ig.Class.extend({
    init: function() {
      switch (getQueryVariable("iphone")) {
      case "true":
        ig.ua.iPhone = !0,
        console.log("iPhone mode")
      }
      var b = getQueryVariable("webview");
      if (b) switch (b) {
      case "true":
        ig.ua.is_uiwebview = !0,
        console.log("webview mode")
      }
      if (b = getQueryVariable("debug")) switch (b) {
      case "true":
        ig.game.showDebugMenu(),
        console.log("debug mode")
      }
      switch (getQueryVariable("view")) {
      case "stats":
        ig.game.resetPlayerStats(),
        ig.game.endGame()
      }
      getQueryVariable("ad")
    }
  })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
  ig.Director = ig.Class.extend({
    init: function(b, c) {
      this.game = b;
      this.levels = [];
      this.currentLevel = 0;
      this.append(c)
    },
    loadLevel: function(b) {
      for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
        var d = ig.domHandler.getElementById("#" + c);
        ig.domHandler.hide(d)
      }
      this.currentLevel = b;
      this.game.loadLevel(this.levels[b]);
      return ! 0
    },
    loadLevelWithoutEntities: function(b) {
      this.currentLevel = b;
      this.game.loadLevelWithoutEntities(this.levels[b]);
      return ! 0
    },
    append: function(b) {
      newLevels = [];
      return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b: newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
    },
    nextLevel: function() {
      return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
    },
    previousLevel: function() {
      return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
    },
    jumpTo: function(b) {
      var c = null;
      for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
      return 0 <= c ? this.loadLevel(c) : !1
    },
    firstLevel: function() {
      return this.loadLevel(0)
    },
    lastLevel: function() {
      return this.loadLevel(this.levels.length - 1)
    },
    reloadLevel: function() {
      return this.loadLevel(this.currentLevel)
    }
  })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
  ig.Storage = ig.Class.extend({
    staticInstantiate: function() {
      return ! ig.Storage.instance ? null: ig.Storage.instance
    },
    init: function() {
      ig.Storage.instance = this
    },
    isCapable: function() {
      return "undefined" !== typeof window.localStorage
    },
    isSet: function(b) {
      return null !== this.get(b)
    },
    initUnset: function(b, c) {
      null === this.get(b) && this.set(b, c)
    },
    get: function(b) {
      if (!this.isCapable()) return null;
      try {
        return JSON.parse(localStorage.getItem(b))
      } catch(c) {
        return window.localStorage.getItem(b)
      }
    },
    getInt: function(b) {
      return~~this.get(b)
    },
    getFloat: function(b) {
      return parseFloat(this.get(b))
    },
    getBool: function(b) {
      return !! this.get(b)
    },
    key: function(b) {
      return this.isCapable() ? window.localStorage.key(b) : null
    },
    set: function(b, c) {
      if (!this.isCapable()) return null;
      try {
        window.localStorage.setItem(b, JSON.stringify(c))
      } catch(d) {
        console.log(d)
      }
    },
    setHighest: function(b, c) {
      c > this.getFloat(b) && this.set(b, c)
    },
    remove: function(b) {
      if (!this.isCapable()) return null;
      window.localStorage.removeItem(b)
    },
    clear: function() {
      if (!this.isCapable()) return null;
      window.localStorage.clear()
    }
  })
});
ig.baked = !0;
ig.module("plugins.math.random").defines(function() {
  ig.random = {
    bool: function() {
      return 0.5 > Math.random()
    },
    "int": function(b, c) {
      return b + Math.floor((c - b + 1) * Math.random())
    },
    "float": function(b, c) {
      return b + (c - b) * Math.random()
    },
    string: function(b, c) {
      void 0 === c && (c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
      for (var d = "",
      e = 0; e < b; e++) d += c.charAt(Random.int(0, c.length - 1));
      return d
    },
    fromArray: function(b) {
      return null != b && 0 < b.length ? b[this.int(0, b.length - 1)] : null
    },
    shuffle: function(b) {
      if (null != b) for (var c = 0; c < b.length; c++) {
        var d = this.int(0, b.length - 1),
        e = b[c];
        b[c] = b[d];
        b[d] = e
      }
      return b
    }
  }
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
  ig.Entity.inject({
    autoUpdateScale: !0,
    scale: {
      x: 1,
      y: 1
    },
    _offset: {
      x: 0,
      y: 0
    },
    _scale: {
      x: 1,
      y: 1
    },
    _size: {
      x: 0,
      y: 0
    },
    _prevScale: {
      x: 0,
      y: 0
    },
    init: function(b, c, d) {
      this.parent(b, c, d);
      this._offset.x = this.offset.x;
      this._offset.y = this.offset.y;
      this._size.x = this.size.x;
      this._size.y = this.size.y;
      this.setScale(this.scale.x, this.scale.y)
    },
    setEntitySize: function(b, c) {
      this._size.x = this.size.x = b;
      this._size.y = this.size.y = c;
      this.setScale(this.scale.x, this.scale.y)
    },
    draw: function() {
      if (this.autoUpdateScale && (this.scale.x != this._prevScale.x || this.scale.y != this._prevScale.y)) this._scale.x = this.scale.x,
      this._scale.y = this.scale.y,
      this.setScale(this.scale.x, this.scale.y);
      if (null != this.currentAnim) if (1 != this.scale.x || 1 != this.scale.y) {
        var b = ig.system.context;
        b.save();
        b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() - this.offset.y - ig.game.screen.y));
        b.scale(this._scale.x, this._scale.y);
        this.currentAnim.draw(0, 0);
        b.restore()
      } else this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
    },
    setScale: function(b, c) {
      var d = this.size.x,
      e = this.size.y;
      this.scale.x = b || this.scale.x;
      this.scale.y = c || this.scale.y;
      this._scale.x = this.scale.x / ig.system.scale;
      this._scale.y = this.scale.y / ig.system.scale;
      this.offset.x = this._offset.x * this._scale.x;
      this.offset.y = this._offset.y * this._scale.y;
      this.size.x = this._size.x * this._scale.x;
      this.size.y = this._size.y * this._scale.y;
      this.pos.x += (d - this.size.x) / 2;
      this.pos.y += (e - this.size.y) / 2
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.animation").requires("impact.impact").defines(function() {
  SpriterAnimationLooping = {
    NO_LOOPING: 0,
    LOOPING: 1
  };
  SpriterAnimation = ig.Class.extend({
    id: 0,
    name: null,
    length: 0,
    loopType: 0,
    mainLineKeys: [],
    timelines: null,
    init: function(b, c, d, e) {
      this.id = b;
      this.name = c;
      this.length = d;
      this.loopType = e;
      this.timelines = new SpriterIdNameMap
    },
    addMainLineKey: function(b) {
      this.mainLineKeys.push(b)
    },
    addTimeline: function(b) {
      this.timelines.add(b, b.id, b.name)
    },
    getTimelineById: function(b) {
      return this.timelines.getById(b)
    },
    getTimelineByName: function(b) {
      return this.timelines.getByName(b)
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.timeline-key").requires("impact.impact").defines(function() {
  SpriterTimelineKey = ig.Class.extend({
    id: 0,
    time: 0,
    spin: 0,
    curveType: 0,
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    init: function(b, c, d) {
      this.id = b;
      this.time = c;
      this.spin = d;
      this.setCurve(SpriterCurveType.LINEAR)
    },
    setCurve: function(b, c, d, e, f) {
      void 0 === b && (b = SpriterCurveType.LINEAR);
      void 0 === c && (c = 0);
      void 0 === d && (d = 0);
      void 0 === e && (e = 0);
      void 0 === f && (f = 0);
      this.curveType = b;
      this.c1 = c;
      this.c2 = d;
      this.c3 = e;
      this.c4 = f
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.spatial-timeline-key").requires("plugins.spriter.structure.timeline-key").defines(function() {
  SpriterSpatialTimelineKey = SpriterTimelineKey.extend({
    info: null,
    init: function(b, c, d) {
      this.parent(b, c, d);
      this.info = new SpriterSpatialInfo
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.bone-timeline-key").requires("plugins.spriter.structure.spatial-timeline-key").defines(function() {
  SpriterBoneTimelineKey = SpriterSpatialTimelineKey.extend({
    init: function(b, c, d) {
      this.parent(b, c, d)
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.curve-type").requires("impact.impact").defines(function() {
  SpriterCurveType = {
    LINEAR: 0,
    INSTANT: 1,
    QUADRATIC: 2,
    CUBIC: 3,
    getCurveTypeForName: function(b) {
      if ("linear" === b) return SpriterCurveType.LINEAR;
      if ("instant" === b) return SpriterCurveType.INSTANT;
      if ("quadratic" === b) return SpriterCurveType.QUADRATIC;
      if ("cubic" === b) return SpriterCurveType.CUBIC;
      console.warn("Unknown curve type: " + b);
      return SpriterCurveType.LINEAR
    }
  }
});
ig.baked = !0;
ig.module("plugins.spriter.structure.entity").requires("impact.impact").defines(function() {
  SpriterEntity = ig.Class.extend({
    id: 0,
    name: "",
    objectInfos: null,
    animations: null,
    init: function(b, c) {
      this.id = b;
      this.name = c;
      this.objectInfos = new SpriterIdNameMap;
      this.animations = new SpriterIdNameMap
    },
    addObjectInfo: function(b) {
      this.objectInfos.add(b, b.id, b.name)
    },
    getObjectInfoById: function(b) {
      return this.objectInfos.getById(b)
    },
    getObjectInfoByName: function(b) {
      return this.objectInfos.getByName(b)
    },
    addAnimation: function(b) {
      this.animations.add(b, b.id, b.name)
    },
    getAnimationById: function(b) {
      return this.animations.getById(b)
    },
    getAnimationByName: function(b) {
      return this.animations.getByName(b)
    },
    getAnimationsCount: function() {
      return this.animations.length
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.file").requires("impact.impact").defines(function() {
  SpriterFile = ig.Class.extend({
    id: 0,
    name: "",
    anchorX: 0,
    anchorY: 0,
    init: function(b, c, d, e) {
      this.id = b;
      this.name = c;
      this.anchorX = d;
      this.anchorY = e
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.folder").requires("impact.impact").defines(function() {
  SpriterFolder = ig.Class.extend({
    id: 0,
    name: "",
    files: null,
    init: function(b, c) {
      this.id = b;
      this.name = c;
      this.files = new SpriterIdNameMap
    },
    addFile: function(b) {
      this.files.add(b, b.id, b.name)
    },
    getFileById: function(b) {
      return this.files.getById(b)
    },
    getFileByName: function(b) {
      return this.files.getByName(b)
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.main-line-key").requires("impact.impact").defines(function() {
  SpriterMainLineKey = ig.Class.extend({
    time: 0,
    boneRefs: [],
    objectRefs: [],
    init: function(b) {
      this.time = b
    },
    addBoneRef: function(b) {
      this.boneRefs.push(b)
    },
    addObjectRef: function(b) {
      this.objectRefs.push(b)
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.object-info").requires("impact.impact").defines(function() {
  SpriterObjectInfo = ig.Class.extend({
    id: 0,
    type: 0,
    name: "",
    width: 0,
    height: 0,
    init: function(b, c, d, e, f) {
      this.id = b;
      this.type = d;
      this.name = c;
      this.width = e;
      this.height = f
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.object-timeline-key").requires("plugins.spriter.structure.spatial-timeline-key").defines(function() {
  SpriterObjectTimelineKey = SpriterSpatialTimelineKey.extend({
    folder: 0,
    file: 0,
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    setFolderAndFile: function(b, c) {
      this.folder = b;
      this.file = c
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.object-type").requires("impact.impact").defines(function() {
  SpriterObjectType = {
    SPRITE: 0,
    BONE: 1,
    getObjectTypeForName: function(b) {
      if ("sprite" === b) return SpriterObjectType.SPRITE;
      if ("bone" === b) return SpriterObjectType.BONE
    }
  }
});
ig.baked = !0;
ig.module("plugins.spriter.structure.ref").requires("impact.impact").defines(function() {
  SpriterRef = ig.Class.extend({
    id: 0,
    parentId: 0,
    timeline: 0,
    key: 0,
    z: 0,
    init: function(b, c, d, e, f) {
      this.id = b;
      this.parentId = c;
      this.timeline = d;
      this.key = e;
      this.z = f
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.spatial-info").requires("impact.impact").defines(function() {
  SpriterSpatialInfo = ig.Class.extend({
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    pivotX: 0,
    pivotY: 0,
    alpha: 1,
    angle: 0
  })
});
ig.baked = !0;
ig.module("plugins.spriter.structure.timeline").requires("impact.impact").defines(function() {
  SpriterTimeline = ig.Class.extend({
    id: 0,
    name: "",
    type: 0,
    objectRef: 0,
    keys: [],
    init: function(b, c, d, e) {
      this.id = b;
      this.name = c;
      this.type = d;
      this.objectRef = e
    },
    addKey: function(b) {
      this.keys.push(b)
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.id-name-map").requires("impact.impact").defines(function() {
  SpriterIdNameMap = ig.Class.extend({
    items: [],
    itemNames: [],
    add: function(b, c, d) {
      void 0 === c && (c = this.items.length);
      if (void 0 === d || null === d) d = "item_" + c;
      this.items[c] = b;
      this.itemNames[d] = c
    },
    getById: function(b) {
      return this.items[b]
    },
    getByName: function(b) {
      return this.getById(this.itemNames[b])
    },
    getLength: function() {
      return this.items.length
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.loader").requires("impact.impact").defines(function() {
  SpriterLoader = ig.Class.extend({
    spriter: null,
    getFileNameWithoutExtension: function(b) {
      return b.split("\\").pop().split("/").pop().split(".")[0]
    },
    getDirectoryPath: function(b) {
      b = b.split("\\").pop().split("/");
      b.pop();
      return b.join("/") + "/"
    },
    parseInt: function(b, c, d) {
      void 0 === d && (d = 0);
      b = b.getAttribute(c);
      return null !== b ? parseInt(b) : d
    },
    parseFloat: function(b, c, d) {
      void 0 === d && (d = 0);
      b = b.getAttribute(c);
      return null !== b ? parseFloat(b) : d
    },
    parseString: function(b, c, d) {
      void 0 === d && (d = "");
      b = b.getAttribute(c);
      return null !== b ? b: d
    },
    load: function(b) {
      var c = $.parseXML(b.data);
      this.spriter = new Spriter;
      this.spriter.path = this.getDirectoryPath(b.path);
      b = c.getElementsByTagName("folder");
      this.loadFolders(this.spriter, b);
      c = c.getElementsByTagName("entity");
      this.loadEntities(this.spriter, c);
      return this.spriter
    },
    loadFolders: function(b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c.item(d),
        f = new SpriterFolder(this.parseInt(e, "id"), e.getAttribute("name")),
        e = e.getElementsByTagName("file");
        this.loadFiles(f, e);
        b.addFolder(f)
      }
    },
    loadFiles: function(b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d],
        e = new SpriterFile(this.parseInt(e, "id"), this.getFileNameWithoutExtension(e.getAttribute("name")), this.parseFloat(e, "pivot_x"), 1 - this.parseFloat(e, "pivot_y"));
        b.addFile(e);
        new ig.Image(this.spriter.path + b.name + "/" + e.name + ".png")
      }
    },
    loadEntities: function(b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c.item(d),
        f = new SpriterEntity(this.parseInt(e, "id"), e.getAttribute("name")),
        g = e.getElementsByTagName("obj_info");
        this.loadBones(f, g);
        e = e.getElementsByTagName("animation");
        this.loadAnimations(f, e);
        b.addEntity(f)
      }
    },
    loadBones: function(b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c.item(d),
        e = new SpriterObjectInfo(d, e.getAttribute("name"), SpriterObjectType.getObjectTypeForName(e.getAttribute("type")), this.parseFloat(e, "w"), this.parseFloat(e, "h"));
        b.addObjectInfo(e)
      }
    },
    loadAnimations: function(b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c.item(d),
        f = new SpriterAnimation(this.parseInt(e, "id"), e.getAttribute("name"), this.parseFloat(e, "length"), "true" === this.parseString(e, "looping", "true") ? SpriterAnimationLooping.LOOPING: SpriterAnimationLooping.NO_LOOPING),
        g = e.getElementsByTagName("mainline")[0].getElementsByTagName("key");
        this.loadMainLineKeys(f, g);
        e = e.getElementsByTagName("timeline");
        this.loadTimelines(f, e);
        b.addAnimation(f)
      }
    },
    loadMainLineKeys: function(b, c) {
      for (var d = 0; d < c.length; d++) {
        for (var e = c.item(d), f = new SpriterMainLineKey(this.parseFloat(e, "time")), g = e.getElementsByTagName("bone_ref"), n = 0; n < g.length; n++) f.addBoneRef(this.loadRef(g.item(n)));
        e = e.getElementsByTagName("object_ref");
        for (g = 0; g < e.length; g++) f.addObjectRef(this.loadRef(e.item(g)));
        b.addMainLineKey(f)
      }
    },
    loadRef: function(b) {
      return new SpriterRef(this.parseInt(b, "id"), this.parseInt(b, "parent", -1), this.parseInt(b, "timeline"), this.parseInt(b, "key"), this.parseInt(b, "z_index"))
    },
    loadTimelines: function(b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c.item(d),
        f = new SpriterTimeline(this.parseInt(e, "id"), e.getAttribute("name"), "bone" === e.getAttribute("object_type") ? SpriterObjectType.BONE: SpriterObjectType.SPRITE, this.parseInt(e, "obj", -1)),
        e = e.getElementsByTagName("key");
        this.loadTimelineKeys(f, e);
        b.addTimeline(f)
      }
    },
    loadTimelineKeys: function(b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c.item(d),
        f = null,
        g = e.firstElementChild,
        n = this.parseInt(e, "time"),
        m = this.parseInt(e, "spin", 1),
        l = !1;
        "bone" === g.tagName ? f = new SpriterBoneTimelineKey(d, n, m) : "object" === g.tagName ? (f = new SpriterObjectTimelineKey(d, n, m), l = !0) : console.warn("Unknown key type: " + g.tagName);
        n = this.parseString(e, "curve_type", "linear");
        "linear" !== n && f.setCurve(SpriterCurveType.getCurveTypeForName(n), this.parseFloat(e, "c1", 0), this.parseFloat(e, "c2", 0), this.parseFloat(e, "c3", 0), this.parseFloat(e, "c4", 0));
        e = f.info;
        e.x = this.parseFloat(g, "x");
        e.y = -this.parseFloat(g, "y");
        e.scaleX = this.parseFloat(g, "scale_x", 1);
        e.scaleY = this.parseFloat(g, "scale_y", 1);
        e.angle = 360 - this.parseFloat(g, "angle");
        e.alpha = this.parseFloat(g, "a", 1);
        l && (l = this.parseInt(g, "folder"), n = this.parseInt(g, "file"), f.setFolderAndFile(l, n), l = this.spriter.getFolderById(l).getFileById(n), e.pivotX = this.parseFloat(g, "pivot_x", l.anchorX), e.pivotY = this.parseFloat(g, "pivot_y", l.anchorY));
        b.addKey(f)
      }
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.scml").requires("impact.impact").defines(function() {
  SpriterScml = ig.Class.extend({
    data: null,
    spriter: null,
    loaded: !1,
    failed: !1,
    loadCallback: null,
    path: "",
    staticInstantiate: function(b) {
      return SpriterScml.cache[b] || null
    },
    init: function(b) {
      this.path = b;
      this.load()
    },
    load: function(b) {
      this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, $.ajax(ig.prefix + this.path + ig.nocache, {
        dataType: "text",
        success: function(c) {
          this.loaded = !0;
          this.data = c;
          this.spriter = (new SpriterLoader).load(this);
          this.loadCallback && b(this.path, !0)
        }.bind(this),
        error: function() {
          this.failed = !0;
          this.loadCallback && this.loadCallback(this.path, !1)
        }.bind(this)
      })) : ig.addResource(this), SpriterScml.cache[this.path] = this)
    }
  });
  SpriterScml.cache = {}
});
ig.baked = !0;
ig.module("plugins.spriter.spriter-bone").requires("impact.impact").defines(function() {
  SpriterBone = ig.Class.extend({
    UPDATE_X: 1,
    UPDATE_Y: 2,
    UPDATE_SCALE_X: 4,
    UPDATE_SCALE_Y: 8,
    UPDATE_PIVOT_X: 16,
    UPDATE_PIVOT_Y: 32,
    UPDATE_ANGLE: 64,
    UPDATE_ALPHA: 128,
    on: !1,
    parentId: 0,
    timelineKey: -1,
    key: null,
    timeFrom: 0,
    timeTo: 0,
    from: null,
    to: null,
    transformed: null,
    updateMask: 0,
    init: function() {
      this.transformed = new SpriterSpatialInfo
    },
    setOn: function(b) {
      this.on = b
    },
    setKey: function(b, c, d) {
      this.timelineKey = d;
      var e = b.getTimelineById(c).keys;
      c = e[d];
      var f = (d + 1) % e.length;
      0 === f && b.loopType === SpriterAnimationLooping.NO_LOOPING && (f = d);
      d = e[f];
      this.key = c;
      this.timeFrom = c.time;
      this.timeTo = d.time;
      this.timeTo < this.timeFrom && (this.timeTo = b.length);
      this.from = c.info;
      this.to = d.info;
      this.updateMask = 0;
      1E-6 < Math.abs(this.from.x - this.to.x) && (this.updateMask += this.UPDATE_X);
      1E-6 < Math.abs(this.from.y - this.to.y) && (this.updateMask += this.UPDATE_Y);
      1E-6 < Math.abs(this.from.scaleX - this.to.scaleX) && (this.updateMask += this.UPDATE_SCALE_X);
      1E-6 < Math.abs(this.from.scaleY - this.to.scaleY) && (this.updateMask += this.UPDATE_SCALE_Y);
      1E-6 < Math.abs(this.from.pivotX - this.to.pivotX) && (this.updateMask += this.UPDATE_PIVOT_X);
      1E-6 < Math.abs(this.from.pivotY - this.to.pivotY) && (this.updateMask += this.UPDATE_PIVOT_Y);
      1E-6 < Math.abs(this.from.alpha - this.to.alpha) && (this.updateMask += this.UPDATE_ALPHA);
      1E-6 < Math.abs(this.from.angle - this.to.angle) && (this.updateMask += this.UPDATE_ANGLE);
      this.transformed.x = this.from.x;
      this.transformed.y = this.from.y;
      this.transformed.scaleX = this.from.scaleX;
      this.transformed.scaleY = this.from.scaleY;
      this.transformed.pivotX = this.from.pivotX;
      this.transformed.pivotY = this.from.pivotY;
      this.transformed.angle = this.from.angle;
      this.transformed.alpha = this.from.alpha
    },
    tween: function(b) {
      b = 0 < this.updateMask ? this.getTweenTime(b) : 0;
      this.transformed.x = 0 < (this.updateMask & this.UPDATE_X) ? this.linear(this.from.x, this.to.x, b) : this.from.x;
      this.transformed.y = 0 < (this.updateMask & this.UPDATE_Y) ? this.linear(this.from.y, this.to.y, b) : this.from.y;
      this.transformed.scaleX = 0 < (this.updateMask & this.UPDATE_SCALE_X) ? this.linear(this.from.scaleX, this.to.scaleX, b) : this.from.scaleX;
      this.transformed.scaleY = 0 < (this.updateMask & this.UPDATE_SCALE_Y) ? this.linear(this.from.scaleY, this.to.scaleY, b) : this.from.scaleY;
      this.transformed.pivotX = 0 < (this.updateMask & this.UPDATE_PIVOT_X) ? this.linear(this.from.pivotX, this.to.pivotX, b) : this.from.pivotX;
      this.transformed.pivotY = 0 < (this.updateMask & this.UPDATE_PIVOT_Y) ? this.linear(this.from.pivotY, this.to.pivotY, b) : this.from.pivotY;
      this.transformed.alpha = 0 < (this.updateMask & this.UPDATE_ALPHA) ? this.linear(this.from.alpha, this.to.alpha, b) : this.from.alpha;
      this.transformed.angle = 0 < (this.updateMask & this.UPDATE_ANGLE) ? this.angleLinear(this.from.angle, this.to.angle, this.key.spin, b) : this.from.angle
    },
    update: function(b) {
      this.transformed.angle *= this.sign(b.scaleX) * this.sign(b.scaleY);
      this.transformed.angle += b.angle;
      this.transformed.scaleX *= b.scaleX;
      this.transformed.scaleY *= b.scaleY;
      this.scalePosition(b.scaleX, b.scaleY);
      this.rotatePosition(b.angle);
      this.translatePosition(b.x, b.y);
      this.transformed.alpha *= b.alpha
    },
    scalePosition: function(b, c) {
      this.transformed.x *= b;
      this.transformed.y *= c
    },
    rotatePosition: function(b) {
      var c = this.transformed.x,
      d = this.transformed.y;
      if (0 !== c || 0 !== d) {
        var e = b * (Math.PI / 180);
        b = Math.cos(e);
        e = Math.sin(e);
        this.transformed.x = c * b - d * e;
        this.transformed.y = c * e + d * b
      }
    },
    translatePosition: function(b, c) {
      this.transformed.x += b;
      this.transformed.y += c
    },
    getTweenTime: function(b) {
      if (this.key.curveType === SpriterCurveType.INSTANT) return 0;
      b = this.clamp((b - this.timeFrom) / (this.timeTo - this.timeFrom), 0, 1);
      switch (this.key.curveType) {
      case SpriterCurveType.LINEAR:
        return b;
      case SpriterCurveType.QUADRATIC:
        return this.quadratic(0, this.key.c1, 1, b);
      case SpriterCurveType.CUBIC:
        return this.cubic(0, this.key.c1, this.key.c2, 1, b)
      }
      return 0
    },
    linear: function(b, c, d) {
      return (c - b) * d + b
    },
    quadratic: function(b, c, d, e) {
      return this.linear(this.linear(b, c, e), this.linear(c, d, e), e)
    },
    cubic: function(b, c, d, e, f) {
      return this.linear(this.quadratic(b, c, d, f), this.quadratic(c, d, e, f), f)
    },
    angleLinear: function(b, c, d, e) {
      if (0 === d) return b;
      0 < d ? c > b && (c -= 360) : c < b && (c += 360);
      return this.linear(b, c, e)
    },
    sign: function(b) {
      return 0 > b ? -1 : 0 < b ? 1 : 0
    },
    clamp: function(b, c, d) {
      return b < c ? c: d < b ? d: b
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.spriter-display").requires("impact.entity").defines(function() {
  SpriterDisplay = ig.Entity.extend({
    scml: null,
    spriter: null,
    entityName: "",
    currentAnimationName: "",
    animation: null,
    animationSpeed: 0,
    bones: [],
    objects: [],
    time: 0,
    nextTime: 0,
    keyIndex: 0,
    root: null,
    pause: !1,
    finished: !1,
    init: function(b, c, d) {
      this.parent(b, c, d);
      null == this.scml ? console.error("scml is null, please provide one") : (this.spriter = this.scml.spriter, this.entityName = this.spriter.getEntityById(0).name, this.root = new SpriterSpatialInfo, this.setAnimationSpeedPercent(100), this.setAnimationById(0))
    },
    getAnimationCount: function() {
      return this.spriter.getEntityByName(this.entityName).animationsCount
    },
    setAnimationSpeedPercent: function(b) {
      void 0 === b && (b = 100);
      this.animationSpeed = b / 100
    },
    setAnimationById: function(b, c) {
      var d = this.spriter.getEntityByName(this.entityName).getAnimationById(b);
      void 0 === d || null === d ? console.warn("Animation " + b + " for entity " + this.entityName + " does not exist!") : this.setAnimation(d, c)
    },
    setAnimationByName: function(b, c) {
      var d = this.spriter.getEntityByName(this.entityName).getAnimationByName(b);
      void 0 === d || null === d ? console.warn("Animation " + b + " for entity " + this.entityName + " does not exist!") : this.setAnimation(d, c)
    },
    setAnimation: function(b, c) {
      void 0 === c && (c = !0);
      this.animation = b;
      this.finished = !1;
      if (c || this.currentAnimationName != b.name) this.clearTime(),
      this.currentAnimationName = b.name,
      this.loadKeys(0, !0)
    },
    clearTime: function() {
      this.time = 0;
      this.keyIndex = -1
    },
    getNextMainLineKeyTime: function(b) {
      var c = this.animation.mainLineKeys,
      d = (this.keyIndex + 1) % c.length;
      this.nextTime = 0 !== d ? c[d].time: this.animation.length;
      0 !== d && this.nextTime < b && console.log("Game is lagging or keys are too close to each other...")
    },
    setBones: function(b, c) {
      void 0 === c && (c = !1);
      for (var d = 0; d < this.bones.length; d++) void 0 !== this.bones[d] && this.bones[d].setOn(!1);
      for (d = 0; d < b.length; d++) {
        var e = b[d];
        void 0 === this.bones[e.id] && (this.bones[e.id] = new SpriterBone);
        var f = this.bones[e.id];
        f.setOn(!0);
        f.parentId = e.parentId; (f.timelineKey != e.key || c) && f.setKey(this.animation, e.timeline, e.key)
      }
    },
    setObjects: function(b, c) {
      void 0 === c && (c = !1);
      for (var d = 0; d < this.objects.length; d++) void 0 !== this.objects[d] && this.objects[d].setOn(!1);
      for (d = 0; d < b.length; d++) {
        var e = b[d],
        f = null;
        void 0 === this.objects[e.id] ? (f = new SpriterObject(this.spriter), this.objects[e.id] = f) : f = this.objects[e.id];
        f.setOn(!0);
        f.parentId = e.parentId; (f.timelineKey != e.key || c) && f.setKey(this.animation, e.timeline, e.key)
      }
    },
    loadKeys: function(b, c) {
      void 0 === c && (c = !1);
      this.setBones(this.animation.mainLineKeys[b].boneRefs, c);
      this.setObjects(this.animation.mainLineKeys[b].objectRefs, c)
    },
    update: function() {
      this.parent()
    },
    draw: function() {
      this.parent();
      var b = ig.system,
      c = b.context;
      c.save();
      c.translate(b.getDrawPos(this.pos.x), b.getDrawPos(this.pos.y)); (1 != this.scale.x || 1 != this.scale.y) && c.scale(this.scale.x, this.scale.y);
      this.updateAnimation();
      c.restore()
    },
    updateAnimation: function() {
      if ( - 1 === this.keyIndex || this.time > this.nextTime) {
        this.keyIndex = (this.keyIndex + 1) % this.animation.mainLineKeys.length;
        if (this.time > this.animation.length) {
          if (this.animation.loopType === SpriterAnimationLooping.NO_LOOPING) {
            for (; 0 !== this.keyIndex;) this.getNextMainLineKeyTime(this.time),
            this.loadKeys(this.keyIndex),
            this.updateCharacter(),
            this.keyIndex = (this.keyIndex + 1) % this.animation.mainLineKeys.length;
            this.finished = !0;
            return
          }
          this.keyIndex = this.time = 0
        }
        this.getNextMainLineKeyTime(this.time);
        this.loadKeys(this.keyIndex)
      }
      this.updateCharacter(); ! this.pause && !this.finished && (this.time += 1E3 * ig.system.tick * this.animationSpeed)
    },
    updateCharacter: function() {
      for (var b = 0; b < this.bones.length; b++) {
        var c = this.bones[b];
        if (c.on) {
          var d = -1 === c.parentId ? this.root: this.bones[c.parentId].transformed;
          c.tween(this.time);
          c.update(d)
        }
      }
      for (b = 0; b < this.objects.length; b++) c = this.objects[b],
      c.on && (d = -1 === c.parentId ? this.root: this.bones[c.parentId].transformed, c.tween(this.time), c.update(d))
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.spriter-object").requires("plugins.spriter.spriter-bone").defines(function() {
  SpriterObject = SpriterBone.extend({
    spriter: null,
    sprite: null,
    image: null,
    degToRad: Math.PI / 180,
    init: function(b) {
      this.parent();
      this.spriter = b
    },
    setOn: function(b) {
      this.parent(b)
    },
    setKey: function(b, c, d) {
      this.parent(b, c, d);
      c = this.key;
      b = this.spriter.getFolderById(c.folder);
      c = b.getFileById(c.file);
      b = this.spriter.path + b.name + "/" + c.name + ".png";
      if (null == this.image || this.image.path != b) this.image = new ig.Image(b)
    },
    update: function(b) {
      this.parent(b);
      this.updateSprite()
    },
    updateSprite: function() {
      var b = this.transformed,
      c = this.image;
      if (this.on && c) {
        var d = ig.system,
        e = d.context,
        f = c.width,
        g = c.height;
        e.save();
        e.translate(d.getDrawPos(b.x), d.getDrawPos(b.y)); (1 != b.scaleX || 1 != b.scaleY) && e.scale(b.scaleX, b.scaleY);
        1 > b.alpha && (e.globalAlpha = b.alpha);
        e.rotate(b.angle * this.degToRad);
        e.drawImage(c.data, 0, 0, f, g, -f * b.pivotX, -g * b.pivotY, f, g);
        e.restore();
        1 > b.alpha && (e.globalAlpha = 1)
      }
    }
  })
});
ig.baked = !0;
ig.module("plugins.spriter.spriter").requires("impact.impact", "plugins.spriter.structure.animation", "plugins.spriter.structure.bone-timeline-key", "plugins.spriter.structure.curve-type", "plugins.spriter.structure.entity", "plugins.spriter.structure.file", "plugins.spriter.structure.folder", "plugins.spriter.structure.main-line-key", "plugins.spriter.structure.object-info", "plugins.spriter.structure.object-timeline-key", "plugins.spriter.structure.object-type", "plugins.spriter.structure.ref", "plugins.spriter.structure.spatial-info", "plugins.spriter.structure.spatial-timeline-key", "plugins.spriter.structure.timeline-key", "plugins.spriter.structure.timeline", "plugins.spriter.id-name-map", "plugins.spriter.loader", "plugins.spriter.scml", "plugins.spriter.spriter-bone", "plugins.spriter.spriter-display", "plugins.spriter.spriter-object").defines(function() {
  Spriter = ig.Class.extend({
    folders: null,
    entities: null,
    path: "",
    init: function() {
      this.folders = new SpriterIdNameMap;
      this.entities = new SpriterIdNameMap
    },
    addFolder: function(b) {
      this.folders.add(b, b.id, b.name)
    },
    getFolderById: function(b) {
      return this.folders.getById(b)
    },
    getFolderByName: function(b) {
      return this.folders.getByName(b)
    },
    addEntity: function(b) {
      this.entities.add(b, b.id, b.name)
    },
    getEntityById: function(b) {
      return this.entities.getById(b)
    },
    getEntityByName: function(b) {
      return this.entities.getByName(b)
    }
  })
});
ig.baked = !0;
ig.module("plugins.signal").requires("impact.impact").defines(function() {
  ig.Signal = ig.Class.extend({
    signalListeners: null,
    id: 0,
    init: function() {
      this.id = ++ig.Signal._lastId;
      this.signalListeners = []
    },
    addOnce: function(b, c) {
      this.signalListeners.push({
        signalListener: b,
        signalContext: c,
        isOnce: !0
      })
    },
    add: function(b, c) {
      this.signalListeners.push({
        signalListener: b,
        signalContext: c,
        isOnce: !1
      })
    },
    dispatch: function(b) {
      b || (b = []);
      for (var c = 0; c < this.signalListeners.length;) obj = this.signalListeners[c],
      obj.signalListener.apply(obj.signalContext, b),
      obj.isOnce ? this.signalListeners.splice(c, 1) : c++
    }
  });
  ig.Signal._lastId = 0
});
ig.baked = !0;
ig.module("plugins.multitouch").requires("impact.game", "impact.input").defines(function() {
  var b = function(b, d, e, f) {
    this.x = b;
    this.y = d;
    this.id = e;
    this.state = f
  };
  ig.Input.inject({
    touches: {},
    delayedTouchUp: [],
    fingerCount: [],
    initMouse: function() {
      if (!this.isUsingMouse) if (this.isUsingMouse = !0, "undefined" != typeof ios && ios) this._touchInput = new native.TouchInput,
      this._touchInput.touchStart(this.multitouchstart.bind(this)),
      this._touchInput.touchEnd(this.multitouchend.bind(this)),
      this._touchInput.touchMove(this.multitouchmove.bind(this));
      else {
        var b = this.mousewheel.bind(this);
        ig.system.canvas.addEventListener("mousewheel", b, !1);
        ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
        ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
        ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
        ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
        ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
        ig.system.canvas.addEventListener("touchstart", this.touchEvent.bind(this), !1);
        ig.system.canvas.addEventListener("touchmove", this.touchEvent.bind(this), !1);
        ig.system.canvas.addEventListener("touchend", this.touchEvent.bind(this), !1);
        ig.system.canvas.addEventListener("touchcancel", this.touchEvent.bind(this), !1)
      }
    },
    keydown: function(c) {
      this.parent(c);
      "mousedown" == c.type && !this.touches.mouse && (this.touches.mouse = new b(this.mouse.x, this.mouse.y, "mouse", "down"))
    },
    keyup: function(b) {
      this.parent(b);
      if ("mouseup" == b.type && !this.actions[this.bindings[2 == b.button ? ig.KEY.MOUSE1: ig.KEY.MOUSE2]] && this.touches.mouse) this.touches.mouse.state = "up",
      this.touches.mouse.x = this.mouse.x,
      this.touches.mouse.y = this.mouse.y,
      this.delayedTouchUp.push("mouse")
    },
    mousemove: function(b) {
      this.parent(b);
      this.state("click") && this.touches.mouse && (this.touches.mouse.x = this.mouse.x, this.touches.mouse.y = this.mouse.y)
    },
    clearPressed: function() {
      this.parent();
      this.ent = ig.game.entities;
      for (var b = this.delayedTouchUp.length; b--;) delete this.touches[ig.input.delayedTouchUp[b]];
      this.delayedTouchUp = [];
      this.multitouchState()
    },
    touchedEntity: function() {
      for (var b = 0; b < this.ent.length; b++) for (var d in this.touches) {
        var e = this.touches[d].x,
        f = this.touches[d].y;
        if (e > this.ent[b].pos.x && e < this.ent[b].pos.x + this.ent[b].size.x && f > this.ent[b].pos.y && f < this.ent[b].pos.y + this.ent[b].size.y) return this.ent[b].clickedFinger = this.touches[d],
        this.ent[b].statedFinger = this.touches[d],
        this.ent[b];
        this.ent[b].statedFinger == this.touches[d] && (this.ent[b].clickedFinger = null, this.ent[b].statedFinger = null, this.ent[b].isClicked = !1)
      }
    },
    touchEvent: function(b) {
      b.stopPropagation();
      b.preventDefault();
      var d = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
      e = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
      d = ig.system.scale * (d / ig.system.realWidth),
      e = ig.system.scale * (e / ig.system.realHeight),
      f = {
        left: 0,
        top: 0
      };
      ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
      for (var g = b.changedTouches.length; g--;) {
        var n = b.changedTouches[g];
        this["multi" + b.type]((n.clientX - f.left) / d, (n.clientY - f.top) / e, n.identifier)
      }
    },
    multitouchState: function() {
      for (var b = 0; b < this.ent.length; b++) {
        for (var d in this.touches) {
          var e = this.touches[d].x,
          f = this.touches[d].y;
          e > this.ent[b].pos.x && e < this.ent[b].pos.x + this.ent[b].size.x && f > this.ent[b].pos.y && f < this.ent[b].pos.y + this.ent[b].size.y ? (this.ent[b].clickedFinger = this.touches[d], this.ent[b].statedFinger = this.touches[d], "function" == typeof this.ent[b].clicking && this.ent[b].clicking()) : this.ent[b].statedFinger == this.touches[d] && (this.ent[b].clickedFinger = null, this.ent[b].statedFinger = null, this.ent[b].isClicked = !1)
        }
        this.fingerCount.length || (null != this.ent[b].clickedFinger && (this.ent[b].clickedFinger = null), null != this.ent[b].statedFinger && (this.ent[b].statedFinger = null), this.ent[b].isClicked = !1)
      }
    },
    multitouchstart: function(c, d, e) {
      var f = this.bindings[ig.KEY.MOUSE1];
      f && (this.actions[f] = !0, this.presses[f] = !0);
      this.touches[e] = new b(c + ig.game.screen.x, d + ig.game.screen.y, e, "down");
      this.fingerCount.push(e);
      this.touches[e].pressed = !0;
      for (c = 0; c < this.ent.length; c++) for (var g in this.touches) if (d = this.touches[g].x, e = this.touches[g].y, d > this.ent[c].pos.x && (d < this.ent[c].pos.x + this.ent[c].size.x && e > this.ent[c].pos.y && e < this.ent[c].pos.y + this.ent[c].size.y) && (this.ent[c].clickedFinger = this.touches[g], "function" == typeof this.ent[c].clicked)) {
        this.ent[c].clicked();
        break
      }
    },
    multitouchmove: function(b, d, e) {
      this.touches[e] && (this.touches[e].x = b + ig.game.screen.x, this.touches[e].y = d + ig.game.screen.y)
    },
    multitouchend: function(b, d, e) {
      this.touches[e] && (this.touches[e].state = "up", this.delayedTouchUp.push(e), (b = this.bindings[ig.KEY.MOUSE1]) && this._isEmpty(this.touches) && (this.delayedKeyup[b] = !0));
      this.fingerCount.pop();
      this.touches[e].released = !0;
      for (b = 0; b < this.ent.length; b++) for (var f in this.touches) {
        d = this.touches[f].x;
        var g = this.touches[f].y;
        d > this.ent[b].pos.x && d < this.ent[b].pos.x + this.ent[b].size.x && g > this.ent[b].pos.y && g < this.ent[b].pos.y + this.ent[b].size.y && this.ent[b].clickedFinger == this.touches[e] && "function" == typeof this.ent[b].released && this.ent[b].released()
      }
    },
    multitouchcancel: function(b, d, e) {
      this.multitouchend(b, d, e)
    },
    _isEmpty: function(b) {
      for (var d in b) return ! 1;
      return ! 0
    }
  })
});
ig.baked = !0;
ig.module("plugins.fullscreen").requires("impact.entity").defines(function() {
  ig.Fullscreen = {
    enableFullscreenButton: !0,
    _isEnabled: "notChecked",
    isEnabled: function() {
      "notChecked" == this._isEnabled && (this._isEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled ? !0 : !1);
      return this._isEnabled
    },
    isFullscreen: function() {
      return ig.Fullscreen.isEnabled() && (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) ? !0 : !1
    },
    toggleFullscreen: function() {
      ig.Fullscreen.isFullscreen() ? ig.Fullscreen.exitFullscreen() : ig.Fullscreen.requestFullscreen();
      ig.sizeHandler.orientationDelayHandler()
    },
    requestFullscreen: function() {
      var b = document.documentElement;
      b.requestFullscreen ? b.requestFullscreen() : b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : console.log("no request fullscreen method available")
    },
    exitFullscreen: function() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : console.log("no exit fullscreen method available")
    },
    divs: {}
  };
  ig.Director.inject({
    loadLevel: function(b) {
      var c = ig.Fullscreen.divs,
      d;
      for (d in c) c = ig.domHandler.getElementById("#" + d),
      ig.domHandler.hide(c);
      return this.parent(b)
    }
  });
  ig.SizeHandler.inject({
    resize: function() {
      this.parent();
      var b = ig.Fullscreen.divs,
      c;
      for (c in b) {
        var d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y),
        e = ig.domHandler.getElementById("#" + c),
        f = b[c].entity_pos_x,
        g = b[c].entity_pos_y,
        n = b[c].width,
        m = b[c].height,
        l = ig.domHandler.getElementById("#canvas"),
        p = ig.domHandler.getOffsets(l);
        ig.ua.mobile ? (l = p.left, p = p.top, ig.sizeHandler.disableStretchToFitOnMobileFlag ? (f = Math.floor(l + f * ig.sizeHandler.scaleRatioMultiplier.x) + "px", g = Math.floor(p + g * ig.sizeHandler.scaleRatioMultiplier.y) + "px", n = Math.floor(n * ig.sizeHandler.scaleRatioMultiplier.x) + "px", m = Math.floor(m * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (f = Math.floor(f * ig.sizeHandler.sizeRatio.x) + "px", g = Math.floor(g * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(n * ig.sizeHandler.sizeRatio.x) + "px", m = Math.floor(m * ig.sizeHandler.sizeRatio.y) + "px")) : (l = p.left, p = p.top, f = Math.floor(l + f * d) + "px", g = Math.floor(p + g * d) + "px", n = Math.floor(n * d) + "px", m = Math.floor(m * d) + "px");
        ig.domHandler.css(e, {
          "float": "left",
          position: "absolute",
          left: f,
          top: g,
          width: n,
          height: m,
          "z-index": 3
        });
        b[c]["font-size"] && ig.domHandler.css(e, {
          "font-size": b[c]["font-size"] * d + "px"
        })
      }
    }
  });
  ig.FullscreenButton = ig.Entity.extend({
    enterImage: null,
    exitImage: null,
    isReady: !1,
    zIndex: 999999,
    identifier: null,
    prevPos: {
      x: 0,
      y: 0
    },
    invisImagePath: "media/graphics/misc/invisible.png",
    init: function(b, c, d) {
      this.parent(b, c, d);
      ig.Fullscreen.isEnabled() && ig.Fullscreen.enableFullscreenButton ? this.enterImage.loaded ? this.initSize() : this.enterImage.loadCallback = function() {
        this.initSize()
      }.bind(this) : this.kill()
    },
    kill: function() {
      this.parent()
    },
    destroy: function() {
      this.parent();
      console.log("destroy")
    },
    initSize: function() {
      this.size.x = this.enterImage.width;
      this.size.y = this.enterImage.height;
      this.createClickableLayer();
      this.isReady = !0
    },
    createClickableLayer: function() {
      this.identifier = "fullscreen-button-layer";
      var b = ig.domHandler.getElementById("#" + this.identifier);
      b ? (ig.domHandler.show(b), ig.domHandler.attr(b, "onclick", "ig.Fullscreen.toggleFullscreen()")) : this.createClickableOutboundLayer()
    },
    update: function(b, c) {
      b = this.pos.x;
      c = this.pos.y;
      this.isReady && !(this.prevPos.x === b && this.prevPos.y === c) && (ig.Fullscreen.divs[this.identifier] = {},
      ig.Fullscreen.divs[this.identifier].width = this.size.x, ig.Fullscreen.divs[this.identifier].height = this.size.y, ig.Fullscreen.divs[this.identifier].entity_pos_x = this.pos.x, ig.Fullscreen.divs[this.identifier].entity_pos_y = this.pos.y, this.prevPos.x = b, this.prevPos.y = c)
    },
    draw: function() {
      this.isReady && (ig.Fullscreen.isFullscreen() ? this.exitImage.draw(this.pos.x, this.pos.y) : this.enterImage.draw(this.pos.x, this.pos.y))
    },
    createClickableOutboundLayer: function() {
      var b = this.identifier,
      c = this.invisImagePath,
      d = ig.domHandler.create("div");
      ig.domHandler.attr(d, "id", b);
      ig.domHandler.attr(d, "onclick", "ig.Fullscreen.toggleFullscreen()");
      var e = ig.domHandler.create("a"),
      f = ig.domHandler.create("img");
      ig.domHandler.css(f, {
        width: "100%",
        height: "100%"
      });
      ig.domHandler.attr(f, "src", c);
      c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      if (ig.ua.mobile) {
        var g = ig.domHandler.getElementById("#canvas"),
        g = ig.domHandler.getOffsets(g),
        n = g.left,
        m = g.top;
        console.log(g.left);
        ig.sizeHandler.disableStretchToFitOnMobileFlag ? (g = Math.floor(n + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", m = Math.floor(m + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", c = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (g = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", m = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", c = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px")
      } else g = ig.domHandler.getElementById("#canvas"),
      g = ig.domHandler.getOffsets(g),
      n = g.left,
      m = g.top,
      ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (g = Math.floor(n + this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", m = Math.floor(m + this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", c = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px") : (g = Math.floor(n + this.pos.x * c) + "px", m = Math.floor(m + this.pos.y * c) + "px", n = Math.floor(this.size.x * c) + "px", c = Math.floor(this.size.y * c) + "px");
      ig.domHandler.css(d, {
        "float": "left",
        position: "absolute",
        left: g,
        top: m,
        width: n,
        height: c,
        "z-index": 3
      });
      ig.domHandler.addEvent(d, "mousemove", ig.input.mousemove.bind(ig.input), !1);
      ig.domHandler.appendChild(e, f);
      ig.domHandler.appendChild(d, e);
      ig.domHandler.appendToBody(d);
      ig.Fullscreen.divs[b] = {};
      ig.Fullscreen.divs[b].width = this.size.x;
      ig.Fullscreen.divs[b].height = this.size.y;
      ig.Fullscreen.divs[b].entity_pos_x = this.pos.x;
      ig.Fullscreen.divs[b].entity_pos_y = this.pos.y
    }
  })
});
ig.baked = !0;
ig.module("plugins.data.color-rgb").defines(function() {
  ColorRGB = function(b, c, d, e) {
    this.r = b || 0;
    this.g = c || 0;
    this.b = d || 0;
    this.a = e || 0
  };
  ColorRGB.prototype = {
    setRandomColor: function() {
      this.r = Math.round(255 * Math.random());
      this.g = Math.round(255 * Math.random());
      this.b = Math.round(255 * Math.random())
    },
    getStyle: function() {
      return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
    },
    getHex: function() {
      for (var b = this.r.toString(16), c = this.g.toString(16), d = this.b.toString(16); 2 > b.length;) b = "0" + b;
      for (; 2 > c.length;) c = "0" + c;
      for (; 2 > d.length;) d = "0" + d;
      return "#" + b + c + d
    },
    getInvertedColor: function() {
      return new ColorRGB(255 - this.r, 255 - this.g, 255 - this.b, 255 - this.a)
    },
    clone: function() {
      return new ColorRGB(this.r, this.g, this.b, this.a)
    }
  }
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
  ig.BrandingSplash = ig.Class.extend({
    init: function() {
      ig.game.spawnEntity(EntityBranding, 0, 0);
      console.log("spawn branding")
    }
  });
  EntityBranding = ig.Entity.extend({
    gravityFactor: 0,
    size: {
      x: 32,
      y: 32
    },
    splash: new ig.Image("branding/splash1.png"),
    init: function(b, c, d) {
      this.parent(b, c, d);
      320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
      this.pos.x = (ig.system.width - this.size.x) / 2;
      this.pos.y = -this.size.y - 200;
      this.endPosY = (ig.system.height - this.size.y) / 2;
      b = this.tween({
        pos: {
          y: this.endPosY
        }
      },
      0.5, {
        easing: ig.Tween.Easing.Bounce.EaseIn
      });
      c = this.tween({},
      2.5, {
        onComplete: function() {
          ig.game.director.loadLevel(ig.game.director.currentLevel)
        }
      });
      b.chain(c);
      b.start();
      this.currentAnim = this.anims.idle
    },
    createClickableLayer: function() {
      console.log("Build clickable layer");
      this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
    },
    doesClickableLayerExist: function(b) {
      for (k in dynamicClickableEntityDivs) if (k == b) return ! 0;
      return ! 1
    },
    checkClickableLayer: function(b, c, d) {
      "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
    },
    createClickableOutboundLayer: function(b, c, d, e) {
      var f = ig.$new("div");
      f.id = b;
      document.body.appendChild(f);
      f = $("#" + f.id);
      f.css("float", "left");
      f.css("position", "absolute");
      if (ig.ua.mobile) {
        var g = window.innerHeight / mobileHeight,
        n = window.innerWidth / mobileWidth;
        f.css("left", this.pos.x * n);
        f.css("top", this.pos.y * g);
        f.css("width", this.size.x * n);
        f.css("height", this.size.y * g)
      } else g = w / 2 - destW / 2,
      n = h / 2 - destH / 2,
      console.log(g, n),
      f.css("left", g + this.pos.x * multiplier),
      f.css("top", n + this.pos.y * multiplier),
      f.css("width", this.size.x * multiplier),
      f.css("height", this.size.y * multiplier);
      e ? f.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : f.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
      dynamicClickableEntityDivs[b] = {};
      dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
      dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
      dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
      dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
    },
    draw: function() {
      ig.system.context.fillStyle = "#ffffff";
      ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
      ig.system.context.fillStyle = "#000";
      ig.system.context.font = "12px Arial";
      ig.system.context.textAlign = "left";
      320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
      this.parent();
      this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
    }
  })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.gamedist").defines(function() {
  // Mock the SDK object so the rest of the game doesn't crash looking for it
  window.gdsdk = {
    showBanner: function() {},
    play: function() {}
  };
  
  ig.Gd = ig.Class.extend({
    pausedMidplay: 0,
    prevMuted: { bgm: 0, sfx: 0 },
    onAdClose: 0,
    adShowing: 0,
    isFreez: 0,
    createTestButton: function() {},
    createDiv: function() {},
    freez: function() {},
    unfreez: function() {},
    show: function(b) {
      // Instantly trigger the game-start callback instead of showing ads
      if (typeof b === "function") {
          b();
      }
    }
  });
  ig.gd = new ig.Gd();
});
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function() {
  EntityButton = ig.Entity.extend({
    collides: ig.Entity.COLLIDES.NEVER,
    type: ig.Entity.TYPE.A,
    size: new Vector2(48, 48),
    fillColor: null,
    zIndex: 95E3,
    init: function(b, c, d) {
      this.parent(b, c, d); ! ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
      b = Math.floor(256 * Math.random());
      c = Math.floor(256 * Math.random());
      d = Math.floor(256 * Math.random());
      this.fillColor = "rgba(" + b + "," + d + "," + c + ",1)"
    },
    clicked: function() {
      throw "no implementation on clicked()";
    },
    clicking: function() {
      throw "no implementation on clicking()";
    },
    released: function() {
      throw "no implementation on released()";
    }
  })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
  ClickableDivLayer = ig.Class.extend({
    pos: new Vector2(0, 0),
    size: new Vector2(0, 0),
    identifier: null,
    invisImagePath: "media/graphics/misc/invisible.png",
    init: function(b) {
      this.pos = new Vector2(b.pos.x, b.pos.y);
      this.size = new Vector2(b.size.x, b.size.y);
      var c = "more-games",
      d = "www.google.com",
      e = !1;
      b.div_layer_name && (c = b.div_layer_name);
      b.link && (d = b.link);
      b.newWindow && (e = b.newWindow);
      this.createClickableLayer(c, d, e)
    },
    createClickableLayer: function(b, c, d) {
      this.identifier = b;
      var e = ig.domHandler.getElementById("#" + b);
      e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
    },
    update: function(b, c) {
      this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {},
      ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
    },
    createClickableOutboundLayer: function(b, c, d, e) {
      var f = ig.domHandler.create("div");
      ig.domHandler.attr(f, "id", b);
      var g = ig.domHandler.create("a");
      e ? (ig.domHandler.attr(g, "href", c), ig.domHandler.attr(g, "target", "_blank")) : ig.domHandler.attr(g, "href", c);
      c = ig.domHandler.create("img");
      ig.domHandler.css(c, {
        width: "100%",
        height: "100%"
      });
      ig.domHandler.attr(c, "src", d);
      d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      if (ig.ua.mobile) {
        e = ig.domHandler.getElementById("#canvas");
        e = ig.domHandler.getOffsets(e);
        var n = e.left,
        m = e.top;
        console.log(e.left);
        ig.sizeHandler.disableStretchToFitOnMobileFlag ? (e = Math.floor(n + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", m = Math.floor(m + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (e = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", m = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px")
      } else e = ig.domHandler.getElementById("#canvas"),
      e = ig.domHandler.getOffsets(e),
      n = e.left,
      m = e.top,
      ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (e = Math.floor(n + this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", m = Math.floor(m + this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px") : (e = Math.floor(n + this.pos.x * d) + "px", m = Math.floor(m + this.pos.y * d) + "px", n = Math.floor(this.size.x * d) + "px", d = Math.floor(this.size.y * d) + "px");
      ig.domHandler.css(f, {
        "float": "left",
        position: "absolute",
        left: e,
        top: m,
        width: n,
        height: d,
        "z-index": 3
      });
      ig.domHandler.addEvent(f, "mousemove", ig.input.mousemove.bind(ig.input), !1);
      ig.domHandler.appendChild(g, c);
      ig.domHandler.appendChild(f, g);
      ig.domHandler.appendToBody(f);
      ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
      ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
      ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
      ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
      ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
    }
  })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
  EntityButtonBrandingLogo = EntityButton.extend({
    type: ig.Entity.TYPE.A,
    gravityFactor: 0,
    logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
    zIndex: 10001,
    size: {
      x: 64,
      y: 66
    },
    clickableLayer: null,
    link: null,
    newWindow: !1,
    div_layer_name: "branding-logo",
    name: "brandinglogo",
    init: function(b, c, d) {
      this.parent(b, c, d);
      if (!ig.global.wm) {
        if ("undefined" == typeof wm) if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width,
        this.size.y = _SETTINGS.Branding.Logo.Height,
        this.anims.idle = new ig.Animation(this.logo, 0, [0], !0),
        this.currentAnim = this.anims.idle,
        d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")),
        _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer = new ClickableDivLayer(this));
        else {
          this.kill();
          return
        }
        this.div_layer_name = d.div_layer_name ? d.div_layer_name: "branding-logo"
      }
    },
    show: function() {
      var b = ig.domHandler.getElementById("#" + this.div_layer_name);
      ig.domHandler.show(b)
    },
    hide: function() {
      var b = ig.domHandler.getElementById("#" + this.div_layer_name);
      ig.domHandler.hide(b)
    },
    clicked: function() {},
    clicking: function() {},
    released: function() {}
  })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
  EntityBrandingLogoPlaceholder = ig.Entity.extend({
    gravityFactor: 0,
    size: {
      x: 32,
      y: 32
    },
    _wmDrawBox: !0,
    _wmBoxColor: "rgba(0, 0, 255, 0.7)",
    init: function(b, c, d) {
      this.parent(b, c, d);
      if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
      case "true":
        console.log("centralize true");
        centralize = !0;
        break;
      case "false":
        console.log("centralize false");
        centralize = !1;
        break;
      default:
        console.log("default ... centralize false"),
        centralize = !1
      } else b = "branding-logo",
      centralize = !1;
      if ("undefined" == typeof wm) {
        if (_SETTINGS.Branding.Logo.Enabled) try {
          ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
            div_layer_name: b,
            centralize: centralize
          })
        } catch(e) {
          console.log(e)
        }
        this.kill()
      }
    }
  })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
  EntityButtonMoreGames = EntityButton.extend({
    type: ig.Entity.TYPE.A,
    gravityFactor: 0,
    logo: new ig.AnimationSheet("media/graphics/sprites/btn_more_games.png", 64, 66),
    size: {
      x: 64,
      y: 66
    },
    zIndex: 750,
    clickableLayer: null,
    link: null,
    newWindow: !1,
    div_layer_name: "more-games",
    name: "moregames",
    init: function(b, c, d) {
      this.parent(b, c, d);
      ig.global.wm || (this.div_layer_name = d.div_layer_name ? d.div_layer_name: "more-games", _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill())
    },
    show: function() {
      var b = ig.domHandler.getElementById("#" + this.div_layer_name);
      ig.domHandler.show(b)
    },
    hide: function() {
      var b = ig.domHandler.getElementById("#" + this.div_layer_name);
      ig.domHandler.hide(b)
    },
    clicked: function() {},
    clicking: function() {},
    released: function() {}
  })
});
ig.baked = !0;
ig.module("game.entities.opening.opening-shield").requires("impact.entity").defines(function() {
  EntityOpeningShield = ig.Entity.extend({
    size: {
      x: 48,
      y: 48
    },
    move: 0,
    mIconAnim: 0,
    shieldAnim: 0,
    titleAnim: 0,
    shieldImage: new ig.Image("media/graphics/opening/shield.png"),
    mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
    titleImage: new ig.Image("media/graphics/opening/title.png"),
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    ready: function() {
      if (!ig.wm) if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
        this.initTimer = new ig.Timer(0.1);
        try {
          ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
        } catch(b) {
          console.log(b)
        }
      } else ig.game.director.nextLevel(),
      ig.system.context.globalAlpha = 1,
      this.kill()
    },
    update: function() {
      this.parent();
      this.updateOriginalShieldOpening()
    },
    draw: function() {
      this.parent();
      ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
    },
    updateOriginalShieldOpening: function() {
      this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
      this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.001), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
      this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
      this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null);
      this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
      this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
    },
    drawOriginalShieldOpening: function() {
      if (this.moveTimer) {
        var b = ig.system.context;
        b.save();
        var c = ig.system.width / 2,
        d = ig.system.height / 2;
        b.translate(c, d);
        b.rotate(this.move * Math.PI / 180);
        b.beginPath();
        b.moveTo(0, 0);
        for (var e = 0,
        f = 1; 48 >= f; f += 1) b.lineTo(0 + 800 * Math.cos(2 * f * Math.PI / 48), 0 + 800 * Math.sin(2 * f * Math.PI / 48)),
        e++,
        2 == e && (e = 0, b.lineTo(0, 0));
        b.translate( - c, -d);
        c = b.createRadialGradient(c, d, 100, c, d, 250);
        c.addColorStop(0, "rgba(255,255,255,0.1)");
        c.addColorStop(1, "rgba(0,0,0,0)");
        b.fillStyle = c;
        b.fill();
        b.restore()
      }
      this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
      this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim, 166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
      ig.system.context.globalAlpha = 1
    }
  })
});
ig.baked = !0;
ig.module("game.entities.opening.opening-kitty").requires("impact.entity").defines(function() {
  EntityOpeningKitty = ig.Entity.extend({
    size: {
      x: 48,
      y: 48
    },
    kittyAnim: -1,
    kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
    kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
    soundKey: "kittyopeningSound",
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    ready: function() {
      if (!ig.wm) if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
        this.initTimer = new ig.Timer(0.1);
        try {
          ig.soundHandler.sfxPlayer.play(this.soundKey)
        } catch(b) {
          console.log(b)
        }
      } else ig.game.director.nextLevel(),
      ig.system.context.globalAlpha = 1,
      this.kill()
    },
    update: function() {
      this.parent();
      this.updateKittyOpening()
    },
    draw: function() {
      this.parent();
      ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
    },
    updateKittyOpening: function() {
      this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
      this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
      this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
    },
    drawKittyOpening: function() {
      var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
      b.addColorStop(0, "#ffed94");
      b.addColorStop(1, "#ffcd85");
      ig.system.context.fillStyle = b;
      ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
      0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width / 2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
      ig.system.context.globalAlpha = 1
    }
  })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
  EntityPointer = ig.Entity.extend({
    checkAgainst: ig.Entity.TYPE.BOTH,
    size: new Vector2(1, 1),
    isFirstPressed: !1,
    isPressed: !1,
    isReleased: !1,
    isHovering: !1,
    hoveringItem: null,
    objectArray: [],
    clickedObjectList: [],
    ignorePause: !0,
    zIndex: 5500,
    check: function(b) {
      this.objectArray.push(b)
    },
    clickObject: function(b) {
      this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
      this.isPressed && !this.isReleased && "function" == typeof b.clicking && b.clicking();
      this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
    },
    refreshPos: function() {
      ig.ua.mobile ? (this.pos.x = 0, this.pos.y = 0) : this.pos = ig.game.io.getClickPos()
    },
    update: function() {
      this.parent();
      this.refreshPos();
      var b = null,
      c = -1;
      for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
      if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof b.over && b.over()) : "function" == typeof b.over && b.over(),
      this.hoveringItem = b,
      this.clickObject(b),
      this.objectArray = [];
      else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
        for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b],
        "function" == typeof c.releasedOutside && c.releasedOutside();
        this.clickedObjectList = []
      }
      this.isFirstPressed = ig.input.pressed("click");
      this.isReleased = ig.input.released("click");
      this.isPressed = ig.input.state("click")
    },
    addToClickedObjectList: function(b) {
      this.clickedObjectList.push(b)
    },
    removeFromClickedObjectList: function(b) {
      for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
        var e = this.clickedObjectList[d];
        e != b && c.push(e)
      }
      this.clickedObjectList = c
    }
  })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
  EntityPointerSelector = EntityPointer.extend({
    zIndex: 1E3,
    _wmDrawBox: !0,
    _wmBoxColor: "rgba(0, 0, 255, 0.7)",
    size: {
      x: 20,
      y: 20
    },
    init: function(b, c, d) {
      this.parent(b, c, d)
    }
  })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
  EntitySelect = ig.Entity.extend({
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.NEVER,
    canSelect: !1,
    canSelectTimerDuration: 0.35,
    zIndex: 99999,
    isHovering: !1,
    isSelected: !1,
    init: function(b, c, d) {
      this.parent(b, c, d);
      this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
    },
    doesClickableLayerExist: function(b) {
      for (k in dynamicClickableEntityDivs) if (k == b) return ! 0;
      return ! 1
    },
    checkClickableLayer: function(b, c, d) {
      "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
    },
    createClickableOutboundLayer: function(b, c, d, e) {
      var f = ig.$new("div");
      f.id = b;
      document.body.appendChild(f);
      $("#" + f.id).css("float", "left");
      $("#" + f.id).css("width", this.size.x * multiplier);
      $("#" + f.id).css("height", this.size.y * multiplier);
      $("#" + f.id).css("position", "absolute");
      var g = w / 2 - destW / 2,
      n = h / 2 - destH / 2;
      w == mobileWidth ? ($("#" + f.id).css("left", this.pos.x), $("#" + f.id).css("top", this.pos.y)) : ($("#" + f.id).css("left", g + this.pos.x * multiplier), $("#" + f.id).css("top", n + this.pos.y * multiplier));
      e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
      dynamicClickableEntityDivs[b] = {};
      dynamicClickableEntityDivs[b].width = $("#" + f.id).width();
      dynamicClickableEntityDivs[b].height = $("#" + f.id).height();
      dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
      dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
    },
    hovered: function() {
      this.isHovering = !0;
      this.dehoverOthers()
    },
    dehoverOthers: function() {
      var b = ig.game.getEntitiesByType(EntitySelect);
      for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
    },
    deselectOthers: function() {
      var b = ig.game.getEntitiesByType(EntitySelect);
      for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
    },
    update: function() {
      this.parent();
      this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
    }
  })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening.opening-kitty").defines(function() {
  LevelOpening = {
    entities: [{
      type: "EntityOpeningKitty",
      x: 520,
      y: 212
    }],
    layer: []
  }
});
ig.baked = !0;
ig.module("game.entities.game.objects.game-object").requires("impact.entity").defines(function() {
  ig.color = {
    hexToRgb: function(b) {
      var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b);
      return c ? {
        r: parseInt(c[1], 16),
        g: parseInt(c[2], 16),
        b: parseInt(c[3], 16),
        hex: b
      }: null
    }
  };
  EntityGameObject = ig.Entity.extend({
    gravityFactor: 0,
    idleSheetInfo: null,
    singleFrameImage: null,
    visible: !0,
    alpha: 1,
    zIndex: 1E3,
    drawAsRect: !1,
    rectColor: ig.color.hexToRgb("#FFFFFF"),
    entryDelay: 0,
    entryDuration: 0.25,
    entryType: null,
    exitDelay: 0,
    exitDuration: 0.25,
    exitType: null,
    killOnExit: !0,
    size: {
      x: 32,
      y: 32
    },
    init: function(b, c, d) {
      d.singleFrameImage && (this.singleFrameImage = d.singleFrameImage);
      null != this.singleFrameImage ? (this.idleSheetInfo = {
        sheetImage: this.singleFrameImage,
        sheetX: 1,
        sheetY: 1
      },
      this.setSpriteSheet("idle"), this.setSize("idle"), this.addAnimation("idle", "idleSheet", 1, [0], !1, !0)) : null != this.idleSheetInfo && (this.setSpriteSheet("idle"), this.setSize("idle"));
      this.parent(b, c, d);
      this.enter()
    },
    onFinishEntering: function() {},
    enter: function() {
      this.visible = !0;
      this.alpha = 1;
      null != this.entryType ? (this[this.entryType](), this.delayedCall(this.entryDelay + this.entryDuration,
      function() {
        this.onFinishEntering()
      }.bind(this))) : (this.alpha1(), this.onFinishEntering())
    },
    exit: function() {
      if (null != this.exitType) this[this.exitType]();
      else this.alpha0();
      this.delayedCall(this.exitDuration + this.exitDelay,
      function() {
        this.checkKill()
      }.bind(this))
    },
    setSpriteSheet: function(b) {
      this[b + "Sheet"] = new ig.AnimationSheet(this[b + "SheetInfo"].sheetImage.path, this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX, this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY)
    },
    setSize: function(b) {
      this.size.x = this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX;
      this.size.y = this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY
    },
    addAnimation: function(b, c, d, e, f, g) {
      this[b] = new ig.Animation(this[c], d, e, !f); ! 0 == g && (this.currentAnim = this[b])
    },
    makeFramesArray: function(b, c, d) {
      for (var e = [], f = b; f <= c; f++) e.push(f);
      if (d) for (f = c; f >= b; f--) e.push(f);
      return e
    },
    draw: function() {
      if (this.visible && (this.currentAnim && (this.currentAnim.alpha = this.alpha), this.parent(), this.drawAsRect)) {
        var b = ig.system.context;
        b.save();
        var c = this.rectColor;
        b.fillStyle = 1 > this.alpha ? "rgba(" + c.r + "," + c.g + "," + c.b + "," + this.alpha + ")": c.hex;
        b.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        b.restore()
      }
    },
    fadeBounceRightIn: function() {
      this.alpha = 0;
      var b = this.pos.x;
      this.pos.x -= 100;
      this.tween({
        alpha: 1
      },
      0.75 * this.entryDuration, {
        delay: this.entryDelay,
        easing: ig.Tween.Easing.Quadratic.EaseOut
      }).start();
      this.tween({
        pos: {
          x: b
        }
      },
      this.entryDuration, {
        delay: this.entryDelay,
        easing: ig.Tween.Easing.Back.EaseOut
      }).start()
    },
    fadeBounceRightOut: function() {
      this.tween({
        alpha: 0
      },
      0.75 * this.exitDuration, {
        delay: this.exitDelay + 0.25 * this.exitDuration,
        easing: ig.Tween.Easing.Quadratic.EaseOut
      }).start();
      this.tween({
        pos: {
          x: this.pos.x - 100
        }
      },
      this.exitDuration, {
        delay: this.exitDelay,
        easing: ig.Tween.Easing.Back.EaseIn
      }).start()
    },
    fadeBounceLeftIn: function() {
      this.alpha = 0;
      var b = this.pos.x;
      this.pos.x += 100;
      this.tween({
        alpha: 1
      },
      0.75 * this.entryDuration, {
        delay: this.entryDelay,
        easing: ig.Tween.Easing.Quadratic.EaseOut
      }).start();
      this.tween({
        pos: {
          x: b
        }
      },
      this.entryDuration, {
        delay: this.entryDelay,
        easing: ig.Tween.Easing.Back.EaseOut
      }).start()
    },
    fadeBounceLeftOut: function() {
      this.tween({
        alpha: 0
      },
      0.75 * this.exitDuration, {
        delay: this.exitDelay + 0.25 * this.exitDuration,
        easing: ig.Tween.Easing.Quadratic.EaseOut
      }).start();
      this.tween({
        pos: {
          x: this.pos.x + 100
        }
      },
      this.exitDuration, {
        delay: this.exitDelay,
        easing: ig.Tween.Easing.Back.EaseIn
      }).start()
    },
    fadeJumpIn: function() {
      this.alpha = 0;
      var b = this.pos.y;
      this.pos.y += 100;
      this.tween({
        alpha: 1
      },
      0.75 * this.entryDuration, {
        delay: this.entryDelay,
        easing: ig.Tween.Easing.Quadratic.EaseOut
      }).start();
      this.tween({
        pos: {
          y: b
        }
      },
      this.entryDuration, {
        delay: this.entryDelay,
        easing: ig.Tween.Easing.Back.EaseOut
      }).start()
    },
    fadeJumpOut: function() {
      this.tween({
        alpha: 0
      },
      0.75 * this.exitDuration, {
        delay: this.exitDelay + 0.25 * this.exitDuration,
        easing: ig.Tween.Easing.Quadratic.EaseOut
      }).start();
      this.tween({
        pos: {
          y: this.pos.y + 100
        }
      },
      this.exitDuration, {
        delay: this.exitDelay,
        easing: ig.Tween.Easing.Back.EaseIn
      }).start()
    },
    fadeIn: function() {
      this.alpha = 0;
      this.tween({
        alpha: 1
      },
      this.entryDuration, {
        delay: this.entryDelay,
        easing: ig.Tween.Easing.Quadratic.EaseOut
      }).start()
    },
    fadeOut: function() {
      this.tween({
        alpha: 0
      },
      this.exitDuration, {
        delay: this.exitDelay,
        easing: ig.Tween.Easing.Quadratic.EaseOut
      }).start()
    },
    alpha0: function() {
      this.alpha = 0
    },
    alpha1: function() {
      this.alpha = 1
    },
    checkKill: function() {
      this.killOnExit && this.kill()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.fade-black").requires("game.entities.game.objects.game-object").defines(function() {
  ig.hasFadeBlack = !1;
  EntityFadeBlack = EntityGameObject.extend({
    zIndex: 99999,
    singleFrameImage: new ig.Image("media/graphics/game/ui/black.png"),
    isIn: !1,
    nextLevelID: -1,
    init: function(b, c, d) {
      this.parent(b, c, d);
      ig.game.sortEntitiesDeferred()
    },
    enter: function() {
      this.visible = !0;
      this.isIn ? (this.alpha = 0, this.tween({
        alpha: 1
      },
      0.35, {
        easing: ig.Tween.Easing.Quadratic.EaseIn,
        onComplete: function() {
          0 <= this.nextLevelID && ig.game.director.loadLevel(this.nextLevelID)
        }.bind(this)
      }).start()) : (this.alpha = 1, this.tween({
        alpha: 0
      },
      0.35, {
        easing: ig.Tween.Easing.Quadratic.EaseOut,
        onComplete: function() {
          this.kill()
        }.bind(this)
      }).start())
    }
  });
  ig.dropCurtain = function(b) {
    void 0 === b && (b = -1);
    ig.hasFadeBlack = !0;
    ig.game.spawnEntity(EntityFadeBlack, 0, 0, {
      isIn: !0,
      nextLevelID: b
    })
  };
  ig.liftCurtain = function() {
    ig.hasFadeBlack = !1;
    ig.game.spawnEntity(EntityFadeBlack, 0, 0, {
      isIn: !1
    })
  }
});
ig.baked = !0;
ig.module("game.entities.game.controllers.controller").requires("impact.entity", "game.entities.pointer", "game.entities.game.objects.ui.fade-black").defines(function() {
  EntityController = ig.Entity.extend({
    gravityFactor: 0,
    isAllowInput: !0,
    pointer: null,
    size: {
      x: 960,
      y: 540
    },
    init: function(b, c, d) {
      this.parent(b, c, d);
      this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
      null == this.pointer && (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0));
      ig.liftCurtain()
    },
    goToLevel: function(b) {
      this.isAllowInput = !1;
      ig.dropCurtain(b)
    },
    showPopup: function(b, c) {
      c || (c = {});
      c.controller = this;
      this.isAllowInput = !1;
      ig.game.spawnEntity(b, 0, 0, c);
      ig.game.sortEntitiesDeferred()
    },
    onPopupFinished: function() {
      this.isAllowInput = !0
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.buttons.button").requires("game.entities.game.objects.game-object").defines(function() {
  EntityButton = EntityGameObject.extend({
    collides: ig.Entity.COLLIDES.NEVER,
    type: ig.Entity.TYPE.A,
    originalX: 0,
    originalY: 0,
    transitionInDelay: 0,
    zIndex: 7E3,
    textString: "",
    textFont: "24px Arial",
    textRgb: ig.color.hexToRgb("#e8bba3"),
    textAlign: "start",
    textVAlign: "center",
    textLineSpacing: 1,
    textOffset: {
      x: 0,
      y: 0
    },
    onClicked: null,
    onClicking: null,
    onReleased: null,
    _previousTextString: "",
    _multiline: !1,
    _lines: [],
    _lineSpacing: 0,
    isAllowInput: !1,
    init: function(b, c, d) {
      this.onClicked = new ig.Signal;
      this.onClicking = new ig.Signal;
      this.onReleased = new ig.Signal;
      this.parent(b, c, d)
    },
    draw: function() {
      this.parent();
      if (!0 == this.visible && 0 < this.textString.length) {
        this._previousTextString != this.textString && (this._previousTextString = this.textString, this._lines = this.textString.split(/\r?\n/), 1 < this._lines.length ? (this._multiline = !0, this._lineSpacing = parseInt(this.textFont.split("px")[0].split(" ").pop()) * this.textLineSpacing) : this._multiline = !1);
        var b = ig.system.context;
        b.save();
        b.font = this.textFont;
        b.textAlign = this.textAlign;
        b.fillStyle = 1 > this.alpha ? "rgba(" + this.textRgb.r + "," + this.textRgb.g + "," + this.textRgb.b + "," + this.alpha + ")": this.textRgb.hex;
        var c = this.pos.x + this.textOffset.x,
        d = this.pos.y + this.textOffset.y;
        if (this._multiline) {
          var e = d;
          "center" == this.textVAlign && (e = d - (this._lines.length - 1) * this._lineSpacing / 2);
          for (d = 0; d < this._lines.length; d++) b.fillText(this._lines[d], c, e + d * this._lineSpacing)
        } else b.fillText(this.textString, c, d);
        b.restore()
      }
    },
    onFinishEntering: function() {
      this.isAllowInput = !0
    },
    clicked: function() {
      this.isAllowInput && this.onClicked.dispatch()
    },
    clicking: function() {
      this.isAllowInput && this.onClicking.dispatch()
    },
    released: function() {
      this.isAllowInput && this.onReleased.dispatch()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ball-illusion").requires("game.entities.game.objects.game-object").defines(function() {
  EntityBallIllusion = EntityGameObject.extend({
    gameplay: null,
    ballImgs: [new ig.Image("media/graphics/game/misc/ball1.png"), new ig.Image("media/graphics/game/misc/ball2.png"), new ig.Image("media/graphics/game/misc/ball3.png")],
    gravityFactor: 1,
    timedLife: 0,
    zIndex: 3500,
    maxVel: {
      x: 1E4,
      y: 1E4
    },
    prevPos: {
      x: 0,
      y: 0
    },
    init: function(b, c, d) {
      this.singleFrameImage = this.ballImgs[ig.game.sessionData.selectedBall];
      this.parent(b, c, d);
      this.alpha = 0.4;
      this.timedLife = 5
    },
    draw: function() {
      this.parent()
    },
    update: function() {
      if (!this.gameplay.isPaused) {
        this.timedLife -= ig.system.tick;
        0 > this.timedLife && (this.timedLife = 999999, this.exit());
        this.currentAnim.angle = Math.atan2(this.vel.y, this.vel.x) + 1.57;
        this.parent();
        if (this.pos.x != this.prevPos.x || this.pos.y != this.prevPos.y) {
          var b = this.pos.x,
          c = this.pos.y,
          d = this.prevPos.x - b,
          e = this.prevPos.y - c,
          f = Math.abs(d),
          g = Math.abs(e);
          if (50 > f && 50 > g) {
            f = Math.ceil(Math.sqrt(d * d + e * e) / 3);
            d /= f;
            e /= f;
            b += 10;
            c += 10;
            for (g = 0; g < f; g++) ig.game.spawnEntity(EntityBallTrail, b + d * g, c + e * g).gameplay = this.gameplay
          }
        }
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y
      }
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.hit-collider").requires("game.entities.game.objects.game-object", "game.entities.game.objects.ball-illusion").defines(function() {
  EntityHitCollider = EntityGameObject.extend({
    collides: ig.Entity.COLLIDES.PASSIVE,
    type: ig.Entity.TYPE.A,
    checkAgainst: ig.Entity.TYPE.B,
    gameplay: null,
    gravityFactor: 0,
    zIndex: 3600,
    hitType: "lowhit",
    isRecording: !1,
    originalX: 0,
    originalY: 0,
    isPlaying: !1,
    playDelay: 0,
    playhead: 0,
    characterFace: 1,
    hitVel: {
      x: 0,
      y: 0
    },
    drawAsRect: !0,
    character: null,
    init: function(b, c, d) {
      this.parent(b, c, d);
      this.playHit();
      this.character && (this.gameplay = this.character.gameplay)
    },
    collideWith: function(b) {
      if (b.isBall) {
        if (this.character) {
          if (this.character.isPowerupActive) if ("illusion" == this.character.powerupType) {
            var c = ig.random.int(1, 3);
            1 == c ? (ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity( - 0.15)
            }), ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity(0.15)
            })) : 2 == c ? (ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity( - 0.15)
            }), ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity( - 0.3)
            })) : 3 == c && (ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity(0.15)
            }), ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity(0.3)
            }))
          } else "smash" == this.character.powerupType && "jumpsmash" == this.hitType && (this.hitVel.x *= this.character.superSmashMultiplier, this.hitVel.y *= this.character.superSmashMultiplier);
          this.character.increasePowerup()
        }
        b.hit(this.hitVel.x, this.hitVel.y, !1);
        this.kill()
      }
    },
    cloneRotateVelocity: function(b) {
      var c = {
        x: 0,
        y: this.hitVel.y
      },
      d = Math.cos(b);
      b = Math.sin(b);
      c.x = d * this.hitVel.x + b * this.hitVel.y;
      c.y = d * this.hitVel.y - b * this.hitVel.x;
      return c
    },
    update: function() {
      this.parent();
      if (this.isPlaying) {
        var b = ig[this.hitType];
        if (0 < this.playDelay) this.playDelay -= ig.system.tick;
        else {
          var c = b[this.playhead];
          this.pos.x = this.originalX + c.x * this.characterFace;
          this.pos.y = this.originalY + c.y;
          this.size.x = c.sizeX;
          this.size.y = c.sizeY;
          this.playhead++;
          if (this.playhead == b.length) {
            this.kill();
            return
          }
        }
      }
      this.isRecording && this.recordCurrentState()
    },
    recordCurrentState: function() {
      ig[this.hitType].push({
        x: this.pos.x - this.originalX,
        y: this.pos.y - this.originalY,
        sizeX: this.size.x,
        sizeY: this.size.y
      })
    },
    playHit: function() {
      this.originalX = this.pos.x;
      this.originalY = this.pos.y;
      if (ig[this.hitType]) this.isPlaying = !0;
      else switch (this.isRecording = !0, ig[this.hitType] = [], this.hitType) {
      case "lowhit":
        this.tweenLowhit();
        break;
      case "lobhit":
        this.tweenLobhit();
        break;
      case "jumpsmash":
        this.tweenJumpSmash()
      }
    },
    tweenLowhit: function() {
      this.pos.x = this.originalX - 90;
      this.pos.y = this.originalY - 108.75;
      this.size.x = 45;
      this.size.y = 45;
      this.recordCurrentState();
      var b = this.tween({
        pos: {
          x: this.originalX - 15,
          y: this.originalY - 60
        },
        size: {
          x: 45,
          y: 45
        }
      },
      0.08 * ig.hitSpeedFactor),
      c = this.tween({
        pos: {
          x: this.originalX + 71.25,
          y: this.originalY - 138.75
        },
        size: {
          x: 45,
          y: 45
        }
      },
      0.08 * ig.hitSpeedFactor),
      d = this.tween({
        pos: {
          x: this.originalX - 15,
          y: this.originalY - 258.75
        },
        size: {
          x: 45,
          y: 45
        }
      },
      0.1 * ig.hitSpeedFactor),
      e = this.tween({},
      0.016, {
        onComplete: function() {
          this.recordCurrentState();
          this.kill()
        }.bind(this)
      });
      b.chain(c);
      c.chain(d);
      d.chain(e);
      b.start()
    },
    tweenLobhit: function() {
      this.pos.x = this.originalX - 90;
      this.pos.y = this.originalY - 225;
      this.size.x = 60;
      this.size.y = 60;
      this.recordCurrentState();
      var b = this.tween({
        pos: {
          x: this.originalX - 7.5,
          y: this.originalY - 251.25
        },
        size: {
          x: 60,
          y: 60
        }
      },
      0.18 * ig.hitSpeedFactor),
      c = this.tween({
        pos: {
          x: this.originalX + 71.25,
          y: this.originalY - 142.5
        },
        size: {
          x: 60,
          y: 60
        }
      },
      0.05 * ig.hitSpeedFactor);
      this.tween({
        pos: {
          x: this.originalX - 18.75,
          y: this.originalY - 67.5
        },
        size: {
          x: 60,
          y: 60
        }
      },
      0.05 * ig.hitSpeedFactor);
      var d = this.tween({},
      0.016, {
        onComplete: function() {
          this.recordCurrentState();
          this.kill()
        }.bind(this)
      });
      b.chain(c);
      c.chain(d);
      b.start()
    },
    tweenJumpSmash: function() {
      this.pos.x = this.originalX - 67.5;
      this.pos.y = this.originalY - 337.5;
      this.size.x = 60;
      this.size.y = 60;
      this.recordCurrentState();
      var b = this.tween({
        pos: {
          x: this.originalX + 30,
          y: this.originalY - 337.5
        },
        size: {
          x: 60,
          y: 60
        }
      },
      0.05),
      c = this.tween({
        pos: {
          x: this.originalX + 75,
          y: this.originalY - 210
        },
        size: {
          x: 60,
          y: 60
        }
      },
      0.05),
      d = this.tween({
        pos: {
          x: this.originalX + 15,
          y: this.originalY - 127.5
        },
        size: {
          x: 60,
          y: 60
        }
      },
      0.05),
      e = this.tween({},
      0.016, {
        onComplete: function() {
          this.recordCurrentState();
          this.kill()
        }.bind(this)
      });
      b.chain(c);
      c.chain(d);
      d.chain(e);
      b.start()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.popups.popup").requires("game.entities.game.objects.game-object").defines(function() {
  EntityPopup = EntityGameObject.extend({
    gravityFactor: 0,
    zIndex: 1E4,
    controller: null,
    members: [],
    singleFrameImage: new ig.Image("media/graphics/game/ui/transparent.png"),
    entryType: "fadeIn",
    exitType: "fadeOut",
    exitDelay: 0.5,
    isAllowInput: !1,
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    spawnMember: function(b, c, d, e, f) {
      f && (e.zIndex = f);
      b = ig.game.spawnEntity(b, c, d, e);
      this.members.push(b);
      return b
    },
    enter: function() {
      this.parent();
      this.delayedCall(this.entryDelay + this.entryDuration,
      function() {
        this.isAllowInput = !0
      }.bind(this))
    },
    exit: function() {
      this.parent();
      this.isAllowInput = !1;
      this.callControllerCallback();
      for (var b = 0; b < this.members.length; b++) this.members[b].exit()
    },
    callControllerCallback: function() {
      if (this.controller && this.controller.onPopupFinished) {
        var b = this.exitDelay + this.exitDuration - 0.1;
        if (0 >= b) this.controller.onPopupFinished(this.name);
        else this.delayedCall(b,
        function() {
          this.controller.onPopupFinished(this.name)
        }.bind(this))
      }
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.buttons.slider-button").requires("game.entities.game.objects.ui.buttons.button", "game.entities.game.objects.game-object").defines(function() {
  EntitySliderButton = EntityButton.extend({
    zIndex: 11E3,
    onStopSliding: null,
    value: 0,
    xMin: 0,
    xMax: 0,
    yMin: 0,
    yMax: 0,
    indicatorOffsetX: 0,
    indicatorOffsetY: 0,
    indicator: null,
    isHorizontal: !0,
    isSliding: !1,
    pointer: null,
    init: function(b, c, d) {
      this.onStopSliding = new ig.Signal;
      this.parent(b, c, d);
      0 == this.xMax && (this.xMax = this.size.x);
      0 == this.yMax && (this.yMax = this.size.y);
      this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
      null == this.pointer && console.error("Error : no pointer defined, please spawn one before spawning this slider");
      null == this.indicator && (b = this.size.x, this.size.y < b && (b = this.size.y), this.indicator = ig.game.spawnEntity(EntityGameObject, 0, 0, {
        drawAsRect: !0,
        zIndex: this.zIndex + 10,
        size: {
          x: b,
          y: b
        }
      }))
    },
    clicked: function() {
      this.parent();
      this.isSliding = !0
    },
    clicking: function() {
      this.parent()
    },
    released: function() {
      this.parent()
    },
    update: function() {
      this.parent();
      this.indicator.alpha = this.alpha;
      this.indicator.visible = this.visible;
      var b = this.pos.x + (this.xMax - this.xMin);
      if (this.isSliding) if (ig.ua.mobile) {
        var c = 99999,
        d;
        for (d in ig.input.touches) {
          var e = ig.input.touches[d];
          Math.abs(e.x - b) < Math.abs(c - b) && (c = e.x)
        }
        99999 == c ? (this.isSliding = !1, this.onStopSliding.dispatch([this.value])) : this.setValueBasedOnPos(c)
      } else this.setValueBasedOnPos(this.pointer.x),
      ig.input.released("click") && (this.isSliding = !1, this.onStopSliding.dispatch([this.value]));
      else this.setPosBasedOnValue()
    },
    setPosBasedOnValue: function() {
      var b = this.indicator;
      this.isHorizontal && (b.pos.x = this.pos.x + this.xMin + (this.xMax - this.xMin - b.size.x) * this.value + this.indicatorOffsetX, b.pos.y = this.pos.y + this.indicatorOffsetY)
    },
    setValueBasedOnPos: function(b) {
      var c = this.indicator;
      c.pos.x = b;
      c.pos.x - this.pos.x < this.xMin ? c.pos.x = this.pos.x + this.xMin: c.pos.x - this.pos.x > this.xMax - c.size.x && (c.pos.x = this.pos.x + this.xMax - c.size.x);
      this.value = (c.pos.x - this.pos.x - this.xMin) / (this.xMax - this.xMin - c.size.x)
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.buttons.volume-slider-button").requires("game.entities.game.objects.ui.buttons.slider-button", "game.entities.game.objects.ui.buttons.button", "game.entities.game.objects.game-object").defines(function() {
  EntityVolumeSliderButton = EntitySliderButton.extend({
    indicatorOffsetY: 4,
    xMin: 5,
    xMax: 270,
    rectColor: ig.color.hexToRgb("#10bccc"),
    init: function(b, c, d) {
      this.parent(b, c, d);
      this.indicator.setEntitySize(12, 17)
    },
    draw: function() {
      this.parent();
      var b = ig.system.context;
      b.save();
      var c = this.rectColor;
      b.fillStyle = 1 > this.alpha ? "rgba(" + c.r + "," + c.g + "," + c.b + "," + this.alpha + ")": c.hex;
      b.fillRect(this.pos.x + this.xMin, this.pos.y + 5, this.indicator.pos.x + 5 - this.pos.x - this.xMin, 16);
      b.restore()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.texts.text").requires("game.entities.game.objects.game-object").defines(function() {
  EntityText = EntityGameObject.extend({
    textString: "",
    textFont: "48px Arial",
    textRgb: ig.color.hexToRgb("#FFFFFF"),
    textAlign: "start",
    textOffset: {
      x: 0,
      y: 0
    },
    zIndex: 7E3,
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    draw: function() {
      this.parent();
      if (!0 == this.visible) {
        var b = ig.system.context;
        b.save();
        b.font = this.textFont;
        b.textAlign = this.textAlign;
        b.fillStyle = 1 > this.alpha ? "rgba(" + this.textRgb.r + "," + this.textRgb.g + "," + this.textRgb.b + "," + this.alpha + ")": this.textRgb.hex;
        b.fillText(this.textString, this.pos.x + this.textOffset.x, this.pos.y + this.textOffset.y);
        b.restore()
      }
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.popups.settings-popup").requires("game.entities.game.objects.ui.popups.popup", "game.entities.game.objects.game-object", "game.entities.game.objects.ui.buttons.button", "game.entities.game.objects.ui.buttons.volume-slider-button", "game.entities.game.objects.ui.texts.text").defines(function() {
  EntitySettingsPopup = EntityPopup.extend({
    images: [new ig.Image("media/graphics/game/ui/popup-bg.png"), new ig.Image("media/graphics/game/ui/button-ok.png"), new ig.Image("media/graphics/game/ui/volume-bar-bg.png")],
    exitDelay: 0.3,
    init: function(b, c, d) {
      this.parent(b, c, d);
      "pause-popup";
      this.spawnMember(EntityGameObject, 210, 79, {
        singleFrameImage: this.images[0],
        entryType: "fadeIn",
        exitType: "fadeOut",
        entryDelay: 0.2,
        exitDelay: 0.3
      },
      11E3);
      this.spawnMember(EntityText, 510, 127, {
        textString: _STRINGS.Mainmenu.Settings,
        textFont: "48px mainfont",
        textRgb: ig.color.hexToRgb("#1261a6"),
        textAlign: "center",
        entryType: "fadeIn",
        exitType: "fadeOut",
        entryDelay: 0.2,
        exitDelay: 0.3
      },
      12E3);
      this.spawnMember(EntityButton, 424, 360, {
        singleFrameImage: this.images[1],
        entryType: "fadeJumpIn",
        exitType: "fadeOut",
        entryDelay: 0.4,
        exitDelay: 0
      },
      12E3).onClicked.add(this.onClickOk, this);
      this.spawnMember(EntityVolumeSliderButton, 380, 200, {
        singleFrameImage: this.images[2],
        entryType: "fadeIn",
        exitType: "fadeOut",
        entryDelay: 0.2,
        exitDelay: 0.3,
        value: ig.game.sessionData.sound
      },
      12E3).onStopSliding.add(this.onSfxValueChanged, this);
      this.spawnMember(EntityVolumeSliderButton, 380, 280, {
        singleFrameImage: this.images[2],
        entryType: "fadeIn",
        exitType: "fadeOut",
        entryDelay: 0.2,
        exitDelay: 0.3,
        value: ig.game.sessionData.music
      },
      12E3).onStopSliding.add(this.onBgmValueChanged, this)
    },
    onClickOk: function() {
      this.isAllowInput && (this.exit(), ig.soundHandler.sfxPlayer.play(ig.game.clickSound))
    },
    onBgmValueChanged: function(b) {
      console.log("Bgm value changed :", b);
      ig.soundHandler.bgmPlayer.volume(b);
      ig.game.sessionData.music = b;
      ig.game.saveAll()
    },
    onSfxValueChanged: function(b) {
      console.log("Sfx value changed :", b);
      ig.soundHandler.sfxPlayer.volume(b);
      ig.soundHandler.sfxPlayer.play(ig.game.clickSound);
      ig.game.sessionData.sound = b;
      ig.game.saveAll()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.buttons.more-games-button").requires("game.entities.game.objects.ui.buttons.button", "plugins.clickable-div-layer").defines(function() {
  EntityMoreGamesButton = EntityButton.extend({
    clickableLayer: null,
    link: null,
    newWindow: !1,
    div_layer_name: "more-games",
    name: "moregames",
    singleFrameImage: new ig.Image("media/graphics/game/ui/button-more-games.png"),
    entryType: "fadeJumpIn",
    entryDelay: 0.2,
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    show: function() {
      var b = ig.domHandler.getElementById("#" + this.div_layer_name);
      ig.domHandler.show(b)
    },
    hide: function() {
      var b = ig.domHandler.getElementById("#" + this.div_layer_name);
      ig.domHandler.hide(b)
    },
    onFinishEntering: function() {
      this.parent();
      ig.global.wm || (_SETTINGS.MoreGames.Enabled ? (_SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill())
    },
    update: function() {
      this.parent()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.controllers.main-menu-controller").requires("game.entities.game.controllers.controller", "game.entities.game.objects.ui.buttons.button", "game.entities.game.objects.game-object", "game.entities.game.objects.hit-collider", "game.entities.game.objects.ui.popups.settings-popup", "game.entities.game.objects.ui.buttons.more-games-button", "plugins.fullscreen").defines(function() {
  EntityMainMenuController = EntityController.extend({
    bgImg: new ig.Image("media/graphics/game/bg/main-menu-bg.png"),
    moreGamesBtnImg: new ig.Image("media/graphics/game/ui/button-more-games.png"),
    playBtnImg: new ig.Image("media/graphics/game/ui/button-play.png"),
    settingBtnImg: new ig.Image("media/graphics/game/ui/button-setting.png"),
    helpBtnImg: new ig.Image("media/graphics/game/ui/button-help.png"),
    enterFullscreenBtnImg: new ig.Image("media/graphics/game/ui/enter-fullscreen.png"),
    exitFullscreenBtnImg: new ig.Image("media/graphics/game/ui/exit-fullscreen.png"),
    moreGamesBtn: null,
    init: function(b, c, d) {
      this.parent(b, c, d);
      ig.game.spawnEntity(EntityGameObject, 0, 0, {
        singleFrameImage: this.bgImg
      });
      ig.game.spawnEntity(ig.FullscreenButton, 5, 5, {
        enterImage: this.enterFullscreenBtnImg,
        exitImage: this.exitFullscreenBtnImg
      });
      b = 435;
      _SETTINGS.MoreGames.Enabled ? (c = ig.game.spawnEntity(EntityButton, 451, 320, {
        singleFrameImage: this.playBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }), c.onClicked.add(this.onClickPlay, this), c.scale.x = c.scale.y = 1.3, ig.game.spawnEntity(EntityButton, 295, b, {
        singleFrameImage: this.settingBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickSetting, this), ig.game.spawnEntity(EntityButton, 610, b, {
        singleFrameImage: this.helpBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickHelp, this), this.moreGamesBtn = ig.game.spawnEntity(EntityMoreGamesButton, 451, b, {})) : (b = 380, c = ig.game.spawnEntity(EntityButton, 451, b - 13, {
        singleFrameImage: this.playBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }), c.onClicked.add(this.onClickPlay, this), c.scale.x = c.scale.y = 1.3, ig.game.spawnEntity(EntityButton, 295, b, {
        singleFrameImage: this.settingBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickSetting, this), ig.game.spawnEntity(EntityButton, 610, b, {
        singleFrameImage: this.helpBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickHelp, this));
      ig.game.spawnEntity(EntityHitCollider, 0, 0, {
        hitType: "lowhit"
      });
      ig.game.spawnEntity(EntityHitCollider, 0, 0, {
        hitType: "lobhit"
      });
      ig.game.spawnEntity(EntityHitCollider, 0, 0, {
        hitType: "jumpsmash"
      });
      console.log("selected Character", ig.game.sessionData.selectedCharacter);
      ig.isTrainingMode = !1;
      ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background)
    },
    onClickPlay: function() {
      this.isAllowInput && (this.goToLevel(ig.game.CharacterSelect), console.log("clickplay"), ig.soundHandler.sfxPlayer.play(ig.game.clickSound))
    },
    onClickSetting: function() {
      this.isAllowInput && (console.log("Settings"), this.showPopup(EntitySettingsPopup), this.moreGamesBtn && this.moreGamesBtn.hide(), ig.soundHandler.sfxPlayer.play(ig.game.clickSound))
    },
    onClickHelp: function() {
      this.isAllowInput && (ig.game.tutorialOnly = !0, this.goToLevel(ig.game.Gameplay))
    },
    onPopupFinished: function() {
      this.parent();
      this.moreGamesBtn && this.moreGamesBtn.show()
    }
  })
});
ig.baked = !0;
ig.module("game.levels.main-menu").requires("impact.image", "game.entities.game.controllers.main-menu-controller").defines(function() {
  LevelMainMenu = {
    entities: [{
      type: "EntityMainMenuController",
      x: 0,
      y: 0
    }],
    layer: []
  }
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.texts.control-overlay-text").requires("game.entities.game.objects.ui.texts.text").defines(function() {
  EntityControlOverlayText = EntityText.extend({
    textFont: "14px mainfont",
    textRgb: ig.color.hexToRgb("#E3E4E8"),
    textOffset: {
      x: 19,
      y: 22
    },
    textAlign: "center",
    zIndex: 7500,
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    draw: function() {
      if (!0 == this.visible) {
        var b = ig.system.context;
        b.save();
        b.fillStyle = "#55606E";
        b.fillRect(this.pos.x + this.textOffset.x - 10, this.pos.y + this.textOffset.y - 15, 20, 20);
        b.restore()
      }
      this.parent()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.character-bar").requires("game.entities.game.objects.game-object").defines(function() {
  EntityCharacterBar = EntityGameObject.extend({
    zIndex: 7500,
    staminaBarImg: new ig.Image("media/graphics/game/ui/bar-stamina.png"),
    powerupBarImg: new ig.Image("media/graphics/game/ui/bar-powerup.png"),
    character: null,
    isFlipped: !1,
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    draw: function() {
      var b = this.character,
      c = 0,
      d = 1,
      e = 0;
      b && (c = b.staminaTrail / b.staminaMax, d = b.staminaDisplay / b.staminaMax, e = b.powerup / b.powerupMax);
      var b = this.pos.x,
      f = this.pos.y,
      g = ig.system,
      n = g.context;
      n.save();
      this.isFlipped && (c *= -1, d *= -1, e *= -1);
      n.translate(g.getDrawPos(b), g.getDrawPos(f));
      n.save();
      n.scale(c, 1);
      n.fillStyle = "#e3e4e8";
      n.fillRect(0, 13, 375 - 30 * (1 - c), 10);
      n.restore();
      n.save();
      n.scale(d, 1);
      n.drawImage(this.staminaBarImg.data, 0, 13);
      n.restore();
      n.scale(e, 1);
      n.drawImage(this.powerupBarImg.data, 0, 0);
      n.restore()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.powerup-indicator").requires("game.entities.game.objects.game-object", "game.entities.game.objects.ui.texts.text").defines(function() {
  EntityPowerupIndicator = EntityGameObject.extend({
    zIndex: 7600,
    speedImage: new ig.Image("media/graphics/game/ui/powerup-speed.png"),
    smashImage: new ig.Image("media/graphics/game/ui/powerup-smash.png"),
    timeImage: new ig.Image("media/graphics/game/ui/powerup-time.png"),
    illusionImage: new ig.Image("media/graphics/game/ui/powerup-illusion.png"),
    speedImageOn: new ig.Image("media/graphics/game/ui/powerup-speed-on.png"),
    smashImageOn: new ig.Image("media/graphics/game/ui/powerup-smash-on.png"),
    timeImageOn: new ig.Image("media/graphics/game/ui/powerup-time-on.png"),
    illusionImageOn: new ig.Image("media/graphics/game/ui/powerup-illusion-on.png"),
    glow: new ig.Image("media/graphics/game/ui/powerup-glow.png"),
    isOn: !1,
    angleRad: 0,
    angleSpeed: 0.5,
    isFlipped: !1,
    powerText: null,
    speedName: _STRINGS.Game.PowerupSpeed,
    timeName: _STRINGS.Game.PowerupTime,
    smashName: _STRINGS.Game.PowerupSmash,
    illusionName: _STRINGS.Game.PowerupIllusion,
    powerupType: null,
    init: function(b, c, d) {
      d.powerupType && (d.singleFrameImage = this[d.powerupType + "Image"]);
      this.parent(b, c, d);
      480 < b && (this.isFlipped = !0)
    },
    draw: function() {
      if (this.isOn) {
        if (null == this.powerText) {
          var b = this.pos.x + 60,
          c = this.pos.y + 27,
          d = "fadeBounceRightIn",
          e = "fadeBounceRightOut",
          f = "left";
          this.isFlipped && (b = this.pos.x - 10, f = "right", d = "fadeBounceLeftIn", e = "fadeBounceLeftOut");
          this.powerText = ig.game.spawnEntity(EntityText, b, c, {
            textAlign: f,
            entryType: d,
            exitType: e,
            textString: this[this.powerupType + "Name"],
            textFont: "24px mainfont"
          })
        }
        this.angleRad += this.angleSpeed * ig.system.tick;
        this[this.powerupType + "ImageOn"].draw(this.pos.x, this.pos.y);
        b = ig.system.context;
        b.save();
        b.translate(ig.system.getDrawPos(this.pos.x.round() + 25 - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() + 19 - ig.game.screen.y));
        b.rotate(this.angleRad);
        this.glow.draw( - 37, -36);
        b.restore()
      } else null != this.powerText && (this.powerText.exit(), this.powerText = null),
      this.parent()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.scoreboard-display").requires("game.entities.game.objects.game-object", "game.entities.game.objects.ui.texts.text").defines(function() {
  EntityScoreboardDisplay = EntityGameObject.extend({
    zIndex: 7600,
    gameplay: null,
    playerScore: 0,
    enemyScore: 0,
    playerGameScore: 0,
    enemyGameScore: 0,
    playerScoreDisplay: null,
    enemyScoreDisplay: null,
    gameScoreDisplay: null,
    init: function(b, c, d) {
      this.parent(b, c, d);
      b = ig.system.width / 2;
      c = {
        textFont: "24px secondaryfont",
        textRgb: ig.color.hexToRgb("#FFFFFF"),
        textAlign: "center",
        textString: "0"
      };
      d = {
        textFont: "16px secondaryfont",
        textRgb: ig.color.hexToRgb("#FFFFFF"),
        textAlign: "center",
        textString: "0 : 0"
      };
      this.playerScoreDisplay = ig.game.spawnEntity(EntityText, b - 65, 40, c);
      this.enemyScoreDisplay = ig.game.spawnEntity(EntityText, b + 65, 40, c);
      this.gameScoreDisplay = ig.game.spawnEntity(EntityText, b, 38, d)
    },
    update: function() {
      this.parent();
      this.playerScoreDisplay.textString = this.playerScore.toString();
      this.enemyScoreDisplay.textString = this.enemyScore.toString();
      this.gameScoreDisplay.textString = this.playerGameScore + " : " + this.enemyGameScore
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.controllers.gameplay-ui-controller").requires("impact.impact", "game.entities.game.objects.ui.texts.control-overlay-text", "game.entities.game.objects.game-object", "game.entities.game.objects.ui.character-bar", "game.entities.game.objects.ui.powerup-indicator", "game.entities.game.objects.ui.scoreboard-display", "game.entities.game.objects.ui.buttons.button").defines(function() {
  GameplayUiController = ig.Class.extend({
    gameplay: null,
    controlAlpha: 0.6,
    barBgImg: new ig.Image("media/graphics/game/ui/bar-bg.png"),
    barStaminaImg: new ig.Image("media/graphics/game/ui/bar-stamina.png"),
    barPowerupImg: new ig.Image("media/graphics/game/ui/bar-powerup.png"),
    btnBgImg: new ig.Image("media/graphics/game/ui/button-bg.png"),
    btnBgSelectedImg: new ig.Image("media/graphics/game/ui/button-bg-selected.png"),
    controlLeftImg: new ig.Image("media/graphics/game/ui/control-left.png"),
    controlRightImg: new ig.Image("media/graphics/game/ui/control-right.png"),
    controlShortImg: new ig.Image("media/graphics/game/ui/control-short.png"),
    controlLongImg: new ig.Image("media/graphics/game/ui/control-long.png"),
    controlSmashImg: new ig.Image("media/graphics/game/ui/control-smash.png"),
    btnPauseImg: new ig.Image("media/graphics/game/ui/button-pause.png"),
    controlleft: null,
    controlright: null,
    controlshorthit: null,
    controllonghit: null,
    controljumpsmash: null,
    barStamina: null,
    barPowerup: null,
    scoreboard: null,
    alphaTime: {
      left: 0,
      right: 0,
      shorthit: 0,
      longhit: 0,
      jumpsmash: 0
    },
    playerPowerupDisplay: null,
    enemyPowerupDisplay: null,
    init: function(b) {
      this.gameplay = b;
      this.controlleft = ig.game.spawnEntity(EntityButton, 0, 457, {
        singleFrameImage: this.controlLeftImg
      });
      this.controlright = ig.game.spawnEntity(EntityButton, 109, 457, {
        singleFrameImage: this.controlRightImg
      });
      this.controlshorthit = ig.game.spawnEntity(EntityButton, 742, 457, {
        singleFrameImage: this.controlShortImg
      });
      this.controllonghit = ig.game.spawnEntity(EntityButton, 851, 457, {
        singleFrameImage: this.controlLongImg
      });
      this.controljumpsmash = ig.game.spawnEntity(EntityButton, 851, 374, {
        singleFrameImage: this.controlSmashImg
      });
      this.controlleft.alpha = this.controlAlpha;
      this.controlright.alpha = this.controlAlpha;
      this.controlshorthit.alpha = this.controlAlpha;
      this.controllonghit.alpha = this.controlAlpha;
      this.controljumpsmash.alpha = this.controlAlpha;
      b = ig.game.spawnEntity(EntityButton, 440, 40, {
        singleFrameImage: this.btnPauseImg
      });
      b.onClicked.add(this.onClickPause, this);
      b.scale.y = 0.65;
      ig.input.bind(ig.KEY.LEFT_ARROW, "left");
      ig.input.bind(ig.KEY.RIGHT_ARROW, "right");
      ig.input.bind(ig.KEY.A, "left");
      ig.input.bind(ig.KEY.D, "right");
      ig.input.bind(ig.KEY.J, "shorthit");
      ig.input.bind(ig.KEY.K, "longhit");
      ig.input.bind(ig.KEY.L, "jumpsmash");
      ig.ua.mobile || (ig.game.spawnEntity(EntityControlOverlayText, this.controlleft.pos.x, this.controlleft.pos.y, {
        textString: "A"
      }), ig.game.spawnEntity(EntityControlOverlayText, this.controlright.pos.x, this.controlright.pos.y, {
        textString: "D"
      }), ig.game.spawnEntity(EntityControlOverlayText, this.controlshorthit.pos.x, this.controlshorthit.pos.y, {
        textString: "J"
      }), ig.game.spawnEntity(EntityControlOverlayText, this.controllonghit.pos.x, this.controllonghit.pos.y, {
        textString: "K"
      }), ig.game.spawnEntity(EntityControlOverlayText, this.controljumpsmash.pos.x, this.controljumpsmash.pos.y, {
        textString: "L"
      }));
      ig.game.spawnEntity(EntityGameObject, 8, 10, {
        singleFrameImage: this.barBgImg
      });
      ig.game.spawnEntity(EntityCharacterBar, 10, 15, {
        character: this.gameplay.player
      });
      ig.game.spawnEntity(EntityCharacterBar, 949, 15, {
        character: this.gameplay.enemy,
        isFlipped: !0
      });
      this.scoreboard = ig.game.spawnEntity(EntityScoreboardDisplay, 0, 0, {
        gameplay: this.gameplay
      });
      this.playerPowerupDisplay = ig.game.spawnEntity(EntityPowerupIndicator, 7, 50, {
        powerupType: this.gameplay.player.powerupType
      });
      this.gameplay.enemy.powerupType && (this.enemyPowerupDisplay = ig.game.spawnEntity(EntityPowerupIndicator, 903, 50, {
        powerupType: this.gameplay.enemy.powerupType
      }))
    },
    update: function() {
      this.playerPowerupDisplay.isOn = this.gameplay.player.isPowerupActive;
      this.gameplay.enemy.powerupType && (this.enemyPowerupDisplay.isOn = this.gameplay.enemy.isPowerupActive);
      this.detectInput();
      this.updateAlphaTime()
    },
    detectInput: function() {
      if (this.gameplay.isAllowInput) {
        ig.input.state("left") && this.doMove( - 1);
        ig.input.state("right") && this.doMove(1);
        ig.input.pressed("shorthit") && this.doAction("shorthit");
        ig.input.pressed("longhit") && this.doAction("longhit");
        ig.input.pressed("jumpsmash") && this.doAction("jumpsmash");
        for (var b in ig.input.touches) {
          var c = ig.input.touches[b];
          this.isTouching(c.x, c.y, this.controlleft) && this.doMove( - 1);
          this.isTouching(c.x, c.y, this.controlright) && this.doMove(1);
          this.isTouching(c.x, c.y, this.controlshorthit) && this.doAction("shorthit");
          this.isTouching(c.x, c.y, this.controllonghit) && this.doAction("longhit");
          this.isTouching(c.x, c.y, this.controljumpsmash) && this.doAction("jumpsmash")
        }
      }
    },
    isTouching: function(b, c, d) {
      return b < d.pos.x || c < d.pos.y || b > d.pos.x + d.size.x || c > d.pos.y + d.size.y ? !1 : !0
    },
    onClickPause: function() {
      this.gameplay.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), this.gameplay.pauseGame())
    },
    doMove: function(b) {
      var c = -1 == b ? "left": "right";
      0.01 > this.alphaTime[c] && (this.alphaTime[c] = 0.01);
      this.gameplay.player.direction = b
    },
    doAction: function(b) {
      this.alphaTime[b] = 0.25;
      this.gameplay.player[b]()
    },
    updateAlphaTime: function() {
      for (key in this.alphaTime) 0 < this.alphaTime[key] ? (this.alphaTime[key] -= ig.system.tick, this["control" + key].alpha = 1) : this["control" + key].alpha = this.controlAlpha
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.texts.out-text").requires("game.entities.game.objects.ui.texts.text").defines(function() {
  EntityOutText = EntityText.extend({
    textFont: "36px secondaryfont",
    textRgb: ig.color.hexToRgb("#E3E4E8"),
    textAlign: "center",
    textString: _STRINGS.Game.Out,
    zIndex: 7500,
    init: function(b, c, d) {
      this.parent(ig.system.width / 2, 90, d)
    },
    enter: function() {
      this.visible = !0;
      this.alpha = 0;
      this.tween({
        alpha: 1
      },
      0.35, {
        onComplete: function() {
          this.tween({
            alpha: 0
          },
          0.35, {
            delay: 0.35,
            onComplete: function() {
              this.kill()
            }.bind(this)
          }).start()
        }.bind(this)
      }).start();
      this.tween({
        pos: {
          y: this.pos.y + 80
        }
      },
      0.35 * 3).start()
    }
  })
});
ig.baked = !0;
ig.module("impact.entity-pool").requires("impact.game").defines(function() {
  ig.EntityPool = {
    pools: {},
    mixin: {
      staticInstantiate: function(b, c, d) {
        return ig.EntityPool.getFromPool(this.classId, b, c, d)
      },
      erase: function() {
        ig.EntityPool.putInPool(this)
      }
    },
    enableFor: function(b) {
      b.inject(this.mixin)
    },
    getFromPool: function(b, c, d, e) {
      b = this.pools[b];
      if (!b || !b.length) return null;
      b = b.pop();
      b.reset(c, d, e);
      return b
    },
    putInPool: function(b) {
      this.pools[b.classId] ? this.pools[b.classId].push(b) : this.pools[b.classId] = [b]
    },
    drainPool: function(b) {
      delete this.pools[b]
    },
    drainAllPools: function() {
      this.pools = {}
    }
  };
  ig.Game.inject({
    loadLevel: function(b) {
      ig.EntityPool.drainAllPools();
      this.parent(b)
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ball-trail").requires("game.entities.game.objects.game-object", "impact.entity-pool").defines(function() {
  EntityBallTrail = EntityGameObject.extend({
    gameplay: null,
    gravityFactor: 0,
    timedLife: 0,
    maxTimedLife: 0.35,
    zIndex: 3E3,
    maxVel: {
      x: 1E4,
      y: 1E4
    },
    maxSize: 6,
    extraSize: 0,
    circleAngle: 2 * Math.PI,
    init: function(b, c, d) {
      this.parent(b, c, d);
      this.timedLife = this.maxTimedLife
    },
    reset: function(b, c, d) {
      this.parent(b, c, d);
      this.timedLife = this.maxTimedLife
    },
    draw: function() {
      this.parent();
      var b = ig.system.context;
      b.save();
      b.globalAlpha = 0.2;
      b.beginPath();
      b.arc(this.pos.x, this.pos.y, this.timedLife / this.maxTimedLife * this.maxSize + this.extraSize, 0, this.circleAngle);
      b.fillStyle = "#8da3b9";
      b.fill();
      b.restore();
      b.globalAlpha = 1
    },
    update: function() {
      this.gameplay.isPaused || (this.timedLife -= ig.system.tick, 0 > this.timedLife && this.kill(), this.parent())
    }
  });
  ig.EntityPool.enableFor(EntityBallTrail)
});
ig.baked = !0;
ig.module("game.entities.game.objects.hit-vfx").requires("game.entities.game.objects.game-object").defines(function() {
  EntityHitVfx = EntityGameObject.extend({
    gameplay: null,
    gravityFactor: 0,
    timedLife: 0,
    maxTimedLife: 0.3,
    zIndex: 3700,
    idleImg: new ig.Image("media/graphics/game/misc/hit-vfx.png"),
    idleSheetInfo: null,
    init: function(b, c, d) {
      this.idleSheetInfo = {
        sheetImage: this.idleImg,
        sheetX: 5,
        sheetY: 1
      };
      this.parent(b, c, d);
      this.timedLife = this.maxTimedLife;
      this.addAnimation("idle", "idleSheet", 0.06, [0, 1, 2, 3, 4], !1, !0)
    },
    update: function() {
      this.timedLife -= ig.system.tick;
      0 > this.timedLife && this.kill();
      this.parent()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ball").requires("game.entities.game.objects.game-object", "game.entities.game.objects.ball-trail", "game.entities.game.objects.hit-vfx").defines(function() {
  EntityBall = EntityGameObject.extend({
    collides: ig.Entity.COLLIDES.ACTIVE,
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    prevPos: {
      x: 0,
      y: 0
    },
    gameplay: null,
    ballImgs: [new ig.Image("media/graphics/game/misc/ball1.png"), new ig.Image("media/graphics/game/misc/ball2.png"), new ig.Image("media/graphics/game/misc/ball3.png")],
    isBall: !0,
    gravityFactor: 1,
    charaServe: null,
    zIndex: 3500,
    maxVel: {
      x: 1E4,
      y: 1E4
    },
    groundDelay: 0,
    hasCallOnGround: !1,
    isFallOnPlayerSide: !1,
    isOut: !1,
    drawAsRect: !1,
    enableTrail: !0,
    justHitWithSmash: !1,
    netWidthSquared: 0,
    init: function(b, c, d) {
      this.singleFrameImage = this.ballImgs[ig.game.sessionData.selectedBall];
      this.parent(b, c, d);
      this.netWidthSquared = this.gameplay.net.size.x * this.gameplay.net.size.x;
      console.log("net witdh squared", this.netWidthSquared)
    },
    draw: function() {
      this.parent()
    },
    update: function() {
      this.gameplay.isPaused || (this.parent(), 0 < this.gravityFactor ? (40 > this.vel.x && -40 < this.vel.x || (this.currentAnim.angle = Math.atan2(this.vel.y, this.vel.x) + 1.57), this.bounciness = 400 < this.pos.y ? 0.15 : 0, 0 < this.groundDelay && (this.groundDelay -= ig.system.tick, 0 >= this.groundDelay && !this.hasCallOnGround && (this.hasCallOnGround = !0, this.gameplay.ballOnGround(this.isFallOnPlayerSide, this.isOut))), this.spawnTrail()) : this.charaServe && (this.pos.x = this.charaServe.pos.x + 80 * this.charaServe.face, this.pos.y = this.charaServe.pos.y - 130))
    },
    isHighSpeed: function() {
      var b = this.vel.x,
      c = this.vel.y;
      return b * b + c * c >= this.netWidthSquared
    },
    manualHitNet: function() {
      var b = this.gameplay.net;
      this.pos.y > b.pos.y && (0 > this.groundDelay && this.pos.x > b.pos.x && this.last.x < b.x + b.size.x) && (console.log("manualHitNet!"), this.pos.x = b.pos.x, this.vel.x = 0)
    },
    spawnTrail: function() {
      if (this.enableTrail && (this.pos.x != this.prevPos.x || this.pos.y != this.prevPos.y)) {
        var b = this.pos.x,
        c = this.pos.y,
        d = this.prevPos.x - b,
        e = this.prevPos.y - c,
        f = Math.abs(d),
        g = Math.abs(e);
        if (50 > f && 50 > g) {
          f = Math.ceil(Math.sqrt(d * d + e * e) / 3);
          d /= f;
          e /= f;
          b += 10;
          c += 10;
          for (g = 0; g < f; g++) ig.game.spawnEntity(EntityBallTrail, b + d * g, c + e * g).gameplay = this.gameplay;
          ig.game.sortEntitiesDeferred()
        }
      }
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y
    },
    reset: function(b, c) {
      this.pos.x = b;
      this.pos.y = c;
      this.currentAnim.angle = Math.PI;
      this.gravityFactor = 0;
      this.vel.x = 0;
      this.vel.y = 0;
      this.friction.x = 0;
      this.groundDelay = -1;
      this.isOut = this.hasCallOnGround = !1
    },
    hit: function(b, c, d, e) {
      this.enableTrail = d ? !1 : !0;
      this.justHitWithSmash = e;
      this.gravityFactor = 1;
      this.vel.x = b;
      this.vel.y = c;
      this.charaServe = null;
      this.gameplay.isServe = !1;
      ig.game.spawnEntity(EntityHitVfx, this.pos.x - 53, this.pos.y - 46);
      ig.game.sortEntitiesDeferred()
    },
    setCharaServe: function(b) {
      this.charaServe = b;
      this.reset( - 1E3, 0);
      this.gameplay.isServe = !0
    },
    collideWith: function(b) {
      if (b.isGround && (this.friction.x = 500, -1 == this.groundDelay)) {
        this.gameplay.isTrainingMode || (this.justHitWithSmash ? ig.soundHandler.sfxPlayer.play("clapHighSound") : ig.soundHandler.sfxPlayer.play("clapLowSound"));
        this.isFallOnPlayerSide = this.pos.x < ig.system.width / 2;
        if (70 > this.pos.x || 880 < this.pos.x) this.isOut = !0,
        ig.game.spawnEntity(EntityOutText, 0, 0);
        this.gameplay.isTrainingMode || (this.isFallOnPlayerSide ? this.isOut ? this.gameplay.ui.scoreboard.playerScore++:this.gameplay.ui.scoreboard.enemyScore++:this.isOut ? this.gameplay.ui.scoreboard.enemyScore++:this.gameplay.ui.scoreboard.playerScore++);
        this.groundDelay = 2
      }
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.net").requires("game.entities.game.objects.game-object").defines(function() {
  EntityNet = EntityGameObject.extend({
    collides: ig.Entity.COLLIDES.FIXED,
    type: ig.Entity.TYPE.A,
    checkAgainst: ig.Entity.TYPE.B,
    gravityFactor: 0,
    zIndex: 3600,
    size: {
      x: 10,
      y: 160
    },
    drawAsRect: !1,
    init: function(b, c, d) {
      this.parent(b, c, d)
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ground").requires("game.entities.game.objects.game-object").defines(function() {
  EntityGround = EntityGameObject.extend({
    collides: ig.Entity.COLLIDES.FIXED,
    type: ig.Entity.TYPE.A,
    checkAgainst: ig.Entity.TYPE.B,
    gravityFactor: 0,
    isGround: !0,
    zIndex: 3600,
    size: {
      x: 1960,
      y: 400
    },
    drawAsRect: !1,
    init: function(b, c, d) {
      this.parent(b, c, d)
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.training-machine").requires("game.entities.game.objects.game-object").defines(function() {
  EntityTrainingMachine = EntityGameObject.extend({
    gravityFactor: 0,
    gameplay: null,
    zIndex: 3600,
    serveDelay: 0,
    isServing: !1,
    face: -1,
    stamina: 100,
    staminaMax: 100,
    powerup: 100,
    powerupMax: 100,
    staminaTrail: 100,
    staminaDisplay: 100,
    powerupTime: 0,
    powerupTimeMax: 10,
    singleFrameImage: new ig.Image("media/graphics/game/misc/machine.png"),
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    doServe: function(b) {
      b || (b = 0);
      this.isServing = !0;
      this.serveDelay = b;
      this.gameplay.ball.reset(this.pos.x + 30, this.pos.y + 10);
      this.zIndex = 3600;
      ig.game.sortEntitiesDeferred()
    },
    update: function() {
      if (this.isServing && (this.serveDelay -= ig.system.tick, 0 > this.serveDelay)) {
        this.isServing = !1;
        var b = this.gameplay.player.calculateHitVel(ig.random.int(650, 830), 0.18 * -Math.PI);
        this.gameplay.ball.hit(b.x, b.y);
        this.zIndex = 3400;
        ig.game.sortEntitiesDeferred();
        ig.soundHandler.sfxPlayer.play("lobShortSound")
      }
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.texts.chara-status-text").requires("game.entities.game.objects.ui.texts.text").defines(function() {
  EntityCharaStatusText = EntityText.extend({
    textFont: "12px mainfont",
    textRgb: ig.color.hexToRgb("#E3E4E8"),
    textAlign: "center",
    zIndex: 7500,
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    enter: function() {
      this.visible = !0;
      this.alpha = 0;
      this.tween({
        alpha: 1
      },
      0.35, {
        onComplete: function() {
          this.tween({
            alpha: 0
          },
          0.35, {
            delay: 0.35,
            onComplete: function() {
              this.kill()
            }.bind(this)
          }).start()
        }.bind(this)
      }).start();
      this.tween({
        pos: {
          y: this.pos.y - 50
        }
      },
      0.35 * 3).start()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ball-prediction-test").requires("game.entities.game.objects.game-object").defines(function() {
  EntityBallPredictionTest = EntityGameObject.extend({
    gravityFactor: 0,
    zIndex: 3600,
    hitX: 0,
    hitY: 0,
    hitRadius: 0,
    timedLife: 5,
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    update: function() {
      this.timedLife -= ig.system.tick;
      0 > this.timedLife && this.kill()
    },
    draw: function() {
      ctx = ig.system.context;
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.hitX, this.hitY, this.hitRadius, 0, 2 * Math.PI, !1);
      ctx.strokeStyle = "red";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.arc(this.hitX, this.hitY, 2, 0, 2 * Math.PI, !1);
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "blue";
      ctx.arc(this.pos.x + 10, this.pos.y + 10, 5, 0, 2 * Math.PI, !1);
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.stroke();
      ctx.restore()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.newai-target-test").requires("game.entities.game.objects.game-object").defines(function() {
  EntityNewAiTargetTest = EntityGameObject.extend({
    gravityFactor: 0,
    zIndex: 3600,
    hitX: 0,
    hitY: 0,
    hitRadius: 0,
    timedLife: 1,
    tracePointColors: "#FFFFFF #FFFFFF #00FF00 #FF0000 #FFFFFF #FFFFFF".split(" "),
    tracePoints: null,
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    update: function() {
      this.timedLife -= ig.system.tick;
      0 > this.timedLife && this.kill()
    },
    draw: function() {
      ctx = ig.system.context;
      ctx.save();
      for (var b = 0; b < this.tracePoints.length; b++) ctx.fillStyle = this.tracePointColors[b],
      ctx.fillRect(this.tracePoints[b], 310, 2, 200);
      ctx.restore()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.hit-collider2").requires("game.entities.game.objects.game-object", "game.entities.game.objects.ball-prediction-test", "game.entities.game.objects.ball-illusion", "game.entities.game.objects.newai-target-test").defines(function() {
  EntityHitCollider2 = EntityGameObject.extend({
    collides: ig.Entity.COLLIDES.PASSIVE,
    type: ig.Entity.TYPE.A,
    checkAgainst: ig.Entity.TYPE.B,
    gameplay: null,
    gravityFactor: 0,
    zIndex: 3600,
    hitType: "lowhit",
    hitVel: {
      x: 0,
      y: 0
    },
    character: null,
    timedLifeMax: 0,
    timedLife: 0,
    hitDelay: 0,
    angleMin: 0,
    angleMax: 0,
    currentAngle: 0,
    angleSize: 0.4,
    ccwArea: !1,
    ccwSwing: !1,
    hitRadius: 100,
    isHit: !1,
    hasHit: !1,
    sureHit: !1,
    drawDebug: !1,
    hasDead: !1,
    init: function(b, c, d) {
      this.parent(b, c, d);
      this.playHit();
      this.character && (this.gameplay = this.character.gameplay);
      ig.game.sortEntitiesDeferred()
    },
    collideWith: function(b) {
      if (!this.hasDead && b.isBall) {
        this.character.isAI && this.recalculateHitVel(b);
        if (this.character) {
          if (this.character.isPowerupActive) if ("illusion" == this.character.powerupType) {
            var c = ig.random.int(1, 3);
            1 == c ? (ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity( - 0.15)
            }), ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity(0.15)
            })) : 2 == c ? (ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity( - 0.15)
            }), ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity( - 0.3)
            })) : 3 == c && (ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity(0.15)
            }), ig.game.spawnEntity(EntityBallIllusion, b.pos.x, b.pos.y, {
              gameplay: this.gameplay,
              vel: this.cloneRotateVelocity(0.3)
            }))
          } else "smash" == this.character.powerupType && "jumpsmash" == this.hitType && (this.hitVel.x *= this.character.superSmashMultiplier, this.hitVel.y *= this.character.superSmashMultiplier);
          this.character.increasePowerup()
        }
        b.hit(this.hitVel.x, this.hitVel.y, !1, "jumpsmash" == this.hitType);
        "jumpsmash" == this.hitType ? ig.soundHandler.sfxPlayer.play("smashSound") : "lowhit" == this.hitType ? ig.soundHandler.sfxPlayer.play("lobShortSound") : "lobhit" == this.hitType && ig.soundHandler.sfxPlayer.play("lobLongSound");
        this.hasDead = !0;
        this.drawDebug || this.kill()
      }
    },
    recalculateHitVel: function(b) {
      if ("jumpsmash" != this.hitType) {
        var c = 110,
        d = 450;
        610 < this.character.pos.x && (d = 380);
        230 > this.character.gameplay.player.pos.x && (c = 360);
        330 < this.character.gameplay.player.pos.x && (d = 190, this.hitVel.y *= 1.4);
        var e = b.pos.x,
        f = this.hitVel.y,
        g = this.character.gameplay.ground.pos.y,
        n = ig.game.gravity;
        b = b.pos.y - f * f / (2 * n);
        f = Math.abs(f / n);
        g = Math.sqrt(Math.abs(2 * (g - b) / n));
        c = (ig.random.int(c, d) - e) / (f + g);
        this.hitVel.x = c
      }
    },
    cloneRotateVelocity: function(b) {
      var c = {
        x: 0,
        y: this.hitVel.y
      },
      d = Math.cos(b);
      b = Math.sin(b);
      c.x = d * this.hitVel.x + b * this.hitVel.y;
      c.y = d * this.hitVel.y - b * this.hitVel.x;
      return c
    },
    update: function() {
      if (!this.hasDead && !this.gameplay.isPaused) if (this.parent(), 0 > this.hitDelay) {
        this.timedLife -= ig.system.tick;
        this.currentAngle = this.angleMin + (this.angleMax - this.angleMin) * (1 - this.timedLife / this.timedLifeMax);
        var b = this.gameplay.ball.pos,
        b = this.normalizeAngle(Math.atan2(b.y + 10 - this.pos.y, b.x + 10 - this.pos.x)),
        c = this.normalizeAngle(this.currentAngle);
        this.isBallInDistance() && b > c - this.angleSize && b < c + this.angleSize || this.sureHit ? this.drawDebug ? (this.isHit = !0, this.hasHit || (this.hasHit = !0, this.collideWith(this.gameplay.ball))) : (this.collideWith(this.gameplay.ball), this.kill(), this.hasDead = !0) : this.isHit = !1;
        0 > this.timedLife && (this.kill(), this.hasDead = !0)
      } else this.hitDelay -= ig.system.tick
    },
    normalizeAngle: function(b) {
      for (var c = Math.PI,
      d = 2 * c; b < -c;) b += d;
      for (; b > c;) b -= d;
      return b
    },
    radToDeg: function(b) {
      return Math.floor(180 * b / Math.PI)
    },
    draw: function() {
      this.parent();
      if (this.drawDebug) {
        var b = ig.system.context;
        b.save();
        b.beginPath();
        b.arc(this.pos.x, this.pos.y, this.hitRadius, this.angleMin, this.angleMax, this.ccwArea);
        b.strokeStyle = "red";
        b.lineWidth = 1;
        b.stroke();
        b.beginPath();
        b.lineWidth = 2;
        b.arc(this.pos.x, this.pos.y, 2, 0, 2 * Math.PI, !1);
        b.stroke();
        this.timedLife < this.timedLifeMax && (b.globalAlpha = 0.5, b.fillStyle = "white", this.isHit && (b.fillStyle = "green"), b.lineWidth = 5, b.beginPath(), b.moveTo(this.pos.x, this.pos.y), b.arc(this.pos.x, this.pos.y, this.hitRadius, this.currentAngle - this.angleSize, this.currentAngle + this.angleSize, this.ccwSwing), b.moveTo(this.pos.x, this.pos.y), b.fill(), b.globalAlpha = 1);
        b.beginPath();
        b.lineWidth = 5;
        b.strokeStyle = "blue";
        var c = this.gameplay.ball.pos;
        b.arc(c.x + 10, c.y + 10, 5, 0, 2 * Math.PI, !1);
        b.moveTo(this.pos.x, this.pos.y);
        b.stroke();
        b.restore()
      }
    },
    isBallInDistance: function() {
      var b = this.gameplay.ball.pos,
      c = b.x - this.pos.x,
      b = b.y - this.pos.y;
      return c * c + b * b <= this.hitRadius * this.hitRadius
    },
    playHit: function() {
      switch (this.hitType) {
      case "lowhit":
        this.pos.x -= 0 * this.character.characterScale;
        this.pos.y -= 180 * this.character.characterScale;
        this.timedLifeMax = this.timedLife = 0.2 * ig.hitSpeedFactor;
        this.hitDelay = 0.2 * ig.hitSpeedFactor;
        this.hitRadius = 160;
        this.angleMin = 80 * Math.PI / 180;
        this.angleMax = -80 * Math.PI / 180;
        this.ccwArea = !0;
        this.ccwSwing = !1;
        this.angleSize = 0.6; - 1 == this.character.face && (this.angleMin = 100 * Math.PI / 180, this.angleMax = 260 * Math.PI / 180, this.ccwSwing = this.ccwArea = !1);
        break;
      case "lobhit":
        this.pos.x -= 0 * this.character.characterScale;
        this.pos.y -= 180 * this.character.characterScale;
        this.timedLifeMax = this.timedLife = 0.1 * ig.hitSpeedFactor;
        this.hitDelay = 0.3 * ig.hitSpeedFactor;
        this.hitRadius = 160;
        this.angleMin = -120 * Math.PI / 180;
        this.angleMax = 50 * Math.PI / 180;
        this.ccwSwing = this.ccwArea = !1;
        this.angleSize = 0.7; - 1 == this.character.face && (this.angleMin = 300 * Math.PI / 180, this.angleMax = 60 * Math.PI / 180, this.ccwArea = !0, this.ccwSwing = !1);
        break;
      case "jumpsmash":
        this.pos.x -= 0 * this.character.characterScale,
        this.pos.y -= 280 * this.character.characterScale,
        this.timedLifeMax = this.timedLife = 0.16 * ig.hitSpeedFactor,
        this.hitDelay = 0.8 * ig.hitSpeedFactor,
        this.hitRadius = 160,
        this.angleMin = -110 * Math.PI / 180,
        this.angleMax = 40 * Math.PI / 180,
        this.ccwSwing = this.ccwArea = !1,
        this.angleSize = 0.7,
        -1 == this.character.face && (this.angleMin = 290 * Math.PI / 180, this.angleMax = 140 * Math.PI / 180, this.ccwArea = !0, this.ccwSwing = !1)
      }
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.character").requires("plugins.spriter.spriter-display", "game.entities.game.objects.ui.texts.chara-status-text", "game.entities.game.objects.ball-prediction-test", "game.entities.game.objects.hit-collider2", "plugins.spriter.scml").defines(function() {
  ig.hitSpeedFactor = 0.5;
  EntityCharacter = SpriterDisplay.extend({
    boy1Scml: new SpriterScml("media/graphics/game/chara/boy1/chara.scml"),
    boy2Scml: new SpriterScml("media/graphics/game/chara/boy2/chara.scml"),
    boy3Scml: new SpriterScml("media/graphics/game/chara/boy3/chara.scml"),
    girl1Scml: new SpriterScml("media/graphics/game/chara/girl1/chara.scml"),
    girl2Scml: new SpriterScml("media/graphics/game/chara/girl2/chara.scml"),
    girl3Scml: new SpriterScml("media/graphics/game/chara/girl3/chara.scml"),
    name: "",
    zIndex: 3E3,
    shadow: new ig.Image("media/graphics/game/misc/chara-shadow.png"),
    cursor: new ig.Image("media/graphics/game/ui/game-chara-cursor.png"),
    cursorScale: 0,
    cursorAlpha: 0,
    cursorBreathe: 1,
    cursorBreathSpeed: 0.5,
    xLimitMin: 130,
    xLimitMax: 400,
    xLimitServeMin: 140,
    xLimitServeMax: 250,
    face: 1,
    direction: 0,
    moveSpeed: 200,
    moveSpeedMultiplier: 1,
    speedBurstMultiplier: 2,
    maxVel: {
      x: 1E4,
      y: 1E4
    },
    gravityFactor: 0,
    isAI: !1,
    characterScale: 0.75,
    actionDuration: 0,
    stamina: 100,
    staminaMax: 100,
    powerup: 100,
    powerupMax: 100,
    staminaRegen: 1,
    powerupBonus: 20,
    walkCost: 5,
    shortCost: 10,
    longCost: 15,
    smashCost: 20,
    shortHitPower: 530,
    longHitPower: 675,
    jumpSmashPower: 1200,
    superSmashMultiplier: 2,
    lobAngle: 0.18 * Math.PI,
    lowAngle: 0.18 * Math.PI,
    jumpsmashAngle: 0.66 * Math.PI,
    staminaTrail: 0,
    staminaDisplay: 0,
    staminaTrailDelay: 0,
    staminaTrailDelayMax: 0.5,
    powerupTime: 0,
    powerupTimeMax: 10,
    isPowerupActive: !1,
    hitDelay: 0.15 * ig.hitSpeedFactor,
    smashDelay: 0.4,
    inPlay: !0,
    gameplay: null,
    powerupType: null,
    nextPowerupIncrease: 0,
    init: function(b, c, d) {
      d.scml = this[d.name + "Scml"];
      this.parent(b, c, d);
      this.scale.x = this.characterScale;
      this.scale.y = this.characterScale;
      this.resetStamina();
      this.resetPowerup()
    },
    draw: function() {
      this.shadow.draw(this.pos.x - 62, this.pos.y - 12);
      this.isPowerupActive ? (this.cursorAlpha = 1 > this.cursorAlpha ? this.cursorAlpha + ig.system.tick / 0.5 : 1, 0.8 > this.cursorScale ? this.cursorScale += ig.system.tick / 0.5 : (this.cursorScale += this.cursorBreathe * this.cursorBreathSpeed * ig.system.tick, 1 < this.cursorScale ? (this.cursorScale = 1, this.cursorBreathe = -1) : 0.8 > this.cursorScale && (this.cursorScale = 0.8, this.cursorBreathe = 1)), this.drawCursor()) : 0 < this.cursorAlpha && (this.cursorAlpha -= ig.system.tick / 0.5, 0 > this.cursorAlpha && (this.cursorAlpha = 0), this.drawCursor());
      this.parent()
    },
    drawCursor: function() {
      var b = ig.system.context;
      b.save();
      1 > this.cursorAlpha && (b.globalAlpha = this.cursorAlpha);
      1 != this.cursorScale ? (b.translate(ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y)), b.scale(this.cursorScale, this.cursorScale), this.cursor.draw( - 96, -30)) : this.cursor.draw(this.pos.x - 96, this.pos.y - 30);
      1 > this.cursorAlpha && (b.globalAlpha = 1);
      b.restore()
    },
    update: function() {
      if (this.gameplay.isPaused) this.isAI || (ig.Timer.timeScale = 1);
      else {
        if (!this.isAI) if (this.isPowerupActive && "time" == this.powerupType) {
          var b = this.gameplay.ball;
          ig.Timer.timeScale = 0 > b.vel.x && 0 == b.friction.x && 0 >= this.actionDuration ? 0.5 : 1
        } else ig.Timer.timeScale = 1;
        this.parent();
        0 < this.actionDuration ? this.action() : this.move();
        this.updateStamina();
        this.updatePowerup();
        this.isAI && this.updateAi()
      }
    },
    resetStamina: function() {
      this.staminaTrail = this.staminaDisplay = this.stamina = this.staminaMax
    },
    resetPowerup: function() {
      this.powerup = 0
    },
    updateStamina: function() {
      if (this.inPlay) {
        var b = ig.system.tick;
        this.stamina += this.staminaRegen * b * (this.gameplay.isTrainingMode ? 10 : 1);
        0 > this.stamina && (this.stamina = 0);
        this.stamina > this.staminaMax && (this.stamina = this.staminaMax);
        this.staminaDisplay += (this.stamina - this.staminaDisplay) / 5;
        0 >= this.staminaTrailDelay ? this.staminaTrail > this.stamina ? (this.staminaTrail += (this.stamina - this.staminaTrail) / 5, -1 < this.stamina - this.staminaTrail && (this.staminaTrail = this.stamina)) : this.staminaTrail = this.stamina: this.staminaTrailDelay -= b
      }
    },
    action: function() {
      this.direction = this.vel.x = 0;
      this.actionDuration -= ig.system.tick;
      0 >= this.actionDuration && (this.setAnimationByName("idle"), this.setAnimationSpeedPercent(100), this.actionDuration = 0)
    },
    prevDir: 0,
    move: function() {
      this.prevDir != this.direction && (this.prevDir = this.direction, -1 == this.direction && 1 == this.face || 1 == this.direction && -1 == this.face ? ig.soundHandler.sfxPlayer.play("squeakBackSound") : (1 == this.direction && 1 == this.face || -1 == this.direction && -1 == this.face) && ig.soundHandler.sfxPlayer.play("squeakForwardSound"));
      this.moveSpeedMultiplier = this.isPowerupActive && "speed" == this.powerupType ? this.speedBurstMultiplier: 1;
      if ( - 1 == this.direction && 1 == this.face || 1 == this.direction && -1 == this.face) this.setAnimationByName("walkbackward", !1),
      this.vel.x = -this.moveSpeed * this.moveSpeedMultiplier,
      this.consumeStamina(this.walkCost * ig.system.tick);
      else if (1 == this.direction && 1 == this.face || -1 == this.direction && -1 == this.face) this.setAnimationByName("walkforward", !1),
      this.vel.x = this.moveSpeed * this.moveSpeedMultiplier,
      this.consumeStamina(this.walkCost * ig.system.tick);
      else if ("walkbackward" == this.currentAnimationName || "walkforward" == this.currentAnimationName) this.setAnimationByName("idle"),
      this.vel.x = 0;
      this.direction = 0;
      this.gameplay.isServe ? this.pos.x < this.xLimitServeMin ? this.pos.x += (this.xLimitServeMin - this.pos.x) / 10 : this.pos.x > this.xLimitServeMax && (this.pos.x += (this.xLimitServeMax - this.pos.x) / 10) : this.pos.x < this.xLimitMin ? this.pos.x = this.xLimitMin: this.pos.x > this.xLimitMax && (this.pos.x = this.xLimitMax)
    },
    consumeStamina: function(b) {
      this.isPowerupActive || (this.nextPowerupIncrease = b);
      this.gameplay.isServe || (this.stamina -= b, this.staminaTrailDelay = 1 < b ? this.staminaTrailDelayMax: 0.1)
    },
    increasePowerup: function() {
      this.isPowerupActive || (this.powerup += this.nextPowerupIncrease, this.powerup >= this.powerupMax && (this.powerup = this.powerupMax, this.activatePowerup()))
    },
    activatePowerup: function() {
      ig.soundHandler.sfxPlayer.play("powerSound");
      this.isPowerupActive = !0;
      this.powerupTime = this.powerupTimeMax;
      this.cursorAlpha = this.cursorScale = 0
    },
    updatePowerup: function() {
      this.isPowerupActive && (!this.gameplay.isServe && 0 == this.gameplay.ball.friction.x) && (this.powerupTime -= ig.system.tick, this.powerup = this.powerupTime / this.powerupTimeMax * this.powerupMax, 0 > this.powerupTime && (this.powerup = 0, this.isPowerupActive = !1))
    },
    isBallLow: function() {
      var b = this.gameplay.ball,
      c = this.hitDelay;
      return b.pos.y + b.vel.y * c + 0.5 * ig.game.gravity * c * c > this.pos.y - 190
    },
    shorthit: function() {
      if (! (0 < this.actionDuration)) if (this.stamina < this.shortCost) this.spawnNoStamina();
      else {
        var b = this.shortHitPower; ! this.isAi && 330 < this.pos.x && (b *= 0.8);
        this.consumeStamina(this.shortCost);
        this.isBallLow() ? this.lowhit(b) : this.lobhit(b)
      }
    },
    longhit: function() {
      if (! (0 < this.actionDuration)) if (this.stamina < this.longCost) this.spawnNoStamina();
      else {
        this.consumeStamina(this.longCost);
        var b = this.longHitPower; ! this.isAi && 280 < this.pos.x && (b *= 0.89);
        this.isBallLow() ? this.lowhit(b) : this.lobhit(b)
      }
    },
    serve: function() {
      this.actionDuration = 1 * ig.hitSpeedFactor;
      this.setAnimationSpeedPercent(100 * (1 / this.actionDuration));
      this.setAnimationByName("lowhit");
      ig.game.spawnEntity(EntityHitCollider2, this.pos.x, this.pos.y, {
        character: this,
        hitType: "lowhit",
        hitVel: this.calculateHitVel(ig.random.bool() ? this.shortHitPower: this.longHitPower, this.lowAngle * this.face),
        sureHit: !0
      })
    },
    calculateHitVel: function(b, c) {
      var d = Math.cos(c);
      return {
        x: Math.sin(c) * b,
        y: -d * b
      }
    },
    lobhit: function(b) {
      this.actionDuration = 1 * ig.hitSpeedFactor;
      this.setAnimationSpeedPercent(100 * (1 / this.actionDuration));
      this.setAnimationByName("lobhit");
      ig.game.spawnEntity(EntityHitCollider2, this.pos.x, this.pos.y, {
        character: this,
        hitType: "lobhit",
        hitVel: this.calculateHitVel(b, this.lobAngle * this.face)
      })
    },
    lowhit: function(b) {
      this.actionDuration = 1 * ig.hitSpeedFactor;
      this.setAnimationSpeedPercent(100 * (1 / this.actionDuration));
      this.setAnimationByName("lowhit");
      ig.game.spawnEntity(EntityHitCollider2, this.pos.x, this.pos.y, {
        character: this,
        hitType: "lowhit",
        hitVel: this.calculateHitVel(b, this.lowAngle * this.face)
      })
    },
    jumpsmash: function() {
      0 < this.actionDuration || this.gameplay.isServe || (this.stamina < this.smashCost ? this.spawnNoStamina() : (this.actionDuration = 1, this.consumeStamina(this.smashCost), this.setAnimationByName("jumpsmash"), ig.game.spawnEntity(EntityHitCollider2, this.pos.x, this.pos.y, {
        character: this,
        hitType: "jumpsmash",
        hitVel: this.calculateHitVel(this.jumpSmashPower, this.jumpsmashAngle * this.face)
      })))
    },
    setAsEnemy: function() {
      this.xLimitMax = 833;
      this.xLimitMin = 563;
      this.xLimitServeMax = 773;
      this.xLimitServeMin = 763;
      this.isAI = !0;
      this.face = -1;
      this.scale.x = -1 * this.characterScale;
      this.scale.y = this.characterScale
    },
    spawnNoStamina: function() {
      ig.game.spawnEntity(EntityCharaStatusText, this.pos.x - 60, this.pos.y - 60, {
        textString: _STRINGS.Game.NoStamina
      })
    },
    aiHasPredictBallLocation: !1,
    aiHasPredictBallSmashable: !1,
    aiIsBallSmashable: !1,
    aiPredictionX: 0,
    aiBallArrivalTime: 0,
    aiHasHit: !1,
    aiCooldown: 0,
    aiDelay: 0.5,
    updateAi: function() {
      if (0 < this.aiCooldown) this.aiCooldown -= ig.system.tick;
      else if (this.gameplay.isServe) this.aiHasHit = this.aiHasPredictBallSmashable = this.aiHasPredictBallLocation = !1;
      else if (0 < this.gameplay.ball.vel.x) if (this.predictIsBallSmashable(), this.aiIsBallSmashable) this.aiBallArrivalTime -= ig.system.tick,
      0.1 >= this.aiBallArrivalTime && !this.aiHasHit && (this.aiHasHit = !0, this.aiCooldown = this.aiDelay, this.jumpsmash());
      else {
        this.predictLobBallLocation();
        var b = this.aiPredictionX - this.pos.x;
        this.aiBallArrivalTime -= ig.system.tick;
        this.aiPredictionX > this.xLimitMax + 50 || ( - 50 > b ? this.direction = 1 : 50 < b && (this.direction = -1), 0.1 >= this.aiBallArrivalTime && !this.aiHasHit && (this.aiHasHit = !0, this.aiCooldown = this.aiDelay, 730 < this.pos.x ? this.longhit() : 600 > this.pos.x ? this.shorthit() : ig.random.bool() ? this.shorthit() : this.longhit()))
      } else this.aiHasHit = this.aiHasPredictBallSmashable = this.aiHasPredictBallLocation = !1
    },
    predictLobBallLocation: function() {
      if (!this.aiHasPredictBallLocation) if (this.aiHasPredictBallLocation = !0, "jumpsmash" == this.gameplay.player.currentAnimationName) this.aiPredictionX = this.pos.x,
      this.aiBallArrivalTime = ig.random.float(0.1, 0.25);
      else {
        var b = this.pos.y - 200,
        c = this.pos.y - 120,
        d = this.gameplay.ball,
        e = -d.vel.y / ig.game.gravity,
        e = Math.sqrt(d.vel.x * d.vel.x + d.vel.y * d.vel.y),
        e = Math.abs(e * (d.vel.y / e) / ig.game.gravity),
        f = d.pos.y + d.vel.y * e + 0.5 * ig.game.gravity * e * e,
        b = b - f;
        0 > b && (b = c - f);
        c = Math.abs(Math.sqrt(Math.abs(2 * b) / ig.game.gravity));
        c = e + c;
        this.aiPredictionX = d.pos.x + d.vel.x * c + 80;
        this.aiBallArrivalTime = c;
        this.gameplay.player.isPowerupActive && "illusion" == this.gameplay.player.powerupType && (this.aiPredictionX += ig.random.bool() ? -100 : 100)
      }
    },
    predictIsBallSmashable: function() {
      if (!this.aiHasPredictBallSmashable) {
        this.aiHasPredictBallSmashable = !0;
        var b = this.gameplay.ball;
        if (0 < b.vel.y || 600 > this.pos.x) this.aiIsBallSmashable = !1;
        else {
          var c = Math.abs((this.pos.x - 50 - b.pos.x) / b.vel.x);
          if (c < 0.9 * ig.hitSpeedFactor) this.aiIsBallSmashable = !1;
          else {
            var b = b.pos.y + b.vel.y * c + 0.5 * ig.game.gravity * c * c,
            d = this.pos.y - 250 - 60;
            b < this.pos.y - 250 && b > d ? (this.aiIsBallSmashable = !0, this.aiPredictionX = this.pos.x, this.aiBallArrivalTime = c - 0.9 * ig.hitSpeedFactor) : this.aiIsBallSmashable = !1
          }
        }
      }
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.popups.pause-popup").requires("game.entities.game.objects.ui.popups.popup", "game.entities.game.objects.game-object", "game.entities.game.objects.ui.buttons.button", "game.entities.game.objects.ui.buttons.volume-slider-button", "game.entities.game.objects.ui.texts.text").defines(function() {
  EntityPausePopup = EntityPopup.extend({
    images: [new ig.Image("media/graphics/game/ui/popup-bg.png"), new ig.Image("media/graphics/game/ui/volume-bar-bg.png"), new ig.Image("media/graphics/game/ui/button-replay.png"), new ig.Image("media/graphics/game/ui/button-resume.png"), new ig.Image("media/graphics/game/ui/button-main-menu.png")],
    exitDelay: 0.3,
    name: "pause-popup",
    init: function(b, c, d) {
      this.parent(b, c, d);
      this.spawnMember(EntityGameObject, 210, 79, {
        singleFrameImage: this.images[0],
        entryType: "fadeIn",
        exitType: "fadeOut",
        entryDelay: 0.2,
        exitDelay: 0.3
      },
      11E3);
      this.spawnMember(EntityText, 510, 127, {
        textString: _STRINGS.Game.Paused,
        textFont: "48px mainfont",
        textRgb: ig.color.hexToRgb("#1261a6"),
        textAlign: "center",
        entryType: "fadeIn",
        exitType: "fadeOut",
        entryDelay: 0.2,
        exitDelay: 0.3
      },
      12E3);
      this.spawnMember(EntityVolumeSliderButton, 380, 200, {
        singleFrameImage: this.images[1],
        entryType: "fadeIn",
        exitType: "fadeOut",
        entryDelay: 0.2,
        exitDelay: 0.3,
        value: ig.game.sessionData.sound
      },
      12E3).onStopSliding.add(this.onSfxValueChanged, this);
      this.spawnMember(EntityVolumeSliderButton, 380, 280, {
        singleFrameImage: this.images[1],
        entryType: "fadeIn",
        exitType: "fadeOut",
        entryDelay: 0.2,
        exitDelay: 0.3,
        value: ig.game.sessionData.music
      },
      12E3).onStopSliding.add(this.onBgmValueChanged, this);
      this.spawnMember(EntityButton, 304, 357, {
        singleFrameImage: this.images[2],
        entryType: "fadeJumpIn",
        exitType: "fadeOut",
        entryDelay: 0.4,
        exitDelay: 0
      },
      12E3).onClicked.add(this.onClickRetry, this);
      this.spawnMember(EntityButton, 424, 360, {
        singleFrameImage: this.images[3],
        entryType: "fadeJumpIn",
        exitType: "fadeOut",
        entryDelay: 0.4,
        exitDelay: 0
      },
      12E3).onClicked.add(this.onClickResume, this);
      this.spawnMember(EntityButton, 544, 360, {
        singleFrameImage: this.images[4],
        entryType: "fadeJumpIn",
        exitType: "fadeOut",
        entryDelay: 0.4,
        exitDelay: 0
      },
      12E3).onClicked.add(this.onClickMainMenu, this)
    },
    _fnRetry: function() {
      this.exit();
      this.isAllowInput = !1;
      this.controller.goToLevel(ig.game.Gameplay);
      ig.soundHandler.sfxPlayer.play(ig.game.clickSound)
    },
    onClickRetry: function() {
      this.isAllowInput && (ig.gd ? ig.gd.show(function() {
        this._fnRetry()
      }.bind(this)) : this._fnRetry())
    },
    onClickResume: function() {
      this.isAllowInput && (this.exit(), this.isAllowInput = !1, ig.soundHandler.sfxPlayer.play(ig.game.clickSound))
    },
    onClickMainMenu: function() {
      this.isAllowInput && (this.exit(), this.isAllowInput = !1, this.controller.goToLevel(ig.game.MainMenu), ig.soundHandler.sfxPlayer.play(ig.game.clickSound))
    },
    onBgmValueChanged: function(b) {
      console.log("Bgm value changed :", b);
      ig.soundHandler.bgmPlayer.volume(b);
      ig.game.sessionData.music = b;
      ig.game.saveAll()
    },
    onSfxValueChanged: function(b) {
      console.log("Sfx value changed :", b);
      ig.soundHandler.sfxPlayer.volume(b);
      ig.soundHandler.sfxPlayer.play(ig.game.clickSound);
      ig.game.sessionData.sound = b;
      ig.game.saveAll()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.game-banner").requires("game.entities.game.objects.game-object", "game.entities.game.objects.ui.texts.text").defines(function() {
  EntityGameBanner = EntityGameObject.extend({
    zIndex: 7600,
    members: [],
    singleFrameImage: new ig.Image("media/graphics/game/ui/banner-bg.png"),
    onComplete: null,
    gameNumber: 1,
    scorePlayerBefore: 0,
    scoreEnemyBefore: 0,
    scorePlayerAfter: 0,
    scoreEnemyAfter: 0,
    gameplay: null,
    gameScoreText: null,
    mode: "matchstart",
    init: function(b, c, d) {
      this.members = [];
      this.onComplete = new ig.Signal;
      this.parent(b, c, d);
      b = this.gameplay.ui.scoreboard;
      this.gameNumber = b.playerGameScore + b.enemyGameScore + 1;
      this.scorePlayerAfter = this.scorePlayerBefore = b.playerGameScore;
      this.scoreEnemyAfter = this.scoreEnemyBefore = b.enemyGameScore; (this, this.gameplay.isPlayerWin) ? this.scorePlayerAfter = this.scorePlayerBefore + 1 : this.scoreEnemyAfter = this.scoreEnemyBefore + 1;
      "matchstart" == this.mode ? (this.addMember(ig.game.spawnEntity(EntityText, 480, 60, {
        textString: _STRINGS.Game.MatchStart,
        textFont: "48px mainfont",
        textRgb: ig.color.hexToRgb("#ffffff"),
        textAlign: "center",
        zIndex: this.zIndex + 1
      })), this.addMember(ig.game.spawnEntity(EntityText, 480, 90, {
        textString: _STRINGS.Game.BestOfThree,
        textFont: "28px mainfont",
        textRgb: ig.color.hexToRgb("#ffffff"),
        textAlign: "center",
        zIndex: this.zIndex + 1
      }))) : "gamestart" == this.mode ? (b = _STRINGS.Game.GameStart.split("#").join("" + this.gameNumber), this.addMember(ig.game.spawnEntity(EntityText, 480, 75, {
        textString: b,
        textFont: "48px mainfont",
        textRgb: ig.color.hexToRgb("#ffffff"),
        textAlign: "center",
        zIndex: this.zIndex + 1
      }))) : "gameset" == this.mode ? (b = _STRINGS.Game.GameSet.split("#").join("" + this.gameNumber), this.addMember(ig.game.spawnEntity(EntityText, 480, 40, {
        textString: b,
        textFont: "28px mainfont",
        textRgb: ig.color.hexToRgb("#ffffff"),
        textAlign: "center",
        zIndex: this.zIndex + 1
      })), this.gameScoreText = ig.game.spawnEntity(EntityText, 480, 90, {
        textString: this.scorePlayerBefore + " : " + this.scoreEnemyBefore,
        textFont: "48px secondaryfont",
        textRgb: ig.color.hexToRgb("#ffffff"),
        textAlign: "center",
        zIndex: this.zIndex + 1
      }), this.addMember(this.gameScoreText)) : "matchset" == this.mode && this.addMember(ig.game.spawnEntity(EntityText, 480, 75, {
        textString: _STRINGS.Game.MatchOver,
        textFont: "48px mainfont",
        textRgb: ig.color.hexToRgb("#ffffff"),
        textAlign: "center",
        zIndex: this.zIndex + 1
      }));
      ig.game.sortEntitiesDeferred()
    },
    addMember: function(b) {
      b = {
        entity: b,
        x: b.pos.x,
        y: b.pos.y
      };
      this.members.push(b);
      this.updateMember(b)
    },
    updateMember: function(b) {
      var c = b.entity,
      d = b.x;
      b = b.y;
      c.alpha = this.alpha;
      c.pos.x = this.pos.x + d;
      c.pos.y = this.pos.y + b
    },
    update: function() {
      this.parent();
      for (var b = 0; b < this.members.length; b++) this.updateMember(this.members[b])
    },
    enter: function() {
      this.visible = !0;
      this.alpha = 0;
      this.pos.x = 0;
      this.pos.y = -120;
      "matchstart" == this.mode && (this.entryDelay = 0.5);
      this.tween({
        alpha: 1,
        pos: {
          y: 215
        }
      },
      0.2, {
        delay: this.entryDelay,
        easing: ig.Tween.Easing.Quadratic.EaseOut,
        onComplete: function() {
          this.middle()
        }.bind(this)
      }).start()
    },
    middle: function() {
      "matchstart" == this.mode || "gamestart" == this.mode ? this.delayedCall(0.8,
      function() {
        this.exit()
      }.bind(this)) : "gameset" == this.mode ? (this.delayedCall(0.5,
      function() {
        this.setGameScore();
        this.gameScoreText.textString = this.scorePlayerAfter + " : " + this.scoreEnemyAfter
      }.bind(this)), this.delayedCall(1.2,
      function() {
        this.exit()
      }.bind(this))) : "matchset" == this.mode && (this.setGameScore(), this.delayedCall(0.8,
      function() {
        this.gameplay.endGame()
      }.bind(this)))
    },
    setGameScore: function() {
      this.gameplay.ui.scoreboard.playerGameScore = this.scorePlayerAfter;
      this.gameplay.ui.scoreboard.enemyGameScore = this.scoreEnemyAfter
    },
    exit: function() {
      this.tween({
        alpha: 0,
        pos: {
          y: 540
        }
      },
      0.2, {
        easing: ig.Tween.Easing.Quadratic.EaseIn,
        onComplete: function() {
          this.onComplete.dispatch();
          this.kill()
        }.bind(this)
      }).start()
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.texts.deuce-text").requires("game.entities.game.objects.ui.texts.out-text").defines(function() {
  EntityDeuceText = EntityOutText.extend({
    textString: _STRINGS.Game.Deuce,
    init: function(b, c, d) {
      this.parent(b, c, d)
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.texts.game-point-text").requires("game.entities.game.objects.ui.texts.out-text").defines(function() {
  EntityGamePointText = EntityOutText.extend({
    textString: _STRINGS.Game.GamePoint,
    init: function(b, c, d) {
      this.parent(b, c, d)
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.texts.match-point-text").requires("game.entities.game.objects.ui.texts.out-text").defines(function() {
  EntityMatchPointText = EntityOutText.extend({
    textString: _STRINGS.Game.MatchPoint,
    init: function(b, c, d) {
      this.parent(b, c, d)
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.tutorial").requires("game.entities.game.objects.game-object").defines(function() {
  EntityTutorial = EntityGameObject.extend({
    collides: ig.Entity.COLLIDES.NEVER,
    type: ig.Entity.TYPE.A,
    transitionInDelay: 0,
    textString: "",
    textFont: "20px mainfont",
    textRgb: ig.color.hexToRgb("#ffffff"),
    textAlign: "center",
    textVAlign: "center",
    textLineSpacing: 1,
    textOffset: {
      x: 0,
      y: 0
    },
    size: {
      x: 960,
      y: 540
    },
    controller: null,
    _previousTextString: "",
    _multiline: !1,
    _lines: [],
    _lineSpacing: 0,
    state: 0,
    changeStateDelay: 0,
    changeStateDelayMax: 0.1,
    outlineAlpha: 0,
    outlineAlphaDirection: 1,
    init: function(b, c, d) {
      this.parent(b, c, d);
      this.alpha = this.state = 1;
      this.zIndex = 999999;
      this.visible = !0
    },
    draw: function() {
      this.parent();
      var b = ig.system.tick;
      0 < this.changeStateDelay && (this.changeStateDelay -= b);
      this.outlineAlpha += 1.5 * this.outlineAlphaDirection * b;
      0 > this.outlineAlpha ? (this.outlineAlpha = 0, this.outlineAlphaDirection = 1) : 1 < this.outlineAlpha && (this.outlineAlpha = 1, this.outlineAlphaDirection = -1);
      this.drawTutorialSign();
      this.drawState();
      this.drawText()
    },
    drawState: function() {
      var b = ig.ua.mobile ? "Mobile": "Desktop";
      4 < this.state && (b = "Both");
      this.textString = 11 > this.state ? _STRINGS.Tutorial[b][this.state] : "";
      this.textAlign = "center";
      switch (this.state) {
      case 1:
        this.textAlign = "start";
        this.textOffset.x = 100;
        this.textOffset.y = 420;
        ig.ua.mobile ? this.drawRect(80, 380, 230, 60) : this.drawRect(80, 380, 340, 60);
        this.drawOutline(3, 457, 215, 80);
        break;
      case 2:
        this.textAlign = "start";
        this.textOffset.x = 600;
        this.textOffset.y = 420;
        ig.ua.mobile ? (this.textOffset.x = 550, this.drawRect(530, 380, 180, 60)) : this.drawRect(580, 380, 215, 60);
        this.drawOutline(740, 457, 115, 80);
        break;
      case 3:
        this.textAlign = "start";
        this.textOffset.x = 600;
        this.textOffset.y = 420;
        ig.ua.mobile ? (this.textOffset.x = 550, this.drawRect(530, 380, 180, 60)) : this.drawRect(580, 380, 215, 60);
        this.drawOutline(855, 457, 103, 80);
        break;
      case 4:
        this.textAlign = "start";
        this.textOffset.x = 570;
        this.textOffset.y = 420;
        ig.ua.mobile ? (this.textOffset.x = 520, this.drawRect(500, 380, 200, 60)) : this.drawRect(550, 380, 225, 60);
        this.drawOutline(855, 375, 103, 80);
        break;
      case 5:
        this.textAlign = "start";
        this.textOffset.x = 120;
        this.textOffset.y = 100;
        this.drawRect(95, 60, 155, 60);
        this.drawOutline(2, 23, 390, 20);
        break;
      case 6:
        this.textAlign = "start";
        this.textOffset.x = 120;
        this.textOffset.y = 100;
        this.drawRect(95, 60, 145, 60);
        this.drawOutline(2, 10, 390, 20);
        break;
      case 7:
        this.textOffset.x = 231;
        this.textOffset.y = 140;
        this.drawRect(95, 100, 273, 65);
        this.drawOutline(2, 10, 390, 20);
        break;
      case 8:
        this.textOffset.x = 235;
        this.textOffset.y = 140;
        this.drawRect(85, 100, 300, 65);
        this.drawOutline(2, 10, 400, 20);
        break;
      case 9:
        this.textOffset.x = 480;
        this.textOffset.y = 140;
        this.drawRect(335, 90, 290, 85);
        this.drawOutline(380, 5, 200, 55);
        break;
      case 10:
        this.textOffset.x = 480,
        this.textOffset.y = 270,
        this.drawRect(360, 230, 240, 60)
      }
    },
    drawRect: function(b, c, d, e) {
      var f = ig.system.context;
      f.save();
      f.globalAlpha = 0.6;
      f.fillStyle = "#000000";
      f.fillRect(b, c, d, e);
      f.restore();
      f.globalAlpha = 1
    },
    drawOutline: function(b, c, d, e) {
      var f = ig.system.context;
      f.save();
      f.globalAlpha = this.outlineAlpha;
      f.strokeStyle = "#FFFFFF";
      f.lineWidth = 4;
      f.strokeRect(b, c, d, e);
      f.restore();
      f.globalAlpha = 1
    },
    drawTutorialSign: function() {
      if (! (9 < this.state)) {
        var b = ig.system.context;
        b.save();
        b.fillStyle = "rgba(0,0,0,0.7)";
        b.fillRect(350, 495, 260, 33);
        b.fillStyle = "rgba(255,255,255," + this.outlineAlpha + ")";
        b.font = "20px mainfont";
        b.textAlign = "center";
        b.fillText(_STRINGS.Tutorial.TapAny, 480, 520);
        b.restore()
      }
    },
    drawText: function() {
      if (!0 == this.visible && 0 < this.textString.length) {
        this._previousTextString != this.textString && (this._previousTextString = this.textString, this._lines = this.textString.split(/\r?\n/), 1 < this._lines.length ? (this._multiline = !0, this._lineSpacing = parseInt(this.textFont.split("px")[0].split(" ").pop()) * this.textLineSpacing) : this._multiline = !1);
        var b = ig.system.context;
        b.save();
        b.font = this.textFont;
        b.textAlign = this.textAlign;
        b.fillStyle = 1 > this.alpha ? "rgba(" + this.textRgb.r + "," + this.textRgb.g + "," + this.textRgb.b + "," + this.alpha + ")": this.textRgb.hex;
        var c = this.pos.x + this.textOffset.x,
        d = this.pos.y + this.textOffset.y;
        if (this._multiline) {
          var e = d;
          "center" == this.textVAlign && (e = d - (this._lines.length - 1) * this._lineSpacing / 2);
          for (d = 0; d < this._lines.length; d++) b.fillText(this._lines[d], c, e + d * this._lineSpacing)
        } else b.fillText(this.textString, c, d);
        b.restore()
      }
    },
    clicked: function() {
      if (0 >= this.changeStateDelay && (this.state++, this.changeStateDelay = this.changeStateDelayMax, 11 == this.state || ig.game.tutorialOnly && 10 == this.state)) this.controller.afterTutorial(),
      this.kill()
    },
    clicking: function() {},
    released: function() {}
  })
});
ig.baked = !0;
ig.module("game.entities.game.controllers.gameplay-controller").requires("game.entities.game.controllers.gameplay-ui-controller", "game.entities.game.controllers.controller", "game.entities.game.objects.ui.buttons.button", "game.entities.game.objects.ui.texts.out-text", "game.entities.game.objects.ball", "game.entities.game.objects.net", "game.entities.game.objects.ground", "game.entities.game.objects.game-object", "game.entities.game.objects.training-machine", "game.entities.game.objects.character", "game.entities.game.objects.ui.popups.pause-popup", "game.entities.game.objects.ui.game-banner", "game.entities.game.objects.ui.texts.deuce-text", "game.entities.game.objects.ui.texts.game-point-text", "game.entities.game.objects.ui.texts.match-point-text", "game.entities.game.objects.ui.tutorial").defines(function() {
  EntityGameplayController = EntityController.extend({
    bgImgs: [new ig.Image("media/graphics/game/bg/game-bg1.png"), new ig.Image("media/graphics/game/bg/game-bg2.png"), new ig.Image("media/graphics/game/bg/game-bg3.png")],
    fieldImgs: [new ig.Image("media/graphics/game/bg/field1.png"), new ig.Image("media/graphics/game/bg/field2.png"), new ig.Image("media/graphics/game/bg/field3.png")],
    player: null,
    enemy: null,
    ui: null,
    ground: null,
    net: null,
    isTrainingMode: !1,
    isServe: !1,
    isPaused: !1,
    ball: null,
    gameSetScoreDefault: 5,
    gameSetScore: 0,
    isPlayerWin: !1,
    zIndex: 99999999,
    init: function(b, c, d) {
      this.parent(b, c, d);
      this.gameSetScore = this.gameSetScoreDefault;
      this.isTrainingMode = "training" == ig.game.sessionData.selectedMode;
      this.isAllowInput = !1;
      this.initBg();
      this.initBall();
      this.initChara();
      this.initUI();
      b = ig.game.sessionData.hasShownTutorial;
      ig.game.tutorialOnly && (b = !1);
      b ? this.isTrainingMode ? (this.isAllowInput = !0, this.enemy.doServe(2)) : (this.spawnStartBanner(), ig.soundHandler.sfxPlayer.play("clapHighSound")) : this.showTutorial()
    },
    showTutorial: function() {
      this.isAllowInput = !1;
      ig.game.spawnEntity(EntityTutorial, 0, 0, {
        controller: this
      });
      ig.game.sortEntitiesDeferred()
    },
    afterTutorial: function() {
      ig.game.sessionData.hasShownTutorial = !0;
      ig.game.saveAll();
      this.isAllowInput = !0;
      ig.game.tutorialOnly ? (ig.game.tutorialOnly = !1, this.goToLevel(ig.game.MainMenu)) : this.isTrainingMode ? this.enemy.doServe(2) : this.spawnStartBanner()
    },
    initBg: function() {
      ig.game.spawnEntity(EntityGameObject, 0, 0, {
        singleFrameImage: this.bgImgs[ig.game.sessionData.selectedVenue],
        zIndex: 500
      });
      ig.game.spawnEntity(EntityGameObject, 0, 270, {
        singleFrameImage: this.fieldImgs[ig.game.sessionData.selectedVenue]
      });
      this.ground = ig.game.spawnEntity(EntityGround, -500, 460);
      this.net = ig.game.spawnEntity(EntityNet, 475, 310)
    },
    initChara: function() {
      var b = ig.game.sessionData.selectedCharacter,
      c = this.player = ig.game.spawnEntity(EntityCharacter, 240, 430, {
        name: b,
        gameplay: this
      });
      c.powerupType = ig.game.sessionData.selectedPower;
      if (this.isTrainingMode) this.enemy = ig.game.spawnEntity(EntityTrainingMachine, 675, 350, {
        gameplay: this
      }),
      this.isAllowInput && this.enemy.doServe(2);
      else {
        for (var d = "boy1 boy2 boy3 girl1 girl2 girl3".split(" "), e = ig.random.fromArray(d); e == b;) e = ig.random.fromArray(d);
        b = this.enemy = ig.game.spawnEntity(EntityCharacter, 720, 430, {
          name: e,
          gameplay: this
        });
        b.setAsEnemy(!0);
        d = ["speed", "smash", "illusion", "time"];
        do b.powerupType = ig.random.fromArray(d);
        while (b.powerupType == c.powerupType);
        this.ball.setCharaServe(c)
      }
    },
    initUI: function() {
      this.ui = new GameplayUiController(this)
    },
    initBall: function() {
      ig.game.gravity = 900;
      this.ball = ig.game.spawnEntity(EntityBall, -50, 0, {
        gameplay: this
      })
    },
    spawnStartBanner: function() {
      this.isTrainingMode || (this.isAllowInput = !1, ig.game.spawnEntity(EntityGameBanner, 0, 0, {
        mode: "matchstart",
        gameplay: this
      }), this.delayedCall(1.7,
      function() {
        ig.game.spawnEntity(EntityGameBanner, 0, 0, {
          mode: "gamestart",
          gameplay: this
        }).onComplete.addOnce(this.gameStart, this)
      }.bind(this)))
    },
    gameStart: function() {
      this.isAllowInput = !0
    },
    _gameRestart: function() {
      this.isAllowInput = !0;
      this.ui.scoreboard.playerScore = 0;
      this.ui.scoreboard.enemyScore = 0;
      this.playerServe()
    },
    gameReStart: function() {
      ig.gd ? ig.gd.show(function() {
        this._gameRestart()
      }.bind(this)) : this._gameRestart()
    },
    update: function() {
      this.ui.update();
      this.parent()
    },
    draw: function() {
      this.parent()
    },
    isCurrentlyDeuce: !1,
    ballOnGround: function(b, c) {
      this.isTrainingMode ? this.enemy.doServe(0.1) : (this.player.resetStamina(), this.enemy.resetStamina(), this.isGameSet() ? this.isMatchSet() ? (ig.soundHandler.sfxPlayer.play("clapHighSound"), this.isAllowInput = !1, ig.game.spawnEntity(EntityGameBanner, 0, 0, {
        mode: "matchset",
        gameplay: this
      })) : (ig.soundHandler.sfxPlayer.play("clapHighSound"), this.isAllowInput = !1, ig.game.spawnEntity(EntityGameBanner, 0, 0, {
        mode: "gameset",
        gameplay: this
      }), this.delayedCall(1.7,
      function() {
        this.gameSetScore = this.gameSetScoreDefault;
        this.isCurrentlyDeuce = !1;
        ig.game.spawnEntity(EntityGameBanner, 0, 0, {
          mode: "gamestart",
          gameplay: this
        }).onComplete.addOnce(this.gameReStart, this)
      }.bind(this))) : (this.isDeuce() ? (ig.game.spawnEntity(EntityDeuceText, 0, 0), this.gameSetScore) : this.isGamePoint() && (this.isMatchPoint() ? ig.game.spawnEntity(EntityMatchPointText, 0, 0) : ig.game.spawnEntity(EntityGamePointText, 0, 0)), b ? c ? this.playerServe() : this.enemyServe() : c ? this.enemyServe() : this.playerServe()))
    },
    isMatchPoint: function() {
      if (this.isCurrentlyDeuce) {
        if (1 == this.ui.scoreboard.playerGameScore || 1 == this.ui.scoreboard.enemyGameScore) return ! 0
      } else if (this.ui.scoreboard.playerScore == this.gameSetScore - 1 && 1 == this.ui.scoreboard.playerGameScore || this.ui.scoreboard.enemyScore == this.gameSetScore - 1 && 1 == this.ui.scoreboard.enemyGameScore) return ! 0;
      return ! 1
    },
    isGamePoint: function() {
      return this.isCurrentlyDeuce || this.ui.scoreboard.playerScore == this.gameSetScore - 1 || this.ui.scoreboard.enemyScore == this.gameSetScore - 1 ? !0 : !1
    },
    isMatchSet: function() {
      console.log(this.ui.scoreboard.playerGameScore, " - ", this.ui.scoreboard.enemyGameScore);
      if (1 == this.ui.scoreboard.playerGameScore && this.isPlayerWin || 1 == this.ui.scoreboard.enemyGameScore && !this.isPlayerWin) return console.log("MATCH IS SET"),
      !0;
      console.log("MATCH CONTINUED");
      return ! 1
    },
    isGameSet: function() {
      if (this.isCurrentlyDeuce) {
        var b = this.ui.scoreboard.playerScore - this.ui.scoreboard.enemyScore;
        if ( - 2 == b) return this.isPlayerWin = !1,
        !0;
        if (2 == b) return this.isPlayerWin = !0
      } else {
        if (this.ui.scoreboard.playerScore == this.gameSetScore) return this.isPlayerWin = !0;
        if (this.ui.scoreboard.enemyScore == this.gameSetScore) return this.isPlayerWin = !1,
        !0
      }
      return ! 1
    },
    isDeuce: function() {
      return this.ui.scoreboard.playerScore == this.ui.scoreboard.enemyScore && this.ui.scoreboard.enemyScore >= this.gameSetScore - 1 ? this.isCurrentlyDeuce = !0 : !1
    },
    playerServe: function() {
      this.ball.setCharaServe(this.player)
    },
    enemyServe: function() {
      this.ball.setCharaServe(this.enemy);
      this.delayedCall(0.5,
      function() {
        this.enemy.serve()
      }.bind(this))
    },
    pauseGame: function() {
      this.isPaused || (this.showPopup(EntityPausePopup), this.isPaused = !0, this.player.pause = !0, this.isTrainingMode || (this.enemy.pause = !0))
    },
    resumeGame: function() {
      this.isPaused = !1;
      this.player.pause = !1;
      this.isTrainingMode || (this.enemy.pause = !1)
    },
    onPopupFinished: function(b) {
      this.parent(b);
      "pause-popup" == b && this.resumeGame()
    },
    endGame: function() {
      ig.game.sessionData.isPlayerWinLastMatch = this.isPlayerWin;
      ig.game.sessionData.enemyCharacter = this.enemy.name;
      ig.game.sessionData.lastMatchScore = this.ui.scoreboard.playerGameScore + " : " + this.ui.scoreboard.enemyGameScore;
      console.log(ig.game.sessionData.isPlayerWinLastMatch);
      console.log(ig.game.sessionData.lastMatchScore);
      console.log(ig.game.sessionData.enemyCharacter);
      ig.game.saveAll();
      this.goToLevel(ig.game.MatchResult)
    }
  })
});
ig.baked = !0;
ig.module("game.levels.gameplay").requires("impact.image", "game.entities.game.controllers.gameplay-controller").defines(function() {
  LevelGameplay = {
    entities: [{
      type: "EntityGameplayController",
      x: 0,
      y: 0
    }],
    layer: []
  }
});
ig.baked = !0;
ig.module("game.entities.game.controllers.anim-tester-controller").requires("game.entities.game.controllers.controller", "game.entities.game.objects.ui.buttons.button", "game.entities.game.objects.character", "game.entities.game.objects.game-object", "game.entities.game.objects.ui.texts.text").defines(function() {
  EntityAnimTesterController = EntityController.extend({
    bgImg: new ig.Image("media/graphics/game/bg/chara-select-bg.png"),
    rightBtnImg: new ig.Image("media/graphics/game/ui/button-right.png"),
    leftBtnImg: new ig.Image("media/graphics/game/ui/button-left.png"),
    animNames: "idle walkforward walkbackward jumpsmash lobhit lowhit defeat win".split(" "),
    animIndex: 0,
    text: null,
    characters: [],
    init: function(b, c, d) {
      this.parent(b, c, d);
      ig.game.spawnEntity(EntityGameObject, 0, 0, {
        singleFrameImage: this.bgImg
      });
      b = "boy1 boy2 boy3 girl1 girl2 girl3".split(" ");
      for (c = 0; 6 > c; c++) this.characters.push(ig.game.spawnEntity(EntityCharacter, 80 + 160 * c, 350, {
        name: b[c]
      })),
      1 == c % 2 && (this.characters[c].scale.x = -1);
      ig.game.spawnEntity(EntityButton, ig.system.width / 2 - 230, 400, {
        singleFrameImage: this.leftBtnImg
      }).onClicked.add(this.onClickLeft, this);
      ig.game.spawnEntity(EntityButton, ig.system.width / 2 + 235 - this.rightBtnImg.width, 400, {
        singleFrameImage: this.rightBtnImg
      }).onClicked.add(this.onClickRight, this);
      this.text = ig.game.spawnEntity(EntityText, ig.system.width / 2, 425, {
        zIndex: 9999,
        textAlign: "center"
      });
      this.refreshAnim()
    },
    onClickLeft: function() {
      0 < this.animIndex && this.animIndex--;
      this.refreshAnim()
    },
    onClickRight: function() {
      this.animIndex < this.animNames.length - 1 && this.animIndex++;
      this.refreshAnim()
    },
    refreshAnim: function() {
      var b = this.animNames[this.animIndex];
      this.text.textString = b;
      for (var c = 0; c < this.characters.length; c++) this.characters[c].setAnimationByName(b)
    },
    draw: function() {
      this.parent();
      ig.system.context.save();
      ig.system.context.fillStyle = "#222222";
      ig.system.context.fillRect(0, 0, 960, 540);
      ig.system.context.restore()
    }
  })
});
ig.baked = !0;
ig.module("game.levels.anim-tester").requires("impact.image", "game.entities.game.controllers.anim-tester-controller").defines(function() {
  LevelAnimTester = {
    entities: [{
      type: "EntityAnimTesterController",
      x: 0,
      y: 0
    }],
    layer: []
  }
});
ig.baked = !0;
ig.module("game.entities.game.controllers.character-select-controller").requires("game.entities.game.controllers.controller", "game.entities.game.objects.ui.buttons.button", "game.entities.game.objects.game-object").defines(function() {
  EntityCharacterSelectController = EntityController.extend({
    bgImg: new ig.Image("media/graphics/game/bg/chara-select-bg.png"),
    mainMenuBtnImg: new ig.Image("media/graphics/game/ui/button-main-menu.png"),
    playBtnImg: new ig.Image("media/graphics/game/ui/button-play.png"),
    settingBtnImg: new ig.Image("media/graphics/game/ui/button-setting.png"),
    rightBtnImg: new ig.Image("media/graphics/game/ui/button-right.png"),
    rightPressedBtnImg: new ig.Image("media/graphics/game/ui/button-right-pressed.png"),
    leftBtnImg: new ig.Image("media/graphics/game/ui/button-left.png"),
    leftPressedBtnImg: new ig.Image("media/graphics/game/ui/button-left-pressed.png"),
    charaCursorImg: new ig.Image("media/graphics/game/ui/chara-cursor.png"),
    racketImg: new ig.Image("media/graphics/game/chara/select/racket.png"),
    charaImgs: [new ig.Image("media/graphics/game/chara/select/girl1.png"), new ig.Image("media/graphics/game/chara/select/boy1.png"), new ig.Image("media/graphics/game/chara/select/girl2.png"), new ig.Image("media/graphics/game/chara/select/boy2.png"), new ig.Image("media/graphics/game/chara/select/girl3.png"), new ig.Image("media/graphics/game/chara/select/boy3.png")],
    charaNames: "girl1 boy1 girl2 boy2 girl3 boy3".split(" "),
    characters: [],
    characterIndexes: [],
    charaCursor: null,
    racket: null,
    direction: -1,
    init: function(b, c, d) {
      this.parent(b, c, d);
      ig.game.spawnEntity(EntityGameObject, 0, 0, {
        singleFrameImage: this.bgImg,
        zIndex: 100
      });
      ig.game.spawnEntity(EntityText, 480, 65, {
        textString: _STRINGS.Mainmenu.SelectCharacter,
        textFont: "48px mainfont",
        textRgb: ig.color.hexToRgb("#e0d0ff"),
        textAlign: "center",
        entryType: "fadeIn",
        entryDelay: 0.5,
        zIndex: 1E3
      });
      ig.game.spawnEntity(EntityText, 483, 69, {
        textString: _STRINGS.Mainmenu.SelectCharacter,
        textFont: "48px mainfont",
        textRgb: ig.color.hexToRgb("#742faa"),
        textAlign: "center",
        entryType: "fadeIn",
        entryDelay: 0.6,
        zIndex: 999
      });
      ig.game.spawnEntity(EntityButton, 10, 10, {
        singleFrameImage: this.settingBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickSetting, this);
      ig.game.spawnEntity(EntityButton, ig.system.width - 10 - this.playBtnImg.width, ig.system.height - 10 - this.playBtnImg.height, {
        singleFrameImage: this.playBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickPlay, this);
      ig.game.spawnEntity(EntityButton, ig.system.width - 10 - this.mainMenuBtnImg.width, 10, {
        singleFrameImage: this.mainMenuBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickMainMenu, this);
      ig.game.spawnEntity(EntityButton, ig.system.width / 2 - 430, (ig.system.height - this.leftBtnImg.height) / 2, {
        singleFrameImage: this.leftBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.4
      }).onClicked.add(this.onClickLeft, this);
      ig.game.spawnEntity(EntityButton, ig.system.width / 2 + 435 - this.rightBtnImg.width, (ig.system.height - this.rightBtnImg.height) / 2, {
        singleFrameImage: this.rightBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.4
      }).onClicked.add(this.onClickRight, this);
      this.charaCursor = ig.game.spawnEntity(EntityGameObject, ig.system.width / 2 - this.charaCursorImg.width / 2, 435 - this.charaCursorImg.height, {
        singleFrameImage: this.charaCursorImg,
        zIndex: 1100,
        entryType: "fadeIn",
        entryDelay: 0.8
      });
      console.log(ig.game.sessionData.selectedCharacter);
      for (b = 0; this.charaNames[2] != ig.game.sessionData.selectedCharacter && 10 > b;) b++,
      this.charaImgs.unshift(this.charaImgs.pop()),
      this.charaNames.unshift(this.charaNames.pop());
      for (b = 0; b < this.charaImgs.length; b++) c = 2 < Math.abs(b - 2) ? "alpha0": "fadeIn",
      c = ig.game.spawnEntity(EntityGameObject, 0, 0, {
        singleFrameImage: this.charaImgs[b],
        zIndex: 1200,
        entryType: c,
        entryDelay: 0.6,
        zIndex: 2E3
      }),
      this.characters.push(c),
      c.name = this.charaNames[b];
      ig.game.sortEntitiesDeferred()
    },
    update: function() {
      this.parent();
      this.updatePosition()
    },
    updatePosition: function() {
      for (var b = this.characters,
      c = b.length,
      d = ig.system.width / 2,
      e = 0; e < c; e++) {
        var f = b[e],
        g = f.singleFrameImage,
        n = 150 * e + d - g.width / 2 - 300,
        m = (2 == e ? 380 : 435) - g.height;
        5 == e && (n = 1 == this.direction ? 150 * e + d - g.width / 2 - 300 : -150 + d - g.width / 2 - 300);
        f.pos.x += (n - f.pos.x) / 5;
        f.pos.y += (m - f.pos.y) / 5;
        f.pos.y > m - 0.01 && (f.alpha = 2 < Math.abs(e - 2) ? 0.1 < f.alpha ? f.alpha - f.alpha / 5 : 0 : 0.9 > f.alpha ? f.alpha + (1 - f.alpha) / 5 : 1)
      }
    },
    onClickRight: function() {
      if (this.isAllowInput) {
        ig.soundHandler.sfxPlayer.play(ig.game.clickSound);
        this.direction = -1;
        var b = this.characters[5];
        b.pos.x = targetX = 750 + ig.system.width / 2 - b.singleFrameImage.width / 2 - 300;
        this.characters.push(this.characters.shift())
      }
    },
    onClickLeft: function() {
      if (this.isAllowInput) {
        ig.soundHandler.sfxPlayer.play(ig.game.clickSound);
        this.direction = 1;
        var b = this.characters[5];
        b.pos.x = targetX = -150 + ig.system.width / 2 - b.singleFrameImage.width / 2 - 300;
        this.characters.unshift(this.characters.pop())
      }
    },
    onClickPlay: function() {
      this.isAllowInput && (ig.game.sessionData.selectedCharacter = this.characters[2].name, ig.game.saveAll(), this.goToLevel(ig.game.VenueSelect), ig.soundHandler.sfxPlayer.play(ig.game.clickSound))
    },
    onClickSetting: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), this.showPopup(EntitySettingsPopup))
    },
    onClickMainMenu: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), this.goToLevel(ig.game.MainMenu))
    }
  })
});
ig.baked = !0;
ig.module("game.levels.character-select").requires("impact.image", "game.entities.game.controllers.character-select-controller").defines(function() {
  LevelCharacterSelect = {
    entities: [{
      type: "EntityCharacterSelectController",
      x: 0,
      y: 0
    }],
    layer: []
  }
});
ig.baked = !0;
ig.module("game.entities.game.objects.ui.texts.shadow-text").requires("game.entities.game.objects.ui.texts.text").defines(function() {
  EntityShadowText = EntityText.extend({
    shadowRgb: ig.color.hexToRgb("#FFFFFF"),
    shadowOffset: {
      x: 3,
      y: 3
    },
    init: function(b, c, d) {
      this.parent(b, c, d)
    },
    draw: function() {
      this.parent();
      if (!0 == this.visible) {
        var b = ig.system.context;
        b.save();
        b.font = this.textFont;
        b.textAlign = this.textAlign;
        b.fillStyle = 1 > this.alpha ? "rgba(" + this.shadowRgb.r + "," + this.shadowRgb.g + "," + this.shadowRgb.b + "," + this.alpha + ")": this.shadowRgb.hex;
        var c = this.pos.x + this.textOffset.x + this.shadowOffset.x,
        d = this.pos.y + this.textOffset.y + this.shadowOffset.y;
        b.fillText(this.textString, c, d);
        b.fillStyle = 1 > this.alpha ? "rgba(" + this.textRgb.r + "," + this.textRgb.g + "," + this.textRgb.b + "," + this.alpha + ")": this.textRgb.hex;
        c = this.pos.x + this.textOffset.x;
        d = this.pos.y + this.textOffset.y;
        b.fillText(this.textString, c, d);
        b.restore()
      }
    }
  })
});
ig.baked = !0;
ig.module("game.entities.game.controllers.venue-select-controller").requires("game.entities.game.controllers.controller", "game.entities.game.objects.ui.buttons.button", "game.entities.game.objects.game-object", "game.entities.game.objects.ui.texts.text", "game.entities.game.objects.ui.texts.shadow-text").defines(function() {
  EntityVenueSelectController = EntityController.extend({
    bgImg: new ig.Image("media/graphics/game/bg/chara-select-bg.png"),
    mainMenuBtnImg: new ig.Image("media/graphics/game/ui/button-main-menu.png"),
    playBtnImg: new ig.Image("media/graphics/game/ui/button-play.png"),
    settingBtnImg: new ig.Image("media/graphics/game/ui/button-setting.png"),
    rightBtnImg: new ig.Image("media/graphics/game/ui/button-right.png"),
    rightPressedBtnImg: new ig.Image("media/graphics/game/ui/button-right-pressed.png"),
    leftBtnImg: new ig.Image("media/graphics/game/ui/button-left.png"),
    leftPressedBtnImg: new ig.Image("media/graphics/game/ui/button-left-pressed.png"),
    charaCursorImg: new ig.Image("media/graphics/game/ui/chara-cursor.png"),
    racketImg: new ig.Image("media/graphics/game/chara/select/racket.png"),
    charaImgs: [new ig.Image("media/graphics/game/chara/select/girl1.png"), new ig.Image("media/graphics/game/chara/select/boy1.png"), new ig.Image("media/graphics/game/chara/select/girl2.png"), new ig.Image("media/graphics/game/chara/select/boy2.png"), new ig.Image("media/graphics/game/chara/select/girl3.png"), new ig.Image("media/graphics/game/chara/select/boy3.png")],
    venueImages: [new ig.Image("media/graphics/game/bg/venue1.png"), new ig.Image("media/graphics/game/bg/venue2.png"), new ig.Image("media/graphics/game/bg/venue3.png")],
    ballImages: [new ig.Image("media/graphics/game/misc/bigball1.png"), new ig.Image("media/graphics/game/misc/bigball2.png"), new ig.Image("media/graphics/game/misc/bigball3.png")],
    charaNames: "girl1 boy1 girl2 boy2 girl3 boy3".split(" "),
    characters: [],
    characterIndexes: [],
    charaCursor: null,
    racket: null,
    direction: -1,
    venue: null,
    field: null,
    modeText: null,
    powerText: null,
    ball: null,
    venueText: null,
    textSettings: null,
    powerArr: ["speed", "smash", "illusion", "time"],
    init: function(b, c, d) {
      this.parent(b, c, d);
      ig.game.spawnEntity(EntityGameObject, 0, 0, {
        singleFrameImage: this.bgImg,
        zIndex: 100
      });
      b = this.textSettings = {
        textFont: "40px mainfont",
        textRgb: ig.color.hexToRgb("#e0d0ff"),
        shadowRgb: ig.color.hexToRgb("#742faa"),
        shadowOfffset: {
          x: 4,
          y: 4
        },
        textAlign: "start",
        entryType: "fadeIn",
        entryDelay: 0.2,
        exitType: "fadeOut",
        zIndex: 1E3
      };
      ig.game.spawnEntity(EntityButton, 10, 10, {
        singleFrameImage: this.settingBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickSetting, this);
      ig.game.spawnEntity(EntityButton, ig.system.width - 10 - this.playBtnImg.width, ig.system.height - 10 - this.playBtnImg.height, {
        singleFrameImage: this.playBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickPlay, this);
      c = ig.game.spawnEntity(EntityButton, 10, ig.system.height - 10 - this.playBtnImg.height, {
        singleFrameImage: this.playBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      });
      c.onClicked.add(this.onClickBackToCharaSelect, this);
      c.currentAnim.flip.x = !0;
      ig.game.spawnEntity(EntityButton, ig.system.width - 10 - this.mainMenuBtnImg.width, 10, {
        singleFrameImage: this.mainMenuBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickMainMenu, this);
      c = this.leftTextX = 300;
      d = this.rightTextX = 630;
      var e = this.leftArrowX = 450,
      f = this.rightArrowX = 750,
      g = this.lineY = [130, 200, 270, 380];
      ig.game.spawnEntity(EntityShadowText, c, g[0], b).textString = _STRINGS.Mainmenu.Mode;
      ig.game.spawnEntity(EntityShadowText, c, g[1], b).textString = _STRINGS.Mainmenu.Power;
      ig.game.spawnEntity(EntityShadowText, c, g[2], b).textString = _STRINGS.Mainmenu.Ball;
      ig.game.spawnEntity(EntityShadowText, c, g[3], b).textString = _STRINGS.Mainmenu.Venue;
      ig.game.spawnEntity(EntityButton, e, g[0] + -50, {
        scale: {
          x: 0.6,
          y: 0.6
        },
        singleFrameImage: this.leftBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickMode, this);
      ig.game.spawnEntity(EntityButton, e, g[1] + -50, {
        scale: {
          x: 0.6,
          y: 0.6
        },
        singleFrameImage: this.leftBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickLeftPower, this);
      ig.game.spawnEntity(EntityButton, e, g[2] + -50, {
        scale: {
          x: 0.6,
          y: 0.6
        },
        singleFrameImage: this.leftBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickLeftBall, this);
      ig.game.spawnEntity(EntityButton, e, g[3] + -50, {
        scale: {
          x: 0.6,
          y: 0.6
        },
        singleFrameImage: this.leftBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickLeftVenue, this);
      ig.game.spawnEntity(EntityButton, f, g[0] + -50, {
        scale: {
          x: 0.6,
          y: 0.6
        },
        singleFrameImage: this.rightBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickMode, this);
      ig.game.spawnEntity(EntityButton, f, g[1] + -50, {
        scale: {
          x: 0.6,
          y: 0.6
        },
        singleFrameImage: this.rightBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickRightPower, this);
      ig.game.spawnEntity(EntityButton, f, g[2] + -50, {
        scale: {
          x: 0.6,
          y: 0.6
        },
        singleFrameImage: this.rightBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickRightBall, this);
      ig.game.spawnEntity(EntityButton, f, g[3] + -50, {
        scale: {
          x: 0.6,
          y: 0.6
        },
        singleFrameImage: this.rightBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 0.2
      }).onClicked.add(this.onClickRightVenue, this);
      this.modeText = ig.game.spawnEntity(EntityShadowText, d, g[0], b);
      this.modeText.textString = _STRINGS.Mainmenu.Match;
      "training" == ig.game.sessionData.selectedMode && (this.modeText.textString = _STRINGS.Mainmenu.Training);
      this.modeText.textAlign = "center";
      this.powerText = ig.game.spawnEntity(EntityShadowText, d, g[1], b);
      this.powerText.textAlign = "center";
      this.refreshPowerText();
      this.ball = ig.game.spawnEntity(EntityGameObject, d - 20, g[2] - 30, {
        singleFrameImage: this.ballImages[ig.game.sessionData.selectedBall],
        zIndex: 500,
        entryType: "fadeIn",
        entryDelay: 0.2,
        exitType: "fadeOut"
      });
      this.venue = ig.game.spawnEntity(EntityGameObject, d - 120, g[3] - 75, {
        singleFrameImage: this.venueImages[ig.game.sessionData.selectedVenue],
        zIndex: 500,
        entryType: "fadeIn",
        entryDelay: 0.2,
        exitType: "fadeOut"
      });
      b = this.charaNames.indexOf(ig.game.sessionData.selectedCharacter);
      ig.game.spawnEntity(EntityGameObject, 150, 130, {
        scale: {
          x: 1.5,
          y: 1.5
        },
        singleFrameImage: this.charaImgs[b],
        zIndex: 2E3,
        entryType: "fadeIn",
        entryDelay: 0.2,
        exitType: "fadeOut"
      });
      ig.game.sortEntitiesDeferred();
      this.textSettings.entryDelay = 0
    },
    update: function() {
      this.parent()
    },
    onClickMode: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), "match" == ig.game.sessionData.selectedMode ? (ig.game.sessionData.selectedMode = "training", this.modeText.exit(), this.modeText = ig.game.spawnEntity(EntityShadowText, this.rightTextX, this.lineY[0], this.textSettings), this.modeText.textString = _STRINGS.Mainmenu.Training, this.modeText.textAlign = "center") : "training" == ig.game.sessionData.selectedMode && (ig.game.sessionData.selectedMode = "match", this.modeText.exit(), this.modeText = ig.game.spawnEntity(EntityShadowText, this.rightTextX, this.lineY[0], this.textSettings), this.modeText.textString = _STRINGS.Mainmenu.Match, this.modeText.textAlign = "center"))
    },
    refreshPowerText: function() {
      switch (ig.game.sessionData.selectedPower) {
      case "speed":
        this.powerText.textString = _STRINGS.Game.PowerupSpeed;
        break;
      case "smash":
        this.powerText.textString = _STRINGS.Game.PowerupSmash;
        break;
      case "illusion":
        this.powerText.textString = _STRINGS.Game.PowerupIllusion;
        break;
      case "time":
        this.powerText.textString = _STRINGS.Game.PowerupTime
      }
    },
    spawnNewPowerText: function(b) {
      this.powerText.exit();
      this.powerText = ig.game.spawnEntity(EntityShadowText, this.rightTextX, this.lineY[1], this.textSettings);
      this.powerText.textAlign = "center";
      b = this.powerArr.indexOf(ig.game.sessionData.selectedPower) + b;
      0 > b ? b = this.powerArr.length - 1 : b >= this.powerArr.length && (b = 0);
      ig.game.sessionData.selectedPower = this.powerArr[b];
      this.refreshPowerText()
    },
    spawnNewVenue: function(b) {
      this.venue.exit();
      ig.game.sessionData.selectedVenue += b;
      0 > ig.game.sessionData.selectedVenue ? ig.game.sessionData.selectedVenue = 2 : 2 < ig.game.sessionData.selectedVenue && (ig.game.sessionData.selectedVenue = 0);
      this.venue = ig.game.spawnEntity(EntityGameObject, this.rightTextX - 120, this.lineY[3] - 75, {
        singleFrameImage: this.venueImages[ig.game.sessionData.selectedVenue],
        zIndex: 500,
        entryType: "fadeIn",
        exitType: "fadeOut"
      })
    },
    spawnNewBall: function(b) {
      this.ball.exit();
      ig.game.sessionData.selectedBall += b;
      0 > ig.game.sessionData.selectedBall ? ig.game.sessionData.selectedBall = 2 : 2 < ig.game.sessionData.selectedBall && (ig.game.sessionData.selectedBall = 0);
      this.ball = ig.game.spawnEntity(EntityGameObject, this.rightTextX - 20, this.lineY[2] - 30, {
        singleFrameImage: this.ballImages[ig.game.sessionData.selectedBall],
        zIndex: 500,
        entryType: "fadeIn",
        exitType: "fadeOut"
      })
    },
    onClickLeftPower: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), this.spawnNewPowerText( - 1))
    },
    onClickRightPower: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), this.spawnNewPowerText(1))
    },
    onClickLeftVenue: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), this.spawnNewVenue( - 1))
    },
    onClickRightVenue: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), this.spawnNewVenue(1))
    },
    onClickLeftBall: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), this.spawnNewBall( - 1))
    },
    onClickRightBall: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), this.spawnNewBall(1))
    },
    onClickPlay: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), ig.soundHandler.bgmPlayer.stop(), ig.game.saveAll(), this.goToLevel(ig.game.Gameplay))
    },
    onClickBackToCharaSelect: function() {
      ig.soundHandler.sfxPlayer.play(ig.game.clickSound);
      this.isAllowInput && this.goToLevel(ig.game.CharacterSelect)
    },
    onClickSetting: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), this.showPopup(EntitySettingsPopup))
    },
    onClickMainMenu: function() {
      this.isAllowInput && (ig.soundHandler.sfxPlayer.play(ig.game.clickSound), this.goToLevel(ig.game.MainMenu))
    }
  })
});
ig.baked = !0;
ig.module("game.levels.venue-select").requires("impact.image", "game.entities.game.controllers.venue-select-controller").defines(function() {
  LevelVenueSelect = {
    entities: [{
      type: "EntityVenueSelectController",
      x: 0,
      y: 0
    }],
    layer: []
  }
});
ig.baked = !0;
ig.module("game.entities.game.controllers.match-result-controller").requires("plugins.spriter.spriter-display", "game.entities.game.controllers.controller", "game.entities.game.objects.ui.buttons.button", "game.entities.game.objects.game-object", "game.entities.game.objects.hit-collider", "game.entities.game.objects.ui.popups.settings-popup").defines(function() {
  EntityMatchResultController = EntityController.extend({
    bgImgs: [new ig.Image("media/graphics/game/bg/game-bg1.png"), new ig.Image("media/graphics/game/bg/game-bg2.png"), new ig.Image("media/graphics/game/bg/game-bg3.png")],
    fieldImgs: [new ig.Image("media/graphics/game/bg/field1.png"), new ig.Image("media/graphics/game/bg/field2.png"), new ig.Image("media/graphics/game/bg/field3.png")],
    boy1Scml: new SpriterScml("media/graphics/game/chara/boy1/chara.scml"),
    boy2Scml: new SpriterScml("media/graphics/game/chara/boy2/chara.scml"),
    boy3Scml: new SpriterScml("media/graphics/game/chara/boy3/chara.scml"),
    girl1Scml: new SpriterScml("media/graphics/game/chara/girl1/chara.scml"),
    girl2Scml: new SpriterScml("media/graphics/game/chara/girl2/chara.scml"),
    girl3Scml: new SpriterScml("media/graphics/game/chara/girl3/chara.scml"),
    homeBtnImg: new ig.Image("media/graphics/game/ui/button-main-menu.png"),
    replayBtnImg: new ig.Image("media/graphics/game/ui/button-replay.png"),
    resultBgImg: new ig.Image("media/graphics/game/ui/result-bg.png"),
    popupBgImg: new ig.Image("media/graphics/game/ui/popup-bg-flat.png"),
    shadowImg: new ig.Image("media/graphics/game/misc/chara-shadow.png"),
    init: function(b, c, d) {
      this.parent(b, c, d);
      ig.game.spawnEntity(EntityGameObject, -5, -100, {
        singleFrameImage: this.bgImgs[ig.game.sessionData.selectedVenue],
        zIndex: 500,
        scale: {
          x: 1.67,
          y: 1.67
        }
      });
      ig.game.spawnEntity(EntityGameObject, -5, 240, {
        singleFrameImage: this.fieldImgs[ig.game.sessionData.selectedVenue],
        zIndex: 550,
        scale: {
          x: 1.67,
          y: 1.67
        }
      });
      ig.game.spawnEntity(EntityGameObject, 357, 22, {
        scale: {
          x: 1.2,
          y: 1
        },
        singleFrameImage: this.resultBgImg,
        zIndex: 600
      });
      this.player = ig.game.spawnEntity(SpriterDisplay, 170, 440, {
        scml: this[ig.game.sessionData.selectedCharacter + "Scml"],
        zIndex: 2E3
      });
      this.player.scale.x = 1.25;
      this.player.scale.y = 1.25;
      this.enemy = ig.game.spawnEntity(SpriterDisplay, 960 - this.player.pos.x, 440, {
        scml: this[ig.game.sessionData.enemyCharacter + "Scml"],
        zIndex: 2E3
      });
      this.enemy.scale.x = -1.25;
      this.enemy.scale.y = 1.25;
      this.enemy.gravityFactor = 0;
      this.player.gravityFactor = 0;
      console.log("match result, is player win : ", ig.game.sessionData.isPlayerWinLastMatch);
      ig.game.sessionData.isPlayerWinLastMatch ? (this.player.setAnimationByName("win"), this.enemy.setAnimationByName("defeat")) : (this.player.setAnimationByName("defeat"), this.enemy.setAnimationByName("win"));
      ig.soundHandler.sfxPlayer.play("winSound");
      ig.game.spawnEntity(EntityGameObject, this.player.pos.x - 52, this.player.pos.y - 12, {
        scale: {
          x: 1.25,
          y: 1.25
        },
        singleFrameImage: this.shadowImg,
        zIndex: 1900
      });
      ig.game.spawnEntity(EntityGameObject, this.enemy.pos.x - 42, this.enemy.pos.y - 12, {
        scale: {
          x: 1.25,
          y: 1.25
        },
        singleFrameImage: this.shadowImg,
        zIndex: 1900
      });
      b = {
        textFont: "36px mainfont",
        textRgb: ig.color.hexToRgb("#2a6be4"),
        shadowRgb: ig.color.hexToRgb("#012130"),
        shadowOfffset: {
          x: 3,
          y: 3
        },
        textAlign: "center",
        entryType: "fadeIn",
        entryDelay: 0.4,
        exitType: "fadeOut",
        zIndex: 1E3
      };
      c = {
        textFont: "76px mainfont",
        textRgb: ig.color.hexToRgb("#ed9c55"),
        shadowRgb: ig.color.hexToRgb("#ac5b14"),
        shadowOfffset: {
          x: 4,
          y: 4
        },
        textAlign: "center",
        entryType: "fadeIn",
        entryDelay: 1,
        exitType: "fadeOut",
        zIndex: 1E3
      };
      d = {
        textFont: "60px secondaryfont",
        textRgb: ig.color.hexToRgb("#aae8f8"),
        shadowRgb: ig.color.hexToRgb("#08566d"),
        shadowOfffset: {
          x: 4,
          y: 4
        },
        textAlign: "center",
        entryType: "fadeIn",
        entryDelay: 1.5,
        exitType: "fadeOut",
        zIndex: 1E3
      };
      ig.game.spawnEntity(EntityShadowText, 480, 100, b).textString = _STRINGS.Game.MatchResult;
      ig.game.spawnEntity(EntityShadowText, 480, 250, c).textString = ig.game.sessionData.isPlayerWinLastMatch ? _STRINGS.Game.YouWin: _STRINGS.Game.YouLose;
      ig.game.spawnEntity(EntityShadowText, 480, 330, d).textString = ig.game.sessionData.lastMatchScore;
      ig.game.spawnEntity(EntityButton, 350, 400, {
        scale: {
          x: 1,
          y: 1
        },
        singleFrameImage: this.replayBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 2
      }).onClicked.add(this.onClickReplay, this);
      ig.game.spawnEntity(EntityButton, 500, 400, {
        scale: {
          x: 1,
          y: 1
        },
        singleFrameImage: this.homeBtnImg,
        entryType: "fadeJumpIn",
        entryDelay: 2
      }).onClicked.add(this.onClickHome, this)
    },
    onClickHome: function() {
      this.isAllowInput && (this.isAllowInput = !1, this.goToLevel(ig.game.MainMenu), ig.soundHandler.sfxPlayer.play(ig.game.clickSound))
    },
    _fnReplay: function() {
      this.isAllowInput = !1;
      this.goToLevel(ig.game.Gameplay);
      ig.soundHandler.sfxPlayer.play(ig.game.clickSound)
    },
    onClickReplay: function() {
      this.isAllowInput && (ig.gd ? ig.gd.show(function() {
        this._fnReplay()
      }.bind(this)) : this._fnReplay())
    }
  })
});
ig.baked = !0;
ig.module("game.levels.match-result").requires("impact.image", "game.entities.game.controllers.match-result-controller").defines(function() {
  LevelMatchResult = {
    entities: [{
      type: "EntityMatchResultController",
      x: 0,
      y: 0
    }],
    layer: []
  }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.io.storage-manager", "plugins.splash-loader", "plugins.tween", "plugins.tweens-handler", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.math.random", "plugins.scale", "plugins.spriter.spriter", "plugins.signal", "plugins.multitouch", "plugins.fullscreen", "plugins.data.vector", "plugins.data.color-rgb", "plugins.branding.splash", "plugins.gamedist", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening.opening-shield", "game.entities.opening.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.main-menu", "game.levels.gameplay", "game.levels.anim-tester", "game.levels.character-select", "game.levels.venue-select", "game.levels.match-result").defines(function() {
  p7uu.z4x = "\\\"!=";
  p7uu.m8 = function() {
    return typeof p7uu.V8.q0 === 'function' ? p7uu.V8.q0.apply(p7uu.V8, arguments) : p7uu.V8.q0;
  };
  p7uu.I2 = function() {
    return typeof p7uu.f2.q0 === 'function' ? p7uu.f2.q0.apply(p7uu.f2, arguments) : p7uu.f2.q0;
  };
  p7uu.J6 = true;
  p7uu.M5 = "1.0";
  p7uu.u4x = "=\\";
  p7uu.u2 = function() {
    return typeof p7uu.f2.H === 'function' ? p7uu.f2.H.apply(p7uu.f2, arguments) : p7uu.f2.H;
  };
  p7uu.o9 = "2";
  p7uu.A4x = "&&(";
  p7uu.M8 = function() {
    return typeof p7uu.V8.H === 'function' ? p7uu.V8.H.apply(p7uu.V8, arguments) : p7uu.V8.H;
  };
  p7uu.y7x = "622";
  p7uu.P9 = "50";
  p7uu.g4x = "60";
  p7uu.T4x = '#canvas';
  p7uu.R8 = function() {
    return typeof p7uu.V8.Z8 === 'function' ? p7uu.V8.Z8.apply(p7uu.V8, arguments) : p7uu.V8.Z8;
  };
  p7uu.Q8 = function() {
    return typeof p7uu.V8.E5 === 'function' ? p7uu.V8.E5.apply(p7uu.V8, arguments) : p7uu.V8.E5;
  };
  p7uu.P1 = "0.1";
  p7uu.u6 = "#play";
  p7uu.E4x = ");";
  p7uu.w4x = "\\";
  p7uu.S6 = "6";
  p7uu.P4x = "(";
  p7uu.J8 = function() {
    return typeof p7uu.V8.y8 === 'function' ? p7uu.V8.y8.apply(p7uu.V8, arguments) : p7uu.V8.y8;
  };
  p7uu.u5 = function() {
    return typeof p7uu.h5.H === 'function' ? p7uu.h5.H.apply(p7uu.h5, arguments) : p7uu.h5.H;
  };
  p7uu.l8 = function() {
    return typeof p7uu.V8.H === 'function' ? p7uu.V8.H.apply(p7uu.V8, arguments) : p7uu.V8.H;
  };
  p7uu.U8 = function() {
    return typeof p7uu.h8.H === 'function' ? p7uu.h8.H.apply(p7uu.h8, arguments) : p7uu.h8.H;
  };
  p7uu.V8 = function(X8) {
    return {
      y8: function() {
        var r8, n8 = arguments;
        switch (X8) {
        case 3:
          r8 = ( - n8[1] - n8[0]) / -n8[2];
          break;
        case 2:
          r8 = n8[0] | n8[1];
          break;
        case 1:
          r8 = n8[1] * n8[0];
          break;
        case 0:
          r8 = n8[0] - n8[1];
          break;
        }
        return r8;
      },
      Z8: function(I8) {
        X8 = I8;
      }
    };
  } ();
  p7uu.d0 = "MJS-PowerBadminton";
  p7uu.w8 = 2;
  p7uu.n5 = function() {
    return typeof p7uu.h5.E5 === 'function' ? p7uu.h5.E5.apply(p7uu.h5, arguments) : p7uu.h5.E5;
  };
  p7uu.s4x = "(\\";
  p7uu.X7x = ";\\";
  p7uu.d9 = "7";
  p7uu.H2 = function() {
    return typeof p7uu.f2.E5 === 'function' ? p7uu.f2.E5.apply(p7uu.f2, arguments) : p7uu.f2.E5;
  };
  p7uu.D1 = "";
  p7uu.W9 = "1";
  p7uu.i4x = "(\\\"\\";
  p7uu.B8 = function() {
    return typeof p7uu.V8.q0 === 'function' ? p7uu.V8.q0.apply(p7uu.V8, arguments) : p7uu.V8.q0;
  };
  p7uu.C4x = "\"";
  p7uu.O7x = "g";
  p7uu.h5 = function() {
    function s5(L5, a5, T5, Q5) {
      var Z5 = 2;
      while (Z5 !== 19) {
        switch (Z5) {
        case 2:
          var l5, G5, V5; ! p5 && (p5 = i5([ - 1, -14, 1, 2, -1, -5, -83, -15, -4, -16, 2, -6, -14, -5, 1, -69, -15, -4, -6, -18, -10, -5, -56]));
          Z5 = 5;
          break;
        case 3:
          Z5 = T5 > 0 ? 9 : 6;
          break;
        case 5:
          !F5 && (F5 = i5([ - 1, -14, 1, 2, -1, -5, -83, -7, -4, -16, -18, 1, -10, -4, -5, -69, -11, -1, -14, -13]));
          V5 = Q5 ? F5: p5;
          Z5 = 3;
          break;
        case 9:
          l5 = V5.substring(L5, T5);
          G5 = l5.length;
          return p7uu.U8(l5, G5, a5);
          break;
        case 12:
          return p7uu.U8(l5, G5, a5);
          break;
        case 6:
          Z5 = L5 === null || L5 <= 0 ? 14 : 11;
          break;
        case 11:
          l5 = V5.substring(V5.length - L5, V5.length);
          G5 = l5.length;
          return p7uu.U8(l5, G5, a5);
          break;
        case 14:
          l5 = V5.substring(0, V5.length);
          G5 = l5.length;
          Z5 = 12;
          break;
        }
      }
    }
    var W5 = 2;
    while (W5 !== 5) {
      switch (W5) {
      case 2:
        var p5, F5;
        return {
          X5: function(A5, z5, m5) {
            var j5 = 2;
            while (j5 !== 1) {
              switch (j5) {
              case 2:
                return s5(A5, z5, m5);
                break;
              }
            }
          },
          E5: function(I5, O5, f5) {
            var J5 = 2;
            while (J5 !== 1) {
              switch (J5) {
              case 2:
                return s5(I5, O5, f5, true);
                break;
              }
            }
          }
        };
        break;
      }
    }
    function i5(C5) {
      var P5 = 2;
      while (P5 !== 5) {
        switch (P5) {
        case 2:
          var q5 = 1,
          b5 = function() {}.constructor;
          return b5(new
          function(U5) {
            var t5 = 2;
            while (t5 !== 1) {
              switch (t5) {
              case 2:
                this.d = function(H5) {
                  var K5 = 2;
                  while (K5 !== 8) {
                    switch (K5) {
                    case 5:
                      K5 = g5 < U5.length ? 4 : 9;
                      break;
                    case 3:
                      g5++;
                      K5 = 5;
                      break;
                    case 1:
                      var g5 = 0;
                      K5 = 5;
                      break;
                    case 2:
                      var N5 = '';
                      K5 = 1;
                      break;
                    case 4:
                      N5 += String.fromCharCode(U5[g5] - H5 + 116);
                      K5 = 3;
                      break;
                    case 9:
                      return N5;
                      break;
                    }
                  }
                };
                t5 = 1;
                break;
              }
            }
          } (C5).d(q5))();
          break;
        }
      }
    }
  } ();
  p7uu.j8 = function() {
    return typeof p7uu.V8.E5 === 'function' ? p7uu.V8.E5.apply(p7uu.V8, arguments) : p7uu.V8.E5;
  };
  p7uu.t4x = "47.93";
  p7uu.D8 = function() {
    return typeof p7uu.V8.X5 === 'function' ? p7uu.V8.X5.apply(p7uu.V8, arguments) : p7uu.V8.X5;
  };
  p7uu.v5 = null;
  p7uu.Z7x = "\\\"),\\";
  p7uu.r7x = "++)";
  p7uu.p6 = 'Enabled';
  p7uu.C8 = 1;
  p7uu.w2 = function() {
    return typeof p7uu.f2.X5 === 'function' ? p7uu.f2.X5.apply(p7uu.f2, arguments) : p7uu.f2.X5;
  };
  p7uu.K4x = "0x2677";
  p7uu.h8 = function() {
    var V = function(s, K) {
      var o = K & 0xffff;
      var g = K - o;
      return (g * s | 0) + (o * s | 0) | 0;
    },
    q = function(C, T8, L8) {
      var F8 = 0xcc9e2d51,
      O8 = 0x1b873593;
      var w = L8;
      var I = T8 & ~0x3;
      for (var R = 0; R < I; R += 4) {
        var m = C.charCodeAt(R) & 0xff | (C.charCodeAt(R + 1) & 0xff) << 8 | (C.charCodeAt(R + 2) & 0xff) << 16 | (C.charCodeAt(R + 3) & 0xff) << 24;
        m = V(m, F8);
        m = (m & 0x1ffff) << 15 | m >>> 17;
        m = V(m, O8);
        w ^= m;
        w = (w & 0x7ffff) << 13 | w >>> 19;
        w = w * 5 + 0xe6546b64 | 0;
      }
      m = 0;
      switch (T8 % 4) {
      case 3:
        m = (C.charCodeAt(I + 2) & 0xff) << 16;
      case 2:
        m |= (C.charCodeAt(I + 1) & 0xff) << 8;
      case 1:
        m |= C.charCodeAt(I) & 0xff;
        m = V(m, F8);
        m = (m & 0x1ffff) << 15 | m >>> 17;
        m = V(m, O8);
        w ^= m;
      }
      w ^= T8;
      w ^= w >>> 16;
      w = V(w, 0x85ebca6b);
      w ^= w >>> 13;
      w = V(w, 0xc2b2ae35);
      w ^= w >>> 16;
      return w;
    };
    return {
      H: q
    };
  } ();
  p7uu.v8 = function() {
    return typeof p7uu.V8.X5 === 'function' ? p7uu.V8.X5.apply(p7uu.V8, arguments) : p7uu.V8.X5;
  };
  p7uu.f2 = function() {
    var T2 = 2;
    while (T2 !== 1) {
      switch (T2) {
      case 2:
        return {
          q0:
          function() {
            var c2 = 2;
            while (c2 !== 9) {
              switch (c2) {
              case 5:
                c2 = a0 === 2 ? 4 : 1;
                break;
              case 1:
                c2 = a0 !== 1 ? 5 : 9;
                break;
              case 2:
                var a0 = 2;
                c2 = 1;
                break;
              case 3:
                a0 = 1;
                c2 = 1;
                break;
              case 4:
                (function() {
                  var h2 = 2;
                  while (h2 !== 74) {
                    switch (h2) {
                    case 59:
                      var V2 = "w";
                      var g2 = "l";
                      h2 = 57;
                      break;
                    case 35:
                      k0 += D0;
                      var s0 = L0;
                      s0 += S0;
                      s0 += D0;
                      h2 = 31;
                      break;
                    case 30:
                      h2 = J0 === 25 ? 29 : 41;
                      break;
                    case 8:
                      var K0 = "e";
                      var D0 = "d";
                      var S0 = "n";
                      h2 = 14;
                      break;
                    case 20:
                      J0 = 11;
                      h2 = 1;
                      break;
                    case 27:
                      h2 = J0 === 21 ? 26 : 21;
                      break;
                    case 12:
                      h2 = J0 === 13 ? 11 : 19;
                      break;
                    case 4:
                      try {
                        var t2 = 2;
                        while (t2 !== 60) {
                          switch (t2) {
                          case 22:
                            t2 = Q0 === 35 ? 21 : 33;
                            break;
                          case 51:
                            R0 += G0;
                            R0 += x0;
                            R0 += j0;
                            R0 += b0;
                            R0 += K0;
                            R0 += i2;
                            t2 = 45;
                            break;
                          case 8:
                            Q0 = 13;
                            t2 = 1;
                            break;
                          case 39:
                            t2 = Q0 === 2 ? 38 : 52;
                            break;
                          case 65:
                            t2 = Q0 === 13 ? 64 : 1;
                            break;
                          case 34:
                            Q0 = 33;
                            t2 = 1;
                            break;
                          case 38:
                            var e0 = N0;
                            e0 += D0;
                            e0 += P0;
                            e0 += G0;
                            t2 = 53;
                            break;
                          case 20:
                            var R0 = N0;
                            R0 += D0;
                            R0 += P0;
                            t2 = 17;
                            break;
                          case 26:
                            e0 += x0;
                            e0 += j0;
                            e0 += b0;
                            t2 = 23;
                            break;
                          case 23:
                            Q0 = 7;
                            t2 = 1;
                            break;
                          case 9:
                            e0 += F0;
                            t2 = 8;
                            break;
                          case 29:
                            Q0 = 43;
                            t2 = 1;
                            break;
                          case 1:
                            t2 = Q0 !== 43 ? 5 : 60;
                            break;
                          case 21:
                            var z0 = D0;
                            z0 += g2;
                            t2 = 34;
                            break;
                          case 44:
                            R0 += F0;
                            R0 += l2;
                            R0 += C2;
                            R0 += r0;
                            t2 = 40;
                            break;
                          case 2:
                            var Q0 = 2;
                            t2 = 1;
                            break;
                          case 45:
                            Q0 = 24;
                            t2 = 1;
                            break;
                          case 5:
                            t2 = Q0 === 7 ? 4 : 7;
                            break;
                          case 32:
                            W0 += B2;
                            window[W0][z0]();
                            n0[R0] = function() {};
                            t2 = 29;
                            break;
                          case 64:
                            e0 += l2;
                            e0 += C2;
                            e0 += r0;
                            t2 = 61;
                            break;
                          case 15:
                            Q0 = !n0[e0] ? 20 : 43;
                            t2 = 1;
                            break;
                          case 6:
                            z0 += V2;
                            z0 += v0;
                            var W0 = D0;
                            W0 += d2;
                            t2 = 11;
                            break;
                          case 11:
                            Q0 = 29;
                            t2 = 1;
                            break;
                          case 40:
                            Q0 = 35;
                            t2 = 1;
                            break;
                          case 10:
                            t2 = Q0 === 20 ? 20 : 16;
                            break;
                          case 7:
                            t2 = Q0 === 33 ? 6 : 10;
                            break;
                          case 33:
                            t2 = Q0 === 29 ? 32 : 28;
                            break;
                          case 53:
                            Q0 = 3;
                            t2 = 1;
                            break;
                          case 4:
                            e0 += K0;
                            e0 += i2;
                            t2 = 9;
                            break;
                          case 61:
                            Q0 = 10;
                            t2 = 1;
                            break;
                          case 52:
                            t2 = Q0 === 17 ? 51 : 65;
                            break;
                          case 17:
                            Q0 = 17;
                            t2 = 1;
                            break;
                          case 16:
                            t2 = Q0 === 10 ? 15 : 27;
                            break;
                          case 28:
                            t2 = Q0 === 24 ? 44 : 39;
                            break;
                          case 27:
                            t2 = Q0 === 3 ? 26 : 22;
                            break;
                          }
                        }
                      } catch(X2) {}
                      h2 = 3;
                      break;
                    case 63:
                      J0 = 38;
                      h2 = 1;
                      break;
                    case 57:
                      J0 = 3;
                      h2 = 1;
                      break;
                    case 47:
                      h2 = J0 === 42 ? 46 : 62;
                      break;
                    case 52:
                      h2 = J0 === 3 ? 51 : 47;
                      break;
                    case 11:
                      var j0 = "B";
                      var x0 = "0";
                      h2 = 20;
                      break;
                    case 53:
                      J0 = 16;
                      h2 = 1;
                      break;
                    case 26:
                      k0 += v0;
                      k0 += o0;
                      k0 += S0;
                      k0 += K0;
                      h2 = 22;
                      break;
                    case 18:
                      var F0 = "x";
                      var i2 = "G";
                      var b0 = "J";
                      h2 = 15;
                      break;
                    case 9:
                      h2 = J0 === 16 ? 8 : 12;
                      break;
                    case 21:
                      h2 = J0 === 32 ? 35 : 30;
                      break;
                    case 75:
                      J0 = 42;
                      h2 = 1;
                      break;
                    case 76:
                      s0 += o0;
                      h2 = 75;
                      break;
                    case 48:
                      J0 = 7;
                      h2 = 1;
                      break;
                    case 46:
                      s0 += S0;
                      s0 += K0;
                      s0 += D0;
                      var n0 = typeof window !== s0 ? window: typeof global !== k0 ? global: E2;
                      h2 = 63;
                      break;
                    case 41:
                      h2 = J0 === 11 ? 40 : 52;
                      break;
                    case 29:
                      var k0 = L0;
                      k0 += S0;
                      k0 += D0;
                      k0 += K0;
                      h2 = 42;
                      break;
                    case 40:
                      var G0 = "1";
                      var P0 = "F";
                      var N0 = "_";
                      var E2 = null;
                      var o0 = "i";
                      h2 = 54;
                      break;
                    case 54:
                      var v0 = "f";
                      h2 = 53;
                      break;
                    case 50:
                      var C2 = "t";
                      var l2 = "6";
                      h2 = 48;
                      break;
                    case 51:
                      var r0 = "g";
                      h2 = 50;
                      break;
                    case 13:
                      J0 = 25;
                      h2 = 1;
                      break;
                    case 2:
                      var J0 = 2;
                      h2 = 1;
                      break;
                    case 42:
                      J0 = 21;
                      h2 = 1;
                      break;
                    case 15:
                      J0 = 13;
                      h2 = 1;
                      break;
                    case 61:
                      var B2 = "a";
                      var d2 = "b";
                      h2 = 59;
                      break;
                    case 14:
                      var L0 = "u";
                      h2 = 13;
                      break;
                    case 62:
                      h2 = J0 === 2 ? 61 : 56;
                      break;
                    case 3:
                      J0 = 37;
                      h2 = 1;
                      break;
                    case 55:
                      s0 += K0;
                      s0 += v0;
                      h2 = 76;
                      break;
                    case 5:
                      h2 = J0 === 38 ? 4 : 9;
                      break;
                    case 19:
                      h2 = J0 === 7 ? 18 : 27;
                      break;
                    case 31:
                      J0 = 28;
                      h2 = 1;
                      break;
                    case 1:
                      h2 = J0 !== 37 ? 5 : 74;
                      break;
                    case 56:
                      h2 = J0 === 28 ? 55 : 1;
                      break;
                    case 22:
                      J0 = 32;
                      h2 = 1;
                      break;
                    }
                  }
                } ());
                c2 = 3;
                break;
              }
            }
          }
        };
        break;
      }
    }
  } ();
  p7uu.l7x = ")}();";
  p7uu.Y4x = ",\\\"";
  p7uu.h7x = "0x569";
  p7uu.I7x = "[\\";
  p7uu.U4x = ".\\";
  p7uu.e8 = function() {
    return typeof p7uu.V8.y8 === 'function' ? p7uu.V8.y8.apply(p7uu.V8, arguments) : p7uu.V8.y8;
  };
  p7uu.a4x = "\\\")},\\";
  p7uu.d4x = ",";
  p7uu.e5 = false;
  p7uu.m6 = "9";
  p7uu.n7x = "<";
  p7uu.h6 = "21";
  p7uu.j9 = "clickSound";
  p7uu.p4x = "={},\\";
  p7uu.g8 = 0;
  p7uu.r5 = function() {
    return typeof p7uu.h5.X5 === 'function' ? p7uu.h5.X5.apply(p7uu.h5, arguments) : p7uu.h5.X5;
  };
  p7uu.Z2 = function() {
    return typeof p7uu.f2.X5 === 'function' ? p7uu.f2.X5.apply(p7uu.f2, arguments) : p7uu.f2.X5;
  };
  function p7uu() {}
  p7uu.H4x = "(){}),\\";
  p7uu.V7x = "].\\";
  p7uu.y6 = "0";
  p7uu.a8 = 5800;
  p7uu.y5 = function() {
    return typeof p7uu.h5.E5 === 'function' ? p7uu.h5.E5.apply(p7uu.h5, arguments) : p7uu.h5.E5;
  };
  p7uu.t9 = "4";
  p7uu.W4x = "=";
  p7uu.q8 = function() {
    return typeof p7uu.V8.Z8 === 'function' ? p7uu.V8.Z8.apply(p7uu.V8, arguments) : p7uu.V8.Z8;
  };
  p7uu.s1 = '#';
  p7uu.L4x = ".$(\\\"";
  p7uu.x4x = "@\\";
  p7uu.M7x = "(\\\"";
  p7uu.S8 = function() {
    return typeof p7uu.h8.H === 'function' ? p7uu.h8.H.apply(p7uu.h8, arguments) : p7uu.h8.H;
  };
  p7uu.K9 = "5";
  p7uu.c4x = "!";
  p7uu.G4x = "(){";
  p7uu.f8 = 3;
  p7uu.y2 = function() {
    return typeof p7uu.f2.H === 'function' ? p7uu.f2.H.apply(p7uu.f2, arguments) : p7uu.f2.H;
  };
  p7uu.O2 = function() {
    return typeof p7uu.f2.q0 === 'function' ? p7uu.f2.q0.apply(p7uu.f2, arguments) : p7uu.f2.q0;
  };
  p7uu.m2 = function() {
    return typeof p7uu.f2.E5 === 'function' ? p7uu.f2.E5.apply(p7uu.f2, arguments) : p7uu.f2.E5;
  };
  p7uu.o4x = "(){\\";
  p7uu.B6 = "3";
  p7uu.b4x = "330.08";
  p7uu.k5 = function() {
    return typeof p7uu.h5.X5 === 'function' ? p7uu.h5.X5.apply(p7uu.h5, arguments) : p7uu.h5.X5;
  };
  p7uu.k4x = "(){},";
  p7uu.B5 = function() {
    return typeof p7uu.h5.H === 'function' ? p7uu.h5.H.apply(p7uu.h5, arguments) : p7uu.h5.H;
  };
  p7uu.N4x = "5247";
  p7uu.f4x = ".";
  var fps;
  this.FRAMEBREAKER;
MyGame = ig.Game.extend({
    name: "MJS-PowerBadminton",
    version: "1.0",
    sessionData: {},
    io: null,
    paused: false,
    tweens: null,
    
    init: function() {
        this.tweens = new ig.TweensHandler();
        this.setupMarketJsGameCenter();
        this.io = new IoManager();
        this.setupUrlParams = new ig.UrlParameters();
        this.removeLoadingWheel();
        this.setupStorageManager();
        this.finalize();
    },
    
    initData: function() {
        return this.sessionData = {
            sound: 0.7,
            music: 0.4,
            score: 0,
            selectedCharacter: "boy1",
            selectedVenue: 0,
            selectedBall: 0,
            selectedPower: "speed",
            selectedMode: "match",
            enemyCharacter: "boy2",
            isPlayerWinLastMatch: false,
            lastMatchScore: "0 : 2",
            hasShownTutorial: false
        };
    },
    
    setupMarketJsGameCenter: function() {
        if (typeof _SETTINGS !== 'undefined' && _SETTINGS.MarketJSGameCenter) {
            var p = ig.domHandler.getElementByClass('gamecenter-activator');
            if (_SETTINGS.MarketJSGameCenter.Activator.Enabled) {
                if (_SETTINGS.MarketJSGameCenter.Activator.Position) {
                    ig.domHandler.css(p, {
                        position: "absolute",
                        left: _SETTINGS.MarketJSGameCenter.Activator.Position.Left,
                        top: _SETTINGS.MarketJSGameCenter.Activator.Position.Top,
                        "z-index": 3
                    });
                }
            }
            ig.domHandler.show(p);
        }
    },
    
    finalize: function() {
        if (ig.ua.mobile) {
            var u = ig.domHandler.getElementById('#play');
            ig.domHandler.attr(u, 'onclick', 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
            ig.domHandler.show(u);
        } else {
            this.start();
        }
        ig.sizeHandler.reorient();
    },
    
    removeLoadingWheel: function() {
        try {
            $('#ajaxbar').css('background', 'none');
        } catch(l) {}
    },
    
    showDebugMenu: function() {
        ig.Entity._debugShowBoxes = true;
        $('.ig_debug').show();
    },
    
    clickSound: "clickSound",
    
    start: function() {
        this.resetPlayerStats();
        this.director = new ig.Director(this, [LevelOpening, LevelMainMenu, LevelCharacterSelect, LevelVenueSelect, LevelGameplay, LevelAnimTester, LevelMatchResult]);
        this.Opening = 0;
        this.MainMenu = 1;
        this.CharacterSelect = 2;
        this.VenueSelect = 3;
        this.Gameplay = 4;
        this.AnimTester = 5;
        this.MatchResult = 6;
        
        if (_SETTINGS.Branding.Splash.Enabled) {
            try {
                this.branding = new ig.BrandingSplash();
            } catch(r) {
                this.director.loadLevel(this.director.currentLevel);
            }
        } else {
            this.director.loadLevel(this.director.currentLevel);
        }
        
        if (_SETTINGS.Branding.Splash.Enabled || _SETTINGS.DeveloperBranding.Splash.Enabled) {
            this.spawnEntity(EntityPointerSelector, 50, 50);
        }
        
        ig.soundHandler.bgmPlayer.volume(this.sessionData.music);
        ig.soundHandler.sfxPlayer.volume(this.sessionData.sound);
    },
    
    fpsCount: function() {
        if (!this.fpsTimer) {
            this.fpsTimer = new ig.Timer(1);
        }
        if (this.fpsTimer && this.fpsTimer.delta() < 0) {
            this.fpsCounter++;
        } else {
            ig.game.fps = this.fpsCounter;
            this.fpsCounter = 0;
            this.fpsTimer.reset();
        }
    },
    
    endGame: function() {
        ig.soundHandler.bgmPlayer.stop();
        ig.apiHandler.run("MJSEnd");
    },
    
    resetPlayerStats: function() {
        this.playerStats = {
            id: this.playerStats ? this.playerStats.id : 0
        };
    },
    
    splashClick: function() {
        var Q = ig.domHandler.getElementById('#play');
        ig.domHandler.hide(Q);
        ig.apiHandler.run('MJSFooter');
        ig.apiHandler.run('MJSHeader');
        if (ig.gd) {
            ig.gd.show(function() {
                ig.game.start();
                if (typeof window.gdsdk !== 'undefined' && typeof window.gdsdk.play === 'function') {
                    window.gdsdk.play();
                }
            }.bind(this));
        }
    },
    
    pauseGame: function() {
        ig.system.stopRunLoop.call(ig.system);
        ig.game.tweens.onSystemPause();
    },
    
    resumeGame: function() {
        if (ig.gd && ig.gd.isFreez) return;
        ig.system.startRunLoop.call(ig.system);
        ig.game.tweens.onSystemResume();
    },
    
    showOverlay: function(Z) {
        for (var i = 0; i < Z.length; i++) {
            if ($('#' + Z[i])) $('#' + Z[i]).show();
            if (document.getElementById(Z[i])) document.getElementById(Z[i]).style.visibility = "visible";
        }
    },
    
    hideOverlay: function(v) {
        for (var i = 0; i < v.length; i++) {
            if ($('#' + v[i])) $('#' + v[i]).hide();
            if (document.getElementById(v[i])) document.getElementById(v[i]).style.visibility = "hidden";
        }
    },
    
    currentBGMVolume: 1,
    addition: 0.1,
    
    update: function() {
        if (this.paused) {
            this.updateWhilePaused();
            this.checkWhilePaused();
        } else {
            this.parent();
            this.tweens.update(this.tweens.now());
            if (ig.ua.mobile && ig.soundHandler) {
                ig.soundHandler.forceLoopBGM();
            }
        }
    },
    
    updateWhilePaused: function() {
        for (var h = 0; h < this.entities.length; h++) {
            if (this.entities[h].ignorePause) {
                this.entities[h].update();
            }
        }
    },
    
    checkWhilePaused: function() {
        var J = {}, z, f, t, D, F, L, P;
        for (var T = 0; T < this.entities.length; T++) {
            z = this.entities[T];
            if (z.ignorePause) {
                if (z.type == ig.Entity.TYPE.NONE && z.checkAgainst == ig.Entity.TYPE.NONE && z.collides == ig.Entity.COLLIDES.NEVER) continue;
                f = {};
                t = Math.floor(z.pos.x / this.cellSize);
                D = Math.floor(z.pos.y / this.cellSize);
                F = Math.floor((z.pos.x + z.size.x) / this.cellSize) + 1;
                L = Math.floor((z.pos.y + z.size.y) / this.cellSize) + 1;
                for (var b = t; b < F; b++) {
                    for (var G = D; G < L; G++) {
                        if (!J[b]) { J[b] = {}; J[b][G] = [z]; }
                        else if (!J[b][G]) { J[b][G] = [z]; }
                        else {
                            P = J[b][G];
                            for (var O = 0; O < P.length; O++) {
                                if (z.touches(P[O]) && !f[P[O].id]) {
                                    f[P[O].id] = true;
                                    ig.Entity.checkPair(z, P[O]);
                                }
                            }
                            P.push(z);
                        }
                    }
                }
            }
        }
    },
    
    draw: function() {
        this.parent();
    },
    
    clearCanvas: function(B, d, j) {
        var E = B.canvas;
        B.clearRect(0, 0, d, j);
        E.style.display = "none";
        E.offsetHeight;
        E.style.display = "inherit";
    }
});
  ig.domHandler = new ig.DomHandler();
  ig.domHandler.forcedDeviceDetection();
  ig.domHandler.forcedDeviceRotation();
  ig.apiHandler = new ig.ApiHandler();
  ig.sizeHandler = new ig.SizeHandler(ig.domHandler);

  var fps = 60;
  if (ig.ua.mobile) {
    ig.Sound.enabled = false;
    ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    ig.sizeHandler.resize();
  } else {
    ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
  }

  ig.soundHandler = new ig.SoundHandler();
  ig.sizeHandler.reorient();

});