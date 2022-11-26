;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-64d37966'],
  {
    '5ccd': function (t, i, c) {
      'use strict'
      c.r(i)
      var e = function () {
          var t = this,
            i = t.$createElement,
            c = t._self._c || i
          return c(
            'div',
            { staticClass: 'set' },
            [
              c('p', [t._v('个人设置')]),
              c('ul', [
                c(
                  'li',
                  {
                    class: { active: 1 == t.isActive },
                    on: {
                      click: function (i) {
                        return t.cut(1)
                      },
                    },
                  },
                  [
                    c('router-link', { attrs: { to: '/user/set/updata' } }, [
                      t._v('基本设置'),
                    ]),
                  ],
                  1,
                ),
                c(
                  'li',
                  {
                    class: { active: 2 == t.isActive },
                    on: {
                      click: function (i) {
                        return t.cut(2)
                      },
                    },
                  },
                  [
                    c('router-link', { attrs: { to: '/user/set/bind' } }, [
                      t._v('绑定设置'),
                    ]),
                  ],
                  1,
                ),
                c('li'),
              ]),
              c('router-view'),
            ],
            1,
          )
        },
        n = [],
        s = {
          name: 'set',
          data: function () {
            return { isActive: 1 }
          },
          methods: {
            cut: function (t) {
              this.isActive = t
            },
          },
        },
        u = s,
        r = (c('681a'), c('2877')),
        a = Object(r['a'])(u, e, n, !1, null, '7b369185', null)
      i['default'] = a.exports
    },
    '681a': function (t, i, c) {
      'use strict'
      c('db00')
    },
    db00: function (t, i, c) {},
  },
])
//# sourceMappingURL=chunk-64d37966.2882ce88.js.map
