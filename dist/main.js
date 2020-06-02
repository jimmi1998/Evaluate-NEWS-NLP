var Client = function (e) { var t = {}; function n(o) { if (t[o]) return t[o].exports; var r = t[o] = { i: o, l: !1, exports: {} }; return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports } return n.m = e, n.c = t, n.d = function (e, t, o) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var o = Object.create(null); if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function (t) { return e[t] }.bind(null, r)); return o }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 12) }([function (e, t, n) { "use strict"; var o, r = function () { return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o }, i = function () { var e = {}; return function (t) { if (void 0 === e[t]) { var n = document.querySelector(t); if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (e) { n = null } e[t] = n } return e[t] } }(), a = []; function s(e) { for (var t = -1, n = 0; n < a.length; n++)if (a[n].identifier === e) { t = n; break } return t } function l(e, t) { for (var n = {}, o = [], r = 0; r < e.length; r++) { var i = e[r], l = t.base ? i[0] + t.base : i[0], c = n[l] || 0, d = "".concat(l, " ").concat(c); n[l] = c + 1; var u = s(d), f = { css: i[1], media: i[2], sourceMap: i[3] }; -1 !== u ? (a[u].references++, a[u].updater(f)) : a.push({ identifier: d, updater: g(f, t), references: 1 }), o.push(d) } return o } function c(e) { var t = document.createElement("style"), o = e.attributes || {}; if (void 0 === o.nonce) { var r = n.nc; r && (o.nonce = r) } if (Object.keys(o).forEach((function (e) { t.setAttribute(e, o[e]) })), "function" == typeof e.insert) e.insert(t); else { var a = i(e.insert || "head"); if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."); a.appendChild(t) } return t } var d, u = (d = [], function (e, t) { return d[e] = t, d.filter(Boolean).join("\n") }); function f(e, t, n, o) { var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css; if (e.styleSheet) e.styleSheet.cssText = u(t, r); else { var i = document.createTextNode(r), a = e.childNodes; a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i) } } function p(e, t, n) { var o = n.css, r = n.media, i = n.sourceMap; if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = o; else { for (; e.firstChild;)e.removeChild(e.firstChild); e.appendChild(document.createTextNode(o)) } } var b = null, h = 0; function g(e, t) { var n, o, r; if (t.singleton) { var i = h++; n = b || (b = c(t)), o = f.bind(null, n, i, !1), r = f.bind(null, n, i, !0) } else n = c(t), o = p.bind(null, n, t), r = function () { !function (e) { if (null === e.parentNode) return !1; e.parentNode.removeChild(e) }(n) }; return o(e), function (t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return; o(e = t) } else r() } } e.exports = function (e, t) { (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r()); var n = l(e = e || [], t); return function (e) { if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) { for (var o = 0; o < n.length; o++) { var r = s(n[o]); a[r].references-- } for (var i = l(e, t), c = 0; c < n.length; c++) { var d = s(n[c]); 0 === a[d].references && (a[d].updater(), a.splice(d, 1)) } n = i } } } }, function (e, t, n) { "use strict"; e.exports = function (e) { var t = []; return t.toString = function () { return this.map((function (t) { var n = function (e, t) { var n = e[1] || "", o = e[3]; if (!o) return n; if (t && "function" == typeof btoa) { var r = (a = o, s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(l, " */")), i = o.sources.map((function (e) { return "/*# sourceURL=".concat(o.sourceRoot || "").concat(e, " */") })); return [n].concat(i).concat([r]).join("\n") } var a, s, l; return [n].join("\n") }(t, e); return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n })).join("") }, t.i = function (e, n, o) { "string" == typeof e && (e = [[null, e, ""]]); var r = {}; if (o) for (var i = 0; i < this.length; i++) { var a = this[i][0]; null != a && (r[a] = !0) } for (var s = 0; s < e.length; s++) { var l = [].concat(e[s]); o && r[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l)) } }, t } }, function (e, t, n) { var o = n(0), r = n(3); "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, ""]]); var i = { insert: "head", singleton: !1 }; o(r, i); e.exports = r.locals || {} }, function (e, t, n) { (t = n(1)(!1)).push([e.i, "*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-family:futura;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1.5}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n", ""]), e.exports = t }, function (e, t, n) { var o = n(0), r = n(5); "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, ""]]); var i = { insert: "head", singleton: !1 }; o(r, i); e.exports = r.locals || {} }, function (e, t, n) { (t = n(1)(!1)).push([e.i, "body{display:flex;flex-direction:column;min-height:100vh;background:#B5966D;color:#edcb64}main{flex:2}section{max-width:800px;margin:50px auto}p{font-family:futura}.tg{border-collapse:collapse;border-spacing:0}.tg td{border-color:#edcb64;border-style:solid;border-width:2px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal}.tg th{border-color:#edcb64;border-style:solid;border-width:2px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal}h1,.stub{color:#B62A3D;font-weight:bold}.result{text-align:left}th.tablerow{text-align:center;color:#B62A3D}td.tablerow{text-align:center;color:#B62A3D}\n", ""]), e.exports = t }, function (e, t, n) { var o = n(0), r = n(7); "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, ""]]); var i = { insert: "head", singleton: !1 }; o(r, i); e.exports = r.locals || {} }, function (e, t, n) { (t = n(1)(!1)).push([e.i, ".copyright{text-align:center;padding:15px}\n", ""]), e.exports = t }, function (e, t, n) { var o = n(0), r = n(9); "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, ""]]); var i = { insert: "head", singleton: !1 }; o(r, i); e.exports = r.locals || {} }, function (e, t, n) { (t = n(1)(!1)).push([e.i, "form{border:5px solid #EDCB64;border-radius:3px;padding:40px;margin-top:20px}form #message{color:#B62A3D}form input#name{width:100%;line-height:16px;margin:10px 0;background-color:#DAECED;border:none;color:white;padding:16px 32px;text-decoration:none;cursor:auto;font-size:medium}form input#button{width:100%;line-height:16px;margin:10px 0;background-color:#B62A3D;border:none;color:white;padding:16px 32px;text-decoration:none;cursor:pointer;font-size:medium}\n", ""]), e.exports = t }, function (e, t, n) { var o = n(0), r = n(11); "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.i, r, ""]]); var i = { insert: "head", singleton: !1 }; o(r, i); e.exports = r.locals || {} }, function (e, t, n) { (t = n(1)(!1)).push([e.i, "header{display:flex;justify-content:center;padding:10px 40px}header #logo{height:40px}\n", ""]), e.exports = t }, function (e, t, n) { "use strict"; function o(e) { const t = e.trim(); return console.log(t), /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t) ? { url: t } : { error: "Please enter a valid URL" } } n.r(t), n.d(t, "checkUserInput", (function () { return o })), n.d(t, "handleSubmit", (function () { return r })); function r(e) { e.preventDefault(); let t = document.getElementById("name").value, n = Client.checkUserInput(t); console.log(n), console.log(n.error), console.log(n.url), void 0 !== n.error ? document.getElementById("message").innerHTML = n.error : (console.log("::: Form Submitted :::"), (async (e = "", t = {}) => { const n = await fetch(e, { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }, body: JSON.stringify(t) }); try { return await n.json() } catch (e) { console.log("error", e) } })("http://localhost:3000/addData", n).then((function (e) { var t; console.log(e), "" === e.text && (e.text = "No meaningful text detected, please interpret the results above with caution."), document.getElementById("results").innerHTML = `<div class="resultTable">\n\n    <table class="tg">\n        <thead>\n            <tr>\n                <th class="tablerow" colspan="2"><span >Result Snapshot</span></th>\n            </tr>\n        </thead>\n        \n        <tbody>\n            <tr>\n                <td class="stub">Polarity</td>\n                <td class="result">${(t = e).polarity}</td>\n            </tr>\n            <tr>\n                <td class="stub">Polarity Confidence</td>\n                <td class="result">${t.polarity_confidence.toFixed(3)}</td>\n            </tr>\n            <tr>\n                <td class="stub">Subjectivity</td>\n                <td class="result">${t.subjectivity}</td>\n            </tr>\n            <tr>\n                <td class="stub">Subjectivity Confidence</td>\n                <td class="result">${t.subjectivity_confidence.toFixed(3)}</td>\n            </tr>\n            <tr>\n                <td class="tablerow" colspan="2"><span>Text Analysed</span></td>\n            </tr>\n            <tr>\n                <td class="result" colspan="2">${t.text}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>` }))) } n(2), n(4), n(6), n(8), n(10); var i = n.p + "91c47a1308cff00cfd9186105529dc22.png"; document.getElementById("logo").src = i }]);