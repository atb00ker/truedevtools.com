import{r as s,j as e,B as p,R as d}from"./index-CL14asXn.js";import{u as f}from"./useCopyText.hooks-C1MaivK6.js";import{I as h}from"./InputOutputLayout.component-2nQ5MSfz.js";import{C as i}from"./CodeEditor.component-B0O-GlEp.js";import{t as j}from"./text-sample-BTrN0aiQ.js";import{u as C}from"./unicodeToHex.utils-zlYDvXB0.js";import{S as x}from"./index-XRM7WuMU.js";import"./editorWorker-CA1WEzK_.js";import"./gapSize-U1swVQyS.js";const g=u=>u.replace(/\s+/g,"").split("0x").map(r=>{try{return String.fromCodePoint(parseInt(r,16))}catch{return""}}).join(""),b=()=>{const u=f(),c=s.useRef(null),r=s.useRef(null),o=s.useRef({hex:""}),l=()=>{var t;a(C(j)),(t=c.current)==null||t.setValue(o.current.hex)},n=s.useRef(""),m=()=>{u(n.current)},a=t=>{o.current.hex=t,n.current=g(t),r.current.setValue(n.current)};return e.jsx(h,{InputToolbar:e.jsx(x,{children:e.jsx(p,{size:"large",onClick:l,children:"Sample"})}),InputView:e.jsx(i,{ref:c,code:o.current.hex,language:"text",onChange:a}),OutputToolbar:e.jsx(x,{children:e.jsx(p,{icon:e.jsx(d,{}),onClick:m,children:"Copy"})}),OutputView:e.jsx(i,{ref:r,code:n.current,language:"text",readonly:!0})})};export{b as default};
