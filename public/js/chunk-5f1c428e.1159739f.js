;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-5f1c428e'],
  {
    '0353': function (t, e, n) {
      'use strict'
      n('35ee')
    },
    '24e8': function (t, e, n) {
      'use strict'
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return t.video
            ? n('div', { staticClass: 'videoComponent' }, [
              n(
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
                  n('img', {
                    directives: [
                      {
                        name: 'lazy',
                        rawName: 'v-lazy',
                        value:
                            t.video.coverUrl ||
                            t.video.imgurl ||
                            t.video.cover ||
                            t.video.picUrl,
                        expression:
                            'video.coverUrl || video.imgurl || video.cover || video.picUrl',
                      },
                    ],
                    attrs: { alt: 'video' },
                  }),
                ],
              ),
              n('p', [t._v(t._s(t.video.title || t.video.name))]),
              t.video.creator
                ? n(
                  'p',
                  { staticClass: 'nickname', on: { click: t.linkUser } },
                  [
                    t._v(
                      ' ' +
                            t._s(
                              Array.isArray()
                                ? t.video.creator[0].userName
                                : t.video.creator.nickname,
                            ) +
                            ' ',
                    ),
                  ],
                )
                : t._e(),
              t.video.artistId
                ? n(
                  'p',
                  { staticClass: 'nickname', on: { click: t.linkArtist } },
                  [t._v(' ' + t._s(t.video.artistName) + ' ')],
                )
                : t._e(),
            ])
            : t._e()
        },
        a = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('section', { staticClass: 'shade' }, [
              n('i', { staticClass: 'el-icon-video-play' }),
            ])
          },
        ],
        r = {
          name: 'videoList',
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
            linkArtist: function () {
              this.$router.push({
                path: '/artistDetail',
                query: { id: this.video.artistId },
              })
            },
          },
          mounted: function () {},
        },
        o = r,
        s = (n('0353'), n('2877')),
        c = Object(s['a'])(o, i, a, !1, null, '759f93d2', null)
      e['a'] = c.exports
    },
    '35ee': function (t, e, n) {},
    '472f': function (t, e, n) {
      'use strict'
      n('875d')
    },
    5899: function (t, e) {
      t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff'
    },
    '58a8': function (t, e, n) {
      var i = n('1d80'),
        a = n('577e'),
        r = n('5899'),
        o = '[' + r + ']',
        s = RegExp('^' + o + o + '*'),
        c = RegExp(o + o + '*$'),
        l = function (t) {
          return function (e) {
            var n = a(i(e))
            return (
              1 & t && (n = n.replace(s, '')),
              2 & t && (n = n.replace(c, '')),
              n
            )
          }
        }
      t.exports = { start: l(1), end: l(2), trim: l(3) }
    },
    '77b2': function (t, e, n) {},
    '7abd': function (t, e, n) {
      'use strict'
      n('bb23')
    },
    8157: function (t, e, n) {
      'use strict'
      n('c33b')
    },
    '875d': function (t, e, n) {},
    '984f': function (t, e, n) {
      'use strict'
      n('e0a8')
    },
    a15b: function (t, e, n) {
      'use strict'
      var i = n('23e7'),
        a = n('44ad'),
        r = n('fc6a'),
        o = n('a640'),
        s = [].join,
        c = a != Object,
        l = o('join', ',')
      i(
        { target: 'Array', proto: !0, forced: c || !l },
        {
          join: function (t) {
            return s.call(r(this), void 0 === t ? ',' : t)
          },
        },
      )
    },
    a95e: function (t, e, n) {
      'use strict'
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'play' }, [
            n(
              'div',
              {
                on: {
                  click: function (e) {
                    return t.djDetail(t.dj.id)
                  },
                },
              },
              [
                t._m(0),
                n('img', {
                  directives: [
                    {
                      name: 'lazy',
                      rawName: 'v-lazy',
                      value: t.dj.coverUrl || t.dj.picUrl,
                      expression: 'dj.coverUrl || dj.picUrl',
                    },
                  ],
                  attrs: { alt: 'play' },
                }),
              ],
            ),
            n('p', [t._v(t._s(t.dj.name))]),
            t.dj.dj
              ? n('p', { staticClass: 'nickname', on: { click: t.linkUser } }, [
                t._v(' ' + t._s(t.dj.dj.nickname) + ' '),
              ])
              : t._e(),
          ])
        },
        a = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('section', { staticClass: 'shade' }, [
              n('i', { staticClass: 'el-icon-video-play' }),
            ])
          },
        ],
        r = n('2881'),
        o = {
          name: 'djList',
          props: { dj: Object },
          data: function () {
            return {}
          },
          methods: {
            djDetail: function (t) {
              var e = this
              Object(r['a'])(t)
                .then(function (t) {
                  console.log(t),
                  null == t.data.url
                    ? alert('节目不可用')
                    : e.$store.commit('musicInfo', t.data)
                })
                .catch()
            },
            linkUser: function () {
              this.$router.push({
                path: '/user/home',
                query: { id: this.dj.dj.userId },
              })
            },
          },
          mounted: function () {},
        },
        s = o,
        c = (n('7abd'), n('2877')),
        l = Object(c['a'])(s, i, a, !1, null, 'd1c75532', null)
      e['a'] = l.exports
    },
    a9a3: function (t, e, n) {
      'use strict'
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'play' }, [
            t.checked
              ? n('i', {
                staticClass: 'el-icon-delete',
                on: { click: t.delPlayList },
              })
              : t._e(),
            n(
              'div',
              {
                on: {
                  click: function (e) {
                    return t.PlayItem(t.play)
                  },
                },
              },
              [
                t._m(0),
                n('img', {
                  directives: [
                    {
                      name: 'lazy',
                      rawName: 'v-lazy',
                      value: t.play.coverImgUrl || t.play.picUrl,
                      expression: 'play.coverImgUrl || play.picUrl',
                    },
                  ],
                  attrs: { alt: 'play' },
                }),
              ],
            ),
            n('p', [t._v(t._s(t.play.name))]),
            t.play.creator
              ? n('p', { staticClass: 'nickname', on: { click: t.linkUser } }, [
                t._v(' ' + t._s(t.play.creator.nickname) + ' '),
              ])
              : t._e(),
          ])
        },
        a = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('section', { staticClass: 'shade' }, [
              n('i', { staticClass: 'el-icon-video-play' }),
            ])
          },
        ],
        r = n('7a49'),
        o = {
          name: 'playItem',
          props: { play: [Object, Array] },
          data: function () {
            return { checked: !1 }
          },
          methods: {
            PlayItem: function (t) {
              this.$router.push({ path: '/play', query: { id: t.id } })
            },
            delPlayList: function () {
              Object(r['d'])(this.play.id)
                .then(function () {})
                .catch()
            },
            linkUser: function () {
              this.$router.push({
                path: '/user/home',
                query: { id: this.play.creator.userId },
              })
            },
          },
          mounted: function () {
            var t = this
            this.$bus.$on('delPlayList', function (e) {
              t.checked = e
            })
          },
        },
        s = o,
        c = (n('8157'), n('2877')),
        l = Object(c['a'])(s, i, a, !1, null, 'ab27f380', null)
      e['a'] = l.exports
    },
    a9e3: function (t, e, n) {
      'use strict'
      var i = n('83ab'),
        a = n('da84'),
        r = n('94ca'),
        o = n('6eeb'),
        s = n('5135'),
        c = n('c6b6'),
        l = n('7156'),
        u = n('d9b5'),
        d = n('c04e'),
        p = n('d039'),
        f = n('7c73'),
        v = n('241c').f,
        h = n('06cf').f,
        m = n('9bf2').f,
        g = n('58a8').trim,
        y = 'Number',
        _ = a[y],
        b = _.prototype,
        j = c(f(b)) == y,
        k = function (t) {
          if (u(t)) throw TypeError('Cannot convert a Symbol value to a number')
          var e,
            n,
            i,
            a,
            r,
            o,
            s,
            c,
            l = d(t, 'number')
          if ('string' == typeof l && l.length > 2)
            if (((l = g(l)), (e = l.charCodeAt(0)), 43 === e || 45 === e)) {
              if (((n = l.charCodeAt(2)), 88 === n || 120 === n)) return NaN
            } else if (48 === e) {
              switch (l.charCodeAt(1)) {
                case 66:
                case 98:
                  ;(i = 2), (a = 49)
                  break
                case 79:
                case 111:
                  ;(i = 8), (a = 55)
                  break
                default:
                  return +l
              }
              for (r = l.slice(2), o = r.length, s = 0; s < o; s++)
                if (((c = r.charCodeAt(s)), c < 48 || c > a)) return NaN
              return parseInt(r, i)
            }
          return +l
        }
      if (r(y, !_(' 0o1') || !_('0b1') || _('+0x1'))) {
        for (
          var w,
            C = function (t) {
              var e = arguments.length < 1 ? 0 : t,
                n = this
              return n instanceof C &&
                (j
                  ? p(function () {
                    b.valueOf.call(n)
                  })
                  : c(n) != y)
                ? l(new _(k(e)), n, C)
                : k(e)
            },
            O = i
              ? v(_)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
                ',',
              ),
            I = 0;
          O.length > I;
          I++
        )
          s(_, (w = O[I])) && !s(C, w) && m(C, w, h(_, w))
          ;(C.prototype = b), (b.constructor = C), o(a, y, C)
      }
    },
    b3d7: function (t, e, n) {
      'use strict'
      n.r(e)
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'home' },
            [
              n('topbar'),
              t.banner
                ? n(
                  'div',
                  { staticClass: 'banner' },
                  [
                    n('h1', [t._v('精彩推荐')]),
                    n(
                      'el-carousel',
                      {
                        attrs: {
                          interval: 4e3,
                          type: 'card',
                          height: '200px',
                        },
                      },
                      t._l(t.banner, function (e, i) {
                        return n(
                          'el-carousel-item',
                          {
                            key: 'banner' + i,
                            nativeOn: {
                              click: function (n) {
                                return t.link(e.encodeId, e.targetType, e.url)
                              },
                            },
                          },
                          [
                            n('div', { staticClass: 'home-banner' }, [
                              n('img', {
                                attrs: { src: e.imageUrl, alt: 'imageUrl' },
                              }),
                              n(
                                'div',
                                {
                                  staticClass: 'home-banner-title',
                                  style: { backgroundColor: e.titleColor },
                                },
                                [t._v(' ' + t._s(e.typeTitle) + ' ')],
                              ),
                            ]),
                          ],
                        )
                      }),
                      1,
                    ),
                  ],
                  1,
                )
                : t._e(),
              t.tjPlay
                ? n('div', { staticClass: 'tjPlay' }, [
                  n('h1', [t._v('推荐歌单')]),
                  n(
                    'div',
                    t._l(t.tjPlay, function (t, e) {
                      return n('playItem', {
                        key: 'tjplay' + e,
                        attrs: { play: t },
                      })
                    }),
                    1,
                  ),
                ])
                : t._e(),
              t.newSong
                ? n('div', { staticClass: 'newSong' }, [
                  n('h1', [t._v('新歌首发')]),
                  n(
                    'div',
                    t._l(t.newSong, function (t, e) {
                      return n('song-list', {
                        key: 'newSong' + e,
                        attrs: { newSong: t, index: e },
                      })
                    }),
                    1,
                  ),
                ])
                : t._e(),
              t.programs
                ? n('div', { staticClass: 'programs' }, [
                  n('h1', [t._v('推荐节目')]),
                  n(
                    'div',
                    t._l(t.programs, function (t, e) {
                      return n('dj-list', {
                        key: 'programs' + e,
                        attrs: { dj: t },
                      })
                    }),
                    1,
                  ),
                ])
                : t._e(),
              t.onlyOne
                ? n('div', { staticClass: 'onlyOne' }, [
                  n('h1', [t._v('独家放送')]),
                  n(
                    'div',
                    t._l(t.onlyOne, function (t, e) {
                      return n('videos', { key: e, attrs: { video: t } })
                    }),
                    1,
                  ),
                ])
                : t._e(),
              t.programs
                ? n('div', { staticClass: 'top' }, [
                  n('h1', [t._v('排行榜')]),
                  n(
                    'div',
                    t._l(t.top, function (t, e) {
                      return n('home-top', {
                        key: 'top' + e,
                        attrs: { index: e, top: t },
                      })
                    }),
                    1,
                  ),
                ])
                : t._e(),
            ],
            1,
          )
        },
        a = [],
        r = (n('d3b7'), n('3ca3'), n('ddb0'), n('a434'), n('5580')),
        o = n('fa27'),
        s = n('a9a3'),
        c = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return t.index < 9
            ? n('div', { staticClass: 'newSongList', on: { click: t.play } }, [
              n('div', { staticClass: 'newSongList-img' }, [
                n('i', { staticClass: 'el-icon-video-play' }),
                n('img', {
                  directives: [
                    {
                      name: 'lazy',
                      rawName: 'v-lazy',
                      value: t.newSong.picUrl,
                      expression: 'newSong.picUrl',
                    },
                  ],
                  attrs: { alt: '' },
                }),
              ]),
              n('div', { staticClass: 'newSongList-info' }, [
                n('h4', [t._v(t._s(t.newSong.name))]),
                n(
                  'p',
                  t._l(t.newSong.song.artists, function (e, i) {
                    return n(
                      'span',
                      {
                        key: i,
                        on: {
                          click: function (n) {
                            return t.linkArtist(e.id)
                          },
                        },
                      },
                      [t._v(' ' + t._s(e.name) + ' ')],
                    )
                  }),
                  0,
                ),
              ]),
              n('div', { staticClass: 'newSongList-time' }, [
                t._v(
                  ' ' +
                      t._s(
                        Math.floor(t.newSong.song.duration / 6e4) > 10
                          ? Math.floor(t.newSong.song.duration / 6e4)
                          : '0' + Math.floor(t.newSong.song.duration / 6e4),
                      ) +
                      ': ' +
                      t._s(
                        Math.floor(
                          Math.floor(t.newSong.song.duration % 6e4) / 1e3,
                        ) > 10
                          ? Math.floor(
                            Math.floor(t.newSong.song.duration % 6e4) / 1e3,
                          )
                          : '0' +
                              Math.floor(
                                Math.floor(t.newSong.song.duration % 6e4) / 1e3,
                              ),
                      ) +
                      ' ',
                ),
              ]),
            ])
            : t._e()
        },
        l = [],
        u =
          (n('a9e3'),
          n('b0c0'),
          {
            name: 'songList',
            props: { newSong: Object, index: Number },
            methods: {
              play: function () {
                var t = {
                  al: this.newSong.song.album,
                  alia: this.newSong.song.alias,
                  ar: this.newSong.song.artists,
                  id: this.newSong.song.id,
                  dt: this.newSong.song.duration,
                  name: this.newSong.song.name,
                }
                this.$store.commit('musicInfo', t)
              },
              linkArtist: function (t) {
                this.$router.push({ path: '/artistDetail', query: { id: t } })
              },
            },
          }),
        d = u,
        p = (n('472f'), n('2877')),
        f = Object(p['a'])(d, c, l, !1, null, '8adac96c', null),
        v = f.exports,
        h = n('a95e'),
        m = n('24e8'),
        g = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return t.index < 5
            ? n(
              'div',
              {
                staticClass: 'homeTop',
                style: { backgroundColor: t.color[t.index] },
                on: { click: t.play },
              },
              [
                n('p', [t._v('巅峰榜')]),
                n('h2', [t._v(t._s(t.top.name))]),
                n('div', { staticClass: 'split' }),
                n('i', { staticClass: 'el-icon-video-play' }),
                n(
                  'div',
                  { staticClass: 'song' },
                  t._l(t.song, function (e, i) {
                    return n('div', { key: 'topSong' + i }, [
                      n('p', [
                        n('span', [t._v('NO:' + t._s(i + 1))]),
                        n('span', [t._v(t._s(e.name))]),
                      ]),
                      n('p', [t._v(t._s(e.ar[0].name))]),
                    ])
                  }),
                  0,
                ),
              ],
            )
            : t._e()
        },
        y = [],
        _ = (n('d81d'), n('a15b'), n('7a49')),
        b = {
          name: 'homeTop',
          props: { top: Object, index: Number },
          data: function () {
            return {
              color: [
                'PaleVioletRed',
                'PaleVioletRed',
                'CornflowerBlue',
                'LightSkyBlue',
                'LightSkyBlue',
              ],
              song: null,
              ids: null,
            }
          },
          methods: {
            playDetail: function () {
              var t = this
              Object(_['e'])(this.top.id)
                .then(function (e) {
                  ;(t.ids = e.playlist.trackIds.map(function (t) {
                    return t.id
                  })),
                  e.playlist.tracks.splice(5),
                  (t.song = e.playlist.tracks)
                })
                .catch()
            },
            play: function () {
              var t = this
              Object(_['m'])(this.ids.join(','))
                .then(function (e) {
                  console.log(e), t.$store.commit('musicInfo', e.songs)
                })
                .catch()
            },
          },
          mounted: function () {
            this.index < 5 && this.playDetail()
          },
        },
        j = b,
        k = (n('984f'), Object(p['a'])(j, g, y, !1, null, '1e7d595f', null)),
        w = k.exports,
        C = {
          name: 'Home',
          components: {
            topbar: r['a'],
            playItem: s['a'],
            songList: v,
            DjList: h['a'],
            Videos: m['a'],
            HomeTop: w,
          },
          data: function () {
            return {
              banner: null,
              tjPlay: null,
              newSong: null,
              programs: null,
              onlyOne: null,
              top: null,
            }
          },
          methods: {
            requset: function () {
              var t = this
              Promise.all([
                Object(o['a'])(),
                Object(o['b'])(),
                Object(o['d'])(),
                Object(o['e'])(),
                Object(o['c'])(),
                Object(o['g'])(),
                Object(o['f'])(),
                Object(o['h'])(),
              ])
                .then(function (e) {
                  console.log(e),
                  (t.banner = e[0].banners),
                  (t.tjPlay = e[1].result),
                  (t.newSong = e[3].result),
                  (t.programs = e[5].programs),
                  (t.onlyOne = e[6].result),
                  e[7].list.splice(5),
                  (t.top = e[7].list)
                })
                .catch()
            },
            link: function (t, e, n) {
              console.log(t, e, n),
              3e3 == e
                ? (console.log(1), window.open(n))
                : 10 == e
                  ? this.$router.push({
                    path: '/albumDetail',
                    query: { id: t },
                  })
                  : 1 == e &&
                    this.$router.push({ path: '/songDetail', query: { id: t } })
            },
          },
          created: function () {
            this.requset()
          },
        },
        O = C,
        I = (n('b88c'), Object(p['a'])(O, i, a, !1, null, '1d130aa2', null))
      e['default'] = I.exports
    },
    b88c: function (t, e, n) {
      'use strict'
      n('77b2')
    },
    bb23: function (t, e, n) {},
    c33b: function (t, e, n) {},
    e0a8: function (t, e, n) {},
    fa27: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return a
      }),
      n.d(e, 'b', function () {
        return r
      }),
      n.d(e, 'd', function () {
        return o
      }),
      n.d(e, 'e', function () {
        return s
      }),
      n.d(e, 'c', function () {
        return c
      }),
      n.d(e, 'g', function () {
        return l
      }),
      n.d(e, 'f', function () {
        return u
      }),
      n.d(e, 'h', function () {
        return d
      })
      var i = n('be3b')
      function a(t) {
        return Object(i['a'])({
          url: '/banner',
          method: 'post',
          params: { type: t },
        })
      }
      function r() {
        return Object(i['a'])({ url: '/personalized' })
      }
      function o() {
        return Object(i['a'])({ url: '/personalized/mv' })
      }
      function s() {
        return Object(i['a'])({ url: '/personalized/newsong' })
      }
      function c() {
        return Object(i['a'])({ url: '/personalized/djprogram' })
      }
      function l() {
        return Object(i['a'])({ url: '/program/recommend' })
      }
      function u() {
        return Object(i['a'])({ url: '/personalized/privatecontent' })
      }
      function d() {
        return Object(i['a'])({ url: '/toplist' })
      }
    },
  },
])
//# sourceMappingURL=chunk-5f1c428e.1159739f.js.map
