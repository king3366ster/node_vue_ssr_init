webpackJsonp([2],{245:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(254),s=n(255),a=n(96),u=a(r.a,s.a,null,null,null);e.default=u.exports},254:function(t,e,n){"use strict";e.a={asyncData:function(t){var e=t.store,n=t.route;return e.dispatch("getCase",n.params.id)},computed:{item:function(){return this.$store.state.solution.casetopdetail}}}},255:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  这里是案例页 "+t._s(t.item)+"\n")])},s=[],a={render:r,staticRenderFns:s};e.a=a}});