;(function (n) {
  function t(t) {
    for (
      var i, a, r = t[0], u = t[1], s = t[2], l = 0, d = [];
      l < r.length;
      l++
    )
      (a = r[l]),
      Object.prototype.hasOwnProperty.call(c, a) && c[a] && d.push(c[a][0]),
      (c[a] = 0)
    for (i in u) Object.prototype.hasOwnProperty.call(u, i) && (n[i] = u[i])
    h && h(t)
    while (d.length) d.shift()()
    return o.push.apply(o, s || []), e()
  }
  function e() {
    for (var n, t = 0; t < o.length; t++) {
      for (var e = o[t], i = !0, a = 1; a < e.length; a++) {
        var r = e[a]
        0 !== c[r] && (i = !1)
      }
      i && (o.splice(t--, 1), (n = u((u.s = e[0]))))
    }
    return n
  }
  var i = {},
    a = { app: 0 },
    c = { app: 0 },
    o = []
  function r(n) {
    return (
      u.p +
      'js/' +
      ({}[n] || n) +
      '.' +
      {
        'chunk-0d4e5d18': '26b4deb5',
        'chunk-15c541da': '2f71e5e9',
        'chunk-1691b398': 'c968366c',
        'chunk-16b88548': 'b39569c2',
        'chunk-1742d514': 'b74b3e9c',
        'chunk-174d443c': 'b05edc0e',
        'chunk-190f3e8e': '99cf16fc',
        'chunk-1ee03582': 'ef8cad18',
        'chunk-1f59a5c2': '09fd5278',
        'chunk-2d0ab82e': '0f02e4d7',
        'chunk-2d0bcdc8': 'd4f21fbd',
        'chunk-2d0bd413': '5409ba5f',
        'chunk-2d0ced92': '993b4b0b',
        'chunk-2d0d0b9a': '6707f1a8',
        'chunk-2d0d2af8': '83eefa2d',
        'chunk-2d0da06d': '3e3bc68c',
        'chunk-2d20ed78': '1b8f6916',
        'chunk-2d22bdac': '1f85e7b1',
        'chunk-2e0430e8': 'f7e6b43e',
        'chunk-317e78ad': '8bf015a9',
        'chunk-033a232c': 'eea7e4e2',
        'chunk-2d8a1f56': 'da49c237',
        'chunk-5ba5c33f': '9876513e',
        'chunk-7a35d888': 'de1b9510',
        'chunk-98900c98': 'a7729547',
        'chunk-32aa8585': 'a6471db2',
        'chunk-331af9b6': '90c97949',
        'chunk-35034d03': 'f71a211a',
        'chunk-380d69ec': '95149016',
        'chunk-0bce3b4a': '91ee605d',
        'chunk-218a3e88': '6c7164f2',
        'chunk-2d0b9820': 'c71a7220',
        'chunk-2d0cf38a': '6d5185f4',
        'chunk-2d21060b': '70c8dc37',
        'chunk-3f4a125d': '7053738f',
        'chunk-32f2fd27': '05995905',
        'chunk-58c21cb7': '764169d6',
        'chunk-5f1c428e': '1159739f',
        'chunk-6884d665': '8421ba9f',
        'chunk-70a4d296': '07ac62fa',
        'chunk-72b10b03': '27f3b0fd',
        'chunk-95380f64': '3c9363a3',
        'chunk-a7743d8c': 'fe050757',
        'chunk-c6b2ab5e': '3eb0d446',
        'chunk-1f1a3c36': 'd11be944',
        'chunk-7ff630fe': '72158ada',
        'chunk-e6aa4574': '12cc499c',
        'chunk-442a3174': 'd3f53265',
        'chunk-4b491263': '25be2082',
        'chunk-4cce3647': 'eb3df246',
        'chunk-4e920da0': '4cf00eed',
        'chunk-4fd41597': 'bf21e635',
        'chunk-53c2683c': '9ae8ce2b',
        'chunk-5c5ab90a': 'cb16c01d',
        'chunk-5d739718': 'bfd69335',
        'chunk-6203794c': 'c43ace85',
        'chunk-64d37966': '2882ce88',
        'chunk-6dc2c27f': 'e96e1388',
        'chunk-7302d4a2': '830d07b1',
        'chunk-7f1aafb4': 'd0e74aed',
        'chunk-8b3fd8b4': 'fd11ff2e',
        'chunk-a89ddf2e': 'a0847c69',
        'chunk-c3a373f0': '8036f8ad',
        'chunk-af4ac312': 'd44c1393',
        'chunk-e43f91d4': '794e8a8a',
      }[n] +
      '.js'
    )
  }
  function u(t) {
    if (i[t]) return i[t].exports
    var e = (i[t] = { i: t, l: !1, exports: {} })
    return n[t].call(e.exports, e, e.exports, u), (e.l = !0), e.exports
  }
  ;(u.e = function (n) {
    var t = [],
      e = {
        'chunk-0d4e5d18': 1,
        'chunk-15c541da': 1,
        'chunk-1691b398': 1,
        'chunk-16b88548': 1,
        'chunk-1742d514': 1,
        'chunk-174d443c': 1,
        'chunk-190f3e8e': 1,
        'chunk-1ee03582': 1,
        'chunk-1f59a5c2': 1,
        'chunk-2e0430e8': 1,
        'chunk-317e78ad': 1,
        'chunk-033a232c': 1,
        'chunk-2d8a1f56': 1,
        'chunk-5ba5c33f': 1,
        'chunk-7a35d888': 1,
        'chunk-98900c98': 1,
        'chunk-32aa8585': 1,
        'chunk-331af9b6': 1,
        'chunk-35034d03': 1,
        'chunk-380d69ec': 1,
        'chunk-0bce3b4a': 1,
        'chunk-218a3e88': 1,
        'chunk-3f4a125d': 1,
        'chunk-32f2fd27': 1,
        'chunk-58c21cb7': 1,
        'chunk-5f1c428e': 1,
        'chunk-6884d665': 1,
        'chunk-70a4d296': 1,
        'chunk-72b10b03': 1,
        'chunk-95380f64': 1,
        'chunk-a7743d8c': 1,
        'chunk-c6b2ab5e': 1,
        'chunk-1f1a3c36': 1,
        'chunk-7ff630fe': 1,
        'chunk-e6aa4574': 1,
        'chunk-442a3174': 1,
        'chunk-4b491263': 1,
        'chunk-4cce3647': 1,
        'chunk-4e920da0': 1,
        'chunk-4fd41597': 1,
        'chunk-53c2683c': 1,
        'chunk-5c5ab90a': 1,
        'chunk-5d739718': 1,
        'chunk-6203794c': 1,
        'chunk-64d37966': 1,
        'chunk-6dc2c27f': 1,
        'chunk-7302d4a2': 1,
        'chunk-7f1aafb4': 1,
        'chunk-8b3fd8b4': 1,
        'chunk-a89ddf2e': 1,
        'chunk-c3a373f0': 1,
        'chunk-af4ac312': 1,
        'chunk-e43f91d4': 1,
      }
    a[n]
      ? t.push(a[n])
      : 0 !== a[n] &&
        e[n] &&
        t.push(
          (a[n] = new Promise(function (t, e) {
            for (
              var i =
                  'css/' +
                  ({}[n] || n) +
                  '.' +
                  {
                    'chunk-0d4e5d18': '9414b12d',
                    'chunk-15c541da': 'eab156f0',
                    'chunk-1691b398': '7c470e25',
                    'chunk-16b88548': '5c264951',
                    'chunk-1742d514': '61cc827d',
                    'chunk-174d443c': 'c9aa0b70',
                    'chunk-190f3e8e': '359bcb12',
                    'chunk-1ee03582': '0a7e77bc',
                    'chunk-1f59a5c2': '2682d717',
                    'chunk-2d0ab82e': '31d6cfe0',
                    'chunk-2d0bcdc8': '31d6cfe0',
                    'chunk-2d0bd413': '31d6cfe0',
                    'chunk-2d0ced92': '31d6cfe0',
                    'chunk-2d0d0b9a': '31d6cfe0',
                    'chunk-2d0d2af8': '31d6cfe0',
                    'chunk-2d0da06d': '31d6cfe0',
                    'chunk-2d20ed78': '31d6cfe0',
                    'chunk-2d22bdac': '31d6cfe0',
                    'chunk-2e0430e8': '243dee0c',
                    'chunk-317e78ad': '0145060f',
                    'chunk-033a232c': 'd0862a1a',
                    'chunk-2d8a1f56': '25e710c8',
                    'chunk-5ba5c33f': '2c565e55',
                    'chunk-7a35d888': 'b3021a8e',
                    'chunk-98900c98': '016b15b6',
                    'chunk-32aa8585': '582645ab',
                    'chunk-331af9b6': '24569559',
                    'chunk-35034d03': '57c83df9',
                    'chunk-380d69ec': '5b1136db',
                    'chunk-0bce3b4a': 'ffdc3337',
                    'chunk-218a3e88': 'b7151921',
                    'chunk-2d0b9820': '31d6cfe0',
                    'chunk-2d0cf38a': '31d6cfe0',
                    'chunk-2d21060b': '31d6cfe0',
                    'chunk-3f4a125d': 'eee1e505',
                    'chunk-32f2fd27': '9a0e9ce8',
                    'chunk-58c21cb7': '4ef34f9a',
                    'chunk-5f1c428e': '13d95d56',
                    'chunk-6884d665': '42217d38',
                    'chunk-70a4d296': '3560198a',
                    'chunk-72b10b03': '9d27a069',
                    'chunk-95380f64': 'a603461d',
                    'chunk-a7743d8c': '79a641ed',
                    'chunk-c6b2ab5e': '2c63709a',
                    'chunk-1f1a3c36': 'f3ee2832',
                    'chunk-7ff630fe': 'e2cc304f',
                    'chunk-e6aa4574': '9cff3c01',
                    'chunk-442a3174': '5e702fd9',
                    'chunk-4b491263': '64e5ae8d',
                    'chunk-4cce3647': '5ad79b63',
                    'chunk-4e920da0': '187fc615',
                    'chunk-4fd41597': '484b58bf',
                    'chunk-53c2683c': '5b72c5cc',
                    'chunk-5c5ab90a': '1d995183',
                    'chunk-5d739718': '73eb102a',
                    'chunk-6203794c': '6ca20fa9',
                    'chunk-64d37966': '49534750',
                    'chunk-6dc2c27f': '3fc1e27b',
                    'chunk-7302d4a2': 'dd74efd5',
                    'chunk-7f1aafb4': 'c1f7f3bf',
                    'chunk-8b3fd8b4': '41089461',
                    'chunk-a89ddf2e': '232d9f1a',
                    'chunk-c3a373f0': '4f1917eb',
                    'chunk-af4ac312': '76ff05e6',
                    'chunk-e43f91d4': 'f85182ac',
                  }[n] +
                  '.css',
                c = u.p + i,
                o = document.getElementsByTagName('link'),
                r = 0;
              r < o.length;
              r++
            ) {
              var s = o[r],
                l = s.getAttribute('data-href') || s.getAttribute('href')
              if ('stylesheet' === s.rel && (l === i || l === c)) return t()
            }
            var d = document.getElementsByTagName('style')
            for (r = 0; r < d.length; r++) {
              ;(s = d[r]), (l = s.getAttribute('data-href'))
              if (l === i || l === c) return t()
            }
            var h = document.createElement('link')
            ;(h.rel = 'stylesheet'),
            (h.type = 'text/css'),
            (h.onload = t),
            (h.onerror = function (t) {
              var i = (t && t.target && t.target.src) || c,
                o = new Error(
                  'Loading CSS chunk ' + n + ' failed.\n(' + i + ')',
                )
                ;(o.code = 'CSS_CHUNK_LOAD_FAILED'),
              (o.request = i),
              delete a[n],
              h.parentNode.removeChild(h),
              e(o)
            }),
            (h.href = c)
            var f = document.getElementsByTagName('head')[0]
            f.appendChild(h)
          }).then(function () {
            a[n] = 0
          })),
        )
    var i = c[n]
    if (0 !== i)
      if (i) t.push(i[2])
      else {
        var o = new Promise(function (t, e) {
          i = c[n] = [t, e]
        })
        t.push((i[2] = o))
        var s,
          l = document.createElement('script')
        ;(l.charset = 'utf-8'),
        (l.timeout = 120),
        u.nc && l.setAttribute('nonce', u.nc),
        (l.src = r(n))
        var d = new Error()
        s = function (t) {
          ;(l.onerror = l.onload = null), clearTimeout(h)
          var e = c[n]
          if (0 !== e) {
            if (e) {
              var i = t && ('load' === t.type ? 'missing' : t.type),
                a = t && t.target && t.target.src
              ;(d.message =
                'Loading chunk ' + n + ' failed.\n(' + i + ': ' + a + ')'),
              (d.name = 'ChunkLoadError'),
              (d.type = i),
              (d.request = a),
              e[1](d)
            }
            c[n] = void 0
          }
        }
        var h = setTimeout(function () {
          s({ type: 'timeout', target: l })
        }, 12e4)
        ;(l.onerror = l.onload = s), document.head.appendChild(l)
      }
    return Promise.all(t)
  }),
  (u.m = n),
  (u.c = i),
  (u.d = function (n, t, e) {
    u.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: e })
  }),
  (u.r = function (n) {
    'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(n, '__esModule', { value: !0 })
  }),
  (u.t = function (n, t) {
    if ((1 & t && (n = u(n)), 8 & t)) return n
    if (4 & t && 'object' === typeof n && n && n.__esModule) return n
    var e = Object.create(null)
    if (
      (u.r(e),
      Object.defineProperty(e, 'default', { enumerable: !0, value: n }),
      2 & t && 'string' != typeof n)
    )
      for (var i in n)
        u.d(
          e,
          i,
          function (t) {
            return n[t]
          }.bind(null, i),
        )
    return e
  }),
  (u.n = function (n) {
    var t =
        n && n.__esModule
          ? function () {
            return n['default']
          }
          : function () {
            return n
          }
    return u.d(t, 'a', t), t
  }),
  (u.o = function (n, t) {
    return Object.prototype.hasOwnProperty.call(n, t)
  }),
  (u.p = '/'),
  (u.oe = function (n) {
    throw (console.error(n), n)
  })
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = s.push.bind(s)
  ;(s.push = t), (s = s.slice())
  for (var d = 0; d < s.length; d++) t(s[d])
  var h = l
  o.push([0, 'chunk-vendors']), e()
})({
  0: function (n, t, e) {
    n.exports = e('56d7')
  },
  '0b98': function (n, t, e) {
    'use strict'
    e.d(t, 'b', function () {
      return a
    }),
    e.d(t, 'a', function () {
      return c
    }),
    e.d(t, 'c', function () {
      return o
    }),
    e.d(t, 'd', function () {
      return r
    })
    var i = e('be3b')
    function a(n, t) {
      var e = new Date().getTime()
      return Object(i['a'])({
        url: '/login/cellphone',
        method: 'post',
        params: { phone: n, password: t, timestamp: e },
      })
    }
    function c() {
      return Object(i['a'])({ url: '/logout' })
    }
    function o() {
      return Object(i['a'])({ url: '/login/refresh' })
    }
    function r() {
      return Object(i['a'])({ url: '/login/status' })
    }
  },
  1406: function (n, t, e) {},
  '1c58': function (n, t, e) {
    n.exports = e.p + 'img/error.46c62fc6.jpg'
  },
  '1ee9': function (n, t, e) {
    'use strict'
    e('e608')
  },
  2881: function (n, t, e) {
    'use strict'
    e.d(t, 'a', function () {
      return a
    }),
    e.d(t, 'c', function () {
      return c
    }),
    e.d(t, 'b', function () {
      return o
    }),
    e.d(t, 'd', function () {
      return r
    })
    var i = e('be3b')
    function a(n) {
      var t = new Date().getTime()
      return Object(i['a'])({
        url: '/song/url',
        method: 'post',
        params: { id: n, realIP: '14.30.28.102', timestamp: t },
      })
    }
    function c(n) {
      return Object(i['a'])({
        url: '/lyric',
        method: 'post',
        params: { id: n },
      })
    }
    function o(n, t, e) {
      return Object(i['a'])({
        url: '/comment/music',
        method: 'post',
        params: { id: n, limit: t, offset: e },
      })
    }
    function r(n) {
      return Object(i['a'])({
        url: '/song/detail',
        method: 'post',
        params: { ids: n },
      })
    }
  },
  '2f61': function (n, t, e) {
    'use strict'
    e('8752')
  },
  3470: function (n, t, e) {
    'use strict'
    e('f1f7')
  },
  '3e6f': function (n, t, e) {
    'use strict'
    var i = function () {
        var n = this,
          t = n.$createElement,
          e = n._self._c || t
        return e('div', { staticClass: 'btn' }, [
          e('span', { class: n.icon }),
          e('span', [n._v(n._s(n.text))]),
        ])
      },
      a = [],
      c = {
        name: 'btn',
        props: {
          icon: {
            type: String,
            default: function () {
              return null
            },
          },
          text: {
            type: String,
            default: function () {
              return null
            },
          },
        },
      },
      o = c,
      r = (e('49dd'), e('2877')),
      u = Object(r['a'])(o, i, a, !1, null, '64427d64', null)
    t['a'] = u.exports
  },
  '43e5': function (n, t, e) {},
  '49dd': function (n, t, e) {
    'use strict'
    e('e53a')
  },
  '56d7': function (n, t, e) {
    'use strict'
    e.r(t)
    e('e260'), e('e6cf'), e('cca6'), e('a79d')
    var i = e('2b0e'),
      a = e('bc3a'),
      c = e.n(a),
      o = function () {
        var n = this,
          t = n.$createElement,
          e = n._self._c || t
        return n.display() > 500
          ? e(
            'div',
            { attrs: { id: 'app' } },
            [
              e('router-view'),
              e('login'),
              e('music'),
              e('footers'),
              e('playCreate'),
              e('zhuanfa'),
              e('fenxiang'),
              e('back-top', { style: { display: n.backTop } }),
            ],
            1,
          )
          : e('div', { attrs: { id: 'app' } }, [
            n._v('暂不支持移动端，请前往PC端查看'),
          ])
      },
      r = [],
      u = function () {
        var n = this,
          t = n.$createElement,
          e = n._self._c || t
        return n.display
          ? e('div', { staticClass: 'login' }, [
            e(
              'div',
              { staticClass: 'loginBox' },
              [
                e(
                  'button',
                  { staticClass: 'close', on: { click: n.closeLogin } },
                  [n._v('×')],
                ),
                e(
                  'div',
                  [
                    e('label', { attrs: { for: 'userid' } }, [n._v('账号')]),
                    e('el-input', {
                      attrs: { name: 'userid', placeholder: '请输入账号' },
                      on: { blur: n.verifyID },
                      model: {
                        value: n.input1,
                        callback: function (t) {
                          n.input1 = t
                        },
                        expression: 'input1',
                      },
                    }),
                    n.valify && n.a
                      ? e('p', [
                        e('i', { staticClass: 'el-icon-check' }),
                        n._v('账号格式正确'),
                      ])
                      : n._e(),
                    !n.valify && n.a
                      ? e('p', { staticStyle: { color: 'red' } }, [
                        e('i', { staticClass: 'el-icon-close' }),
                        n._v('账号格式错误 '),
                      ])
                      : n._e(),
                  ],
                  1,
                ),
                e(
                  'div',
                  [
                    e('label', { attrs: { for: 'password' } }, [
                      n._v('密码'),
                    ]),
                    e('el-input', {
                      attrs: {
                        placeholder: '请输入密码',
                        name: 'password',
                        'show-password': '',
                      },
                      on: { blur: n.verifyPW },
                      model: {
                        value: n.input2,
                        callback: function (t) {
                          n.input2 = t
                        },
                        expression: 'input2',
                      },
                    }),
                    n.valifyP && n.p
                      ? e('p', [
                        e('i', { staticClass: 'el-icon-check' }),
                        n._v('密码格式正确'),
                      ])
                      : n._e(),
                    !n.valifyP && n.p
                      ? e('p', { staticStyle: { color: 'red' } }, [
                        e('i', { staticClass: 'el-icon-close' }),
                        n._v('密码格式错误 '),
                      ])
                      : n._e(),
                  ],
                  1,
                ),
                e(
                  'el-button',
                  { attrs: { round: '' }, on: { click: n.login } },
                  [n._v('登录')],
                ),
              ],
              1,
            ),
          ])
          : n._e()
      },
      s = [],
      l = (e('ac1f'), e('1276'), e('0b98')),
      d = {
        name: 'login',
        data: function () {
          return {
            input1: '',
            input2: '',
            display: !1,
            valify: !0,
            valifyP: !0,
            a: !1,
            p: !1,
          }
        },
        computed: {
          userImg: function () {
            return this.$bus.login
          },
        },
        methods: {
          loginBox: function () {
            var n = this
            this.$bus.$on('login', function () {
              n.display = !0
            })
            var t = document.cookie.split('=')
            t.length > 1 &&
              ((this.input1 = parseInt(t[0])), (this.input2 = t[1]))
          },
          verifyID: function () {
            this.a = !0
            var n =
              /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
            n.test(this.input1) ? (this.valify = !0) : (this.valify = !1)
          },
          verifyPW: function () {
            this.p = !0
            var n = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
            n.test(this.input2) ? (this.valifyP = !0) : (this.valifyP = !1)
          },
          closeLogin: function () {
            this.display = !1
          },
          login: function () {
            var n = this
            Object(l['b'])(this.input1, this.input2)
              .then(function (t) {
                console.log(t)
                var e = { account: t.account, profile: t.profile }
                Object.prototype.hasOwnProperty.call(t, 'msg')
                  ? n.$bus.$emit('error', '密码')
                  : (n.$store.commit('login', t),
                  n.$store.commit('token', t.token),
                  (document.cookie = n.input1 + '=' + n.input2),
                  sessionStorage.setItem('token', JSON.stringify(t.token)),
                  sessionStorage.setItem('user', JSON.stringify(e)),
                  n.closeLogin())
              })
              .catch(function () {
                n.$bus.$emit('error', '登录')
              })
          },
        },
        created: function () {
          this.loginBox()
        },
      },
      h = d,
      f = (e('8b32'), e('2877')),
      p = Object(f['a'])(h, u, s, !1, null, '4fe4cf3d', null),
      m = p.exports,
      b = function () {
        var n = this,
          t = n.$createElement,
          e = n._self._c || t
        return e(
          'div',
          { staticClass: 'music-play', class: { openplayer: n.openPlayer } },
          [
            e('audio', {
              ref: 'audioMin',
              attrs: { src: n.audio, crossOrigin: 'anonymous' },
              on: {
                timeupdate: n.playFn,
                canplay: n.canplay,
                ended: n.ended,
                error: n.error,
                pause: n.pause,
              },
            }),
            n.openPlayer
              ? e('div', { staticClass: 'play-item' }, [
                e('div', [
                  e('img', {
                    directives: [
                      {
                        name: 'lazy',
                        rawName: 'v-lazy',
                        value: n.musicImg(),
                        expression: 'musicImg()',
                      },
                    ],
                    attrs: { alt: '' },
                  }),
                ]),
                n.info && n.info.length > 0
                  ? e('div', { staticClass: 'lyric' }, [
                    e('div', { staticClass: 'lyric-title' }, [
                      e('h2', [n._v(n._s(n.info[n.index].name))]),
                      e('p', [n._v(n._s(n.info[n.index].ar[0].name))]),
                      e('p', [n._v(n._s(n.info[n.index].al.name))]),
                    ]),
                    n.lyric
                      ? e('div', { staticClass: 'lyric-content' }, [
                        e(
                          'div',
                          { ref: 'lyricText' },
                          n._l(n.lyric, function (t, i) {
                            return e(
                              'p',
                              {
                                key: i,
                                class: {
                                  lyricTextColor: i == n.lyricTextColor,
                                },
                                on: {
                                  click: function (e) {
                                    return n.lyricScrollFn(t[1])
                                  },
                                },
                              },
                              [
                                e('i', [
                                  n._v(
                                    ' ' +
                                            n._s(
                                              Math.floor(t[1] / 60) >= 10
                                                ? Math.floor(t[1] / 60)
                                                : '0' + Math.floor(t[1] / 60),
                                            ) +
                                            ':' +
                                            n._s(
                                              Math.floor(t[1] % 60) >= 10
                                                ? Math.floor(t[1] % 60)
                                                : '0' + Math.floor(t[1] % 60),
                                            ) +
                                            '~~~ ',
                                  ),
                                ]),
                                e('span', [n._v(n._s(t[0]))]),
                              ],
                            )
                          }),
                          0,
                        ),
                      ])
                      : e(
                        'div',
                        { staticStyle: { 'text-align': 'center' } },
                        [n._v('此歌曲为纯音乐，请欣赏')],
                      ),
                  ])
                  : n._e(),
              ])
              : n._e(),
            e(
              'div',
              {
                directives: [
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: n.openPlayer,
                    expression: 'openPlayer',
                  },
                ],
                staticClass: 'effect',
              },
              [e('canvas', { ref: 'canvas' })],
            ),
            e('div', { staticClass: 'player' }, [
              e('div', { staticClass: 'music-img' }, [
                e('div', [
                  e('img', {
                    directives: [
                      {
                        name: 'lazy',
                        rawName: 'v-lazy',
                        value: n.musicImg(),
                        expression: 'musicImg()',
                      },
                    ],
                    attrs: { alt: 'img' },
                  }),
                  e('i', {
                    class: {
                      'el-icon-arrow-up': !n.openPlayer,
                      'el-icon-arrow-down': n.openPlayer,
                    },
                    on: { click: n.openPlayerFn },
                  }),
                ]),
              ]),
              e('div', { staticClass: 'control' }, [
                e('div', { staticClass: 'control-btn' }, [
                  e('i', {
                    staticClass: 'el-icon-refresh-right',
                    on: { click: n.load },
                  }),
                  e(
                    'i',
                    {
                      staticClass: 'el-icon-refresh',
                      on: { click: n.playRendomFn },
                    },
                    [
                      e('span', [
                        n._v(
                          ' ' +
                            n._s(
                              0 == n.random
                                ? '顺序'
                                : 1 == n.random
                                  ? '随机'
                                  : '重复',
                            ) +
                            ' ',
                        ),
                      ]),
                      n.playRendom
                        ? e('div', { staticClass: 'play-rendom' }, [
                          e(
                            'p',
                            {
                              on: {
                                click: function (t) {
                                  return n.randomFn(0)
                                },
                              },
                            },
                            [n._v('顺序播放')],
                          ),
                          e(
                            'p',
                            {
                              on: {
                                click: function (t) {
                                  return n.randomFn(1)
                                },
                              },
                            },
                            [n._v('随机播放')],
                          ),
                          e(
                            'p',
                            {
                              on: {
                                click: function (t) {
                                  return n.randomFn(2)
                                },
                              },
                            },
                            [n._v('重复播放')],
                          ),
                        ])
                        : n._e(),
                    ],
                  ),
                  e('i', {
                    staticClass: 'el-icon-caret-left',
                    on: { click: n.previous },
                  }),
                  e('i', {
                    class: {
                      'el-icon-video-play': !n.player,
                      'el-icon-video-pause': n.player,
                    },
                    on: { click: n.play },
                  }),
                  e('i', {
                    staticClass: 'el-icon-caret-right',
                    on: { click: n.next },
                  }),
                  e(
                    'i',
                    {
                      staticClass: 'el-icon-bell',
                      on: { click: n.volumeControlFn },
                    },
                    [
                      e(
                        'div',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: n.volumeControl,
                              expression: 'volumeControl',
                            },
                          ],
                          staticClass: 'volume',
                        },
                        [
                          e('el-slider', {
                            attrs: { vertical: '', height: '100px' },
                            on: { input: n.volumeFn },
                            model: {
                              value: n.volume,
                              callback: function (t) {
                                n.volume = t
                              },
                              expression: 'volume',
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                  ),
                ]),
                e(
                  'div',
                  { staticClass: 'control-time' },
                  [
                    e('span', [
                      n._v(
                        ' ' +
                          n._s(
                            Math.floor(n.playTime / 60) >= 10
                              ? Math.floor(n.playTime / 60)
                              : '0' + Math.floor(n.playTime / 60),
                          ) +
                          ':' +
                          n._s(
                            Math.floor(n.playTime % 60) >= 10
                              ? Math.floor(n.playTime % 60)
                              : '0' + Math.floor(n.playTime % 60),
                          ) +
                          ' ',
                      ),
                    ]),
                    e('el-slider', {
                      on: { change: n.scheduleFn },
                      model: {
                        value: n.schedule,
                        callback: function (t) {
                          n.schedule = t
                        },
                        expression: 'schedule',
                      },
                    }),
                    e('span', [
                      n._v(
                        ' ' +
                          n._s(Math.floor(n.duration / 60)) +
                          ':' +
                          n._s(
                            Math.floor(n.duration % 60) >= 10
                              ? Math.floor(n.duration % 60)
                              : '0' + Math.floor(n.duration % 60),
                          ) +
                          ' ',
                      ),
                    ]),
                  ],
                  1,
                ),
              ]),
              e('div', { staticClass: 'music-playlist' }, [
                e('span', { on: { click: n.openPlaylistFn } }, [
                  n._v('播放列表'),
                ]),
                n.openPlaylist
                  ? e(
                    'ul',
                    [
                      e('li', [
                        e('span', { on: { click: n.delAll } }, [
                          n._v('全部删除'),
                        ]),
                        e('i', {
                          staticClass: 'el-icon-sort',
                          on: { click: n.playlistSort },
                        }),
                      ]),
                      n._l(n.info, function (t, i) {
                        return e('li', { key: i }, [
                          e(
                            'span',
                            {
                              on: {
                                click: function (e) {
                                  return n.PlaylistBtn(t.id, i)
                                },
                              },
                            },
                            [n._v(n._s(t.name))],
                          ),
                          e('i', {
                            staticClass: 'el-icon-delete',
                            on: {
                              click: function (e) {
                                return n.delPlaylist(t.id, i)
                              },
                            },
                          }),
                        ])
                      }),
                    ],
                    2,
                  )
                  : n._e(),
              ]),
            ]),
          ],
        )
      },
      y = [],
      k = e('2909'),
      v = e('5530'),
      g =
        (e('d81d'),
        e('159b'),
        e('a434'),
        e('4e82'),
        e('4ec9'),
        e('d3b7'),
        e('3ca3'),
        e('ddb0'),
        e('2881')),
      A = e('2f62'),
      O = {
        name: 'musicPlay',
        data: function () {
          return {
            audiolistInfo: [],
            info: [],
            index: 0,
            audio: null,
            volume: 50,
            playTime: 0,
            duration: 0,
            schedule: 0,
            random: 0,
            player: !1,
            playRendom: !1,
            volumeControl: !1,
            openPlayer: !1,
            openPlaylist: !1,
            sort: !1,
            flag: !0,
            lyric: [],
            lyricTime: [],
            lyricTextColor: 0,
          }
        },
        computed: Object(v['a'])({}, Object(A['b'])(['musicInfo'])),
        components: {},
        watch: {
          musicInfo: function (n) {
            if (n) {
              var t = this.getMusic()
              if (t) {
                Array.isArray(n)
                  ? t.unshift.apply(t, Object(k['a'])(n))
                  : t.unshift(n)
                var e = this.nodup(t)
                sessionStorage.setItem('musicInfo', JSON.stringify(e)),
                this.musicPlay(
                  e.map(function (n) {
                    return n.id
                  }),
                ),
                (this.info = e)
              } else
                Array.isArray(n) || (n = [n]),
                (this.info = n),
                sessionStorage.setItem('musicInfo', JSON.stringify(n)),
                this.musicPlay(
                  n.map(function (n) {
                    return n.id
                  }),
                )
            }
            this.$store.commit('musicInfo', null)
          },
          playTime: function (n) {
            this.openPlayer && this.lyricTextScroll(n)
          },
          audio: function (n) {
            n || this.next()
          },
        },
        methods: {
          play: function () {
            var n = this
            console.log('开始播放'),
            (this.player = !this.player),
            this.player
              ? null != this.audio && this.$refs.audioMin.play()
              : this.$refs.audioMin.pause(),
            this.audiolistInfo.forEach(function (t) {
              t.id == n.info[n.index].id && (n.audio = t.url)
            })
          },
          pause: function () {
            ;(this.player = !1), console.log('暂停' + this.player)
          },
          previous: function () {
            var n = this
            0 == this.random
              ? this.index--
              : 1 == this.random &&
                (this.index = Math.floor(
                  Math.random() * this.audiolistInfo.length,
                )),
            this.index < 0 && (this.index = this.audiolistInfo.length - 1),
            this.audiolistInfo.forEach(function (t) {
              t.id == n.info[n.index].id && (n.audio = t.url)
            }),
            (this.player = !0)
          },
          next: function () {
            var n = this
            0 == this.random
              ? this.index++
              : 1 == this.random &&
                (this.index = Math.floor(
                  Math.random() * this.audiolistInfo.length,
                )),
            this.index >= this.audiolistInfo.length && (this.index = 0),
            this.audiolistInfo.forEach(function (t) {
              t.id == n.info[n.index].id && (n.audio = t.url)
            }),
            (this.player = !0)
          },
          canplay: function () {
            console.log('加载成功' + this.index),
            this.$refs.audioMin.play(),
            (this.player = !0),
            (this.duration = this.$refs.audioMin.duration),
            this.lyric &&
                this.openPlayer &&
                (this.$refs.lyricText.scrollTop = 0),
            this.musicLyric(this.info[this.index].id),
            document.documentElement.style.setProperty(
              '--playerBJ',
              'url(' + this.musicImg() + ')',
            )
          },
          ended: function () {
            var n = this
            if (0 == this.random)
              this.index++,
              this.index >= this.audiolistInfo.length && (this.index = 0),
              this.audiolistInfo.length > 1
                ? this.audiolistInfo.forEach(function (t) {
                  t.id == n.info[n.index].id && (n.audio = t.url)
                })
                : 1 == this.audiolistInfo.length && this.load(),
              (this.player = !0)
            else if (1 == this.random)
              if (this.audiolistInfo.length > 1) {
                var t = this.index
                ;(this.index = this.rendomFn(t)),
                this.audiolistInfo.forEach(function (t) {
                  t.id == n.info[n.index].id && (n.audio = t.url)
                }),
                (this.player = !0)
              } else 1 == this.audiolistInfo.length && this.load()
            else
              2 == this.random &&
                (this.$refs.audioMin.load(), (this.player = !0))
          },
          volumeControlFn: function () {
            this.volumeControl = !this.volumeControl
          },
          volumeFn: function () {
            ;(this.$refs.audioMin.volume = parseFloat(this.volume / 100)),
            0 == this.volume
              ? (this.$refs.audioMin.muted = !0)
              : (this.$refs.audioMin.muted = !1)
          },
          playFn: function () {
            void 0 !== this.$refs.audioMin.currentTime &&
              ((this.playTime = Math.floor(this.$refs.audioMin.currentTime)),
              (this.schedule = Math.floor(
                (Math.floor(this.$refs.audioMin.currentTime) /
                  Math.floor(this.$refs.audioMin.duration)) *
                  100,
              )))
          },
          scheduleFn: function () {
            void 0 !== this.$refs.audioMin.currentTime &&
              (this.$refs.audioMin.currentTime =
                (this.schedule / 100) * this.duration)
          },
          lyricScrollFn: function (n) {
            void 0 !== this.$refs.audioMin.currentTime &&
              (this.$refs.audioMin.currentTime = n)
          },
          playRendomFn: function () {
            this.playRendom = !this.playRendom
          },
          randomFn: function (n) {
            this.random = n
          },
          error: function () {
            this.musicPlay(
              this.audiolistInfo.map(function (n) {
                return n.id
              }),
            )
          },
          openPlayerFn: function () {
            ;(this.openPlayer = !this.openPlayer),
            this.openPlayer && this.flag && (this.huabu(), (this.flag = !1))
          },
          lyricTextScroll: function (n) {
            ;-1 !== this.lyricTime.indexOf(n) &&
              this.info.length > 0 &&
              ((this.lyricTextColor = this.lyricTime.indexOf(n)),
              (this.$refs.lyricText.scrollTop = 40 * this.lyricTime.indexOf(n)),
              (this.scrollTop = this.$refs.lyricText.scrollTop))
          },
          openPlaylistFn: function () {
            this.openPlaylist = !this.openPlaylist
          },
          PlaylistBtn: function (n, t) {
            var e = this
            this.audiolistInfo.forEach(function (t) {
              t.id == n && (e.audio = t.url)
            }),
            (this.index = t),
            (this.player = !0)
          },
          delPlaylist: function (n, t) {
            var e = this
            this.audiolistInfo.forEach(function (t, i) {
              t.id == n && e.audiolistInfo.splice(i, 1)
            }),
            this.info.forEach(function (t, i) {
              t.id == n && e.info.splice(i, 1)
            }),
            this.setMusicInfo(this.info),
            this.info.length <= 0
              ? ((this.audio = null), this.$refs.audioMin.pause())
              : t == this.index &&
                  (t >= this.info.length - 1 && (this.index = 0),
                  (this.audio = this.audiolistInfo[this.index].url),
                  this.$refs.audioMin.load())
          },
          delAll: function () {
            ;(this.info = []),
            (this.audiolistInfo = []),
            this.setMusicInfo(this.info),
            (this.audio = null),
            this.$refs.audioMin.pause()
          },
          playlistSort: function () {
            if (((this.sort = !this.sort), this.sort)) {
              var n = [],
                t = []
              this.info.forEach(function (t) {
                n.unshift(t)
              }),
              this.audiolistInfo.forEach(function (n) {
                t.unshift(n)
              }),
              (this.info = n),
              (this.audiolistInfo = t),
              (this.audio = this.audiolistInfo[this.index].url)
            } else {
              var e = [],
                i = []
              this.info.forEach(function (n) {
                e.unshift(n)
              }),
              this.audiolistInfo.forEach(function (n) {
                i.unshift(n)
              }),
              (this.info = e),
              (this.audiolistInfo = i),
              (this.audio = this.audiolistInfo[this.index].url)
            }
          },
          load: function () {
            this.$refs.audioMin.load()
          },
          setMusicInfo: function (n) {
            sessionStorage.setItem('musicInfo', JSON.stringify(n))
          },
          rendomFn: function (n) {
            var t = Math.floor(Math.random() * this.audiolistInfo.length)
            if (n != t) return t
            this.rendomFn(n)
          },
          getMusic: function () {
            return JSON.parse(sessionStorage.getItem('musicInfo'))
          },
          nodup: function (n) {
            var t = this.Copy.copy(n),
              e = new Map()
            return (
              t.forEach(function (n) {
                return !e.has(n.id) && e.set(n)
              }),
              e.values()
            )
          },
          musicImg: function () {
            var n = this,
              t = null,
              e = null
            return (
              this.audiolistInfo &&
                this.info &&
                (this.audiolistInfo.forEach(function (t) {
                  t.url == n.audio && (e = t.id)
                }),
                this.info.forEach(function (n) {
                  n.id == e && (t = n.al.picUrl)
                })),
              t
            )
          },
          setUi: function () {
            document.querySelectorAll('.el-slider__bar').forEach(function (n) {
              n.style.backgroundColor = 'red'
            }),
            document.querySelectorAll('.el-tooltip').forEach(function (n) {
              n.style.backgroundColor = 'red'
            }),
            document
              .querySelectorAll('.el-slider__runway')
              .forEach(function (n) {
                n.style.margin = 0
              }),
            console.log('ui控件设置完毕')
          },
          huabu: function () {
            var n = this
            this.$nextTick(function () {
              ;(n.$audio.audio = n.$refs.audioMin),
              (n.$audio.canvas = n.$refs.canvas),
              n.$audio.openPlayer()
            })
          },
          lyricData: function (n) {
            var t = this
            if (n) {
              if (
                ((this.lyric = []),
                (this.lyricTime = []),
                n.split('\n').forEach(function (n, e) {
                  if (n.length >= 1) {
                    var i = n.split('[')[1].split(']'),
                      a = /^[0-9]{2}:[0-9]{2}.[0-9]{2,10}$/
                    if (a.test(i[0])) {
                      var c = i[0].split('.')[0].split(':'),
                        o = 60 * c[0] + parseInt(c[1])
                      t.lyric.push([i[1], o])
                    } else t.lyric.push([i[1], e])
                  }
                }),
                this.lyric.length >= 1)
              ) {
                var e = this.lyric,
                  i = []
                e.forEach(function (n) {
                  n[0].length > 0 && (i.push(n), t.lyricTime.push(n[1]))
                }),
                (this.lyric = i)
              }
            } else this.lyric = null
          },
          musicPlay: function (n) {
            var t = this
            this.info.length > 0 &&
              Object(g['a'])(n)
                .then(function (n) {
                  ;(t.audiolistInfo = n.data),
                  (t.audio = t.audiolistInfo[t.index].url)
                })
                .catch(function () {})
          },
          musicLyric: function (n) {
            var t = this
            Object(g['c'])(n)
              .then(function (n) {
                console.log(n),
                n.lrc ? t.lyricData(n.lrc.lyric) : t.lyricData(null)
              })
              .catch()
          },
        },
        mounted: function () {
          ;(this.info = this.getMusic()),
          this.getMusic() &&
              this.musicPlay(
                this.getMusic().map(function (n) {
                  return n.id
                }),
              ),
          this.setUi()
        },
      },
      x = O,
      j = (e('8c9c'), Object(f['a'])(x, b, y, !1, null, 'fa0e7288', null)),
      I = j.exports,
      w = function () {
        var n = this,
          t = n.$createElement
        n._self._c
        return n._m(0)
      },
      C = [
        function () {
          var n = this,
            t = n.$createElement,
            e = n._self._c || t
          return e('footer', [
            e('p', [n._v('本网站所提供的信息，只供学习之用。')]),
            e('p', [
              n._v(
                ' 本网站及其雇员一概毋须以任何方式就任何信息传递或传送的失误、不准确或错误对用户或任何其他人士负任何直接或间接的责任。 ',
              ),
            ]),
            e('p', [
              n._v(
                ' 在法律允许的范围内，本网站在此声明,不承担用户或任何人士就使用或未能使用本网站所提供的信息或任何链接或项目所引致的任何直接、间接、附带、从属、特殊、惩罚性或惩戒性的损害赔偿（包括但不限于收益、预期利润的损失或失去的业务、未实现预期的节省）。 ',
              ),
            ]),
            e('p', [
              n._v(
                ' 本网站所提供的信息，若在任何司法管辖地区供任何人士使用或分发给任何人士时会违反该司法管辖地区的法律或条例的规定或会导致本网站或其第三方代理人受限于该司法管辖地区内的任何监管规定时，则该等信息不宜在该司法管辖地区供该等任何人士使用或分发给该等任何人士。用户须自行保证不会受限于任何限制或禁止用户使用或分发本网站所提供信息的当地的规定。 ',
              ),
            ]),
            e('p', [
              n._v(
                ' 本网站图片，文字之类版权申明，因为网站可以由注册用户自行上传图片或文字，本网站无法鉴别所上传图片或文字的知识版权，如果侵犯，请及时通过邮件2281741446@qq.com联系我们，本网站将在第一时间及时删除。 ',
              ),
            ]),
            e('p', [
              n._v(
                ' 凡以任何方式登陆本网站或直接、间接使用本网站资料者，视为自愿接受本网站声明的约束。 ',
              ),
            ]),
          ])
        },
      ],
      P = { name: 'footers' },
      M = P,
      S = (e('3470'), Object(f['a'])(M, w, C, !1, null, '772aa174', null)),
      T = S.exports,
      D = function () {
        var n = this,
          t = n.$createElement,
          e = n._self._c || t
        return e(
          'div',
          { staticClass: 'playCreate', class: { display: n.isDisplay } },
          [
            e('div', { staticClass: 'play-create-content' }, [
              e('p', [n._v('创建歌单')]),
              e(
                'div',
                { staticClass: 'text' },
                [
                  e('label', { attrs: { for: 'create' } }, [n._v('歌单名')]),
                  e('el-input', {
                    attrs: { placeholder: '请输入内容' },
                    model: {
                      value: n.input,
                      callback: function (t) {
                        n.input = t
                      },
                      expression: 'input',
                    },
                  }),
                ],
                1,
              ),
              e('div', { staticClass: 'option' }, [
                e('div', [
                  e('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: n.privacy,
                        expression: 'privacy',
                      },
                    ],
                    attrs: { type: 'checkbox', name: 'privacy' },
                    domProps: {
                      checked: Array.isArray(n.privacy)
                        ? n._i(n.privacy, null) > -1
                        : n.privacy,
                    },
                    on: {
                      change: function (t) {
                        var e = n.privacy,
                          i = t.target,
                          a = !!i.checked
                        if (Array.isArray(e)) {
                          var c = null,
                            o = n._i(e, c)
                          i.checked
                            ? o < 0 && (n.privacy = e.concat([c]))
                            : o > -1 &&
                              (n.privacy = e.slice(0, o).concat(e.slice(o + 1)))
                        } else n.privacy = a
                      },
                    },
                  }),
                  e('span', [n._v('隐私歌单')]),
                ]),
                e('div', [
                  e('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: n.video,
                        expression: 'video',
                      },
                    ],
                    attrs: { type: 'checkbox', name: 'video' },
                    domProps: {
                      checked: Array.isArray(n.video)
                        ? n._i(n.video, null) > -1
                        : n.video,
                    },
                    on: {
                      change: function (t) {
                        var e = n.video,
                          i = t.target,
                          a = !!i.checked
                        if (Array.isArray(e)) {
                          var c = null,
                            o = n._i(e, c)
                          i.checked
                            ? o < 0 && (n.video = e.concat([c]))
                            : o > -1 &&
                              (n.video = e.slice(0, o).concat(e.slice(o + 1)))
                        } else n.video = a
                      },
                    },
                  }),
                  e('span', [n._v('视频歌单')]),
                ]),
              ]),
              e(
                'div',
                { staticClass: 'button' },
                [
                  e('btn', {
                    attrs: { text: '取消' },
                    nativeOn: {
                      click: function (t) {
                        return n.cancel.apply(null, arguments)
                      },
                    },
                  }),
                  e('btn', {
                    staticClass: 'confirm',
                    attrs: { text: '确定' },
                    nativeOn: {
                      click: function (t) {
                        return n.create.apply(null, arguments)
                      },
                    },
                  }),
                ],
                1,
              ),
            ]),
          ],
        )
      },
      q = [],
      E = e('3e6f'),
      L = e('7a49'),
      K = {
        name: 'playCreate',
        data: function () {
          return {
            input: '',
            isDisplay: !1,
            privacy: !1,
            video: !1,
            private: 0,
            type: 'NORMAL',
          }
        },
        components: { btn: E['a'] },
        watch: {
          privacy: function (n) {
            this.private = n ? 10 : 0
          },
          video: function (n) {
            this.type = n ? 'VIDEO' : 'NORMAL'
          },
        },
        methods: {
          cancel: function () {
            this.isDisplay = !1
          },
          create: function () {
            Object(L['c'])(this.input, this.private, this.type)
              .then(function (n) {
                if (Object.hasOwnProperty.call(n, 'message'))
                  throw new Error(n.message)
              })
              .catch()
          },
        },
        mounted: function () {
          var n = this
          this.$bus.$on('create', function () {
            n.isDisplay = !0
          })
        },
      },
      _ = K,
      B = (e('1ee9'), Object(f['a'])(_, D, q, !1, null, '9977f336', null)),
      z = B.exports,
      F = function () {
        var n = this,
          t = n.$createElement,
          e = n._self._c || t
        return e('div', { staticClass: 'backTop', on: { click: n.backTop } }, [
          e('p', [n._v('回到顶部')]),
        ])
      },
      N = [],
      J = {
        name: 'backTop',
        methods: {
          backTop: function () {
            document
              .querySelector('#app')
              .scrollIntoView({ behavior: 'smooth' })
          },
        },
      },
      Q = J,
      G = (e('e095'), Object(f['a'])(Q, F, N, !1, null, '6411506d', null)),
      H = G.exports,
      U = function () {
        var n = this,
          t = n.$createElement,
          e = n._self._c || t
        return e(
          'div',
          { staticClass: 'zhuanfa', class: { display: n.isDisplay } },
          [
            e('p', [n._v('转发动态')]),
            e(
              'div',
              [
                e('el-input', {
                  attrs: {
                    type: 'textarea',
                    rows: 7,
                    placeholder: '说点什么',
                    resize: 'none',
                  },
                  model: {
                    value: n.textarea,
                    callback: function (t) {
                      n.textarea = t
                    },
                    expression: 'textarea',
                  },
                }),
                e(
                  'section',
                  [
                    e('btn', {
                      attrs: { text: '转发' },
                      nativeOn: {
                        click: function (t) {
                          return n.userEventForwards.apply(null, arguments)
                        },
                      },
                    }),
                    e('btn', {
                      attrs: { text: '取消' },
                      nativeOn: {
                        click: function (t) {
                          return n.cancel.apply(null, arguments)
                        },
                      },
                    }),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
        )
      },
      Z = [],
      $ = e('7cd9'),
      X = {
        name: 'zhuanfa',
        data: function () {
          return { textarea: '', isDisplay: !1, eid: null, uid: null }
        },
        components: { btn: E['a'] },
        methods: {
          cancel: function () {
            this.isDisplay = !1
          },
          userEventForwards: function () {
            var n = this
            Object($['u'])(this.uid, this.eid, this.textarea)
              .then(function () {
                n.isDisplay = !1
              })
              .catch()
          },
        },
        mounted: function () {
          var n = this
          this.$bus.$on('zhuanfa', function (t, e) {
            ;(n.isDisplay = !0), (n.eid = t), (n.uid = e), console.log(t, e)
          })
        },
      },
      Y = X,
      W = (e('c9b1'), Object(f['a'])(Y, U, Z, !1, null, '38e5c128', null)),
      R = W.exports,
      V = function () {
        var n = this,
          t = n.$createElement,
          e = n._self._c || t
        return e(
          'div',
          { staticClass: 'zhuanfa', class: { display: n.isDisplay } },
          [
            e('p', [n._v('分享' + n._s(n.typeText()))]),
            e(
              'div',
              [
                e('el-input', {
                  attrs: {
                    type: 'textarea',
                    rows: 7,
                    placeholder: '说点什么',
                    resize: 'none',
                  },
                  model: {
                    value: n.textarea,
                    callback: function (t) {
                      n.textarea = t
                    },
                    expression: 'textarea',
                  },
                }),
                e(
                  'section',
                  [
                    e('btn', {
                      attrs: { text: '分享' },
                      nativeOn: {
                        click: function (t) {
                          return n.share.apply(null, arguments)
                        },
                      },
                    }),
                    e('btn', {
                      attrs: { text: '取消' },
                      nativeOn: {
                        click: function (t) {
                          return n.cancel.apply(null, arguments)
                        },
                      },
                    }),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
        )
      },
      nn = [],
      tn = {
        name: 'zhuanfa',
        data: function () {
          return { textarea: '', isDisplay: !1, id: null, type: null }
        },
        components: { btn: E['a'] },
        methods: {
          cancel: function () {
            this.isDisplay = !1
          },
          typeText: function () {
            return 'song' == this.type
              ? '歌单'
              : 'Single' == this.type
                ? '专辑'
                : 'video' == this.type
                  ? '视频'
                  : 'mv' == this.type
                    ? 'mv'
                    : void 0
          },
          share: function () {
            console.log(this.id, this.type, this.textarea),
            Object($['n'])(parseInt(this.id), this.type, this.textarea)
              .then(function () {})
              .catch()
          },
        },
        mounted: function () {
          var n = this
          this.$bus.$on('fenxiang', function (t, e) {
            ;(n.isDisplay = !0), (n.id = t), (n.type = e)
          })
        },
      },
      en = tn,
      an = (e('a150'), Object(f['a'])(en, V, nn, !1, null, '79c54d84', null)),
      cn = an.exports,
      on = {
        name: 'app',
        components: {
          login: m,
          music: I,
          footers: T,
          playCreate: z,
          BackTop: H,
          zhuanfa: R,
          fenxiang: cn,
        },
        data: function () {
          return { num: 0, falg: !0, backTop: 'none' }
        },
        methods: {
          status: function () {
            var n = this,
              t = sessionStorage.getItem('token')
            if (t) {
              var e = JSON.parse(sessionStorage.getItem('user'))
              this.$store.commit('login', e),
              this.$store.commit('token', t),
              Object(l['c'])()
                .then(function () {
                  Object(l['d'])()
                    .then(function (t) {
                      console.log(t.data), n.$store.commit('login', t.data)
                    })
                    .catch()
                })
                .catch(function (n) {
                  console.log(n)
                })
            }
          },
          backTopFn: function () {
            window.pageYOffset >= 500
              ? (this.backTop = 'block')
              : window.pageYOffset < 500 && (this.backTop = 'none')
          },
          display: function () {
            var n = document.querySelector('#app')
            return n.offsetWidth
          },
        },
        created: function () {
          this.status()
        },
        mounted: function () {
          var n = this
          document.addEventListener('scroll', function () {
            n.falg &&
              ((n.falg = !1),
              setTimeout(function () {
                n.backTopFn(), (n.falg = !0)
              }, 500))
          }),
          this.display()
        },
      },
      rn = on,
      un = (e('2f61'), Object(f['a'])(rn, o, r, !1, null, null, null)),
      sn = un.exports,
      ln = e('8c4f'),
      dn = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-5f1c428e')]).then(
          e.bind(null, 'b3d7'),
        )
      },
      hn = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-2d21060b')]).then(
          e.bind(null, 'b843'),
        )
      },
      fn = function () {
        return e.e('chunk-15c541da').then(e.bind(null, 'f315'))
      },
      pn = function () {
        return Promise.all([e.e('chunk-317e78ad'), e.e('chunk-2d8a1f56')]).then(
          e.bind(null, '9ec8'),
        )
      },
      mn = function () {
        return e.e('chunk-4cce3647').then(e.bind(null, '0f80'))
      },
      bn = function () {
        return e.e('chunk-331af9b6').then(e.bind(null, '14ed'))
      },
      yn = function () {
        return e.e('chunk-174d443c').then(e.bind(null, '1fec'))
      },
      kn = function () {
        return e.e('chunk-190f3e8e').then(e.bind(null, '31a0'))
      },
      vn = function () {
        return e.e('chunk-1691b398').then(e.bind(null, 'd612'))
      },
      gn = function () {
        return e.e('chunk-7302d4a2').then(e.bind(null, '07de'))
      },
      An = function () {
        return e.e('chunk-2e0430e8').then(e.bind(null, '2d4c'))
      },
      On = function () {
        return e.e('chunk-442a3174').then(e.bind(null, 'a46f'))
      },
      xn = function () {
        return e.e('chunk-4e920da0').then(e.bind(null, '81bc'))
      },
      jn = function () {
        return Promise.all([e.e('chunk-c6b2ab5e'), e.e('chunk-af4ac312')]).then(
          e.bind(null, '9fbb5'),
        )
      },
      In = function () {
        return e.e('chunk-64d37966').then(e.bind(null, '5ccd'))
      },
      wn = function () {
        return e.e('chunk-0d4e5d18').then(e.bind(null, 'b2d9'))
      },
      Cn = function () {
        return e.e('chunk-2d0bd413').then(e.bind(null, '2ae3'))
      },
      Pn = function () {
        return e.e('chunk-1ee03582').then(e.bind(null, 'f9db'))
      },
      Mn = function () {
        return Promise.all([e.e('chunk-317e78ad'), e.e('chunk-5ba5c33f')]).then(
          e.bind(null, '13e6'),
        )
      },
      Sn = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-2d0cf38a')]).then(
          e.bind(null, '6390'),
        )
      },
      Tn = function () {
        return Promise.all([e.e('chunk-317e78ad'), e.e('chunk-7a35d888')]).then(
          e.bind(null, '714e'),
        )
      },
      Dn = function () {
        return e.e('chunk-4b491263').then(e.bind(null, 'c11a'))
      },
      qn = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-2d0b9820')]).then(
          e.bind(null, '32f1'),
        )
      },
      En = function () {
        return e.e('chunk-32aa8585').then(e.bind(null, '91dc'))
      },
      Ln = function () {
        return e.e('chunk-5d739718').then(e.bind(null, '8328'))
      },
      Kn = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-6884d665')]).then(
          e.bind(null, '6fa8'),
        )
      },
      _n = function () {
        return Promise.all([e.e('chunk-317e78ad'), e.e('chunk-033a232c')]).then(
          e.bind(null, '4dd3'),
        )
      },
      Bn = function () {
        return e.e('chunk-6dc2c27f').then(e.bind(null, '963b'))
      },
      zn = function () {
        return e.e('chunk-1742d514').then(e.bind(null, '34b7'))
      },
      Fn = function () {
        return e.e('chunk-c3a373f0').then(e.bind(null, '3b9c'))
      },
      Nn = function () {
        return Promise.all([
          e.e('chunk-380d69ec'),
          e.e('chunk-317e78ad'),
          e.e('chunk-3f4a125d'),
        ]).then(e.bind(null, '3c31'))
      },
      Jn = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-218a3e88')]).then(
          e.bind(null, 'ddf5'),
        )
      },
      Qn = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-a7743d8c')]).then(
          e.bind(null, '06c9'),
        )
      },
      Gn = function () {
        return Promise.all([
          e.e('chunk-380d69ec'),
          e.e('chunk-c6b2ab5e'),
          e.e('chunk-1f1a3c36'),
        ]).then(e.bind(null, '4bd5'))
      },
      Hn = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-58c21cb7')]).then(
          e.bind(null, '5d55'),
        )
      },
      Un = function () {
        return Promise.all([
          e.e('chunk-380d69ec'),
          e.e('chunk-c6b2ab5e'),
          e.e('chunk-7ff630fe'),
        ]).then(e.bind(null, '4524'))
      },
      Zn = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-0bce3b4a')]).then(
          e.bind(null, 'b5ba'),
        )
      },
      $n = function () {
        return e.e('chunk-35034d03').then(e.bind(null, '6b67'))
      },
      Xn = function () {
        return e.e('chunk-1f59a5c2').then(e.bind(null, '43e3'))
      },
      Yn = function () {
        return e.e('chunk-e43f91d4').then(e.bind(null, '448a'))
      },
      Wn = function () {
        return e.e('chunk-2d0ced92').then(e.bind(null, '60ce'))
      },
      Rn = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-72b10b03')]).then(
          e.bind(null, '1ef7'),
        )
      },
      Vn = function () {
        return Promise.all([e.e('chunk-317e78ad'), e.e('chunk-98900c98')]).then(
          e.bind(null, 'c646'),
        )
      },
      nt = function () {
        return e.e('chunk-5c5ab90a').then(e.bind(null, '23d0'))
      },
      tt = function () {
        return e.e('chunk-16b88548').then(e.bind(null, 'e0aa'))
      },
      et = function () {
        return e.e('chunk-6203794c').then(e.bind(null, 'b6e7'))
      },
      it = function () {
        return e.e('chunk-4fd41597').then(e.bind(null, '3f3f'))
      },
      at = function () {
        return e.e('chunk-2d22bdac').then(e.bind(null, 'f16a'))
      },
      ct = function () {
        return e.e('chunk-53c2683c').then(e.bind(null, '6e8f'))
      },
      ot = function () {
        return e.e('chunk-2d0d2af8').then(e.bind(null, '5a0f'))
      },
      rt = function () {
        return e.e('chunk-2d0da06d').then(e.bind(null, '6a9e'))
      },
      ut = function () {
        return e.e('chunk-2d0ab82e').then(e.bind(null, '161d'))
      },
      st = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-70a4d296')]).then(
          e.bind(null, '10ec'),
        )
      },
      lt = function () {
        return e.e('chunk-2d0bcdc8').then(e.bind(null, '2a14'))
      },
      dt = function () {
        return e.e('chunk-7f1aafb4').then(e.bind(null, 'efbc'))
      },
      ht = function () {
        return e.e('chunk-a89ddf2e').then(e.bind(null, '2a00'))
      },
      ft = function () {
        return e.e('chunk-8b3fd8b4').then(e.bind(null, '450b'))
      },
      pt = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-e6aa4574')]).then(
          e.bind(null, '57b2'),
        )
      },
      mt = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-32f2fd27')]).then(
          e.bind(null, '80bd'),
        )
      },
      bt = function () {
        return e.e('chunk-2d0d0b9a').then(e.bind(null, '68ce'))
      },
      yt = function () {
        return Promise.all([e.e('chunk-380d69ec'), e.e('chunk-95380f64')]).then(
          e.bind(null, '627d'),
        )
      },
      kt = function () {
        return e.e('chunk-2d20ed78').then(e.bind(null, 'b0a5'))
      }
    i['default'].use(ln['a'])
    var vt = [
        { path: '', redirect: '/home' },
        { path: '/test', name: 'test', component: kt },
        { path: '/home', name: 'Home', component: dn },
        {
          path: '/user',
          name: 'User',
          component: hn,
          children: [
            { path: '/user', redirect: '/user/home' },
            {
              path: 'home',
              name: 'home',
              component: fn,
              children: [
                { path: '/user/home', redirect: '/user/home/like' },
                { path: 'like', name: 'like', component: pn },
                {
                  path: 'myPlay',
                  name: 'myPlay',
                  component: mn,
                  children: [
                    {
                      path: '/user/home/myPlay',
                      redirect: '/user/home/myPlay/myCreat',
                    },
                    { path: 'myCreat', name: 'myCreat', component: yn },
                    { path: 'mySub', name: 'mySub', component: bn },
                    { path: 'myDj', name: 'myDj', component: kn },
                  ],
                },
                {
                  path: 'focus',
                  name: 'focus',
                  component: vn,
                  children: [
                    {
                      path: '/user/home/focus',
                      redirect: '/user/home/focus/user',
                    },
                    { path: 'user', name: 'user', component: gn },
                  ],
                },
                { path: 'fans', name: 'fans', component: An },
                {
                  path: 'event',
                  name: 'event',
                  component: On,
                  children: [
                    {
                      path: '/user/home/event',
                      redirect: '/user/home/event/events',
                    },
                    { path: 'comment', name: 'comment', component: xn },
                    { path: 'events', name: 'events', component: jn },
                  ],
                },
              ],
            },
            { path: 'leave', name: 'userLeave', component: Pn },
            {
              path: 'set',
              name: 'userSet',
              component: In,
              children: [
                { path: '/user/set', redirect: '/user/set/updata' },
                { path: 'updata', name: 'updata', component: wn },
                { path: 'bind', name: 'bind', component: Cn },
              ],
            },
            { path: 'history', name: 'history', component: Mn },
          ],
        },
        {
          path: '/play',
          name: 'play',
          component: Sn,
          children: [
            { path: '/play', redirect: '/play/Detail' },
            { path: 'Detail', name: 'playDetail', component: Tn },
            { path: 'updata', name: 'updataPlay', component: Dn },
          ],
        },
        { path: '/albumDetail', name: 'albumDetail', component: Nn },
        { path: '/videoDetail', name: 'videoDetail', component: Hn },
        {
          path: '/artistDetail',
          name: 'artistDetail',
          component: Qn,
          children: [
            { path: '/artistDetail', redirect: '/artistDetail/album' },
            { path: 'album', name: 'album', component: _n },
            { path: 'info', name: 'info', component: Bn },
            { path: 'mv', name: 'mv', component: zn },
            { path: 'similarity', name: 'similarity', component: Fn },
          ],
        },
        { path: '/artist', name: 'artist', component: Kn },
        { path: '/songDetail', name: 'songDetail', component: Jn },
        { path: '/eventsDetail', name: 'eventsDetail', component: Un },
        { path: '/hotDetail', name: 'hotDetail', component: Gn },
        {
          path: '/playItem',
          name: 'playItem',
          component: qn,
          children: [
            { path: '/playItem', redirect: '/playItem/all' },
            { path: 'all', name: 'all', component: En },
            { path: 'highquality', name: 'highquality', component: Ln },
          ],
        },
        {
          path: '/collect',
          name: 'collect',
          component: Zn,
          children: [
            { path: '/collect', redirect: '/collect/song' },
            { path: 'song', name: 'song', component: Yn },
            { path: 'album', name: 'albumshoucang', component: Xn },
            { path: 'special', name: 'special', component: Wn },
            { path: 'video', name: 'video', component: $n },
          ],
        },
        {
          path: '/search',
          name: 'search',
          component: Rn,
          children: [
            { path: '/search', redirect: '/search/searchSong' },
            { path: 'searchSong', name: 'searchSong', component: Vn },
            { path: 'searchAlbum', name: 'searchAlbum', component: nt },
            { path: 'searchPlay', name: 'searchPlay', component: tt },
            { path: 'searchArtist', name: 'searchArtist', component: et },
            { path: 'searchVideo', name: 'searchVideo', component: it },
            { path: 'searchUser', name: 'searchUser', component: at },
            { path: 'searchLyric', name: 'searchLyric', component: ct },
            { path: 'searchStation', name: 'searchStation', component: ot },
            { path: 'searchMV', name: 'searchMV', component: rt },
            {
              path: 'searchSynthesize',
              name: 'searchSynthesize',
              component: ut,
            },
          ],
        },
        {
          path: '/mv',
          name: 'MV',
          component: st,
          children: [
            { path: '/mv', redirect: '/mv/mv' },
            {
              path: 'mv',
              name: 'mvzy',
              component: lt,
              children: [
                { path: '/mv/mv', redirect: '/mv/mv/mvhome' },
                { path: 'mvhome', name: 'mvhome', component: dt },
                { path: 'mvAll', name: 'mvAll', component: ht },
              ],
            },
            { path: 'video', name: 'videozy', component: ft },
          ],
        },
        { path: '/dj', name: 'dj', component: pt, children: [] },
        { path: '/djDetail', name: 'djDetail', component: mt, children: [] },
        { path: '/djPlay', name: 'djPlay', component: bt },
        { path: '/ranking', name: 'top', component: yt },
      ],
      gt = new ln['a']({ mode: 'hash', base: '/', routes: vt })
    gt.beforeEach(function (n, t, e) {
      var i = sessionStorage.getItem('token')
      i || '/home' == n.path ? e() : (alert('请登录'), e('/home'))
    })
    var At = gt
    i['default'].use(A['a'])
    var Ot = new A['a'].Store({
        state: {
          loading: !1,
          token: null,
          login: null,
          play: null,
          musicInfo: null,
          others: null,
          myCreatPlay: null,
          artistUid: null,
        },
        mutations: {
          loading: function (n) {
            n.loading = !n.loading
          },
          token: function (n, t) {
            n.token = t
          },
          login: function (n, t) {
            n.login = t
          },
          play: function (n, t) {
            n.play = t
          },
          musicInfo: function (n, t) {
            n.musicInfo = t
          },
          others: function (n, t) {
            n.others = t
          },
          myCreatPlay: function (n, t) {
            n.myCreatPlay = t
          },
          artistUid: function (n, t) {
            n.artistUid = t
          },
        },
        actions: {},
        modules: {},
      }),
      xt = e('5c96'),
      jt = e.n(xt)
    e('1406')
    i['default'].use(jt.a)
    var It = e('caf9'),
      wt = e('d4ec'),
      Ct = e('bee2'),
      Pt =
        (e('5cc6'),
        e('9a8c'),
        e('a975'),
        e('735e'),
        e('c1ac'),
        e('d139'),
        e('3a7b'),
        e('d5d6'),
        e('82f8'),
        e('e91f'),
        e('60bd'),
        e('5f96'),
        e('3280'),
        e('3fcc'),
        e('ca91'),
        e('25a1'),
        e('cd26'),
        e('3c5d'),
        e('2954'),
        e('649e'),
        e('219c'),
        e('170b'),
        e('b39a'),
        e('72f7'),
        (function () {
          function n(t, e) {
            Object(wt['a'])(this, n), (this.audio = t), (this.canvas = e)
          }
          return (
            Object(Ct['a'])(n, [
              {
                key: 'openPlayer',
                value: function () {
                  var n = null,
                    t = null,
                    e = null,
                    i = null,
                    a = null,
                    c = null
                  ;(n = this.audio),
                  (t = new AudioContext()),
                  (i = t.createMediaElementSource(n)),
                  (e = t.createAnalyser()),
                  i.connect(e),
                  e.connect(t.destination),
                  (a = new Uint8Array(e.frequencyBinCount)),
                  (c = this.canvas.getContext('2d')),
                  (this.canvas.width = window.innerWidth),
                  (this.canvas.height = 200)
                  var o = this.canvas.width,
                    r = this.canvas.height,
                    u = c.createLinearGradient(o / 2, r, o / 2, r - 50)
                  u.addColorStop(0, 'rgb(23, 19, 80)'),
                  u.addColorStop(0.5, '#069'),
                  u.addColorStop(1, 'rgb(250, 14, 199)')
                  var s = 80
                  function l() {
                    e.getByteFrequencyData(a)
                    var n = Math.round(a.length / s)
                    c.clearRect(0, 0, o, r)
                    for (var t = 0; t < s; t++) {
                      var i = a[n * t]
                      ;(c.fillStyle = u),
                      c.fillRect(o / 2 + 10 * t, r, 7, -i),
                      c.fillRect(o / 2 - 10 * t, r, 7, -i)
                    }
                  }
                  setInterval(l, 30), console.log('音频谱加载完毕')
                },
              },
            ]),
            n
          )
        })()),
      Mt = e('53ca'),
      St = (function () {
        function n() {
          Object(wt['a'])(this, n)
        }
        return (
          Object(Ct['a'])(n, [
            {
              key: 'copy',
              value: function (n) {
                var t = Array.isArray(n) ? [] : {}
                if (n && 'object' == Object(Mt['a'])(n))
                  for (var e in n)
                    n[e] && 'object' == Object(Mt['a'])(n[e])
                      ? (t[e] = this.copy(n[e]))
                      : (t[e] = n[e])
                return t
              },
            },
          ]),
          n
        )
      })()
    ;(i['default'].config.productionTip = !1),
    (i['default'].prototype.$bus = new i['default']()),
    (i['default'].prototype.$time = function (n) {
      var t = new Date(n),
        e = t.getFullYear(),
        i = t.getMonth() + 1
      i < 10 && (i = '0' + i)
      var a = t.getDate()
      a < 10 && (a = '0' + a)
      var c = t.getHours()
      c < 10 && (c = '0' + c)
      var o = t.getMinutes()
      o < 10 && (o = '0' + o)
      var r = t.getSeconds()
      return (
        r < 10 && (r = '0' + r),
        e + '年' + i + '月' + a + '日  ' + c + ':' + o + ':' + r
      )
    }),
    (i['default'].prototype.$audio = new Pt()),
    (i['default'].prototype.Copy = new St()),
    (i['default'].prototype.axios = c.a),
    i['default'].use(It['a'], { loading: e('f8b2'), error: e('1c58') })
    var Tt = new i['default']({
      router: At,
      store: Ot,
      render: function (n) {
        return n(sn)
      },
    }).$mount('#app')
    t['default'] = Tt
  },
  '7a49': function (n, t, e) {
    'use strict'
    e.d(t, 'e', function () {
      return a
    }),
    e.d(t, 'c', function () {
      return c
    }),
    e.d(t, 'n', function () {
      return o
    }),
    e.d(t, 'g', function () {
      return r
    }),
    e.d(t, 'd', function () {
      return u
    }),
    e.d(t, 'f', function () {
      return s
    }),
    e.d(t, 'h', function () {
      return l
    }),
    e.d(t, 'j', function () {
      return d
    }),
    e.d(t, 'o', function () {
      return h
    }),
    e.d(t, 'i', function () {
      return f
    }),
    e.d(t, 'b', function () {
      return p
    }),
    e.d(t, 'l', function () {
      return m
    }),
    e.d(t, 'a', function () {
      return b
    }),
    e.d(t, 'k', function () {
      return y
    }),
    e.d(t, 'm', function () {
      return k
    })
    var i = e('be3b')
    function a(n) {
      return Object(i['a'])({
        url: '/playlist/detail',
        method: 'post',
        params: { id: n },
      })
    }
    function c(n, t, e) {
      return Object(i['a'])({
        url: '/playlist/create',
        method: 'post',
        params: { name: n, privacy: t, type: e },
      })
    }
    function o(n, t) {
      return Object(i['a'])({
        url: '/playlist/subscribe',
        method: 'post',
        params: { t: n, id: t },
      })
    }
    function r(n, t, e) {
      return Object(i['a'])({
        url: '/playlist/tracks',
        method: 'post',
        params: { op: n, pid: t, tracks: e },
      })
    }
    function u(n) {
      return Object(i['a'])({
        url: '/playlist/delete',
        method: 'post',
        params: { id: n },
      })
    }
    function s() {
      return Object(i['a'])({
        url: '/playlist/highquality/tags',
        method: 'post',
      })
    }
    function l() {
      return Object(i['a'])({ url: '/playlist/catlist', method: 'post' })
    }
    function d() {
      return Object(i['a'])({ url: '/playlist/hot', method: 'post' })
    }
    function h(n, t, e, a) {
      return Object(i['a'])({
        url: '/top/playlist',
        method: 'post',
        params: { order: n, cat: t, limit: e, offset: a },
      })
    }
    function f() {
      return Object(i['a'])({
        url: '/playlist/highquality/tags',
        method: 'post',
      })
    }
    function p(n, t, e) {
      return Object(i['a'])({
        url: '/top/playlist/highquality',
        method: 'post',
        params: { cat: n, limit: t, before: e },
      })
    }
    function m(n) {
      return Object(i['a'])({
        url: '/related/playlist',
        method: 'post',
        params: { id: n },
      })
    }
    function b(n, t, e, a) {
      return Object(i['a'])({
        url: '/comment/playlist',
        method: 'post',
        params: { id: n, before: a, offset: e, limit: t },
      })
    }
    function y(n, t) {
      return Object(i['a'])({
        url: '/playlist/track/add',
        method: 'post',
        params: { pid: n, ids: t },
      })
    }
    function k(n) {
      return Object(i['a'])({
        url: '/song/detail',
        method: 'post',
        params: { ids: n },
      })
    }
  },
  '7cd9': function (n, t, e) {
    'use strict'
    e.d(t, 'c', function () {
      return a
    }),
    e.d(t, 'o', function () {
      return c
    }),
    e.d(t, 'h', function () {
      return o
    }),
    e.d(t, 'p', function () {
      return r
    }),
    e.d(t, 'q', function () {
      return u
    }),
    e.d(t, 'k', function () {
      return s
    }),
    e.d(t, 'j', function () {
      return l
    }),
    e.d(t, 'i', function () {
      return d
    }),
    e.d(t, 'd', function () {
      return h
    }),
    e.d(t, 'l', function () {
      return f
    }),
    e.d(t, 'm', function () {
      return p
    }),
    e.d(t, 'e', function () {
      return m
    }),
    e.d(t, 'f', function () {
      return b
    }),
    e.d(t, 'a', function () {
      return y
    }),
    e.d(t, 'v', function () {
      return k
    }),
    e.d(t, 'r', function () {
      return v
    }),
    e.d(t, 's', function () {
      return g
    }),
    e.d(t, 'u', function () {
      return A
    }),
    e.d(t, 't', function () {
      return O
    }),
    e.d(t, 'n', function () {
      return x
    }),
    e.d(t, 'b', function () {
      return j
    }),
    e.d(t, 'g', function () {
      return I
    })
    var i = e('be3b')
    function a(n) {
      return Object(i['a'])({
        url: '/user/detail',
        method: 'post',
        params: { uid: n },
      })
    }
    function c() {
      return Object(i['a'])({ url: '/user/subcount', method: 'post' })
    }
    function o() {
      return Object(i['a'])({ url: '/user/level', method: 'post' })
    }
    function r() {
      return Object(i['a'])({
        url: '/user/update',
        method: 'post',
        params: {
          nickname: arguments[0],
          signature: arguments[1],
          gender: arguments[2],
          birthday: arguments[3],
          province: 44e4,
          city: 440300,
        },
      })
    }
    function u(n) {
      return Object(i['a'])({
        url: '/avatar/upload',
        method: 'post',
        timeout: 6e4,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: n,
      })
    }
    function s(n, t, e) {
      return Object(i['a'])({
        url: '/user/playlist',
        method: 'post',
        params: { uid: n, limit: t, offset: e },
      })
    }
    function l(n) {
      return Object(i['a'])({
        url: '/likelist',
        method: 'post',
        params: { uid: n },
      })
    }
    function d(n, t) {
      return Object(i['a'])({
        url: '/like',
        method: 'get',
        params: { id: n, like: t },
      })
    }
    function h(n, t) {
      return Object(i['a'])({
        url: '/follow',
        method: 'post',
        params: { id: n, t: t },
      })
    }
    function f(n, t, e, a) {
      return Object(i['a'])({
        url: '/playlist/update',
        method: 'post',
        params: { id: n, name: t, desc: e, tags: a },
      })
    }
    function p(n, t) {
      return Object(i['a'])({
        url: '/avatar/upload',
        method: 'post',
        timeout: 6e4,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: n,
        params: { id: t, param: '168y168' },
      })
    }
    function m(n, t, e) {
      return Object(i['a'])({
        url: '/user/follows',
        method: 'post',
        params: { uid: n, limit: t, offset: e },
      })
    }
    function b(n, t, e) {
      return Object(i['a'])({
        url: '/user/followeds',
        method: 'post',
        params: { uid: n, limit: t, offset: e },
      })
    }
    function y() {
      return Object(i['a'])({ url: '/artist/sublist', method: 'post' })
    }
    function k(n, t, e) {
      return Object(i['a'])({
        url: '/user/comment/history',
        method: 'post',
        params: { uid: n, time: e, limit: t },
      })
    }
    function v(n) {
      return Object(i['a'])({
        url: '/user/dj',
        method: 'post',
        params: { uid: n },
      })
    }
    function g(n, t, e) {
      return Object(i['a'])({
        url: '/user/event',
        method: 'post',
        params: { uid: n, lasttime: e, limit: t },
      })
    }
    function A(n, t, e) {
      return Object(i['a'])({
        url: '/event/forward',
        method: 'post',
        params: { uid: n, evId: t, forwards: e },
      })
    }
    function O(n) {
      return Object(i['a'])({
        url: '/event/del',
        method: 'post',
        params: { evId: n },
      })
    }
    function x(n, t, e) {
      return Object(i['a'])({
        url: '/share/resource',
        method: 'post',
        params: { id: n, type: t, msg: e },
      })
    }
    function j(n) {
      return Object(i['a'])({
        url: '/comment/event',
        method: 'post',
        params: { threadId: n },
      })
    }
    function I(n, t) {
      return Object(i['a'])({
        url: '/user/record',
        method: 'post',
        params: { uid: n, type: t },
      })
    }
  },
  8752: function (n, t, e) {},
  '8a0a': function (n, t, e) {},
  '8b32': function (n, t, e) {
    'use strict'
    e('8a0a')
  },
  '8c9c': function (n, t, e) {
    'use strict'
    e('c553')
  },
  a150: function (n, t, e) {
    'use strict'
    e('b1c9')
  },
  a4fd: function (n, t, e) {},
  b1c9: function (n, t, e) {},
  be3b: function (n, t, e) {
    'use strict'
    e.d(t, 'a', function () {
      return u
    })
    e('d3b7')
    var i = e('bc3a'),
      a = e.n(i),
      c = e('5c96'),
      o = { timeout: 3e4, withCredentials: !0 },
      r = a.a.create(o)
    function u(n) {
      return r(n)
    }
    r.interceptors.request.use(
      function (n) {
        return n
      },
      function (n) {
        return (
          Object(c['Notification'])({
            title: '错误',
            message: '请求错误',
            type: 'error',
            duration: 2e3,
            showClose: !1,
          }),
          Promise.reject(n)
        )
      },
    ),
    r.interceptors.response.use(
      function (n) {
        return n.data
      },
      function (n) {
        return (
          Object(c['Notification'])({
            title: '失败',
            message: '加载失败',
            type: 'error',
            duration: 2e3,
            showClose: !1,
          }),
          Promise.reject(n)
        )
      },
    )
  },
  c553: function (n, t, e) {},
  c9b1: function (n, t, e) {
    'use strict'
    e('43e5')
  },
  e095: function (n, t, e) {
    'use strict'
    e('a4fd')
  },
  e53a: function (n, t, e) {},
  e608: function (n, t, e) {},
  f1f7: function (n, t, e) {},
  f8b2: function (n, t) {
    n.exports =
      'data:image/gif;base64,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'
  },
})
//# sourceMappingURL=app.7ab97245.js.map
