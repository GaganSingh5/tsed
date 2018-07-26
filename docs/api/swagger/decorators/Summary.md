---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation Summary decorator
---
# Summary <Badge text="Decorator" type="decorator"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { Summary }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/swagger"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.1/src//swagger/decorators/summary.ts#L0-L0">/swagger/decorators/summary.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">Summary</span><span class="token punctuation">(</span>summary<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  return <span class="token punctuation">(</span>...args<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> =&gt<span class="token punctuation">;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> type<span class="token punctuation"> = </span><span class="token function">getDecoratorType</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    switch <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      case "method"<span class="token punctuation">:</span>
        return <span class="token function"><a href="/api/swagger/decorators/Operation.html"><span class="token">Operation</span></a></span><span class="token punctuation">(</span><span class="token punctuation">{</span>summary<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>...args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      default<span class="token punctuation">:</span>
        throw new <span class="token function">Error</span><span class="token punctuation">(</span>"Summary is only supported on method"<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>



<!-- Description -->
## Description

::: v-pre

Add summary metadata on the decorated element.

## Examples
### On method

```typescript
class Model {
   @Summary("summary")
   id: string;
}
```


:::