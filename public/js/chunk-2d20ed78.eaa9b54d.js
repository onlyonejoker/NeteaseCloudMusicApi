;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-2d20ed78'],
  {
    b0a5: function (e, t, n) {
      'use strict'
      n.r(t)
      var c = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div')
        },
        o = [],
        a = n('be3b')
      function r(e) {
        return Object(a['a'])({
          url: '/robot/send',
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          transformRequest: [
            function (e) {
              return e
            },
          ],
          params: {
            access_token:
              'da14473817380bc4f85b59a38ffc0011a1e66c6d53732cbc0159e46dbc0bf33f',
          },
        })
      }
      var s = {
          created: function () {
            r(
              "{'msgtype': 'text', 'text': {'content': '哦吼，钉钉机器人群消息测试'}}",
            ).then(function (e) {
              console.log(e)
            })
          },
        },
        u = s,
        f = n('2877'),
        b = Object(f['a'])(u, c, o, !1, null, null, null)
      t['default'] = b.exports
    },
  },
])
//# sourceMappingURL=chunk-2d20ed78.eaa9b54d.js.map
