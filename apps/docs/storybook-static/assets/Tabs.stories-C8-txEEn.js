import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{i as n,r,t as i}from"./Box-XznTsHG2.js";import{t as a}from"./jsx-runtime-CkXrEl7v.js";import{r as o}from"./dist-DqDbN6FL.js";import{c as s,i as c,m as l,n as u,t as d,u as f}from"./useIsoLayoutEffect-BfjTaIXP.js";import{a as p,i as m,n as h,t as g}from"./useTransitionStatus-BLaCuT3W.js";import{n as _}from"./Stack-yxIjSOSs.js";import{t as v}from"./useControlled-Df-hywyB.js";import{E as y,a as b,f as x,l as S,p as C,t as w,w as T,x as E}from"./createBaseUIEventDetails-CIym2k9y.js";import{n as D,t as ee}from"./CompositeRoot-BqZ6QXpX.js";import{r as te,t as O}from"./CompositeList-BDm70LhO.js";import{t as k}from"./useCompositeItem-J1ExjYbB.js";import{M as ne,j as A}from"./composite-KklygyPZ.js";import{n as j,t as M}from"./inertValue-D0FG2-Zt.js";import{t as N}from"./CSPContext-BUsWb0YR.js";import{t as P}from"./getCssDimensions-rI2q7E3M.js";import{t as F}from"./Text-BU0_Ov2K.js";var I=e(t());function re(){let[,e]=I.useState({});return I.useCallback(()=>{e({})},[])}var L=I.createContext(void 0);function R(){let e=I.useContext(L);if(e===void 0)throw Error(l(64));return e}var z=function(e){return e.activationDirection=`data-activation-direction`,e.orientation=`data-orientation`,e}({}),B={tabActivationDirection:e=>({[z.activationDirection]:e})},V=a(),ie=I.forwardRef(function(e,t){let{className:n,defaultValue:r=0,onValueChange:i,orientation:a=`horizontal`,render:o,value:s,style:l,...f}=e,p=e.defaultValue!==void 0,m=I.useRef([]),[h,g]=I.useState(()=>new Map),[_,y]=v({controlled:s,default:r,name:`Tabs`,state:`value`}),C=s!==void 0,[T,E]=I.useState(()=>new Map),D=I.useCallback(e=>{if(e===void 0)return null;for(let[t,n]of T.entries())if(n!=null&&e===(n.value??n.index))return t;return null},[T]),[ee,te]=I.useState(()=>({previousValue:_,tabActivationDirection:`none`})),{previousValue:k,tabActivationDirection:ne}=ee,A=ne,j=!1;k!==_&&(A=ae(k,_,a,T),j=k!=null&&_!=null&&D(_)==null);let M=j?k:_,N=k!==M||ne!==A;d(()=>{N&&te({previousValue:M,tabActivationDirection:A})},[M,N,A]);let P=u((e,t)=>{t.activationDirection=ae(_,e,a,T),i?.(e,t),!t.isCanceled&&y(e)}),F=u((e,t)=>{i?.(e,w(t,void 0,void 0,{activationDirection:`none`}))}),re=u((e,t)=>{g(n=>{if(n.get(e)===t)return n;let r=new Map(n);return r.set(e,t),r})}),R=u((e,t)=>{g(n=>{if(!n.has(e)||n.get(e)!==t)return n;let r=new Map(n);return r.delete(e),r})}),z=I.useCallback(e=>h.get(e),[h]),ie=I.useCallback(e=>{for(let t of T.values())if(e===t?.value)return t?.id},[T]),oe=I.useMemo(()=>({getTabElementBySelectedValue:D,getTabIdByPanelValue:ie,getTabPanelIdByValue:z,onValueChange:P,orientation:a,registerMountedTabPanel:re,setTabMap:E,unregisterMountedTabPanel:R,tabActivationDirection:A,value:_}),[D,ie,z,P,a,re,E,R,A,_]),H=I.useMemo(()=>{for(let e of T.values())if(e!=null&&e.value===_)return e},[T,_]),se=I.useMemo(()=>{for(let e of T.values())if(e!=null&&!e.disabled)return e.value},[T]),U=I.useRef(!p),ce=I.useRef(p),le=I.useRef(!1);d(()=>{if(C)return;function e(e,t){y(e),te(t=>t.previousValue===e&&t.tabActivationDirection===`none`?t:{previousValue:e,tabActivationDirection:`none`}),F(e,t),U.current=!1}if(T.size===0){if(!le.current||_===null)return;e(null,x);return}le.current=!0;let t=H?.disabled,n=H==null&&_!==null;if(!t&&_===r&&(ce.current=!1),ce.current&&t&&_===r)return;let i=U.current;if(t||n){let n=se??null;if(_===n){U.current=!1;return}let r=x;i?r=S:t&&(r=b),e(n,r);return}i&&H!=null&&(F(_,S),U.current=!1)},[r,se,C,F,H,y,T,_]);let ue=c(`div`,e,{state:{orientation:a,tabActivationDirection:A},ref:t,props:f,stateAttributesMapping:B});return(0,V.jsx)(L.Provider,{value:oe,children:(0,V.jsx)(O,{elementsRef:m,children:ue})})});function ae(e,t,n,r){if(e==null||t==null)return`none`;let i=null,a=null;for(let[n,o]of r.entries()){if(o==null)continue;let r=o.value??o.index;if(e===r&&(i=n),t===r&&(a=n),i!=null&&a!=null)break}if(i==null||a==null)return i!==a&&(typeof e==`number`||typeof e==`string`)&&typeof e==typeof t?n===`horizontal`?t>e?`right`:`left`:t>e?`down`:`up`:`none`;let o=i.getBoundingClientRect(),s=a.getBoundingClientRect();if(n===`horizontal`){if(s.left<o.left)return`left`;if(s.left>o.left)return`right`}else{if(s.top<o.top)return`up`;if(s.top>o.top)return`down`}return`none`}var oe=I.createContext(void 0);function H(){let e=I.useContext(oe);if(e===void 0)throw Error(l(65));return e}var se=I.forwardRef(function(e,t){let{className:n,disabled:r=!1,render:i,value:a,id:o,nativeButton:s=!0,style:l,...u}=e,{value:f,getTabPanelIdByValue:p,orientation:m}=R(),{activateOnFocus:h,highlightedTabIndex:g,onTabActivation:_,registerTabResizeObserverElement:v,setHighlightedTabIndex:b,tabsListElement:x}=H(),S=T(o),{compositeProps:ee,compositeRef:te,index:O}=k({metadata:I.useMemo(()=>({disabled:r,id:S,value:a}),[r,S,a])}),j=a===f,M=I.useRef(!1),N=I.useRef(null);I.useEffect(()=>{let e=N.current;if(e)return v(e)},[v]),d(()=>{if(M.current){M.current=!1;return}if(!(j&&O>-1&&g!==O))return;let e=x;if(e!=null){let t=A(y(e));if(t&&ne(e,t))return}r||b(O)},[j,O,g,b,r,x]);let{getButtonProps:P,buttonRef:F}=E({disabled:r,native:s,focusableWhenDisabled:!0}),re=p(a),L=I.useRef(!1),z=I.useRef(!1);function B(e){j||r||_(a,w(C,e.nativeEvent,void 0,{activationDirection:`none`}))}function V(e){j||(O>-1&&!r&&b(O),!r&&h&&(!L.current||L.current&&z.current)&&_(a,w(C,e.nativeEvent,void 0,{activationDirection:`none`})))}function ie(e){if(j||r)return;L.current=!0;function t(){L.current=!1,z.current=!1}(!e.button||e.button===0)&&(z.current=!0,y(e.currentTarget).addEventListener(`pointerup`,t,{once:!0}))}return c(`button`,e,{state:{disabled:r,active:j,orientation:m},ref:[t,F,te,N],props:[ee,{role:`tab`,"aria-controls":re,"aria-selected":j,id:S,onClick:B,onFocus:V,onPointerDown:ie,[D]:j?``:void 0,onKeyDownCapture(){M.current=!0}},u,P]})}),U=j();function ce(){return f}function le(){return!1}function ue(){return!0}function de(){return(0,U.useSyncExternalStore)(ce,le,ue)}var W=function(e){return e.activeTabLeft=`--active-tab-left`,e.activeTabRight=`--active-tab-right`,e.activeTabTop=`--active-tab-top`,e.activeTabBottom=`--active-tab-bottom`,e.activeTabWidth=`--active-tab-width`,e.activeTabHeight=`--active-tab-height`,e}({}),fe={...B,activeTabPosition:()=>null,activeTabSize:()=>null},pe=I.forwardRef(function(e,t){let{className:n,render:r,renderBeforeHydration:i=!1,style:a,...o}=e,{nonce:s}=N(),{getTabElementBySelectedValue:l,orientation:u,tabActivationDirection:d,value:f}=R(),{tabsListElement:p,registerIndicatorUpdateListener:m}=H(),h=de(),g=re();I.useEffect(()=>m(g),[m,g]);let _=0,v=0,y=0,b=0,x=0,S=0,C=!1;if(f!=null&&p!=null){let e=l(f);if(C=!0,e!=null){let{width:t,height:n}=P(e),{width:r,height:i}=P(p),a=e.getBoundingClientRect(),o=p.getBoundingClientRect(),s=r>0?o.width/r:1,c=i>0?o.height/i:1;if(Math.abs(s)>2**-52&&Math.abs(c)>2**-52){let e=a.left-o.left,t=a.top-o.top;_=e/s+p.scrollLeft-p.clientLeft,y=t/c+p.scrollTop-p.clientTop}else _=e.offsetLeft,y=e.offsetTop;x=t,S=n,v=p.scrollWidth-_-x,b=p.scrollHeight-y-S}}let w=C?{left:_,right:v,top:y,bottom:b}:null,T=C?{width:x,height:S}:null,E=C?{[W.activeTabLeft]:`${_}px`,[W.activeTabRight]:`${v}px`,[W.activeTabTop]:`${y}px`,[W.activeTabBottom]:`${b}px`,[W.activeTabWidth]:`${x}px`,[W.activeTabHeight]:`${S}px`}:void 0,D=c(`span`,e,{state:{orientation:u,activeTabPosition:w,activeTabSize:T,tabActivationDirection:d},ref:t,props:[{role:`presentation`,style:E,hidden:!(C&&x>0&&S>0)},o,{suppressHydrationWarning:!0}],stateAttributesMapping:fe});return f==null?null:(0,V.jsxs)(I.Fragment,{children:[D,h&&i&&(0,V.jsx)(`script`,{nonce:s,dangerouslySetInnerHTML:{__html:'!function(){const t=document.currentScript.previousElementSibling;if(!t)return;const e=t.closest(\'[role="tablist"]\');if(!e)return;const i=e.querySelector("[data-active]");if(!i)return;if(0===i.offsetWidth||0===e.offsetWidth)return;let o=0,n=0,h=0,l=0,r=0,f=0;function s(t){const e=getComputedStyle(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;return(Math.round(i)!==t.offsetWidth||Math.round(o)!==t.offsetHeight)&&(i=t.offsetWidth,o=t.offsetHeight),{width:i,height:o}}if(null!=i&&null!=e){const{width:t,height:c}=s(i),{width:u,height:d}=s(e),a=i.getBoundingClientRect(),g=e.getBoundingClientRect(),p=u>0?g.width/u:1,b=d>0?g.height/d:1;if(Math.abs(p)>Number.EPSILON&&Math.abs(b)>Number.EPSILON){const t=a.left-g.left,i=a.top-g.top;o=t/p+e.scrollLeft-e.clientLeft,h=i/b+e.scrollTop-e.clientTop}else o=i.offsetLeft,h=i.offsetTop;r=t,f=c,n=e.scrollWidth-o-r,l=e.scrollHeight-h-f}function c(e,i){t.style.setProperty(`--active-tab-${e}`,`${i}px`)}c("left",o),c("right",n),c("top",h),c("bottom",l),c("width",r),c("height",f),r>0&&f>0&&t.removeAttribute("hidden")}();'},suppressHydrationWarning:!0})]})}),me=function(e){return e.index=`data-index`,e.activationDirection=`data-activation-direction`,e.orientation=`data-orientation`,e.hidden=`data-hidden`,e[e.startingStyle=m.startingStyle]=`startingStyle`,e[e.endingStyle=m.endingStyle]=`endingStyle`,e}({}),he={...B,...p},ge=I.forwardRef(function(e,t){let{className:n,value:r,render:i,keepMounted:a=!1,style:o,...s}=e,{value:l,getTabIdByPanelValue:u,orientation:f,tabActivationDirection:p,registerMountedTabPanel:m,unregisterMountedTabPanel:_}=R(),v=T(),{ref:y,index:b}=te({metadata:I.useMemo(()=>({id:v,value:r}),[v,r])}),x=r===l,{mounted:S,transitionStatus:C,setMounted:w}=g(x),E=!S,D=u(r),ee={hidden:E,orientation:f,tabActivationDirection:p,transitionStatus:C},O=I.useRef(null),k=c(`div`,e,{state:ee,ref:[t,y,O],props:[{"aria-labelledby":D,hidden:E,id:v,role:`tabpanel`,tabIndex:x?0:-1,inert:M(!x),[me.index]:b},s],stateAttributesMapping:he});return h({open:x,ref:O,onComplete(){x||w(!1)}}),d(()=>{if(!(E&&!a)&&v!=null)return m(r,v),()=>{_(r,v)}},[E,a,r,v,m,_]),a||S?k:null}),_e=I.forwardRef(function(e,t){let{activateOnFocus:n=!1,className:r,loopFocus:i=!0,render:a,style:o,...c}=e,{onValueChange:l,orientation:d,value:f,setTabMap:p,tabActivationDirection:m}=R(),[h,g]=I.useState(0),[_,v]=I.useState(null),y=I.useRef(new Set),b=I.useRef(new Set),x=I.useRef(null);I.useEffect(()=>{if(typeof ResizeObserver>`u`)return;let e=new ResizeObserver(()=>{y.current.forEach(e=>{e()})});return x.current=e,_&&e.observe(_),b.current.forEach(t=>{e.observe(t)}),()=>{e.disconnect(),x.current=null}},[_]);let S=u(e=>(y.current.add(e),()=>{y.current.delete(e)})),C=u(e=>(b.current.add(e),x.current?.observe(e),()=>{b.current.delete(e),x.current?.unobserve(e)})),w=u((e,t)=>{e!==f&&l(e,t)}),T={orientation:d,tabActivationDirection:m},E={"aria-orientation":d===`vertical`?`vertical`:void 0,role:`tablist`},D=I.useMemo(()=>({activateOnFocus:n,highlightedTabIndex:h,registerIndicatorUpdateListener:S,registerTabResizeObserverElement:C,onTabActivation:w,setHighlightedTabIndex:g,tabsListElement:_}),[n,h,S,C,w,g,_]);return(0,V.jsx)(oe.Provider,{value:D,children:(0,V.jsx)(ee,{render:a,className:r,style:o,state:T,refs:[t,v],props:[E,c],stateAttributesMapping:B,highlightedIndex:h,enableHomeAndEndKeys:!0,loopFocus:i,orientation:d,onHighlightedIndexChange:g,onMapChange:p,disabledIndices:s})})}),ve=(0,I.createContext)(null);function ye(){let e=(0,I.useContext)(ve);if(!e)throw Error(`Tabs compound components must be used within Tabs.Root.`);return e}function G({activationMode:e=`automatic`,className:t,color:i,defaultValue:a,fitted:s=!1,justify:c=`start`,onValueChange:l,size:u,value:d,variant:f,...p}){let m=o(`Tabs`),h=u??m?.size??`md`,g=f??m?.variant??`line`,_=i??m?.color??`primary`,[v,y]=(0,I.useState)(a),[b,x]=(0,I.useState)(()=>new Set(a==null?[]:[a])),S=d===void 0?v:d,C=(0,I.useCallback)((e,t)=>{y(e),e!=null&&x(t=>new Set(t).add(e)),l?.(e,t)},[l]),w=(0,I.useMemo)(()=>({activationMode:e,activeValue:S,mountedValues:b}),[e,b,S]);return(0,V.jsx)(ve.Provider,{value:w,children:(0,V.jsx)(ie,{className:r(`zui-tabs`,t),"data-color":_,"data-fitted":n(s),"data-justify":c,"data-size":h,"data-variant":g,defaultValue:a,onValueChange:C,value:d,...p})})}var K=(0,I.forwardRef)(function({activateOnFocus:e,className:t,...n},i){let{activationMode:a}=ye();return(0,V.jsx)(_e,{ref:i,activateOnFocus:e??a===`automatic`,className:r(`zui-tabs__list`,t),...n})});K.displayName=`TabsList`;var q=(0,I.forwardRef)(function({className:e,...t},n){return(0,V.jsx)(se,{ref:n,className:r(`zui-tabs__trigger`,e),...t})});q.displayName=`TabsTrigger`;var J=(0,I.forwardRef)(function({className:e,...t},n){return(0,V.jsx)(pe,{ref:n,className:r(`zui-tabs__indicator`,e),...t})});J.displayName=`TabsIndicator`;var Y=(0,I.forwardRef)(function({className:e,keepMounted:t,lazyMount:n=!1,unmountOnExit:i=!0,value:a,...o},s){let{activeValue:c,mountedValues:l}=ye();return!n||l.has(a)||c===a?(0,V.jsx)(ge,{ref:s,className:r(`zui-tabs__content`,e),keepMounted:t??!i,value:a,...o}):null});Y.displayName=`TabsContent`;var be=(0,I.forwardRef)(function({className:e,...t},n){return(0,V.jsx)(`div`,{ref:n,className:r(`zui-tabs__content-group`,e),...t})});be.displayName=`TabsContentGroup`;var X={Content:Y,ContentGroup:be,Indicator:J,List:K,Root:G,Trigger:q};G.__docgenInfo={description:``,methods:[],displayName:`TabsRoot`,props:{activationMode:{required:!1,tsType:{name:`union`,raw:`"automatic" | "manual"`,elements:[{name:`literal`,value:`"automatic"`},{name:`literal`,value:`"manual"`}]},description:``,defaultValue:{value:`"automatic"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},color:{required:!1,tsType:{name:`union`,raw:`"primary" | "neutral" | "success" | "warning" | "danger" | "info"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"neutral"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"info"`}]},description:``},fitted:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},justify:{required:!1,tsType:{name:`union`,raw:`"center" | "end" | "start"`,elements:[{name:`literal`,value:`"center"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"start"`}]},description:``,defaultValue:{value:`"start"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"lg" | "md" | "sm"`,elements:[{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`}]},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"enclosed" | "line" | "outline" | "plain" | "subtle"`,elements:[{name:`literal`,value:`"enclosed"`},{name:`literal`,value:`"line"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"plain"`},{name:`literal`,value:`"subtle"`}]},description:``}}},K.__docgenInfo={description:``,methods:[],displayName:`TabsList`},q.__docgenInfo={description:``,methods:[],displayName:`TabsTrigger`},J.__docgenInfo={description:``,methods:[],displayName:`TabsIndicator`},Y.__docgenInfo={description:``,methods:[],displayName:`TabsContent`,props:{lazyMount:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},unmountOnExit:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}},be.__docgenInfo={description:``,methods:[],displayName:`TabsContentGroup`,props:{className:{required:!1,tsType:{name:`string`},description:``}}};function xe({showIndicator:e=!1,...t}){return(0,V.jsxs)(G,{defaultValue:`members`,...t,children:[(0,V.jsxs)(K,{children:[(0,V.jsx)(q,{value:`members`,children:`Members`}),(0,V.jsx)(q,{value:`projects`,children:`Projects`}),(0,V.jsx)(q,{value:`settings`,children:`Settings`}),e?(0,V.jsx)(J,{}):null]}),(0,V.jsx)(Y,{value:`members`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Manage your team members`})})}),(0,V.jsx)(Y,{value:`projects`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Manage your projects`})})}),(0,V.jsx)(Y,{value:`settings`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Manage your tasks for freelancers`})})})]})}var Se={title:`Navigation/Tabs`,component:G,args:{size:`md`,variant:`line`}},Z={render:e=>(0,V.jsx)(xe,{...e,showIndicator:!0})},Q={render:()=>(0,V.jsx)(_,{gap:`8`,children:[`line`,`subtle`,`enclosed`,`outline`,`plain`].map(e=>(0,V.jsx)(xe,{showIndicator:e===`line`,variant:e},e))})},$={render:()=>(0,V.jsx)(_,{gap:`6`,children:[`sm`,`md`,`lg`].map(e=>(0,V.jsx)(xe,{size:e},e))})},Ce={render:()=>(0,V.jsxs)(G,{defaultValue:`one`,fitted:!0,variant:`enclosed`,children:[(0,V.jsxs)(K,{children:[(0,V.jsx)(q,{value:`one`,children:`Tab 1`}),(0,V.jsx)(q,{value:`two`,children:`Tab 2`}),(0,V.jsx)(q,{value:`three`,children:`Tab 3`})]}),(0,V.jsx)(Y,{value:`one`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Tab 1 content`})})}),(0,V.jsx)(Y,{value:`two`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Tab 2 content`})})}),(0,V.jsx)(Y,{value:`three`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Tab 3 content`})})})]})},we={render:function(){let[e,t]=(0,I.useState)(`first`);return(0,V.jsxs)(G,{onValueChange:t,value:e,children:[(0,V.jsxs)(K,{children:[(0,V.jsx)(q,{value:`first`,children:`First tab`}),(0,V.jsx)(q,{value:`second`,children:`Second tab`})]}),(0,V.jsx)(Y,{value:`first`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`First panel`})})}),(0,V.jsx)(Y,{value:`second`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Second panel`})})})]})}},Te={render:()=>(0,V.jsxs)(G,{defaultValue:`members`,children:[(0,V.jsxs)(K,{children:[(0,V.jsx)(q,{value:`members`,children:`Members`}),(0,V.jsx)(q,{value:`projects`,children:`Projects`}),(0,V.jsx)(q,{disabled:!0,value:`settings`,children:`Settings`})]}),(0,V.jsx)(Y,{value:`members`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Manage your team members`})})}),(0,V.jsx)(Y,{value:`projects`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Manage your projects`})})})]})},Ee={render:()=>(0,V.jsxs)(G,{defaultValue:`members`,orientation:`vertical`,style:{maxWidth:`36rem`},children:[(0,V.jsxs)(K,{children:[(0,V.jsx)(q,{value:`members`,children:`Members`}),(0,V.jsx)(q,{value:`projects`,children:`Projects`}),(0,V.jsx)(q,{value:`settings`,children:`Settings`}),(0,V.jsx)(J,{})]}),(0,V.jsx)(Y,{value:`members`,children:(0,V.jsx)(F,{color:`secondary`,children:`Manage your team members and their roles here.`})}),(0,V.jsx)(Y,{value:`projects`,children:(0,V.jsx)(F,{color:`secondary`,children:`Manage your projects and their status here.`})}),(0,V.jsx)(Y,{value:`settings`,children:(0,V.jsx)(F,{color:`secondary`,children:`Manage your tasks and their progress here.`})})]})},De={render:()=>(0,V.jsxs)(G,{defaultValue:`members`,style:{"--zui-tabs-indicator-bg":`var(--zui-colors-success-solid)`,"--zui-tabs-indicator-shadow":`var(--zui-shadows-sm)`},children:[(0,V.jsxs)(K,{children:[(0,V.jsx)(q,{value:`members`,children:`Members`}),(0,V.jsx)(q,{value:`projects`,children:`Projects`}),(0,V.jsx)(q,{value:`settings`,children:`Settings`}),(0,V.jsx)(J,{})]}),(0,V.jsx)(Y,{value:`members`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Manage your team members`})})}),(0,V.jsx)(Y,{value:`projects`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Manage your projects`})})}),(0,V.jsx)(Y,{value:`settings`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Manage your settings`})})})]})},Oe={render:function(){function e({label:e}){let t=(0,I.useRef)(0);return t.current+=1,(0,V.jsx)(i,{pt:`4`,children:(0,V.jsxs)(F,{color:`secondary`,children:[e,`: Content `,t.current]})})}return(0,V.jsxs)(G,{defaultValue:`one`,children:[(0,V.jsxs)(K,{children:[(0,V.jsx)(q,{value:`one`,children:`Tab 1`}),(0,V.jsx)(q,{value:`two`,children:`Tab 2`}),(0,V.jsx)(q,{value:`three`,children:`Tab 3`})]}),(0,V.jsx)(Y,{value:`one`,children:(0,V.jsx)(e,{label:`Tab 1`})}),(0,V.jsx)(Y,{lazyMount:!0,value:`two`,children:(0,V.jsx)(e,{label:`Tab 2`})}),(0,V.jsx)(Y,{lazyMount:!0,value:`three`,children:(0,V.jsx)(e,{label:`Tab 3`})})]})}},ke={render:()=>(0,V.jsxs)(X.Root,{defaultValue:`members`,children:[(0,V.jsxs)(X.List,{children:[(0,V.jsx)(X.Trigger,{value:`members`,children:`Members`}),(0,V.jsx)(X.Trigger,{value:`projects`,children:`Projects`})]}),(0,V.jsx)(X.Content,{value:`members`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Using the Tabs namespace export.`})})}),(0,V.jsx)(X.Content,{value:`projects`,children:(0,V.jsx)(i,{pt:`4`,children:(0,V.jsx)(F,{color:`secondary`,children:`Projects panel.`})})})]})};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <MembersTabs {...args} showIndicator />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="8">
      {(["line", "subtle", "enclosed", "outline", "plain"] as const).map(variant => <MembersTabs key={variant} showIndicator={variant === "line"} variant={variant} />)}
    </Stack>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="6">
      {(["sm", "md", "lg"] as const).map(size => <MembersTabs key={size} size={size} />)}
    </Stack>
}`,...$.parameters?.docs?.source}}},Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  render: () => <TabsRoot defaultValue="one" fitted variant="enclosed">
      <TabsList>
        <TabsTrigger value="one">Tab 1</TabsTrigger>
        <TabsTrigger value="two">Tab 2</TabsTrigger>
        <TabsTrigger value="three">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="one">
        <Box pt="4">
          <Text color="secondary">Tab 1 content</Text>
        </Box>
      </TabsContent>
      <TabsContent value="two">
        <Box pt="4">
          <Text color="secondary">Tab 2 content</Text>
        </Box>
      </TabsContent>
      <TabsContent value="three">
        <Box pt="4">
          <Text color="secondary">Tab 3 content</Text>
        </Box>
      </TabsContent>
    </TabsRoot>
}`,...Ce.parameters?.docs?.source}}},we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  render: function ControlledStory() {
    const [value, setValue] = useState("first");
    return <TabsRoot onValueChange={setValue} value={value}>
        <TabsList>
          <TabsTrigger value="first">First tab</TabsTrigger>
          <TabsTrigger value="second">Second tab</TabsTrigger>
        </TabsList>
        <TabsContent value="first">
          <Box pt="4">
            <Text color="secondary">First panel</Text>
          </Box>
        </TabsContent>
        <TabsContent value="second">
          <Box pt="4">
            <Text color="secondary">Second panel</Text>
          </Box>
        </TabsContent>
      </TabsRoot>;
  }
}`,...we.parameters?.docs?.source}}},Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  render: () => <TabsRoot defaultValue="members">
      <TabsList>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger disabled value="settings">
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="members">
        <Box pt="4">
          <Text color="secondary">Manage your team members</Text>
        </Box>
      </TabsContent>
      <TabsContent value="projects">
        <Box pt="4">
          <Text color="secondary">Manage your projects</Text>
        </Box>
      </TabsContent>
    </TabsRoot>
}`,...Te.parameters?.docs?.source}}},Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  render: () => <TabsRoot defaultValue="members" orientation="vertical" style={{
    maxWidth: "36rem"
  }}>
      <TabsList>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="members">
        <Text color="secondary">Manage your team members and their roles here.</Text>
      </TabsContent>
      <TabsContent value="projects">
        <Text color="secondary">Manage your projects and their status here.</Text>
      </TabsContent>
      <TabsContent value="settings">
        <Text color="secondary">Manage your tasks and their progress here.</Text>
      </TabsContent>
    </TabsRoot>
}`,...Ee.parameters?.docs?.source}}},De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
  render: () => <TabsRoot defaultValue="members" style={{
    "--zui-tabs-indicator-bg": "var(--zui-colors-success-solid)",
    "--zui-tabs-indicator-shadow": "var(--zui-shadows-sm)"
  } as CSSProperties}>
      <TabsList>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="members">
        <Box pt="4">
          <Text color="secondary">Manage your team members</Text>
        </Box>
      </TabsContent>
      <TabsContent value="projects">
        <Box pt="4">
          <Text color="secondary">Manage your projects</Text>
        </Box>
      </TabsContent>
      <TabsContent value="settings">
        <Box pt="4">
          <Text color="secondary">Manage your settings</Text>
        </Box>
      </TabsContent>
    </TabsRoot>
}`,...De.parameters?.docs?.source}}},Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`{
  render: function LazyMountStory() {
    function LazyMountPanel({
      label
    }: {
      label: string;
    }) {
      const renders = useRef(0);
      renders.current += 1;
      return <Box pt="4">
          <Text color="secondary">
            {label}: Content {renders.current}
          </Text>
        </Box>;
    }
    return <TabsRoot defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">Tab 1</TabsTrigger>
          <TabsTrigger value="two">Tab 2</TabsTrigger>
          <TabsTrigger value="three">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="one">
          <LazyMountPanel label="Tab 1" />
        </TabsContent>
        <TabsContent lazyMount value="two">
          <LazyMountPanel label="Tab 2" />
        </TabsContent>
        <TabsContent lazyMount value="three">
          <LazyMountPanel label="Tab 3" />
        </TabsContent>
      </TabsRoot>;
  }
}`,...Oe.parameters?.docs?.source}}},ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs.Root defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger value="members">Members</Tabs.Trigger>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="members">
        <Box pt="4">
          <Text color="secondary">Using the Tabs namespace export.</Text>
        </Box>
      </Tabs.Content>
      <Tabs.Content value="projects">
        <Box pt="4">
          <Text color="secondary">Projects panel.</Text>
        </Box>
      </Tabs.Content>
    </Tabs.Root>
}`,...ke.parameters?.docs?.source}}};var Ae=[`Default`,`Variants`,`Sizes`,`Fitted`,`Controlled`,`DisabledTab`,`Vertical`,`CustomIndicator`,`LazyMount`,`CompoundNamespace`];export{ke as CompoundNamespace,we as Controlled,De as CustomIndicator,Z as Default,Te as DisabledTab,Ce as Fitted,Oe as LazyMount,$ as Sizes,Q as Variants,Ee as Vertical,Ae as __namedExportsOrder,Se as default};