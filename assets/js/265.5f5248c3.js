(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{701:function(t,s,e){"use strict";e.r(s);var a=e(43),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"iserverlifecycle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iserverlifecycle"}},[t._v("#")]),t._v(" IServerLifecycle "),e("Badge",{attrs:{text:"Interface",type:"interface"}}),t._v(" "),e("Badge",{attrs:{text:"deprecated",title:"deprecated",type:"deprecated"}})],1),t._v(" "),e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[t._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { IServerLifecycle } "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),e("tr",[e("th",[t._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.6/packages/common/src/platform-express/interfaces/IServerLifeCycle.ts#L0-L0"}},[t._v("/packages/common/src/platform-express/interfaces/IServerLifeCycle.ts")])])])])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("div",{staticClass:"language-typescript"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" IServerLifecycle "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/common/platform-builder/interfaces/IHooks.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("IHooks")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    version"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * This method is called when the server starting his lifecycle.\n     * @deprecated use $beforeInit\n     */\n    $onInit?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" | Promise<"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * @deprecated use $beforeRoutesInit instead\n     */\n    $onMountingMiddlewares?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" | Promise<"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * @deprecated use $afterRoutesInit\n     */\n    $onRoutesInit?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" | Promise<"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * @deprecated use $onReady\n     */\n    $onServerReady?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" | Promise<"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * @deprecated will be removed in favor of promise rejection\n     */\n    $onServerInitError?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),t._v(" "),e("h2",{attrs:{id:"members"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("version"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang deprecated "}},[t._v("$onInit?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" | Promise<"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),e("p",[t._v("This method is called when the server starting his lifecycle.")])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang deprecated "}},[t._v("$onMountingMiddlewares?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" | Promise<"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang deprecated "}},[t._v("$onRoutesInit?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" | Promise<"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang deprecated "}},[t._v("$onServerReady?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" | Promise<"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),e("hr"),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"method-overview"}},[e("div",{pre:!0,attrs:{class:"language-typescript"}},[e("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[e("code",{pre:!0,attrs:{class:"typescript-lang deprecated "}},[t._v("$onServerInitError?"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);