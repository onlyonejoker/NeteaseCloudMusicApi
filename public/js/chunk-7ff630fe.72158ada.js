;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-7ff630fe'],
  {
    '13d0': function (t, e, n) {
      'use strict'
      n('aa98')
    },
    '1e90': function (t, e, n) {
      'use strict'
      n('c638')
    },
    4524: function (t, e, n) {
      'use strict'
      n.r(e)
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'hot' },
            [n('topbar'), n('friendEvent')],
            1,
          )
        },
        i = [],
        o = n('5580'),
        s = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'friendEvent' },
            [
              n(
                'div',
                t._l(t.eventList, function (t, e) {
                  return n('eventList', { key: e, attrs: { eventLists: t } })
                }),
                1,
              ),
              n('div', [n('hot')], 1),
              n('page', { attrs: { more: t.more }, on: { page: t.pageFn } }),
            ],
            1,
          )
        },
        c = [],
        r = n('2909'),
        u = n('d3dc'),
        l = n('1409'),
        p = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'hotList' },
            [
              n('div', { staticClass: 'title' }, [t._v('热门话题')]),
              t._l(t.hotEvent, function (e, a) {
                return n(
                  'router-link',
                  {
                    key: a,
                    attrs: {
                      to: { path: '/hotDetail', query: { id: e.actId } },
                    },
                  },
                  [
                    n('img', { attrs: { src: e.sharePicUrl, alt: '' } }),
                    n('p', [
                      n('span', [t._v(t._s(e.title))]),
                      n('span', [t._v(t._s(e.participateCount) + '人参与')]),
                    ]),
                  ],
                )
              }),
              n('page', {
                staticClass: 'page',
                attrs: { more: t.more },
                on: { page: t.pageFn },
              }),
            ],
            2,
          )
        },
        f = [],
        h = (n('a434'), n('7c38')),
        d = {
          name: 'hotC',
          data: function () {
            return { more: !0, page: 0, hotEvent: [] }
          },
          components: { page: u['a'] },
          methods: {
            hotTopic: function () {
              var t = this
              Object(h['c'])(20, 20 * this.page)
                .then(function (e) {
                  var n
                  console.log(e),
                  t.hotEvent.splice(0, t.hotEvent.length),
                  (n = t.hotEvent).push.apply(n, Object(r['a'])(e.hot))
                })
                .catch()
            },
            pageFn: function () {
              this.page++, console.log(this.page), this.hotTopic()
            },
          },
          mounted: function () {
            this.hotTopic()
          },
        },
        v = d,
        m = (n('74de'), n('2877')),
        g = Object(m['a'])(v, p, f, !1, null, '32b583bf', null),
        b = g.exports,
        C = {
          name: 'friendEvent',
          components: { page: u['a'], eventList: l['a'], hot: b },
          data: function () {
            return { more: !1, lastTime: -1, eventList: [] }
          },
          methods: {
            pageFn: function () {
              this.event()
            },
            event: function () {
              var t = this
              Object(h['a'])(20, this.lastTime)
                .then(function (e) {
                  var n
                  console.log(e),
                  (t.more = e.more),
                  (t.eventList = []),
                  (n = t.eventList).push.apply(n, Object(r['a'])(e.event)),
                  (t.lastTime = e.lasttime)
                })
                .catch()
            },
          },
          mounted: function () {
            this.event()
          },
        },
        _ = C,
        E = (n('13d0'), Object(m['a'])(_, s, c, !1, null, '56f7e27e', null)),
        j = E.exports,
        k = { name: 'hot', components: { topbar: o['a'], friendEvent: j } },
        O = k,
        w = (n('a650'), Object(m['a'])(O, a, i, !1, null, '2cae08b9', null))
      e['default'] = w.exports
    },
    '74de': function (t, e, n) {
      'use strict'
      n('dccf')
    },
    '7c38': function (t, e, n) {
      'use strict'
      n.d(e, 'c', function () {
        return i
      }),
      n.d(e, 'a', function () {
        return o
      }),
      n.d(e, 'd', function () {
        return s
      }),
      n.d(e, 'b', function () {
        return c
      })
      var a = n('be3b')
      function i(t, e) {
        return Object(a['a'])({
          url: '/hot/topic',
          method: 'post',
          params: { limit: t, offset: e },
        })
      }
      function o(t, e) {
        return Object(a['a'])({
          url: '/event',
          method: 'post',
          params: { pagesize: t, lasttime: e },
        })
      }
      function s(t) {
        return Object(a['a'])({
          url: '/topic/detail',
          method: 'post',
          params: { actid: t },
        })
      }
      function c(t) {
        return Object(a['a'])({
          url: '/topic/detail/event/hot',
          method: 'post',
          params: { actid: t },
        })
      }
    },
    a650: function (t, e, n) {
      'use strict'
      n('e784')
    },
    aa98: function (t, e, n) {},
    c638: function (t, e, n) {},
    d3dc: function (t, e, n) {
      'use strict'
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'block' }, [
            n('span', {
              staticClass: 'el-icon-arrow-left',
              on: { click: t.reducePage },
            }),
            n('span', [t._v(t._s(t.page))]),
            n('span', {
              ref: 'pageCCC',
              staticClass: 'el-icon-arrow-right',
              on: { click: t.addPage },
            }),
          ])
        },
        i = [],
        o = {
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
        s = o,
        c = (n('1e90'), n('2877')),
        r = Object(c['a'])(s, a, i, !1, null, 'ab6472ac', null)
      e['a'] = r.exports
    },
    dccf: function (t, e, n) {},
    e784: function (t, e, n) {},
  },
])
//# sourceMappingURL=chunk-7ff630fe.72158ada.js.map
