;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-033a232c'],
  {
    '0cac': function (t, s, i) {
      'use strict'
      i.d(s, 'c', function () {
        return a
      }),
      i.d(s, 'b', function () {
        return e
      }),
      i.d(s, 'd', function () {
        return o
      }),
      i.d(s, 'g', function () {
        return r
      }),
      i.d(s, 'h', function () {
        return u
      }),
      i.d(s, 'f', function () {
        return c
      }),
      i.d(s, 'e', function () {
        return l
      }),
      i.d(s, 'a', function () {
        return m
      }),
      i.d(s, 'i', function () {
        return f
      })
      var n = i('be3b')
      function a(t) {
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
      function o(t, s, i, a, e) {
        return Object(n['a'])({
          url: '/artist/list',
          method: 'post',
          params: { limit: t, offset: s, initial: i, type: a, area: e },
        })
      }
      function r(t, s) {
        return Object(n['a'])({
          url: '/artist/sub',
          method: 'post',
          params: { id: t, t: s },
        })
      }
      function u(t) {
        return Object(n['a'])({
          url: '/artist/top/song',
          method: 'post',
          params: { id: t },
        })
      }
      function c(t, s, i, a) {
        return Object(n['a'])({
          url: '/artist/songs',
          method: 'post',
          params: { limit: i, offset: a, id: t, order: s },
        })
      }
      function l(t) {
        return Object(n['a'])({
          url: '/artist/mv',
          method: 'post',
          params: { id: t },
        })
      }
      function m(t, s, i) {
        return Object(n['a'])({
          url: '/artist/album',
          method: 'post',
          params: { id: t, limit: s, offset: i },
        })
      }
      function f(t) {
        return Object(n['a'])({
          url: '/simi/artist',
          method: 'post',
          params: { id: t },
        })
      }
    },
    1205: function (t, s, i) {},
    '1e90': function (t, s, i) {
      'use strict'
      i('c638')
    },
    '39ca': function (t, s, i) {
      'use strict'
      i('ffaa')
    },
    '4dd3': function (t, s, i) {
      'use strict'
      i.r(s)
      var n = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s
          return i('div', { staticClass: 'albumrouter' }, [
            i(
              'div',
              { staticClass: 'hot' },
              [
                i('h2', [t._v('全部歌曲')]),
                i('p', [
                  i(
                    'span',
                    {
                      class: { active: 'hot' == t.isActive },
                      on: { click: t.hotBtn },
                    },
                    [t._v(' 热门 ')],
                  ),
                  i(
                    'span',
                    {
                      class: { active: 'time' == t.isActive },
                      on: { click: t.timeBtn },
                    },
                    [t._v(' 时间 ')],
                  ),
                ]),
                t.top10
                  ? i(
                    'div',
                    { staticClass: 'top10' },
                    [
                      i('songItem', {
                        attrs: { song: t.songs10, uid: t.artistUid },
                      }),
                      i('p', { on: { click: t.allSong } }, [
                        i('i', { staticClass: 'el-icon-arrow-right' }),
                        i('span', [t._v(' 查看全部50首')]),
                      ]),
                    ],
                    1,
                  )
                  : i(
                    'div',
                    { staticClass: 'top10' },
                    [
                      i('songItem', {
                        attrs: { song: t.songs, uid: t.artistUid },
                      }),
                      i('p', { on: { click: t.allSong } }, [
                        i('i', { staticClass: 'el-icon-arrow-right' }),
                        i('span', [t._v('收起')]),
                      ]),
                    ],
                    1,
                  ),
                i('page', {
                  attrs: { more: t.songMore },
                  on: { page: t.songPage },
                }),
              ],
              1,
            ),
            i(
              'div',
              { staticClass: 'album' },
              [
                i('h2', [t._v('专辑')]),
                i(
                  'div',
                  t._l(t.album, function (t, s) {
                    return i('albumList', { key: s, attrs: { album: t } })
                  }),
                  1,
                ),
                i('page', {
                  attrs: { more: t.albumMore },
                  on: { page: t.albumPage },
                }),
              ],
              1,
            ),
          ])
        },
        a = [],
        e = i('4182'),
        o = i('d3dc'),
        r = i('a937'),
        u = i('0cac'),
        c = {
          name: 'albumrouter',
          components: { songItem: e['a'], albumList: r['a'], page: o['a'] },
          data: function () {
            return {
              songs10: [],
              songs: null,
              songMore: !1,
              albumMore: !1,
              order: 'hot',
              songOffset: 0,
              albumOffset: 0,
              isActive: 'hot',
              top10: !0,
              album: null,
            }
          },
          computed: {
            uid: function () {
              return this.$route.query.id
            },
            artistUid: function () {
              return this.$store.state.artistUid
            },
          },
          methods: {
            artistTop: function () {
              var t = this
              Object(u['h'])(this.uid)
                .then(function (s) {
                  ;(t.songMore = s.more), (t.songs = s.songs)
                  for (var i = 0; i < 10; i++) t.songs10.push(s.songs[i])
                })
                .catch()
            },
            artistSong: function () {
              var t = this
              Object(u['f'])(this.uid, this.order, 50, 50 * this.songOffset)
                .then(function (s) {
                  ;(t.songMore = s.more), (t.songs = s.songs)
                  for (var i = 0; i < 10; i++) t.songs10.push(s.songs[i])
                })
                .catch()
            },
            artistAlbum: function () {
              var t = this
              Object(u['a'])(this.uid, 50, 50 * this.albumOffset)
                .then(function (s) {
                  ;(t.albumMore = s.more), (t.album = s.hotAlbums)
                })
                .catch()
            },
            songPage: function (t) {
              ;(this.songOffset = t), this.artistSong()
            },
            albumPage: function (t) {
              ;(this.albumOffset = t), this.artistAlbum()
            },
            timeBtn: function () {
              ;(this.order = 'time'),
              (this.isActive = 'time'),
              this.artistSong()
            },
            hotBtn: function () {
              ;(this.order = 'hot'), (this.isActive = 'hot'), this.artistSong()
            },
            allSong: function () {
              this.top10 = !this.top10
            },
          },
          mounted: function () {
            this.artistTop(), this.artistAlbum()
          },
        },
        l = c,
        m = (i('8ac3'), i('2877')),
        f = Object(m['a'])(l, n, a, !1, null, '861d9bc8', null)
      s['default'] = f.exports
    },
    '8ac3': function (t, s, i) {
      'use strict'
      i('1205')
    },
    a937: function (t, s, i) {
      'use strict'
      var n = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s
          return t.album
            ? i('div', { staticClass: 'albumList' }, [
              i(
                'div',
                {
                  on: {
                    click: function (s) {
                      return t.albumList(t.album)
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
                        value: t.album.picUrl,
                        expression: 'album.picUrl',
                      },
                    ],
                    attrs: { alt: 'play' },
                  }),
                ],
              ),
              i('p', [t._v(t._s(t.album.name))]),
              t.album.company
                ? i('p', [t._v(t._s(t.album.company))])
                : t._e(),
              i(
                'p',
                { staticClass: 'nickname' },
                t._l(t.album.artists, function (s, n) {
                  return i(
                    'span',
                    {
                      key: n,
                      on: {
                        click: function (i) {
                          return t.linkArtists(s.id)
                        },
                      },
                    },
                    [t._v(' ' + t._s(s.name) + ' ')],
                  )
                }),
                0,
              ),
            ])
            : t._e()
        },
        a = [
          function () {
            var t = this,
              s = t.$createElement,
              i = t._self._c || s
            return i('section', { staticClass: 'shade' }, [
              i('i', { staticClass: 'el-icon-video-play' }),
            ])
          },
        ],
        e = {
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
        o = e,
        r = (i('39ca'), i('2877')),
        u = Object(r['a'])(o, n, a, !1, null, '795838a2', null)
      s['a'] = u.exports
    },
    c638: function (t, s, i) {},
    d3dc: function (t, s, i) {
      'use strict'
      var n = function () {
          var t = this,
            s = t.$createElement,
            i = t._self._c || s
          return i('div', { staticClass: 'block' }, [
            i('span', {
              staticClass: 'el-icon-arrow-left',
              on: { click: t.reducePage },
            }),
            i('span', [t._v(t._s(t.page))]),
            i('span', {
              ref: 'pageCCC',
              staticClass: 'el-icon-arrow-right',
              on: { click: t.addPage },
            }),
          ])
        },
        a = [],
        e = {
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
        o = e,
        r = (i('1e90'), i('2877')),
        u = Object(r['a'])(o, n, a, !1, null, 'ab6472ac', null)
      s['a'] = u.exports
    },
    ffaa: function (t, s, i) {},
  },
])
//# sourceMappingURL=chunk-033a232c.eea7e4e2.js.map
