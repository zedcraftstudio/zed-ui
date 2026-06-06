import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{r as n,t as r}from"./Box-XznTsHG2.js";import{t as i}from"./jsx-runtime-CkXrEl7v.js";import{n as a,t as o}from"./Avatar-CeTSiRDF.js";import{t as s}from"./BadgeAnchor-Q00Yhmw_.js";import{n as c}from"./Stack-yxIjSOSs.js";import{t as l}from"./Flex-BN-j_dZ-.js";import{t as u}from"./Text-BU0_Ov2K.js";var d=e(t(),1),f=i();function p(e,t){let{as:i,children:a,className:s,max:c,size:l,stacking:u=`last-on-top`,...p}=e,m=d.Children.toArray(a).filter(d.isValidElement),h=c!=null&&m.length>c?m.length-c:0,g=c==null?m:m.slice(0,c);return(0,f.jsxs)(r,{ref:t,as:i??`div`,className:n(`zui-avatar-group`,s),"data-stacking":u,...p,children:[g.map((e,t)=>(0,d.cloneElement)(e,{className:n(e.props.className,`zui-avatar-group__item`),key:e.key??t,size:e.props.size??l})),h>0?(0,f.jsx)(o,{className:`zui-avatar-group__item zui-avatar-group__overflow`,color:`neutral`,fallback:`+${h}`,size:l??g[0]?.props.size??`md`,variant:`subtle`}):null]})}var m=(0,d.forwardRef)(p);m.__docgenInfo={description:``,methods:[],displayName:`AvatarGroup`};var h={title:`Data Display/Avatar`,component:o,args:{name:`Segun Adebayo`,size:`md`}},g={},_={render:()=>(0,f.jsxs)(l,{align:`center`,gap:`3`,children:[(0,f.jsx)(o,{fallback:`SA`,size:`xs`}),(0,f.jsx)(o,{fallback:`SA`,size:`sm`}),(0,f.jsx)(o,{fallback:`SA`,size:`md`}),(0,f.jsx)(o,{fallback:`SA`,size:`lg`}),(0,f.jsx)(o,{fallback:`SA`,size:`xl`})]})},v={render:()=>(0,f.jsxs)(l,{align:`center`,gap:`3`,children:[(0,f.jsx)(o,{fallback:`SA`,variant:`subtle`}),(0,f.jsx)(o,{fallback:`SA`,variant:`solid`}),(0,f.jsx)(o,{fallback:`SA`,variant:`outline`})]})},y={render:()=>(0,f.jsxs)(l,{align:`center`,gap:`3`,children:[(0,f.jsx)(o,{fallback:`JS`,shape:`rounded`}),(0,f.jsx)(o,{fallback:`SA`,shape:`full`}),(0,f.jsx)(o,{fallback:`RU`,shape:`square`})]})},b={render:()=>(0,f.jsxs)(l,{align:`center`,gap:`3`,children:[(0,f.jsx)(o,{}),(0,f.jsx)(o,{fallback:`SU`}),(0,f.jsx)(o,{name:`Segun Adebayo`,src:`https://invalid.example/avatar.png`})]})},x={render:()=>(0,f.jsxs)(m,{max:3,children:[(0,f.jsx)(o,{fallback:`US`}),(0,f.jsx)(o,{fallback:`BA`}),(0,f.jsx)(o,{fallback:`UC`}),(0,f.jsx)(o,{fallback:`ZK`}),(0,f.jsx)(o,{fallback:`AB`})]})},S={render:()=>(0,f.jsxs)(l,{align:`center`,gap:`3`,children:[(0,f.jsx)(o,{color:a(`Melissa Jones`),name:`Melissa Jones`}),(0,f.jsxs)(c,{gap:`0`,children:[(0,f.jsx)(u,{weight:`semibold`,children:`Melissa Jones`}),(0,f.jsx)(u,{color:`secondary`,size:`sm`,children:`melissa.jones@example.com`})]})]})},C={render:()=>(0,f.jsx)(s,{content:``,dot:!0,placement:`bottom-end`,children:(0,f.jsx)(o,{fallback:`DA`,size:`lg`})})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Flex align="center" gap="3">
      <Avatar fallback="SA" size="xs" />
      <Avatar fallback="SA" size="sm" />
      <Avatar fallback="SA" size="md" />
      <Avatar fallback="SA" size="lg" />
      <Avatar fallback="SA" size="xl" />
    </Flex>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Flex align="center" gap="3">
      <Avatar fallback="SA" variant="subtle" />
      <Avatar fallback="SA" variant="solid" />
      <Avatar fallback="SA" variant="outline" />
    </Flex>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Flex align="center" gap="3">
      <Avatar fallback="JS" shape="rounded" />
      <Avatar fallback="SA" shape="full" />
      <Avatar fallback="RU" shape="square" />
    </Flex>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Flex align="center" gap="3">
      <Avatar />
      <Avatar fallback="SU" />
      <Avatar name="Segun Adebayo" src="https://invalid.example/avatar.png" />
    </Flex>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={3}>
      <Avatar fallback="US" />
      <Avatar fallback="BA" />
      <Avatar fallback="UC" />
      <Avatar fallback="ZK" />
      <Avatar fallback="AB" />
    </AvatarGroup>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Flex align="center" gap="3">
      <Avatar color={getAvatarColorFromName("Melissa Jones")} name="Melissa Jones" />
      <Stack gap="0">
        <Text weight="semibold">Melissa Jones</Text>
        <Text color="secondary" size="sm">
          melissa.jones@example.com
        </Text>
      </Stack>
    </Flex>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <BadgeAnchor content="" dot placement="bottom-end">
      <Avatar fallback="DA" size="lg" />
    </BadgeAnchor>
}`,...C.parameters?.docs?.source}}};var w=[`Default`,`Sizes`,`Variants`,`Shapes`,`Fallback`,`Group`,`Persona`,`WithBadge`];export{g as Default,b as Fallback,x as Group,S as Persona,y as Shapes,_ as Sizes,v as Variants,C as WithBadge,w as __namedExportsOrder,h as default};