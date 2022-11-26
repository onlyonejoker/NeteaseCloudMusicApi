;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-5c5ab90a'],
  {
    '1e90': function (t, e, a) {
      'use strict'
      a('c638')
    },
    '23d0': function (t, e, a) {
      'use strict'
      a.r(e)
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a(
            'div',
            { staticClass: 'searchAlbum' },
            [
              t._l(t.albums, function (e, n) {
                return a(
                  'div',
                  {
                    key: n,
                    staticClass: 'albums',
                    on: {
                      click: function (a) {
                        return t.linkAlbumDetail(e.id)
                      },
                    },
                  },
                  [
                    a('img', {
                      directives: [
                        {
                          name: 'lazy',
                          rawName: 'v-lazy',
                          value: e.picUrl,
                          expression: 'item.picUrl',
                        },
                      ],
                      attrs: { alt: 'picUrl' },
                    }),
                    a('span', [t._v(t._s(e.name))]),
                    a('span', [t._v(t._s(e.artist.name))]),
                  ],
                )
              }),
              a('page', { attrs: { more: t.more }, on: { page: t.pageFn } }),
            ],
            2,
          )
        },
        i = [],
        s = a('d3dc'),
        r = a('d07d'),
        c = {
          name: 'searchAlbum',
          data: function () {
            return { page: 0, albums: [], more: !0 }
          },
          components: { page: s['a'] },
          methods: {
            searchAlbum: function () {
              var t = this
              Object(r['a'])(this.$route.query.keywords, 30, 30 * this.page, 10)
                .then(function (e) {
                  console.log(e),
                  (t.albums = e.result.albums),
                  t.$bus.$emit('search', e.result.albumCount, '张专辑')
                })
                .catch()
            },
            pageFn: function (t) {
              ;(this.page = t), this.searchAlbum()
            },
            linkAlbumDetail: function (t) {
              this.$router.push({ path: '/albumDetail', query: { id: t } })
            },
          },
          mounted: function () {
            this.searchAlbum()
          },
        },
        u = c,
        o = (a('44e0a'), a('2877')),
        l = Object(o['a'])(u, n, i, !1, null, '4843e0a8', null)
      e['default'] = l.exports
    },
    '44e0a': function (t, e, a) {
      'use strict'
      a('4a89')
    },
    '4a89': function (t, e, a) {},
    c638: function (t, e, a) {},
    d07d: function (t, e, a) {
      'use strict'
      a.d(e, 'a', function () {
        return i
      }),
      a.d(e, 'b', function () {
        return s
      }),
      a.d(e, 'c', function () {
        return r
      }),
      a.d(e, 'd', function () {
        return c
      })
      var n = a('be3b')
      function i(t, e, a, i) {
        return Object(n['a'])({
          url: '/cloudsearch',
          params: { keywords: t, limit: e, offset: a, type: i },
        })
      }
      function s() {
        return Object(n['a'])({ url: '/search/default' })
      }
      function r() {
        return Object(n['a'])({ url: '/search/hot/detail' })
      }
      function c(t) {
        return Object(n['a'])({
          url: '/search/suggest',
          params: { keywords: t },
        })
      }
    },
    d3dc: function (t, e, a) {
      'use strict'
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a('div', { staticClass: 'block' }, [
            a('span', {
              staticClass: 'el-icon-arrow-left',
              on: { click: t.reducePage },
            }),
            a('span', [t._v(t._s(t.page))]),
            a('span', {
              ref: 'pageCCC',
              staticClass: 'el-icon-arrow-right',
              on: { click: t.addPage },
            }),
          ])
        },
        i = [],
        s = {
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
        r = s,
        c = (a('1e90'), a('2877')),
        u = Object(c['a'])(r, n, i, !1, null, 'ab6472ac', null)
      e['a'] = u.exports
    },
  },
])
//# sourceMappingURL=chunk-5c5ab90a.cb16c01d.js.map
