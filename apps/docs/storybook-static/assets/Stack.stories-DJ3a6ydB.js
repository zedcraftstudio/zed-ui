import{t as e}from"./Box-XznTsHG2.js";import{t}from"./jsx-runtime-CkXrEl7v.js";import{n,r,t as i}from"./Stack-yxIjSOSs.js";import{t as a}from"./Text-BU0_Ov2K.js";var o=t(),s={title:`Layout/Stack`,component:n},c={render:()=>(0,o.jsxs)(n,{gap:`2`,children:[(0,o.jsx)(a,{children:`First`}),(0,o.jsx)(a,{children:`Second`}),(0,o.jsx)(a,{children:`Third`})]})},l={render:()=>(0,o.jsxs)(n,{direction:`row`,gap:`3`,align:`center`,children:[(0,o.jsx)(a,{children:`One`}),(0,o.jsx)(a,{children:`Two`}),(0,o.jsx)(a,{children:`Three`})]})},u={name:`HStack`,render:()=>(0,o.jsxs)(i,{gap:`3`,children:[(0,o.jsx)(e,{p:`3`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:`One`})}),(0,o.jsx)(e,{p:`3`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:`Two`})})]})},d={name:`VStack`,render:()=>(0,o.jsxs)(r,{align:`stretch`,gap:`2`,style:{maxWidth:`12rem`},children:[(0,o.jsx)(e,{p:`3`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:`One`})}),(0,o.jsx)(e,{p:`3`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:`Two`})})]})},f={render:()=>(0,o.jsxs)(n,{direction:`row`,gap:`4`,separator:(0,o.jsx)(e,{"aria-hidden":!0,className:`zui-stack__separator`,"data-orientation":`vertical`}),children:[(0,o.jsx)(a,{children:`One`}),(0,o.jsx)(a,{children:`Two`}),(0,o.jsx)(a,{children:`Three`})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="2">
      <Text>First</Text>
      <Text>Second</Text>
      <Text>Third</Text>
    </Stack>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" gap="3" align="center">
      <Text>One</Text>
      <Text>Two</Text>
      <Text>Three</Text>
    </Stack>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "HStack",
  render: () => <HStack gap="3">
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">One</Text>
      </Box>
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">Two</Text>
      </Box>
    </HStack>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "VStack",
  render: () => <VStack align="stretch" gap="2" style={{
    maxWidth: "12rem"
  }}>
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">One</Text>
      </Box>
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">Two</Text>
      </Box>
    </VStack>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" gap="4" separator={<Box aria-hidden className="zui-stack__separator" data-orientation="vertical" />}>
      <Text>One</Text>
      <Text>Two</Text>
      <Text>Three</Text>
    </Stack>
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`Horizontal`,`HStackExample`,`VStackExample`,`Separator`];export{c as Default,u as HStackExample,l as Horizontal,f as Separator,d as VStackExample,p as __namedExportsOrder,s as default};