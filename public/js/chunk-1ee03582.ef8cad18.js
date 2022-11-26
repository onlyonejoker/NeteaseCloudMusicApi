;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-1ee03582'],
  {
    ce1b: function (e, t, l) {},
    f5fc: function (e, t, l) {
      'use strict'
      l('ce1b')
    },
    f9db: function (e, t, l) {
      'use strict'
      l.r(t)
      var s = function () {
          var e = this,
            t = e.$createElement,
            l = e._self._c || t
          return l('div', { staticClass: 'level' }, [
            l('p', { staticClass: 'title' }, [
              e._v('当前等级:'),
              l('i', [e._v('LV' + e._s(e.level.level))]),
            ]),
            l(
              'div',
              { staticClass: 'progress' },
              [
                l('el-progress', {
                  attrs: {
                    type: 'dashboard',
                    percentage: e.percentage,
                    color: 'red',
                  },
                }),
              ],
              1,
            ),
            l('div', { staticClass: 'privilege' }, [
              l('p', [e._v('当前等级特权')]),
              l('p', [l('i'), e._v(e._s(e.privilege))]),
            ]),
            l('div', { staticClass: 'upgrade' }, [
              l('p', [
                e._v('距离下一等级:'),
                l('i', [e._v('LV' + e._s(e.level.level + 1))]),
              ]),
              l('div', { staticClass: 'xxx' }, [
                l('span', [e._v('听歌')]),
                l(
                  'div',
                  { staticClass: 'aaa' },
                  [
                    l('el-progress', {
                      attrs: { color: 'red', percentage: e.sign },
                    }),
                  ],
                  1,
                ),
                l('span', [
                  e._v(
                    ' 距离升级还需要听 ' +
                      e._s(this.level.nextPlayCount - this.level.nowPlayCount) +
                      ' 首歌 ',
                  ),
                ]),
              ]),
              l('div', { staticClass: 'xxx' }, [
                l('span', [e._v('登录')]),
                l(
                  'div',
                  { staticClass: 'aaa' },
                  [
                    l('el-progress', {
                      attrs: { color: 'red', percentage: e.loginDay },
                    }),
                  ],
                  1,
                ),
                l('span', [
                  e._v(
                    '距离升级还需要登录' +
                      e._s(e.level.nextLoginCount - e.level.nowLoginCount) +
                      '天',
                  ),
                ]),
              ]),
            ]),
          ])
        },
        n = [],
        a = l('7cd9'),
        i = {
          name: 'level',
          data: function () {
            return {
              level: {},
              percentage: 0,
              privilege: '没有特权',
              sign: 0,
              loginDay: 0,
            }
          },
          computed: {},
          methods: {
            userLevel: function () {
              var e = this
              Object(a['h'])().then(function (t) {
                ;(e.level = t.data),
                (e.percentage = 100 * t.data.progress),
                (e.loginDay =
                    (e.level.nowLoginCount / e.level.nextLoginCount) * 100),
                (e.sign =
                    (e.level.nowPlayCount / e.level.nextPlayCount) * 100),
                console.log(e.level)
              })
            },
          },
          mounted: function () {
            this.userLevel()
          },
        },
        o = i,
        c = (l('f5fc'), l('2877')),
        r = Object(c['a'])(o, s, n, !1, null, 'a92dfcbc', null)
      t['default'] = r.exports
    },
  },
])
//# sourceMappingURL=chunk-1ee03582.ef8cad18.js.map
