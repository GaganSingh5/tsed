(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{1063:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"socketsession"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socketsession"}},[t._v("#")]),t._v(" SocketSession "),a("Badge",{attrs:{text:"Type alias",type:"type"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { SocketSession } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/socketio"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.6/packages/socketio/src/decorators/socketSession.ts#L0-L0"}},[t._v("/packages/socketio/src/decorators/socketSession.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("type SocketSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),t._v("Map<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n/**\n * "),a("a",{pre:!0,attrs:{href:"/api/di/decorators/Inject.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Inject")])]),t._v(" the "),a("a",{pre:!0,attrs:{href:"/api/socketio/decorators/Socket.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Socket")])]),t._v(" instance in the decorated parameter.\n *\n * ### "),a("a",{pre:!0,attrs:{href:"/api/swagger/decorators/Example.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Example")])]),t._v("\n *\n * ```typescript\n * @"),a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/socketio/decorators/SocketService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("SocketService")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"/nsp"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n * "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" MyWS "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n *\n *   @"),a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/socketio/decorators/Input.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Input")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"event"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n *   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@SocketSession session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n *     console."),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n *   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n * ```\n *\n * @param target\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" propertyKey\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" index\n * @decorator\n */\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" function "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SocketSession")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" propertyKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);