(this["webpackJsonpportal-site-cra"]=this["webpackJsonpportal-site-cra"]||[]).push([[4],{46:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(3),s=t(5),c=t(4),l=t(0),o=t.n(l),h=(t(49),function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).handleClearInput=function(e){e.stopPropagation(),e.preventDefault(),r.setState({searchWord:""})},r.handleInputChange=function(e){r.setState({searchWord:e.target.value})},r.handleSearch=function(){if(!r.state.searchWord)return r.props.history.goBack()},r.state={searchWord:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state.searchWord;return o.a.createElement("div",{className:"page-root page-search"},o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"searchbox"},o.a.createElement("input",{autoFocus:!0,type:"text",className:"input",placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9",value:e,onChange:this.handleInputChange}),o.a.createElement("span",{className:"searchbtn",onClick:this.handleSearch},e?"\u641c\u7d22":"\u53d6\u6d88"),o.a.createElement("span",{className:e?"clear show":"clear",onClick:this.handleClearInput}))),o.a.createElement("div",{className:"guess-tit"},"\u731c\u4f60\u60f3\u641c"))}}]),t}(o.a.Component));a.default=h},49:function(e,a,t){}}]);
//# sourceMappingURL=4.0e064a16.chunk.js.map