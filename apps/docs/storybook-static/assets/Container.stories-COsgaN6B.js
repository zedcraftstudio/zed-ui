import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{i as n,r,t as i}from"./Box-XznTsHG2.js";import{t as a}from"./jsx-runtime-CkXrEl7v.js";import{n as o}from"./Stack-yxIjSOSs.js";import{t as s}from"./Text-BU0_Ov2K.js";var c=e(t(),1),l=a();function u(e,t){let{centerContent:a,centered:o=!0,className:s,fluid:c=!1,size:u=`xl`,style:d,width:f,...p}=e,m=a??o;return(0,l.jsx)(i,{ref:t,className:r(`zui-container`,s),"data-centered":n(m),"data-fluid":n(c),"data-size":c?void 0:u,style:{maxWidth:c?void 0:`var(--zui-containers-${u})`,width:f??`100%`,...d},...p})}var d=(0,c.forwardRef)(u);d.__docgenInfo={description:``,methods:[],displayName:`Container`};var f=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.`,p={title:`Layout/Container`,component:d},m={render:()=>(0,l.jsx)(d,{size:`md`,children:(0,l.jsx)(i,{p:`4`,bg:`muted`,radius:`md`,children:(0,l.jsx)(s,{size:`sm`,children:f})})})},h={render:()=>(0,l.jsx)(o,{gap:`4`,children:[`sm`,`md`,`lg`,`xl`,`2xl`].map(e=>(0,l.jsx)(d,{size:e,children:(0,l.jsx)(i,{p:`4`,bg:`muted`,radius:`md`,children:(0,l.jsxs)(s,{size:`sm`,children:[(0,l.jsx)(s,{as:`span`,weight:`semibold`,children:e}),` `,`— `,f]})})},e))})},g={render:()=>(0,l.jsx)(d,{fluid:!0,children:(0,l.jsx)(i,{p:`4`,bg:`muted`,radius:`md`,children:(0,l.jsx)(s,{size:`sm`,children:f})})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Container size="md">
      <Box p="4" bg="muted" radius="md">
        <Text size="sm">{LOREM}</Text>
      </Box>
    </Container>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      {(["sm", "md", "lg", "xl", "2xl"] as const).map(size => <Container key={size} size={size}>
          <Box p="4" bg="muted" radius="md">
            <Text size="sm">
              <Text as="span" weight="semibold">
                {size}
              </Text>{" "}
              — {LOREM}
            </Text>
          </Box>
        </Container>)}
    </Stack>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Container fluid>
      <Box p="4" bg="muted" radius="md">
        <Text size="sm">{LOREM}</Text>
      </Box>
    </Container>
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`Sizes`,`Fluid`];export{m as Default,g as Fluid,h as Sizes,_ as __namedExportsOrder,p as default};