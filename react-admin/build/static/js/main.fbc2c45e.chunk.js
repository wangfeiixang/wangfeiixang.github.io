(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,a){e.exports=a(398)},225:function(e,t,a){},231:function(e,t,a){},381:function(e,t,a){},395:function(e,t,a){},396:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(7),r=a.n(o),c=(a(225),a(226),a(11)),s=a(12),l=a(15),h=a(13),u=a(16),d=a(61),m=a(49),p=a(101),y=a(30),b=(a(231),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).move=function(e){var t=Object(p.a)(a);t.setState(function(e){e.index++}),1===e?t.state.index>=4&&t.setState({index:1}):t.state.index>4&&t.setState({index:1}),t.forceUpdate()},a.previous=function(){a.state.index<=1?a.setState({index:4}):a.setState(function(e){e.index--}),a.forceUpdate()},a.next=function(){a.move(1)},a.mouseover=function(e){e.preventDefault(),clearInterval(a.timer)},a.mouseout=function(e){e.preventDefault(),a.autoPlay(1e3)},a.state={index:1},a.timer=null,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.autoPlay(1e3)}},{key:"autoPlay",value:function(e){this.timer=setInterval(this.move,e)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"clickActive",value:function(e){this.setState({index:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"layout-home"},i.a.createElement("div",{className:"banner"},i.a.createElement("div",{style:{background:1===this.state.index?"#364d79":""},className:1===this.state.index?"active":""},"1"),i.a.createElement("div",{style:{background:2===this.state.index?"#e6ac23":""},className:2===this.state.index?"active":""},"2"),i.a.createElement("div",{style:{background:3===this.state.index?"#a52121":""},className:3===this.state.index?"active":""},"3"),i.a.createElement("div",{style:{background:4===this.state.index?"#753679":""},className:4===this.state.index?"active":""},"4")),i.a.createElement("div",{className:"banner-dot"},i.a.createElement("span",{onMouseOut:this.mouseout,onMouseOver:this.mouseover,onClick:function(){return e.clickActive(1)},className:1===this.state.index?"active":""},"1"),i.a.createElement("span",{onMouseOut:this.mouseout,onMouseOver:this.mouseover,onClick:function(){return e.clickActive(2)},className:2===this.state.index?"active":""},"2"),i.a.createElement("span",{onMouseOut:this.mouseout,onMouseOver:this.mouseover,onClick:function(){return e.clickActive(3)},className:3===this.state.index?"active":""},"3"),i.a.createElement("span",{onMouseOut:this.mouseout,onMouseOver:this.mouseover,onClick:function(){return e.clickActive(4)},className:4===this.state.index?"active":""},"4")),i.a.createElement("div",{className:"banner-btn"},i.a.createElement("div",{className:"btn-left"},i.a.createElement(y.a,{onMouseOut:this.mouseout,onMouseOver:this.mouseover,onClick:this.previous,type:"left",style:{fontSize:30}})),i.a.createElement("div",{className:"btn-right"},i.a.createElement(y.a,{onMouseOut:this.mouseout,onMouseOver:this.mouseover,onClick:this.next,type:"right",style:{fontSize:30}}))))}}]),t}(i.a.Component)),v=a(18),f=a.n(v),g=(a(332),a(346),a(355),a(365),a(376),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=f.a.init(document.getElementById(this.props.id));e.setOption(this.props.options),e.resize()}},{key:"componentWillReceiveProps",value:function(e){if(e.isSwitch){var t=f.a.init(document.getElementById(this.props.id));setTimeout(function(){t.resize()},20)}}},{key:"render",value:function(){return i.a.createElement("div",{id:this.props.id,style:{width:"100%",height:this.props.height}})}}]),t}(i.a.Component));g.defaultProps={id:"main",height:"400px"};var E=Object(d.f)(Object(m.b)(function(e){return{isSwitch:e.changeSwitch.isSwitch}})(g)),x=["#67A1FF","#51DBC1","#8A5BF7","#FF875B","#51DBC1","#FECB34","#F86E6E","#6e7074","#546570","#c4ccd3"],k={title:{text:"\u57fa\u7840\u67f1\u72b6\u56fe-\u5468\u7edf\u8ba1",left:"center"},tooltip:{},xAxis:{type:"category",splitLine:{lineStyle:{width:1}},axisTick:!1,axisLine:{show:!1},data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{axisLine:{show:!1},splitLine:{lineStyle:{width:1}},axisTick:!1,type:"value"},series:[{name:"\u8bbf\u95ee\u4eba\u6570",data:[50,100,120,80,70,110,130],type:"bar",itemStyle:{color:function(e){return x[e.dataIndex]},borderWidth:1,borderColor:"#001529"}}]},w={title:{text:"\u5806\u53e0\u67f1\u72b6\u56fe-\u5468\u7edf\u8ba1",left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(42,138,228,0.3)"}}},color:x,legend:{data:["\u76f4\u63a5\u8bbf\u95ee","\u90ae\u4ef6\u8425\u9500","\u8054\u76df\u5e7f\u544a","\u89c6\u9891\u5e7f\u544a","\u641c\u7d22\u5f15\u64ce"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",axisLine:{show:!1},splitLine:{lineStyle:{width:1}},axisTick:!1},yAxis:{type:"category",axisLine:{show:!1},splitLine:{lineStyle:{width:1}},axisTick:!1,data:["\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d","\u5468\u65e5"]},series:[{name:"\u76f4\u63a5\u8bbf\u95ee",type:"bar",stack:"\u603b\u91cf",label:{normal:{show:!0,position:"insideRight"}},data:[320,302,301,334,390,330,320]},{name:"\u90ae\u4ef6\u8425\u9500",type:"bar",stack:"\u603b\u91cf",label:{normal:{show:!0,position:"insideRight"}},data:[120,132,101,134,90,230,210]},{name:"\u8054\u76df\u5e7f\u544a",type:"bar",stack:"\u603b\u91cf",label:{normal:{show:!0,position:"insideRight"}},data:[220,182,191,234,290,330,310]},{name:"\u89c6\u9891\u5e7f\u544a",type:"bar",stack:"\u603b\u91cf",label:{normal:{show:!0,position:"insideRight"}},data:[150,212,201,154,190,330,410]},{name:"\u641c\u7d22\u5f15\u64ce",type:"bar",stack:"\u603b\u91cf",label:{normal:{show:!0,position:"insideRight"}},data:[820,832,901,934,290,330,320]}]},O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{width:"100%",height:"100%"}},i.a.createElement(E,{id:"basicBar",options:k,height:"300px"}),i.a.createElement(E,{id:"stackBar",options:w,height:"400px"}))}}]),t}(i.a.Component),S=["#67A1FF","#51DBC1","#8A5BF7","#FF875B","#51DBC1","#FECB34","#F86E6E","#6e7074","#546570","#c4ccd3"],C={title:{text:"\u57fa\u7840\u6298\u7ebf\u56fe-\u5468\u7edf\u8ba1",left:"center"},tooltip:{},xAxis:{type:"category",boundaryGap:!1,splitLine:{lineStyle:{width:1}},axisTick:!1,axisLine:{show:!1},data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{axisLine:{show:!1},splitLine:{lineStyle:{width:1}},axisTick:!1,type:"value"},series:[{name:"\u8bbf\u95ee\u4eba\u6570",data:[50,100,120,80,70,110,130],type:"line",lineStyle:{color:"rgba(41,199,164,0.5)"},itemStyle:{color:function(e){return S[e.dataIndex]}},areaStyle:{color:"#67A1FF"}}]},j={title:{text:"\u5806\u53e0\u6298\u7ebf\u56fe-\u5468\u7edf\u8ba1",left:"center"},color:S,tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{color:"rgba(42,138,228,0.3)"}}},legend:{data:["\u90ae\u4ef6\u8425\u9500","\u8054\u76df\u5e7f\u544a","\u89c6\u9891\u5e7f\u544a","\u76f4\u63a5\u8bbf\u95ee","\u641c\u7d22\u5f15\u64ce"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisTick:!1,axisLine:{show:!1},data:["\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d","\u5468\u65e5"]}],yAxis:[{type:"value",axisTick:!1,axisLine:{show:!1}}],series:[{name:"\u90ae\u4ef6\u8425\u9500",type:"line",stack:"\u603b\u91cf",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"\u8054\u76df\u5e7f\u544a",type:"line",stack:"\u603b\u91cf",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"\u89c6\u9891\u5e7f\u544a",type:"line",stack:"\u603b\u91cf",areaStyle:{},data:[150,232,201,154,190,330,410]},{name:"\u76f4\u63a5\u8bbf\u95ee",type:"line",stack:"\u603b\u91cf",areaStyle:{normal:{}},data:[320,332,301,334,390,330,320]},{name:"\u641c\u7d22\u5f15\u64ce",type:"line",stack:"\u603b\u91cf",areaStyle:{normal:{}},data:[820,932,901,934,1290,1330,1320]}]},F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{width:"100%",height:"100%"}},i.a.createElement(E,{id:"basicBar",options:C,height:"300px"}),i.a.createElement(E,{id:"stackBar",options:j,height:"400px"}))}}]),t}(i.a.Component),A=a(102),B=a.n(A),M=a(210);a.n(M)()(B.a);var D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={},a.chart=null,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.chart=B.a.chart(this.props.id,this.props.options)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.isSwitch&&setTimeout(function(){t.chart.reflow()},20)}},{key:"render",value:function(){return i.a.createElement("div",{id:this.props.id,style:{width:"100%",height:this.props.height}})}}]),t}(i.a.Component);D.defaultProps={id:"container",height:"400px"};var L=Object(d.f)(Object(m.b)(function(e){return{isSwitch:e.changeSwitch.isSwitch}})(D)),N=["#67A1FF","#51DBC1","#8A5BF7","#FF875B","#51DBC1","#FECB34","#F86E6E","#6e7074","#546570","#c4ccd3"],z={chart:{type:"column"},credits:{enabled:!1},title:{text:"2015\u5e741\u6708-5\u6708\uff0c\u5404\u6d4f\u89c8\u5668\u7684\u5e02\u573a\u4efd\u989d"},xAxis:{type:"category"},color:N,yAxis:{title:{text:"\u603b\u7684\u5e02\u573a\u4efd\u989d"}},legend:{enabled:!1},plotOptions:{series:{borderWidth:0,dataLabels:{enabled:!0,format:"{point.y:.1f}%"}}},tooltip:{headerFormat:'<span style="font-size:11px">{series.name}</span><br>',pointFormat:'<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'},series:[{name:"\u6d4f\u89c8\u5668\u54c1\u724c",colorByPoint:!0,data:[{name:"Microsoft Internet Explorer",y:56.33},{name:"Chrome",y:24.03},{name:"Firefox",y:10.38},{name:"Safari",y:4.77},{name:"Opera",y:.91},{name:"Proprietary or Undetectable",y:.2}]}]},I={chart:{type:"bar"},credits:{enabled:!1},title:{text:"\u5806\u53e0\u67f1\u72b6\u56fe"},colors:N,xAxis:{gridLineColor:"#EDEDED",gridLineWidth:0,tickPixelInterval:100,lineWidth:0,categories:["\u82f9\u679c","\u6a58\u5b50","\u68a8","\u8461\u8404","\u9999\u8549"]},yAxis:{min:0,gridLineColor:"#EDEDED",lineWidth:0,tickWidth:0,title:{text:"\u6c34\u679c\u6d88\u8d39\u603b\u91cf"}},tooltip:{hideDelay:0,useHTML:!0,borderColor:"rgba(0,0,0,0.7)",backgroundColor:"rgba(0,0,0,0.7)",style:{color:"rgba(255,255,255,1)"}},legend:{reversed:!0},plotOptions:{series:{stacking:"normal"}},series:[{name:"\u5c0f\u5f20",data:[5,3,4,7,2]},{name:"\u5c0f\u5f6d",data:[2,2,3,2,1]},{name:"\u5c0f\u6f58",data:[3,4,4,2,5]}]},W=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{width:"100%",height:"100%"}},i.a.createElement(L,{id:"HbasicBar",height:"400px",options:z}),i.a.createElement(L,{id:"HstackBar",height:"400px",options:I}))}}]),t}(i.a.Component),T={credits:{enabled:!1},title:{text:"\u57fa\u7840\u6298\u7ebf\u56fe"},yAxis:{gridLineColor:"#EDEDED",lineWidth:0,tickWidth:0,title:{text:"\u5c31\u4e1a\u4eba\u6570"}},color:["#67A1FF","#51DBC1","#8A5BF7","#FF875B","#51DBC1","#FECB34","#F86E6E","#6e7074","#546570","#c4ccd3"],legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:[{name:"\u5b89\u88c5\uff0c\u5b9e\u65bd\u4eba\u5458",data:[43934,52503,57177,69658,97031,119931,137133,154175]},{name:"\u5de5\u4eba",data:[24916,24064,29742,29851,32490,30282,38121,40434]},{name:"\u9500\u552e",data:[11744,17722,16005,19771,20185,24377,32147,39387]},{name:"\u9879\u76ee\u5f00\u53d1",data:[null,null,7988,12169,15112,22452,34400,34227]},{name:"\u5176\u4ed6",data:[12908,5948,8105,11248,8989,11816,18274,18111]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}},P={chart:{type:"variablepie"},credits:{enabled:!1},title:{text:"\u4e0d\u540c\u56fd\u5bb6\u4eba\u53e3\u5bc6\u5ea6\u53ca\u9762\u79ef\u5bf9\u6bd4"},tooltip:{headerFormat:"",pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {point.name}</b><br/>\u9762\u79ef (\u5e73\u65b9\u5343\u7c73): <b>{point.y}</b><br/>\u4eba\u53e3\u5bc6\u5ea6 (\u6bcf\u5e73\u65b9\u5343\u7c73\u4eba\u6570): <b>{point.z}</b><br/>'},series:[{minPointSize:10,innerSize:"20%",zMin:0,name:"countries",data:[{name:"\u897f\u73ed\u7259",y:505370,z:92.9},{name:"\u6cd5\u56fd",y:551500,z:118.7},{name:"\u6ce2\u5170",y:312685,z:124.6},{name:"\u6377\u514b\u5171\u548c\u56fd",y:78867,z:137.5},{name:"\u610f\u5927\u5229",y:301340,z:201.8},{name:"\u745e\u58eb",y:41277,z:214.5},{name:"\u5fb7\u56fd",y:357022,z:235.6}]}]},R=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{width:"100%",height:"100%"}},i.a.createElement(L,{id:"HbasicLine",height:"400px",options:T}),i.a.createElement(L,{id:"HstackLine",height:"400px",options:P}))}}]),t}(i.a.Component),K=function(e){e.match;return i.a.createElement("div",{style:{width:"100%",height:"100%"}},i.a.createElement(d.b,{path:"/echarts/barChart",component:O}),i.a.createElement(d.b,{path:"/echarts/lineChart",component:F}))},H=function(e){var t=e.match;return i.a.createElement("div",{style:{width:"100%",height:"100%"}},i.a.createElement(d.b,{path:"/highcharts/barChart",component:W}),i.a.createElement(d.b,{path:"/highcharts/lineChart",component:R}),"barChart"!==t.params.username&&"lineChart"!==t.params.username?i.a.createElement(d.a,{to:"/"}):"")},U=function(){return i.a.createElement(d.d,null,i.a.createElement(d.b,{exact:!0,path:"/",component:b}),i.a.createElement(d.b,{exact:!0,path:"/echarts/:username",component:K}),i.a.createElement(d.b,{exact:!0,path:"/highcharts/:username",component:H}),i.a.createElement(d.a,{to:"/"}))},V=(a(381),a(399)),G=a(400),J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={dropDownShow:!1,menuFoldSwitch:!0},a.handleVisibleChange=function(e){a.setState({dropDownShow:e})},a.dropdownClick=function(){a.setState({dropDownShow:!1})},a.menuFold=function(){a.setState({menuFoldSwitch:!a.state.menuFoldSwitch}),a.props.changeCollapse(a.state.menuFoldSwitch)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=i.a.createElement(V.b,{onClick:this.dropdownClick},i.a.createElement(V.b.Item,null,"\u4e2a\u4eba\u4e2d\u5fc3"),i.a.createElement(V.b.Item,null,"\u9000\u51fa"));return i.a.createElement("div",{className:"layout-header"},i.a.createElement("div",{className:"layuut-header-left"},i.a.createElement(y.a,{onClick:this.menuFold.bind(this),style:{color:this.state.menuFoldSwitch?"#fff":"gold",marginRight:"10px",fontSize:"16px"},type:this.state.menuFoldSwitch?"menu-fold":"menu-unfold"})),i.a.createElement("div",{className:"layuut-header-right"},i.a.createElement(G.a,{overlay:e,onVisibleChange:this.handleVisibleChange,overlayClassName:"layout-header-dropdown",visible:this.state.dropDownShow},i.a.createElement("div",null,this.props.user,i.a.createElement(y.a,{style:{fontSize:"14px",marginLeft:"2px"},type:this.state.dropDownShow?"up":"down"})))))}}]),t}(i.a.Component);J.defaultProps={user:"admin"};var _=J,$=a(39),q=(a(395),V.b.SubMenu),Q=[{icon:"home",key:"/",title:"\u4e3b\u9875"},{icon:"pie-chart",key:"/echarts",title:"echarts",children:[{icon:"bar-chart",key:"/echarts/barChart",title:"echarts\u67f1\u72b6\u56fe"},{icon:"line-chart",key:"/echarts/lineChart",title:"echarts\u6298\u7ebf\u56fe"}]},{icon:"fund",key:"/highcharts",title:"highcharts",children:[{icon:"bar-chart",key:"/highcharts/barChart",title:"highcharts\u67f1\u72b6\u56fe"},{icon:"line-chart",key:"/highcharts/lineChart",title:"highcharts\u6298\u7ebf\u56fe"}]}],X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).renderMenuItem=function(e){var t=e.key,a=e.icon,n=e.title;return i.a.createElement(V.b.Item,{key:t},i.a.createElement($.b,{to:t},a&&i.a.createElement(y.a,{type:a}),i.a.createElement("span",null,n)))},a.renderSubMenu=function(e){var t=e.key,a=e.icon,n=e.title,o=e.children;return i.a.createElement(q,{key:t,title:i.a.createElement("span",null,i.a.createElement(y.a,{type:a}),i.a.createElement("span",null,n))},o.map(function(e){return i.a.createElement(V.b.Item,{key:e.key},i.a.createElement($.b,{to:e.key},a&&i.a.createElement(y.a,{type:e.icon}),i.a.createElement("span",null,e.title)))}))},a.rootSubmenuKeys=["sub1","sub2"],a.onOpenChange=function(e){var t=e.find(function(e){return-1===a.state.openKeys.indexOf(e)});-1===a.rootSubmenuKeys.indexOf(t)?a.setState({openKeys:e}):a.setState({openKeys:t?[t]:[]})},a.state={openKeys:[],theme:"dark"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"layout-menu",style:{width:this.props.isCollapsed?"auto":256}},i.a.createElement(V.b,{mode:"inline",openKeys:this.state.openKeys,onOpenChange:this.onOpenChange,theme:this.state.theme,inlineCollapsed:this.props.isCollapsed},Q.map(function(t){return t.children&&t.children.length?e.renderSubMenu(t):e.renderMenuItem(t)})))}}]),t}(i.a.Component),Y=a(401),Z=(a(396),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={menuCollapsed:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"changeMenuCollapsed",value:function(e){this.setState({menuCollapsed:e}),this.props.dispatch(function(e){return{type:"MENU_SWITCH",isSwitch:e}}(e))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"layout-app"},i.a.createElement(_,{color:"gold",changeCollapse:function(t){e.changeMenuCollapsed(t)}}),i.a.createElement("div",{className:"layout-content"},i.a.createElement(X,{isCollapsed:this.state.menuCollapsed}),i.a.createElement("div",{className:"layout-contentR"},i.a.createElement(U,null)),i.a.createElement(Y.a,null)),i.a.createElement("div",{className:"layout-footer"},"React\u6570\u636e\u7ba1\u7406\u540e\u53f0 \xa92019 Created by wangfeixiang"))}}]),t}(n.Component)),ee=Object(d.f)(Object(m.b)(function(e){return{isSwitch:e.changeSwitch.isSwitch}})(Z)),te=a(60),ae=(a(397),a(218)),ne=a.n(ae),ie=Object(te.c)({changeSwitch:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;return"MENU_SWITCH"===e.type?{isSwitch:e.isSwitch}:{isSwitch:!1}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=[ne.a];var re=Object(te.d)(ie,te.a.apply(void 0,oe));r.a.render(i.a.createElement(m.a,{store:re},i.a.createElement($.a,null,i.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[220,1,2]]]);
//# sourceMappingURL=main.fbc2c45e.chunk.js.map