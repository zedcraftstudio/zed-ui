import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{i as n,r,t as i}from"./Box-XznTsHG2.js";import{t as a}from"./jsx-runtime-CkXrEl7v.js";import{n as o}from"./Stack-yxIjSOSs.js";import{t as s}from"./Input-ChwEXttv.js";var c=e(t(),1),l=a();function u(e,t){let{as:a,children:o,className:s,description:u,error:d,htmlFor:f,id:p,label:m,required:h=!1,...g}=e,_=(0,c.useId)(),v=p??_,y=f??v,b=!!d,x=`${v}-error`,S=o;if(b){let e=c.Children.toArray(o).find(c.isValidElement);if(e){let t=e,n=t.props[`aria-describedby`];S=(0,c.cloneElement)(t,{"aria-invalid":!0,"aria-describedby":[n,x].filter(Boolean).join(` `),invalid:t.props.invalid??!0})}}return(0,l.jsxs)(i,{ref:t,as:a??`div`,className:r(`zui-form-field`,s),"data-invalid":n(b),"data-required":n(h),id:v,...g,children:[m?(0,l.jsxs)(`label`,{className:`zui-form-field__label`,htmlFor:y,children:[m,h?(0,l.jsx)(`span`,{"aria-hidden":!0,className:`zui-form-field__required`,children:` *`}):null]}):null,(0,l.jsx)(`div`,{className:`zui-form-field__control`,children:S}),u?(0,l.jsx)(`div`,{className:`zui-form-field__description`,children:u}):null,d?(0,l.jsx)(`div`,{className:`zui-form-field__error`,id:x,role:`alert`,children:d}):null]})}var d=(0,c.forwardRef)(u);d.__docgenInfo={description:``,methods:[],displayName:`FormField`};var f={title:`Forms/FormField`,component:d},p={render:()=>(0,l.jsx)(d,{label:`Email`,required:!0,children:(0,l.jsx)(s,{type:`email`,placeholder:`you@example.com`})})},m={render:()=>(0,l.jsx)(d,{label:`Username`,description:`Must be unique.`,children:(0,l.jsx)(s,{placeholder:`jane`})})},h={render:()=>(0,l.jsx)(o,{gap:`4`,style:{maxWidth:`20rem`},children:(0,l.jsx)(d,{label:`Email`,error:`Enter a valid email.`,children:(0,l.jsx)(s,{type:`email`,placeholder:`you@example.com`})})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <FormField label="Email" required>
      <Input type="email" placeholder="you@example.com" />
    </FormField>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <FormField label="Username" description="Must be unique.">
      <Input placeholder="jane" />
    </FormField>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4" style={{
    maxWidth: "20rem"
  }}>
      <FormField label="Email" error="Enter a valid email.">
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </Stack>
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`WithDescription`,`WithError`];export{p as Default,m as WithDescription,h as WithError,g as __namedExportsOrder,f as default};