;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-1742d514'],
  {
    '0cac': function (t, e, i) {
      'use strict'
      i.d(e, 'c', function () {
        return r
      }),
      i.d(e, 'b', function () {
        return o
      }),
      i.d(e, 'd', function () {
        return a
      }),
      i.d(e, 'g', function () {
        return u
      }),
      i.d(e, 'h', function () {
        return s
      }),
      i.d(e, 'f', function () {
        return c
      }),
      i.d(e, 'e', function () {
        return d
      }),
      i.d(e, 'a', function () {
        return f
      }),
      i.d(e, 'i', function () {
        return l
      })
      var n = i('be3b')
      function r(t) {
        return Object(n['a'])({
          url: 'artist/detail',
          method: 'post',
          params: { id: t },
        })
      }
      function o(t) {
        return Object(n['a'])({
          url: '/artist/desc',
          method: 'post',
          params: { id: t },
        })
      }
      function a(t, e, i, r, o) {
        return Object(n['a'])({
          url: '/artist/list',
          method: 'post',
          params: { limit: t, offset: e, initial: i, type: r, area: o },
        })
      }
      function u(t, e) {
        return Object(n['a'])({
          url: '/artist/sub',
          method: 'post',
          params: { id: t, t: e },
        })
      }
      function s(t) {
        return Object(n['a'])({
          url: '/artist/top/song',
          method: 'post',
          params: { id: t },
        })
      }
      function c(t, e, i, r) {
        return Object(n['a'])({
          url: '/artist/songs',
          method: 'post',
          params: { limit: i, offset: r, id: t, order: e },
        })
      }
      function d(t) {
        return Object(n['a'])({
          url: '/artist/mv',
          method: 'post',
          params: { id: t },
        })
      }
      function f(t, e, i) {
        return Object(n['a'])({
          url: '/artist/album',
          method: 'post',
          params: { id: t, limit: e, offset: i },
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
    '34b7': function (t, e, i) {
      'use strict'
      i.r(e)
      var n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'div',
            { staticClass: 'mv' },
            t._l(t.video, function (t, e) {
              return i('videocp', { key: e, attrs: { video: t } })
            }),
            1,
          )
        },
        r = [],
        o = i('0cac'),
        a = i('aadc'),
        u = {
          name: 'artistDetailmv',
          computed: {
            uid: function () {
              return this.$route.query.id
            },
          },
          data: function () {
            return { video: null }
          },
          components: { videocp: a['a'] },
          methods: {
            artistMvfn: function () {
              var t = this
              Object(o['e'])(this.uid)
                .then(function (e) {
                  t.video = e.mvs
                })
                .catch()
            },
          },
          mounted: function () {
            this.artistMvfn()
          },
        },
        s = u,
        c = (i('7e1e'), i('2877')),
        d = Object(c['a'])(s, n, r, !1, null, 'df29ffc4', null)
      e['default'] = d.exports
    },
    7229: function (t, e, i) {},
    '7afd': function (t, e, i) {},
    '7e1e': function (t, e, i) {
      'use strict'
      i('7afd')
    },
    aadc: function (t, e, i) {
      'use strict'
      var n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return t.video
            ? i('div', { staticClass: 'videoComponent' }, [
              i(
                'div',
                {
                  on: {
                    click: function (e) {
                      return t.videoItem(t.video)
                    },
                  },
                },
                [
                  t._m(0),
                  i('img', {
                    directives: [
                      {
                        name: 'lazy',
                        rawName: 'v-lazy',
                        value: t.video.coverUrl || t.video.imgurl,
                        expression: 'video.coverUrl || video.imgurl',
                      },
                    ],
                    attrs: { alt: 'video' },
                  }),
                ],
              ),
              i('p', [t._v(t._s(t.video.title || t.video.name))]),
              t.video.creator
                ? i(
                  'p',
                  { staticClass: 'nickname', on: { click: t.linkUser } },
                  [t._v(' ' + t._s(t.video.creator[0].userName) + ' ')],
                )
                : t._e(),
            ])
            : t._e()
        },
        r = [
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e
            return i('section', { staticClass: 'shade' }, [
              i('i', { staticClass: 'el-icon-video-play' }),
            ])
          },
        ],
        o = {
          name: 'videoComponent',
          props: { video: Object },
          data: function () {
            return {}
          },
          methods: {
            videoItem: function (t) {
              this.$router.push({
                path: '/videoDetail',
                query: { id: t.vid || t.id },
              })
            },
            linkUser: function () {
              1 == this.video.type
                ? this.$router.push({
                  path: '/user/home',
                  query: { id: this.video.creator[0].userId },
                })
                : 0 == this.video.type &&
                  this.$router.push({
                    path: '/artistDetail',
                    query: { id: this.video.creator[0].userId },
                  })
            },
          },
          mounted: function () {},
        },
        a = o,
        u = (i('d8e7'), i('2877')),
        s = Object(u['a'])(a, n, r, !1, null, '03ae8bc5', null)
      e['a'] = s.exports
    },
    d8e7: function (t, e, i) {
      'use strict'
      i('7229')
    },
  },
])
//# sourceMappingURL=chunk-1742d514.b74b3e9c.js.map
