;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-a89ddf2e'],
  {
    '0353': function (t, e, n) {
      'use strict'
      n('35ee')
    },
    '19e6': function (t, e, n) {},
    '1e90': function (t, e, n) {
      'use strict'
      n('c638')
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
        r = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('section', { staticClass: 'shade' }, [
              n('i', { staticClass: 'el-icon-video-play' }),
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
        s = (n('0353'), n('2877')),
        u = Object(s['a'])(a, i, r, !1, null, '759f93d2', null)
      e['a'] = u.exports
    },
    '2a00': function (t, e, n) {
      'use strict'
      n.r(e)
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'mvAll' },
            [
              n(
                'nav',
                [
                  n(
                    'router-link',
                    {
                      attrs: { 'active-class': 'active', to: '/mv/mv/mvhome' },
                    },
                    [t._v('最新')],
                  ),
                ],
                1,
              ),
              n('div', { staticClass: 'nav' }, [
                n('div', [
                  n('p', [t._v('地区：')]),
                  n(
                    'div',
                    t._l(t.area, function (e, i) {
                      return n(
                        'span',
                        {
                          key: i,
                          class: { active: i == t.areaIndex },
                          on: {
                            click: function (e) {
                              return t.active(0, i)
                            },
                          },
                        },
                        [t._v(t._s(e))],
                      )
                    }),
                    0,
                  ),
                ]),
                n('div', [
                  n('p', [t._v('类型：')]),
                  n(
                    'div',
                    t._l(t.type, function (e, i) {
                      return n(
                        'span',
                        {
                          key: i,
                          class: { active: i == t.typeIndex },
                          on: {
                            click: function (e) {
                              return t.active(1, i)
                            },
                          },
                        },
                        [t._v(t._s(e))],
                      )
                    }),
                    0,
                  ),
                ]),
                n('div', [
                  n('p', [t._v('排序：')]),
                  n(
                    'div',
                    t._l(t.order, function (e, i) {
                      return n(
                        'span',
                        {
                          key: i,
                          class: { active: i == t.orderIndex },
                          on: {
                            click: function (e) {
                              return t.active(2, i)
                            },
                          },
                        },
                        [t._v(t._s(e))],
                      )
                    }),
                    0,
                  ),
                ]),
              ]),
              n(
                'div',
                { staticClass: 'video' },
                t._l(t.video, function (t, e) {
                  return n('video-c', { key: e, attrs: { video: t } })
                }),
                1,
              ),
              n('page', { attrs: { more: t.more }, on: { page: t.pageFn } }),
            ],
            1,
          )
        },
        r = [],
        o = n('8862'),
        a = n('d3dc'),
        s = n('24e8'),
        u = {
          name: 'mvAll',
          components: { page: a['a'], videoC: s['a'] },
          data: function () {
            return {
              more: !1,
              area: ['全部', '内地', '港台', '欧美', '日本', '韩国'],
              areaIndex: 0,
              type: ['全部', '官方版', '原生', '现场版', '网易出品'],
              typeIndex: 0,
              order: ['上升最快', '最热', '最新'],
              orderIndex: 0,
              offset: 0,
              video: null,
            }
          },
          methods: {
            pageFn: function (t) {
              ;(this.offset = t), this.mvAllFn()
            },
            mvAllFn: function () {
              var t = this
              Object(o['c'])(
                this.area[this.areaIndex],
                this.type[this.typeIndex],
                this.order[this.orderIndex],
                30,
                this.offset,
              )
                .then(function (e) {
                  console.log(e), (t.video = e.data), (t.more = e.hasMore)
                })
                .catch()
            },
            active: function (t, e) {
              0 == t
                ? ((this.areaIndex = e), this.mvAllFn())
                : 1 == t
                  ? ((this.typeIndex = e), this.mvAllFn())
                  : 2 == t && ((this.orderIndex = e), this.mvAllFn())
            },
          },
          mounted: function () {
            this.mvAllFn()
          },
        },
        c = u,
        d = (n('4f35'), n('2877')),
        l = Object(d['a'])(c, i, r, !1, null, 'f725a40e', null)
      e['default'] = l.exports
    },
    '35ee': function (t, e, n) {},
    '4f35': function (t, e, n) {
      'use strict'
      n('19e6')
    },
    8862: function (t, e, n) {
      'use strict'
      n.d(e, 't', function () {
        return r
      }),
      n.d(e, 'p', function () {
        return o
      }),
      n.d(e, 'o', function () {
        return a
      }),
      n.d(e, 'u', function () {
        return s
      }),
      n.d(e, 's', function () {
        return u
      }),
      n.d(e, 'm', function () {
        return c
      }),
      n.d(e, 'c', function () {
        return d
      }),
      n.d(e, 'g', function () {
        return l
      }),
      n.d(e, 'f', function () {
        return v
      }),
      n.d(e, 'j', function () {
        return f
      }),
      n.d(e, 'n', function () {
        return m
      }),
      n.d(e, 'k', function () {
        return p
      }),
      n.d(e, 'q', function () {
        return h
      }),
      n.d(e, 'r', function () {
        return b
      }),
      n.d(e, 'w', function () {
        return _
      }),
      n.d(e, 'v', function () {
        return g
      }),
      n.d(e, 'h', function () {
        return j
      }),
      n.d(e, 'd', function () {
        return k
      }),
      n.d(e, 'e', function () {
        return O
      }),
      n.d(e, 'i', function () {
        return y
      }),
      n.d(e, 'a', function () {
        return C
      }),
      n.d(e, 'b', function () {
        return I
      }),
      n.d(e, 'l', function () {
        return x
      })
      var i = n('be3b')
      function r() {
        return Object(i['a'])({ url: '/video/group/list', method: 'post' })
      }
      function o() {
        return Object(i['a'])({ url: '/video/category/list', method: 'post' })
      }
      function a(t) {
        return Object(i['a'])({
          url: '/video/timeline/all',
          method: 'post',
          params: { offset: t },
        })
      }
      function s(t) {
        return Object(i['a'])({
          url: '/video/timeline/recommend',
          method: 'post',
          params: { offset: t },
        })
      }
      function u(t, e) {
        return Object(i['a'])({
          url: '/video/group',
          method: 'post',
          params: { id: t, offset: e },
        })
      }
      function c(t) {
        return Object(i['a'])({
          url: '/simi/mv',
          method: 'post',
          params: { mvid: t },
        })
      }
      function d(t, e, n, r, o) {
        return Object(i['a'])({
          url: '/mv/all',
          method: 'post',
          params: { area: t, type: e, order: n, limit: r, offset: o },
        })
      }
      function l(t, e, n) {
        return Object(i['a'])({
          url: '/mv/all',
          method: 'post',
          params: { area: t, limit: e, offset: n },
        })
      }
      function v(t, e, n) {
        return Object(i['a'])({
          url: '/mv/exclusive/rcmd',
          method: 'post',
          params: { limit: t, area: e, offset: n },
        })
      }
      function f() {
        return Object(i['a'])({ url: '/personalized/mv', method: 'post' })
      }
      function m(t, e, n) {
        return Object(i['a'])({
          url: '/top/mv',
          method: 'post',
          params: { limit: t, area: e, offset: n },
        })
      }
      function p(t) {
        return Object(i['a'])({
          url: '/related/allvideo',
          method: 'post',
          params: { id: t },
        })
      }
      function h(t) {
        return Object(i['a'])({
          url: '/video/detail',
          method: 'post',
          params: { id: t },
        })
      }
      function b(t) {
        return Object(i['a'])({
          url: '/video/detail/info',
          method: 'post',
          params: { vid: t },
        })
      }
      function _(t) {
        return Object(i['a'])({
          url: '/video/url',
          method: 'post',
          params: { id: t },
        })
      }
      function g(t, e) {
        return Object(i['a'])({
          url: '/video/sub',
          method: 'post',
          params: { id: t, t: e },
        })
      }
      function j(t, e) {
        return Object(i['a'])({
          url: '/mv/sub',
          method: 'post',
          params: { mvid: t, t: e },
        })
      }
      function k(t) {
        return Object(i['a'])({
          url: '/mv/detail',
          method: 'post',
          params: { mvid: t },
        })
      }
      function O(t) {
        return Object(i['a'])({
          url: '/mv/detail/info',
          method: 'post',
          params: { mvid: t },
        })
      }
      function y(t, e) {
        return Object(i['a'])({
          url: '/mv/url',
          method: 'post',
          params: { id: t, r: e },
        })
      }
      function C(t, e, n) {
        return Object(i['a'])({
          url: '/comment/mv',
          method: 'post',
          params: { id: t, limit: e, offset: n },
        })
      }
      function I(t, e, n) {
        return Object(i['a'])({
          url: '/comment/video',
          method: 'post',
          params: { id: t, limit: e, offset: n },
        })
      }
      function x(t, e, n) {
        return Object(i['a'])({
          url: '/resource/like',
          method: 'post',
          params: { type: t, t: e, id: n },
        })
      }
    },
    c638: function (t, e, n) {},
    d3dc: function (t, e, n) {
      'use strict'
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'block' }, [
            n('span', {
              staticClass: 'el-icon-arrow-left',
              on: { click: t.reducePage },
            }),
            n('span', [t._v(t._s(t.page))]),
            n('span', {
              ref: 'pageCCC',
              staticClass: 'el-icon-arrow-right',
              on: { click: t.addPage },
            }),
          ])
        },
        r = [],
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
        s = (n('1e90'), n('2877')),
        u = Object(s['a'])(a, i, r, !1, null, 'ab6472ac', null)
      e['a'] = u.exports
    },
  },
])
//# sourceMappingURL=chunk-a89ddf2e.a0847c69.js.map
