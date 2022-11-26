;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-35034d03'],
  {
    '0e01': function (t, e, i) {
      'use strict'
      i('60d6')
    },
    '60d6': function (t, e, i) {},
    '6b67': function (t, e, i) {
      'use strict'
      i.r(e)
      var o = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i('div', { staticClass: 'mvSublist' }, [
            i(
              'div',
              { staticClass: 'video' },
              [
                i('h2', [t._v('MV')]),
                t._l(t.mvList, function (t, e) {
                  return i('videoComponent', { key: e, attrs: { video: t } })
                }),
              ],
              2,
            ),
            i(
              'div',
              { staticClass: 'video' },
              [
                i('h2', [t._v('视频')]),
                t._l(t.videoList, function (t, e) {
                  return i('videoComponent', { key: e, attrs: { video: t } })
                }),
              ],
              2,
            ),
          ])
        },
        n = [],
        s = (i('159b'), i('7eb5')),
        r = i('aadc'),
        u = {
          name: 'mvSublist',
          components: { videoComponent: r['a'] },
          data: function () {
            return { mvList: [], videoList: [], more: !1 }
          },
          methods: {
            mvSublist: function () {
              var t = this
              Object(s['b'])()
                .then(function (e) {
                  e.data.forEach(function (e) {
                    1 == e.type
                      ? t.videoList.push(e)
                      : 0 == e.type && t.mvList.push(e)
                  }),
                  (t.more = e.more)
                })
                .catch()
            },
          },
          mounted: function () {
            this.mvSublist()
          },
        },
        a = u,
        c = (i('0e01'), i('2877')),
        d = Object(c['a'])(a, o, n, !1, null, '351fb054', null)
      e['default'] = d.exports
    },
    7229: function (t, e, i) {},
    '7eb5': function (t, e, i) {
      'use strict'
      i.d(e, 'b', function () {
        return n
      }),
      i.d(e, 'a', function () {
        return s
      })
      var o = i('be3b')
      function n() {
        return Object(o['a'])({ url: '/mv/sublist', method: 'post' })
      }
      function s(t, e) {
        return Object(o['a'])({
          url: '/album/sublist',
          method: 'post',
          params: { limit: t, offset: e },
        })
      }
    },
    aadc: function (t, e, i) {
      'use strict'
      var o = function () {
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
        n = [
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e
            return i('section', { staticClass: 'shade' }, [
              i('i', { staticClass: 'el-icon-video-play' }),
            ])
          },
        ],
        s = {
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
        r = s,
        u = (i('d8e7'), i('2877')),
        a = Object(u['a'])(r, o, n, !1, null, '03ae8bc5', null)
      e['a'] = a.exports
    },
    d8e7: function (t, e, i) {
      'use strict'
      i('7229')
    },
  },
])
//# sourceMappingURL=chunk-35034d03.f71a211a.js.map
