import{t as e}from"./Box-XznTsHG2.js";import{t}from"./jsx-runtime-CkXrEl7v.js";import{n}from"./Stack-yxIjSOSs.js";import{n as r,t as i}from"./Flex-BN-j_dZ-.js";import{t as a}from"./Text-BU0_Ov2K.js";var o=t(),s={title:`Layout/Flex`,component:i},c={render:()=>(0,o.jsxs)(i,{gap:`3`,children:[(0,o.jsx)(e,{p:`3`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:`One`})}),(0,o.jsx)(e,{p:`3`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:`Two`})})]})},l={render:()=>(0,o.jsxs)(n,{gap:`4`,children:[(0,o.jsx)(i,{direction:`row`,gap:`2`,children:[1,2,3].map(t=>(0,o.jsx)(e,{p:`3`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:t})},t))}),(0,o.jsx)(i,{direction:`column`,gap:`2`,style:{maxWidth:`12rem`},children:[1,2,3].map(t=>(0,o.jsx)(e,{p:`3`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:t})},t))})]})},u={render:()=>(0,o.jsx)(n,{gap:`3`,children:[`flex-start`,`center`,`flex-end`,`space-between`].map(t=>(0,o.jsxs)(i,{justify:t,gap:`2`,p:`3`,bg:`surface`,radius:`md`,children:[(0,o.jsx)(e,{p:`2`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:t})}),(0,o.jsx)(e,{p:`2`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:`B`})})]},t))})},d={name:`Spacer`,render:()=>(0,o.jsxs)(i,{align:`center`,gap:`3`,width:`100%`,children:[(0,o.jsx)(e,{p:`3`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:`Box 1`})}),(0,o.jsx)(r,{}),(0,o.jsx)(e,{p:`3`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:`Box 2`})})]})},f={render:()=>(0,o.jsx)(i,{gap:`2`,wrap:`wrap`,style:{maxWidth:`16rem`},children:[1,2,3,4,5,6].map(t=>(0,o.jsx)(e,{p:`3`,bg:`muted`,radius:`sm`,children:(0,o.jsx)(a,{size:`sm`,children:t})},t))})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap="3">
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">One</Text>
      </Box>
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">Two</Text>
      </Box>
    </Flex>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      <Flex direction="row" gap="2">
        {[1, 2, 3].map(item => <Box key={item} p="3" bg="muted" radius="sm">
            <Text size="sm">{item}</Text>
          </Box>)}
      </Flex>
      <Flex direction="column" gap="2" style={{
      maxWidth: "12rem"
    }}>
        {[1, 2, 3].map(item => <Box key={item} p="3" bg="muted" radius="sm">
            <Text size="sm">{item}</Text>
          </Box>)}
      </Flex>
    </Stack>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      {(["flex-start", "center", "flex-end", "space-between"] as const).map(justify => <Flex key={justify} justify={justify} gap="2" p="3" bg="surface" radius="md">
          <Box p="2" bg="muted" radius="sm">
            <Text size="sm">{justify}</Text>
          </Box>
          <Box p="2" bg="muted" radius="sm">
            <Text size="sm">B</Text>
          </Box>
        </Flex>)}
    </Stack>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Spacer",
  render: () => <Flex align="center" gap="3" width="100%">
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">Box 1</Text>
      </Box>
      <Spacer />
      <Box p="3" bg="muted" radius="sm">
        <Text size="sm">Box 2</Text>
      </Box>
    </Flex>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap="2" wrap="wrap" style={{
    maxWidth: "16rem"
  }}>
      {[1, 2, 3, 4, 5, 6].map(item => <Box key={item} p="3" bg="muted" radius="sm">
          <Text size="sm">{item}</Text>
        </Box>)}
    </Flex>
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`Direction`,`Justify`,`SpacerExample`,`Wrap`];export{c as Default,l as Direction,u as Justify,d as SpacerExample,f as Wrap,p as __namedExportsOrder,s as default};