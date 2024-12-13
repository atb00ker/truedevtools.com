import{u as S,r as s,j as e,B as c,R as h,s as g,ah as C}from"./index-CL14asXn.js";import{u as b}from"./useCopyText.hooks-C1MaivK6.js";import{I as v}from"./InputOutputLayout.component-2nQ5MSfz.js";import{C as p}from"./CodeEditor.component-B0O-GlEp.js";import{p as z}from"./public-api-3UrBTGqi.js";import{b as I}from"./beautifyJs.utils-BCUTzrLs.js";import{S as u}from"./index-XRM7WuMU.js";import{R as T}from"./ArrowRightOutlined-HowPytUt.js";import{S as J}from"./index-BeRW1Gfk.js";import"./editorWorker-CA1WEzK_.js";import"./index-dgBSbCJg.js";import"./gapSize-U1swVQyS.js";import"./useShowArrow-DiEGc7f5.js";import"./DownOutlined-BiTJ3hY-.js";const R=`name: Sample Data
description: This is a sample JSON object
items:
  - id: 1
    name: Item 1
    price: 10.99
    active: true
  - id: 2
    name: Item 2
    price: 25.5
    active: false`,O=o=>{const r=z(o.yaml);return I(JSON.stringify(r),{indentSize:o.indentSize})},H=()=>{const o=S(),r=b(),i=s.useRef(null),n=s.useRef({yaml:"",tabSize:2}),d=async()=>{var t;l(R),(t=i.current)==null||t.setValue(n.current.yaml)},[a,y]=s.useState(null),f=()=>{try{m(),o(g())}catch{o(C("Invalid YAML"))}},x=()=>{r(a)},l=t=>{n.current.yaml=t},j=t=>{n.current.tabSize=t;try{m()}catch{}},m=()=>{const t=O({yaml:n.current.yaml,indentSize:n.current.tabSize});y(t)};return e.jsx(v,{InputToolbar:e.jsxs(u,{children:[e.jsx(c,{size:"large",onClick:d,children:"Sample"}),e.jsx(c,{type:"primary",icon:e.jsx(T,{}),size:"large",onClick:f,children:"Convert"})]}),InputView:e.jsx(p,{ref:i,code:n.current.yaml,language:"yaml",onChange:l}),OutputToolbar:a===null?e.jsx(e.Fragment,{}):e.jsxs(u,{children:[e.jsx(J,{defaultValue:2,options:[{value:2,label:e.jsx(e.Fragment,{children:"2 spaces"})},{value:4,label:e.jsx(e.Fragment,{children:"4 spaces"})}],onChange:j}),e.jsx(c,{icon:e.jsx(h,{}),onClick:x,children:"Copy"})]}),OutputView:e.jsx(p,{code:a,language:"json",readonly:!0})})};export{H as default};
