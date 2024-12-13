var ye=Object.defineProperty;var ee=a=>{throw TypeError(a)};var $e=(a,t,e)=>t in a?ye(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var d=(a,t,e)=>$e(a,typeof t!="symbol"?t+"":t,e),Te=(a,t,e)=>t.has(a)||ee("Cannot "+e);var te=(a,t,e)=>t.has(a)?ee("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e);var B=(a,t,e)=>(Te(a,t,"access private method"),e);import{r as z,j as x,B as ne,T as ze}from"./index-CL14asXn.js";import{I as Re}from"./InputOutputLayout.component-2nQ5MSfz.js";import{C as _e}from"./CodeEditor.component-B0O-GlEp.js";import{H as Se}from"./HtmlViewer.component-CqvzD8uV.js";import{d as Ie}from"./debounce.utils-CkXj8l4D.js";import{S as se}from"./index-XRM7WuMU.js";import{R as Ae,D as Ce}from"./BookOutlined-T5vqlnBL.js";import"./editorWorker-CA1WEzK_.js";import"./gapSize-U1swVQyS.js";const ie=`# h1 Heading
## h2 Heading
### h3 Heading

**This is bold text**

*This is italic text*

~~Strikethrough~~`;function N(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let S=N();function he(a){S=a}const pe=/[&<>"']/,Ee=new RegExp(pe.source,"g"),ue=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Le=new RegExp(ue.source,"g"),Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},re=a=>Be[a];function m(a,t){if(t){if(pe.test(a))return a.replace(Ee,re)}else if(ue.test(a))return a.replace(Le,re);return a}const je=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function qe(a){return a.replace(je,(t,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const Pe=/(^|[^\[])\^/g;function k(a,t){let e=typeof a=="string"?a:a.source;t=t||"";const n={replace:(r,i)=>{let s=typeof i=="string"?i:i.source;return s=s.replace(Pe,"$1"),e=e.replace(r,s),n},getRegex:()=>new RegExp(e,t)};return n}function le(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const A={exec:()=>null};function oe(a,t){const e=a.replace(/\|/g,(i,s,l)=>{let o=!1,p=s;for(;--p>=0&&l[p]==="\\";)o=!o;return o?"|":" |"}),n=e.split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function j(a,t,e){const n=a.length;if(n===0)return"";let r=0;for(;r<n;){const i=a.charAt(n-r-1);if(i===t&&!e)r++;else if(i!==t&&e)r++;else break}return a.slice(0,n-r)}function Ze(a,t){if(a.indexOf(t[1])===-1)return-1;let e=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===t[0])e++;else if(a[n]===t[1]&&(e--,e<0))return n;return-1}function ae(a,t,e,n){const r=t.href,i=t.title?m(t.title):null,s=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:e,href:r,title:i,text:s,tokens:n.inlineTokens(s)};return n.state.inLink=!1,l}return{type:"image",raw:e,href:r,title:i,text:m(s)}}function ve(a,t){const e=a.match(/^(\s+)(?:```)/);if(e===null)return t;const n=e[1];return t.split(`
`).map(r=>{const i=r.match(/^\s+/);if(i===null)return r;const[s]=i;return s.length>=n.length?r.slice(n.length):r}).join(`
`)}class P{constructor(t){d(this,"options");d(this,"rules");d(this,"lexer");this.options=t||S}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:j(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],r=ve(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const r=j(n,"#");(this.options.pedantic||!r||/ $/.test(r))&&(n=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=e[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=j(n.replace(/^ *>[ \t]?/gm,""),`
`);const r=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(n);return this.lexer.state.top=r,{type:"blockquote",raw:e[0],tokens:i,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const r=n.length>1,i={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const s=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",o="",p=!1;for(;t;){let c=!1;if(!(e=s.exec(t))||this.rules.block.hr.test(t))break;l=e[0],t=t.substring(l.length);let u=e[2].split(`
`,1)[0].replace(/^\t+/,M=>" ".repeat(3*M.length)),h=t.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,o=u.trimStart()):(f=e[2].search(/[^ ]/),f=f>4?1:f,o=u.slice(f),f+=e[1].length);let $=!1;if(!u&&/^ *$/.test(h)&&(l+=h+`
`,t=t.substring(h.length+1),c=!0),!c){const M=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),J=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),K=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),Y=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;t;){const O=t.split(`
`,1)[0];if(h=O,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),K.test(h)||Y.test(h)||M.test(h)||J.test(t))break;if(h.search(/[^ ]/)>=f||!h.trim())o+=`
`+h.slice(f);else{if($||u.search(/[^ ]/)>=4||K.test(u)||Y.test(u)||J.test(u))break;o+=`
`+h}!$&&!h.trim()&&($=!0),l+=O+`
`,t=t.substring(O.length+1),u=h.slice(f)}}i.loose||(p?i.loose=!0:/\n *\n *$/.test(l)&&(p=!0));let b=null,T;this.options.gfm&&(b=/^\[[ xX]\] /.exec(o),b&&(T=b[0]!=="[ ] ",o=o.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:l,task:!!b,checked:T,loose:!1,text:o,tokens:[]}),i.raw+=l}i.items[i.items.length-1].raw=l.trimEnd(),i.items[i.items.length-1].text=o.trimEnd(),i.raw=i.raw.trimEnd();for(let c=0;c<i.items.length;c++)if(this.lexer.state.top=!1,i.items[c].tokens=this.lexer.blockTokens(i.items[c].text,[]),!i.loose){const u=i.items[c].tokens.filter(f=>f.type==="space"),h=u.length>0&&u.some(f=>/\n.*\n/.test(f.raw));i.loose=h}if(i.loose)for(let c=0;c<i.items.length;c++)i.items[c].loose=!0;return i}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(/\s+/g," "),r=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:r,title:i}}}table(t){const e=this.rules.block.table.exec(t);if(!e||!/[:|]/.test(e[2]))return;const n=oe(e[1]),r=e[2].replace(/^\||\| *$/g,"").split("|"),i=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const l of r)/^ *-+: *$/.test(l)?s.align.push("right"):/^ *:-+: *$/.test(l)?s.align.push("center"):/^ *:-+ *$/.test(l)?s.align.push("left"):s.align.push(null);for(const l of n)s.header.push({text:l,tokens:this.lexer.inline(l)});for(const l of i)s.rows.push(oe(l,s.header.length).map(o=>({text:o,tokens:this.lexer.inline(o)})));return s}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:m(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const s=j(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=Ze(e[2],"()");if(s>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],i="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);s&&(r=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(n)?r=r.slice(1):r=r.slice(1,-1)),ae(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const r=(n[2]||n[1]).replace(/\s+/g," "),i=e[r.toLowerCase()];if(!i){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return ae(n,i,n[0],this.lexer)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||r[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const s=[...r[0]].length-1;let l,o,p=s,c=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*t.length+s);(r=u.exec(e))!=null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(o=[...l].length,r[3]||r[4]){p+=o;continue}else if((r[5]||r[6])&&s%3&&!((s+o)%3)){c+=o;continue}if(p-=o,p>0)continue;o=Math.min(o,o+p+c);const h=[...r[0]][0].length,f=t.slice(0,s+r.index+h+o);if(Math.min(s,o)%2){const b=f.slice(1,-1);return{type:"em",raw:f,text:b,tokens:this.lexer.inlineTokens(b)}}const $=f.slice(2,-2);return{type:"strong",raw:f,text:$,tokens:this.lexer.inlineTokens($)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const r=/[^ ]/.test(n),i=/^ /.test(n)&&/ $/.test(n);return r&&i&&(n=n.substring(1,n.length-1)),n=m(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=m(e[1]),r="mailto:"+n):(n=m(e[1]),r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,i;if(e[2]==="@")r=m(e[0]),i="mailto:"+r;else{let s;do s=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(s!==e[0]);r=m(e[0]),e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){let n;return this.lexer.state.inRawBlock?n=e[0]:n=m(e[0]),{type:"text",raw:e[0],text:n}}}}const He=/^(?: *(?:\n|$))+/,Me=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Oe=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,E=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Qe=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fe=/(?:[*+-]|\d{1,9}[.)])/,ge=k(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,fe).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),F=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,De=/^[^\n]+/,U=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ne=k(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",U).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Fe=k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fe).getRegex(),H="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",V=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ue=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",V).replace("tag",H).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ke=k(F).replace("hr",E).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H).getRegex(),Ve=k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ke).getRegex(),X={blockquote:Ve,code:Me,def:Ne,fences:Oe,heading:Qe,hr:E,html:Ue,lheading:ge,list:Fe,newline:He,paragraph:ke,table:A,text:De},ce=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",E).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H).getRegex(),Xe={...X,table:ce,paragraph:k(F).replace("hr",E).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ce).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H).getRegex()},Ge={...X,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",V).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:A,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(F).replace("hr",E).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ge).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},de=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,We=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,xe=/^( {2,}|\\)\n(?!\s*$)/,Je=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,L="\\p{P}\\p{S}",Ke=k(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,L).getRegex(),Ye=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,et=k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,L).getRegex(),tt=k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,L).getRegex(),nt=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,L).getRegex(),st=k(/\\([punct])/,"gu").replace(/punct/g,L).getRegex(),it=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),rt=k(V).replace("(?:-->|$)","-->").getRegex(),lt=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",rt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Z=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ot=k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Z).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),me=k(/^!?\[(label)\]\[(ref)\]/).replace("label",Z).replace("ref",U).getRegex(),be=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",U).getRegex(),at=k("reflink|nolink(?!\\()","g").replace("reflink",me).replace("nolink",be).getRegex(),G={_backpedal:A,anyPunctuation:st,autolink:it,blockSkip:Ye,br:xe,code:We,del:A,emStrongLDelim:et,emStrongRDelimAst:tt,emStrongRDelimUnd:nt,escape:de,link:ot,nolink:be,punctuation:Ke,reflink:me,reflinkSearch:at,tag:lt,text:Je,url:A},ct={...G,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",Z).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Z).getRegex()},Q={...G,escape:k(de).replace("])","~|])").getRegex(),url:k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ht={...Q,br:k(xe).replace("{2,}","*").getRegex(),text:k(Q.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},q={normal:X,gfm:Xe,pedantic:Ge},I={normal:G,gfm:Q,breaks:ht,pedantic:ct};class w{constructor(t){d(this,"tokens");d(this,"options");d(this,"state");d(this,"tokenizer");d(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||S,this.options.tokenizer=this.options.tokenizer||new P,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:q.normal,inline:I.normal};this.options.pedantic?(e.block=q.pedantic,e.inline=I.pedantic):this.options.gfm&&(e.block=q.gfm,this.options.breaks?e.inline=I.breaks:e.inline=I.gfm),this.tokenizer.rules=e}static get rules(){return{block:q,inline:I}}static lex(t,e){return new w(e).lex(t)}static lexInline(t,e){return new w(e).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const n=this.inlineQueue[e];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,e=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(l,o,p)=>o+"    ".repeat(p.length));let n,r,i,s;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length),n.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+n.raw,r.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(i=t,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=t.slice(1);let p;this.options.extensions.startBlock.forEach(c=>{p=c.call({lexer:this},o),typeof p=="number"&&p>=0&&(l=Math.min(l,p))}),l<1/0&&l>=0&&(i=t.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){r=e[e.length-1],s&&r.type==="paragraph"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(n),s=i.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&r.type==="text"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(n);continue}if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,r,i,s=t,l,o,p;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,l.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(o||(p=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(n=c.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.escape(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.tag(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);continue}if(n=this.tokenizer.link(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(n.raw.length),r=e[e.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);continue}if(n=this.tokenizer.emStrong(t,s,p)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.codespan(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.br(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.del(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.autolink(t)){t=t.substring(n.raw.length),e.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(t))){t=t.substring(n.raw.length),e.push(n);continue}if(i=t,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const u=t.slice(1);let h;this.options.extensions.startInline.forEach(f=>{h=f.call({lexer:this},u),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(i=t.substring(0,c+1))}if(n=this.tokenizer.inlineText(i)){t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(p=n.raw.slice(-1)),o=!0,r=e[e.length-1],r&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);continue}if(t){const c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return e}}class v{constructor(t){d(this,"options");this.options=t||S}code(t,e,n){var i;const r=(i=(e||"").match(/^\S*/))==null?void 0:i[0];return t=t.replace(/\n$/,"")+`
`,r?'<pre><code class="language-'+m(r)+'">'+(n?t:m(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:m(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,e){return t}heading(t,e,n){return`<h${e}>${t}</h${e}>
`}hr(){return`<hr>
`}list(t,e,n){const r=e?"ol":"ul",i=e&&n!==1?' start="'+n+'"':"";return"<"+r+i+`>
`+t+"</"+r+`>
`}listitem(t,e,n){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){const r=le(t);if(r===null)return n;t=r;let i='<a href="'+t+'"';return e&&(i+=' title="'+e+'"'),i+=">"+n+"</a>",i}image(t,e,n){const r=le(t);if(r===null)return n;t=r;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${e}"`),i+=">",i}text(t){return t}}class W{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class y{constructor(t){d(this,"options");d(this,"renderer");d(this,"textRenderer");this.options=t||S,this.options.renderer=this.options.renderer||new v,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new W}static parse(t,e){return new y(e).parse(t)}static parseInline(t,e){return new y(e).parseInline(t)}parse(t,e=!0){let n="";for(let r=0;r<t.length;r++){const i=t[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const s=i,l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){n+=l||"";continue}}switch(i.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const s=i;n+=this.renderer.heading(this.parseInline(s.tokens),s.depth,qe(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=i;n+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=i;let l="",o="";for(let c=0;c<s.header.length;c++)o+=this.renderer.tablecell(this.parseInline(s.header[c].tokens),{header:!0,align:s.align[c]});l+=this.renderer.tablerow(o);let p="";for(let c=0;c<s.rows.length;c++){const u=s.rows[c];o="";for(let h=0;h<u.length;h++)o+=this.renderer.tablecell(this.parseInline(u[h].tokens),{header:!1,align:s.align[h]});p+=this.renderer.tablerow(o)}n+=this.renderer.table(l,p);continue}case"blockquote":{const s=i,l=this.parse(s.tokens);n+=this.renderer.blockquote(l);continue}case"list":{const s=i,l=s.ordered,o=s.start,p=s.loose;let c="";for(let u=0;u<s.items.length;u++){const h=s.items[u],f=h.checked,$=h.task;let b="";if(h.task){const T=this.renderer.checkbox(!!f);p?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=T+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=T+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:T+" "}):b+=T+" "}b+=this.parse(h.tokens,p),c+=this.renderer.listitem(b,$,!!f)}n+=this.renderer.list(c,l,o);continue}case"html":{const s=i;n+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=i;n+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=i,l=s.tokens?this.parseInline(s.tokens):s.text;for(;r+1<t.length&&t[r+1].type==="text";)s=t[++r],l+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);n+=e?this.renderer.paragraph(l):l;continue}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(t,e){e=e||this.renderer;let n="";for(let r=0;r<t.length;r++){const i=t[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){n+=s||"";continue}}switch(i.type){case"escape":{const s=i;n+=e.text(s.text);break}case"html":{const s=i;n+=e.html(s.text);break}case"link":{const s=i;n+=e.link(s.href,s.title,this.parseInline(s.tokens,e));break}case"image":{const s=i;n+=e.image(s.href,s.title,s.text);break}case"strong":{const s=i;n+=e.strong(this.parseInline(s.tokens,e));break}case"em":{const s=i;n+=e.em(this.parseInline(s.tokens,e));break}case"codespan":{const s=i;n+=e.codespan(s.text);break}case"br":{n+=e.br();break}case"del":{const s=i;n+=e.del(this.parseInline(s.tokens,e));break}case"text":{const s=i;n+=e.text(s.text);break}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}}class C{constructor(t){d(this,"options");this.options=t||S}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}}d(C,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var _,D,we;class pt{constructor(...t){te(this,_);d(this,"defaults",N());d(this,"options",this.setOptions);d(this,"parse",B(this,_,D).call(this,w.lex,y.parse));d(this,"parseInline",B(this,_,D).call(this,w.lexInline,y.parseInline));d(this,"Parser",y);d(this,"Renderer",v);d(this,"TextRenderer",W);d(this,"Lexer",w);d(this,"Tokenizer",P);d(this,"Hooks",C);this.use(...t)}walkTokens(t,e){var r,i;let n=[];for(const s of t)switch(n=n.concat(e.call(this,s)),s.type){case"table":{const l=s;for(const o of l.header)n=n.concat(this.walkTokens(o.tokens,e));for(const o of l.rows)for(const p of o)n=n.concat(this.walkTokens(p.tokens,e));break}case"list":{const l=s;n=n.concat(this.walkTokens(l.items,e));break}default:{const l=s;(i=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&i[l.type]?this.defaults.extensions.childTokens[l.type].forEach(o=>{const p=l[o].flat(1/0);n=n.concat(this.walkTokens(p,e))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const s=e.renderers[i.name];s?e.renderers[i.name]=function(...l){let o=i.renderer.apply(this,l);return o===!1&&(o=s.apply(this,l)),o}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),r.extensions=e),n.renderer){const i=this.defaults.renderer||new v(this.defaults);for(const s in n.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(s==="options")continue;const l=s,o=n.renderer[l],p=i[l];i[l]=(...c)=>{let u=o.apply(i,c);return u===!1&&(u=p.apply(i,c)),u||""}}r.renderer=i}if(n.tokenizer){const i=this.defaults.tokenizer||new P(this.defaults);for(const s in n.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const l=s,o=n.tokenizer[l],p=i[l];i[l]=(...c)=>{let u=o.apply(i,c);return u===!1&&(u=p.apply(i,c)),u}}r.tokenizer=i}if(n.hooks){const i=this.defaults.hooks||new C;for(const s in n.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(s==="options")continue;const l=s,o=n.hooks[l],p=i[l];C.passThroughHooks.has(s)?i[l]=c=>{if(this.defaults.async)return Promise.resolve(o.call(i,c)).then(h=>p.call(i,h));const u=o.call(i,c);return p.call(i,u)}:i[l]=(...c)=>{let u=o.apply(i,c);return u===!1&&(u=p.apply(i,c)),u}}r.hooks=i}if(n.walkTokens){const i=this.defaults.walkTokens,s=n.walkTokens;r.walkTokens=function(l){let o=[];return o.push(s.call(this,l)),i&&(o=o.concat(i.call(this,l))),o}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return w.lex(t,e??this.defaults)}parser(t,e){return y.parse(t,e??this.defaults)}}_=new WeakSet,D=function(t,e){return(n,r)=>{const i={...r},s={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const l=B(this,_,we).call(this,!!s.silent,!!s.async);if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then(o=>t(o,s)).then(o=>s.hooks?s.hooks.processAllTokens(o):o).then(o=>s.walkTokens?Promise.all(this.walkTokens(o,s.walkTokens)).then(()=>o):o).then(o=>e(o,s)).then(o=>s.hooks?s.hooks.postprocess(o):o).catch(l);try{s.hooks&&(n=s.hooks.preprocess(n));let o=t(n,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let p=e(o,s);return s.hooks&&(p=s.hooks.postprocess(p)),p}catch(o){return l(o)}}},we=function(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+m(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}};const R=new pt;function g(a,t){return R.parse(a,t)}g.options=g.setOptions=function(a){return R.setOptions(a),g.defaults=R.defaults,he(g.defaults),g};g.getDefaults=N;g.defaults=S;g.use=function(...a){return R.use(...a),g.defaults=R.defaults,he(g.defaults),g};g.walkTokens=function(a,t){return R.walkTokens(a,t)};g.parseInline=R.parseInline;g.Parser=y;g.parser=y.parse;g.Renderer=v;g.TextRenderer=W;g.Lexer=w;g.lexer=w.lex;g.Tokenizer=P;g.Hooks=C;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;y.parse;w.lex;const ut=async a=>{const t=g.parse(a);return t instanceof Promise?await t:t},ft=[{expressions:["# H1","## H2","### H3"],explanation:"Headings"},{expressions:["**Bold text**"],explanation:"Bold"},{expressions:["*Italic text*"],explanation:"Italic"},{expressions:["~~Strikethrough text~~"],explanation:"Strikethrough"},{expressions:["- List item"],explanation:"Unordered list"},{expressions:["[title](https://example.com)"],explanation:"Link"},{expressions:["![alt text](image.jpg)"],explanation:"Image"},{expressions:["`code`"],explanation:"Code"},{expressions:["> Blockquote"],explanation:"Blockquote"},{expressions:["---"],explanation:"Horizontal line"}],zt=()=>{const a=z.useRef(null),t=z.useRef({markdown:""}),e=async()=>{var c;t.current.markdown=ie,(c=a.current)==null||c.setValue(ie),await i()},[n,r]=z.useState(null),i=z.useCallback(async()=>{const c=await ut(t.current.markdown);r(c)},[]),s=z.useCallback(c=>{t.current.markdown=c,Ie(i,300)},[i]),[l,o]=z.useState(!1),p=z.useCallback(()=>{o(!l)},[l]);return x.jsxs(x.Fragment,{children:[x.jsx(Re,{InputToolbar:x.jsxs(se,{children:[x.jsx(ne,{size:"large",onClick:e,children:"Sample"}),x.jsx(ne,{icon:x.jsx(Ae,{}),size:"large",onClick:p,children:"Cheatsheet"})]}),InputView:x.jsx(_e,{ref:a,code:"",language:"markdown",onChange:s}),OutputView:x.jsx(Se,{html:n})}),x.jsx(Ce,{title:"Markdown cheatsheet",open:l,onClose:p,children:ft.map((c,u)=>x.jsxs("div",{className:"flex justify-between items-center my-4",children:[x.jsx(se,{size:"small",children:c.expressions.map((h,f)=>x.jsx(ze.Text,{code:!0,children:h},f))}),x.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:c.explanation})]},u))})]})};export{zt as default};
