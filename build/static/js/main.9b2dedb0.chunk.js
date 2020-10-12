(this["webpackJsonpii-proto1"]=this["webpackJsonpii-proto1"]||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(4),l=n(1),i=n(6),h=n(5),s=n(0),r=n.n(s),d=n(2),c=n.n(d),u=(n(18),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).handleToggleShowText=o.props.handleToggleShowText.bind(Object(l.a)(o)),o}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"toolbar"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:this.props.showText,onChange:this.handleToggleShowText}),"Show text"),r.a.createElement("button",{onClick:this.props.handleClearText},"Clear"),r.a.createElement("button",{onClick:this.props.handleUndo,disabled:this.props.undoDisabled},"Undo Clear"),r.a.createElement("button",{disabled:this.props.textEmpty,onClick:this.props.handleCopy},"Copy"))}}]),n}(r.a.Component)),p=n(11),x=n.n(p),b=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).editorDiv=r.a.createRef(),o.handleFocus=o.handleFocus.bind(Object(l.a)(o)),o.handleOnChange=o.handleOnChange.bind(Object(l.a)(o)),o.handleKeyDown=o.handleKeyDown.bind(Object(l.a)(o)),o}return Object(o.a)(n,[{key:"handleFocus",value:function(){if(!this.props.showText){var e=document.createRange(),t=window.getSelection(),n=this.editorDiv.current.childNodes[this.editorDiv.current.childNodes.length-1];n&&n.childNodes&&n.childNodes.length>0&&(n=n.childNodes[n.childNodes.length-1]),n&&n.textContent&&(e.setStart(n,n.textContent.length),e.collapse(!0),t.removeAllRanges(),t.addRange(e))}}},{key:"handleKeyDown",value:function(e){[8,37,38,39,40].includes(e.keyCode)&&e.preventDefault()}},{key:"handleOnChange",value:function(e){this.props.handleUpdateText(e.target.value)}},{key:"render",value:function(){var e="text"+(this.props.showText?"":" writing-mode");return r.a.createElement("div",null,r.a.createElement("h2",null,"Editor"),r.a.createElement(x.a,{className:e,disabled:!!this.props.showText,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onChange:this.handleOnChange,html:this.props.text,innerRef:this.editorDiv,spellCheck:!1}))}}]),n}(r.a.Component),v=n(12),T=n.n(v),g=n(8),m=(n(23),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={showText:!1,text:"",previousText:""},o.handleCopy=o.handleCopy.bind(Object(l.a)(o)),o.handleUpdateText=o.handleUpdateText.bind(Object(l.a)(o)),o.handleUndo=o.handleUndo.bind(Object(l.a)(o)),o}return Object(o.a)(n,[{key:"handleCopy",value:function(){var e=this.state.text;e=(e=(e=(e=e.replace(/<\/div>/gi,"\n")).replace(/<br\s*[\/]?>/gi,"\n")).replace(/<\/p>/gi,"\n")).replace(/(<([^>]+)>)/gi,""),T()(e)?Object(g.c)("Copied text. Now get to editing!"):Object(g.c)("Could not copy text :(")}},{key:"handleClearText",value:function(){var e=this.state.text;this.setState({text:"",previousText:e})}},{key:"handleToggleShowText",value:function(){var e=this.state.showText;this.setState({showText:!e})}},{key:"handleUpdateText",value:function(e){this.setState({text:e,previousText:""})}},{key:"handleUndo",value:function(){this.setState({text:this.state.previousText,previousText:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"\ud83d\udd8b Invisible Ink"),r.a.createElement(u,{showText:this.state.showText,handleClearText:function(){return e.handleClearText()},handleCopy:function(){return e.handleCopy()},handleToggleShowText:function(){return e.handleToggleShowText()},handleUndo:this.handleUndo,textEmpty:""===this.state.text,undoDisabled:!this.state.previousText}),r.a.createElement("h2",null,"What are you writing about today?"),r.a.createElement("input",{className:"writing-prompt"}),r.a.createElement(b,{handleUpdateText:this.handleUpdateText,showText:this.state.showText,text:this.state.text}),r.a.createElement(g.b,{autoClose:5e3,position:"bottom-left",hideProgressBar:!0,transition:g.a}))}}]),n}(r.a.Component));c.a.render(r.a.createElement(m,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9b2dedb0.chunk.js.map