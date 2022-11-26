;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-6884d665'],
  {
    '0cac': function (t, i, n) {
      'use strict'
      n.d(i, 'c', function () {
        return c
      }),
      n.d(i, 'b', function () {
        return a
      }),
      n.d(i, 'd', function () {
        return s
      }),
      n.d(i, 'g', function () {
        return r
      }),
      n.d(i, 'h', function () {
        return o
      }),
      n.d(i, 'f', function () {
        return u
      }),
      n.d(i, 'e', function () {
        return l
      }),
      n.d(i, 'a', function () {
        return v
      }),
      n.d(i, 'i', function () {
        return p
      })
      var e = n('be3b')
      function c(t) {
        return Object(e['a'])({
          url: 'artist/detail',
          method: 'post',
          params: { id: t },
        })
      }
      function a(t) {
        return Object(e['a'])({
          url: '/artist/desc',
          method: 'post',
          params: { id: t },
        })
      }
      function s(t, i, n, c, a) {
        return Object(e['a'])({
          url: '/artist/list',
          method: 'post',
          params: { limit: t, offset: i, initial: n, type: c, area: a },
        })
      }
      function r(t, i) {
        return Object(e['a'])({
          url: '/artist/sub',
          method: 'post',
          params: { id: t, t: i },
        })
      }
      function o(t) {
        return Object(e['a'])({
          url: '/artist/top/song',
          method: 'post',
          params: { id: t },
        })
      }
      function u(t, i, n, c) {
        return Object(e['a'])({
          url: '/artist/songs',
          method: 'post',
          params: { limit: n, offset: c, id: t, order: i },
        })
      }
      function l(t) {
        return Object(e['a'])({
          url: '/artist/mv',
          method: 'post',
          params: { id: t },
        })
      }
      function v(t, i, n) {
        return Object(e['a'])({
          url: '/artist/album',
          method: 'post',
          params: { id: t, limit: i, offset: n },
        })
      }
      function p(t) {
        return Object(e['a'])({
          url: '/simi/artist',
          method: 'post',
          params: { id: t },
        })
      }
    },
    '1e90': function (t, i, n) {
      'use strict'
      n('c638')
    },
    '44e0': function (t, i, n) {
      'use strict'
      n('64f3')
    },
    '64f3': function (t, i, n) {},
    '6fa8': function (t, i, n) {
      'use strict'
      n.r(i)
      var e = function () {
          var t = this,
            i = t.$createElement,
            n = t._self._c || i
          return n(
            'div',
            { attrs: { id: 'artist' } },
            [n('topbar'), n('artistItem')],
            1,
          )
        },
        c = [],
        a = n('5580'),
        s = function () {
          var t = this,
            i = t.$createElement,
            n = t._self._c || i
          return n('div', { staticClass: 'artistItem' }, [
            n('div', { staticClass: 'artist-item-filtrate' }, [
              n(
                'p',
                [
                  n(
                    'span',
                    {
                      class: { active: -1 == t.aActive },
                      on: {
                        click: function (i) {
                          return t.aActiveFn(-1)
                        },
                      },
                    },
                    [t._v('热门')],
                  ),
                  t._l(t.alphabet, function (i, e) {
                    return n(
                      'span',
                      {
                        key: e,
                        class: { active: t.aActive == i },
                        on: {
                          click: function (n) {
                            return t.aActiveFn(i)
                          },
                        },
                      },
                      [t._v(t._s(i))],
                    )
                  }),
                  n(
                    'span',
                    {
                      class: { active: 0 == t.aActive },
                      on: {
                        click: function (i) {
                          return t.aActiveFn(0)
                        },
                      },
                    },
                    [t._v('#')],
                  ),
                ],
                2,
              ),
              n('p', [
                n(
                  'span',
                  {
                    class: { active: -1 == t.bActive },
                    on: {
                      click: function (i) {
                        return t.bActiveFn(-1)
                      },
                    },
                  },
                  [t._v(' 全部 ')],
                ),
                n(
                  'span',
                  {
                    class: { active: 1 == t.bActive },
                    on: {
                      click: function (i) {
                        return t.bActiveFn(1)
                      },
                    },
                  },
                  [t._v('男')],
                ),
                n(
                  'span',
                  {
                    class: { active: 2 == t.bActive },
                    on: {
                      click: function (i) {
                        return t.bActiveFn(2)
                      },
                    },
                  },
                  [t._v('女')],
                ),
                n(
                  'span',
                  {
                    class: { active: 3 == t.bActive },
                    on: {
                      click: function (i) {
                        return t.bActiveFn(3)
                      },
                    },
                  },
                  [t._v('组合')],
                ),
              ]),
              n('p', [
                n(
                  'span',
                  {
                    class: { active: -1 == t.cActive },
                    on: {
                      click: function (i) {
                        return t.cActiveFn(-1)
                      },
                    },
                  },
                  [t._v(' 全部 ')],
                ),
                n(
                  'span',
                  {
                    class: { active: 7 == t.cActive },
                    on: {
                      click: function (i) {
                        return t.cActiveFn(7)
                      },
                    },
                  },
                  [t._v('华语')],
                ),
                n(
                  'span',
                  {
                    class: { active: 96 == t.cActive },
                    on: {
                      click: function (i) {
                        return t.cActiveFn(96)
                      },
                    },
                  },
                  [t._v(' 欧美 ')],
                ),
                n(
                  'span',
                  {
                    class: { active: 8 == t.cActive },
                    on: {
                      click: function (i) {
                        return t.cActiveFn(8)
                      },
                    },
                  },
                  [t._v('日本')],
                ),
                n(
                  'span',
                  {
                    class: { active: 16 == t.cActive },
                    on: {
                      click: function (i) {
                        return t.cActiveFn(16)
                      },
                    },
                  },
                  [t._v(' 韩国 ')],
                ),
                n(
                  'span',
                  {
                    class: { active: 0 == t.cActive },
                    on: {
                      click: function (i) {
                        return t.cActiveFn(0)
                      },
                    },
                  },
                  [t._v('其他')],
                ),
              ]),
            ]),
            n(
              'div',
              { staticClass: 'artist-item' },
              [
                t._l(t.artistLists, function (i, e) {
                  return n(
                    'div',
                    {
                      key: e,
                      staticClass: 'artist-item-content',
                      on: {
                        click: function (n) {
                          return t.artistDetail(i.id)
                        },
                      },
                    },
                    [
                      n('img', {
                        directives: [
                          {
                            name: 'lazy',
                            rawName: 'v-lazy',
                            value: i.img1v1Url,
                            expression: 'item.img1v1Url',
                          },
                        ],
                        attrs: { alt: 'img1v1Url' },
                      }),
                      n('p', [t._v(t._s(i.name))]),
                    ],
                  )
                }),
                n('page', { attrs: { more: t.more }, on: { page: t.pageFn } }),
              ],
              2,
            ),
          ])
        },
        r = [],
        o = n('0cac'),
        u = n('d3dc'),
        l = {
          name: 'artistItem',
          components: { page: u['a'] },
          data: function () {
            return {
              aActive: -1,
              bActive: -1,
              cActive: -1,
              alphabet: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'N',
                'M',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z',
              ],
              artistLists: [],
              more: !1,
              page: 0,
            }
          },
          methods: {
            aActiveFn: function (t) {
              ;(this.aActive = t), this.artistList()
            },
            bActiveFn: function (t) {
              ;(this.bActive = t), this.artistList()
            },
            cActiveFn: function (t) {
              ;(this.cActive = t), this.artistList()
            },
            pageFn: function (t) {
              ;(this.page = t), this.artistList()
            },
            artistDetail: function (t) {
              this.$router.push({ path: '/artistDetail', query: { id: t } })
            },
            artistList: function () {
              var t = this
              Object(o['d'])(
                30,
                30 * this.page,
                this.aActive,
                this.bActive,
                this.cActive,
              )
                .then(function (i) {
                  console.log(i),
                  (t.artistLists = []),
                  (t.artistLists = i.artists),
                  (t.more = i.more)
                })
                .catch()
            },
          },
          mounted: function () {
            this.artistList()
          },
        },
        v = l,
        p = (n('44e0'), n('2877')),
        f = Object(p['a'])(v, s, r, !1, null, '3d00834a', null),
        d = f.exports,
        m = { name: 'artist', components: { topbar: a['a'], artistItem: d } },
        h = m,
        b = Object(p['a'])(h, e, c, !1, null, '259e2e8d', null)
      i['default'] = b.exports
    },
    c638: function (t, i, n) {},
    d3dc: function (t, i, n) {
      'use strict'
      var e = function () {
          var t = this,
            i = t.$createElement,
            n = t._self._c || i
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
        c = [],
        a = {
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
        s = a,
        r = (n('1e90'), n('2877')),
        o = Object(r['a'])(s, e, c, !1, null, 'ab6472ac', null)
      i['a'] = o.exports
    },
  },
])
//# sourceMappingURL=chunk-6884d665.8421ba9f.js.map
