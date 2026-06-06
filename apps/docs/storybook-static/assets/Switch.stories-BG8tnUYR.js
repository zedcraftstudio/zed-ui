import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{t as n}from"./jsx-runtime-CkXrEl7v.js";import{n as r}from"./Stack-yxIjSOSs.js";import{t as i}from"./Switch-DMj0HoKu.js";var a=n();function o(){return(0,a.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.75`,"aria-hidden":!0,children:(0,a.jsx)(`path`,{d:`M2 5l2 2 4-4.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function s(){return(0,a.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.75`,"aria-hidden":!0,children:(0,a.jsx)(`path`,{d:`M2.5 2.5l5 5M7.5 2.5l-5 5`,strokeLinecap:`round`})})}o.__docgenInfo={description:``,methods:[],displayName:`SwitchCheckIcon`},s.__docgenInfo={description:``,methods:[],displayName:`SwitchCloseIcon`};var c=e(t(),1),l={title:`Forms/Switch`,component:i,args:{label:`Activate notifications`}},u={},d={args:{defaultChecked:!0}},f={render:()=>(0,a.jsxs)(r,{gap:`3`,children:[(0,a.jsx)(i,{defaultChecked:!0,size:`sm`,label:`Small`}),(0,a.jsx)(i,{defaultChecked:!0,size:`md`,label:`Medium`}),(0,a.jsx)(i,{defaultChecked:!0,size:`lg`,label:`Large`})]})},p={render:()=>(0,a.jsxs)(r,{direction:`row`,gap:`4`,align:`center`,children:[(0,a.jsx)(i,{defaultChecked:!0,variant:`solid`,label:`Solid`}),(0,a.jsx)(i,{defaultChecked:!0,variant:`raised`,label:`Raised`})]})},m={render:()=>(0,a.jsxs)(r,{gap:`3`,children:[(0,a.jsx)(i,{defaultChecked:!0,color:`primary`,label:`Primary`}),(0,a.jsx)(i,{defaultChecked:!0,color:`success`,label:`Success`}),(0,a.jsx)(i,{defaultChecked:!0,color:`danger`,label:`Danger`})]})},h={render:()=>{let[e,t]=(0,c.useState)(!1);return(0,a.jsx)(i,{checked:e,label:`Email notifications`,onCheckedChange:t})}},g={render:()=>{let[e,t]=(0,c.useState)(!1);return(0,a.jsx)(i,{checked:e,label:`Switch me`,onCheckedChange:t,trackLabel:{on:`On`,off:`Off`}})}},_={render:()=>{let[e,t]=(0,c.useState)(!0);return(0,a.jsx)(i,{checked:e,label:`Switch me`,onCheckedChange:t,thumbLabel:{on:(0,a.jsx)(o,{}),off:(0,a.jsx)(s,{})}})}},v={args:{defaultChecked:!0,description:`Receive product updates and release notes.`,label:`Email notifications`}},y={args:{defaultChecked:!0,disabled:!0}},b={args:{invalid:!0,label:`Required setting`}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      <Switch defaultChecked size="sm" label="Small" />
      <Switch defaultChecked size="md" label="Medium" />
      <Switch defaultChecked size="lg" label="Large" />
    </Stack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" gap="4" align="center">
      <Switch defaultChecked variant="solid" label="Solid" />
      <Switch defaultChecked variant="raised" label="Raised" />
    </Stack>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      <Switch defaultChecked color="primary" label="Primary" />
      <Switch defaultChecked color="success" label="Success" />
      <Switch defaultChecked color="danger" label="Danger" />
    </Stack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} label="Email notifications" onCheckedChange={setChecked} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} label="Switch me" onCheckedChange={setChecked} trackLabel={{
      on: "On",
      off: "Off"
    }} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Switch checked={checked} label="Switch me" onCheckedChange={setChecked} thumbLabel={{
      on: <SwitchCheckIcon />,
      off: <SwitchCloseIcon />
    }} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    description: "Receive product updates and release notes.",
    label: "Email notifications"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    label: "Required setting"
  }
}`,...b.parameters?.docs?.source}}};var x=[`Default`,`Checked`,`Sizes`,`Variants`,`Colors`,`Controlled`,`TrackIndicator`,`ThumbIndicator`,`WithDescription`,`Disabled`,`Invalid`];export{d as Checked,m as Colors,h as Controlled,u as Default,y as Disabled,b as Invalid,f as Sizes,_ as ThumbIndicator,g as TrackIndicator,p as Variants,v as WithDescription,x as __namedExportsOrder,l as default};