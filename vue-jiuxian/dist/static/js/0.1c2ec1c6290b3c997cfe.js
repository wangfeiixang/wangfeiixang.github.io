webpackJsonp([0],{"+/Vj":function(t,n,i){t.exports=i.p+"static/img/detail01.0b5df01.jpg"},"/G4Z":function(t,n,i){t.exports=i.p+"static/img/list14.9fc6c09.jpg"},"/Mll":function(t,n,i){t.exports=i("OCs/")},"/a/u":function(t,n){n.f=Object.getOwnPropertySymbols},"0Z00":function(t,n,i){t.exports=i.p+"static/img/list15.86a3fa6.jpg"},"1GTc":function(t,n,i){var e=i("MITN");e(e.S+e.F,"Object",{assign:i("nBsG")})},"2QVN":function(t,n,i){"use strict";var e=i("MITN"),a=i("2jiR"),o=i("FXyB");e(e.S,"Promise",{try:function(t){var n=a.f(this),i=o(t);return(i.e?n.reject:n.resolve)(i.v),n.promise}})},"2jiR":function(t,n,i){"use strict";function e(t){var n,i;this.promise=new t(function(t,e){if(void 0!==n||void 0!==i)throw TypeError("Bad Promise constructor");n=t,i=e}),this.resolve=a(n),this.reject=a(i)}var a=i("6EVm");t.exports.f=function(t){return new e(t)}},"4YfN":function(t,n,i){"use strict";n.__esModule=!0;var e=i("aA9S"),a=function(t){return t&&t.__esModule?t:{default:t}}(e);n.default=a.default||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}return t}},"4ztK":function(t,n,i){"use strict";var e=i("Ul0Y"),a=i("MITN"),o=i("/Mll"),r=i("OCs/"),s=i("7Tch"),c=i("9mma"),d=i("qd7y"),l=i("Macf"),A=i("hghX"),p=i("QjZ5")("iterator"),u=!([].keys&&"next"in[].keys()),f=function(){return this};t.exports=function(t,n,i,v,h,C,g){d(i,n,v);var B,m,x,b=function(t){if(!u&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new i(this,t)}}return function(){return new i(this,t)}},_=n+" Iterator",y="values"==h,w=!1,k=t.prototype,D=k[p]||k["@@iterator"]||h&&k[h],j=!u&&D||b(h),S=h?y?b("entries"):j:void 0,M="Array"==n?k.entries||D:D;if(M&&(x=A(M.call(new t)))!==Object.prototype&&x.next&&(l(x,_,!0),e||s(x,p)||r(x,p,f)),y&&D&&"values"!==D.name&&(w=!0,j=function(){return D.call(this)}),e&&!g||!u&&!w&&k[p]||r(k,p,j),c[n]=j,c[_]=f,h)if(B={values:y?j:b("values"),keys:C?j:b("keys"),entries:S},g)for(m in B)m in k||o(k,m,B[m]);else a(a.P+a.F*(u||w),n,B);return B}},"5rIx":function(t,n,i){t.exports=i.p+"static/img/list02.c1d6310.png"},"6Yi5":function(t,n,i){t.exports=i.p+"static/img/detail05.8503cf4.jpg"},"9mma":function(t,n){t.exports={}},A91l:function(t,n,i){var e=i("QjZ5")("iterator"),a=!1;try{var o=[7][e]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!a)return!1;var i=!1;try{var o=[7],r=o[e]();r.next=function(){return{done:i=!0}},o[e]=function(){return r},t(o)}catch(t){}return i}},C4hj:function(t,n,i){var e=i("W0SX"),a=i("iQda"),o=i("nR03"),r=i("Dc6E"),s=i("sSQC"),c=i("X6b2"),d={},l={},n=t.exports=function(t,n,i,A,p){var u,f,v,h,C=p?function(){return t}:c(t),g=e(i,A,n?2:1),B=0;if("function"!=typeof C)throw TypeError(t+" is not iterable!");if(o(C)){for(u=s(t.length);u>B;B++)if((h=n?g(r(f=t[B])[0],f[1]):g(t[B]))===d||h===l)return h}else for(v=C.call(t);!(f=v.next()).done;)if((h=a(v,g,f.value,n))===d||h===l)return h};n.BREAK=d,n.RETURN=l},FN5w:function(t,n,i){t.exports=i.p+"static/img/catIcon.73e01a8.png"},FXyB:function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},Gm9m:function(t,n,i){"use strict";var e=i("rVsN"),a=i.n(e),o=i("4YfN"),r=i.n(o),s=(i("VCXJ"),i("HVJf")),c=i("wSez");i.n(c);n.a={data:function(){return{detail:null,id:null,list:[],oCount:null,oShopping:null,shopping:!1,count:1,allCount:0,isMessage:!0}},computed:r()({},Object(s.b)({totalNum:"totalNum"})),mounted:function(){this.oCount=document.getElementById("count"),this.oShopping=document.getElementById("shopping"),this.oCount.value=this.count,this.id=this.$route.params.id,this.swiperDetail(),this.ajax(),this.showGoodsNum()},methods:{swiperDetail:function(){this.detail=new Swiper(".swiper-detail",{pagination:".swiper-pagination",slidesPerView:1,paginationClickable:!0,autoplayDisableOnInteraction:!1,spaceBetween:0,autoplay:1500,loop:!0})},ajax:function(){var t=this;this.$axios.get("list.json").then(function(n){n.data.list.forEach(function(n,i){n.number==t.id&&(t.list=n)})}).catch(function(t){console.log("error",t)})},reduce:function(){this.count<=1?this.count=1:this.count--,this.oCount.value=this.count},add:function(){this.count++,this.oCount.value=this.count},addShopping:function(){var t=0;this.allCount+=parseInt(this.oCount.value),t=parseInt(this.oCount.value),this.shopping=!0;var n={count:this.allCount,lastCount:t,id:this.$route.params.id,el:this};this.$store.dispatch("getNum",n)},showPopBox:function(){this.isMessage?c.Indicator.open("购物成功"):c.Indicator.close()},resolvePromise:function(){var t=this,n=0;new a.a(function(t,i){var e=setInterval(function(){n++,n%2==0?(c.Indicator.close(),t()):n>2&&(n=0,clearInterval(e))},1e3)}).then(function(){t.isMessage=!0},function(t){console.log("error")})},showGoodsNum:function(){this.totalNum>0&&(this.shopping=!0,this.oShopping.innerHTML=this.totalNum)}},watch:{totalNum:function(t,n){this.oShopping.innerHTML=t,this.showGoodsNum()}}}},I134:function(t,n,i){"use strict";var e,a,o,r,s=i("Ul0Y"),c=i("KFas"),d=i("W0SX"),l=i("iKyp"),A=i("MITN"),p=i("uRtX"),u=i("6EVm"),f=i("N6GX"),v=i("C4hj"),h=i("byS2"),C=i("zQXM").set,g=i("lv6H")(),B=i("2jiR"),m=i("FXyB"),x=i("iwuR"),b=c.TypeError,_=c.process,y=c.Promise,w="process"==l(_),k=function(){},D=a=B.f,j=!!function(){try{var t=y.resolve(1),n=(t.constructor={})[i("QjZ5")("species")]=function(t){t(k,k)};return(w||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof n}catch(t){}}(),S=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},M=function(t,n){if(!t._n){t._n=!0;var i=t._c;g(function(){for(var e=t._v,a=1==t._s,o=0;i.length>o;)!function(n){var i,o,r=a?n.ok:n.fail,s=n.resolve,c=n.reject,d=n.domain;try{r?(a||(2==t._h&&z(t),t._h=1),!0===r?i=e:(d&&d.enter(),i=r(e),d&&d.exit()),i===n.promise?c(b("Promise-chain cycle")):(o=S(i))?o.call(i,s,c):s(i)):c(e)}catch(t){c(t)}}(i[o++]);t._c=[],t._n=!1,n&&!t._h&&U(t)})}},U=function(t){C.call(c,function(){var n,i,e,a=t._v,o=E(t);if(o&&(n=m(function(){w?_.emit("unhandledRejection",a,t):(i=c.onunhandledrejection)?i({promise:t,reason:a}):(e=c.console)&&e.error&&e.error("Unhandled promise rejection",a)}),t._h=w||E(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},E=function(t){return 1!==t._h&&0===(t._a||t._c).length},z=function(t){C.call(c,function(){var n;w?_.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})})},I=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),M(n,!0))},T=function(t){var n,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===t)throw b("Promise can't be resolved itself");(n=S(t))?g(function(){var e={_w:i,_d:!1};try{n.call(t,d(T,e,1),d(I,e,1))}catch(t){I.call(e,t)}}):(i._v=t,i._s=1,M(i,!1))}catch(t){I.call({_w:i,_d:!1},t)}}};j||(y=function(t){f(this,y,"Promise","_h"),u(t),e.call(this);try{t(d(T,this,1),d(I,this,1))}catch(t){I.call(this,t)}},e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},e.prototype=i("ILIU")(y.prototype,{then:function(t,n){var i=D(h(this,y));return i.ok="function"!=typeof t||t,i.fail="function"==typeof n&&n,i.domain=w?_.domain:void 0,this._c.push(i),this._a&&this._a.push(i),this._s&&M(this,!1),i.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e;this.promise=t,this.resolve=d(T,t,1),this.reject=d(I,t,1)},B.f=D=function(t){return t===y||t===r?new o(t):a(t)}),A(A.G+A.W+A.F*!j,{Promise:y}),i("Macf")(y,"Promise"),i("zbgt")("Promise"),r=i("UusJ").Promise,A(A.S+A.F*!j,"Promise",{reject:function(t){var n=D(this);return(0,n.reject)(t),n.promise}}),A(A.S+A.F*(s||!j),"Promise",{resolve:function(t){return x(s&&this===r?y:this,t)}}),A(A.S+A.F*!(j&&i("A91l")(function(t){y.all(t).catch(k)})),"Promise",{all:function(t){var n=this,i=D(n),e=i.resolve,a=i.reject,o=m(function(){var i=[],o=0,r=1;v(t,!1,function(t){var s=o++,c=!1;i.push(void 0),r++,n.resolve(t).then(function(t){c||(c=!0,i[s]=t,--r||e(i))},a)}),--r||e(i)});return o.e&&a(o.v),i.promise},race:function(t){var n=this,i=D(n),e=i.reject,a=m(function(){v(t,!1,function(t){n.resolve(t).then(i.resolve,e)})});return a.e&&e(a.v),i.promise}})},ILIU:function(t,n,i){var e=i("OCs/");t.exports=function(t,n,i){for(var a in n)i&&t[a]?t[a]=n[a]:e(t,a,n[a]);return t}},"K0/C":function(t,n){n.f={}.propertyIsEnumerable},KJvA:function(t,n,i){var e=i("yzlX");n=t.exports=i("l95E")(!0),n.push([t.i,"#detail[data-v-058d6887]{width:100%;height:100%}#detail .swiper-container[data-v-058d6887]{width:100%;height:100%;margin-top:4rem}#detail .swiper-detail .swiper-pagination-bullet[data-v-058d6887]{background:#ccc;opacity:.6}#detail .swiper-slide[data-v-058d6887]{text-align:center;font-size:18px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#detail .swiper-slide img[data-v-058d6887]{width:320px;display:block}#detail .content[data-v-058d6887]{font-size:15px;color:#252525;line-height:35px}#detail .content p.title[data-v-058d6887]{font-size:13px;padding-left:5px;color:#fc5a5a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}#detail .content p.price[data-v-058d6887]{margin:-10px 0 0 5px}#detail .content p.price span.new[data-v-058d6887]{display:inline-block;color:#fc5a5a;font-size:19px;padding-right:10px}#detail .content p.price span.old[data-v-058d6887]{display:inline-block;font-size:12px;color:#999;text-decoration:line-through}#detail .content p.sale[data-v-058d6887]{margin:-15px 0 0 10px}#detail .content p.sale span[data-v-058d6887]{margin-right:5px;font-size:10px;display:inline-block;padding:0 2px;color:#fff;height:14px;line-height:14px;border-radius:2px}#detail .content p.sale span.orange[data-v-058d6887]{background-color:#ffa855}#detail .content p.background[data-v-058d6887]{background-color:#f3f5f6;width:100%;height:8px}#detail .content div.coupon[data-v-058d6887]{line-height:18px;padding:12px 10px;position:relative}#detail .content div.coupon span.get[data-v-058d6887]{display:inline-block;margin-right:10px}#detail .content div.coupon span.img[data-v-058d6887]{display:inline-block;margin-right:10px;height:18px}#detail .content div.coupon span.img span.convert[data-v-058d6887]{display:inline-block;height:16px;line-height:16px;padding:0 3px;text-align:center;border-bottom:1px solid #fc5a5a;border-top:1px solid #fc5a5a;font-size:12px;color:#fc5a5a;background:#fff1f1}#detail .content div.coupon span.img img[data-v-058d6887]{width:4px;-webkit-transition:none;transition:none}#detail .content div.coupon span.img img.img-padding[data-v-058d6887]{margin-right:10px}#detail .content div.coupon span.right[data-v-058d6887]{display:inline-block;background:url("+e(i("FN5w"))+") no-repeat 0 0;background-size:150px;background-position:-130px -40px;width:12px;height:13px;position:absolute;z-index:1;top:15px;right:10px}#detail .content div.address[data-v-058d6887]{width:100%;padding:10px 10px 5px}#detail .content div.address span.input[data-v-058d6887]{margin-left:10px}#detail .content div.address span.input input[data-v-058d6887],#detail .content div.address span.input span[data-v-058d6887]{width:22px;height:22px;line-height:22px;display:inline-block;text-align:center;border:1px solid #bfbfbf;vertical-align:middle;font-size:14px}#detail .content div.address span.input input[data-v-058d6887]{width:32px;height:21px;border:1px solid #bfbfbf;border-left:0;border-right:0;vertical-align:-1px}#detail .content div.goods span[data-v-058d6887]{display:inline-block}#detail .content div.goods span[data-v-058d6887]:nth-child(2){font-size:13px;padding:0 5px 0 6px}#detail .content div.goods span[data-v-058d6887]:nth-child(3),#detail .content div.goods span[data-v-058d6887]:nth-child(4){font-size:13px;padding:0 5px}#detail .content div.goods p[data-v-058d6887]{color:red;font-size:11px;margin:-18px 0 0 40px}#detail .content div.hint[data-v-058d6887]{margin-top:-15px}#detail .content div.hint span[data-v-058d6887]:nth-child(2){font-size:12px;display:inline-block;margin-left:5px}#detail .content div.bigImg[data-v-058d6887]{width:100%;padding:2rem 1rem}#detail .content div.bigImg img[data-v-058d6887]{width:100%;display:block}#detail div.footer[data-v-058d6887]{background-color:#fafafa;position:fixed;height:45px;bottom:0;left:0;z-index:99;width:100%}#detail div.footer ul[data-v-058d6887]{width:100%;height:100%}#detail div.footer ul li[data-v-058d6887]{float:left;width:18%;height:100%}#detail div.footer ul li a[data-v-058d6887]{display:block;text-align:center;margin-top:2px}#detail div.footer ul li a img[data-v-058d6887]{width:41px}#detail div.footer ul li.border-right[data-v-058d6887]{border:1px solid #d5cfcf;border-top:0;border-bottom:0}#detail div.footer ul li[data-v-058d6887]:nth-child(3){position:relative}#detail div.footer ul li:nth-child(3) i[data-v-058d6887]{position:absolute;top:3px;left:50%;height:14px;line-height:14px;display:block;padding:0 5px;color:#fff;border-radius:7px;background-color:#fc5a5a;font-size:8px;font-style:normal}#detail div.footer ul li[data-v-058d6887]:nth-child(4),#detail div.footer ul li[data-v-058d6887]:nth-child(5){width:22%}#detail div.footer ul li:nth-child(4) a[data-v-058d6887],#detail div.footer ul li:nth-child(5) a[data-v-058d6887]{line-height:45px;font-size:1.4rem;color:#fff;padding:0 6px}#detail div.footer ul li[data-v-058d6887]:nth-child(4){width:24%}#detail div.footer ul li:nth-child(4) a[data-v-058d6887]{background:#fc5a5a}#detail div.footer ul li:nth-child(5) a[data-v-058d6887]{background:#3c3f51}","",{version:3,sources:["D:/phpStudy/WWW/mine/20171025/jiuxian/src/components/detail/detail.vue"],names:[],mappings:"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",file:"detail.vue",sourcesContent:["\n#detail[data-v-058d6887] {\n  width: 100%;\n  height: 100%;\n}\n#detail .swiper-container[data-v-058d6887] {\n    width: 100%;\n    height: 100%;\n    margin-top: 4rem;\n}\n#detail .swiper-detail .swiper-pagination-bullet[data-v-058d6887] {\n    background: #ccc;\n    opacity: .6;\n}\n#detail .swiper-slide[data-v-058d6887] {\n    text-align: center;\n    font-size: 18px;\n    background: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#detail .swiper-slide img[data-v-058d6887] {\n      width: 320px;\n      display: block;\n}\n#detail .content[data-v-058d6887] {\n    font-size: 15px;\n    color: #252525;\n    line-height: 35px;\n}\n#detail .content p.title[data-v-058d6887] {\n      font-size: 13px;\n      padding-left: 5px;\n      color: #fc5a5a;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      width: 100%;\n}\n#detail .content p.price[data-v-058d6887] {\n      margin: -10px 0 0 5px;\n}\n#detail .content p.price span.new[data-v-058d6887] {\n        display: inline-block;\n        color: #fc5a5a;\n        font-size: 19px;\n        padding-right: 10px;\n}\n#detail .content p.price span.old[data-v-058d6887] {\n        display: inline-block;\n        font-size: 12px;\n        color: #999;\n        text-decoration: line-through;\n}\n#detail .content p.sale[data-v-058d6887] {\n      margin: -15px 0 0 10px;\n}\n#detail .content p.sale span[data-v-058d6887] {\n        margin-right: 5px;\n        font-size: 10px;\n        display: inline-block;\n        padding: 0 2px;\n        color: #fff;\n        height: 14px;\n        line-height: 14px;\n        border-radius: 2px;\n}\n#detail .content p.sale span.orange[data-v-058d6887] {\n        background-color: #ffa855;\n}\n#detail .content p.background[data-v-058d6887] {\n      background-color: #f3f5f6;\n      width: 100%;\n      height: 8px;\n}\n#detail .content div.coupon[data-v-058d6887] {\n      line-height: 18px;\n      padding: 12px 10px;\n      position: relative;\n}\n#detail .content div.coupon span.get[data-v-058d6887] {\n        display: inline-block;\n        margin-right: 10px;\n}\n#detail .content div.coupon span.img[data-v-058d6887] {\n        display: inline-block;\n        margin-right: 10px;\n        height: 18px;\n}\n#detail .content div.coupon span.img span.convert[data-v-058d6887] {\n          display: inline-block;\n          height: 16px;\n          line-height: 16px;\n          padding: 0 3px;\n          text-align: center;\n          border-bottom: 1px solid #fc5a5a;\n          border-top: 1px solid #fc5a5a;\n          font-size: 12px;\n          color: #fc5a5a;\n          background: #fff1f1;\n}\n#detail .content div.coupon span.img img[data-v-058d6887] {\n          width: 4px;\n          -webkit-transition: none;\n          transition: none;\n}\n#detail .content div.coupon span.img img.img-padding[data-v-058d6887] {\n          margin-right: 10px;\n}\n#detail .content div.coupon span.right[data-v-058d6887] {\n        display: inline-block;\n        background: url(../../assets/img/catIcon.png) no-repeat 0 0;\n        background-size: 150px;\n        background-position: -130px -40px;\n        width: 12px;\n        height: 13px;\n        position: absolute;\n        z-index: 1;\n        top: 15px;\n        right: 10px;\n}\n#detail .content div.address[data-v-058d6887] {\n      width: 100%;\n      padding: 10px 10px 5px;\n}\n#detail .content div.address span.input[data-v-058d6887] {\n        margin-left: 10px;\n}\n#detail .content div.address span.input span[data-v-058d6887], #detail .content div.address span.input input[data-v-058d6887] {\n          width: 22px;\n          height: 22px;\n          line-height: 22px;\n          display: inline-block;\n          text-align: center;\n          border: 1px solid #bfbfbf;\n          vertical-align: middle;\n          font-size: 14px;\n}\n#detail .content div.address span.input input[data-v-058d6887] {\n          width: 32px;\n          height: 21px;\n          border: 1px solid #bfbfbf;\n          border-left: 0;\n          border-right: 0;\n          vertical-align: -1px;\n}\n#detail .content div.goods span[data-v-058d6887] {\n      display: inline-block;\n}\n#detail .content div.goods span[data-v-058d6887]:nth-child(2) {\n      font-size: 13px;\n      padding: 0 5px 0 6px;\n}\n#detail .content div.goods span[data-v-058d6887]:nth-child(3), #detail .content div.goods span[data-v-058d6887]:nth-child(4) {\n      font-size: 13px;\n      padding: 0 5px;\n}\n#detail .content div.goods p[data-v-058d6887] {\n      color: red;\n      font-size: 11px;\n      margin: -18px 0 0 40px;\n}\n#detail .content div.hint[data-v-058d6887] {\n      margin-top: -15px;\n}\n#detail .content div.hint span[data-v-058d6887]:nth-child(2) {\n        font-size: 12px;\n        display: inline-block;\n        margin-left: 5px;\n}\n#detail .content div.bigImg[data-v-058d6887] {\n      width: 100%;\n      padding: 2rem 1rem;\n}\n#detail .content div.bigImg img[data-v-058d6887] {\n        width: 100%;\n        display: block;\n}\n#detail div.footer[data-v-058d6887] {\n    width: 100%;\n    background-color: #fafafa;\n    position: fixed;\n    height: 45px;\n    bottom: 0;\n    left: 0;\n    z-index: 99;\n    width: 100%;\n}\n#detail div.footer ul[data-v-058d6887] {\n      width: 100%;\n      height: 100%;\n}\n#detail div.footer ul li[data-v-058d6887] {\n        float: left;\n        width: 18%;\n        height: 100%;\n}\n#detail div.footer ul li a[data-v-058d6887] {\n          display: block;\n          text-align: center;\n          margin-top: 2px;\n}\n#detail div.footer ul li a img[data-v-058d6887] {\n            width: 41px;\n}\n#detail div.footer ul li.border-right[data-v-058d6887] {\n        border: 1px solid #d5cfcf;\n        border-top: 0;\n        border-bottom: 0;\n}\n#detail div.footer ul li[data-v-058d6887]:nth-child(3) {\n        position: relative;\n}\n#detail div.footer ul li:nth-child(3) i[data-v-058d6887] {\n          position: absolute;\n          top: 3px;\n          left: 50%;\n          height: 14px;\n          line-height: 14px;\n          display: block;\n          padding: 0 5px;\n          color: #fff;\n          border-radius: 7px;\n          background-color: #fc5a5a;\n          font-size: 8px;\n          font-style: normal;\n}\n#detail div.footer ul li[data-v-058d6887]:nth-child(4), #detail div.footer ul li[data-v-058d6887]:nth-child(5) {\n        width: 22%;\n}\n#detail div.footer ul li:nth-child(4) a[data-v-058d6887], #detail div.footer ul li:nth-child(5) a[data-v-058d6887] {\n          line-height: 45px;\n          font-size: 1.4rem;\n          color: #fff;\n          padding: 0 6px;\n}\n#detail div.footer ul li[data-v-058d6887]:nth-child(4) {\n        width: 24%;\n}\n#detail div.footer ul li:nth-child(4) a[data-v-058d6887] {\n          background: #fc5a5a;\n}\n#detail div.footer ul li:nth-child(5) a[data-v-058d6887] {\n        background: #3c3f51;\n}\n"],sourceRoot:""}])},MHGk:function(t,n,i){"use strict";function e(t){i("yHTb")}Object.defineProperty(n,"__esModule",{value:!0});var a=i("Gm9m"),o=i("Miew"),r=i("8AGX"),s=e,c=r(a.a,o.a,!1,s,"data-v-058d6887",null);n.default=c.exports},Macf:function(t,n,i){var e=i("qRYU").f,a=i("7Tch"),o=i("QjZ5")("toStringTag");t.exports=function(t,n,i){t&&!a(t=i?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},Miew:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"detail"}},[i("my-head",[t._v("商品详情")]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"content"},[i("h3",[t._v("【京东配送，品质保证】 "+t._s(t.list.title))]),t._v(" "),i("p",{staticClass:"title"},[t._v("【京东配送，品质保证】 "+t._s(t.list.title))]),t._v(" "),i("p",{staticClass:"price"},[i("span",{staticClass:"new"},[t._v("￥"+t._s(t.list.price))]),i("span",{staticClass:"old"},[t._v("￥1533.00")])]),t._v(" "),t._m(1),t._v(" "),i("p",{staticClass:"background"}),t._v(" "),t._m(2),t._v(" "),i("p",{staticClass:"background"}),t._v(" "),i("div",{staticClass:"address"},[i("div",{staticClass:"count"},[i("span",[t._v("数量")]),t._v(" "),i("span",{staticClass:"input"},[i("span",{on:{click:t.reduce}},[t._v("-")]),i("input",{attrs:{id:"count",type:"text",placeholder:"1"}}),i("span",{on:{click:t.add}},[t._v("+")])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),i("p",{staticClass:"background"}),t._v(" "),t._m(5)]),t._v(" "),i("div",{staticClass:"footer"},[i("ul",[t._m(6),t._v(" "),t._m(7),t._v(" "),i("li",[t._m(8),i("i",{directives:[{name:"show",rawName:"v-show",value:t.shopping,expression:"shopping"}],attrs:{id:"shopping"}})]),t._v(" "),i("li",[i("a",{on:{click:t.addShopping}},[t._v("加入购物车")])]),t._v(" "),t._m(9)])])],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"swiper-container swiper-detail"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{src:i("+/Vj")}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{src:i("aIIh")}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{src:i("iUgh")}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{src:i("NOLE")}})]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("img",{attrs:{src:i("6Yi5")}})])]),t._v(" "),e("div",{staticClass:"swiper-pagination"})])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("p",{staticClass:"sale"},[i("span",{staticClass:"orange"},[t._v("限时抢购")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"coupon"},[e("span",{staticClass:"get"},[t._v("领券")]),t._v(" "),e("span",{staticClass:"img"},[e("img",{attrs:{src:i("lr7P")}}),e("span",{staticClass:"convert"},[t._v("满1212减123")]),e("img",{staticClass:"img-padding",attrs:{src:i("U0KD")}}),t._v(" "),e("img",{attrs:{src:i("lr7P")}}),e("span",{staticClass:"convert"},[t._v("满1212减123")]),e("img",{staticClass:"img-padding",attrs:{src:i("U0KD")}}),t._v(" "),e("img",{attrs:{src:i("lr7P")}}),e("span",{staticClass:"convert"},[t._v("满1212减123")]),e("img",{attrs:{src:i("U0KD")}})]),t._v(" "),e("span",{staticClass:"right"})])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"goods"},[i("span",[t._v("送至")]),t._v(" "),i("span",[t._v("北京")]),i("span",[t._v("北京市")]),i("span",[t._v("东城区")]),t._v(" "),i("p",[t._v("有货，预计1-2天可到达")])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"hint"},[i("span",[t._v("提示")]),t._v(" "),i("span",[t._v("此商品无原厂手提袋")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bigImg"},[e("img",{attrs:{src:i("i+Ar")}}),t._v(" "),e("img",{attrs:{src:i("/G4Z")}}),t._v(" "),e("img",{attrs:{src:i("0Z00")}}),t._v(" "),e("img",{attrs:{src:i("YR/R")}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("a",[e("img",{attrs:{src:i("NL2U")}})])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"border-right"},[e("a",[e("img",{attrs:{src:i("5rIx")}})])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{attrs:{href:"#/shopping"}},[e("img",{attrs:{src:i("X+cB")}})])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("li",[i("a",[t._v("立即购买")])])}],o={render:e,staticRenderFns:a};n.a=o},N6GX:function(t,n){t.exports=function(t,n,i,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(i+": incorrect invocation!");return t}},NL2U:function(t,n,i){t.exports=i.p+"static/img/list01.b2ee236.png"},NOLE:function(t,n,i){t.exports=i.p+"static/img/detail04.e911330.jpg"},OTtE:function(t,n,i){var e=i("Dc6E"),a=i("Qlg0"),o=i("gE2q"),r=i("nUWZ")("IE_PROTO"),s=function(){},c=function(){var t,n=i("ELtT")("iframe"),e=o.length;for(n.style.display="none",i("lIme").appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;e--;)delete c.prototype[o[e]];return c()};t.exports=Object.create||function(t,n){var i;return null!==t?(s.prototype=e(t),i=new s,s.prototype=null,i[r]=t):i=c(),void 0===n?i:a(i,n)}},QjZ5:function(t,n,i){var e=i("CTvS")("wks"),a=i("GZtZ"),o=i("KFas").Symbol,r="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=r&&o[t]||(r?o:a)("Symbol."+t))}).store=e},Qlg0:function(t,n,i){var e=i("qRYU"),a=i("Dc6E"),o=i("OtAM");t.exports=i("M7ni")?Object.defineProperties:function(t,n){a(t);for(var i,r=o(n),s=r.length,c=0;s>c;)e.f(t,i=r[c++],n[i]);return t}},"RNB/":function(t,n,i){var e=i("tXsA"),a=i("Joyc");t.exports=function(t){return function(n,i){var o,r,s=String(a(n)),c=e(i),d=s.length;return c<0||c>=d?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===d||(r=s.charCodeAt(c+1))<56320||r>57343?t?s.charAt(c):o:t?s.slice(c,c+2):r-56320+(o-55296<<10)+65536)}}},U0KD:function(t,n,i){t.exports=i.p+"static/img/con_2.7c397e7.png"},USsz:function(t,n,i){"use strict";var e=i("W273"),a=i("qWNy"),o=i("9mma"),r=i("DGQG");t.exports=i("4ztK")(Array,"Array",function(t,n){this._t=r(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,a(1)):"keys"==n?a(0,i):"values"==n?a(0,t[i]):a(0,[i,t[i]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},UWEk:function(t,n){},Ul0Y:function(t,n){t.exports=!0},Vo3c:function(t,n,i){i("UWEk"),i("wCtA"),i("dmd9"),i("I134"),i("idZN"),i("2QVN"),t.exports=i("UusJ").Promise},W273:function(t,n){t.exports=function(){}},"X+cB":function(t,n,i){t.exports=i.p+"static/img/list03.d123f86.png"},X6b2:function(t,n,i){var e=i("iKyp"),a=i("QjZ5")("iterator"),o=i("9mma");t.exports=i("UusJ").getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||o[e(t)]}},"YR/R":function(t,n,i){t.exports=i.p+"static/img/list16.5e815cb.jpg"},YwFF:function(t,n,i){i("1GTc"),t.exports=i("UusJ").Object.assign},"Z4R+":function(t,n){t.exports=function(t,n,i){var e=void 0===i;switch(n.length){case 0:return e?t():t.call(i);case 1:return e?t(n[0]):t.call(i,n[0]);case 2:return e?t(n[0],n[1]):t.call(i,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(i,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(i,n[0],n[1],n[2],n[3])}return t.apply(i,n)}},aA9S:function(t,n,i){t.exports={default:i("YwFF"),__esModule:!0}},aIIh:function(t,n,i){t.exports=i.p+"static/img/detail02.c191d93.jpg"},byS2:function(t,n,i){var e=i("Dc6E"),a=i("6EVm"),o=i("QjZ5")("species");t.exports=function(t,n){var i,r=e(t).constructor;return void 0===r||void 0==(i=e(r)[o])?n:a(i)}},dmd9:function(t,n,i){i("USsz");for(var e=i("KFas"),a=i("OCs/"),o=i("9mma"),r=i("QjZ5")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var d=s[c],l=e[d],A=l&&l.prototype;A&&!A[r]&&a(A,r,d),o[d]=o.Array}},hghX:function(t,n,i){var e=i("7Tch"),a=i("NUpW"),o=i("nUWZ")("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=a(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},"i+Ar":function(t,n,i){t.exports=i.p+"static/img/list13.6fa856c.jpg"},iKyp:function(t,n,i){var e=i("BLKo"),a=i("QjZ5")("toStringTag"),o="Arguments"==e(function(){return arguments}()),r=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,i,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=r(n=Object(t),a))?i:o?e(n):"Object"==(s=e(n))&&"function"==typeof n.callee?"Arguments":s}},iQda:function(t,n,i){var e=i("Dc6E");t.exports=function(t,n,i,a){try{return a?n(e(i)[0],i[1]):n(i)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},iUgh:function(t,n,i){t.exports=i.p+"static/img/detail03.0b5df01.jpg"},idZN:function(t,n,i){"use strict";var e=i("MITN"),a=i("UusJ"),o=i("KFas"),r=i("byS2"),s=i("iwuR");e(e.P+e.R,"Promise",{finally:function(t){var n=r(this,a.Promise||o.Promise),i="function"==typeof t;return this.then(i?function(i){return s(n,t()).then(function(){return i})}:t,i?function(i){return s(n,t()).then(function(){throw i})}:t)}})},iwuR:function(t,n,i){var e=i("Dc6E"),a=i("uRtX"),o=i("2jiR");t.exports=function(t,n){if(e(t),a(n)&&n.constructor===t)return n;var i=o.f(t);return(0,i.resolve)(n),i.promise}},lIme:function(t,n,i){var e=i("KFas").document;t.exports=e&&e.documentElement},lr7P:function(t,n,i){t.exports=i.p+"static/img/con_1.1c68664.png"},lv6H:function(t,n,i){var e=i("KFas"),a=i("zQXM").set,o=e.MutationObserver||e.WebKitMutationObserver,r=e.process,s=e.Promise,c="process"==i("BLKo")(r);t.exports=function(){var t,n,i,d=function(){var e,a;for(c&&(e=r.domain)&&e.exit();t;){a=t.fn,t=t.next;try{a()}catch(e){throw t?i():n=void 0,e}}n=void 0,e&&e.enter()};if(c)i=function(){r.nextTick(d)};else if(!o||e.navigator&&e.navigator.standalone)if(s&&s.resolve){var l=s.resolve();i=function(){l.then(d)}}else i=function(){a.call(e,d)};else{var A=!0,p=document.createTextNode("");new o(d).observe(p,{characterData:!0}),i=function(){p.data=A=!A}}return function(e){var a={fn:e,next:void 0};n&&(n.next=a),t||(t=a,i()),n=a}}},nBsG:function(t,n,i){"use strict";var e=i("OtAM"),a=i("/a/u"),o=i("K0/C"),r=i("NUpW"),s=i("esCQ"),c=Object.assign;t.exports=!c||i("xVzf")(function(){var t={},n={},i=Symbol(),e="abcdefghijklmnopqrst";return t[i]=7,e.split("").forEach(function(t){n[t]=t}),7!=c({},t)[i]||Object.keys(c({},n)).join("")!=e})?function(t,n){for(var i=r(t),c=arguments.length,d=1,l=a.f,A=o.f;c>d;)for(var p,u=s(arguments[d++]),f=l?e(u).concat(l(u)):e(u),v=f.length,h=0;v>h;)A.call(u,p=f[h++])&&(i[p]=u[p]);return i}:c},nR03:function(t,n,i){var e=i("9mma"),a=i("QjZ5")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||o[a]===t)}},qWNy:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},qd7y:function(t,n,i){"use strict";var e=i("OTtE"),a=i("+BLA"),o=i("Macf"),r={};i("OCs/")(r,i("QjZ5")("iterator"),function(){return this}),t.exports=function(t,n,i){t.prototype=e(r,{next:a(1,i)}),o(t,n+" Iterator")}},rVsN:function(t,n,i){t.exports={default:i("Vo3c"),__esModule:!0}},wCtA:function(t,n,i){"use strict";var e=i("RNB/")(!0);i("4ztK")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,i=this._i;return i>=n.length?{value:void 0,done:!0}:(t=e(n,i),this._i+=t.length,{value:t,done:!1})})},yHTb:function(t,n,i){var e=i("KJvA");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("8bSs")("4995bbef",e,!0)},zQXM:function(t,n,i){var e,a,o,r=i("W0SX"),s=i("Z4R+"),c=i("lIme"),d=i("ELtT"),l=i("KFas"),A=l.process,p=l.setImmediate,u=l.clearImmediate,f=l.MessageChannel,v=l.Dispatch,h=0,C={},g=function(){var t=+this;if(C.hasOwnProperty(t)){var n=C[t];delete C[t],n()}},B=function(t){g.call(t.data)};p&&u||(p=function(t){for(var n=[],i=1;arguments.length>i;)n.push(arguments[i++]);return C[++h]=function(){s("function"==typeof t?t:Function(t),n)},e(h),h},u=function(t){delete C[t]},"process"==i("BLKo")(A)?e=function(t){A.nextTick(r(g,t,1))}:v&&v.now?e=function(t){v.now(r(g,t,1))}:f?(a=new f,o=a.port2,a.port1.onmessage=B,e=r(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(e=function(t){l.postMessage(t+"","*")},l.addEventListener("message",B,!1)):e="onreadystatechange"in d("script")?function(t){c.appendChild(d("script")).onreadystatechange=function(){c.removeChild(this),g.call(t)}}:function(t){setTimeout(r(g,t,1),0)}),t.exports={set:p,clear:u}},zbgt:function(t,n,i){"use strict";var e=i("KFas"),a=i("UusJ"),o=i("qRYU"),r=i("M7ni"),s=i("QjZ5")("species");t.exports=function(t){var n="function"==typeof a[t]?a[t]:e[t];r&&n&&!n[s]&&o.f(n,s,{configurable:!0,get:function(){return this}})}}});
//# sourceMappingURL=0.1c2ec1c6290b3c997cfe.js.map