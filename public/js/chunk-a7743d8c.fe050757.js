;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-a7743d8c'],
  {
    '06c9': function (t, i, a) {
      'use strict'
      a.r(i)
      var r = function () {
          var t = this,
            i = t.$createElement,
            a = t._self._c || i
          return a(
            'div',
            { attrs: { id: 'artistDetail' } },
            [a('topbar'), a('artistDetail')],
            1,
          )
        },
        n = [],
        e = a('5580'),
        s = function () {
          var t = this,
            i = t.$createElement,
            a = t._self._c || i
          return a(
            'div',
            { staticClass: 'artistDetail' },
            [
              t.artistInfo
                ? a('div', { staticClass: 'artistInfo' }, [
                  a('img', {
                    directives: [
                      {
                        name: 'lazy',
                        rawName: 'v-lazy',
                        value: t.artistInfo.artist.cover,
                        expression: 'artistInfo.artist.cover',
                      },
                    ],
                    attrs: { alt: '' },
                  }),
                  a(
                    'div',
                    [
                      a('h1', [t._v(t._s(t.artistInfo.artist.name))]),
                      a('p', [
                        a('span', [
                          t._v(
                            '单曲数：' + t._s(t.artistInfo.artist.musicSize),
                          ),
                        ]),
                        a('span', [
                          t._v(
                            '专辑数：' + t._s(t.artistInfo.artist.albumSize),
                          ),
                        ]),
                        a('span', [
                          t._v('MV数：' + t._s(t.artistInfo.artist.mvSize)),
                        ]),
                      ]),
                      a('btn', {
                        class: { active: t.isActive },
                        attrs: { icon: 'el-icon-plus', text: t.sub() },
                        nativeOn: {
                          click: function (i) {
                            return t.followed.apply(null, arguments)
                          },
                        },
                      }),
                      a('btn', {
                        attrs: { icon: 'el-icon-user', text: '个人主页' },
                        nativeOn: {
                          click: function (i) {
                            return t.linkUser.apply(null, arguments)
                          },
                        },
                      }),
                    ],
                    1,
                  ),
                ])
                : t._e(),
              t.artistInfo
                ? a(
                  'nav',
                  [
                    a(
                      'router-link',
                      {
                        attrs: {
                          'active-class': 'activeNav',
                          to: 'album?id=' + t.uid,
                        },
                      },
                      [t._v(' 专辑 ')],
                    ),
                    a(
                      'router-link',
                      {
                        attrs: {
                          'active-class': 'activeNav',
                          to: 'mv?id=' + t.uid,
                        },
                      },
                      [t._v(' MV ')],
                    ),
                    a(
                      'router-link',
                      {
                        attrs: {
                          'active-class': 'activeNav',
                          to:
                              'info?id=' +
                              t.uid +
                              '&name=' +
                              t.artistInfo.artist.name,
                        },
                      },
                      [t._v(' 歌手信息 ')],
                    ),
                    a(
                      'router-link',
                      {
                        attrs: {
                          'active-class': 'activeNav',
                          to: 'similarity?id=' + t.uid,
                        },
                      },
                      [t._v(' 相似歌手 ')],
                    ),
                  ],
                  1,
                )
                : t._e(),
              a('router-view'),
            ],
            1,
          )
        },
        u = [],
        o = a('3e6f'),
        c = a('0cac'),
        l = {
          name: 'artistDetail',
          data: function () {
            return {
              artistInfo: null,
              artistDesc: null,
              isActive: !1,
              userid: null,
            }
          },
          computed: {
            uid: function () {
              return this.$route.query.id
            },
          },
          watch: {
            uid: function () {
              this.artistDetail()
            },
          },
          components: { btn: o['a'] },
          methods: {
            artistDetail: function () {
              var t = this
              Object(c['c'])(this.uid)
                .then(function (i) {
                  ;(t.artistInfo = i.data),
                  i.data.user &&
                      ((t.userid = i.data.user.userId),
                      (t.isActive = i.data.user.followed),
                      t.$store.commit('artistUid', t.userid))
                })
                .catch()
            },
            sub: function () {
              if (this.artistInfo) return this.isActive ? '已关注' : '关注'
            },
            followed: function () {
              var t = this,
                i = 0
              ;(i = this.isActive ? 0 : 1),
              Object(c['g'])(this.uid, i)
                .then(function () {
                  t.isActive = !t.isActive
                })
                .catch()
            },
            linkUser: function () {
              this.$router.push({
                path: '/user/home',
                query: { id: this.userid },
              })
            },
          },
          mounted: function () {
            this.artistDetail()
          },
        },
        d = l,
        f = (a('f7b9'), a('2877')),
        v = Object(f['a'])(d, s, u, !1, null, 'ccff44da', null),
        m = v.exports,
        p = { name: 'artist', components: { topbar: e['a'], artistDetail: m } },
        h = p,
        b = Object(f['a'])(h, r, n, !1, null, '54da4682', null)
      i['default'] = b.exports
    },
    '0cac': function (t, i, a) {
      'use strict'
      a.d(i, 'c', function () {
        return n
      }),
      a.d(i, 'b', function () {
        return e
      }),
      a.d(i, 'd', function () {
        return s
      }),
      a.d(i, 'g', function () {
        return u
      }),
      a.d(i, 'h', function () {
        return o
      }),
      a.d(i, 'f', function () {
        return c
      }),
      a.d(i, 'e', function () {
        return l
      }),
      a.d(i, 'a', function () {
        return d
      }),
      a.d(i, 'i', function () {
        return f
      })
      var r = a('be3b')
      function n(t) {
        return Object(r['a'])({
          url: 'artist/detail',
          method: 'post',
          params: { id: t },
        })
      }
      function e(t) {
        return Object(r['a'])({
          url: '/artist/desc',
          method: 'post',
          params: { id: t },
        })
      }
      function s(t, i, a, n, e) {
        return Object(r['a'])({
          url: '/artist/list',
          method: 'post',
          params: { limit: t, offset: i, initial: a, type: n, area: e },
        })
      }
      function u(t, i) {
        return Object(r['a'])({
          url: '/artist/sub',
          method: 'post',
          params: { id: t, t: i },
        })
      }
      function o(t) {
        return Object(r['a'])({
          url: '/artist/top/song',
          method: 'post',
          params: { id: t },
        })
      }
      function c(t, i, a, n) {
        return Object(r['a'])({
          url: '/artist/songs',
          method: 'post',
          params: { limit: a, offset: n, id: t, order: i },
        })
      }
      function l(t) {
        return Object(r['a'])({
          url: '/artist/mv',
          method: 'post',
          params: { id: t },
        })
      }
      function d(t, i, a) {
        return Object(r['a'])({
          url: '/artist/album',
          method: 'post',
          params: { id: t, limit: i, offset: a },
        })
      }
      function f(t) {
        return Object(r['a'])({
          url: '/simi/artist',
          method: 'post',
          params: { id: t },
        })
      }
    },
    7804: function (t, i, a) {},
    f7b9: function (t, i, a) {
      'use strict'
      a('7804')
    },
  },
])
//# sourceMappingURL=chunk-a7743d8c.fe050757.js.map
