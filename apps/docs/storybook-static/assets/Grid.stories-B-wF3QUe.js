import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{r as n,t as r}from"./Box-XznTsHG2.js";import{t as i}from"./jsx-runtime-CkXrEl7v.js";import{t as a}from"./Text-BU0_Ov2K.js";var o=e(t(),1),s=i();function c(e,t){let{align:i,areas:a,autoColumns:o,autoRows:c,className:l,columns:u,display:d,flow:f,inline:p=!1,justify:m,rows:h,style:g,..._}=e;return(0,s.jsx)(r,{ref:t,align:i,className:n(`zui-grid`,p&&`zui-grid--inline`,l),display:d??(p?`inline-grid`:`grid`),justify:m,style:{gridAutoColumns:o,gridAutoFlow:f,gridAutoRows:c,gridTemplateAreas:a,gridTemplateColumns:u,gridTemplateRows:h,...g},..._})}var l=(0,o.forwardRef)(c);function u(e,t){let{area:i,className:a,colEnd:o,colSpan:c,colStart:l,rowEnd:u,rowSpan:d,rowStart:f,style:p,...m}=e;return(0,s.jsx)(r,{ref:t,className:n(`zui-grid-item`,a),style:{gridArea:i,gridColumn:c?`span ${c} / span ${c}`:void 0,gridColumnEnd:o,gridColumnStart:l,gridRow:d?`span ${d} / span ${d}`:void 0,gridRowEnd:u,gridRowStart:f,...p},...m})}var d=(0,o.forwardRef)(u);l.__docgenInfo={description:``,methods:[],displayName:`Grid`},d.__docgenInfo={description:``,methods:[],displayName:`GridItem`};var f={title:`Layout/Grid`,component:l},p={render:()=>(0,s.jsxs)(l,{columns:`repeat(2, minmax(0, 1fr))`,gap:`3`,children:[(0,s.jsx)(r,{p:`4`,bg:`muted`,radius:`md`,children:(0,s.jsx)(a,{size:`sm`,children:`A`})}),(0,s.jsx)(r,{p:`4`,bg:`muted`,radius:`md`,children:(0,s.jsx)(a,{size:`sm`,children:`B`})})]})},m={render:()=>(0,s.jsxs)(l,{columns:`repeat(4, minmax(0, 1fr))`,gap:`2`,children:[(0,s.jsx)(d,{colSpan:2,p:`3`,bg:`muted`,radius:`sm`,children:(0,s.jsx)(a,{size:`sm`,children:`colSpan=2`})}),(0,s.jsx)(d,{p:`3`,bg:`muted`,radius:`sm`,children:(0,s.jsx)(a,{size:`sm`,children:`2`})}),(0,s.jsx)(d,{p:`3`,bg:`muted`,radius:`sm`,children:(0,s.jsx)(a,{size:`sm`,children:`3`})}),(0,s.jsx)(d,{colSpan:4,p:`3`,bg:`muted`,radius:`sm`,children:(0,s.jsx)(a,{size:`sm`,children:`colSpan=4`})})]})},h={render:()=>(0,s.jsxs)(l,{columns:`repeat(4, minmax(0, 1fr))`,gap:`2`,rows:`repeat(2, minmax(4rem, auto))`,children:[(0,s.jsx)(d,{colSpan:2,p:`3`,bg:`muted`,radius:`sm`,children:(0,s.jsx)(a,{size:`sm`,children:`colSpan=2`})}),(0,s.jsx)(d,{p:`3`,bg:`muted`,radius:`sm`,children:(0,s.jsx)(a,{size:`sm`,children:`2`})}),(0,s.jsx)(d,{p:`3`,bg:`muted`,radius:`sm`,children:(0,s.jsx)(a,{size:`sm`,children:`3`})}),(0,s.jsx)(d,{colSpan:2,p:`3`,bg:`muted`,radius:`sm`,children:(0,s.jsx)(a,{size:`sm`,children:`colSpan=2`})}),(0,s.jsx)(d,{colSpan:2,rowSpan:2,p:`3`,bg:`surface`,radius:`sm`,shadow:`sm`,children:(0,s.jsx)(a,{size:`sm`,children:`rowSpan=2`})})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Grid columns="repeat(2, minmax(0, 1fr))" gap="3">
      <Box p="4" bg="muted" radius="md">
        <Text size="sm">A</Text>
      </Box>
      <Box p="4" bg="muted" radius="md">
        <Text size="sm">B</Text>
      </Box>
    </Grid>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Grid columns="repeat(4, minmax(0, 1fr))" gap="2">
      <GridItem colSpan={2} p="3" bg="muted" radius="sm">
        <Text size="sm">colSpan=2</Text>
      </GridItem>
      <GridItem p="3" bg="muted" radius="sm">
        <Text size="sm">2</Text>
      </GridItem>
      <GridItem p="3" bg="muted" radius="sm">
        <Text size="sm">3</Text>
      </GridItem>
      <GridItem colSpan={4} p="3" bg="muted" radius="sm">
        <Text size="sm">colSpan=4</Text>
      </GridItem>
    </Grid>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Grid columns="repeat(4, minmax(0, 1fr))" gap="2" rows="repeat(2, minmax(4rem, auto))">
      <GridItem colSpan={2} p="3" bg="muted" radius="sm">
        <Text size="sm">colSpan=2</Text>
      </GridItem>
      <GridItem p="3" bg="muted" radius="sm">
        <Text size="sm">2</Text>
      </GridItem>
      <GridItem p="3" bg="muted" radius="sm">
        <Text size="sm">3</Text>
      </GridItem>
      <GridItem colSpan={2} p="3" bg="muted" radius="sm">
        <Text size="sm">colSpan=2</Text>
      </GridItem>
      <GridItem colSpan={2} rowSpan={2} p="3" bg="surface" radius="sm" shadow="sm">
        <Text size="sm">rowSpan=2</Text>
      </GridItem>
    </Grid>
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`ColSpan`,`RowSpan`];export{m as ColSpan,p as Default,h as RowSpan,g as __namedExportsOrder,f as default};