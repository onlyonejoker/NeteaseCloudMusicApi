;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-1f59a5c2'],
  {
    '1e90': function (t, a, e) {
      'use strict'
      e('c638')
    },
    2741: function (t, a, e) {
      'use strict'
      e('2931')
    },
    2931: function (t, a, e) {},
    '39ca': function (t, a, e) {
      'use strict'
      e('ffaa')
    },
    '43e3': function (t, a, e) {
      'use strict'
      e.r(a)
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a
          return e(
            'div',
            { staticClass: 'albunCollect' },
            [
              t._l(t.albumList, function (t, a) {
                return e('albumList', { key: a, attrs: { album: t } })
              }),
              e('page', { attrs: { more: t.more }, on: { page: t.pages } }),
            ],
            2,
          )
        },
        i = [],
        s = e('7eb5'),
        u = e('a937'),
        c = e('d3dc'),
        o = {
          name: 'albunCollect',
          data: function () {
            return { albumList: [], page: 0, more: !1 }
          },
          computed: {
            uid: function () {
              return this.$store.state.login.account.id || null
            },
          },
          components: { albumList: u['a'], page: c['a'] },
          watch: {
            page: function () {
              this.songLists()
            },
          },
          methods: {
            pages: function (t) {
              this.page = t
            },
            albumSublist: function () {
              var t = this
              Object(s['a'])(50, 50 * this.page)
                .then(function (a) {
                  console.log(a), (t.albumList = a.data), (t.more = a.hasMore)
                })
                .catch()
            },
          },
          mounted: function () {
            this.albumSublist()
          },
        },
        r = o,
        l = (e('2741'), e('2877')),
        m = Object(l['a'])(r, n, i, !1, null, 'b982c3aa', null)
      a['default'] = m.exports
    },
    '7eb5': function (t, a, e) {
      'use strict'
      e.d(a, 'b', function () {
        return i
      }),
      e.d(a, 'a', function () {
        return s
      })
      var n = e('be3b')
      function i() {
        return Object(n['a'])({ url: '/mv/sublist', method: 'post' })
      }
      function s(t, a) {
        return Object(n['a'])({
          url: '/album/sublist',
          method: 'post',
          params: { limit: t, offset: a },
        })
      }
    },
    a937: function (t, a, e) {
      'use strict'
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a
          return t.album
            ? e('div', { staticClass: 'albumList' }, [
              e(
                'div',
                {
                  on: {
                    click: function (a) {
                      return t.albumList(t.album)
                    },
                  },
                },
                [
                  t._m(0),
                  e('img', {
                    directives: [
                      {
                        name: 'lazy',
                        rawName: 'v-lazy',
                        value: t.album.picUrl,
                        expression: 'album.picUrl',
                      },
                    ],
                    attrs: { alt: 'play' },
                  }),
                ],
              ),
              e('p', [t._v(t._s(t.album.name))]),
              t.album.company
                ? e('p', [t._v(t._s(t.album.company))])
                : t._e(),
              e(
                'p',
                { staticClass: 'nickname' },
                t._l(t.album.artists, function (a, n) {
                  return e(
                    'span',
                    {
                      key: n,
                      on: {
                        click: function (e) {
                          return t.linkArtists(a.id)
                        },
                      },
                    },
                    [t._v(' ' + t._s(a.name) + ' ')],
                  )
                }),
                0,
              ),
            ])
            : t._e()
        },
        i = [
          function () {
            var t = this,
              a = t.$createElement,
              e = t._self._c || a
            return e('section', { staticClass: 'shade' }, [
              e('i', { staticClass: 'el-icon-video-play' }),
            ])
          },
        ],
        s = {
          name: 'albumList',
          props: { album: Object },
          methods: {
            albumList: function (t) {
              this.$router.push({ path: '/albumDetail', query: { id: t.id } })
            },
            linkArtists: function (t) {
              this.$router.push({ path: '/artistDetail', query: { id: t } }),
              this.$router.go(0)
            },
          },
          mounted: function () {},
        },
        u = s,
        c = (e('39ca'), e('2877')),
        o = Object(c['a'])(u, n, i, !1, null, '795838a2', null)
      a['a'] = o.exports
    },
    c638: function (t, a, e) {},
    d3dc: function (t, a, e) {
      'use strict'
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a
          return e('div', { staticClass: 'block' }, [
            e('span', {
              staticClass: 'el-icon-arrow-left',
              on: { click: t.reducePage },
            }),
            e('span', [t._v(t._s(t.page))]),
            e('span', {
              ref: 'pageCCC',
              staticClass: 'el-icon-arrow-right',
              on: { click: t.addPage },
            }),
          ])
        },
        i = [],
        s = {
          data: function () {
            return { page: 0 }
          },
          props: { more: Boolean },
          watch: {
            more: function (t) {
              this.forbidClick(t)
            },
          },
          methods: {
            addPage: function () {
              this.page++, this.$emit('page', this.page)
            },
            reducePage: function () {
              this.page--,
              this.page <= 0 ? (this.page = 0) : this.page,
              this.$emit('page', this.page)
            },
            forbidClick: function (t) {
              this.$refs.pageCCC.style.pointerEvents = t ? null : 'none'
            },
          },
          mounted: function () {
            this.forbidClick(this.more)
          },
        },
        u = s,
        c = (e('1e90'), e('2877')),
        o = Object(c['a'])(u, n, i, !1, null, 'ab6472ac', null)
      a['a'] = o.exports
    },
    ffaa: function (t, a, e) {},
  },
])
//# sourceMappingURL=chunk-1f59a5c2.09fd5278.js.map
