;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-3f4a125d'],
  {
    '1e90': function (t, n, e) {
      'use strict'
      e('c638')
    },
    '1fc9': function (t, n, e) {
      t.exports = e.p + 'img/activeDianzan.13848c53.svg'
    },
    '392a': function (t, n, e) {
      'use strict'
      e('670f')
    },
    '3a81': function (t, n, e) {
      'use strict'
      e('c489')
    },
    '3c31': function (t, n, e) {
      'use strict'
      e.r(n)
      var i = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            { staticClass: 'albumDetail' },
            [
              e('topbar'),
              e('albumInfo', {
                attrs: {
                  info: t.info,
                  scroll: [this.$refs.albumComment],
                  dynamic: t.dynamic,
                  songs: t.songs,
                },
              }),
              t.songs && t.info
                ? e('div', { staticClass: 'album-content' }, [
                  e(
                    'div',
                    { staticClass: 'song' },
                    [
                      e('h2', [t._v('歌曲')]),
                      e('songItem', { attrs: { song: t.songs } }),
                    ],
                    1,
                  ),
                  e('div', { staticClass: 'description' }, [
                    e(
                      'div',
                      [
                        e('h2', [t._v('简介')]),
                        t._l(t.info.description.split('\n'), function (n, i) {
                          return e('p', { key: i }, [
                            t._v(' ' + t._s(n) + ' '),
                          ])
                        }),
                      ],
                      2,
                    ),
                  ]),
                ])
                : t._e(),
              e(
                'div',
                { ref: 'albumComment', staticClass: 'albumComment' },
                [
                  e('zycomment', {
                    attrs: {
                      resourceId: t.uid,
                      type: 3,
                      comments: t.comment,
                      hotComments: t.hotComments,
                    },
                  }),
                  e('page', { attrs: { more: t.more }, on: { page: t.page } }),
                ],
                1,
              ),
            ],
            1,
          )
        },
        a = [],
        o = (e('d3b7'), e('3ca3'), e('ddb0'), e('5580')),
        s = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return t.dynamic && t.info
            ? e('div', { staticClass: 'albumInfo' }, [
              e('div', { staticClass: 'album-img' }, [
                e('img', {
                  directives: [
                    {
                      name: 'lazy',
                      rawName: 'v-lazy',
                      value: t.info.picUrl,
                      expression: 'info.picUrl',
                    },
                  ],
                  attrs: { alt: 'picUrl' },
                }),
              ]),
              e('div', { staticClass: 'album-info' }, [
                e('h2', [t._v(t._s(t.info.name))]),
                e(
                  'p',
                  [
                    t._v(' 歌手： '),
                    t._l(t.info.artists, function (n, i) {
                      return e(
                        'span',
                        {
                          key: i,
                          on: {
                            click: function (e) {
                              return t.linkArtist(n.id)
                            },
                          },
                        },
                        [t._v(' ' + t._s(n.name) + ' ')],
                      )
                    }),
                  ],
                  2,
                ),
                e('p', [
                  t._v('发布时间：' + t._s(this.$time(t.info.publishTime))),
                ]),
                e(
                  'div',
                  [
                    e('btn', {
                      attrs: { icon: 'el-icon-video-play', text: '全部播放' },
                      nativeOn: {
                        click: function (n) {
                          return t.player.apply(null, arguments)
                        },
                      },
                    }),
                    e('btn', {
                      class: { sub: t.isSubState },
                      attrs: {
                        icon: 'el-icon-folder-add',
                        text: t.isSub + '(' + t.dynamic.subCount + ')',
                      },
                      nativeOn: {
                        click: function (n) {
                          return t.albumSub.apply(null, arguments)
                        },
                      },
                    }),
                    e('btn', {
                      attrs: {
                        icon: 'el-icon-paperclip',
                        text: '分享(' + t.dynamic.shareCount + ')',
                      },
                      nativeOn: {
                        click: function (n) {
                          return t.fenxiang.apply(null, arguments)
                        },
                      },
                    }),
                    e('btn', {
                      attrs: {
                        icon: 'el-icon-document',
                        text: '评论(' + t.dynamic.commentCount + ')',
                      },
                      nativeOn: {
                        click: function (n) {
                          return t.linkComment.apply(null, arguments)
                        },
                      },
                    }),
                  ],
                  1,
                ),
              ]),
            ])
            : t._e()
        },
        c = [],
        m = e('3e6f'),
        r = e('be3b')
      function l(t) {
        return Object(r['a'])({
          url: 'album',
          method: 'post',
          params: { id: t },
        })
      }
      function u(t, n) {
        return Object(r['a'])({
          url: '/album/sub',
          method: 'post',
          params: { id: t, t: n },
        })
      }
      function d(t) {
        return Object(r['a'])({
          url: '/album/detail/dynamic',
          method: 'post',
          params: { id: t },
        })
      }
      function p(t, n, e, i) {
        return Object(r['a'])({
          url: '/comment/album',
          method: 'post',
          params: { id: t, before: i, offset: e, limit: n },
        })
      }
      var f = {
          name: 'albumInfo',
          props: { info: Object, dynamic: Object, songs: Array, scroll: Array },
          components: { btn: m['a'] },
          data: function () {
            return { isSubState: !1, isSub: '收藏' }
          },
          watch: {
            dynamic: function (t) {
              ;(this.isSubState = t.isSub),
              t.isSub ? (this.isSub = '已收藏') : (this.isSub = '收藏')
            },
          },
          computed: {},
          methods: {
            fenxiang: function () {
              this.$bus.$emit('fenxiang', this.info.id, this.info.type)
            },
            player: function () {
              this.$store.commit('musicInfo', this.songs)
            },
            linkArtist: function (t) {
              this.$router.push({ path: '/artistDetail', query: { id: t } })
            },
            linkComment: function () {
              this.scroll[0].scrollIntoView({ behavior: 'smooth' })
            },
            albumSub: function () {
              this.isSubState
                ? (u(this.info.id, 0)
                  .then(function (t) {
                    console.log(t)
                  })
                  .catch(),
                (this.isSub = '收藏'),
                (this.isSubState = !1))
                : (u(this.info.id, 1)
                  .then(function (t) {
                    console.log(t)
                  })
                  .catch(),
                (this.isSub = '已收藏'),
                (this.isSubState = !0))
            },
          },
          mounted: function () {},
        },
        h = f,
        v = (e('3a81'), e('2877')),
        b = Object(v['a'])(h, s, c, !1, null, 'd5af53f6', null),
        y = b.exports,
        g = e('4182'),
        C = e('d3dc'),
        _ = e('8f5e'),
        k = {
          name: 'albumDetail',
          components: {
            topbar: o['a'],
            albumInfo: y,
            songItem: g['a'],
            page: C['a'],
            Zycomment: _['a'],
          },
          computed: {
            uid: function () {
              return this.$route.query.id
            },
          },
          data: function () {
            return {
              info: null,
              dynamic: null,
              songs: null,
              comment: null,
              hotComments: null,
              offset: 0,
              more: !1,
            }
          },
          methods: {
            album: function () {
              var t = this
              Promise.all([
                l(this.uid),
                d(this.uid),
                p(this.uid, 20, 20 * this.offset),
              ])
                .then(function (n) {
                  console.log(n),
                  (t.info = n[0].album),
                  (t.songs = n[0].songs),
                  (t.dynamic = n[1]),
                  (t.comment = n[2].comments),
                  (t.hotComments = n[2].hotComments),
                  (t.more = n[2].more)
                })
                .catch()
            },
            page: function (t) {
              var n = this
              ;(this.offset = t),
              p(this.uid, 20, 20 * this.offset)
                .then(function (t) {
                  console.log(t), (n.comment = t.comments), (n.more = t.more)
                })
                .catch()
            },
          },
          mounted: function () {
            this.album()
          },
        },
        x = k,
        I = (e('8228'), Object(v['a'])(x, i, a, !1, null, '2f4e9c0a', null))
      n['default'] = I.exports
    },
    '670f': function (t, n, e) {},
    8228: function (t, n, e) {
      'use strict'
      e('9e25')
    },
    '8f5e': function (t, n, e) {
      'use strict'
      var i = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            { staticClass: 'albumComment', attrs: { id: 'commentComponent' } },
            [
              e('div', [
                e('h2', [t._v('发表评论')]),
                e(
                  'div',
                  { staticClass: 'commentbox' },
                  [
                    e('el-input', {
                      attrs: {
                        type: 'textarea',
                        rows: 5,
                        placeholder: '请输入内容',
                        resize: 'none',
                      },
                      model: {
                        value: t.textarea,
                        callback: function (n) {
                          t.textarea = n
                        },
                        expression: 'textarea',
                      },
                    }),
                    e('div', [
                      e('span', { on: { click: t.commentSend } }, [
                        t._v('发送'),
                      ]),
                      e('span', { on: { click: t.commentCancel } }, [
                        t._v('取消'),
                      ]),
                    ]),
                  ],
                  1,
                ),
              ]),
              e(
                'div',
                [
                  e('h2', [t._v('热评')]),
                  t._l(t.hotComments, function (n, i) {
                    return e('comments', {
                      key: i,
                      attrs: { comment: n, zyId: t.resourceId, type: t.type },
                    })
                  }),
                ],
                2,
              ),
              e(
                'div',
                [
                  e('h2', [t._v('全部评论')]),
                  t._l(t.comments, function (n, i) {
                    return e('comments', {
                      key: i,
                      attrs: { comment: n, zyId: t.resourceId, type: t.type },
                    })
                  }),
                ],
                2,
              ),
            ],
          )
        },
        a = [],
        o =
          (e('a9e3'),
          function () {
            var t = this,
              n = t.$createElement,
              i = t._self._c || n
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
                          click: function (n) {
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
                          click: function (n) {
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
                          click: function (n) {
                            return t.zhuanfa(
                              t.comment.commentId,
                              t.comment.user.userId,
                            )
                          },
                        },
                      },
                      [
                        i('img', {
                          attrs: { src: e('f70e'), alt: 'zhuanfa' },
                        }),
                      ],
                    ),
                    i(
                      'div',
                      {
                        on: {
                          click: function (n) {
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
                            callback: function (n) {
                              t.textarea = n
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
                            t._l(t.beReplied, function (n, a) {
                              return i('div', { key: a }, [
                                i('div', { staticClass: 'comment-user' }, [
                                  i('img', {
                                    directives: [
                                      {
                                        name: 'lazy',
                                        rawName: 'v-lazy',
                                        value: n.user.avatarUrl,
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
                                          ' ' + t._s(n.user.nickname) + ' ',
                                        ),
                                      ],
                                    ),
                                    i('p', [t._v(t._s(n.time))]),
                                  ]),
                                ]),
                                i(
                                  'div',
                                  { staticClass: 'content-comment-user' },
                                  [i('p', [t._v(t._s(n.content))])],
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
                                            click: function (e) {
                                              return t.conmmentDisplayFn(
                                                n.commentId,
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
                                            click: function (e) {
                                              return t.zhuanfa(
                                                n.beRepliedCommentId,
                                              )
                                            },
                                          },
                                        },
                                        [
                                          i('img', {
                                            attrs: {
                                              src: e('f70e'),
                                              alt: 'zhuanfa',
                                            },
                                          }),
                                        ],
                                      ),
                                      i(
                                        'div',
                                        {
                                          on: {
                                            click: function (e) {
                                              return t.replydianzanFn(
                                                a,
                                                n.commentId,
                                              )
                                            },
                                          },
                                        },
                                        [
                                          i('img', {
                                            attrs: {
                                              src:
                                                    t.reply == a
                                                      ? t.dianzan[t.replyI]
                                                      : t.dianzan[0],
                                              alt: 'dianzan',
                                            },
                                          }),
                                          i('span', [
                                            t._v(t._s(n.likedCount)),
                                          ]),
                                        ],
                                      ),
                                    ]),
                                    t.commentDisplay == n.commentId
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
                                              callback: function (n) {
                                                t.textarea = n
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
                                                    return t.commentSend(
                                                      n.commentId,
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
        c = (e('159b'), e('be3b'))
      function m(t, n, e, i) {
        return Object(c['a'])({
          url: '/comment/like',
          method: 'post',
          params: { id: t, cid: n, t: e, type: i },
        })
      }
      function r(t, n, e, i, a) {
        return Object(c['a'])({
          url: '/comment/floor',
          method: 'post',
          params: { parentCommentId: t, id: n, type: e, limit: i, time: a },
        })
      }
      function l(t, n, e, i, a) {
        return Object(c['a'])({
          url: '/comment',
          method: 'post',
          params: { t: t, type: n, id: e, content: i, commentId: a },
        })
      }
      var u = e('d3dc'),
        d = {
          name: 'commentAlbum',
          props: { comment: Object, zyId: [Number, String], type: Number },
          components: { Page: u['a'] },
          data: function () {
            return {
              dianzan: [e('e98f'), e('1fc9')],
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
              m(this.zyId, t, this.dianzanIndex, this.type)
            },
            commentFloor: function () {
              var t = this
              r(this.comment.commentId, this.zyId, this.type, 20, this.time)
                .then(function (n) {
                  console.log(n),
                  (t.beReplied = n.data.comments),
                  t.beReplied.forEach(function (n) {
                    n.time = t.$time(n.time)
                  }),
                  (t.time = n.data.comments.time),
                  (t.more = n.data.comments.hasMore)
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
              m(this.zyId, t, this.dianzanIndex, this.type)
            },
            replydianzanFn: function (t, n) {
              this.reply === t &&
                (0 == this.replyI ? (this.replyI = 1) : (this.replyI = 0),
                m(this.zyId, n, this.replyI, this.type))
            },
            zhuanfa: function (t, n) {
              this.$bus.$emit('zhuanfa', t, n)
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
        p = d,
        f = (e('93bd'), e('2877')),
        h = Object(f['a'])(p, o, s, !1, null, '76714a8e', null),
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
        g = (e('392a'), Object(f['a'])(y, i, a, !1, null, '70e9625d', null))
      n['a'] = g.exports
    },
    '93bd': function (t, n, e) {
      'use strict'
      e('a178')
    },
    '9e25': function (t, n, e) {},
    a178: function (t, n, e) {},
    c489: function (t, n, e) {},
    c638: function (t, n, e) {},
    d3dc: function (t, n, e) {
      'use strict'
      var i = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
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
        a = [],
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
        s = o,
        c = (e('1e90'), e('2877')),
        m = Object(c['a'])(s, i, a, !1, null, 'ab6472ac', null)
      n['a'] = m.exports
    },
    e98f: function (t, n, e) {
      t.exports = e.p + 'img/dianzan.fef3625f.svg'
    },
    f70e: function (t, n, e) {
      t.exports = e.p + 'img/zhuanfa.0a17640c.svg'
    },
  },
])
//# sourceMappingURL=chunk-3f4a125d.7053738f.js.map
