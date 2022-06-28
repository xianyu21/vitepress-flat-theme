import{_ as a,c as t,a as n,b as e,t as p,g as o,o as c}from"./app.4d7c6b11.js";const f='{"title":"\u5FEB\u901F\u4F7F\u7528","description":"\u6559\u4F60\u5982\u4F55\u638C\u63E1\u6846\u67B6\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u5FEB\u901F\u4E0A\u624B\u3002","frontmatter":{"title":"\u5FEB\u901F\u4F7F\u7528","head":[["meta",{"name":"description","content":"\u6559\u4F60\u5982\u4F55\u638C\u63E1\u6846\u67B6\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u5FEB\u901F\u4E0A\u624B\u3002"}],["meta",{"name":"keywords","content":"\u5F00\u59CB\u4F7F\u7528"}]]},"headers":[{"level":2,"title":"1. \u811A\u624B\u67B6\u521D\u59CB\u5316\u5E26\u6709\u4E3B\u9898\u7684\u9879\u76EE\u6A21\u7248","slug":"_1-\u811A\u624B\u67B6\u521D\u59CB\u5316\u5E26\u6709\u4E3B\u9898\u7684\u9879\u76EE\u6A21\u7248"},{"level":2,"title":"2. \u901A\u8FC7NPM\u65B9\u5F0F\u4E0B\u8F7D\u5B89\u88C5\u4E3B\u9898","slug":"_2-\u901A\u8FC7npm\u65B9\u5F0F\u4E0B\u8F7D\u5B89\u88C5\u4E3B\u9898"}],"relativePath":"zh-CN/guide/start.md","lastUpdated":null}',l={},r={id:"frontmatter-title",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=o(`<p>\u8BF7\u786E\u4FDD\u4F60\u5DF2\u7ECF\u7528\u8FC7 Vitepress \u6846\u67B6\uFF0C\u56E0\u4E3A\u4E3B\u9898\u662F\u5EFA\u7ACB\u5728\u6846\u67B6\u7684\u57FA\u7840\u4E0A\u4F7F\u7528\u7684\u3002</p><p>\u8BF7\u786E\u4FDD\u4F60\u4F7F\u7528\u7684 vue \u7248\u672C\u662F 3+ \u54E6\u3002</p><h2 id="_1-\u811A\u624B\u67B6\u521D\u59CB\u5316\u5E26\u6709\u4E3B\u9898\u7684\u9879\u76EE\u6A21\u7248" tabindex="-1"><strong>1.</strong> \u811A\u624B\u67B6\u521D\u59CB\u5316\u5E26\u6709\u4E3B\u9898\u7684\u9879\u76EE\u6A21\u7248 <a class="header-anchor" href="#_1-\u811A\u624B\u67B6\u521D\u59CB\u5316\u5E26\u6709\u4E3B\u9898\u7684\u9879\u76EE\u6A21\u7248" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u4F7F\u7528\u811A\u624B\u67B6 vuetom-cli \u811A\u624B\u67B6\u6765\u8FDB\u884C\u4E3B\u9898\u7684\u521D\u59CB\u5316\uFF0C\u4F1A\u5728\u4F60\u672C\u5730\u521D\u59CB\u5316\u4E00\u4E2A\u9879\u76EE\uFF0C\u5F53\u7136\u91CC\u9762\u7684 vitepress-theme-vuetom \u53EF\u80FD\u4E0D\u662F\u6700\u65B0\u7684\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u624B\u52A8\u66F4\u65B0\u4E0B\uFF0C\u6216\u8005\u76F4\u63A5\u62C9\u53D6 <a href="https://github.com/lauset/vitepress-theme-vuetom" target="_blank" rel="noopener noreferrer">\u672C\u7F51\u7AD9</a> \u7684\u4EE3\u7801\u8FDB\u884C\u4FEE\u6539\u4E5F\u53EF\u4EE5</p><ol><li>\u9996\u5148\u5B89\u88C5\u811A\u624B\u67B6\uFF0CNPM\u5B89\u88C5\u524D\u8BF7\u786E\u4FDD\u5F00\u542F\u7BA1\u7406\u5458\u8EAB\u4EFD\u8FD0\u884C\u4FDD\u8BC1\u6709\u6743\u9650</li></ol><div class="language-js light"><pre><code>npm i <span class="token operator">-</span>g vuetom<span class="token operator">-</span>cli
</code></pre></div><ol start="2"><li>\u67E5\u770B\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF0C\u9ED1\u7A97\u53E3\u8FD0\u884C\u4E00\u4E0B\u547D\u4EE4\uFF0C\u8FD4\u56DE\u7248\u672C\u53F7 x.x.x \u5219\u8868\u793A\u5B89\u88C5\u6210\u529F</li></ol><div class="language-js light"><pre><code>vuetom<span class="token operator">-</span>cli <span class="token operator">-</span><span class="token constant">V</span>
</code></pre></div><ol start="3"><li>\u65B0\u5EFA\u4E2A\u9879\u76EE\u6587\u4EF6\u5939\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5728\u4E00\u4E2A\u7A7A\u76EE\u5F55\u8FDB\u884C\u4E0B\u9762\u7684\u521D\u59CB\u5316\u64CD\u4F5C</li></ol><div class="language-js light"><pre><code>vuetom<span class="token operator">-</span>cli init
</code></pre></div><ol><li>\u7136\u540E\u4FBF\u4F1A\u4E0B\u8F7D\u6A21\u7248\uFF0C\u4E0B\u8F7D\u5B8C\u6210\u540E\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5\u4EE5\u6765\u5E76\u8FD0\u884C\u6587\u6863\u7F51\u7AD9</li></ol><div class="language-js light"><pre><code>npm i
npm run dev
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u6A21\u7248\u662F\u4ECE github \u4E0A\u62C9\u53D6\u7684\uFF0C\u53EF\u80FD\u6709\u65F6\u5019\u4F1A\u6709\u7F51\u901F\u7684\u56F0\u60D1\uFF0C\u4E5F\u53EF\u624B\u52A8\u524D\u5F80\u62C9\u53D6 <a href="https://github.com/lauset/vuetom-cli/tree/temp-docs" target="_blank" rel="noopener noreferrer">https://github.com/lauset/vuetom-cli/tree/temp-docs</a></p></div><br><h2 id="_2-\u901A\u8FC7npm\u65B9\u5F0F\u4E0B\u8F7D\u5B89\u88C5\u4E3B\u9898" tabindex="-1"><strong>2.</strong> \u901A\u8FC7NPM\u65B9\u5F0F\u4E0B\u8F7D\u5B89\u88C5\u4E3B\u9898 <a class="header-anchor" href="#_2-\u901A\u8FC7npm\u65B9\u5F0F\u4E0B\u8F7D\u5B89\u88C5\u4E3B\u9898" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u8FD9\u4E2A\u65B9\u5F0F\u9996\u5148\u4F60\u8981\u642D\u5EFA\u4E00\u4E2A vitepress \u9879\u76EE\uFF0C\u4E3B\u9898\u53EA\u662F\u4F1A\u8986\u76D6\u9ED8\u8BA4\u6837\u5F0F\u800C\u5DF2\uFF0C\u6240\u4EE5\u9879\u76EE\u8FD8\u662F\u5F97\u642D\u8D77\u6765\u7684\uFF0C\u53EF\u4EE5\u524D\u5F80\u4E0B\u9762 vitepress \u5B98\u7F51\u94FE\u63A5\u67E5\u770B\u5E76\u5F00\u59CB\u642D\u5EFA</p><p><a href="https://vitepress.vuejs.org/guide/getting-started.html" target="_blank" rel="noopener noreferrer">vitepress\u642D\u5EFA\u6587\u6863</a></p><p>\u642D\u5EFA\u5B8C\u540E\u6700\u7B80\u5355\u7684\u6837\u5B50\u5C31\u662F\u9879\u76EE\u76EE\u5F55\u91CC\u6709\u4E2A <a href="http://index.md" target="_blank" rel="noopener noreferrer">index.md</a> \u6587\u4EF6\uFF0C\u90A3\u4E48\u5F00\u59CB\u4E0B\u4E00\u6B65</p><ol><li>\u5B89\u88C5\u4E3B\u9898\u4F9D\u8D56</li></ol><p>\u4F7F\u7528 NPM \u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684 vitepress-theme-vuetom \u4E3B\u9898\u4F9D\u8D56\u5305\uFF0C\u5728\u4F60\u7684 vitepress \u9879\u76EE\u4E0B\u5B89\u88C5\u4E3B\u9898\u5305\uFF0C\u6253\u5F00 <code>\u7EC8\u7AEF\uFF08DOS\uFF09</code> \u8F93\u5165</p><div class="language-js light"><pre><code>npm i <span class="token operator">-</span><span class="token constant">D</span> vitepress<span class="token operator">-</span>theme<span class="token operator">-</span>vuetom
</code></pre></div><ol start="2"><li>\u5F00\u59CB\u5F15\u5165\u4E3B\u9898</li></ol><p>\u5148\u5728 .vitepress \uFF08\u8FD9\u4E2A\u6587\u4EF6\u5939\u548C\u9996\u9875 <a href="http://index.md" target="_blank" rel="noopener noreferrer">index.md</a> \u662F\u540C\u7EA7\u76EE\u5F55\uFF0C\u6CA1\u6709\u7684\u81EA\u5DF1\u521B\u5EFA\u6216\u8005\u53BB vitepress \u5B98\u7F51\u770B\u6587\u6863\uFF09\u4E2D\u65B0\u5EFA\u4E00\u4E2A\u540D\u4E3A theme \u7684\u6587\u4EF6\u5939\uFF0C\u5728\u8BE5\u6587\u4EF6\u4E0B\u65B0\u5EFA\u4E00\u4E2A index.ts \u6587\u4EF6\uFF0C\u5F53\u7136\u7528 js \u8FD8\u662F ts \u6587\u4EF6\u5C31\u770B\u4F60\u81EA\u5DF1\u9879\u76EE\u7684\u51B3\u5B9A\u4E86\u3002</p><p>\u5927\u81F4\u5185\u5BB9\u5982\u4E0B:</p><p><code>VuetomTheme</code> \u662F\u4E3B\u8981\u7684\u4E3B\u9898\u5E03\u5C40</p><p><code>VuetomUI</code> \u662F\u5185\u7F6E\u7684UI\u7EC4\u4EF6</p><div class="language-javascript light"><pre><code><span class="token comment">// .vitepress/theme/index.ts</span>
<span class="token comment">// \u9ED8\u8BA4\u5BFC\u51FA\u6587\u6863\u7C7B\u578B\u7684\u4E3B\u9898</span>
<span class="token keyword">import</span> VuetomTheme <span class="token keyword">from</span> <span class="token string">&#39;vitepress-theme-vuetom&#39;</span> 

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>VuetomTheme<span class="token punctuation">,</span>
  <span class="token function">enhanceApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// app.use(VuetomUI)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5F15\u5165\u4E86\u4E3B\u9898\uFF0C\u7136\u540E\u4F60\u7684 <a href="http://index.md" target="_blank" rel="noopener noreferrer">index.md</a> \u91CC\u5199\u4E0A\u4E00\u4E9B\u5185\u5BB9\u5E94\u8BE5\u5C31\u53EF\u4EE5\u770B\u51FA\u6548\u679C\u4E86</p><div class="language-html light"><pre><code>---
home: true
heroImage: /logo/vuetom-logo-m.png
heroAlt: LOGO
heroText: Vuetom
tagline: vitepress flat theme 

actionText: \u5FEB \u901F \u5F00 \u59CB
actionLink: /zh-CN/guide/info

altActionText: \u914D \u7F6E
altActionLink: /zh-CN/guide/config

features:
  - title: \u{1F4E6} \u4F18\u5316\u7684\u6784\u5EFA
    details: \u53EF\u9009 \u201C\u591A\u9875\u5E94\u7528\u201D \u6216 \u201C\u5E93\u201D \u6A21\u5F0F\u7684\u9884\u914D\u7F6E Rollup \u6784\u5EFA
  - title: \u{1F529} \u901A\u7528\u7684\u63D2\u4EF6
    details: \u5728\u5F00\u53D1\u548C\u6784\u5EFA\u4E4B\u95F4\u5171\u4EAB Rollup-superset \u63D2\u4EF6\u63A5\u53E3\u3002
  - title: \u{1F511} \u5B8C\u5168\u7C7B\u578B\u5316\u7684API
    details: \u7075\u6D3B\u7684 API \u548C\u5B8C\u6574 TypeScript \u7C7B\u578B\u3002

footer: MIT Licensed
---

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>frontpage sponsors<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{ data.text }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&#39;\u81EA\u5B9A\u4E49\u5185\u5BB9&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u8FD0\u884C\u9879\u76EE\u540E\uFF0C\u5728 [localhost:3000] \u4E2D\u8FDB\u5165\u9996\u9875</p><p>\u81F3\u5C11\u5230\u8FD9\u91CC\u4E3B\u9898\u5DF2\u7ECF\u5B89\u88C5\u5B8C\u6210\u4E86\uFF0C\u4E0B\u4E00\u6B65\u5C31\u662F\u4E3B\u9898\u7684\u914D\u7F6E\u4E86\uFF0C\u4E3B\u9898\u4EC0\u4E48\u6837\u8FD8\u662F\u8981\u770B\u4F60\u914D\u7684\u4EC0\u4E48\u6837\u5B50\u54E6\u3002</p>`,31);function k(s,d,g,m,h,v){return c(),t("div",null,[n("h1",r,[e(p(s.$frontmatter.title)+" ",1),i]),u])}var x=a(l,[["render",k]]);export{f as __pageData,x as default};
