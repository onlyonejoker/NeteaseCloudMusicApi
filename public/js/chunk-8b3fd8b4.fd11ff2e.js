;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-8b3fd8b4'],
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
        o = [
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e
            return i('section', { staticClass: 'shade' }, [
              i('i', { staticClass: 'el-icon-video-play' }),
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
        a = r,
        s = (i('0353'), i('2877')),
        c = Object(s['a'])(a, n, o, !1, null, '759f93d2', null)
      e['a'] = c.exports
    },
    '35ee': function (t, e, i) {},
    '450b': function (t, e, i) {
      'use strict'
      i.r(e)
      var n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i('div', { staticClass: 'video' }, [
            i('nav', [
              i('div', { staticClass: 'title' }, [
                i('h2', { on: { click: t.openTag } }, [t._v('全部视频')]),
                i(
                  'p',
                  t._l(t.classfly, function (e, n) {
                    return i(
                      'span',
                      {
                        key: n,
                        class: { active: t.classFlyIndex == n },
                        on: {
                          click: function (i) {
                            return t.active(n, e.id, 0)
                          },
                        },
                      },
                      [t._v(' ' + t._s(e.name) + ' ')],
                    )
                  }),
                  0,
                ),
              ]),
              i(
                'div',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: t.show,
                      expression: 'show',
                    },
                  ],
                  ref: 'videoTag',
                  staticClass: 'tag',
                  on: { transitionend: t.transitionend },
                },
                t._l(t.videoTag, function (e, n) {
                  return i(
                    'span',
                    {
                      key: n,
                      class: { active: t.tagIndex == n },
                      on: {
                        click: function (i) {
                          return t.active(n, e.id, 1)
                        },
                      },
                    },
                    [t._v(' ' + t._s(e.name) + ' ')],
                  )
                }),
                0,
              ),
            ]),
            i(
              'div',
              { staticClass: 'videoAll' },
              [
                t._l(t.videoAll, function (t, e) {
                  return i('video-c', { key: e, attrs: { video: t } })
                }),
                i('page', {
                  attrs: { more: t.videoAllMore },
                  on: { page: t.page },
                }),
              ],
              2,
            ),
            i('h2', [t._v('推荐')]),
            i(
              'div',
              { staticClass: 'videoRecommend' },
              [
                t._l(t.videoRecommend, function (t, e) {
                  return i('video-c', { key: e, attrs: { video: t } })
                }),
                i('page', {
                  attrs: { more: t.videoAllMore },
                  on: { page: t.page },
                }),
              ],
              2,
            ),
          ])
        },
        o = [],
        r = (i('d3b7'), i('3ca3'), i('ddb0'), i('d81d'), i('8862')),
        a = i('24e8'),
        s = i('d3dc'),
        c = {
          name: 'videoList',
          data: function () {
            return {
              videoTag: null,
              classfly: null,
              open: !1,
              show: !1,
              videoAll: null,
              videoAllMore: !1,
              offset: 0,
              classFlyIndex: 0,
              tagIndex: 0,
              videoRecommend: null,
            }
          },
          components: { videoC: a['a'], Page: s['a'] },
          methods: {
            videoListFn: function () {
              var t = this
              Promise.all([
                Object(r['p'])(),
                Object(r['t'])(),
                Object(r['o'])(),
                Object(r['u'])(),
              ])
                .then(function (e) {
                  console.log(e),
                  (t.classfly = e[0].data),
                  (t.videoTag = e[1].data),
                  (t.videoAll = e[2].datas.map(function (t) {
                    return t.data
                  })),
                  (t.videoRecommend = e[3].datas.map(function (t) {
                    return t.data
                  })),
                  (t.videoAllMore = e[2].hasmore)
                })
                .catch()
            },
            videoAllFn: function () {
              var t = this
              Object(r['o'])(this.offset)
                .then(function (e) {
                  ;(t.videoAll = e.datas.map(function (t) {
                    return t.data
                  })),
                  (t.videoAllMore = e.hasmore)
                })
                .catch()
            },
            videoGroup: function (t) {
              var e = this
              Object(r['s'])(t, this.offset)
                .then(function (t) {
                  ;(e.videoAll = t.datas.map(function (t) {
                    return t.data
                  })),
                  (e.videoAllMore = t.hasmore)
                })
                .catch()
            },
            openTag: function () {
              var t = this
              ;(this.open = !this.open),
              (this.show = !0),
              this.open
                ? this.$nextTick(function () {
                  ;(t.$refs.videoTag.style.height = '600px'),
                  (t.$refs.videoTag.style.opacity = 1)
                })
                : ((this.$refs.videoTag.style.height = 0),
                (this.$refs.videoTag.style.opacity = 0))
            },
            active: function (t, e, i) {
              0 == i
                ? ((this.classFlyIndex = t), this.videoGroup(e))
                : 1 == i && ((this.tagIndex = t), this.videoGroup(e))
            },
            page: function (t) {
              ;(this.offset = t), this.videoAllFn()
            },
            transitionend: function () {
              this.open || (this.show = !1)
            },
          },
          mounted: function () {
            this.videoListFn()
          },
        },
        u = c,
        d = (i('9afb'), i('2877')),
        l = Object(d['a'])(u, n, o, !1, null, '7ed79cb2', null)
      e['default'] = l.exports
    },
    '5fc4': function (t, e, i) {},
    8862: function (t, e, i) {
      'use strict'
      i.d(e, 't', function () {
        return o
      }),
      i.d(e, 'p', function () {
        return r
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
        return d
      }),
      i.d(e, 'g', function () {
        return l
      }),
      i.d(e, 'f', function () {
        return f
      }),
      i.d(e, 'j', function () {
        return v
      }),
      i.d(e, 'n', function () {
        return m
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
        return g
      }),
      i.d(e, 'v', function () {
        return j
      }),
      i.d(e, 'h', function () {
        return O
      }),
      i.d(e, 'd', function () {
        return y
      }),
      i.d(e, 'e', function () {
        return _
      }),
      i.d(e, 'i', function () {
        return k
      }),
      i.d(e, 'a', function () {
        return C
      }),
      i.d(e, 'b', function () {
        return w
      }),
      i.d(e, 'l', function () {
        return A
      })
      var n = i('be3b')
      function o() {
        return Object(n['a'])({ url: '/video/group/list', method: 'post' })
      }
      function r() {
        return Object(n['a'])({ url: '/video/category/list', method: 'post' })
      }
      function a(t) {
        return Object(n['a'])({
          url: '/video/timeline/all',
          method: 'post',
          params: { offset: t },
        })
      }
      function s(t) {
        return Object(n['a'])({
          url: '/video/timeline/recommend',
          method: 'post',
          params: { offset: t },
        })
      }
      function c(t, e) {
        return Object(n['a'])({
          url: '/video/group',
          method: 'post',
          params: { id: t, offset: e },
        })
      }
      function u(t) {
        return Object(n['a'])({
          url: '/simi/mv',
          method: 'post',
          params: { mvid: t },
        })
      }
      function d(t, e, i, o, r) {
        return Object(n['a'])({
          url: '/mv/all',
          method: 'post',
          params: { area: t, type: e, order: i, limit: o, offset: r },
        })
      }
      function l(t, e, i) {
        return Object(n['a'])({
          url: '/mv/all',
          method: 'post',
          params: { area: t, limit: e, offset: i },
        })
      }
      function f(t, e, i) {
        return Object(n['a'])({
          url: '/mv/exclusive/rcmd',
          method: 'post',
          params: { limit: t, area: e, offset: i },
        })
      }
      function v() {
        return Object(n['a'])({ url: '/personalized/mv', method: 'post' })
      }
      function m(t, e, i) {
        return Object(n['a'])({
          url: '/top/mv',
          method: 'post',
          params: { limit: t, area: e, offset: i },
        })
      }
      function p(t) {
        return Object(n['a'])({
          url: '/related/allvideo',
          method: 'post',
          params: { id: t },
        })
      }
      function h(t) {
        return Object(n['a'])({
          url: '/video/detail',
          method: 'post',
          params: { id: t },
        })
      }
      function b(t) {
        return Object(n['a'])({
          url: '/video/detail/info',
          method: 'post',
          params: { vid: t },
        })
      }
      function g(t) {
        return Object(n['a'])({
          url: '/video/url',
          method: 'post',
          params: { id: t },
        })
      }
      function j(t, e) {
        return Object(n['a'])({
          url: '/video/sub',
          method: 'post',
          params: { id: t, t: e },
        })
      }
      function O(t, e) {
        return Object(n['a'])({
          url: '/mv/sub',
          method: 'post',
          params: { mvid: t, t: e },
        })
      }
      function y(t) {
        return Object(n['a'])({
          url: '/mv/detail',
          method: 'post',
          params: { mvid: t },
        })
      }
      function _(t) {
        return Object(n['a'])({
          url: '/mv/detail/info',
          method: 'post',
          params: { mvid: t },
        })
      }
      function k(t, e) {
        return Object(n['a'])({
          url: '/mv/url',
          method: 'post',
          params: { id: t, r: e },
        })
      }
      function C(t, e, i) {
        return Object(n['a'])({
          url: '/comment/mv',
          method: 'post',
          params: { id: t, limit: e, offset: i },
        })
      }
      function w(t, e, i) {
        return Object(n['a'])({
          url: '/comment/video',
          method: 'post',
          params: { id: t, limit: e, offset: i },
        })
      }
      function A(t, e, i) {
        return Object(n['a'])({
          url: '/resource/like',
          method: 'post',
          params: { type: t, t: e, id: i },
        })
      }
    },
    '9afb': function (t, e, i) {
      'use strict'
      i('5fc4')
    },
    c638: function (t, e, i) {},
    d3dc: function (t, e, i) {
      'use strict'
      var n = function () {
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
        o = [],
        r = {
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
        a = r,
        s = (i('1e90'), i('2877')),
        c = Object(s['a'])(a, n, o, !1, null, 'ab6472ac', null)
      e['a'] = c.exports
    },
  },
])
//# sourceMappingURL=chunk-8b3fd8b4.fd11ff2e.js.map
