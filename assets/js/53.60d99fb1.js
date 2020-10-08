(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{491:function(a,n,s){"use strict";s.r(n);var t=s(43),e=Object(t.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"converterservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#converterservice"}},[a._v("#")]),a._v(" ConverterService "),s("Badge",{attrs:{text:"Class",type:"class"}})],1),a._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[a._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[a._v("import")]),a._v(" { ConverterService } "),s("span",{staticClass:"token keyword"},[a._v("from")]),a._v(" "),s("span",{staticClass:"token string"},[a._v('"@tsed/common"')])])])]),s("tr",[s("th",[a._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.6/packages/common/src/converters/services/ConverterService.ts#L0-L0"}},[a._v("/packages/common/src/converters/services/ConverterService.ts")])])])])])]),a._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[a._v("#")]),a._v(" Overview")]),a._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" ConverterService "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[a._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span>injectorService<span class="token punctuation">:</span> <a href="/api/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">,</span> configuration<span class="token punctuation">:</span> <a href="/api/di/decorators/Configuration.html"><span class="token">Configuration</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n * Return a JsonMetadata for a properties.\n * @param properties\n * @param propertyKey\n * @returns <span class="token punctuation">{</span>undefined|V|<span class="token keyword">string</span>|<span class="token keyword">any</span>|T|IDBRequest<span class="token punctuation">}</span>\n */\n<span class="token keyword">static</span> <span class="token function">getPropertyMetadata</span><span class="token punctuation">(</span>properties<span class="token punctuation">:</span> Map&lt;<span class="token keyword">string</span> | symbol<span class="token punctuation">,</span> <a href="/api/common/mvc/models/PropertyMetadata.html"><span class="token">PropertyMetadata</span></a>&gt;<span class="token punctuation">,</span> propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span> | symbol<span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/mvc/models/PropertyMetadata.html"><span class="token">PropertyMetadata</span></a> | undefined<span class="token punctuation">;</span>\n/**\n * Convert instance to plainObject.\n *\n * ### <a href="/api/common/mvc/decorators/method/Options.html"><span class="token">Options</span></a>\n *\n * - `checkRequiredValue`<span class="token punctuation">:</span> Disable the required check condition.\n *\n * @param obj\n * @param options\n */\n<span class="token function">serialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/common/converters/interfaces/IConverterOptions.html"><span class="token">IConverterOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n *\n * @param obj\n * @param <span class="token punctuation">{</span><a href="/api/common/converters/interfaces/IConverterOptions.html"><span class="token">IConverterOptions</span></a><span class="token punctuation">}</span> options\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\n<span class="token function">serializeClass</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/common/converters/interfaces/IConverterOptions.html"><span class="token">IConverterOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n * Convert a plainObject to targetType.\n *\n * ### <a href="/api/common/mvc/decorators/method/Options.html"><span class="token">Options</span></a>\n *\n * - `ignoreCallback`<span class="token punctuation">:</span> callback called for each object which will be deserialized. The callback can return a <span class="token keyword">boolean</span> to avoid the default converter behavior.\n * - `checkRequiredValue`<span class="token punctuation">:</span> Disable the required check condition.\n *\n * @param obj Object source that will be deserialized\n * @param targetType <a href="/api/common/jsonschema/decorators/Pattern.html"><span class="token">Pattern</span></a> of the object deserialized\n * @param baseType\n * @param options\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\n<span class="token function">deserialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> targetType<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> baseType?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> options?<span class="token punctuation">:</span> <a href="/api/common/converters/interfaces/IConverterOptions.html"><span class="token">IConverterOptions</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n *\n * @param targetType\n * @returns <span class="token punctuation">{</span><span class="token keyword">any</span><span class="token punctuation">}</span>\n */\ngetConverter&lt;T <span class="token keyword">extends</span> <a href="/api/common/converters/interfaces/IConverter.html"><span class="token">IConverter</span></a>&gt;<span class="token punctuation">(</span>targetType<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> T | undefined<span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">}</span> target\n * @returns <span class="token punctuation">{</span>"error" | "accept" | "ignore"<span class="token punctuation">}</span>\n */\n<span class="token function">getAdditionalPropertiesLevel</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token string">"error"</span> | "accept" | "ignore" | undefined<span class="token punctuation">;</span>\n/**\n *\n * @param obj\n * @param instance\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> propertyName\n * @param <span class="token punctuation">{</span><a href="/api/common/mvc/models/PropertyMetadata.html"><span class="token">PropertyMetadata</span></a><span class="token punctuation">}</span> propertyMetadata\n * @param options\n */\n\n/**\n * @deprecated\n * @param instance\n * @param <span class="token punctuation">{</span>Map&lt;<span class="token keyword">string</span> | symbol<span class="token punctuation">,</span> <a href="/api/common/mvc/models/PropertyMetadata.html"><span class="token">PropertyMetadata</span></a>&gt;<span class="token punctuation">}</span> properties\n */\n\n/**\n *\n * @param instance\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> propertyKey\n * @param <span class="token punctuation">{</span><a href="/api/common/mvc/models/PropertyMetadata.html"><span class="token">PropertyMetadata</span></a> | undefined<span class="token punctuation">}</span> propertyMetadata\n * @param options\n */\n')])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[a._v("#")]),a._v(" Members")]),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getPropertyMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("properties"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Map<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")]),a._v(" | symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/PropertyMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("PropertyMetadata")])]),a._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" propertyKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("string")]),a._v(" | symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/PropertyMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("PropertyMetadata")])]),a._v(" | undefined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("p",[a._v("Return a JsonMetadata for a properties.")])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("serialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" options?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/converters/interfaces/IConverterOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("IConverterOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("p",[a._v("Convert instance to plainObject.")]),a._v(" "),s("h3",{pre:!0,attrs:{id:"options"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#options"}},[a._v("#")]),a._v(" Options")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("checkRequiredValue")]),a._v(": Disable the required check condition.")])])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("serializeClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" options?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/converters/interfaces/IConverterOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("IConverterOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("deserialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" targetType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" baseType?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" options?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/converters/interfaces/IConverterOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("IConverterOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),a._v(" "),s("th",[a._v("Type")]),a._v(" "),s("th",[a._v("Description")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("obj")]),a._v(" "),s("td",[s("code",[a._v("any")])]),a._v(" "),s("td",[a._v("Object source that will be deserialized  targetType")])])])]),a._v(" "),s("p",[a._v("Convert a plainObject to targetType.")]),a._v(" "),s("h3",{pre:!0,attrs:{id:"options-2"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#options-2"}},[a._v("#")]),a._v(" Options")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("ignoreCallback")]),a._v(": callback called for each object which will be deserialized. The callback can return a boolean to avoid the default converter behavior.")]),a._v(" "),s("li",[s("code",[a._v("checkRequiredValue")]),a._v(": Disable the required check condition.")])])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[a._v("getConverter<T "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/converters/interfaces/IConverter.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("IConverter")])]),a._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("targetType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" T | undefined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])])]),s("hr"),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getAdditionalPropertiesLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[a._v("Type")])]),a._v("<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("any")]),a._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"error"')]),a._v(' | "accept" | "ignore" | undefined'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])])])])])])])}),[],!1,null,null,null);n.default=e.exports}}]);