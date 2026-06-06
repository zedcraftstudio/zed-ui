import{t as e}from"./Box-XznTsHG2.js";import{t}from"./jsx-runtime-CkXrEl7v.js";import{n}from"./Stack-yxIjSOSs.js";import{t as r}from"./Heading-BRCKben4.js";import{t as i}from"./Text-BU0_Ov2K.js";var a=t(),o={title:`Layout/Box`,component:e},s={render:()=>(0,a.jsx)(e,{p:`4`,radius:`md`,bg:`muted`,children:(0,a.jsx)(i,{children:`This is the Box`})})},c={render:()=>(0,a.jsx)(e,{p:`4`,bg:`surface`,radius:`md`,shadow:`sm`,children:(0,a.jsx)(i,{children:`This is the Box`})})},l={render:()=>(0,a.jsx)(e,{borderColor:`default`,borderWidth:`1`,color:`secondary`,p:`4`,radius:`md`,children:`Somewhat disabled box`})},u={render:()=>(0,a.jsx)(e,{as:`section`,p:`4`,radius:`md`,bg:`muted`,children:(0,a.jsx)(i,{children:`This is a Box rendered as a section`})})},d={render:()=>(0,a.jsxs)(e,{p:`6`,radius:`lg`,bg:`surface`,shadow:`md`,children:[(0,a.jsx)(r,{level:4,children:`Box with shadow`}),(0,a.jsx)(n,{gap:`2`,mt:`2`,children:(0,a.jsx)(i,{color:`secondary`,size:`sm`,children:`Use the shadow prop for elevation.`})})]})},f={render:()=>(0,a.jsx)(e,{className:`zui-box--hover-surface`,p:`4`,radius:`md`,bg:`surface`,shadow:`sm`,children:(0,a.jsx)(i,{children:`Hover this box`})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="4" radius="md" bg="muted">
      <Text>This is the Box</Text>
    </Box>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="4" bg="surface" radius="md" shadow="sm">
      <Text>This is the Box</Text>
    </Box>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box borderColor="default" borderWidth="1" color="secondary" p="4" radius="md">
      Somewhat disabled box
    </Box>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box as="section" p="4" radius="md" bg="muted">
      <Text>This is a Box rendered as a section</Text>
    </Box>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box p="6" radius="lg" bg="surface" shadow="md">
      <Heading level={4}>Box with shadow</Heading>
      <Stack gap="2" mt="2">
        <Text color="secondary" size="sm">
          Use the shadow prop for elevation.
        </Text>
      </Stack>
    </Box>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Box className="zui-box--hover-surface" p="4" radius="md" bg="surface" shadow="sm">
      <Text>Hover this box</Text>
    </Box>
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`Shorthand`,`Border`,`AsSection`,`Shadow`,`HoverSurface`];export{u as AsSection,l as Border,s as Default,f as HoverSurface,d as Shadow,c as Shorthand,p as __namedExportsOrder,o as default};