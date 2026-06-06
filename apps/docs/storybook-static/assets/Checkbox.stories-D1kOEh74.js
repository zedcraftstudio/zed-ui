import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{i as n,r}from"./Box-XznTsHG2.js";import{t as i}from"./jsx-runtime-CkXrEl7v.js";import{r as a}from"./dist-DqDbN6FL.js";import{n as o}from"./Stack-yxIjSOSs.js";import{a as s,i as c,n as l,r as u,t as d}from"./Checkbox-Dotfc0yr.js";var f=e(t(),1),p=i(),m=(0,f.forwardRef)(function({checked:e,className:t,color:i,description:o,disabled:d,indeterminate:f,invalid:m=!1,label:h,showIndicator:g=!0,size:_,variant:v,...y},b){let x=a(`Checkbox`),S=i??x?.color??`primary`,C=_??x?.size??`md`,w=v??`outline`;return(0,p.jsx)(`label`,{className:r(`zui-checkbox-card`,t),"data-color":S,"data-disabled":n(d),"data-invalid":n(m),"data-size":C,"data-variant":w,children:(0,p.jsxs)(`span`,{className:`zui-checkbox-card__body`,children:[(0,p.jsxs)(`span`,{className:`zui-checkbox-card__content`,children:[h?(0,p.jsx)(`span`,{className:`zui-checkbox-card__label`,children:h}):null,o?(0,p.jsx)(`span`,{className:`zui-checkbox-card__description`,children:o}):null]}),g?(0,p.jsx)(s,{ref:b,checked:e,className:`zui-checkbox__control`,"data-color":S,"data-invalid":n(m),"data-size":C,"data-variant":`solid`,disabled:d,indeterminate:f,...y,children:(0,p.jsxs)(c,{className:`zui-checkbox__indicator`,children:[(0,p.jsx)(`span`,{className:`zui-checkbox__check-icon`,children:(0,p.jsx)(l,{})}),(0,p.jsx)(`span`,{className:`zui-checkbox__indeterminate-icon`,children:(0,p.jsx)(u,{})})]})}):(0,p.jsx)(s,{ref:b,checked:e,className:`zui-checkbox-card__hidden-control`,"data-color":S,"data-invalid":n(m),disabled:d,indeterminate:f,...y})]})})});m.displayName=`CheckboxCard`,m.__docgenInfo={description:``,methods:[],displayName:`CheckboxCard`,props:{className:{required:!1,tsType:{name:`string`},description:``},color:{required:!1,tsType:{name:`union`,raw:`"primary" | "neutral" | "success" | "warning" | "danger" | "info"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"neutral"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"info"`}]},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},invalid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:``},showIndicator:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"outline" | "subtle" | "solid"`,elements:[{name:`literal`,value:`"outline"`},{name:`literal`,value:`"subtle"`},{name:`literal`,value:`"solid"`}]},description:``}}};var h={title:`Forms/Checkbox`,component:d,args:{label:`Accept terms and conditions`}},g={},_={args:{defaultChecked:!0}},v={render:()=>(0,p.jsxs)(o,{gap:`3`,children:[(0,p.jsx)(d,{defaultChecked:!0,variant:`solid`,label:`Solid`}),(0,p.jsx)(d,{defaultChecked:!0,variant:`outline`,label:`Outline`}),(0,p.jsx)(d,{defaultChecked:!0,variant:`soft`,label:`Soft`})]})},y={render:()=>(0,p.jsxs)(o,{gap:`3`,children:[(0,p.jsx)(d,{defaultChecked:!0,color:`primary`,label:`Primary`}),(0,p.jsx)(d,{defaultChecked:!0,color:`success`,label:`Success`}),(0,p.jsx)(d,{defaultChecked:!0,color:`danger`,label:`Danger`})]})},b={render:()=>(0,p.jsxs)(o,{gap:`3`,children:[(0,p.jsx)(d,{defaultChecked:!0,size:`sm`,label:`Small`}),(0,p.jsx)(d,{defaultChecked:!0,size:`md`,label:`Medium`}),(0,p.jsx)(d,{defaultChecked:!0,size:`lg`,label:`Large`})]})},x={render:()=>{let[e,t]=(0,f.useState)(!1);return(0,p.jsx)(d,{checked:e,label:`Subscribe to newsletter`,onCheckedChange:e=>t(!!e)})}},S={render:()=>(0,p.jsx)(d,{checked:!1,indeterminate:!0,label:`Select all`})},C={args:{description:`By clicking this, you agree to our Terms and Privacy Policy.`}},w={args:{invalid:!0,label:`Required field`}},T={args:{defaultChecked:!0,disabled:!0,label:`Disabled`}},E={render:()=>(0,p.jsx)(m,{defaultChecked:!0,description:`Component-based UI library with a large ecosystem.`,label:`React`})},D={render:()=>(0,p.jsxs)(o,{gap:`3`,style:{maxWidth:`20rem`},children:[(0,p.jsx)(m,{defaultChecked:!0,description:`Border highlight`,label:`Outline`,variant:`outline`}),(0,p.jsx)(m,{defaultChecked:!0,description:`Soft background`,label:`Subtle`,variant:`subtle`}),(0,p.jsx)(m,{defaultChecked:!0,description:`Filled card`,label:`Solid`,variant:`solid`})]})},O={render:()=>{let[e,t]=(0,f.useState)([`react`]);return(0,p.jsx)(o,{gap:`3`,style:{maxWidth:`20rem`},children:[{value:`react`,label:`React`,description:`Component-based UI library with a large ecosystem.`},{value:`vue`,label:`Vue`,description:`Progressive framework for building user interfaces.`},{value:`svelte`,label:`Svelte`,description:`Compile-time approach with less runtime overhead.`}].map(n=>(0,p.jsx)(m,{checked:e.includes(n.value),description:n.description,label:n.label,onCheckedChange:e=>t(t=>e?[...t,n.value]:t.filter(e=>e!==n.value))},n.value))})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      <Checkbox defaultChecked variant="solid" label="Solid" />
      <Checkbox defaultChecked variant="outline" label="Outline" />
      <Checkbox defaultChecked variant="soft" label="Soft" />
    </Stack>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      <Checkbox defaultChecked color="primary" label="Primary" />
      <Checkbox defaultChecked color="success" label="Success" />
      <Checkbox defaultChecked color="danger" label="Danger" />
    </Stack>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      <Checkbox defaultChecked size="sm" label="Small" />
      <Checkbox defaultChecked size="md" label="Medium" />
      <Checkbox defaultChecked size="lg" label="Large" />
    </Stack>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} label="Subscribe to newsletter" onCheckedChange={value => setChecked(Boolean(value))} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Checkbox checked={false} indeterminate label="Select all" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    description: "By clicking this, you agree to our Terms and Privacy Policy."
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    label: "Required field"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    disabled: true,
    label: "Disabled"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxCard defaultChecked description="Component-based UI library with a large ecosystem." label="React" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3" style={{
    maxWidth: "20rem"
  }}>
      <CheckboxCard defaultChecked description="Border highlight" label="Outline" variant="outline" />
      <CheckboxCard defaultChecked description="Soft background" label="Subtle" variant="subtle" />
      <CheckboxCard defaultChecked description="Filled card" label="Solid" variant="solid" />
    </Stack>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [frameworks, setFrameworks] = useState<string[]>(["react"]);
    const options = [{
      value: "react",
      label: "React",
      description: "Component-based UI library with a large ecosystem."
    }, {
      value: "vue",
      label: "Vue",
      description: "Progressive framework for building user interfaces."
    }, {
      value: "svelte",
      label: "Svelte",
      description: "Compile-time approach with less runtime overhead."
    }];
    return <Stack gap="3" style={{
      maxWidth: "20rem"
    }}>
        {options.map(option => <CheckboxCard key={option.value} checked={frameworks.includes(option.value)} description={option.description} label={option.label} onCheckedChange={next => setFrameworks(current => next ? [...current, option.value] : current.filter(value => value !== option.value))} />)}
      </Stack>;
  }
}`,...O.parameters?.docs?.source}}};var k=[`Default`,`Checked`,`Variants`,`Colors`,`Sizes`,`Controlled`,`Indeterminate`,`WithDescription`,`Invalid`,`Disabled`,`CheckboxCardDefault`,`CheckboxCardVariants`,`CheckboxCardGroup`];export{E as CheckboxCardDefault,O as CheckboxCardGroup,D as CheckboxCardVariants,_ as Checked,y as Colors,x as Controlled,g as Default,T as Disabled,S as Indeterminate,w as Invalid,b as Sizes,v as Variants,C as WithDescription,k as __namedExportsOrder,h as default};