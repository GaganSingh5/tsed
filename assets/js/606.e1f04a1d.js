(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{1043:function(a,s,n){"use strict";n.r(s);var t=n(43),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"sockethandlersbuilder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sockethandlersbuilder"}},[a._v("#")]),a._v(" SocketHandlersBuilder "),n("Badge",{attrs:{text:"Class",type:"class"}}),a._v(" "),n("Badge",{attrs:{text:"experimental",title:"experimental",type:"experimental"}}),a._v(" "),n("Badge",{attrs:{text:"private",title:"private",type:"private"}})],1),a._v(" "),n("section",{staticClass:"symbol-info"},[n("table",{staticClass:"is-full-width"},[n("tbody",[n("tr",[n("th",[a._v("Module")]),n("td",[n("div",{staticClass:"lang-typescript"},[n("span",{staticClass:"token keyword"},[a._v("import")]),a._v(" { SocketHandlersBuilder } "),n("span",{staticClass:"token keyword"},[a._v("from")]),a._v(" "),n("span",{staticClass:"token string"},[a._v('"@tsed/socketio/src/class/SocketHandlersBuilder"')])])])]),n("tr",[n("th",[a._v("Source")]),n("td",[n("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.6/packages/socketio/src/class/SocketHandlersBuilder.ts#L0-L0"}},[a._v("/packages/socketio/src/class/SocketHandlersBuilder.ts")])])])])])]),a._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[a._v("#")]),a._v(" Overview")]),a._v(" "),n("div",{staticClass:"language-typescript"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" SocketHandlersBuilder "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),n("div",{pre:!0,attrs:{class:"language- extra-class"}},[n("pre",[n("code",[a._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>provider<span class="token punctuation">:</span> <a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">,</span> converterService<span class="token punctuation">:</span> <a href="/api/common/converters/services/ConverterService.html"><span class="token">ConverterService</span></a><span class="token punctuation">,</span> injector<span class="token punctuation">:</span> <a href="/api/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n *\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\n<span class="token function">build</span><span class="token punctuation">(</span>nsps<span class="token punctuation">:</span> Map&lt;<span class="token keyword">string</span><span class="token punctuation">,</span> SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> hook\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> eventName\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">}</span> socket\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">}</span> nsp\n */\n<span class="token function">onConnection</span><span class="token punctuation">(</span>socket<span class="token punctuation">:</span> SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">,</span> nsp<span class="token punctuation">:</span> SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token function">onDisconnect</span><span class="token punctuation">(</span>socket<span class="token punctuation">:</span> SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">,</span> nsp<span class="token punctuation">:</span> SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">}</span> socket\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">}</span> socket\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">}</span> socket\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">}</span> nsp\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/socketio/interfaces/ISocketHandlerMetadata.html"><span class="token">ISocketHandlerMetadata</span></a><span class="token punctuation">}</span> handlerMetadata\n * @param args\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Socket.html"><span class="token">Socket</span></a><span class="token punctuation">}</span> socket\n * @param <span class="token punctuation">{</span>SocketIO.<a href="/api/socketio/decorators/Namespace.html"><span class="token">Namespace</span></a><span class="token punctuation">}</span> nsp\n * @returns <span class="token punctuation">{</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span> =&gt; Promise&lt;<span class="token keyword">void</span>&gt;<span class="token punctuation">}</span>\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/socketio/interfaces/ISocketHandlerMetadata.html"><span class="token">ISocketHandlerMetadata</span></a><span class="token punctuation">}</span> handlerMetadata\n * @param scope\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/socketio/interfaces/ISocketHandlerMetadata.html"><span class="token">ISocketHandlerMetadata</span></a><span class="token punctuation">}</span> handlerMetadata\n * @param scope\n * @returns <span class="token punctuation">{</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">}</span>\n */\n\n/**\n *\n * @param target\n * @param scope\n * @param promise\n * @returns <span class="token punctuation">{</span><span class="token punctuation">(</span>args<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> =&gt; Promise&lt;<span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>&gt;<span class="token punctuation">}</span>\n */\n\n/**\n *\n * @returns <span class="token punctuation">{</span>Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">}</span>\n * @param instance\n * @param handlerMetadata\n * @param scope\n */\n\n/**\n *\n * @param parameters\n * @param scope\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n */\n')])])]),n("p",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])])])])]),n("p"),a._v(" "),n("h2",{attrs:{id:"members"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[a._v("#")]),a._v(" Members")]),a._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("nsps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Map<"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" SocketIO."),n("a",{pre:!0,attrs:{href:"/api/socketio/decorators/Namespace.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[a._v("Namespace")])]),a._v(">"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" this"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])])]),n("hr"),a._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" SocketIO."),n("a",{pre:!0,attrs:{href:"/api/socketio/decorators/Socket.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[a._v("Socket")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" nsp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" SocketIO."),n("a",{pre:!0,attrs:{href:"/api/socketio/decorators/Namespace.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[a._v("Namespace")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])])]),n("hr"),a._v(" "),n("div",{pre:!0},[n("div",{pre:!0,attrs:{class:"method-overview"}},[n("div",{pre:!0,attrs:{class:"language-typescript"}},[n("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[n("code",{pre:!0,attrs:{class:"typescript-lang "}},[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("onDisconnect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" SocketIO."),n("a",{pre:!0,attrs:{href:"/api/socketio/decorators/Socket.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[a._v("Socket")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" nsp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" SocketIO."),n("a",{pre:!0,attrs:{href:"/api/socketio/decorators/Namespace.html"}},[n("span",{pre:!0,attrs:{class:"token"}},[a._v("Namespace")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);