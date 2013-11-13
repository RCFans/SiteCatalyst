/*
* Plugin: YouTube plugin SC14.9/15 v1.7
* Created by Justina Chen [13/11/2013]
*/
var s_YTO = {};
s_YTO.v = new Object;
s_YTO.ya = s_YTisa() ? 2 : 0;
s_YTO.ut = s_YTO.uf = 0;
s_YTO.vp = "YouTube Player";
if (document.loaded) {
    s_YTp()
} else if (window.addEventListener) {
    window.addEventListener("load", s_YTp, false)
} else if (window.attachEvent) {
    window.attachEvent("onload", s_YTp)
} else {
    s_YTp()
}
function onYouTubePlayerReady(e) {
    if (e && typeof e == "string") {
        var t = document.getElementById(e);
        if (t && !s_YTO.v[e])
            s_YTO.v[e] = new s_YTv(e, 1)
    }
}
function s_YTp() {
    try {
        var e = document.getElementsByTagName("iframe");
        if (s_YTisa())
            s_YTO.ya = 2;
        for (var t = 0; t < e.length; t++) {
            var n = s_YTgk(e[t].src), r = e[t].id;
            if (ie) {
                e[t].attachEvent("onLoad", s_YTp);
            } else {
                e[t].addEventListener("load", s_YTp, false);
            }
            if (!r) {
                r = "ytplayer";
            }
            if (n) {
                if (!s_YTO.ya) {
                    s_YTO.ya = 1;
                    var i = document.createElement("script"), e;
                    i.src = "//www.youtube.com/player_api";
                    e = document.getElementsByTagName("script")[0];
                    e.parentNode.insertBefore(i, e)
                    i = document.createElement("script");
                    i.src = "//www.youtube.com/iframe_api";
                    e.parentNode.insertBefore(i, e);
                } else if (s_YTO.ya == 2 && (!s_YTO.v[r] || (s_YTO.v[r] && s_YTO.v[r].videoId != n))) {
                    if (s_YTO.v[r] && s_YTO.v[r].videoId != n) {
                        s_YTO.v[r].cueVideoById(n);
                        s_YTO.v[r].b.a.videoId = s_YTO.v[r].videoId = n;
                    } else {
                        s_YTO.v['media'] = new s_YTv(r, n);
                        try {
                            var o = new Object;
                            o.videoId = n;
                            s_YTO.v[r] = new YT.Player(r, o);
                            s_YTO.v[r].videoId = n;
                        } catch (u) {
                            s_YTdv(e);
                            s_YTO.v[r] = null;
                            return;
                        }
                    }
                    s_YTO.v[r].addEventListener("onStateChange", "s_YTisc", false);
                }
            }
        }
    } catch (s) {
    }
}
 
function s_YTisc(e) {
    s_YTO.v['media'].ys = e.data;
    s_YTO.v['media'].vg(e.target);
    s_YTO.v['media'].ve();
}
 
function s_YTisa() {
    return typeof window.YT == "object" && typeof YT.Player
}
function s_YTism() {
    return typeof window.s == "object" && typeof s.Media == "object" && s.Media.open
}
function s_YTgk(e) {
    var t = "";
    try {
        var n, r, i, s;
        if (e.indexOf("//www.youtube.com/watch") > -1) {
            n = e.indexOf("?");
            if (n > -1) {
                r = "&" + e.substring(n + 1);
                i = r.indexOf("&v=");
                if (i > -1) {
                    t = r.substring(i + 3);
                    s = t.indexOf("&");
                    if (s > -1)
                        t = t.substring(0, s)
                }
            }
        }
        if (e.indexOf("//www.youtube.com/embed/") > -1) {
            n = e.indexOf("/embed/") + 7;
            t = e.substring(n);
            s = t.indexOf("?");
            if (s > -1)
                t = t.substring(0, s)
        }
    } catch (o) {
    }
    return t
}
function onYouTubePlayerAPIReady() {
    try {
        s_YTO.ya = 2;
        if (s_YTO.ut)
            clearTimeout(s_YTO.ut);
        s_YTp()
    } catch (e) {
    }
}
function s_YTdi() {
    try {
        if (!s_YTism())
            return;
        if (typeof s.Media.trackWhilePlaying != "undefined") {
            s_YTO.twp = s.Media.trackWhilePlaying;
            s.Media.trackWhilePlaying = false
        }
        if (typeof s.Media.trackSeconds != "undefined") {
            s_YTO.ts = s.Media.trackSeconds;
            delete s.Media.trackSeconds
        }
    } catch (e) {
    }
}
function s_YTei() {
    try {
        if (!s_YTism())
            return;
        if (typeof s_YTO.twp != "undefined") {
            s.Media.trackWhilePlaying = s_YTO.twp;
            delete s_YTO.twp
        }
        if (typeof s_YTO.ts != "undefined") {
            s.Media.trackSeconds = s_YTO.ts;
            delete s_YTO.ts
        }
    } catch (e) {
    }
}
function s_YTut() {
    try {
        s_YTO.uf = 0;
        s_YTei()
    } catch (e) {
    }
}
function s_YTdv(e) {
    try {
        if (!e)
            return;
        var t = s_YTO.v[e] || 0;
        if (t) {
            if (t.ss) {
                if (s.Media)
                    s.Media.close(t.sv);
                t.ss = 0
            }
        }
        t.vc()
    } catch (n) {
    }
}
function s_YTv(e, t) {
    try {
        var n = this;
        n.vc = function() {
            var e = this;
            e.id = e.st = e.sv = e.sl = "";
            e.yt = e.yp = e.ys = e.ss = e.ts = e.ql = e.qs = 0
        };
        n.vg = function(e) {
            try {
                var t = this, n = "function", r = "object", i = "number", o = "string", u = "", a = u, f = u, l = typeof e;
                if (l == r || l == n) {
                    if (typeof e.getVideoUrl == n)
                        u = e.getVideoUrl();
                    if (typeof e.getVideoData == n) {
                        a = e.getVideoData();
                        if (typeof a == r) {
                            if (typeof a.video_id == o)
                                f = a.video_id;
                            if (typeof a.title == o)
                                s.st = a.title
                        }
                    }
                    if (!f && u)
                        f = s_YTgk(u);
                    t.sv = "YouTube";
                    t.sv += "|" + (f ? f : t.videoId);
                    if (t.st)
                        t.sv += "|" + t.st;
                    if (typeof e.getPlayerState == n) {
                        a = e.getPlayerState();
                        if (typeof a == i)
                            t.ys = a
                    }
                    t.qs = 0;
                    if (typeof e.getCurrentTime == n) {
                        a = e.getCurrentTime();
                        t.qs = typeof a == i ? Math.round(a) : 0
                    }
                    t.ts = 0;
                    if (typeof e.getDuration == n) {
                        a = e.getDuration();
                        t.ts = typeof a == i ? Math.round(a) : 0
                    }
                }
            } catch (c) {
            }
        };
        n.ve = function() {
            try {
                var e = this;
                if (!s_YTism() || !e.sv)
                    return;
                if (e.sv != e.sl && e.ss) {
                    if (e.ss == 2) {
                        s.Media.stop(e.sl, e.ql);
                        e.ss = 1
                    }
                    s.Media.close(e.sl);
                    e.sl = e.sv;
                    e.ss = e.ql = 0
                }
                switch (e.ys) {
                    case 1:
                        if (e.ss == 2) {
                            if (e.qs >= e.ql && Math.abs(e.qs - e.ql) < 1)
                                return;
                            s.Media.stop(e.sl, e.ql)
                        }
                        if (!e.ss) {
                            s.Media.open(e.sv, e.ts, s_YTO.vp);
                            e.qs = e.ql = 0;
                            e.sl = e.sv;
                            e.ss = 1
                        }
                        s.Media.play(e.sv, e.qs);
                        e.ql = e.qs;
                        e.ss = 2;
                        break;
                    case 0:
                        if (e.ss) {
                            if (e.ss != 1) {
                                if (Math.abs(e.qs - e.ts) <= 1)
                                    e.qs = e.ts;
                                s.Media.stop(e.sv, e.qs);
                                e.ql = e.qs;
                                e.ss = 1
                            }
                            s.Media.close(e.sv);
                            e.ss = e.qs = e.ql = 0;
                            e.sv = e.sl = ""
                        }
                        break;
                    case 2:
                        if (!e.ss) {
                            s.Media.open(e.sv, e.ts, s_YTO.vp);
                            e.ss = 1;
                            e.sl = e.sv
                        }
                        if (e.ss != 1) {
                            s.Media.stop(e.sv, e.qs);
                            e.ql = e.qs;
                            e.ss = 1
                        }
                        break;
                    case 3:
                        if (s_YTO.uf) {
                            clearTimeout(s_YTO.uf)
                        } else {
                            s_YTdi()
                        }
                        s_YTO.uf = setTimeout("s_YTut()", 3e3);
                        break;
                    case 5:
                        e.qs = e.ql = 0;
                        e.sl = e.sv;
                        e.ss = 0;
                        break;
                    case -1:
                        e.qs = e.ql = 0;
                        e.sl = e.sv;
                        e.ss = 0;
                        break;
                    default:
                        break
                }
            } catch (t) {
            }
        };
        n.fsc = function(e) {
            n.ys = e;
            n.vg(n.yp);
            setTimeout('s_YTO.v["' + n.id + '"].ve()', 10)
        };
        n.isc = function(e) {
            n.ys = e.data;
            n.vg(e.target);
            n.ve();
        };
        if (!t)
            return null;
        n.vc();
        n.id = e;
        var i = arguments;
        if (i.length > 1 && i[1] == 1) {
            n.yt = 1;
            n.yp = r;
            if (window.addEventListener) {
                n.yp.addEventListener("onStateChange", "s_YTO.v." + e + ".fsc", false)
            } else if (window.attachEvent) {
                window.attachEvent("onStateChange", "s_YTO.v." + e + ".fsc")
            }
        } else {
            n.yt = 2;
        }
        return n
    } catch (u) {
        return null
    }
}