;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-15c541da'],
  {
    '1fda': function (o, t, e) {},
    '693a': function (o, t, e) {},
    '7dd9': function (o, t, e) {
      'use strict'
      e('693a')
    },
    e626: function (o, t, e) {
      'use strict'
      e('1fda')
    },
    f315: function (o, t, e) {
      'use strict'
      e.r(t)
      var s = function () {
          var o = this,
            t = o.$createElement,
            e = o._self._c || t
          return e(
            'div',
            { staticClass: 'userHome' },
            [e('info'), e('router-view')],
            1,
          )
        },
        n = [],
        i = function () {
          var o = this,
            t = o.$createElement,
            e = o._self._c || t
          return e(
            'div',
            {
              staticClass: 'userInfo',
              style: {
                backgroundImage: 'url(' + o.info.profile.backgroundUrl + ')',
              },
            },
            [
              e('div', { staticClass: 'profile' }, [
                e('p', { staticClass: 'user-img' }, [
                  e('img', {
                    directives: [
                      {
                        name: 'lazy',
                        rawName: 'v-lazy',
                        value: o.info.profile.avatarUrl,
                        expression: 'info.profile.avatarUrl',
                      },
                    ],
                    attrs: { alt: 'userimg' },
                  }),
                ]),
                e('p', { staticClass: 'user-name' }, [
                  e('span', [o._v(' ' + o._s(o.info.profile.nickname) + ' ')]),
                  e('i', [o._v('LV' + o._s(o.info.level) + ' ')]),
                ]),
                e('div', { staticClass: 'user-sub' }, [
                  e('p', [
                    e(
                      'span',
                      [
                        e('router-link', { attrs: { to: '/user/home/fans' } }, [
                          o._v(
                            ' ' +
                              o._s(
                                o.info.profile.followeds > 1e4
                                  ? Math.floor(o.info.profile.followeds / 100) /
                                      100 +
                                      '万'
                                  : o.info.profile.followeds,
                              ) +
                              ' ',
                          ),
                        ]),
                      ],
                      1,
                    ),
                    e('span', [o._v('粉丝')]),
                  ]),
                  e('p', [
                    e(
                      'span',
                      [
                        e(
                          'router-link',
                          { attrs: { to: '/user/home/focus' } },
                          [
                            o._v(
                              ' ' +
                                o._s(
                                  o.info.profile.follows > 1e4
                                    ? Math.floor(o.info.profile.follows / 100) /
                                        100 +
                                        '万'
                                    : o.info.profile.follows,
                                ) +
                                ' ',
                            ),
                          ],
                        ),
                      ],
                      1,
                    ),
                    e('span', [o._v('关注')]),
                  ]),
                  e('p', [
                    e(
                      'span',
                      [
                        e(
                          'router-link',
                          { attrs: { to: '/user/home/event' } },
                          [
                            o._v(
                              ' ' +
                                o._s(
                                  o.info.profile.eventCount > 1e4
                                    ? Math.floor(
                                      o.info.profile.eventCount / 100,
                                    ) /
                                        100 +
                                        '万'
                                    : o.info.profile.eventCount,
                                ) +
                                ' ',
                            ),
                          ],
                        ),
                      ],
                      1,
                    ),
                    e('span', [o._v('动态')]),
                  ]),
                ]),
              ]),
              e(
                'nav',
                [
                  e(
                    'router-link',
                    {
                      attrs: {
                        'active-class': 'active',
                        to: '/user/home/like',
                      },
                    },
                    [o._v(' 我喜欢 ')],
                  ),
                  e(
                    'router-link',
                    {
                      attrs: {
                        'active-class': 'active',
                        to: '/user/home/myPlay',
                      },
                    },
                    [o._v(' 我的歌单 ')],
                  ),
                  e(
                    'router-link',
                    {
                      attrs: {
                        'active-class': 'active',
                        to: '/user/home/focus',
                      },
                    },
                    [o._v(' 关注 ')],
                  ),
                  e(
                    'router-link',
                    {
                      attrs: {
                        'active-class': 'active',
                        to: '/user/home/fans',
                      },
                    },
                    [o._v(' 粉丝 ')],
                  ),
                  e(
                    'router-link',
                    {
                      attrs: {
                        'active-class': 'active',
                        to: '/user/home/event',
                      },
                    },
                    [o._v(' 动态 ')],
                  ),
                  o.uid != this.$store.state.login.account.id
                    ? e('btn', {
                      class: { isFollow: '已关注' == o.followInfo },
                      attrs: { icon: 'el-icon-plus', text: o.followInfo },
                      nativeOn: {
                        click: function (t) {
                          return o.followUser(o.uid)
                        },
                      },
                    })
                    : o._e(),
                  e('span', [o._v(o._s(o.city))]),
                ],
                1,
              ),
            ],
          )
        },
        r = [],
        l = e('7cd9'),
        a = e('3e6f'),
        f = {
          name: 'info',
          data: function () {
            return {
              city: '',
              info: {
                profile: {
                  backgroundUrl: null,
                  avatarUrl: null,
                  eventCount: null,
                  followeds: null,
                },
              },
              followInfo: '关注',
            }
          },
          components: { btn: a['a'] },
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
            details: function () {
              var o = this
              Object(l['c'])(this.uid).then(function (t) {
                console.log(t),
                (o.info = t),
                t.profile.followed
                  ? (o.followInfo = '已关注')
                  : (o.followInfo = '关注')
              })
            },
            followUser: function (o) {
              var t = this,
                e = 0
              ;(e = '关注' == this.followInfo ? 1 : 2),
              Object(l['d'])(o, e)
                .then(function (o) {
                  console.log(o),
                  '关注' == t.followInfo
                    ? (t.followInfo = '已关注')
                    : (t.followInfo = '关注')
                })
                .catch()
            },
          },
          created: function () {
            this.details()
          },
        },
        u = f,
        c = (e('e626'), e('2877')),
        v = Object(c['a'])(u, i, r, !1, null, 'b436f47e', null),
        d = v.exports,
        h = {
          name: 'userhome',
          components: { info: d },
          watch: {
            $route: function () {
              this.$router.go(0)
            },
          },
          methods: {
            setRouterId: function () {
              this.$route.query.id &&
                (sessionStorage.setItem('others', this.$route.query.id),
                this.$store.commit('others', this.$route.query.id))
            },
            getRouterId: function () {
              sessionStorage.getItem('others')
                ? this.$store.commit('others', sessionStorage.getItem('others'))
                : this.$store.commit('others', null)
            },
          },
          created: function () {
            this.setRouterId(), this.getRouterId()
          },
          beforeRouteLeave: function (o, t, e) {
            sessionStorage.removeItem('others'), e()
          },
        },
        p = h,
        m = (e('7dd9'), Object(c['a'])(p, s, n, !1, null, 'd307721a', null))
      t['default'] = m.exports
    },
  },
])
//# sourceMappingURL=chunk-15c541da.2f71e5e9.js.map
