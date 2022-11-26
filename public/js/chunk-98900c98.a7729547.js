;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-98900c98'],
  {
    '1e90': function (t, e, n) {
      'use strict'
      n('c638')
    },
    '8b65': function (t, e, n) {
      'use strict'
      n('f0ea')
    },
    c638: function (t, e, n) {},
    c646: function (t, e, n) {
      'use strict'
      n.r(e)
      var s = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'searchSong' },
            [
              n('songItem', { attrs: { song: t.songs } }),
              n('page', { attrs: { more: t.more }, on: { page: t.pageFn } }),
            ],
            1,
          )
        },
        a = [],
        c = n('4182'),
        o = n('d3dc'),
        r = n('d07d'),
        i = {
          name: 'searchSong',
          data: function () {
            return { page: 0, songs: [], more: !0 }
          },
          components: { songItem: c['a'], page: o['a'] },
          watch: {
            $route: function () {
              this.searchSong()
            },
          },
          methods: {
            searchSong: function () {
              var t = this
              Object(r['a'])(this.$route.query.keywords, 30, 30 * this.page, 1)
                .then(function (e) {
                  console.log(e),
                  (t.songs = e.result.songs),
                  t.$bus.$emit('search', e.result.songCount, '首单曲')
                })
                .catch()
            },
            pageFn: function (t) {
              ;(this.page = t), this.searchSong()
            },
          },
          mounted: function () {
            this.searchSong()
          },
        },
        u = i,
        f = (n('8b65'), n('2877')),
        g = Object(f['a'])(u, s, a, !1, null, '4aac9d2a', null)
      e['default'] = g.exports
    },
    d07d: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return a
      }),
      n.d(e, 'b', function () {
        return c
      }),
      n.d(e, 'c', function () {
        return o
      }),
      n.d(e, 'd', function () {
        return r
      })
      var s = n('be3b')
      function a(t, e, n, a) {
        return Object(s['a'])({
          url: '/cloudsearch',
          params: { keywords: t, limit: e, offset: n, type: a },
        })
      }
      function c() {
        return Object(s['a'])({ url: '/search/default' })
      }
      function o() {
        return Object(s['a'])({ url: '/search/hot/detail' })
      }
      function r(t) {
        return Object(s['a'])({
          url: '/search/suggest',
          params: { keywords: t },
        })
      }
    },
    d3dc: function (t, e, n) {
      'use strict'
      var s = function () {
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
        a = [],
        c = {
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
        o = c,
        r = (n('1e90'), n('2877')),
        i = Object(r['a'])(o, s, a, !1, null, 'ab6472ac', null)
      e['a'] = i.exports
    },
    f0ea: function (t, e, n) {},
  },
])
//# sourceMappingURL=chunk-98900c98.a7729547.js.map
