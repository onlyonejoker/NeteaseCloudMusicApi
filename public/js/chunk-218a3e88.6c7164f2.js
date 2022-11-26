;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-218a3e88'],
  {
    '0cb2': function (t, e, n) {
      var i = n('7b0b'),
        a = Math.floor,
        c = ''.replace,
        o = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        s = /\$([$&'`]|\d{1,2})/g
      t.exports = function (t, e, n, r, l, u) {
        var m = n + t.length,
          d = r.length,
          f = s
        return (
          void 0 !== l && ((l = i(l)), (f = o)),
          c.call(u, f, function (i, c) {
            var o
            switch (c.charAt(0)) {
              case '$':
                return '$'
              case '&':
                return t
              case '`':
                return e.slice(0, n)
              case "'":
                return e.slice(m)
              case '<':
                o = l[c.slice(1, -1)]
                break
              default:
                var s = +c
                if (0 === s) return i
                if (s > d) {
                  var u = a(s / 10)
                  return 0 === u
                    ? i
                    : u <= d
                      ? void 0 === r[u - 1]
                        ? c.charAt(1)
                        : r[u - 1] + c.charAt(1)
                      : i
                }
                o = r[s - 1]
            }
            return void 0 === o ? '' : o
          })
        )
      }
    },
    '1e90': function (t, e, n) {
      'use strict'
      n('c638')
    },
    '1fc9': function (t, e, n) {
      t.exports = n.p + 'img/activeDianzan.13848c53.svg'
    },
    2340: function (t, e, n) {
      'use strict'
      n('e940')
    },
    3169: function (t, e, n) {},
    '392a': function (t, e, n) {
      'use strict'
      n('670f')
    },
    5319: function (t, e, n) {
      'use strict'
      var i = n('d784'),
        a = n('d039'),
        c = n('825a'),
        o = n('a691'),
        s = n('50c4'),
        r = n('577e'),
        l = n('1d80'),
        u = n('8aa5'),
        m = n('0cb2'),
        d = n('14c3'),
        f = n('b622'),
        p = f('replace'),
        h = Math.max,
        v = Math.min,
        y = function (t) {
          return void 0 === t ? t : String(t)
        },
        b = (function () {
          return '$0' === 'a'.replace(/./, '$0')
        })(),
        g = (function () {
          return !!/./[p] && '' === /./[p]('a', '$0')
        })(),
        _ = !a(function () {
          var t = /./
          return (
            (t.exec = function () {
              var t = []
              return (t.groups = { a: '7' }), t
            }),
            '7' !== ''.replace(t, '$<a>')
          )
        })
      i(
        'replace',
        function (t, e, n) {
          var i = g ? '$' : '$0'
          return [
            function (t, n) {
              var i = l(this),
                a = void 0 == t ? void 0 : t[p]
              return void 0 !== a ? a.call(t, i, n) : e.call(r(i), t, n)
            },
            function (t, a) {
              var l = c(this),
                f = r(t)
              if (
                'string' === typeof a &&
                -1 === a.indexOf(i) &&
                -1 === a.indexOf('$<')
              ) {
                var p = n(e, l, f, a)
                if (p.done) return p.value
              }
              var b = 'function' === typeof a
              b || (a = r(a))
              var g = l.global
              if (g) {
                var _ = l.unicode
                l.lastIndex = 0
              }
              var x = []
              while (1) {
                var C = d(l, f)
                if (null === C) break
                if ((x.push(C), !g)) break
                var k = r(C[0])
                '' === k && (l.lastIndex = u(f, s(l.lastIndex), _))
              }
              for (var I = '', z = 0, $ = 0; $ < x.length; $++) {
                C = x[$]
                for (
                  var N = r(C[0]),
                    O = h(v(o(C.index), f.length), 0),
                    w = [],
                    A = 1;
                  A < C.length;
                  A++
                )
                  w.push(y(C[A]))
                var E = C.groups
                if (b) {
                  var D = [N].concat(w, O, f)
                  void 0 !== E && D.push(E)
                  var S = r(a.apply(void 0, D))
                } else S = m(N, f, O, w, E, a)
                O >= z && ((I += f.slice(z, O) + S), (z = O + N.length))
              }
              return I + f.slice(z)
            },
          ]
        },
        !_ || !b || g,
      )
    },
    5899: function (t, e) {
      t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff'
    },
    '58a8': function (t, e, n) {
      var i = n('1d80'),
        a = n('577e'),
        c = n('5899'),
        o = '[' + c + ']',
        s = RegExp('^' + o + o + '*'),
        r = RegExp(o + o + '*$'),
        l = function (t) {
          return function (e) {
            var n = a(i(e))
            return (
              1 & t && (n = n.replace(s, '')),
              2 & t && (n = n.replace(r, '')),
              n
            )
          }
        }
      t.exports = { start: l(1), end: l(2), trim: l(3) }
    },
    '670f': function (t, e, n) {},
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
        a = [],
        c =
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
                            t._l(t.beReplied, function (e, a) {
                              return i('div', { key: a }, [
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
                                                a,
                                                e.commentId,
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
        o = [],
        s = (n('159b'), n('be3b'))
      function r(t, e, n, i) {
        return Object(s['a'])({
          url: '/comment/like',
          method: 'post',
          params: { id: t, cid: e, t: n, type: i },
        })
      }
      function l(t, e, n, i, a) {
        return Object(s['a'])({
          url: '/comment/floor',
          method: 'post',
          params: { parentCommentId: t, id: e, type: n, limit: i, time: a },
        })
      }
      function u(t, e, n, i, a) {
        return Object(s['a'])({
          url: '/comment',
          method: 'post',
          params: { t: t, type: e, id: n, content: i, commentId: a },
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
              r(this.zyId, t, this.dianzanIndex, this.type)
            },
            commentFloor: function () {
              var t = this
              l(this.comment.commentId, this.zyId, this.type, 20, this.time)
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
              r(this.zyId, t, this.dianzanIndex, this.type)
            },
            replydianzanFn: function (t, e) {
              this.reply === t &&
                (0 == this.replyI ? (this.replyI = 1) : (this.replyI = 0),
                r(this.zyId, e, this.replyI, this.type))
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
              u(2, this.type, this.zyId, this.textarea, t).then().catch(),
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
        h = Object(p['a'])(f, c, o, !1, null, '76714a8e', null),
        v = h.exports,
        y = {
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
              u(1, this.type, this.resourceId, this.textarea)
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
        b = y,
        g = (n('392a'), Object(p['a'])(b, i, a, !1, null, '70e9625d', null))
      e['a'] = g.exports
    },
    '93bd': function (t, e, n) {
      'use strict'
      n('a178')
    },
    a178: function (t, e, n) {},
    a9e3: function (t, e, n) {
      'use strict'
      var i = n('83ab'),
        a = n('da84'),
        c = n('94ca'),
        o = n('6eeb'),
        s = n('5135'),
        r = n('c6b6'),
        l = n('7156'),
        u = n('d9b5'),
        m = n('c04e'),
        d = n('d039'),
        f = n('7c73'),
        p = n('241c').f,
        h = n('06cf').f,
        v = n('9bf2').f,
        y = n('58a8').trim,
        b = 'Number',
        g = a[b],
        _ = g.prototype,
        x = r(f(_)) == b,
        C = function (t) {
          if (u(t)) throw TypeError('Cannot convert a Symbol value to a number')
          var e,
            n,
            i,
            a,
            c,
            o,
            s,
            r,
            l = m(t, 'number')
          if ('string' == typeof l && l.length > 2)
            if (((l = y(l)), (e = l.charCodeAt(0)), 43 === e || 45 === e)) {
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
              for (c = l.slice(2), o = c.length, s = 0; s < o; s++)
                if (((r = c.charCodeAt(s)), r < 48 || r > a)) return NaN
              return parseInt(c, i)
            }
          return +l
        }
      if (c(b, !g(' 0o1') || !g('0b1') || g('+0x1'))) {
        for (
          var k,
            I = function (t) {
              var e = arguments.length < 1 ? 0 : t,
                n = this
              return n instanceof I &&
                (x
                  ? d(function () {
                    _.valueOf.call(n)
                  })
                  : r(n) != b)
                ? l(new g(C(e)), n, I)
                : C(e)
            },
            z = i
              ? p(g)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
                ',',
              ),
            $ = 0;
          z.length > $;
          $++
        )
          s(g, (k = z[$])) && !s(I, k) && v(I, k, h(g, k))
          ;(I.prototype = _), (_.constructor = I), o(a, b, I)
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
        a = [],
        c = {
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
        o = c,
        s = (n('1e90'), n('2877')),
        r = Object(s['a'])(o, i, a, !1, null, 'ab6472ac', null)
      e['a'] = r.exports
    },
    ddf5: function (t, e, n) {
      'use strict'
      n.r(e)
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'songDetail' },
            [
              n('topbar'),
              t.info
                ? n('div', { staticClass: 'info' }, [
                  n('div', { staticClass: 'info-img' }, [
                    n('img', {
                      directives: [
                        {
                          name: 'lazy',
                          rawName: 'v-lazy',
                          value: t.info.al.picUrl,
                          expression: 'info.al.picUrl',
                        },
                      ],
                      attrs: { alt: 'picUrl' },
                    }),
                  ]),
                  n('div', { staticClass: 'info-info' }, [
                    n('h2', [t._v(t._s(t.info.name))]),
                    n('p', [
                      n('i', { staticClass: 'el-icon-user' }),
                      n(
                        'span',
                        {
                          on: {
                            click: function (e) {
                              return t.linkArtist(t.info.ar[0].id)
                            },
                          },
                        },
                        [t._v(t._s(t.info.ar[0].name))],
                      ),
                    ]),
                    n('div', { staticClass: 'info-from' }, [
                      n('p', { on: { click: t.linkAlbum } }, [
                        t._v(' 专辑：'),
                        n('span', [t._v(t._s(t.info.al.name))]),
                      ]),
                      n('p', [
                        t._v(
                          ' 发布时间：' +
                              t._s(
                                0 == t.info.publishTime
                                  ? ''
                                  : this.$time(t.info.publishTime),
                              ) +
                              ' ',
                        ),
                      ]),
                    ]),
                    n(
                      'div',
                      { staticClass: 'info-btn' },
                      [
                        n('btn', {
                          attrs: { icon: 'el-icon-video-play', text: '播放' },
                          nativeOn: {
                            click: function (e) {
                              return t.player.apply(null, arguments)
                            },
                          },
                        }),
                        n('btn', {
                          attrs: { icon: 'el-icon-folder-add', text: '收藏' },
                          nativeOn: {
                            click: function (e) {
                              return t.albumSub.apply(null, arguments)
                            },
                          },
                        }),
                        n('btn', {
                          attrs: { icon: 'el-icon-paperclip', text: '分享' },
                          nativeOn: {
                            click: function (e) {
                              return t.fenxiang.apply(null, arguments)
                            },
                          },
                        }),
                        n('btn', {
                          attrs: { icon: 'el-icon-document', text: '评论' },
                          nativeOn: {
                            click: function (e) {
                              return t.linkComment.apply(null, arguments)
                            },
                          },
                        }),
                        n('add-play', {
                          attrs: { isDispaly: t.index, index: 1, ids: t.uid },
                        }),
                      ],
                      1,
                    ),
                  ]),
                ])
                : t._e(),
              t.lyric
                ? n(
                  'div',
                  { staticClass: 'lyric' },
                  [
                    n('h2', [t._v('歌词')]),
                    t._l(t.lyric, function (e, i) {
                      return n('p', { key: i }, [t._v(' ' + t._s(e) + ' ')])
                    }),
                  ],
                  2,
                )
                : t._e(),
              t.comment
                ? n(
                  'div',
                  { staticClass: 'comment' },
                  [
                    n('zycomment', {
                      attrs: {
                        resourceId: t.uid,
                        type: 0,
                        hotComments: t.comment.hotComments,
                        comments: t.comment.comments,
                      },
                    }),
                  ],
                  1,
                )
                : t._e(),
            ],
            1,
          )
        },
        a = [],
        c =
          (n('159b'),
          n('ac1f'),
          n('1276'),
          n('5319'),
          n('d3b7'),
          n('3ca3'),
          n('ddb0'),
          n('3e6f')),
        o = n('8f5e'),
        s = n('5580'),
        r = n('2881'),
        l = n('f6e8'),
        u = {
          components: {
            topbar: s['a'],
            Btn: c['a'],
            Zycomment: o['a'],
            AddPlay: l['a'],
          },
          name: 'songDetail',
          computed: {
            uid: function () {
              return this.$route.query.id
            },
          },
          data: function () {
            return { info: null, comment: null, lyric: null, index: 0 }
          },
          methods: {
            fenxiang: function () {
              this.$bus.$emit('fenxiang', this.uid, 'song')
            },
            player: function () {
              this.$store.commit('musicInfo', this.info)
            },
            linkArtist: function (t) {
              this.$router.push({ path: '/artistDetail', query: { id: t } })
            },
            linkComment: function () {
              document
                .querySelector('.comment')
                .scrollIntoView({ behavior: 'smooth' })
            },
            albumSub: function () {
              0 == this.index ? (this.index = 1) : (this.index = 0)
            },
            linkAlbum: function () {
              this.$router.push({
                path: '/albumDetail',
                query: { id: this.info.al.id },
              })
            },
            lyricData: function (t) {
              var e = []
              t.split('\n').forEach(function (t) {
                var n = t.split('[')[1]
                n && ((n = n.split(']')[1]), (n = n.replace(/\s*/g, ''))),
                e.push(n)
              }),
              (this.lyric = e)
            },
            init: function () {
              var t = this
              Promise.all([
                Object(r['b'])(this.uid),
                Object(r['d'])(this.uid),
                Object(r['c'])(this.uid),
              ])
                .then(function (e) {
                  console.log(e),
                  Object.hasOwnProperty.call(e[2], 'nolyric')
                    ? (t.lyric = ['纯音乐，没有歌词'])
                    : t.lyricData(e[2].lrc.lyric),
                  (t.info = e[1].songs[0]),
                  (t.comment = e[0])
                })
                .catch(function (t) {
                  console.log(t)
                })
            },
          },
          created: function () {
            this.init()
          },
        },
        m = u,
        d = (n('2340'), n('2877')),
        f = Object(d['a'])(m, i, a, !1, null, '69a6600a', null)
      e['default'] = f.exports
    },
    e940: function (t, e, n) {},
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
        a = [],
        c = (n('a9e3'), n('159b'), n('7cd9')),
        o = n('5c96'),
        s = n('7a49'),
        r = {
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
              Object(c['k'])(t, 1e3, 0)
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
                    ? Object(o['Notification'])({
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
                ? Object(s['g'])('add', t, e)
                  .then(function (t) {
                    console.log(t)
                  })
                  .catch()
                : 200 == n &&
                    Object(s['k'])(t, e)
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
        l = r,
        u = (n('b8e8'), n('2877')),
        m = Object(u['a'])(l, i, a, !1, null, 'c86e93e2', null)
      e['a'] = m.exports
    },
    f70e: function (t, e, n) {
      t.exports = n.p + 'img/zhuanfa.0a17640c.svg'
    },
  },
])
//# sourceMappingURL=chunk-218a3e88.6c7164f2.js.map
