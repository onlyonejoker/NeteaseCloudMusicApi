;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-1f1a3c36'],
  {
    '4bd5': function (t, e, n) {
      'use strict'
      n.r(e)
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'topicDetail' },
            [
              n('topbar'),
              t.act
                ? n(
                  'div',
                  { staticClass: 'topic-detail' },
                  [
                    n('div', { staticClass: 'topic-detail-img' }, [
                      n('img', {
                        attrs: {
                          src: t.act.coverMobileUrl,
                          alt: 'coverMobileUrl',
                        },
                      }),
                      n('div', {
                        staticClass: 'fenxiang el-icon-link',
                        on: { click: t.fenxiang },
                      }),
                    ]),
                    t._l(t.act.text, function (e, i) {
                      return n('p', { key: i, staticClass: 'title' }, [
                        t._v(' ' + t._s(e) + ' '),
                      ])
                    }),
                  ],
                  2,
                )
                : t._e(),
              n(
                'div',
                { staticClass: 'hot-commont' },
                [
                  n('p', { staticClass: 'title' }, [t._v('热门评论')]),
                  t._l(t.events, function (t, e) {
                    return n('eventList', { key: e, attrs: { eventLists: t } })
                  }),
                ],
                2,
              ),
            ],
            1,
          )
        },
        c = [],
        a = (n('d3b7'), n('3ca3'), n('ddb0'), n('7c38')),
        s = n('5580'),
        o = n('1409'),
        r = {
          name: 'topicDetail',
          components: { topbar: s['a'], eventList: o['a'] },
          data: function () {
            return { act: null, events: null, allEvents: null }
          },
          computed: {
            actid: function () {
              return this.$route.query.id
            },
          },
          methods: {
            topicDetail: function () {
              var t = this
              Promise.all([
                Object(a['d'])(this.actid),
                Object(a['b'])(this.actid),
              ]).then(function (e) {
                console.log(e), (t.act = e[0].act), (t.events = e[1].events)
              })
            },
            fenxiang: function () {
              this.$bus.$emit('fenxiang', this.actid)
            },
          },
          mounted: function () {
            this.topicDetail()
          },
        },
        u = r,
        l = (n('d5bd'), n('2877')),
        d = Object(l['a'])(u, i, c, !1, null, '2ff5352c', null)
      e['default'] = d.exports
    },
    '7c38': function (t, e, n) {
      'use strict'
      n.d(e, 'c', function () {
        return c
      }),
      n.d(e, 'a', function () {
        return a
      }),
      n.d(e, 'd', function () {
        return s
      }),
      n.d(e, 'b', function () {
        return o
      })
      var i = n('be3b')
      function c(t, e) {
        return Object(i['a'])({
          url: '/hot/topic',
          method: 'post',
          params: { limit: t, offset: e },
        })
      }
      function a(t, e) {
        return Object(i['a'])({
          url: '/event',
          method: 'post',
          params: { pagesize: t, lasttime: e },
        })
      }
      function s(t) {
        return Object(i['a'])({
          url: '/topic/detail',
          method: 'post',
          params: { actid: t },
        })
      }
      function o(t) {
        return Object(i['a'])({
          url: '/topic/detail/event/hot',
          method: 'post',
          params: { actid: t },
        })
      }
    },
    a720: function (t, e, n) {},
    d5bd: function (t, e, n) {
      'use strict'
      n('a720')
    },
  },
])
//# sourceMappingURL=chunk-1f1a3c36.d11be944.js.map
