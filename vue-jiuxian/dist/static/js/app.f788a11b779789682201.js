webpackJsonp([10],{"05wW":function(t,n){},"35JU":function(t,n,e){"use strict";e("VCXJ");n.a={name:"app",data:function(){return{}},methods:{}}},"5J8X":function(t,n,e){"use strict";e("VCXJ");n.a={data:function(){return{isShow:!1}},methods:{goBack:function(){this.$router.go(-1)},openMenu:function(){this.isShow=!this.isShow}},watch:{isShow:function(t,n){}}}},"5OHe":function(t,n){},"71yv":function(t,n){},F6kO:function(t,n,e){"use strict";var a=e("VCXJ"),o=e("HVJf"),i=e("U07r"),s=e("wSez");e.n(s);a.default.use(o.a);var r={totalNum:0,totalPrice:0,isAllCheck:!0,listNum:0,detailNum:0,goods:[],detailGood:[],transition:!0,goodNum:0},c={getNum:function(t,n){if(console.log("store detail",t.goods,"ele",n.count,n.lastCount),t.detailNum=n.count,0==t.goods.length)t.goods.push(n),u.totalNum(t.goods);else{for(var e=0;e<t.goods.length;e++)if(n.id==t.goods[e].id){t.goods[e].judge&&1==t.goods[e].judge?(t.goods[e].count+=n.count,t.goods[e].judge=2):t.goods[e].count+=n.lastCount;break}u.totalNum(t.goods)}},addGoods:function(t,n){t.goods=n,u.totalNum(t.goods)},checkAll:function(t,n){for(var e=document.getElementById("accont"),a=(document.getElementById("accontNum"),0);a<t.goods.length;a++)!0===n?(t.goods[a].isCheck=!0,u.totalNum(t.goods)):(t.goods[a].isCheck=!1,e.style.background="#fd5a5b",t.totalNum=0,t.totalPrice=0)},addCount:function(t,n){for(var e=0;e<t.goods.length;e++)if(t.goods[e].id==n){t.goods[e].count++;break}u.totalNum(t.goods)},reduceCount:function(t,n){for(var e=0;e<t.goods.length;e++)if(t.goods[e].id==n){1==t.goods[e].count?t.goods[e].count=1:t.goods[e].count--;break}u.totalNum(t.goods)},checkSingle:function(t,n){u.totalNum(t.goods,n)}},u={totalNum:function(t,n){for(var e=t,a=0,o=0,i=0;i<e.length;i++)if(void 0==n)a+=e[i].count,o+=e[i].count*e[i].price;else{var s=n.id,c=n.boolean;e[i].id==s&&(0==c?(a=r.totalNum-e[i].count,o=r.totalPrice-e[i].count*e[i].price):(a=r.totalNum+e[i].count,o=r.totalPrice+e[i].count*e[i].price))}r.totalNum=a,r.totalPrice=o}},l={changeTotalNum:function(t){return console.log("gstters",t.totalNum),t.totalNum++}},f=new o.a.Store({state:r,getters:l,mutations:c,actions:i.a});n.a=f},M93x:function(t,n,e){"use strict";function a(t){e("i5IA")}var o=e("35JU"),i=e("eC2b"),s=e("8AGX"),r=a,c=s(o.a,i.a,!1,r,null,null);n.a=c.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("ZLEe"),o=e.n(a),i=e("VCXJ"),s=e("M93x"),r=e("YaEn"),c=e("201h"),u=e.n(c),l=e("wSez"),f=e.n(l),d=e("5OHe"),m=(e.n(d),e("vAZe")),v=e("F6kO"),h=e("iq68"),p=e("BMa3"),_=e.n(p);i.default.use(u.a,{preLoad:1.3,error:"/static/images/lazy.png",loading:"/static/images/lazy.png",attempt:1}),i.default.use(f.a),i.default.use(l.InfiniteScroll),i.default.component(l.Spinner.name,l.Spinner),i.default.component(l.Button.name,l.Button),i.default.use(m.a),o()(h).forEach(function(t){i.default.filter(t,h[t])}),_.a.defaults.timeout=5e3,_.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",console.log("production"),_.a.defaults.baseURL="../mock/",i.default.config.productionTip=!1,i.default.prototype.$axios=_.a,new i.default({el:"#app",router:r.a,store:v.a,template:"<App/>",components:{App:s.a}})},OlaP:function(t,n){},SKcX:function(t,n,e){"use strict";function a(t){e("OlaP")}var o=e("nWDa"),i=e("iwKq"),s=e("8AGX"),r=a,c=s(o.a,i.a,!1,r,"data-v-3bdb29a2",null);n.a=c.exports},TIjl:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("a",{staticClass:"left",on:{click:t.goBack}}),t._v(" "),e("h2",[t._t("default")],2),t._v(" "),e("a",{staticClass:"right",on:{click:t.openMenu}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{attrs:{href:"#/main"}},[e("i"),t._v(" 首页")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{attrs:{href:"#/mainPlace"}},[e("i"),t._v(" 搜索")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{attrs:{href:"#/shopping"}},[e("i"),t._v(" 购物车")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{attrs:{href:"#/mine/register"}},[e("i"),t._v(" 我的酒仙")])}],i={render:a,staticRenderFns:o};n.a=i},U07r:function(t,n,e){"use strict";var a=e("VCXJ"),o={getNum:function(t,n){var e=t.commit,o=n.count,i=n.lastCount,s=n.id;a.default.prototype.$axios.get("list.json").then(function(t){t.data.list.forEach(function(t){if(t.number===s){t.count=o,t.lastCount=i;var n={title:t.title,price:t.price,img:t.img,count:t.count,id:t.number,isCheck:!0,lastCount:t.lastCount};return void e("getNum",n)}})}).catch(function(t){console.log("actions接收数据失败",t)})},addGoods:function(t,n){(0,t.commit)("addGoods",n)},checkAll:function(t,n){(0,t.commit)("checkAll",n)},addCount:function(t,n){(0,t.commit)("addCount",n)},reduceCount:function(t,n){(0,t.commit)("reduceCount",n)},checkSingle:function(t,n){(0,t.commit)("checkSingle",n)}};n.a=o},YaEn:function(t,n,e){"use strict";var a=e("VCXJ"),o=e("zO6J"),i=function(){return e.e(2).then(e.bind(null,"TyLo"))},s=function(){return e.e(0).then(e.bind(null,"MHGk"))},r=function(){return e.e(1).then(e.bind(null,"Z7ab"))},c=function(){return e.e(3).then(e.bind(null,"36zE"))},u=function(){return e.e(5).then(e.bind(null,"N6Mx"))},l=function(){return e.e(6).then(e.bind(null,"Dc9O"))},f=function(){return e.e(4).then(e.bind(null,"gYF0"))},d=function(){return e.e(8).then(e.bind(null,"1QJ5"))},m=function(){return e.e(7).then(e.bind(null,"fYTd"))};a.default.use(o.a),n.a=new o.a({routes:[{path:"*",redirect:"/main"},{path:"/main",name:"main",component:i},{path:"/classify",name:"classify",component:d},{path:"/mainPlace",name:"mainPlace",component:m},{path:"/detail/:id",name:"detail",component:s},{path:"/list",name:"list",component:r},{path:"/shopping",name:"shopping",component:c},{path:"/mine",name:"mine",component:u,children:[{path:"login",name:"login",component:l},{path:"register",name:"register",component:f}]}]})},ZU01:function(t,n,e){"use strict";e("VCXJ");n.a={data:function(){return{isShow:!1}},methods:{goBack:function(){this.$router.go(-1)},openMenu:function(){this.isShow=!0,this.isShow&&(document.body.style.overflowY="hidden")},closeMenu:function(){this.isShow=!1,this.isShow||(document.body.style.overflowY="")}},watch:{isShow:function(t,n){}}}},cNyQ:function(t,n,e){"use strict";function a(t){e("05wW")}var o=e("5J8X"),i=e("TIjl"),s=e("8AGX"),r=a,c=s(o.a,i.a,!1,r,"data-v-4990368f",null);n.a=c.exports},eC2b:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},o=[],i={render:a,staticRenderFns:o};n.a=i},"elQ+":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header",attrs:{scroll:"no"}},[e("header",[e("a",{staticClass:"left",on:{click:t.goBack}}),t._v(" "),e("h2",[t._t("default")],2),t._v(" "),e("a",{staticClass:"right",on:{click:t.openMenu}},[t._v("筛选")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"screen"},[e("div",{staticClass:"mask"},[e("span",{on:{click:t.closeMenu}})]),t._v(" "),e("div",{staticClass:"content"},[e("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("li",[e("mt-button",{staticClass:"button",attrs:{size:"small",type:"danger"}},[t._v("重置")]),e("mt-button",{staticClass:"button",attrs:{size:"small",type:"danger"},on:{click:t.closeMenu}},[t._v("确定")])],1)])])])])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"first"},[e("span",{staticClass:"server"},[t._v("服务")]),t._v(" "),e("span",{staticClass:"border"},[t._v("酒仙自营")]),t._v(" "),e("span",{staticClass:"border"},[t._v("CLUB会员专享")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"server"},[t._v("分类")]),t._v(" "),e("i"),t._v(" "),e("span",{staticClass:"all"},[t._v("全部")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"server"},[t._v("品牌")]),t._v(" "),e("i"),t._v(" "),e("span",{staticClass:"all"},[t._v("全部")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"server"},[t._v("价格")]),t._v(" "),e("i"),t._v(" "),e("span",{staticClass:"all"},[t._v("全部")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"server"},[t._v("类型")]),t._v(" "),e("i"),t._v(" "),e("span",{staticClass:"all"},[t._v("全部")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"server"},[t._v("产地")]),t._v(" "),e("i"),t._v(" "),e("span",{staticClass:"all"},[t._v("全部")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"server"},[t._v("酒精度")]),t._v(" "),e("i"),t._v(" "),e("span",{staticClass:"all"},[t._v("全部")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("span",{staticClass:"server"},[t._v("净含量")]),t._v(" "),e("i"),t._v(" "),e("span",{staticClass:"all"},[t._v("全部")])])}],i={render:a,staticRenderFns:o};n.a=i},i5IA:function(t,n){},iq68:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"evenNumbers",function(){return o}),e.d(n,"capitalize",function(){return i});var a=e("VCXJ");a.default.filter("sum",function(t){return t+10}),a.default.filter("reduce",function(t){return t-1}),a.default.filter("change",{add:function(t){var n=[];return t.forEach(function(t,e){n.push(t+1)}),n},redu:function(t){return t-2}});var o=function(t){return Array.isArray(t)?t.filter(function(t){return t%2==0}):t},i=function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},iwKq:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[e("ul",[e("li",[e("router-link",{attrs:{to:"/main"}},[e("img",{attrs:{src:"/static/images/01.png",alt:""}})])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/classify"}},[e("img",{attrs:{src:"/static/images/02.png",alt:""}})])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/mainPlace"}},[e("img",{attrs:{src:"/static/images/05.png",alt:""}})])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/shopping"}},[e("img",{attrs:{src:"/static/images/03.png",alt:""}})])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/mine/register"}},[e("img",{attrs:{src:"/static/images/04.png",alt:""}})])],1)])])},o=[],i={render:a,staticRenderFns:o};n.a=i},nWDa:function(t,n,e){"use strict";e("VCXJ");n.a={data:function(){return{}}}},tAQU:function(t,n,e){"use strict";function a(t){e("71yv")}var o=e("ZU01"),i=e("elQ+"),s=e("8AGX"),r=a,c=s(o.a,i.a,!1,r,"data-v-6319de49",null);n.a=c.exports},vAZe:function(t,n,e){"use strict";var a=e("SKcX"),o=e("cNyQ"),i=e("tAQU"),s={install:function(t){t.component("my-footer",a.a),t.component("my-head",o.a),t.component("list-head",i.a)}};n.a=s}},["NHnr"]);
//# sourceMappingURL=app.f788a11b779789682201.js.map