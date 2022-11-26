;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-7f1aafb4'],
  {
    '0353': function (t, e, i) {
      'use strict'
      i('35ee')
    },
    '1e90': function (t, e, i) {
      'use strict'
      i('c638')
    },
    '24e8': function (t, e, i) {
      'use strict'
      var r = function () {
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
              i('p', [t._v(t._s(t.video.title || t.video.name))]),
              t.video.creator
                ? i(
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
                ? i(
                  'p',
                  { staticClass: 'nickname', on: { click: t.linkArtist } },
                  [t._v(' ' + t._s(t.video.artistName) + ' ')],
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
        o = {
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
        a = o,
        s = (i('0353'), i('2877')),
        c = Object(s['a'])(a, r, n, !1, null, '759f93d2', null)
      e['a'] = c.exports
    },
    '35ee': function (t, e, i) {},
    '495d': function (t, e, i) {},
    8862: function (t, e, i) {
      'use strict'
      i.d(e, 't', function () {
        return n
      }),
      i.d(e, 'p', function () {
        return o
      }),
      i.d(e, 'o', function () {
        return a
      }),
      i.d(e, 'u', function () {
        return s
      }),
      i.d(e, 's', function () {
        return c
      }),
      i.d(e, 'm', function () {
        return u
      }),
      i.d(e, 'c', function () {
        return v
      }),
      i.d(e, 'g', function () {
        return d
      }),
      i.d(e, 'f', function () {
        return m
      }),
      i.d(e, 'j', function () {
        return l
      }),
      i.d(e, 'n', function () {
        return f
      }),
      i.d(e, 'k', function () {
        return p
      }),
      i.d(e, 'q', function () {
        return h
      }),
      i.d(e, 'r', function () {
        return b
      }),
      i.d(e, 'w', function () {
        return k
      }),
      i.d(e, 'v', function () {
        return g
      }),
      i.d(e, 'h', function () {
        return M
      }),
      i.d(e, 'd', function () {
        return F
      }),
      i.d(e, 'e', function () {
        return O
      }),
      i.d(e, 'i', function () {
        return j
      }),
      i.d(e, 'a', function () {
        return _
      }),
      i.d(e, 'b', function () {
        return A
      }),
      i.d(e, 'l', function () {
        return C
      })
      var r = i('be3b')
      function n() {
        return Object(r['a'])({ url: '/video/group/list', method: 'post' })
      }
      function o() {
        return Object(r['a'])({ url: '/video/category/list', method: 'post' })
      }
      function a(t) {
        return Object(r['a'])({
          url: '/video/timeline/all',
          method: 'post',
          params: { offset: t },
        })
      }
      function s(t) {
        return Object(r['a'])({
          url: '/video/timeline/recommend',
          method: 'post',
          params: { offset: t },
        })
      }
      function c(t, e) {
        return Object(r['a'])({
          url: '/video/group',
          method: 'post',
          params: { id: t, offset: e },
        })
      }
      function u(t) {
        return Object(r['a'])({
          url: '/simi/mv',
          method: 'post',
          params: { mvid: t },
        })
      }
      function v(t, e, i, n, o) {
        return Object(r['a'])({
          url: '/mv/all',
          method: 'post',
          params: { area: t, type: e, order: i, limit: n, offset: o },
        })
      }
      function d(t, e, i) {
        return Object(r['a'])({
          url: '/mv/all',
          method: 'post',
          params: { area: t, limit: e, offset: i },
        })
      }
      function m(t, e, i) {
        return Object(r['a'])({
          url: '/mv/exclusive/rcmd',
          method: 'post',
          params: { limit: t, area: e, offset: i },
        })
      }
      function l() {
        return Object(r['a'])({ url: '/personalized/mv', method: 'post' })
      }
      function f(t, e, i) {
        return Object(r['a'])({
          url: '/top/mv',
          method: 'post',
          params: { limit: t, area: e, offset: i },
        })
      }
      function p(t) {
        return Object(r['a'])({
          url: '/related/allvideo',
          method: 'post',
          params: { id: t },
        })
      }
      function h(t) {
        return Object(r['a'])({
          url: '/video/detail',
          method: 'post',
          params: { id: t },
        })
      }
      function b(t) {
        return Object(r['a'])({
          url: '/video/detail/info',
          method: 'post',
          params: { vid: t },
        })
      }
      function k(t) {
        return Object(r['a'])({
          url: '/video/url',
          method: 'post',
          params: { id: t },
        })
      }
      function g(t, e) {
        return Object(r['a'])({
          url: '/video/sub',
          method: 'post',
          params: { id: t, t: e },
        })
      }
      function M(t, e) {
        return Object(r['a'])({
          url: '/mv/sub',
          method: 'post',
          params: { mvid: t, t: e },
        })
      }
      function F(t) {
        return Object(r['a'])({
          url: '/mv/detail',
          method: 'post',
          params: { mvid: t },
        })
      }
      function O(t) {
        return Object(r['a'])({
          url: '/mv/detail/info',
          method: 'post',
          params: { mvid: t },
        })
      }
      function j(t, e) {
        return Object(r['a'])({
          url: '/mv/url',
          method: 'post',
          params: { id: t, r: e },
        })
      }
      function _(t, e, i) {
        return Object(r['a'])({
          url: '/comment/mv',
          method: 'post',
          params: { id: t, limit: e, offset: i },
        })
      }
      function A(t, e, i) {
        return Object(r['a'])({
          url: '/comment/video',
          method: 'post',
          params: { id: t, limit: e, offset: i },
        })
      }
      function C(t, e, i) {
        return Object(r['a'])({
          url: '/resource/like',
          method: 'post',
          params: { type: t, t: e, id: i },
        })
      }
    },
    '949c': function (t, e, i) {
      'use strict'
      i('495d')
    },
    c638: function (t, e, i) {},
    d3dc: function (t, e, i) {
      'use strict'
      var r = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
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
        n = [],
        o = {
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
        a = o,
        s = (i('1e90'), i('2877')),
        c = Object(s['a'])(a, r, n, !1, null, 'ab6472ac', null)
      e['a'] = c.exports
    },
    efbc: function (t, e, i) {
      'use strict'
      i.r(e)
      var r = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i('div', { staticClass: 'mvhome' }, [
            i(
              'nav',
              [
                i(
                  'router-link',
                  { attrs: { 'active-class': 'active', to: 'mvAll' } },
                  [t._v('全部')],
                ),
                i(
                  'div',
                  t._l(t.mvFirstArea, function (e, r) {
                    return i(
                      'span',
                      {
                        key: r,
                        class: { active: r == t.mvFirstAreaActive },
                        on: {
                          click: function (e) {
                            return t.active(0, r)
                          },
                        },
                      },
                      [t._v(' ' + t._s(e) + ' ')],
                    )
                  }),
                  0,
                ),
              ],
              1,
            ),
            i('h2', [t._v('最新')]),
            i(
              'div',
              { staticClass: 'mvFirst' },
              [
                t._l(t.mvFirst, function (t, e) {
                  return i('video-c', { key: e, attrs: { video: t } })
                }),
                i('page', {
                  attrs: { more: t.mvFirstMore },
                  on: { page: t.mvFirstPageFn },
                }),
              ],
              2,
            ),
            i('h2', [t._v('推荐')]),
            i(
              'div',
              { staticClass: 'mvFirst' },
              t._l(t.personalized, function (t, e) {
                return i('video-c', { key: e, attrs: { video: t } })
              }),
              1,
            ),
            i('h2', [t._v('网易出品')]),
            i(
              'div',
              { staticClass: 'mvFirst' },
              [
                t._l(t.mvWYmake, function (t, e) {
                  return i('video-c', { key: e, attrs: { video: t } })
                }),
                i('page', {
                  attrs: { more: t.mvWYmakeMore },
                  on: { page: t.mvWYmakePageFn },
                }),
              ],
              2,
            ),
            i('nav', [
              i('h2', [t._v('MV排行')]),
              i(
                'div',
                t._l(t.mvFirstArea, function (e, r) {
                  return i(
                    'span',
                    {
                      key: r,
                      class: { active: r == t.mvTopMvAreaActive },
                      on: {
                        click: function (e) {
                          return t.active(1, r)
                        },
                      },
                    },
                    [t._v(' ' + t._s(e) + ' ')],
                  )
                }),
                0,
              ),
            ]),
            i(
              'div',
              { staticClass: 'mvFirst' },
              [
                t._l(t.topMV, function (e, r) {
                  return i(
                    'div',
                    { key: r },
                    [
                      i('h4', [t._v('NO:' + t._s(e.lastRank))]),
                      i('video-c', { attrs: { video: e } }),
                    ],
                    1,
                  )
                }),
                i('page', {
                  attrs: { more: t.topMVMore },
                  on: { page: t.topMvPageFn },
                }),
              ],
              2,
            ),
          ])
        },
        n = [],
        o = (i('d3b7'), i('3ca3'), i('ddb0'), i('8862')),
        a = i('24e8'),
        s = i('d3dc'),
        c = {
          name: 'mvhome',
          data: function () {
            return {
              mvFirstArea: ['全部', '内地', '港台', '欧美', '日本', '韩国'],
              mvFirstAreaActive: 0,
              mvTopMvAreaActive: 1,
              mvFirst: null,
              mvFirstPage: 0,
              mvFirstMore: !1,
              personalized: null,
              mvWYmake: null,
              mvWYmakeOffset: 0,
              mvWYmakeMore: !1,
              topMV: null,
              topMVoffset: 0,
              topMVMore: !1,
            }
          },
          components: { videoC: a['a'], Page: s['a'] },
          methods: {
            active: function (t, e) {
              0 == t
                ? ((this.mvFirstAreaActive = e), this.mvFirstFn())
                : 1 == t && ((this.mvTopMvAreaActive = e), this.topMVfn())
            },
            mvFirstPageFn: function (t) {
              ;(this.mvFirstPage = t), this.mvFirstFn()
            },
            mvWYmakePageFn: function (t) {
              ;(this.mvWYmakeOffset = t), this.personalizedFn()
            },
            topMvPageFn: function (t) {
              ;(this.topMVoffset = t), this.topMVfn()
            },
            mvlist: function () {
              var t = this
              Promise.all([
                Object(o['g'])(this.mvFirstArea[this.mvFirstAreaActive], 6),
                Object(o['f'])(6, 6 * this.mvWYmakeOffset),
                Object(o['j'])(),
                Object(o['n'])(10),
              ])
                .then(function (e) {
                  ;(t.mvFirstMore = e[0].hasMore),
                  (t.mvFirst = e[0].data),
                  (t.mvWYmake = e[1].data),
                  (t.mvWYmakeMore = e[1].more),
                  (t.personalized = e[2].result),
                  (t.topMVMore = e[3].hasMore),
                  (t.topMV = e[3].data)
                })
                .catch()
            },
            mvFirstFn: function () {
              var t = this
              Object(o['g'])(
                this.mvFirstArea[this.mvFirstAreaActive],
                6,
                6 * this.mvFirstPage,
              )
                .then(function (e) {
                  ;(t.mvFirstMore = e.hasMore), (t.mvFirst = e.data)
                })
                .catch()
            },
            personalizedFn: function () {
              var t = this
              Object(o['f'])(6, 6 * this.mvWYmakeOffset)
                .then(function (e) {
                  ;(t.mvWYmake = e.data), (t.mvWYmakeMore = e.more)
                })
                .catch()
            },
            topMVfn: function () {
              var t = this
              0 == this.mvTopMvAreaActive
                ? Object(o['n'])(10, null, 10 * this.topMVoffset)
                  .then(function (e) {
                    ;(t.topMVMore = e.hasMore), (t.topMV = e.data)
                  })
                  .catch()
                : Object(o['n'])(
                  10,
                  this.mvFirstArea[this.mvTopMvAreaActive],
                  10 * this.topMVoffset,
                )
                  .then(function (e) {
                    console.log(e),
                    (t.topMVMore = e.hasMore),
                    (t.topMV = e.data)
                  })
                  .catch()
            },
          },
          mounted: function () {
            this.mvlist()
          },
        },
        u = c,
        v = (i('949c'), i('2877')),
        d = Object(v['a'])(u, r, n, !1, null, '03928da5', null)
      e['default'] = d.exports
    },
  },
])
//# sourceMappingURL=chunk-7f1aafb4.d0e74aed.js.map
