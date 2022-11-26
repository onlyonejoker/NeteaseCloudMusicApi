;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-e43f91d4'],
  {
    '0cac': function (t, n, s) {
      'use strict'
      s.d(n, 'c', function () {
        return o
      }),
      s.d(n, 'b', function () {
        return i
      }),
      s.d(n, 'd', function () {
        return r
      }),
      s.d(n, 'g', function () {
        return a
      }),
      s.d(n, 'h', function () {
        return c
      }),
      s.d(n, 'f', function () {
        return u
      }),
      s.d(n, 'e', function () {
        return f
      }),
      s.d(n, 'a', function () {
        return l
      }),
      s.d(n, 'i', function () {
        return d
      })
      var e = s('be3b')
      function o(t) {
        return Object(e['a'])({
          url: 'artist/detail',
          method: 'post',
          params: { id: t },
        })
      }
      function i(t) {
        return Object(e['a'])({
          url: '/artist/desc',
          method: 'post',
          params: { id: t },
        })
      }
      function r(t, n, s, o, i) {
        return Object(e['a'])({
          url: '/artist/list',
          method: 'post',
          params: { limit: t, offset: n, initial: s, type: o, area: i },
        })
      }
      function a(t, n) {
        return Object(e['a'])({
          url: '/artist/sub',
          method: 'post',
          params: { id: t, t: n },
        })
      }
      function c(t) {
        return Object(e['a'])({
          url: '/artist/top/song',
          method: 'post',
          params: { id: t },
        })
      }
      function u(t, n, s, o) {
        return Object(e['a'])({
          url: '/artist/songs',
          method: 'post',
          params: { limit: s, offset: o, id: t, order: n },
        })
      }
      function f(t) {
        return Object(e['a'])({
          url: '/artist/mv',
          method: 'post',
          params: { id: t },
        })
      }
      function l(t, n, s) {
        return Object(e['a'])({
          url: '/artist/album',
          method: 'post',
          params: { id: t, limit: n, offset: s },
        })
      }
      function d(t) {
        return Object(e['a'])({
          url: '/simi/artist',
          method: 'post',
          params: { id: t },
        })
      }
    },
    '1e90': function (t, n, s) {
      'use strict'
      s('c638')
    },
    '33da': function (t, n, s) {
      'use strict'
      s('90a9')
    },
    '448a': function (t, n, s) {
      'use strict'
      s.r(n)
      var e = function () {
          var t = this,
            n = t.$createElement,
            s = t._self._c || n
          return s(
            'div',
            { staticClass: 'songUser' },
            [
              t._l(t.artistList, function (t, n) {
                return s('focusSongList', {
                  key: n,
                  attrs: { focusUserInfo: t },
                })
              }),
              s('page', { attrs: { more: t.more }, on: { page: t.pages } }),
            ],
            2,
          )
        },
        o = [],
        i = (s('a434'), s('7cd9')),
        r = function () {
          var t = this,
            n = t.$createElement,
            s = t._self._c || n
          return s(
            'div',
            { staticClass: 'focusUserList' },
            [
              s('img', {
                directives: [
                  {
                    name: 'lazy',
                    rawName: 'v-lazy',
                    value:
                      t.focusUserInfo.avatarUrl || t.focusUserInfo.img1v1Url,
                    expression:
                      'focusUserInfo.avatarUrl || focusUserInfo.img1v1Url',
                  },
                ],
                attrs: { alt: 'focusUserListImg' },
                on: {
                  click: function (n) {
                    return t.link(t.uid)
                  },
                },
              }),
              s(
                'p',
                {
                  on: {
                    click: function (n) {
                      return t.link(t.artist.user.userId)
                    },
                  },
                },
                [t._v(t._s(t.focusUserInfo.name))],
              ),
              s('p', { staticClass: 'followeds' }, [
                t._v('专辑：' + t._s(t.focusUserInfo.albumSize)),
              ]),
              s('p', { staticClass: 'followeds' }, [
                t._v('MV：' + t._s(t.focusUserInfo.mvSize)),
              ]),
              s('btn', {
                class: { isFollow: '已关注' == t.followInfo },
                attrs: { icon: 'el-icon-plus', text: t.followInfo },
                nativeOn: {
                  click: function (n) {
                    return t.followUser(t.artist.user.userId)
                  },
                },
              }),
            ],
            1,
          )
        },
        a = [],
        c = s('0cac'),
        u = s('3e6f'),
        f = {
          name: 'focusUserList',
          props: { focusUserInfo: [Object, Array] },
          data: function () {
            return { followInfo: '关注', uid: null, artist: null }
          },
          components: { btn: u['a'] },
          methods: {
            followUser: function (t) {
              var n = this,
                s = 0
              ;(s = '关注' == this.followInfo ? 1 : 2),
              Object(i['d'])(t, s)
                .then(function (t) {
                  console.log(t),
                  '关注' == n.followInfo
                    ? (n.followInfo = '已关注')
                    : (n.followInfo = '关注')
                })
                .catch()
            },
            link: function (t) {
              this.$router.push({ path: '/user/home', query: { id: t } })
            },
            artistDetail: function () {
              var t = this
              Object(c['c'])(this.focusUserInfo.id)
                .then(function (n) {
                  ;(t.uid = n.data.user.userId),
                  (t.artist = n.data),
                  n.data.user.followed
                    ? (t.followInfo = '已关注')
                    : (t.followInfo = '关注')
                })
                .catch()
            },
          },
          mounted: function () {
            this.artistDetail()
          },
        },
        l = f,
        d = (s('33da'), s('2877')),
        p = Object(d['a'])(l, r, a, !1, null, '69941d54', null),
        m = p.exports,
        h = s('d3dc'),
        g = {
          name: 'fansUser',
          data: function () {
            return { artistList: [], page: 0, more: !1 }
          },
          computed: {
            uid: function () {
              return this.$store.state.login.account.id || null
            },
          },
          components: { focusSongList: m, page: h['a'] },
          watch: {
            page: function () {
              this.songLists()
            },
          },
          methods: {
            pages: function (t) {
              this.page = t
            },
            songLists: function () {
              var t = this
              Object(i['a'])()
                .then(function (n) {
                  console.log(n),
                  t.artistList.splice(0, t.artistList.length),
                  (t.artistList = n.data),
                  (t.more = n.hasMore)
                })
                .catch()
            },
          },
          mounted: function () {
            this.songLists()
          },
        },
        b = g,
        v = (s('46ba'), Object(d['a'])(b, e, o, !1, null, 'f90b987c', null))
      n['default'] = v.exports
    },
    '46ba': function (t, n, s) {
      'use strict'
      s('bad2')
    },
    '90a9': function (t, n, s) {},
    bad2: function (t, n, s) {},
    c638: function (t, n, s) {},
    d3dc: function (t, n, s) {
      'use strict'
      var e = function () {
          var t = this,
            n = t.$createElement,
            s = t._self._c || n
          return s('div', { staticClass: 'block' }, [
            s('span', {
              staticClass: 'el-icon-arrow-left',
              on: { click: t.reducePage },
            }),
            s('span', [t._v(t._s(t.page))]),
            s('span', {
              ref: 'pageCCC',
              staticClass: 'el-icon-arrow-right',
              on: { click: t.addPage },
            }),
          ])
        },
        o = [],
        i = {
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
        r = i,
        a = (s('1e90'), s('2877')),
        c = Object(a['a'])(r, e, o, !1, null, 'ab6472ac', null)
      n['a'] = c.exports
    },
  },
])
//# sourceMappingURL=chunk-e43f91d4.794e8a8a.js.map
