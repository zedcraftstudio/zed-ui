import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{i as n,r,t as i}from"./Box-XznTsHG2.js";import{t as a}from"./jsx-runtime-CkXrEl7v.js";import{r as o}from"./dist-DqDbN6FL.js";import{t as s}from"./Spinner-Cxo_kqWo.js";import{t as c}from"./Button-Ply743O2.js";import{t as l}from"./icons-kyZdYOJr.js";import{n as u}from"./Stack-yxIjSOSs.js";var d=e(t(),1),f=a(),p={error:`danger`,info:`info`,neutral:`neutral`,success:`success`,warning:`warning`},m={danger:`error`,info:`info`,neutral:`neutral`,primary:`info`,success:`success`,warning:`warning`};function h(e,t){let{children:a,className:s,color:c,compact:u=!1,description:d,endElement:h,icon:g,inline:_=!1,size:v,startElement:y,status:b,title:x,variant:S,...C}=e,w=o(`Alert`),T=b??(c?m[c]:void 0)??w?.status??`info`,E=c??p[T],D=v??w?.size??`md`,O=S??w?.variant??`subtle`,k=(0,f.jsx)(`span`,{className:`zui-alert__indicator`,children:y??g??l(T,u?16:D===`sm`?18:D===`lg`?22:20)}),A=!!(x||d||a);return(0,f.jsxs)(i,{ref:t,role:`alert`,className:r(`zui-alert`,s),"data-color":E,"data-compact":n(u),"data-inline":n(_),"data-size":D,"data-status":T,"data-variant":O,...C,children:[k,A?(0,f.jsxs)(`div`,{className:`zui-alert__content`,children:[x?(0,f.jsx)(`div`,{className:`zui-alert__title`,children:x}):null,d?(0,f.jsx)(`div`,{className:`zui-alert__description`,children:d}):null,a]}):null,h?(0,f.jsx)(`div`,{className:`zui-alert__end`,children:h}):null]})}var g=(0,d.forwardRef)(h);g.__docgenInfo={description:``,methods:[],displayName:`Alert`};var _={title:`Feedback/Alert`,component:g,args:{description:`Helpful context for the user.`,status:`info`,title:`Information`}},v={},y={args:{description:void 0,title:`This is the alert title`}},b={render:()=>(0,f.jsxs)(u,{gap:`3`,children:[(0,f.jsx)(g,{status:`error`,title:`There was an error processing your request`}),(0,f.jsx)(g,{status:`success`,title:`Changes saved successfully.`}),(0,f.jsx)(g,{status:`warning`,title:`Your session is about to expire.`}),(0,f.jsx)(g,{status:`info`,title:`Data uploaded to the server.`}),(0,f.jsx)(g,{status:`neutral`,title:`Maintenance scheduled tonight.`})]})},x={render:()=>(0,f.jsxs)(u,{gap:`3`,children:[(0,f.jsx)(g,{status:`info`,title:`Data uploaded to the server.`,variant:`subtle`}),(0,f.jsx)(g,{status:`info`,title:`Data uploaded to the server.`,variant:`surface`}),(0,f.jsx)(g,{status:`info`,title:`Data uploaded to the server.`,variant:`outline`}),(0,f.jsx)(g,{status:`info`,title:`Data uploaded to the server.`,variant:`solid`})]})},S={render:()=>(0,f.jsxs)(u,{gap:`3`,children:[(0,f.jsx)(g,{size:`sm`,status:`info`,title:`Small alert`}),(0,f.jsx)(g,{size:`md`,status:`info`,title:`Medium alert`}),(0,f.jsx)(g,{size:`lg`,status:`info`,title:`Large alert`})]})},C={render:()=>(0,f.jsx)(g,{description:`Your application has been received.`,endElement:(0,f.jsx)(c,{size:`sm`,variant:`ghost`,children:`Close`}),status:`success`,title:`Success!`})},w={render:()=>(0,f.jsx)(g,{startElement:(0,f.jsx)(s,{size:`sm`}),status:`info`,title:`We are loading something`})},T={args:{color:`primary`,status:`info`,title:`This is an info alert but shown as primary`}},E={render:()=>{let[e,t]=(0,d.useState)(!0);return e?(0,f.jsx)(g,{description:`Dismiss to hide this message.`,endElement:(0,f.jsx)(c,{size:`sm`,variant:`ghost`,onClick:()=>t(!1),children:`Dismiss`}),status:`info`,title:`Tip`}):(0,f.jsx)(c,{size:`sm`,variant:`outline`,onClick:()=>t(!0),children:`Show alert`})}},D={args:{description:`Additional details inline with the title.`,inline:!0,title:`Heads up`}},O={render:()=>(0,f.jsxs)(u,{gap:`3`,children:[(0,f.jsx)(g,{compact:!0,status:`info`,title:`New version available`}),(0,f.jsx)(g,{compact:!0,status:`warning`,title:`Storage almost full`,description:`Upgrade to add more space.`}),(0,f.jsx)(g,{compact:!0,status:`error`,title:`Failed to save`,variant:`outline`}),(0,f.jsx)(g,{compact:!0,endElement:(0,f.jsx)(c,{size:`xs`,variant:`ghost`,children:`Dismiss`}),status:`success`,title:`Copied to clipboard`,variant:`subtle`})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined,
    title: "This is the alert title"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      <Alert status="error" title="There was an error processing your request" />
      <Alert status="success" title="Changes saved successfully." />
      <Alert status="warning" title="Your session is about to expire." />
      <Alert status="info" title="Data uploaded to the server." />
      <Alert status="neutral" title="Maintenance scheduled tonight." />
    </Stack>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      <Alert status="info" title="Data uploaded to the server." variant="subtle" />
      <Alert status="info" title="Data uploaded to the server." variant="surface" />
      <Alert status="info" title="Data uploaded to the server." variant="outline" />
      <Alert status="info" title="Data uploaded to the server." variant="solid" />
    </Stack>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      <Alert size="sm" status="info" title="Small alert" />
      <Alert size="md" status="info" title="Medium alert" />
      <Alert size="lg" status="info" title="Large alert" />
    </Stack>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Alert description="Your application has been received." endElement={<Button size="sm" variant="ghost">
          Close
        </Button>} status="success" title="Success!" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Alert startElement={<Spinner size="sm" />} status="info" title="We are loading something" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    color: "primary",
    status: "info",
    title: "This is an info alert but shown as primary"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    if (!open) {
      return <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
          Show alert
        </Button>;
    }
    return <Alert description="Dismiss to hide this message." endElement={<Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
            Dismiss
          </Button>} status="info" title="Tip" />;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    description: "Additional details inline with the title.",
    inline: true,
    title: "Heads up"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      <Alert compact status="info" title="New version available" />
      <Alert compact status="warning" title="Storage almost full" description="Upgrade to add more space." />
      <Alert compact status="error" title="Failed to save" variant="outline" />
      <Alert compact endElement={<Button size="xs" variant="ghost">
            Dismiss
          </Button>} status="success" title="Copied to clipboard" variant="subtle" />
    </Stack>
}`,...O.parameters?.docs?.source}}};var k=[`Default`,`TitleOnly`,`Statuses`,`Variants`,`Sizes`,`WithCloseButton`,`WithSpinner`,`ColorOverride`,`Dismissible`,`Inline`,`Compact`];export{T as ColorOverride,O as Compact,v as Default,E as Dismissible,D as Inline,S as Sizes,b as Statuses,y as TitleOnly,x as Variants,C as WithCloseButton,w as WithSpinner,k as __namedExportsOrder,_ as default};