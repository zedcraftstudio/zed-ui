import{t as e}from"./jsx-runtime-CkXrEl7v.js";import{n as t}from"./Stack-yxIjSOSs.js";import{t as n}from"./Text-BU0_Ov2K.js";var r=e(),i=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,a={title:`Typography/Text`,component:n,args:{size:`md`,weight:`regular`}},o={render:e=>(0,r.jsx)(n,{...e,children:`Sphinx of black quartz, judge my vow.`})},s={render:()=>(0,r.jsx)(t,{gap:`1`,children:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`].map(e=>(0,r.jsx)(n,{size:e,children:`ZUI`},e))})},c={render:()=>(0,r.jsxs)(t,{gap:`2`,children:[(0,r.jsx)(n,{weight:`regular`,children:`Sphinx of black quartz, judge my vow.`}),(0,r.jsx)(n,{weight:`medium`,children:`Sphinx of black quartz, judge my vow.`}),(0,r.jsx)(n,{weight:`semibold`,children:`Sphinx of black quartz, judge my vow.`}),(0,r.jsx)(n,{weight:`bold`,children:`Sphinx of black quartz, judge my vow.`})]})},l={render:()=>(0,r.jsx)(n,{truncate:!0,style:{maxWidth:`16rem`},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`})},u={render:()=>(0,r.jsx)(n,{lineClamp:2,style:{maxWidth:`20rem`},children:i})},d={render:()=>(0,r.jsxs)(t,{gap:`1`,children:[(0,r.jsx)(n,{color:`primary`,children:`Primary text`}),(0,r.jsx)(n,{color:`secondary`,children:`Secondary text`}),(0,r.jsx)(n,{color:`muted`,children:`Muted text`})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Text {...args}>Sphinx of black quartz, judge my vow.</Text>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="1">
      {(["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const).map(size => <Text key={size} size={size}>
          ZUI
        </Text>)}
    </Stack>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="2">
      <Text weight="regular">Sphinx of black quartz, judge my vow.</Text>
      <Text weight="medium">Sphinx of black quartz, judge my vow.</Text>
      <Text weight="semibold">Sphinx of black quartz, judge my vow.</Text>
      <Text weight="bold">Sphinx of black quartz, judge my vow.</Text>
    </Stack>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Text truncate style={{
    maxWidth: "16rem"
  }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Text lineClamp={2} style={{
    maxWidth: "20rem"
  }}>
      {LOREM}
    </Text>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="1">
      <Text color="primary">Primary text</Text>
      <Text color="secondary">Secondary text</Text>
      <Text color="muted">Muted text</Text>
    </Stack>
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Sizes`,`Weights`,`Truncate`,`LineClamp`,`Colors`];export{d as Colors,o as Default,u as LineClamp,s as Sizes,l as Truncate,c as Weights,f as __namedExportsOrder,a as default};