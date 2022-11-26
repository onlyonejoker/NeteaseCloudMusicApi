;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-c3a373f0'],
  {
    '0cac': function (t, i, r) {
      'use strict'
      r.d(i, 'c', function () {
        return s
      }),
      r.d(i, 'b', function () {
        return e
      }),
      r.d(i, 'd', function () {
        return a
      }),
      r.d(i, 'g', function () {
        return u
      }),
      r.d(i, 'h', function () {
        return c
      }),
      r.d(i, 'f', function () {
        return o
      }),
      r.d(i, 'e', function () {
        return m
      }),
      r.d(i, 'a', function () {
        return d
      }),
      r.d(i, 'i', function () {
        return l
      })
      var n = r('be3b')
      function s(t) {
        return Object(n['a'])({
          url: 'artist/detail',
          method: 'post',
          params: { id: t },
        })
      }
      function e(t) {
        return Object(n['a'])({
          url: '/artist/desc',
          method: 'post',
          params: { id: t },
        })
      }
      function a(t, i, r, s, e) {
        return Object(n['a'])({
          url: '/artist/list',
          method: 'post',
          params: { limit: t, offset: i, initial: r, type: s, area: e },
        })
      }
      function u(t, i) {
        return Object(n['a'])({
          url: '/artist/sub',
          method: 'post',
          params: { id: t, t: i },
        })
      }
      function c(t) {
        return Object(n['a'])({
          url: '/artist/top/song',
          method: 'post',
          params: { id: t },
        })
      }
      function o(t, i, r, s) {
        return Object(n['a'])({
          url: '/artist/songs',
          method: 'post',
          params: { limit: r, offset: s, id: t, order: i },
        })
      }
      function m(t) {
        return Object(n['a'])({
          url: '/artist/mv',
          method: 'post',
          params: { id: t },
        })
      }
      function d(t, i, r) {
        return Object(n['a'])({
          url: '/artist/album',
          method: 'post',
          params: { id: t, limit: i, offset: r },
        })
      }
      function l(t) {
        return Object(n['a'])({
          url: '/simi/artist',
          method: 'post',
          params: { id: t },
        })
      }
    },
    1061: function (t, i, r) {},
    '3b9c': function (t, i, r) {
      'use strict'
      r.r(i)
      var n = function () {
          var t = this,
            i = t.$createElement,
            r = t._self._c || i
          return r(
            'div',
            { staticClass: 'similarity' },
            t._l(t.simi, function (t, i) {
              return r('artistList', { key: i, attrs: { artist: t } })
            }),
            1,
          )
        },
        s = [],
        e = function () {
          var t = this,
            i = t.$createElement,
            r = t._self._c || i
          return t.artist
            ? r('div', { staticClass: 'artist-item' }, [
              r(
                'div',
                {
                  staticClass: 'artist-item-content',
                  on: {
                    click: function (i) {
                      return t.artistDetail(t.artist.id)
                    },
                  },
                },
                [
                  r('img', {
                    directives: [
                      {
                        name: 'lazy',
                        rawName: 'v-lazy',
                        value: t.artist.img1v1Url,
                        expression: 'artist.img1v1Url',
                      },
                    ],
                    attrs: { alt: 'img1v1Url' },
                  }),
                  r('p', [t._v(t._s(t.artist.name))]),
                ],
              ),
            ])
            : t._e()
        },
        a = [],
        u = {
          name: 'artistList',
          props: { artist: Object },
          methods: {
            artistDetail: function (t) {
              this.$router.push({ path: '/artistDetail', query: { id: t } })
            },
          },
        },
        c = u,
        o = (r('4bc8'), r('2877')),
        m = Object(o['a'])(c, e, a, !1, null, 'fb866cfa', null),
        d = m.exports,
        l = r('0cac'),
        f = {
          name: 'similarityRouter',
          components: { artistList: d },
          data: function () {
            return { simi: null }
          },
          computed: {
            uid: function () {
              return this.$route.query.id
            },
          },
          methods: {
            simiArtist: function () {
              var t = this
              Object(l['i'])(this.uid)
                .then(function (i) {
                  t.simi = i.artists
                })
                .catch()
            },
          },
          mounted: function () {
            this.simiArtist()
          },
        },
        p = f,
        b = (r('7787'), Object(o['a'])(p, n, s, !1, null, '175ab7dc', null))
      i['default'] = b.exports
    },
    '4bc8': function (t, i, r) {
      'use strict'
      r('1061')
    },
    7787: function (t, i, r) {
      'use strict'
      r('9527')
    },
    9527: function (t, i, r) {},
  },
])
//# sourceMappingURL=chunk-c3a373f0.8036f8ad.js.map
