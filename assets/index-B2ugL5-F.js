import{W as J,r as l,C as D,F as U,D as X,U as Q,y as z,f as M,aK as Y,aJ as Z,z as ee,_ as A}from"./index-CL14asXn.js";import{u as te,C as se}from"./useBubbleLock-CkECnJx5.js";import{u as B}from"./index-DniHMRVy.js";const F=J.createContext(null);var le=function(n,u){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&u.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)u.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(o[t[a]]=n[t[a]]);return o};const ne=(n,u)=>{var o;const{prefixCls:t,className:a,rootClassName:N,children:x,indeterminate:g=!1,style:P,onMouseEnter:h,onMouseLeave:c,skipGroup:O=!1,disabled:w}=n,r=le(n,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:k,direction:_,checkbox:d}=l.useContext(D),s=l.useContext(F),{isFormItemInput:j}=l.useContext(U),I=l.useContext(X),y=(o=(s==null?void 0:s.disabled)||w)!==null&&o!==void 0?o:I,f=l.useRef(r.value),b=l.useRef(null),E=Q(u,b);l.useEffect(()=>{s==null||s.registerValue(r.value)},[]),l.useEffect(()=>{if(!O)return r.value!==f.current&&(s==null||s.cancelValue(f.current),s==null||s.registerValue(r.value),f.current=r.value),()=>s==null?void 0:s.cancelValue(r.value)},[r.value]),l.useEffect(()=>{var p;!((p=b.current)===null||p===void 0)&&p.input&&(b.current.input.indeterminate=g)},[g]);const i=k("checkbox",t),V=z(i),[$,S,R]=B(i,V),m=Object.assign({},r);s&&!O&&(m.onChange=function(){r.onChange&&r.onChange.apply(r,arguments),s.toggleOption&&s.toggleOption({label:x,value:r.value})},m.name=s.name,m.checked=s.value.includes(r.value));const G=M(`${i}-wrapper`,{[`${i}-rtl`]:_==="rtl",[`${i}-wrapper-checked`]:m.checked,[`${i}-wrapper-disabled`]:y,[`${i}-wrapper-in-form-item`]:j},d==null?void 0:d.className,a,N,R,V,S),e=M({[`${i}-indeterminate`]:g},Y,S),[v,C]=te(m.onClick);return $(l.createElement(Z,{component:"Checkbox",disabled:y},l.createElement("label",{className:G,style:Object.assign(Object.assign({},d==null?void 0:d.style),P),onMouseEnter:h,onMouseLeave:c,onClick:v},l.createElement(se,Object.assign({},m,{onClick:C,prefixCls:i,className:e,disabled:y,ref:E})),x!==void 0&&l.createElement("span",null,x))))},T=l.forwardRef(ne);var ae=function(n,u){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&u.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)u.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(o[t[a]]=n[t[a]]);return o};const re=l.forwardRef((n,u)=>{const{defaultValue:o,children:t,options:a=[],prefixCls:N,className:x,rootClassName:g,style:P,onChange:h}=n,c=ae(n,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:O,direction:w}=l.useContext(D),[r,k]=l.useState(c.value||o||[]),[_,d]=l.useState([]);l.useEffect(()=>{"value"in c&&k(c.value||[])},[c.value]);const s=l.useMemo(()=>a.map(e=>typeof e=="string"||typeof e=="number"?{label:e,value:e}:e),[a]),j=e=>{d(v=>v.filter(C=>C!==e))},I=e=>{d(v=>[].concat(A(v),[e]))},y=e=>{const v=r.indexOf(e.value),C=A(r);v===-1?C.push(e.value):C.splice(v,1),"value"in c||k(C),h==null||h(C.filter(p=>_.includes(p)).sort((p,K)=>{const W=s.findIndex(L=>L.value===p),H=s.findIndex(L=>L.value===K);return W-H}))},f=O("checkbox",N),b=`${f}-group`,E=z(f),[i,V,$]=B(f,E),S=ee(c,["value","disabled"]),R=a.length?s.map(e=>l.createElement(T,{prefixCls:f,key:e.value.toString(),disabled:"disabled"in e?e.disabled:c.disabled,value:e.value,checked:r.includes(e.value),onChange:e.onChange,className:`${b}-item`,style:e.style,title:e.title,id:e.id,required:e.required},e.label)):t,m={toggleOption:y,value:r,disabled:c.disabled,name:c.name,registerValue:I,cancelValue:j},G=M(b,{[`${b}-rtl`]:w==="rtl"},x,g,$,E,V);return i(l.createElement("div",Object.assign({className:G,style:P},S,{ref:u}),l.createElement(F.Provider,{value:m},R)))}),q=T;q.Group=re;q.__ANT_CHECKBOX=!0;export{q as C};
