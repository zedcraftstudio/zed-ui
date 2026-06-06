import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{i as n,r,t as i}from"./Box-XznTsHG2.js";import{t as a}from"./jsx-runtime-CkXrEl7v.js";import{n as o}from"./Stack-yxIjSOSs.js";import{r as s,t as c}from"./icons-Bu2VjriB.js";var l=e(t(),1),u=a();function d(e,t){let{as:a,className:o,endIcon:s,invalid:c=!1,resize:l,rows:d,size:f=`md`,startIcon:p,style:m,...h}=e,g=!!(p||s),_=(0,u.jsx)(i,{ref:t,as:a??`textarea`,className:r(`zui-textarea`,p?`zui-textarea--start-icon`:void 0,s?`zui-textarea--end-icon`:void 0,o),"data-invalid":n(c),"data-size":f,rows:d,style:{resize:l,...m},...h});return g?(0,u.jsxs)(`div`,{className:`zui-textarea-group`,"data-invalid":n(c),"data-size":f,children:[p?(0,u.jsx)(`span`,{className:`zui-textarea__start-icon`,"aria-hidden":!0,children:p}):null,_,s?(0,u.jsx)(`span`,{className:`zui-textarea__end-icon`,"aria-hidden":!0,children:s}):null]}):_}var f=(0,l.forwardRef)(d);f.__docgenInfo={description:``,methods:[],displayName:`Textarea`};var p={title:`Forms/Textarea`,component:f,args:{placeholder:`Notes…`,rows:3}},m={},h={args:{invalid:!0,placeholder:`Required field`}},g={render:()=>(0,u.jsxs)(o,{gap:`3`,style:{maxWidth:`20rem`},children:[(0,u.jsx)(f,{startIcon:(0,u.jsx)(s,{size:16}),placeholder:`Leave a comment…`,rows:3}),(0,u.jsx)(f,{endIcon:(0,u.jsx)(c,{size:16}),placeholder:`Mention someone…`,rows:3})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    placeholder: "Required field"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3" style={{
    maxWidth: "20rem"
  }}>
      <Textarea startIcon={<MessageIcon size={16} />} placeholder="Leave a comment…" rows={3} />
      <Textarea endIcon={<AtIcon size={16} />} placeholder="Mention someone…" rows={3} />
    </Stack>
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`Invalid`,`WithIcons`];export{m as Default,h as Invalid,g as WithIcons,_ as __namedExportsOrder,p as default};