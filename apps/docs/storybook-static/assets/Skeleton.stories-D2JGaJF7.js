import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{i as n,r,t as i}from"./Box-XznTsHG2.js";import{t as a}from"./jsx-runtime-CkXrEl7v.js";import{r as o}from"./dist-DqDbN6FL.js";import{t as s}from"./Button-Ply743O2.js";import{n as c}from"./Stack-yxIjSOSs.js";import{t as l}from"./Text-BU0_Ov2K.js";var u=e(t(),1),d=a();function f(e,t,n){return t===!1?`none`:e??n}function p(e,t){let a=o(`Skeleton`),{animated:s,children:c,className:l,loading:u=!0,variant:p,...m}=e,h=f(p,s,a?.variant??`pulse`),g=c!=null;return(0,d.jsx)(i,{ref:t,"aria-hidden":g?void 0:u||void 0,className:r(`zui-skeleton`,l),"data-has-children":n(g),"data-loading":u?`true`:`false`,"data-variant":h,...m,children:c})}var m=(0,u.forwardRef)(p);function h(e,t){let{className:n,size:i=`md`,...a}=e;return(0,d.jsx)(m,{ref:t,className:r(`zui-skeleton-circle`,n),"data-size":i,...a})}var g=(0,u.forwardRef)(h);function _(e,t){let{className:n,gap:i=`2`,loading:a=!0,noOfLines:o=3,rootProps:s,...l}=e,u=a?o:1;return(0,d.jsx)(c,{ref:t,className:r(`zui-skeleton-text`,n),gap:i,width:`100%`,...s,children:Array.from({length:u},(e,t)=>(0,d.jsx)(m,{height:`0.75rem`,loading:a,width:a&&t===o-1&&o>1?`80%`:`100%`,...l},t))})}var v=(0,u.forwardRef)(_);m.__docgenInfo={description:``,methods:[],displayName:`Skeleton`},g.__docgenInfo={description:``,methods:[],displayName:`SkeletonCircle`},v.__docgenInfo={description:``,methods:[],displayName:`SkeletonText`};var y={title:`Feedback/Skeleton`,component:m,args:{height:`1rem`,width:`12rem`,variant:`pulse`}},b={},x={render:()=>(0,d.jsxs)(c,{gap:`6`,style:{maxWidth:`20rem`},children:[(0,d.jsxs)(c,{direction:`row`,gap:`3`,width:`full`,children:[(0,d.jsx)(g,{size:`md`}),(0,d.jsx)(v,{noOfLines:2})]}),(0,d.jsx)(m,{height:`8rem`,width:`100%`})]})},S={render:()=>(0,d.jsx)(v,{noOfLines:4})},C={render:()=>(0,d.jsxs)(c,{gap:`3`,style:{maxWidth:`20rem`},children:[(0,d.jsx)(m,{height:`1rem`,variant:`pulse`,width:`12rem`}),(0,d.jsx)(m,{height:`1rem`,variant:`shine`,width:`12rem`}),(0,d.jsx)(m,{height:`1rem`,variant:`none`,width:`12rem`})]})},w={render:function(){let[e,t]=(0,u.useState)(!0);return(0,d.jsxs)(c,{gap:`3`,align:`start`,children:[(0,d.jsx)(m,{loading:e,width:`fit-content`,children:(0,d.jsx)(l,{children:`Content loaded`})}),(0,d.jsx)(s,{size:`sm`,onClick:()=>t(e=>!e),children:`Toggle`})]})}},T={render:()=>(0,d.jsx)(m,{height:`1rem`,style:{"--zui-skeleton-start-color":`#e2e8f0`,"--zui-skeleton-end-color":`#cbd5e1`},variant:`shine`,width:`12rem`})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="6" style={{
    maxWidth: "20rem"
  }}>
      <Stack direction="row" gap="3" width="full">
        <SkeletonCircle size="md" />
        <SkeletonText noOfLines={2} />
      </Stack>
      <Skeleton height="8rem" width="100%" />
    </Stack>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <SkeletonText noOfLines={4} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3" style={{
    maxWidth: "20rem"
  }}>
      <Skeleton height="1rem" variant="pulse" width="12rem" />
      <Skeleton height="1rem" variant="shine" width="12rem" />
      <Skeleton height="1rem" variant="none" width="12rem" />
    </Stack>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function WithChildrenStory() {
    const [loading, setLoading] = useState(true);
    return <Stack gap="3" align="start">
        <Skeleton loading={loading} width="fit-content">
          <Text>Content loaded</Text>
        </Skeleton>
        <Button size="sm" onClick={() => setLoading(value => !value)}>
          Toggle
        </Button>
      </Stack>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton height="1rem" style={{
    "--zui-skeleton-start-color": "#e2e8f0",
    "--zui-skeleton-end-color": "#cbd5e1"
  }} variant="shine" width="12rem" />
}`,...T.parameters?.docs?.source}}};var E=[`Default`,`Feed`,`TextLines`,`Variants`,`WithChildren`,`CustomColors`];export{T as CustomColors,b as Default,x as Feed,S as TextLines,C as Variants,w as WithChildren,E as __namedExportsOrder,y as default};