;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-7302d4a2'],
  {
    '07de': function (o, t, s) {
      'use strict'
      s.r(t)
      var e = function () {
          var o = this,
            t = o.$createElement,
            s = o._self._c || t
          return s(
            'div',
            { staticClass: 'focusUser' },
            [
              o._l(o.focusUserInfo, function (o, t) {
                return s('focusUserList', {
                  key: t,
                  attrs: { focusUserInfo: o },
                })
              }),
              s('page', { attrs: { more: o.more }, on: { page: o.pages } }),
            ],
            2,
          )
        },
        n = [],
        c = (s('a434'), s('7cd9')),
        i = s('b245'),
        f = s('d3dc'),
        r = {
          name: 'focusUser',
          data: function () {
            return { focusUserInfo: [], page: 0, more: !1 }
          },
          computed: {
            uid: function () {
              return (
                this.$store.state.others ||
                this.$store.state.login.account.id ||
                null
              )
            },
          },
          components: { focusUserList: i['a'], page: f['a'] },
          watch: {
            page: function () {
              this.followLists()
            },
          },
          methods: {
            pages: function (o) {
              this.page = o
            },
            followLists: function () {
              var o = this
              Object(c['e'])(this.uid, 10, 10 * this.page)
                .then(function (t) {
                  console.log(t),
                  o.focusUserInfo.splice(0, o.focusUserInfo.length),
                  (o.focusUserInfo = t.follow),
                  (o.more = t.more)
                })
                .catch()
            },
          },
          mounted: function () {
            this.followLists()
          },
        },
        a = r,
        l = (s('6fc7'), s('2877')),
        u = Object(l['a'])(a, e, n, !1, null, '001c7813', null)
      t['default'] = u.exports
    },
    '1e90': function (o, t, s) {
      'use strict'
      s('c638')
    },
    3377: function (o, t, s) {
      'use strict'
      s('4df0')
    },
    '4df0': function (o, t, s) {},
    '6fc7': function (o, t, s) {
      'use strict'
      s('d256')
    },
    b245: function (o, t, s) {
      'use strict'
      var e = function () {
          var o = this,
            t = o.$createElement,
            s = o._self._c || t
          return s(
            'div',
            { staticClass: 'focusUserList' },
            [
              s('img', {
                attrs: {
                  src: o.focusUserInfo.avatarUrl || o.focusUserInfo.img1v1Url,
                  alt: 'focusUserListImg',
                },
                on: { click: o.link },
              }),
              s(
                'p',
                {
                  on: {
                    click: function (t) {
                      return o.link(o.focusUserInfo.userId)
                    },
                  },
                },
                [o._v(o._s(o.focusUserInfo.nickname))],
              ),
              s('p', { staticClass: 'followeds' }, [
                o._v(o._s(o.focusUserInfo.followeds || '?') + '人关注'),
              ]),
              s('btn', {
                class: { isFollow: '已关注' == o.followInfo },
                attrs: { icon: 'el-icon-plus', text: o.followInfo },
                nativeOn: {
                  click: function (t) {
                    return o.followUser(o.focusUserInfo.userId)
                  },
                },
              }),
            ],
            1,
          )
        },
        n = [],
        c = s('7cd9'),
        i = s('3e6f'),
        f = {
          name: 'focusUserList',
          props: { focusUserInfo: [Object, Array] },
          data: function () {
            return { followInfo: '关注' }
          },
          components: { btn: i['a'] },
          methods: {
            followUser: function (o) {
              var t = this,
                s = 0
              ;(s = '关注' == this.followInfo ? 1 : 2),
              Object(c['d'])(o, s)
                .then(function (o) {
                  console.log(o),
                  '关注' == t.followInfo
                    ? (t.followInfo = '已关注')
                    : (t.followInfo = '关注')
                })
                .catch()
            },
            link: function () {
              this.$router.push({
                path: '/user/home',
                query: { id: this.focusUserInfo.userId },
              })
            },
          },
          mounted: function () {
            console.log(this.focusUserInfo),
            this.focusUserInfo.followed
              ? (this.followInfo = '已关注')
              : (this.followInfo = '关注')
          },
        },
        r = f,
        a = (s('3377'), s('2877')),
        l = Object(a['a'])(r, e, n, !1, null, '7a893b0b', null)
      t['a'] = l.exports
    },
    c638: function (o, t, s) {},
    d256: function (o, t, s) {},
    d3dc: function (o, t, s) {
      'use strict'
      var e = function () {
          var o = this,
            t = o.$createElement,
            s = o._self._c || t
          return s('div', { staticClass: 'block' }, [
            s('span', {
              staticClass: 'el-icon-arrow-left',
              on: { click: o.reducePage },
            }),
            s('span', [o._v(o._s(o.page))]),
            s('span', {
              ref: 'pageCCC',
              staticClass: 'el-icon-arrow-right',
              on: { click: o.addPage },
            }),
          ])
        },
        n = [],
        c = {
          data: function () {
            return { page: 0 }
          },
          props: { more: Boolean },
          watch: {
            more: function (o) {
              this.forbidClick(o)
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
            forbidClick: function (o) {
              this.$refs.pageCCC.style.pointerEvents = o ? null : 'none'
            },
          },
          mounted: function () {
            this.forbidClick(this.more)
          },
        },
        i = c,
        f = (s('1e90'), s('2877')),
        r = Object(f['a'])(i, e, n, !1, null, 'ab6472ac', null)
      t['a'] = r.exports
    },
  },
])
//# sourceMappingURL=chunk-7302d4a2.830d07b1.js.map
