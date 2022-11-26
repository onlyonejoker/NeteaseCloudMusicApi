;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-4e920da0'],
  {
    '1fc9': function (t, n, e) {
      t.exports = e.p + 'img/activeDianzan.13848c53.svg'
    },
    '3c56': function (t, n, e) {
      'use strict'
      e('4983')
    },
    4983: function (t, n, e) {},
    '81bc': function (t, n, e) {
      'use strict'
      e.r(n)
      var s = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            { staticClass: 'userHistory' },
            t._l(t.comment, function (t, n) {
              return e('comment', { key: n, attrs: { comments: t } })
            }),
            1,
          )
        },
        i = [],
        c = e('7cd9'),
        a = function () {
          var t = this,
            n = t.$createElement,
            s = t._self._c || n
          return s('div', { staticClass: 'comment' }, [
            s('div', { staticClass: 'comment-user' }, [
              s('img', {
                attrs: { src: t.comments.user.avatarUrl, alt: 'img' },
              }),
              s('div', [
                s(
                  'p',
                  [
                    s(
                      'router-link',
                      {
                        attrs: {
                          to: {
                            path: '/user/home',
                            query: { id: t.comments.user.userId },
                          },
                        },
                      },
                      [t._v(' ' + t._s(t.comments.user.nickname) + ' ')],
                    ),
                    s('span', { staticClass: 'type' }, [t._v(t._s(t.type))]),
                  ],
                  1,
                ),
                s('p', [t._v(t._s(this.$time(t.comments.time)))]),
              ]),
            ]),
            s('div', { staticClass: 'content-comment-user' }, [
              s('div', [t._v(t._s(t.comments.content))]),
            ]),
            s('div', { staticClass: 'resourceInfo' }, [
              s('img', {
                attrs: { src: t.resourceInfo.coverImgUrl, alt: 'coverImgUrl' },
                on: { click: t.linkPLay },
              }),
              s('p', [
                s('span', [
                  s('span', [t._v('歌单')]),
                  s('span', { on: { click: t.linkPLay } }, [
                    t._v(t._s(t.resourceInfo.name)),
                  ]),
                ]),
                s('span', { on: { click: t.linkUser } }, [
                  t._v('by' + t._s(t.comments.user.nickname)),
                ]),
              ]),
            ]),
            s('div', { staticClass: 'praise-comment-user' }, [
              s('div', [t._v('评论')]),
              s('div', { on: { click: t.zhuanfa } }, [
                s('img', { attrs: { src: e('f70e'), alt: 'zhuanfa' } }),
              ]),
              s('div', { on: { click: t.dianzanFn } }, [
                s('img', {
                  attrs: { src: t.dianzan[t.dianzanIndex], alt: 'dianzan' },
                }),
              ]),
            ]),
          ])
        },
        o = [],
        r = {
          name: 'comment',
          props: {
            comments: [Array, Object],
            type: {
              type: String,
              defauit: function () {
                return null
              },
            },
          },
          data: function () {
            return { dianzan: [e('e98f'), e('1fc9')], dianzanIndex: 0 }
          },
          computed: {
            resourceInfo: function () {
              if (this.comments) {
                var t = JSON.parse(this.comments.resourceInfo)
                return t
              }
              return null
            },
          },
          methods: {
            dianzanFn: function () {
              0 == this.dianzanIndex
                ? (this.dianzanIndex = 1)
                : (this.dianzanIndex = 0)
            },
            zhuanfa: function () {
              this.$bus.$emit(
                'zhuanfa',
                this.comments.id,
                this.comments.user.userId,
              )
            },
            linkPLay: function () {
              this.$router.push({
                path: '/play',
                query: { id: this.resourceInfo.id },
              })
            },
            linkUser: function () {
              this.$router.push({
                path: '/user/home',
                query: { id: this.resourceInfo.userId },
              })
            },
          },
          mounted: function () {
            console.log(this.comments)
          },
        },
        u = r,
        m = (e('3c56'), e('2877')),
        d = Object(m['a'])(u, a, o, !1, null, 'd8709976', null),
        f = d.exports,
        l = {
          name: 'userHistoryComment',
          data: function () {
            return { comment: [] }
          },
          components: { comment: f },
          computed: {
            uid: function () {
              return (
                this.$store.state.others ||
                this.$store.state.login.account.id ||
                null
              )
            },
          },
          methods: {
            userHistory: function () {
              var t = this
              Object(c['v'])(this.uid, 1e3)
                .then(function (n) {
                  t.comment = n.data.comments
                })
                .catch()
            },
          },
          created: function () {
            this.userHistory()
          },
        },
        h = l,
        p = Object(m['a'])(h, s, i, !1, null, 'd8c92fce', null)
      n['default'] = p.exports
    },
    e98f: function (t, n, e) {
      t.exports = e.p + 'img/dianzan.fef3625f.svg'
    },
    f70e: function (t, n, e) {
      t.exports = e.p + 'img/zhuanfa.0a17640c.svg'
    },
  },
])
//# sourceMappingURL=chunk-4e920da0.4cf00eed.js.map
