(this["webpackJsonpportal-site-cra"]=this["webpackJsonpportal-site-cra"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){"use strict";var n=a(1),c=a(2),i=a(4),r=a(3),o=a(0),s=a.n(o),l=a(22),p=a.n(l),m=(a(37),function(e){var t=e.msg;return s.a.createElement("div",{className:"mask-accets-loading"},s.a.createElement("div",{className:"inner-box"},s.a.createElement("img",{className:"img-loading",src:p.a,alt:""}),s.a.createElement("div",{className:"msg-loading"},t)))});t.a=function(e){return function(t){Object(i.a)(o,t);var a=Object(r.a)(o);function o(e){var t;return Object(n.a)(this,o),(t=a.call(this,e)).state={Child:null},t}return Object(c.a)(o,[{key:"componentDidMount",value:function(){var t=this;this.state.Child||e().then((function(e){t.setState({Child:e.default})}))}},{key:"componentWillUnmount",value:function(){this.setState({Child:null})}},{key:"render",value:function(){var e=this.state.Child;return e?s.a.createElement(e,this.props):s.a.createElement(m,null)}}]),o}(s.a.Component)}},,,,,,,,,,,,function(e,t){e.exports="data:image/gif;base64,R0lGODlhJQAlAJECAL3L2AYrTv///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgACACwAAAAAJQAlAAACi5SPqcvtDyGYIFpF690i8xUw3qJBwUlSadmcLqYmGQu6KDIeM13beGzYWWy3DlB4IYaMk+Dso2RWkFCfLPcRvFbZxFLUDTt21BW56TyjRep1e20+i+eYMR145W2eefj+6VFmgTQi+ECVY8iGxcg35phGo/iDFwlTyXWphwlm1imGRdcnuqhHeop6UAAAIfkEBQoAAgAsEAACAAQACwAAAgWMj6nLXAAh+QQFCgACACwVAAUACgALAAACFZQvgRi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwXABEADAADAAACBYyPqcsFACH5BAUKAAIALBUAFQAKAAsAAAITlGKZwWoMHYxqtmplxlNT7ixGAQAh+QQFCgACACwQABgABAALAAACBYyPqctcACH5BAUKAAIALAUAFQAKAAsAAAIVlC+BGL3Z3IlxUmUuhtR2LzHhsiEFACH5BAUKAAIALAEAEQAMAAMAAAIFjI+pywUAIfkEBQoAAgAsBQAFAAoACwAAAhOUYJnAagwdjGq2amXGU1PuLEYBACH5BAUKAAIALBAAAgAEAAsAAAIFhI+py1wAIfkEBQoAAgAsFQAFAAoACwAAAhWUL4AIvdnciXFSZS6G1HYvMeGyIQUAIfkEBQoAAgAsFwARAAwAAwAAAgWEj6nLBQAh+QQFCgACACwVABUACgALAAACE5RgmcBqDB2MarZqZcZTU+4sRgEAIfkEBQoAAgAsEAAYAAQACwAAAgWEj6nLXAAh+QQFCgACACwFABUACgALAAACFZQvgAi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwBABEADAADAAACBYSPqcsFADs="},,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},,,,,,function(e,t,a){var n={"./article/route.js":36,"./channels/route.js":38,"./home/route.js":43,"./hotword/route.js":40,"./search/route.js":41};function c(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=i,e.exports=c,c.id=35},function(e,t,a){"use strict";a.r(t);var n=a(10);t.default={exact:!0,path:"/p/:id",fatherPath:"/",component:Object(n.a)((function(){return a.e(5).then(a.bind(null,45))}))}},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(10);t.default={exact:!0,path:"/channels",fatherPath:"/",component:Object(n.a)((function(){return a.e(6).then(a.bind(null,46))}))}},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(10);t.default={exact:!0,path:"/hot",fatherPath:"/",component:Object(n.a)((function(){return a.e(4).then(a.bind(null,47))}))}},function(e,t,a){"use strict";a.r(t);var n=a(10);t.default={exact:!0,path:"/search",fatherPath:"/",component:Object(n.a)((function(){return a.e(3).then(a.bind(null,48))}))}},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),i=a(4),r=a(3),o=a(0),s=a.n(o),l=a(23),p=a(8),m=function(e){var t=e.href,a=e.to,n=e.children,c=Object(l.a)(e,["href","to","children"]);return t?s.a.createElement("a",Object.assign({href:t,target:"_blank",rel:"noopener noreferrer"},c),n):s.a.createElement(p.b,Object.assign({to:a},c),n)},d=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).handleRemove=function(e){e.stopPropagation(),e.preventDefault(),c.props.onRemove&&c.props.onRemove()},c.state={},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.pics[0],a=e.isAd,n=e.isTop,c=e.isHot,i=e.adLink,r={href:a?i:"",to:a?"":"/p/".concat(e.id)};return s.a.createElement(m,Object.assign({className:"feed feed-smallpic"},r),s.a.createElement("div",{className:"feed-l"},s.a.createElement("div",{className:"feed-tit line2"},e.title),s.a.createElement("div",{className:"feed-info"},s.a.createElement("div",{className:"info-l"},a&&s.a.createElement("span",{className:"pretag"},"\u5e7f\u544a"),n&&s.a.createElement("span",{className:"pretag red"},"\u7f6e\u9876"),c&&s.a.createElement("span",{className:"pretag red"},"\u70ed"),e.info),s.a.createElement("div",{className:"info-r"},a&&s.a.createElement("div",{className:"pretag close",onClick:this.handleRemove})))),s.a.createElement("div",{className:"feed-r"},s.a.createElement("img",{src:t,alt:""})))}}]),a}(s.a.Component),u=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).handleRemove=function(e){e.stopPropagation(),e.preventDefault(),c.props.onRemove&&c.props.onRemove()},c.state={},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.pics,a=e.isAd,n=e.isTop,c=e.isHot,i=e.adLink,r={href:a?i:"",to:a?"":"/p/".concat(e.id)};return s.a.createElement(m,Object.assign({className:"feed feed-threepic"},r),s.a.createElement("div",{className:"feed-tit line3"},e.title),t.length>0&&s.a.createElement("div",{className:"feed-pic"},t.map((function(e){return s.a.createElement("img",{key:e,src:e,alt:""})}))),s.a.createElement("div",{className:"feed-info"},s.a.createElement("div",{className:"info-l"},a&&s.a.createElement("span",{className:"pretag"},"\u5e7f\u544a"),n&&s.a.createElement("span",{className:"pretag red"},"\u7f6e\u9876"),c&&s.a.createElement("span",{className:"pretag red"},"\u70ed"),e.info),s.a.createElement("div",{className:"info-r"},a&&s.a.createElement("div",{className:"pretag close",onClick:this.handleRemove}))))}}]),a}(s.a.Component),A=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).handleRemove=function(e){e.stopPropagation(),e.preventDefault(),c.props.onRemove&&c.props.onRemove()},c.state={},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.pics[0],a=e.isAd,n=e.isTop,c=e.isHot,i=e.adLink,r={href:a?i:"",to:a?"":"/p/".concat(e.id)};return s.a.createElement(m,Object.assign({className:"feed feed-bigpic"},r),s.a.createElement("div",{className:"feed-tit line3"},e.title),t&&s.a.createElement("div",{className:"feed-pic"},s.a.createElement("img",{src:t,alt:""})),s.a.createElement("div",{className:"feed-info"},s.a.createElement("div",{className:"info-l"},a&&s.a.createElement("span",{className:"pretag"},"\u5e7f\u544a"),n&&s.a.createElement("span",{className:"pretag red"},"\u7f6e\u9876"),c&&s.a.createElement("span",{className:"pretag red"},"\u70ed"),e.info),s.a.createElement("div",{className:"info-r"},a&&s.a.createElement("div",{className:"pretag close",onClick:this.handleRemove}))))}}]),a}(s.a.Component),f=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).handleRemove=function(e){e.stopPropagation(),e.preventDefault(),c.props.onRemove&&c.props.onRemove()},c.state={},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.pics[0],a=e.isAd,n=e.isTop,c=e.isHot,i=e.adLink,r={href:a?i:"",to:a?"":"/p/".concat(e.id)};return s.a.createElement(m,Object.assign({className:"feed feed-video"},r),s.a.createElement("div",{className:"feed-tit"},s.a.createElement("div",{className:"line2"},e.title)),s.a.createElement("div",{className:"feed-pic"},s.a.createElement("img",{src:t,alt:""}),s.a.createElement("span",{className:"videoplay"}),s.a.createElement("span",{className:"videotime"},e.duration)),s.a.createElement("div",{className:"feed-info"},s.a.createElement("div",{className:"info-l"},a&&s.a.createElement("span",{className:"pretag"},"\u5e7f\u544a"),n&&s.a.createElement("span",{className:"pretag red"},"\u7f6e\u9876"),c&&s.a.createElement("span",{className:"pretag red"},"\u70ed"),e.info),s.a.createElement("div",{className:"info-r"},a&&s.a.createElement("div",{className:"pretag close",onClick:this.handleRemove}))))}}]),a}(s.a.Component),h=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).handleOpenMessage=function(){alert("\u53ea\u80fd\u5728App\u4e2d\u67e5\u770b")},c.state={},c}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("header",{className:"header"},s.a.createElement("span",{className:"hd-l",onClick:this.handleOpenMessage}),s.a.createElement("div",{className:"hd-m"}),s.a.createElement(p.b,{className:"hd-r",to:"/hot"}))}}]),a}(s.a.Component),v=[{type:1,name:"\u63a8\u8350"},{type:2,name:"\u89c6\u9891"},{type:3,name:"\u70ed\u70b9"},{type:4,name:"\u793e\u4f1a"},{type:5,name:"\u5a31\u4e50"},{type:6,name:"\u519b\u4e8b"},{type:7,name:"\u79d1\u6280"},{type:8,name:"\u6c7d\u8f66"},{type:9,name:"\u623f\u4ea7"},{type:10,name:"\u5bb6\u5c45"},{type:11,name:"\u4f53\u80b2"},{type:12,name:"\u8d22\u7ecf"}],g=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={},c}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){var t=e.type,a=this.props.type;t!==a&&(t>a?this["nav".concat(a-2)]||this["nav".concat(a-1)]||this["nav".concat(a)]:this["nav".concat(a+2)]||this["nav".concat(a+1)]||this["nav".concat(a)]).scrollIntoView({block:"start",behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.type,n=t.onChangeNav;return s.a.createElement("div",{className:"navbar"},s.a.createElement("div",{className:"navlist"},v.map((function(t){return s.a.createElement("span",{key:t.type,ref:function(a){return e["nav".concat(t.type)]=a},className:t.type===a?"nav active":"nav",onClick:function(){return n(t.type)}},t.name)}))),s.a.createElement(p.b,{className:"plusnav",to:"/channels"}))}}]),a}(s.a.Component),b=(a(39),{smallpic:d,threepic:u,bigpic:A,feedvideo:f}),E=[{id:"6815573013170225671",title:"\u4e60\u8fd1\u5e73\u540c\u585e\u5c14\u7ef4\u4e9a\u603b\u7edf\u6b66\u5951\u5947\u901a\u7535\u8bdd",info:"\u65b0\u534e\u7f51\u5ba2\u6237\u7aef \u8bc4\u8bba 794 3\u5206\u949f\u524d",layout:"bigpic",isTop:!0,pics:[]},{id:"6815586582116958734",title:"\u4e60\u8fd1\u5e73\u540c\u82ac\u5170\u603b\u7edf\u5c3c\u5c3c\u65af\u6258\u901a\u7535\u8bdd",info:"\u65b0\u534e\u7f51\u5ba2\u6237\u7aef \u8bc4\u8bba 51 4\u5206\u949f\u524d",layout:"bigpic",isTop:!0,pics:[]},{id:"6815612142201340430",title:"\u4e2d\u56fd\u6297\u75ab\u56fe\u9274\uff08\u5b8c\u6574\u7248\uff09",info:"\u4eba\u6c11\u65e5\u62a5 \u8bc4\u8bba 785 4\u5206\u949f\u524d",layout:"threepic",isHot:!0,pics:["https://p3.pstatp.com/list/pgc-image/Rw9Ygiz2qIbmOE","https://p3.pstatp.com/list/pgc-image/Rw9YiYN7e8NBHI","https://p3.pstatp.com/list/pgc-image/Rw9YkCP6MJDqPr"]},{id:"6815583319925719560",title:"\u6797\u90d1\u6708\u5a25\uff1a\u7acb\u6cd5\u4f1a\u90e8\u5206\u8bae\u5458\u6076\u610f\u201c\u62c9\u5e03\u201d\u94c1\u8bc1\u5982\u5c71\u4e0d\u5bb9\u62b5\u8d56",info:"\u65b0\u534e\u7f51\u5ba2\u6237\u7aef \u8bc4\u8bba 0 5\u5206\u949f\u524d",layout:"bigpic",pics:[]},{id:"6805823214321664515",title:'\u4fdd\u59c6\u88ab\u9a97 \u4e3a\u633d\u56de\u635f\u5931\u8bf4\u51fa\u4e00\u4e2a"\u79d8\u5bc6" \u5973\u4e3b\u7adf\u88ab\u5a46\u5a46\u548c\u4e08\u592b\u544a\u4e0a\u6cd5\u5ead',info:"\u592e\u89c6\u7f51\u65b0\u95fb \u8bc4\u8bba 2 8\u5206\u949f\u524d",layout:"smallpic",pics:["https://p6-tt-ipv6.byteimg.com/img/tos-cn-p-0026/106a0630a44b6357617822e6f4fb5541~tplv-tt-cs0:640:360.jpg"]},{id:"6815362200710939149",title:"26\u5bb6\uff01\u7f8e\u56fd\u7d27\u6025\u6388\u6743KN95\u53e3\u7f69\uff0c\u8fd9\u4e9b\u4e0a\u5e02\u516c\u53f8\u62ff\u5230\u51fa\u53e3\u901a\u884c\u8bc1",info:"\u4e2d\u56fd\u7ecf\u6d4e\u7f51 \u8bc4\u8bba 25 6\u5206\u949f\u524d",layout:"threepic",pics:["https://p3.pstatp.com/list/pgc-image/Rw5cft6AwrC8EA","https://p3.pstatp.com/list/pgc-image/Rw5cfth9jRrvUI","https://p3.pstatp.com/list/pgc-image/Rw5cftx7bWGD13"]},{id:"6815537455467332103",title:"\u62ff\u56de\u4e00\u5927\u888b\u8471\uff0c\u597d\u5947\u7684\u5404\u79cd\u95fb\u8214\u54ac\u3002",info:"\u79c0\u5916\u6167\u4e2d2008 \u8bc4\u8bba 0 18\u5206\u949f\u524d",duration:"01:29",layout:"feedvideo",pics:["https://p3.pstatp.com/list/2fdd1000ae2f3180026a4"]},{id:"6780199724038225934",title:"\u4e2d\u56fd\u4f01\u4e1a\u662f\u5426\u906d\u53d7\u7f51\u7edc\u5b89\u5168\u75b2\u52b3\u7684\u56f0\u6270\uff1f\u8bf7\u9605\u8bfb\u6700\u65b0\u62a5\u544a",info:"\u601d\u79d1 \u521a\u521a",layout:"bigpic",isAd:!0,adLink:"https://www.chengzijianzhan.com/tetris/page/6780199724038225934/",pics:["https://p6-tt.byteimg.com/img/ad-tetris-site/file/1578902412117/5558a4307a3d2437996c41ad3dd8f9ba~noop.webp"]},{id:"6815902084869653004",title:"\u5965\u5df4\u9a6c\u5ba3\u5e03\u652f\u6301\u7f8e\u6c11\u4e3b\u515a\u603b\u7edf\u7ade\u9009\u4eba\u62dc\u767b",info:"\u4e2d\u56fd\u65b0\u95fb\u7f51 \u8bc4\u8bba 0 2\u5929\u524d",layout:"bigpic",pics:["http://p29-tt.byteimg.com/img/pgc-image/RpbYHUi6Hgs4Do~tplv-tt-cs0:640:360.jpg"]},{id:"6813595080142619144",title:"\u6478\u91d1\u6821\u5c09\u3001\u5c38\u9999\u9b54\u828b\u3001\u9ed1\u9a74\u8e44\u5b50...\u300a\u9b3c\u5439\u706f\u300b\u8fd9\u4e9b\u201c\u4e13\u4e1a\u8bcd\u6c47\u201d\u6765\u81ea\u54ea\u91cc\uff1f",info:"\u4e09\u8054\u751f\u6d3b\u5468\u520a \u8bc4\u8bba 25 04-15 23:58",layout:"threepic",pics:["https://p3.pstatp.com/list/pgc-image/817b0f96a1874a21bc963b384a0e1a7c","https://p3.pstatp.com/list/dfic-imagehandler/4fbbbb1e-8a60-475a-b914-4a42423fce82","https://p3.pstatp.com/list/dfic-imagehandler/1fd91e64-a960-4d9b-b738-f7b174f3dfe8"]},{id:"6814744443728462350",title:"\u5168\u65b0\u5965\u8feaA4L \u505a\u66f4\u5f3a\u5927\u7684\u81ea\u5df1",info:"\u61c2\u8f66\u5e1d\u4f18\u9009 04-15 22:58",layout:"bigpic",isAd:!0,adLink:"https://cars.toutiao.com/zst/audi/20200411dcar/?group_id=6814744443728462350&app=",pics:["http://sf3-ttcdn-tos.pstatp.com/img/web.business.image/202004105d0d90f9465c5aad458f8186~640x0.image"]}],y=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).handleChangeNav=function(e){c.setState({navType:e})},c.state={navType:1},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.navType;return s.a.createElement("div",{className:"page-root page-home"},s.a.createElement(h,null),s.a.createElement(g,{type:e,onChangeNav:this.handleChangeNav}),s.a.createElement("div",{className:"feedlist"},E.map((function(e){var t=b[e.layout];return s.a.createElement(t,{key:e.id,data:e})})),s.a.createElement("div",{className:"feed-none"},"------------ \u5230\u5e95\u4e86 ------------")))}}]),a}(s.a.Component);t.default={exact:!0,path:"/",fatherPath:"/",component:y}},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(14),r=a.n(i),o=a(1),s=a(2),l=a(4),p=a(3),m=a(8),d=a(11),u=(a(29),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).oldNode=document.getElementsByClassName("page-404")[0],n.node=n.oldNode||document.createElement("div"),n.node.className="page-404",n.oldNode||document.body.appendChild(n.node),n}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){document.body.removeChild(this.node)}},{key:"render",value:function(){return Object(i.createPortal)(c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"404"),c.a.createElement(m.b,{to:"/"},"Back Home")),this.node)}}]),a}(c.a.PureComponent)),A=a(35),f=[].concat.apply([],A.keys().map((function(e){return A(e).default||[]}))),h=function(e){var t=f.filter((function(t){return t.fatherPath===e}));return t.push({exact:!1,path:"/"===e?"/*":e+"/*",component:u}),c.a.createElement(d.d,null,t.map((function(e){return e.redirect?c.a.createElement(d.b,{key:e.path,exact:e.exact,path:e.path,render:function(){return c.a.createElement(d.a,{to:e.redirect})}}):c.a.createElement(d.b,{key:e.path,exact:e.exact,path:e.path,component:e.component})})))},v=(a(42),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(m.a,{basename:"/headache"},h("/"))}}]),a}(c.a.Component)),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(c.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/headache",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/headache","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}()}],[[24,1,2]]]);
//# sourceMappingURL=main.3c51da4c.chunk.js.map