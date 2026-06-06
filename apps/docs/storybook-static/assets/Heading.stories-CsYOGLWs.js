import{t as e}from"./jsx-runtime-CkXrEl7v.js";import{t}from"./Button-Ply743O2.js";import{n}from"./Stack-yxIjSOSs.js";import{t as r}from"./Flex-BN-j_dZ-.js";import{t as i}from"./Heading-BRCKben4.js";import{t as a}from"./Text-BU0_Ov2K.js";var o=e(),s={title:`Typography/Heading`,component:i,args:{size:`xl`,weight:`semibold`}},c={render:e=>(0,o.jsx)(i,{...e,children:`The quick brown fox jumps over the lazy dog`})},l={render:()=>(0,o.jsx)(n,{gap:`3`,children:[`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`].map(e=>(0,o.jsxs)(i,{size:e,children:[`Heading (`,e,`)`]},e))})},u={render:()=>(0,o.jsxs)(n,{gap:`2`,children:[(0,o.jsx)(i,{weight:`regular`,children:`Normal`}),(0,o.jsx)(i,{weight:`medium`,children:`Medium`}),(0,o.jsx)(i,{weight:`semibold`,children:`Semibold`}),(0,o.jsx)(i,{weight:`bold`,children:`Bold`})]})},d={render:()=>(0,o.jsxs)(n,{gap:`2`,children:[(0,o.jsx)(i,{level:1,size:`3xl`,children:`Level 1`}),(0,o.jsx)(i,{level:2,size:`2xl`,children:`Level 2`}),(0,o.jsx)(i,{level:3,size:`xl`,children:`Level 3`})]})},f={render:()=>(0,o.jsxs)(n,{gap:`2`,style:{maxWidth:`36rem`},children:[(0,o.jsxs)(i,{size:`2xl`,children:[`Create accessible React apps with `,(0,o.jsx)(`mark`,{children:`speed`})]}),(0,o.jsx)(a,{color:`secondary`,size:`sm`,children:`Zed UI is a simple, modular and accessible component library that gives you the building blocks you need.`})]})},p={render:()=>(0,o.jsxs)(n,{gap:`3`,style:{maxWidth:`28rem`},children:[(0,o.jsx)(i,{size:`2xl`,children:`Modern payments for Stores`}),(0,o.jsx)(a,{color:`secondary`,children:`PayMe helps startups get paid by anyone, anywhere in the world`}),(0,o.jsx)(r,{children:(0,o.jsx)(t,{size:`sm`,children:`Create account`})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Heading {...args}>The quick brown fox jumps over the lazy dog</Heading>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      {(["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const).map(size => <Heading key={size} size={size}>
          Heading ({size})
        </Heading>)}
    </Stack>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="2">
      <Heading weight="regular">Normal</Heading>
      <Heading weight="medium">Medium</Heading>
      <Heading weight="semibold">Semibold</Heading>
      <Heading weight="bold">Bold</Heading>
    </Stack>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="2">
      <Heading level={1} size="3xl">
        Level 1
      </Heading>
      <Heading level={2} size="2xl">
        Level 2
      </Heading>
      <Heading level={3} size="xl">
        Level 3
      </Heading>
    </Stack>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="2" style={{
    maxWidth: "36rem"
  }}>
      <Heading size="2xl">
        Create accessible React apps with <mark>speed</mark>
      </Heading>
      <Text color="secondary" size="sm">
        Zed UI is a simple, modular and accessible component library that gives you the
        building blocks you need.
      </Text>
    </Stack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3" style={{
    maxWidth: "28rem"
  }}>
      <Heading size="2xl">Modern payments for Stores</Heading>
      <Text color="secondary">
        PayMe helps startups get paid by anyone, anywhere in the world
      </Text>
      <Flex>
        <Button size="sm">Create account</Button>
      </Flex>
    </Stack>
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`Sizes`,`Weights`,`Levels`,`Highlight`,`Composition`];export{p as Composition,c as Default,f as Highlight,d as Levels,l as Sizes,u as Weights,m as __namedExportsOrder,s as default};