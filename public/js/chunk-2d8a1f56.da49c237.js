;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-2d8a1f56'],
  {
    '06d8': function (t, i, n) {
      'use strict'
      n('d908')
    },
    '9ec8': function (t, i, n) {
      'use strict'
      n.r(i)
      var s = function () {
          var t = this,
            i = t.$createElement,
            n = t._self._c || i
          return n(
            'div',
            { staticClass: 'like' },
            [
              n(
                'div',
                { staticClass: 'btn-list' },
                [
                  n('btn', {
                    attrs: { icon: 'el-icon-caret-right', text: '全部播放' },
                    nativeOn: {
                      click: function (i) {
                        return t.allplay.apply(null, arguments)
                      },
                    },
                  }),
                  n('btn', {
                    attrs: {
                      icon: 'el-icon-circle-plus-outline',
                      text: '添加到',
                    },
                    nativeOn: {
                      click: function (i) {
                        return t.addFn.apply(null, arguments)
                      },
                    },
                  }),
                  n('btn', {
                    attrs: { icon: 'el-icon-caret-right', text: '保留' },
                  }),
                  n('add-play', {
                    attrs: { isDispaly: t.isDisplay, ids: t.ids, index: 99999 },
                  }),
                ],
                1,
              ),
              n('songItem', {
                attrs: { uid: parseInt(t.uid), song: t.likelists },
                on: { del: t.delList },
              }),
            ],
            1,
          )
        },
        e = [],
        c = n('2909'),
        a = (n('159b'), n('a15b'), n('4182')),
        l = n('3e6f'),
        o = n('f6e8'),
        r = n('7cd9'),
        u = n('d192'),
        d = n('7a49'),
        h = {
          name: 'like',
          data: function () {
            return { likelists: [], isDisplay: 0, ids: null }
          },
          components: { songItem: a['a'], btn: l['a'], addPlay: o['a'] },
          computed: {
            uid: function () {
              return (
                this.$store.state.others ||
                this.$store.state.login.account.id ||
                null
              )
            },
          },
          methods: {
            addFn: function () {
              99999 == this.isDisplay
                ? (this.isDisplay = 0)
                : (this.isDisplay = 99999)
            },
            getLikelist: function () {
              var t = this
              this.$store.state.others
                ? Object(r['k'])(this.uid, 1, 0)
                  .then(function (i) {
                    Object(d['e'])(i.playlist[0].id).then(function (i) {
                      if (i.privileges) {
                        var n = []
                        i.privileges.length <= 1
                          ? (n = i.privileges.id)
                          : (i.privileges.forEach(function (t) {
                            n.push(t.id)
                          }),
                          (n = n.join(','))),
                        (t.ids = n),
                        Object(u['a'])(n)
                          .then(function (i) {
                            t.likelists = i.songs
                          })
                          .catch()
                      }
                    })
                  })
                  .catch()
                : Object(r['j'])(this.uid)
                  .then(function (i) {
                    console.log(i)
                    var n = null
                      ;(n =
                        i.length <= 1
                          ? i.ids
                          : Object(c['a'])(i.ids).join(',')),
                    (t.ids = n),
                    Object(u['a'])(n)
                      .then(function (i) {
                        t.likelists = i.songs
                      })
                      .catch()
                  })
                  .catch()
            },
            allplay: function () {
              null !== this.likelists
                ? this.$store.commit('musicInfo', this.likelists)
                : alert('加载中')
            },
            delList: function (t) {
              var i = this
              Object(r['i'])(t, !1)
                .then(function () {
                  i.$router.go(0)
                })
                .catch()
            },
          },
          created: function () {
            this.getLikelist()
          },
        },
        f = h,
        p = (n('06d8'), n('2877')),
        b = Object(p['a'])(f, s, e, !1, null, '61033fe0', null)
      i['default'] = b.exports
    },
    a15b: function (t, i, n) {
      'use strict'
      var s = n('23e7'),
        e = n('44ad'),
        c = n('fc6a'),
        a = n('a640'),
        l = [].join,
        o = e != Object,
        r = a('join', ',')
      s(
        { target: 'Array', proto: !0, forced: o || !r },
        {
          join: function (t) {
            return l.call(c(this), void 0 === t ? ',' : t)
          },
        },
      )
    },
    d192: function (t, i, n) {
      'use strict'
      n.d(i, 'a', function () {
        return e
      })
      var s = n('be3b')
      function e(t) {
        return Object(s['a'])({
          url: '/song/detail',
          method: 'post',
          params: { ids: t },
        })
      }
    },
    d908: function (t, i, n) {},
  },
])
//# sourceMappingURL=chunk-2d8a1f56.da49c237.js.map
