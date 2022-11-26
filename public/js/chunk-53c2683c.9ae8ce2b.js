;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-53c2683c'],
  {
    '1e90': function (t, e, n) {
      'use strict'
      n('c638')
    },
    6668: function (t, e, n) {
      'use strict'
      n('d95c')
    },
    '6e8f': function (t, e, n) {
      'use strict'
      n.r(e)
      var s = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'searchLyric' },
            [
              t._m(0),
              t._l(t.songs, function (e, s) {
                return n(
                  'div',
                  {
                    key: s,
                    staticClass: 'songs',
                    class: { active: t.isActive == s },
                    on: {
                      click: function (n) {
                        return t.active(s, e)
                      },
                    },
                  },
                  [
                    n('p', { staticClass: 'title' }, [
                      n('span', [t._v(t._s(e.name))]),
                      n(
                        'span',
                        { staticClass: 'author' },
                        t._l(e.ar, function (e, s) {
                          return n('span', { key: s }, [
                            t._v(' ' + t._s(e.name) + '/ '),
                          ])
                        }),
                        0,
                      ),
                      n(
                        'span',
                        {
                          on: {
                            click: function (n) {
                              return t.linkAl(e.al.id)
                            },
                          },
                        },
                        [t._v(t._s(e.al.name))],
                      ),
                      n('span', [
                        t._v(
                          ' ' +
                            t._s(Math.floor(e.dt / 1e3 / 60)) +
                            ' : ' +
                            t._s(
                              Math.floor((e.dt / 1e3) % 60) >= 10
                                ? Math.floor((e.dt / 1e3) % 60)
                                : '0' + Math.floor((e.dt / 1e3) % 60),
                            ) +
                            ' ',
                        ),
                      ]),
                    ]),
                    n(
                      'div',
                      {
                        ref: 'searchLyrics' + s,
                        refInFor: !0,
                        staticClass: 'lyrics',
                      },
                      [
                        n('btn', {
                          attrs: { text: '展开歌词' },
                          nativeOn: {
                            click: function (e) {
                              return t.unfold(s)
                            },
                          },
                        }),
                        n('p', { domProps: { innerHTML: t._s(e.lyrics[0]) } }),
                        t._l(e.lyrics, function (e, s) {
                          return n('p', { key: s }, [
                            0 !== s ? n('span', [t._v(t._s(e))]) : t._e(),
                          ])
                        }),
                      ],
                      2,
                    ),
                  ],
                )
              }),
              n('page', { attrs: { more: t.more }, on: { page: t.pageFn } }),
            ],
            2,
          )
        },
        i = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('p', [
              n('span', [t._v('音乐标题')]),
              n('span', [t._v('歌手')]),
              n('span', [t._v('专辑')]),
              n('span', [t._v('时长')]),
            ])
          },
        ],
        c = n('d3dc'),
        a = n('3e6f'),
        r = n('d07d'),
        o = {
          name: 'searchLyric',
          data: function () {
            return { page: 0, songs: [], more: !0, isActive: 0 }
          },
          components: { page: c['a'], btn: a['a'] },
          methods: {
            searchLyric: function () {
              var t = this
              Object(r['a'])(
                this.$route.query.keywords,
                30,
                30 * this.page,
                1006,
              )
                .then(function (e) {
                  console.log(e),
                  (t.songs = e.result.songs),
                  t.$bus.$emit('search', e.result.songCount, '首歌词')
                })
                .catch()
            },
            pageFn: function (t) {
              ;(this.page = t), this.searchLyric()
            },
            active: function (t, e) {
              ;(this.isActive = t), this.$store.commit('musicInfo', e)
            },
            unfold: function (t) {
              '200px' == this.$refs['searchLyrics' + t][0].style.height
                ? (this.$refs['searchLyrics' + t][0].style.height = 'auto')
                : (this.$refs['searchLyrics' + t][0].style.height = '200px')
            },
            linkAl: function (t) {
              this.$router.push({ path: '/albumDetail', query: { id: t } })
            },
          },
          mounted: function () {
            this.searchLyric()
          },
        },
        u = o,
        l = (n('6668'), n('2877')),
        f = Object(l['a'])(u, s, i, !1, null, '73ba79f5', null)
      e['default'] = f.exports
    },
    c638: function (t, e, n) {},
    d07d: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return i
      }),
      n.d(e, 'b', function () {
        return c
      }),
      n.d(e, 'c', function () {
        return a
      }),
      n.d(e, 'd', function () {
        return r
      })
      var s = n('be3b')
      function i(t, e, n, i) {
        return Object(s['a'])({
          url: '/cloudsearch',
          params: { keywords: t, limit: e, offset: n, type: i },
        })
      }
      function c() {
        return Object(s['a'])({ url: '/search/default' })
      }
      function a() {
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
        i = [],
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
        a = c,
        r = (n('1e90'), n('2877')),
        o = Object(r['a'])(a, s, i, !1, null, 'ab6472ac', null)
      e['a'] = o.exports
    },
    d95c: function (t, e, n) {},
  },
])
//# sourceMappingURL=chunk-53c2683c.9ae8ce2b.js.map
