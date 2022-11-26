;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-58c21cb7'],
  {
    '0353': function (t, e, n) {
      'use strict'
      n('35ee')
    },
    '1b1a': function (t, e, n) {},
    '1e90': function (t, e, n) {
      'use strict'
      n('c638')
    },
    '1fc9': function (t, e, n) {
      t.exports = n.p + 'img/activeDianzan.13848c53.svg'
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
        o = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('section', { staticClass: 'shade' }, [
              n('i', { staticClass: 'el-icon-video-play' }),
            ])
          },
        ],
        a = {
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
        s = a,
        r = (n('0353'), n('2877')),
        c = Object(r['a'])(s, i, o, !1, null, '759f93d2', null)
      e['a'] = c.exports
    },
    2578: function (t, e, n) {
      'use strict'
      n('1b1a')
    },
    3169: function (t, e, n) {},
    '35ee': function (t, e, n) {},
    '392a': function (t, e, n) {
      'use strict'
      n('670f')
    },
    '3b51': function (t, e, n) {},
    '4c53': function (t, e, n) {
      'use strict'
      var i = n('23e7'),
        o = n('857a'),
        a = n('af03')
      i(
        { target: 'String', proto: !0, forced: a('sub') },
        {
          sub: function () {
            return o(this, 'sub', '', '')
          },
        },
      )
    },
    5899: function (t, e) {
      t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff'
    },
    '58a8': function (t, e, n) {
      var i = n('1d80'),
        o = n('577e'),
        a = n('5899'),
        s = '[' + a + ']',
        r = RegExp('^' + s + s + '*'),
        c = RegExp(s + s + '*$'),
        u = function (t) {
          return function (e) {
            var n = o(i(e))
            return (
              1 & t && (n = n.replace(r, '')),
              2 & t && (n = n.replace(c, '')),
              n
            )
          }
        }
      t.exports = { start: u(1), end: u(2), trim: u(3) }
    },
    '5d55': function (t, e, n) {
      'use strict'
      n.r(e)
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'videoDetail' },
            [
              n('topbar'),
              /^[0-9]*$/.test(t.uid)
                ? n('div', [n('mv-detail')], 1)
                : /^[0-9A-Z]*$/.test(t.uid)
                  ? n('div', [n('video-detail-video')], 1)
                  : t._e(),
            ],
            1,
          )
        },
        o = [],
        a = n('5580'),
        s = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'mvDetail' }, [
            n('div', { staticClass: 'video' }, [
              n('video', {
                attrs: { src: t.videoUrl, controls: '', id: 'video' },
              }),
            ]),
            t.info
              ? n('div', { staticClass: 'content' }, [
                n('div', { staticClass: 'body' }, [
                  n(
                    'p',
                    [
                      n('btn', {
                        attrs: { text: '评论(' + t.info.commentCount + ')' },
                        nativeOn: {
                          click: function (e) {
                            return t.commetFn.apply(null, arguments)
                          },
                        },
                      }),
                      n('btn', {
                        class: { sub: 1 == t.sub },
                        attrs: { text: 1 == t.sub ? '已收藏' : '收藏' },
                        nativeOn: {
                          click: function (e) {
                            return t.mvSub.apply(null, arguments)
                          },
                        },
                      }),
                      n('btn', {
                        attrs: { text: '转发(' + t.info.shareCount + ')' },
                        nativeOn: {
                          click: function (e) {
                            return t.shareFn.apply(null, arguments)
                          },
                        },
                      }),
                      n('btn', {
                        class: { sub: t.liked },
                        attrs: { text: '点赞(' + t.info.likedCount + ')' },
                        nativeOn: {
                          click: function (e) {
                            return t.likedFn.apply(null, arguments)
                          },
                        },
                      }),
                      n('btn', {
                        attrs: { text: '收藏到歌单' },
                        nativeOn: {
                          click: function (e) {
                            return t.subPlay.apply(null, arguments)
                          },
                        },
                      }),
                      n('add-play', {
                        attrs: { index: 1, isDispaly: t.addplay, ids: t.uid },
                      }),
                    ],
                    1,
                  ),
                ]),
                n('div', { staticClass: 'simi' }, [
                  n('h2', [t._v('相关推荐')]),
                  n(
                    'div',
                    t._l(t.simi, function (t, e) {
                      return n('videos', { key: e, attrs: { video: t } })
                    }),
                    1,
                  ),
                ]),
              ])
              : t._e(),
            t.comment
              ? n(
                'div',
                { staticClass: 'mvComment' },
                [
                  n('zycomment', {
                    attrs: {
                      comments: t.comment.comments,
                      hotComments: t.comment.hotComments,
                      type: 1,
                      resourceId: parseInt(t.uid),
                    },
                  }),
                  n('page', {
                    attrs: { more: t.more },
                    on: { page: t.page },
                  }),
                ],
                1,
              )
              : t._e(),
          ])
        },
        r = [],
        c = (n('d3b7'), n('3ca3'), n('ddb0'), n('4c53'), n('8862')),
        u = n('24e8'),
        l = n('3e6f'),
        m = n('d3dc'),
        d = n('8f5e'),
        f = n('f6e8'),
        p = {
          components: {
            videos: u['a'],
            Btn: l['a'],
            Zycomment: d['a'],
            Page: m['a'],
            AddPlay: f['a'],
          },
          name: 'mvDetail',
          computed: {
            uid: function () {
              return this.$route.query.id
            },
          },
          data: function () {
            return {
              rate: 1080,
              liked: !1,
              videoUrl: null,
              simi: null,
              info: null,
              comment: null,
              more: !1,
              offset: 0,
              sub: 0,
              addplay: 0,
            }
          },
          watch: {
            info: function (t) {
              t.liked ? (this.liked = !0) : (this.liked = !1)
            },
            $route: function () {
              this.mvDetail()
            },
          },
          methods: {
            mvDetail: function () {
              var t = this
              Promise.all([
                Object(c['m'])(this.uid),
                Object(c['d'])(this.uid),
                Object(c['e'])(this.uid),
                Object(c['i'])(this.uid, this.rate),
                Object(c['a'])(this.uid),
              ])
                .then(function (e) {
                  console.log(e),
                  (t.simi = e[0].mvs),
                  (t.info = e[2]),
                  (t.videoUrl = e[3].data.url),
                  (t.comment = e[4]),
                  (t.more = e[4].more),
                  e[1].subed ? (t.sub = 1) : (t.sub = 0)
                })
                .catch()
            },
            mvSub: function () {
              1 == this.sub ? (this.sub = 0) : (this.sub = 1),
              Object(c['h'])(this.uid, this.sub)
                .then(function (t) {
                  console.log(t)
                })
                .catch()
            },
            subPlay: function () {
              1 == this.addplay ? (this.addplay = 0) : (this.addplay = 1)
            },
            commetFn: function () {
              document
                .querySelector('.mvComment')
                .scrollIntoView({ behavior: 'smooth' })
            },
            likedFn: function () {
              this.liked
                ? ((this.liked = !1), Object(c['l'])(1, 10, this.uid))
                : ((this.liked = !0), Object(c['l'])(1, 1, this.uid))
            },
            shareFn: function () {
              this.$bus.$emit('fenxiang', this.uid, 'mv')
            },
            page: function (t) {
              var e = this
              Object(c['a'])(this.uid, 20, 20 * t)
                .then(function (t) {
                  ;(e.comment = t), (e.more = t.more)
                })
                .catch()
            },
          },
          mounted: function () {
            this.mvDetail(this.uid)
          },
        },
        h = p,
        v = (n('82bf'), n('2877')),
        b = Object(v['a'])(h, s, r, !1, null, '6f6a0d44', null),
        y = b.exports,
        k = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'mvDetail' }, [
            n('div', { staticClass: 'video' }, [
              n('video', {
                attrs: { src: t.videoUrl, controls: '', id: 'video' },
              }),
            ]),
            t.info
              ? n('div', { staticClass: 'content' }, [
                n('div', { staticClass: 'body' }, [
                  n(
                    'p',
                    [
                      n('btn', {
                        attrs: { text: '评论(' + t.info.commentCount + ')' },
                        nativeOn: {
                          click: function (e) {
                            return t.commetFn.apply(null, arguments)
                          },
                        },
                      }),
                      n('btn', {
                        class: { sub: 1 == t.sub },
                        attrs: { text: 1 == t.sub ? '已收藏' : '收藏' },
                        nativeOn: {
                          click: function (e) {
                            return t.mvSub.apply(null, arguments)
                          },
                        },
                      }),
                      n('btn', {
                        attrs: { text: '转发(' + t.info.shareCount + ')' },
                        nativeOn: {
                          click: function (e) {
                            return t.shareFn.apply(null, arguments)
                          },
                        },
                      }),
                      n('btn', {
                        class: { sub: t.liked },
                        attrs: { text: '点赞(' + t.info.likedCount + ')' },
                        nativeOn: {
                          click: function (e) {
                            return t.likedFn.apply(null, arguments)
                          },
                        },
                      }),
                      n('btn', {
                        attrs: { text: '收藏到歌单' },
                        nativeOn: {
                          click: function (e) {
                            return t.subPlay.apply(null, arguments)
                          },
                        },
                      }),
                      n('add-play', {
                        attrs: { index: 1, isDispaly: t.addplay, ids: t.uid },
                      }),
                    ],
                    1,
                  ),
                ]),
                n('div', { staticClass: 'simi' }, [
                  n('h2', [t._v('相关推荐')]),
                  n(
                    'div',
                    t._l(t.simi, function (t, e) {
                      return n('videos', { key: e, attrs: { video: t } })
                    }),
                    1,
                  ),
                ]),
              ])
              : t._e(),
            t.comment
              ? n(
                'div',
                { staticClass: 'mvComment' },
                [
                  n('zycomment', {
                    attrs: {
                      comments: t.comment.comments,
                      hotComments: t.comment.hotComments,
                      type: 4,
                      resourceId: parseInt(t.uid),
                    },
                  }),
                  n('page', {
                    attrs: { more: t.more },
                    on: { page: t.page },
                  }),
                ],
                1,
              )
              : t._e(),
          ])
        },
        g = [],
        C = {
          components: {
            videos: u['a'],
            Btn: l['a'],
            Zycomment: d['a'],
            Page: m['a'],
            AddPlay: f['a'],
          },
          name: 'videoDetail',
          computed: {
            uid: function () {
              return this.$route.query.id
            },
          },
          data: function () {
            return {
              rate: 1080,
              sub: 0,
              videoUrl: null,
              simi: null,
              info: null,
              comment: null,
              more: !1,
              offset: 0,
              addplay: 0,
              liked: !1,
            }
          },
          watch: {
            info: function (t) {
              t.liked
                ? ((this.subText = '已收藏'), (this.sub = !0))
                : ((this.subText = '收藏'), (this.sub = !1))
            },
            $route: function () {
              this.mvDetail()
            },
          },
          methods: {
            mvDetail: function () {
              var t = this
              Promise.all([
                Object(c['k'])(this.uid),
                Object(c['q'])(this.uid),
                Object(c['r'])(this.uid),
                Object(c['w'])(this.uid, this.rate),
                Object(c['b'])(this.uid),
              ])
                .then(function (e) {
                  console.log(e),
                  (t.simi = e[0].data),
                  (t.info = e[2]),
                  (t.videoUrl = e[3].urls[0].url),
                  (t.comment = e[4]),
                  (t.more = e[4].more),
                  e[1].subed ? (t.sub = 1) : (t.sub = 0)
                })
                .catch()
            },
            mvSub: function () {
              1 == this.sub ? (this.sub = 0) : (this.sub = 1),
              Object(c['v'])(this.uid, this.sub)
                .then(function (t) {
                  console.log(t)
                })
                .catch()
            },
            commetFn: function () {
              document
                .querySelector('.mvComment')
                .scrollIntoView({ behavior: 'smooth' })
            },
            likedFn: function () {
              this.liked
                ? ((this.liked = !1), Object(c['l'])(5, 10, this.uid))
                : ((this.liked = !0), Object(c['l'])(5, 1, this.uid))
            },
            shareFn: function () {
              this.$bus.$emit('fenxiang', this.uid, 'mv')
            },
            page: function (t) {
              var e = this
              Object(c['b'])(this.uid, 20, 20 * t)
                .then(function (t) {
                  ;(e.comment = t), (e.more = t.more)
                })
                .catch()
            },
            subPlay: function () {
              0 == this.addplay ? (this.addplay = 1) : (this.addplay = 0)
            },
          },
          mounted: function () {
            this.mvDetail(this.uid)
          },
        },
        _ = C,
        O = (n('2578'), Object(v['a'])(_, k, g, !1, null, '7cd86a10', null)),
        x = O.exports,
        I = {
          components: { topbar: a['a'], MvDetail: y, VideoDetailVideo: x },
          name: 'videoDetail',
          computed: {
            uid: function () {
              return this.$route.query.id
            },
          },
          methods: {},
          mounted: function () {},
        },
        j = I,
        z = Object(v['a'])(j, i, o, !1, null, '65759490', null)
      e['default'] = z.exports
    },
    '670f': function (t, e, n) {},
    '82bf': function (t, e, n) {
      'use strict'
      n('3b51')
    },
    '857a': function (t, e, n) {
      var i = n('1d80'),
        o = n('577e'),
        a = /"/g
      t.exports = function (t, e, n, s) {
        var r = o(i(t)),
          c = '<' + e
        return (
          '' !== n && (c += ' ' + n + '="' + o(s).replace(a, '&quot;') + '"'),
          c + '>' + r + '</' + e + '>'
        )
      }
    },
    8862: function (t, e, n) {
      'use strict'
      n.d(e, 't', function () {
        return o
      }),
      n.d(e, 'p', function () {
        return a
      }),
      n.d(e, 'o', function () {
        return s
      }),
      n.d(e, 'u', function () {
        return r
      }),
      n.d(e, 's', function () {
        return c
      }),
      n.d(e, 'm', function () {
        return u
      }),
      n.d(e, 'c', function () {
        return l
      }),
      n.d(e, 'g', function () {
        return m
      }),
      n.d(e, 'f', function () {
        return d
      }),
      n.d(e, 'j', function () {
        return f
      }),
      n.d(e, 'n', function () {
        return p
      }),
      n.d(e, 'k', function () {
        return h
      }),
      n.d(e, 'q', function () {
        return v
      }),
      n.d(e, 'r', function () {
        return b
      }),
      n.d(e, 'w', function () {
        return y
      }),
      n.d(e, 'v', function () {
        return k
      }),
      n.d(e, 'h', function () {
        return g
      }),
      n.d(e, 'd', function () {
        return C
      }),
      n.d(e, 'e', function () {
        return _
      }),
      n.d(e, 'i', function () {
        return O
      }),
      n.d(e, 'a', function () {
        return x
      }),
      n.d(e, 'b', function () {
        return I
      }),
      n.d(e, 'l', function () {
        return j
      })
      var i = n('be3b')
      function o() {
        return Object(i['a'])({ url: '/video/group/list', method: 'post' })
      }
      function a() {
        return Object(i['a'])({ url: '/video/category/list', method: 'post' })
      }
      function s(t) {
        return Object(i['a'])({
          url: '/video/timeline/all',
          method: 'post',
          params: { offset: t },
        })
      }
      function r(t) {
        return Object(i['a'])({
          url: '/video/timeline/recommend',
          method: 'post',
          params: { offset: t },
        })
      }
      function c(t, e) {
        return Object(i['a'])({
          url: '/video/group',
          method: 'post',
          params: { id: t, offset: e },
        })
      }
      function u(t) {
        return Object(i['a'])({
          url: '/simi/mv',
          method: 'post',
          params: { mvid: t },
        })
      }
      function l(t, e, n, o, a) {
        return Object(i['a'])({
          url: '/mv/all',
          method: 'post',
          params: { area: t, type: e, order: n, limit: o, offset: a },
        })
      }
      function m(t, e, n) {
        return Object(i['a'])({
          url: '/mv/all',
          method: 'post',
          params: { area: t, limit: e, offset: n },
        })
      }
      function d(t, e, n) {
        return Object(i['a'])({
          url: '/mv/exclusive/rcmd',
          method: 'post',
          params: { limit: t, area: e, offset: n },
        })
      }
      function f() {
        return Object(i['a'])({ url: '/personalized/mv', method: 'post' })
      }
      function p(t, e, n) {
        return Object(i['a'])({
          url: '/top/mv',
          method: 'post',
          params: { limit: t, area: e, offset: n },
        })
      }
      function h(t) {
        return Object(i['a'])({
          url: '/related/allvideo',
          method: 'post',
          params: { id: t },
        })
      }
      function v(t) {
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
      function y(t) {
        return Object(i['a'])({
          url: '/video/url',
          method: 'post',
          params: { id: t },
        })
      }
      function k(t, e) {
        return Object(i['a'])({
          url: '/video/sub',
          method: 'post',
          params: { id: t, t: e },
        })
      }
      function g(t, e) {
        return Object(i['a'])({
          url: '/mv/sub',
          method: 'post',
          params: { mvid: t, t: e },
        })
      }
      function C(t) {
        return Object(i['a'])({
          url: '/mv/detail',
          method: 'post',
          params: { mvid: t },
        })
      }
      function _(t) {
        return Object(i['a'])({
          url: '/mv/detail/info',
          method: 'post',
          params: { mvid: t },
        })
      }
      function O(t, e) {
        return Object(i['a'])({
          url: '/mv/url',
          method: 'post',
          params: { id: t, r: e },
        })
      }
      function x(t, e, n) {
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
      function j(t, e, n) {
        return Object(i['a'])({
          url: '/resource/like',
          method: 'post',
          params: { type: t, t: e, id: n },
        })
      }
    },
    '8f5e': function (t, e, n) {
      'use strict'
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'albumComment', attrs: { id: 'commentComponent' } },
            [
              n('div', [
                n('h2', [t._v('发表评论')]),
                n(
                  'div',
                  { staticClass: 'commentbox' },
                  [
                    n('el-input', {
                      attrs: {
                        type: 'textarea',
                        rows: 5,
                        placeholder: '请输入内容',
                        resize: 'none',
                      },
                      model: {
                        value: t.textarea,
                        callback: function (e) {
                          t.textarea = e
                        },
                        expression: 'textarea',
                      },
                    }),
                    n('div', [
                      n('span', { on: { click: t.commentSend } }, [
                        t._v('发送'),
                      ]),
                      n('span', { on: { click: t.commentCancel } }, [
                        t._v('取消'),
                      ]),
                    ]),
                  ],
                  1,
                ),
              ]),
              n(
                'div',
                [
                  n('h2', [t._v('热评')]),
                  t._l(t.hotComments, function (e, i) {
                    return n('comments', {
                      key: i,
                      attrs: { comment: e, zyId: t.resourceId, type: t.type },
                    })
                  }),
                ],
                2,
              ),
              n(
                'div',
                [
                  n('h2', [t._v('全部评论')]),
                  t._l(t.comments, function (e, i) {
                    return n('comments', {
                      key: i,
                      attrs: { comment: e, zyId: t.resourceId, type: t.type },
                    })
                  }),
                ],
                2,
              ),
            ],
          )
        },
        o = [],
        a =
          (n('a9e3'),
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e
            return t.comment
              ? i('div', { staticClass: 'comment' }, [
                i('div', { staticClass: 'comment-user' }, [
                  i('img', {
                    directives: [
                      {
                        name: 'lazy',
                        rawName: 'v-lazy',
                        value: t.comment.user.avatarUrl,
                        expression: 'comment.user.avatarUrl',
                      },
                    ],
                    attrs: { alt: 'img' },
                  }),
                  i('div', [
                    i(
                      'p',
                      {
                        staticClass: 'user',
                        on: {
                          click: function (e) {
                            return t.linkUser(t.comment.user.userId)
                          },
                        },
                      },
                      [t._v(' ' + t._s(t.comment.user.nickname) + ' ')],
                    ),
                    i('p', [t._v(t._s(this.$time(t.comment.time)))]),
                  ]),
                ]),
                i('div', { staticClass: 'content-comment-user' }, [
                  i('div', [t._v(t._s(t.comment.content))]),
                ]),
                i('div', { staticClass: 'praise-comment-user' }, [
                  i('div', { staticClass: 'btn' }, [
                    i(
                      'div',
                      {
                        on: {
                          click: function (e) {
                            return t.conmmentDisplayFn(t.comment.commentId)
                          },
                        },
                      },
                      [t._v('评论')],
                    ),
                    i(
                      'div',
                      {
                        on: {
                          click: function (e) {
                            return t.zhuanfa(
                              t.comment.commentId,
                              t.comment.user.userId,
                            )
                          },
                        },
                      },
                      [
                        i('img', {
                          attrs: { src: n('f70e'), alt: 'zhuanfa' },
                        }),
                      ],
                    ),
                    i(
                      'div',
                      {
                        on: {
                          click: function (e) {
                            return t.dianzanFn(t.comment.commentId)
                          },
                        },
                      },
                      [
                        i('img', {
                          attrs: {
                            src: t.dianzan[t.dianzanIndex],
                            alt: 'dianzan',
                          },
                        }),
                        i('span', [t._v(t._s(t.comment.likedCount))]),
                      ],
                    ),
                  ]),
                  t.commentDisplay == t.comment.commentId
                    ? i(
                      'div',
                      { staticClass: 'commentbox' },
                      [
                        i('el-input', {
                          attrs: {
                            type: 'textarea',
                            rows: 3,
                            placeholder: '请输入内容',
                            resize: 'none',
                          },
                          model: {
                            value: t.textarea,
                            callback: function (e) {
                              t.textarea = e
                            },
                            expression: 'textarea',
                          },
                        }),
                        i('div', [
                          i(
                            'span',
                            {
                              on: {
                                click: function (e) {
                                  return t.commentSend(t.comment.commentId)
                                },
                              },
                            },
                            [t._v('发送')],
                          ),
                          i('span', { on: { click: t.commentCancel } }, [
                            t._v('取消'),
                          ]),
                        ]),
                      ],
                      1,
                    )
                    : t._e(),
                ]),
                t.comment.beReplied
                  ? i('p', { staticClass: 'look', on: { click: t.lookFn } }, [
                    t._v('查看回复'),
                  ])
                  : t._e(),
                t.look
                  ? i('div', { staticClass: 'reply' }, [
                    null === t.beReplied
                      ? i('div', [
                        i('i', { staticClass: 'el-icon-loading' }),
                      ])
                      : t.beReplied.length > 0
                        ? i(
                          'div',
                          [
                            t._l(t.beReplied, function (e, o) {
                              return i('div', { key: o }, [
                                i('div', { staticClass: 'comment-user' }, [
                                  i('img', {
                                    directives: [
                                      {
                                        name: 'lazy',
                                        rawName: 'v-lazy',
                                        value: e.user.avatarUrl,
                                        expression: 'item.user.avatarUrl',
                                      },
                                    ],
                                    attrs: { alt: 'img' },
                                  }),
                                  i('div', [
                                    i(
                                      'p',
                                      {
                                        staticClass: 'user',
                                        on: { click: t.linkUser },
                                      },
                                      [
                                        t._v(
                                          ' ' + t._s(e.user.nickname) + ' ',
                                        ),
                                      ],
                                    ),
                                    i('p', [t._v(t._s(e.time))]),
                                  ]),
                                ]),
                                i(
                                  'div',
                                  { staticClass: 'content-comment-user' },
                                  [i('p', [t._v(t._s(e.content))])],
                                ),
                                i(
                                  'div',
                                  { staticClass: 'praise-comment-user' },
                                  [
                                    i('div', { staticClass: 'btn' }, [
                                      i(
                                        'div',
                                        {
                                          on: {
                                            click: function (n) {
                                              return t.conmmentDisplayFn(
                                                e.commentId,
                                              )
                                            },
                                          },
                                        },
                                        [t._v('评论')],
                                      ),
                                      i(
                                        'div',
                                        {
                                          on: {
                                            click: function (n) {
                                              return t.zhuanfa(
                                                e.beRepliedCommentId,
                                              )
                                            },
                                          },
                                        },
                                        [
                                          i('img', {
                                            attrs: {
                                              src: n('f70e'),
                                              alt: 'zhuanfa',
                                            },
                                          }),
                                        ],
                                      ),
                                      i(
                                        'div',
                                        {
                                          on: {
                                            click: function (n) {
                                              return t.replydianzanFn(
                                                o,
                                                e.commentId,
                                              )
                                            },
                                          },
                                        },
                                        [
                                          i('img', {
                                            attrs: {
                                              src:
                                                    t.reply == o
                                                      ? t.dianzan[t.replyI]
                                                      : t.dianzan[0],
                                              alt: 'dianzan',
                                            },
                                          }),
                                          i('span', [
                                            t._v(t._s(e.likedCount)),
                                          ]),
                                        ],
                                      ),
                                    ]),
                                    t.commentDisplay == e.commentId
                                      ? i(
                                        'div',
                                        { staticClass: 'commentbox' },
                                        [
                                          i('el-input', {
                                            attrs: {
                                              type: 'textarea',
                                              rows: 3,
                                              placeholder: '请输入内容',
                                              resize: 'none',
                                            },
                                            model: {
                                              value: t.textarea,
                                              callback: function (e) {
                                                t.textarea = e
                                              },
                                              expression: 'textarea',
                                            },
                                          }),
                                          i('div', [
                                            i(
                                              'span',
                                              {
                                                on: {
                                                  click: function (n) {
                                                    return t.commentSend(
                                                      e.commentId,
                                                    )
                                                  },
                                                },
                                              },
                                              [t._v('发送')],
                                            ),
                                            i(
                                              'span',
                                              {
                                                on: {
                                                  click: t.commentCancel,
                                                },
                                              },
                                              [t._v('取消')],
                                            ),
                                          ]),
                                        ],
                                        1,
                                      )
                                      : t._e(),
                                  ],
                                ),
                              ])
                            }),
                            i('div', { staticClass: 'beRepliedPage' }, [
                              i(
                                'div',
                                [
                                  i('page', {
                                    attrs: { mare: t.more },
                                    on: { page: t.page },
                                  }),
                                ],
                                1,
                              ),
                            ]),
                          ],
                          2,
                        )
                        : i('div', [t._v('暂无评论')]),
                  ])
                  : t._e(),
              ])
              : t._e()
          }),
        s = [],
        r = (n('159b'), n('be3b'))
      function c(t, e, n, i) {
        return Object(r['a'])({
          url: '/comment/like',
          method: 'post',
          params: { id: t, cid: e, t: n, type: i },
        })
      }
      function u(t, e, n, i, o) {
        return Object(r['a'])({
          url: '/comment/floor',
          method: 'post',
          params: { parentCommentId: t, id: e, type: n, limit: i, time: o },
        })
      }
      function l(t, e, n, i, o) {
        return Object(r['a'])({
          url: '/comment',
          method: 'post',
          params: { t: t, type: e, id: n, content: i, commentId: o },
        })
      }
      var m = n('d3dc'),
        d = {
          name: 'commentAlbum',
          props: { comment: Object, zyId: [Number, String], type: Number },
          components: { Page: m['a'] },
          data: function () {
            return {
              dianzan: [n('e98f'), n('1fc9')],
              dianzanIndex: this.zan(),
              reply: null,
              beReplied: null,
              replyI: 0,
              look: !1,
              onlyOne: !0,
              time: -1,
              more: !1,
              textarea: '',
              commentDisplay: null,
            }
          },
          methods: {
            commentLike: function (t) {
              c(this.zyId, t, this.dianzanIndex, this.type)
            },
            commentFloor: function () {
              var t = this
              u(this.comment.commentId, this.zyId, this.type, 20, this.time)
                .then(function (e) {
                  console.log(e),
                  (t.beReplied = e.data.comments),
                  t.beReplied.forEach(function (e) {
                    e.time = t.$time(e.time)
                  }),
                  (t.time = e.data.comments.time),
                  (t.more = e.data.comments.hasMore)
                })
                .catch()
            },
            lookFn: function () {
              ;(this.look = !this.look),
              this.look &&
                  this.onlyOne &&
                  (this.commentFloor(), (this.onlyOne = !1))
            },
            zan: function () {
              return this.comment && this.comment.liked ? 1 : 0
            },
            dianzanFn: function (t) {
              0 == this.dianzanIndex
                ? (this.dianzanIndex = 1)
                : (this.dianzanIndex = 0),
              c(this.zyId, t, this.dianzanIndex, this.type)
            },
            replydianzanFn: function (t, e) {
              this.reply === t &&
                (0 == this.replyI ? (this.replyI = 1) : (this.replyI = 0),
                c(this.zyId, e, this.replyI, this.type))
            },
            zhuanfa: function (t, e) {
              this.$bus.$emit('zhuanfa', t, e)
            },
            page: function () {
              this.commentFloor()
            },
            conmmentDisplayFn: function (t) {
              this.commentDisplay = t
            },
            commentSend: function (t) {
              l(2, this.type, this.zyId, this.textarea, t).then().catch(),
              (this.textarea = '')
            },
            commentCancel: function () {
              this.commentDisplay = null
            },
            linkUser: function (t) {
              this.$router.push({ path: '/user/home', query: { id: t } })
            },
          },
          mounted: function () {},
        },
        f = d,
        p = (n('93bd'), n('2877')),
        h = Object(p['a'])(f, a, s, !1, null, '76714a8e', null),
        v = h.exports,
        b = {
          name: 'commentComponent',
          components: { comments: v },
          props: {
            comments: Array,
            hotComments: Array,
            type: Number,
            resourceId: [Number, String],
          },
          data: function () {
            return { textarea: '' }
          },
          methods: {
            commentSend: function () {
              l(1, this.type, this.resourceId, this.textarea)
                .then(function (t) {
                  console.log(t)
                })
                .catch(),
              (this.textarea = '')
            },
            commentCancel: function () {
              this.textarea = ''
            },
          },
        },
        y = b,
        k = (n('392a'), Object(p['a'])(y, i, o, !1, null, '70e9625d', null))
      e['a'] = k.exports
    },
    '93bd': function (t, e, n) {
      'use strict'
      n('a178')
    },
    a178: function (t, e, n) {},
    a9e3: function (t, e, n) {
      'use strict'
      var i = n('83ab'),
        o = n('da84'),
        a = n('94ca'),
        s = n('6eeb'),
        r = n('5135'),
        c = n('c6b6'),
        u = n('7156'),
        l = n('d9b5'),
        m = n('c04e'),
        d = n('d039'),
        f = n('7c73'),
        p = n('241c').f,
        h = n('06cf').f,
        v = n('9bf2').f,
        b = n('58a8').trim,
        y = 'Number',
        k = o[y],
        g = k.prototype,
        C = c(f(g)) == y,
        _ = function (t) {
          if (l(t)) throw TypeError('Cannot convert a Symbol value to a number')
          var e,
            n,
            i,
            o,
            a,
            s,
            r,
            c,
            u = m(t, 'number')
          if ('string' == typeof u && u.length > 2)
            if (((u = b(u)), (e = u.charCodeAt(0)), 43 === e || 45 === e)) {
              if (((n = u.charCodeAt(2)), 88 === n || 120 === n)) return NaN
            } else if (48 === e) {
              switch (u.charCodeAt(1)) {
                case 66:
                case 98:
                  ;(i = 2), (o = 49)
                  break
                case 79:
                case 111:
                  ;(i = 8), (o = 55)
                  break
                default:
                  return +u
              }
              for (a = u.slice(2), s = a.length, r = 0; r < s; r++)
                if (((c = a.charCodeAt(r)), c < 48 || c > o)) return NaN
              return parseInt(a, i)
            }
          return +u
        }
      if (a(y, !k(' 0o1') || !k('0b1') || k('+0x1'))) {
        for (
          var O,
            x = function (t) {
              var e = arguments.length < 1 ? 0 : t,
                n = this
              return n instanceof x &&
                (C
                  ? d(function () {
                    g.valueOf.call(n)
                  })
                  : c(n) != y)
                ? u(new k(_(e)), n, x)
                : _(e)
            },
            I = i
              ? p(k)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
                ',',
              ),
            j = 0;
          I.length > j;
          j++
        )
          r(k, (O = I[j])) && !r(x, O) && v(x, O, h(k, O))
          ;(x.prototype = g), (g.constructor = x), s(o, y, x)
      }
    },
    af03: function (t, e, n) {
      var i = n('d039')
      t.exports = function (t) {
        return i(function () {
          var e = ''[t]('"')
          return e !== e.toLowerCase() || e.split('"').length > 3
        })
      }
    },
    b8e8: function (t, e, n) {
      'use strict'
      n('3169')
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
        o = [],
        a = {
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
        s = a,
        r = (n('1e90'), n('2877')),
        c = Object(r['a'])(s, i, o, !1, null, 'ab6472ac', null)
      e['a'] = c.exports
    },
    e98f: function (t, e, n) {
      t.exports = n.p + 'img/dianzan.fef3625f.svg'
    },
    f6e8: function (t, e, n) {
      'use strict'
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            {
              staticClass: 'addList',
              class: { display: t.isDispaly == t.index },
            },
            [
              n('p', [t._v('播放列队')]),
              n(
                'ul',
                t._l(t.myCreatPlays, function (e, i) {
                  return n(
                    'li',
                    {
                      key: i,
                      on: {
                        click: function (n) {
                          return t.playAdd(e.id, t.ids, e.specialType)
                        },
                      },
                    },
                    [t._v(' ' + t._s(e.name) + ' ')],
                  )
                }),
                0,
              ),
              n('p', { on: { click: t.playCreate } }, [t._v('添加到新歌单')]),
            ],
          )
        },
        o = [],
        a = (n('a9e3'), n('159b'), n('7cd9')),
        s = n('5c96'),
        r = n('7a49'),
        c = {
          name: 'addPlay',
          props: { isDispaly: Number, index: Number, ids: [String, Number] },
          data: function () {
            return { myCreatPlays: [{ name: null, id: null }] }
          },
          computed: {},
          watch: {
            isDispaly: function () {
              this.index == this.isDispaly &&
                this.myCreatPlay(this.$store.state.login.account.id)
            },
          },
          methods: {
            playCreate: function () {
              this.$bus.$emit('create')
            },
            myCreatPlay: function (t) {
              var e = this
              Object(a['k'])(t, 1e3, 0)
                .then(function (t) {
                  console.log(t)
                  var n = []
                  t.playlist.forEach(function (t) {
                    !t.subscribed && n.push(t)
                  }),
                  (e.myCreatPlays = n)
                })
                .catch(function () {
                  e.num >= 3
                    ? Object(s['Notification'])({
                      title: '错误',
                      message: '歌单加载失败',
                      type: 'error',
                      duration: 2e3,
                      showClose: !1,
                    })
                    : (e.myCreatPlay(e.$store.state.login.account.id), e.num++)
                })
            },
            playAdd: function (t, e, n) {
              console.log(t, e, n),
              5 == n || 0 == n
                ? Object(r['g'])('add', t, e)
                  .then(function (t) {
                    console.log(t)
                  })
                  .catch()
                : 200 == n &&
                    Object(r['k'])(t, e)
                      .then(function (t) {
                        console.log(t)
                      })
                      .catch(function (t) {
                        console.log(t), console.log('当前视频不支持收藏到歌单')
                      })
            },
          },
          mounted: function () {},
        },
        u = c,
        l = (n('b8e8'), n('2877')),
        m = Object(l['a'])(u, i, o, !1, null, 'c86e93e2', null)
      e['a'] = m.exports
    },
    f70e: function (t, e, n) {
      t.exports = n.p + 'img/zhuanfa.0a17640c.svg'
    },
  },
])
//# sourceMappingURL=chunk-58c21cb7.764169d6.js.map
