;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-4fd41597'],
  {
    '0353': function (e, t, i) {
      'use strict'
      i('35ee')
    },
    '1e90': function (e, t, i) {
      'use strict'
      i('c638')
    },
    '24e8': function (e, t, i) {
      'use strict'
      var n = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t
          return e.video
            ? i('div', { staticClass: 'videoComponent' }, [
              i(
                'div',
                {
                  on: {
                    click: function (t) {
                      return e.videoItem(e.video)
                    },
                  },
                },
                [
                  e._m(0),
                  i('img', {
                    directives: [
                      {
                        name: 'lazy',
                        rawName: 'v-lazy',
                        value:
                            e.video.coverUrl ||
                            e.video.imgurl ||
                            e.video.cover ||
                            e.video.picUrl,
                        expression:
                            'video.coverUrl || video.imgurl || video.cover || video.picUrl',
                      },
                    ],
                    attrs: { alt: 'video' },
                  }),
                ],
              ),
              i('p', [e._v(e._s(e.video.title || e.video.name))]),
              e.video.creator
                ? i(
                  'p',
                  { staticClass: 'nickname', on: { click: e.linkUser } },
                  [
                    e._v(
                      ' ' +
                            e._s(
                              Array.isArray()
                                ? e.video.creator[0].userName
                                : e.video.creator.nickname,
                            ) +
                            ' ',
                    ),
                  ],
                )
                : e._e(),
              e.video.artistId
                ? i(
                  'p',
                  { staticClass: 'nickname', on: { click: e.linkArtist } },
                  [e._v(' ' + e._s(e.video.artistName) + ' ')],
                )
                : e._e(),
            ])
            : e._e()
        },
        r = [
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t
            return i('section', { staticClass: 'shade' }, [
              i('i', { staticClass: 'el-icon-video-play' }),
            ])
          },
        ],
        s = {
          name: 'videoList',
          props: { video: Object },
          data: function () {
            return {}
          },
          methods: {
            videoItem: function (e) {
              this.$router.push({
                path: '/videoDetail',
                query: { id: e.vid || e.id },
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
            linkArtist: function () {
              this.$router.push({
                path: '/artistDetail',
                query: { id: this.video.artistId },
              })
            },
          },
          mounted: function () {},
        },
        a = s,
        o = (i('0353'), i('2877')),
        c = Object(o['a'])(a, n, r, !1, null, '759f93d2', null)
      t['a'] = c.exports
    },
    3126: function (e, t, i) {},
    '35ee': function (e, t, i) {},
    '3f3f': function (e, t, i) {
      'use strict'
      i.r(t)
      var n = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t
          return i(
            'div',
            { staticClass: 'searchAlbum' },
            [
              i(
                'div',
                e._l(e.video, function (e, t) {
                  return i('videos', { key: t, attrs: { video: e } })
                }),
                1,
              ),
              i('page', { attrs: { more: e.more }, on: { page: e.pageFn } }),
            ],
            1,
          )
        },
        r = [],
        s = i('d3dc'),
        a = i('d07d'),
        o = i('24e8'),
        c = {
          name: 'searchAlbum',
          data: function () {
            return { page: 0, video: [], more: !0 }
          },
          components: { page: s['a'], Videos: o['a'] },
          methods: {
            searchAlbum: function () {
              var e = this
              Object(a['a'])(
                this.$route.query.keywords,
                30,
                30 * this.page,
                1014,
              )
                .then(function (t) {
                  ;(e.video = t.result.videos),
                  e.$bus.$emit('search', t.result.videoCount, '个视频')
                })
                .catch()
            },
            pageFn: function (e) {
              ;(this.page = e), this.searchAlbum()
            },
            linkAlbumDetail: function (e) {
              this.$router.push({ path: '/albumDetail', query: { id: e } })
            },
          },
          mounted: function () {
            this.searchAlbum()
          },
        },
        u = c,
        d = (i('508f'), i('2877')),
        l = Object(d['a'])(u, n, r, !1, null, '15323a2b', null)
      t['default'] = l.exports
    },
    '508f': function (e, t, i) {
      'use strict'
      i('3126')
    },
    c638: function (e, t, i) {},
    d07d: function (e, t, i) {
      'use strict'
      i.d(t, 'a', function () {
        return r
      }),
      i.d(t, 'b', function () {
        return s
      }),
      i.d(t, 'c', function () {
        return a
      }),
      i.d(t, 'd', function () {
        return o
      })
      var n = i('be3b')
      function r(e, t, i, r) {
        return Object(n['a'])({
          url: '/cloudsearch',
          params: { keywords: e, limit: t, offset: i, type: r },
        })
      }
      function s() {
        return Object(n['a'])({ url: '/search/default' })
      }
      function a() {
        return Object(n['a'])({ url: '/search/hot/detail' })
      }
      function o(e) {
        return Object(n['a'])({
          url: '/search/suggest',
          params: { keywords: e },
        })
      }
    },
    d3dc: function (e, t, i) {
      'use strict'
      var n = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t
          return i('div', { staticClass: 'block' }, [
            i('span', {
              staticClass: 'el-icon-arrow-left',
              on: { click: e.reducePage },
            }),
            i('span', [e._v(e._s(e.page))]),
            i('span', {
              ref: 'pageCCC',
              staticClass: 'el-icon-arrow-right',
              on: { click: e.addPage },
            }),
          ])
        },
        r = [],
        s = {
          data: function () {
            return { page: 0 }
          },
          props: { more: Boolean },
          watch: {
            more: function (e) {
              this.forbidClick(e)
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
            forbidClick: function (e) {
              this.$refs.pageCCC.style.pointerEvents = e ? null : 'none'
            },
          },
          mounted: function () {
            this.forbidClick(this.more)
          },
        },
        a = s,
        o = (i('1e90'), i('2877')),
        c = Object(o['a'])(a, n, r, !1, null, 'ab6472ac', null)
      t['a'] = c.exports
    },
  },
])
//# sourceMappingURL=chunk-4fd41597.bf21e635.js.map
