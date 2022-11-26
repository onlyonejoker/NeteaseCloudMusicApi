;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-72b10b03'],
  {
    '1ef7': function (t, e, r) {
      'use strict'
      r.r(e)
      var s = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e
          return r(
            'div',
            { staticClass: 'search' },
            [
              r('topbar'),
              r('h2', [t._v('共找到' + t._s(t.num) + t._s(t.type))]),
              r(
                'nav',
                [
                  r(
                    'router-link',
                    {
                      attrs: {
                        'active-class': 'active',
                        to: {
                          path: 'searchSong',
                          query: { keywords: this.$route.query.keywords },
                        },
                      },
                    },
                    [t._v(' 单曲 ')],
                  ),
                  r(
                    'router-link',
                    {
                      attrs: {
                        'active-class': 'active',
                        to: {
                          path: 'searchArtist',
                          query: { keywords: this.$route.query.keywords },
                        },
                      },
                    },
                    [t._v(' 歌手 ')],
                  ),
                  r(
                    'router-link',
                    {
                      attrs: {
                        'active-class': 'active',
                        to: {
                          path: 'searchAlbum',
                          query: { keywords: this.$route.query.keywords },
                        },
                      },
                    },
                    [t._v(' 专辑 ')],
                  ),
                  r(
                    'router-link',
                    {
                      attrs: {
                        'active-class': 'active',
                        to: {
                          path: 'searchVideo',
                          query: { keywords: this.$route.query.keywords },
                        },
                      },
                    },
                    [t._v(' 视频 ')],
                  ),
                  r(
                    'router-link',
                    {
                      attrs: {
                        'active-class': 'active',
                        to: {
                          path: 'searchPlay',
                          query: { keywords: this.$route.query.keywords },
                        },
                      },
                    },
                    [t._v(' 歌单 ')],
                  ),
                  r(
                    'router-link',
                    {
                      attrs: {
                        'active-class': 'active',
                        to: {
                          path: 'searchLyric',
                          query: { keywords: this.$route.query.keywords },
                        },
                      },
                    },
                    [t._v(' 歌词 ')],
                  ),
                ],
                1,
              ),
              r('router-view'),
            ],
            1,
          )
        },
        a = [],
        o = r('5580'),
        u = {
          name: 'search',
          data: function () {
            return { num: 0, type: null }
          },
          components: { topbar: o['a'] },
          mounted: function () {
            var t = this
            this.$bus.$on('search', function (e, r) {
              ;(t.num = e), (t.type = r)
            })
          },
        },
        c = u,
        i = (r('c065'), r('2877')),
        n = Object(i['a'])(c, s, a, !1, null, '83a931a4', null)
      e['default'] = n.exports
    },
    c065: function (t, e, r) {
      'use strict'
      r('fbe4')
    },
    fbe4: function (t, e, r) {},
  },
])
//# sourceMappingURL=chunk-72b10b03.27f3b0fd.js.map
