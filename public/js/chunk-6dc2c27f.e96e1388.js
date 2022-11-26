;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-6dc2c27f'],
  {
    '0cac': function (t, n, i) {
      'use strict'
      i.d(n, 'c', function () {
        return e
      }),
      i.d(n, 'b', function () {
        return u
      }),
      i.d(n, 'd', function () {
        return o
      }),
      i.d(n, 'g', function () {
        return s
      }),
      i.d(n, 'h', function () {
        return c
      }),
      i.d(n, 'f', function () {
        return a
      }),
      i.d(n, 'e', function () {
        return f
      }),
      i.d(n, 'a', function () {
        return d
      }),
      i.d(n, 'i', function () {
        return l
      })
      var r = i('be3b')
      function e(t) {
        return Object(r['a'])({
          url: 'artist/detail',
          method: 'post',
          params: { id: t },
        })
      }
      function u(t) {
        return Object(r['a'])({
          url: '/artist/desc',
          method: 'post',
          params: { id: t },
        })
      }
      function o(t, n, i, e, u) {
        return Object(r['a'])({
          url: '/artist/list',
          method: 'post',
          params: { limit: t, offset: n, initial: i, type: e, area: u },
        })
      }
      function s(t, n) {
        return Object(r['a'])({
          url: '/artist/sub',
          method: 'post',
          params: { id: t, t: n },
        })
      }
      function c(t) {
        return Object(r['a'])({
          url: '/artist/top/song',
          method: 'post',
          params: { id: t },
        })
      }
      function a(t, n, i, e) {
        return Object(r['a'])({
          url: '/artist/songs',
          method: 'post',
          params: { limit: i, offset: e, id: t, order: n },
        })
      }
      function f(t) {
        return Object(r['a'])({
          url: '/artist/mv',
          method: 'post',
          params: { id: t },
        })
      }
      function d(t, n, i) {
        return Object(r['a'])({
          url: '/artist/album',
          method: 'post',
          params: { id: t, limit: n, offset: i },
        })
      }
      function l(t) {
        return Object(r['a'])({
          url: '/simi/artist',
          method: 'post',
          params: { id: t },
        })
      }
    },
    '32e3': function (t, n, i) {
      'use strict'
      i('e1d7')
    },
    '963b': function (t, n, i) {
      'use strict'
      i.r(n)
      var r = function () {
          var t = this,
            n = t.$createElement,
            i = t._self._c || n
          return t.info
            ? i(
              'div',
              { staticClass: 'info' },
              [
                i('h4', [t._v(t._s(this.$route.query.name) + '的介绍')]),
                i('p', { staticClass: 'introduce' }, [
                  t._v(t._s(t.info.briefDesc)),
                ]),
                t._l(t.info.introduction, function (n, r) {
                  return i(
                    'div',
                    { key: r, staticClass: 'introduction' },
                    [
                      i('h4', [t._v(t._s(n.ti))]),
                      t._l(n.txt.split('\n'), function (n, r) {
                        return i('p', { key: r }, [t._v(' ' + t._s(n) + ' ')])
                      }),
                    ],
                    2,
                  )
                }),
              ],
              2,
            )
            : t._e()
        },
        e = [],
        u = i('0cac'),
        o = {
          name: 'artistInfoRouter',
          data: function () {
            return { info: null }
          },
          computed: {
            uid: function () {
              return this.$route.query.id
            },
          },
          methods: {
            infoFn: function () {
              var t = this
              Object(u['b'])(this.uid)
                .then(function (n) {
                  t.info = n
                })
                .catch()
            },
          },
          mounted: function () {
            this.infoFn()
          },
        },
        s = o,
        c = (i('32e3'), i('2877')),
        a = Object(c['a'])(s, r, e, !1, null, '9786c714', null)
      n['default'] = a.exports
    },
    e1d7: function (t, n, i) {},
  },
])
//# sourceMappingURL=chunk-6dc2c27f.e96e1388.js.map
