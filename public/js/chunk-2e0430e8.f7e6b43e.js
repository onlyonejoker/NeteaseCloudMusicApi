;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-2e0430e8'],
  {
    '1e90': function (s, t, n) {
      'use strict'
      n('c638')
    },
    '2d4c': function (s, t, n) {
      'use strict'
      n.r(t)
      var o = function () {
          var s = this,
            t = s.$createElement,
            n = s._self._c || t
          return n(
            'div',
            { staticClass: 'fansUser' },
            [
              s._l(s.fansUserInfo, function (s, t) {
                return n('focusUserList', {
                  key: t,
                  attrs: { focusUserInfo: s },
                })
              }),
              n('page', { attrs: { more: s.more }, on: { page: s.pages } }),
            ],
            2,
          )
        },
        e = [],
        i = (n('a434'), n('7cd9')),
        c = n('b245'),
        f = n('d3dc'),
        a = {
          name: 'fansUser',
          data: function () {
            return { fansUserInfo: [], page: 0, more: !1 }
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
          components: { focusUserList: c['a'], page: f['a'] },
          watch: {
            page: function () {
              this.fansLists()
            },
          },
          methods: {
            pages: function (s) {
              this.page = s
            },
            fansLists: function () {
              var s = this
              Object(i['f'])(this.uid, 10, 10 * this.page)
                .then(function (t) {
                  console.log(t),
                  s.fansUserInfo.splice(0, s.fansUserInfo.length),
                  (s.fansUserInfo = t.followeds),
                  (s.more = t.more)
                })
                .catch()
            },
          },
          mounted: function () {
            this.fansLists()
          },
        },
        r = a,
        l = (n('f4ae'), n('2877')),
        u = Object(l['a'])(r, o, e, !1, null, '7fa73ef8', null)
      t['default'] = u.exports
    },
    3377: function (s, t, n) {
      'use strict'
      n('4df0')
    },
    '4df0': function (s, t, n) {},
    9896: function (s, t, n) {},
    b245: function (s, t, n) {
      'use strict'
      var o = function () {
          var s = this,
            t = s.$createElement,
            n = s._self._c || t
          return n(
            'div',
            { staticClass: 'focusUserList' },
            [
              n('img', {
                attrs: {
                  src: s.focusUserInfo.avatarUrl || s.focusUserInfo.img1v1Url,
                  alt: 'focusUserListImg',
                },
                on: { click: s.link },
              }),
              n(
                'p',
                {
                  on: {
                    click: function (t) {
                      return s.link(s.focusUserInfo.userId)
                    },
                  },
                },
                [s._v(s._s(s.focusUserInfo.nickname))],
              ),
              n('p', { staticClass: 'followeds' }, [
                s._v(s._s(s.focusUserInfo.followeds || '?') + '人关注'),
              ]),
              n('btn', {
                class: { isFollow: '已关注' == s.followInfo },
                attrs: { icon: 'el-icon-plus', text: s.followInfo },
                nativeOn: {
                  click: function (t) {
                    return s.followUser(s.focusUserInfo.userId)
                  },
                },
              }),
            ],
            1,
          )
        },
        e = [],
        i = n('7cd9'),
        c = n('3e6f'),
        f = {
          name: 'focusUserList',
          props: { focusUserInfo: [Object, Array] },
          data: function () {
            return { followInfo: '关注' }
          },
          components: { btn: c['a'] },
          methods: {
            followUser: function (s) {
              var t = this,
                n = 0
              ;(n = '关注' == this.followInfo ? 1 : 2),
              Object(i['d'])(s, n)
                .then(function (s) {
                  console.log(s),
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
        a = f,
        r = (n('3377'), n('2877')),
        l = Object(r['a'])(a, o, e, !1, null, '7a893b0b', null)
      t['a'] = l.exports
    },
    c638: function (s, t, n) {},
    d3dc: function (s, t, n) {
      'use strict'
      var o = function () {
          var s = this,
            t = s.$createElement,
            n = s._self._c || t
          return n('div', { staticClass: 'block' }, [
            n('span', {
              staticClass: 'el-icon-arrow-left',
              on: { click: s.reducePage },
            }),
            n('span', [s._v(s._s(s.page))]),
            n('span', {
              ref: 'pageCCC',
              staticClass: 'el-icon-arrow-right',
              on: { click: s.addPage },
            }),
          ])
        },
        e = [],
        i = {
          data: function () {
            return { page: 0 }
          },
          props: { more: Boolean },
          watch: {
            more: function (s) {
              this.forbidClick(s)
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
            forbidClick: function (s) {
              this.$refs.pageCCC.style.pointerEvents = s ? null : 'none'
            },
          },
          mounted: function () {
            this.forbidClick(this.more)
          },
        },
        c = i,
        f = (n('1e90'), n('2877')),
        a = Object(f['a'])(c, o, e, !1, null, 'ab6472ac', null)
      t['a'] = a.exports
    },
    f4ae: function (s, t, n) {
      'use strict'
      n('9896')
    },
  },
])
//# sourceMappingURL=chunk-2e0430e8.f7e6b43e.js.map
