;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-2d20ed78'],
  {
    b0a5: function (t, e, n) {
      'use strict'
      n.r(e)
      var c = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div')
        },
        o = [],
        a = n('be3b')
      function r(t) {
        return Object(a['a'])({
          url: 'https://oapi.dingtalk.com/robot/send',
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          transformRequest: [
            function (t) {
              return t
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
            ).then(function (t) {
              console.log(t)
            })
          },
        },
        u = s,
        i = n('2877'),
        d = Object(i['a'])(u, c, o, !1, null, null, null)
      e['default'] = d.exports
    },
  },
])
//# sourceMappingURL=chunk-2d20ed78.1b8f6916.js.map
