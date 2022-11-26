;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-4b491263'],
  {
    5444: function (t, a, e) {},
    '875d3': function (t, a, e) {
      'use strict'
      e('5444')
    },
    a15b: function (t, a, e) {
      'use strict'
      var n = e('23e7'),
        s = e('44ad'),
        c = e('fc6a'),
        i = e('a640'),
        l = [].join,
        o = s != Object,
        r = i('join', ',')
      n(
        { target: 'Array', proto: !0, forced: o || !r },
        {
          join: function (t) {
            return l.call(c(this), void 0 === t ? ',' : t)
          },
        },
      )
    },
    c11a: function (t, a, e) {
      'use strict'
      e.r(a)
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a
          return e(
            'div',
            { staticClass: 'playlistUpdate' },
            [
              e('p', [t._v('编辑歌单')]),
              e('div', { staticClass: 'updataBody' }, [
                e('div', [
                  t._m(0),
                  e('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.playName,
                        expression: 'playName',
                      },
                    ],
                    attrs: { name: 'playName', type: 'text' },
                    domProps: { value: t.playName },
                    on: {
                      input: function (a) {
                        a.target.composing || (t.playName = a.target.value)
                      },
                    },
                  }),
                ]),
                e('div', [
                  e('label', { attrs: { for: 'playDesc' } }, [
                    t._v('歌单简介'),
                  ]),
                  e('textarea', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.playDesc,
                        expression: 'playDesc',
                      },
                    ],
                    attrs: { name: 'playDesc' },
                    domProps: { value: t.playDesc },
                    on: {
                      input: function (a) {
                        a.target.composing || (t.playDesc = a.target.value)
                      },
                    },
                  }),
                ]),
                e('div', [
                  e('label', { attrs: { for: 'img' } }, [t._v('歌单封面')]),
                  e('input', {
                    attrs: { name: 'img', type: 'file' },
                    on: { change: t.playlistUpdateImg },
                  }),
                ]),
                e('div', { staticClass: 'tag' }, [
                  e('p', [t._v('歌单标签')]),
                  e(
                    'div',
                    t._l(t.tag, function (a, n) {
                      return e(
                        'span',
                        {
                          key: n,
                          on: {
                            click: function (e) {
                              return t.delTag(a)
                            },
                          },
                        },
                        [t._v(t._s(a))],
                      )
                    }),
                    0,
                  ),
                ]),
              ]),
              e(
                'div',
                { staticClass: 'tags' },
                t._l(t.tags, function (a, n) {
                  return e(
                    'ul',
                    { key: n },
                    t._l(a, function (a, n) {
                      return e(
                        'li',
                        {
                          key: n,
                          on: {
                            click: function (e) {
                              return t.selectTag(a.name)
                            },
                          },
                        },
                        [t._v(' ' + t._s(a.name) + ' ')],
                      )
                    }),
                    0,
                  )
                }),
                0,
              ),
              e('btn', {
                attrs: { icon: 'el-icon-check', text: '提交' },
                nativeOn: {
                  click: function (a) {
                    return t.playUpdate.apply(null, arguments)
                  },
                },
              }),
            ],
            1,
          )
        },
        s = [
          function () {
            var t = this,
              a = t.$createElement,
              e = t._self._c || a
            return e('label', { attrs: { for: 'playName' } }, [
              t._v('歌单名称'),
              e('span', { staticClass: 'must' }, [t._v('*')]),
            ])
          },
        ],
        c = (e('a15b'), e('159b'), e('a434'), e('7cd9')),
        i = e('7a49'),
        l = e('5c96'),
        o = e('3e6f'),
        r = {
          name: 'playlistUpdate',
          data: function () {
            return {
              tags: [
                [{ name: '语种' }],
                [{ name: '流派' }],
                [{ name: '场景' }],
                [{ name: '心情' }],
                [{ name: '主题' }],
              ],
              tag: [],
              playName: '',
              playDesc: '',
              files: null,
            }
          },
          methods: {
            playUpdate: function () {
              Object(c['l'])(
                this.$route.query.play,
                this.playName,
                this.playDesc,
                this.tag.join(';'),
              )
                .then(function (t) {
                  console.log(t)
                })
                .catch()
            },
            playlistUpdateImg: function (t) {
              var a = new FormData()
              a.append('imgFile', t.target.files[0]),
              Object(c['m'])(a, this.$route.query.play)
                .then(function (t) {
                  console.log(t)
                })
                .catch()
            },
            playTags: function () {
              var t = this
              Object(i['f'])()
                .then(function (a) {
                  console.log(a),
                  a.tags.forEach(function (a) {
                    switch (a.category) {
                      case 0:
                        t.tags[0].push(a)
                        break
                      case 1:
                        t.tags[1].push(a)
                        break
                      case 2:
                        t.tags[2].push(a)
                        break
                      case 3:
                        t.tags[3].push(a)
                        break
                      case 4:
                        t.tags[4].push(a)
                        break
                      default:
                        break
                    }
                  }),
                  console.log(t.tags)
                })
                .catch()
            },
            selectTag: function (t) {
              this.tag.length >= 3
                ? l['Notification'].success({
                  type: 'info',
                  message: '最多三个标签',
                })
                : this.tag.push(t)
            },
            delTag: function (t) {
              this.tag.splice(this.tag.indexOf(t), 1)
            },
          },
          components: { btn: o['a'] },
          mounted: function () {
            this.playTags()
          },
        },
        u = r,
        p = (e('875d3'), e('2877')),
        m = Object(p['a'])(u, n, s, !1, null, 'e93267ce', null)
      a['default'] = m.exports
    },
  },
])
//# sourceMappingURL=chunk-4b491263.25be2082.js.map
