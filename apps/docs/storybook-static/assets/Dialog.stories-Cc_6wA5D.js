import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{r as n,t as r}from"./Box-XznTsHG2.js";import{t as i}from"./jsx-runtime-CkXrEl7v.js";import{t as a}from"./Button-Ply743O2.js";import{i as o}from"./useIsoLayoutEffect-BfjTaIXP.js";import{a as s,n as c}from"./useTransitionStatus-BLaCuT3W.js";import{r as l,s as u,t as d}from"./popupStateMapping-D6_r4Bl4.js";import{o as f}from"./composite-Bk0DZNyS.js";import{o as p}from"./useScrollLock-CAFWRsls.js";import{a as m,c as h,i as g,n as _,o as v,r as y,s as b,t as x,u as S}from"./DialogTrigger-CSTCFnYB.js";import{t as C}from"./Flex-BN-j_dZ-.js";import{t as w}from"./Text-BU0_Ov2K.js";var T=e(t()),E={...l,...s},D=T.forwardRef(function(e,t){let{render:n,className:r,style:i,forceRender:a=!1,...s}=e,{store:c}=S(),l=c.useState(`open`),u=c.useState(`nested`),d=c.useState(`mounted`);return o(`div`,e,{state:{open:l,transitionStatus:c.useState(`transitionStatus`)},ref:[c.context.backdropRef,t],stateAttributesMapping:E,props:[{role:`presentation`,hidden:!d,style:{userSelect:`none`,WebkitUserSelect:`none`}},s],enabled:a||!u})}),O=function(e){return e.nestedDialogs=`--nested-dialogs`,e}({}),k=function(e){return e[e.open=d.open]=`open`,e[e.closed=d.closed]=`closed`,e[e.startingStyle=d.startingStyle]=`startingStyle`,e[e.endingStyle=d.endingStyle]=`endingStyle`,e.nested=`data-nested`,e.nestedDialogOpen=`data-nested-dialog-open`,e}({}),A=i(),j={...l,...s,nestedDialogOpen(e){return e?{[k.nestedDialogOpen]:``}:null}},M=T.forwardRef(function(e,t){let{render:n,className:r,style:i,finalFocus:a,initialFocus:s,...l}=e,{store:d}=S(),m=d.useState(`descriptionElementId`),h=d.useState(`disablePointerDismissal`),g=d.useState(`floatingRootContext`),_=d.useState(`popupProps`),y=d.useState(`modal`),b=d.useState(`mounted`),x=d.useState(`nested`),C=d.useState(`nestedOpenDialogCount`),w=d.useState(`open`),T=d.useState(`openMethod`),E=d.useState(`titleElementId`),D=d.useState(`transitionStatus`),k=d.useState(`role`),M=g.useState(`floatingId`),N=l.id??M;v(),c({open:w,ref:d.context.popupRef,onComplete(){w&&d.context.onOpenChangeComplete?.(!0)}});function P(e){return e===`touch`?d.context.popupRef.current:!0}let F=s===void 0?P:s,I=C>0,L=d.useStateSetter(`popupElement`),R=o(`div`,e,{state:{open:w,nested:x,transitionStatus:D,nestedDialogOpen:I},props:[_,{id:N,"aria-labelledby":E??void 0,"aria-describedby":m??void 0,role:k,...u,hidden:!b,onKeyDown(e){f.has(e.key)&&e.stopPropagation()},style:{[O.nestedDialogs]:C}},l],ref:[t,d.context.popupRef,L],stateAttributesMapping:j});return(0,A.jsx)(p,{context:g,openInteractionType:T,disabled:!b,closeOnFocusOut:!h,initialFocus:F,returnFocus:a,modal:y!==!1,restoreFocus:`popup`,children:R})});function N({children:e,className:t,description:i,footer:a,size:o=`md`,title:s}){let c=!!(s||i);return(0,A.jsxs)(m,{children:[(0,A.jsx)(D,{className:`zui-dialog__backdrop`}),(0,A.jsx)(y,{className:`zui-dialog__viewport`,children:(0,A.jsxs)(M,{className:n(`zui-dialog__popup`,`zui-dialog__popup--${o}`,t),children:[c?(0,A.jsxs)(`header`,{className:`zui-dialog__header`,children:[(0,A.jsxs)(`div`,{className:`zui-dialog__header-main`,children:[s?(0,A.jsx)(_,{className:`zui-dialog__title`,children:s}):null,i?(0,A.jsx)(b,{className:`zui-dialog__description`,children:i}):null]}),(0,A.jsx)(h,{className:`zui-dialog__close`,"aria-label":`Close dialog`,children:(0,A.jsx)(`span`,{className:`zui-dialog__close-icon`,"aria-hidden":!0,children:`×`})})]}):(0,A.jsx)(h,{className:`zui-dialog__close zui-dialog__close--floating`,"aria-label":`Close dialog`,children:(0,A.jsx)(`span`,{className:`zui-dialog__close-icon`,"aria-hidden":!0,children:`×`})}),(0,A.jsx)(r,{className:`zui-dialog__body`,children:e}),a?(0,A.jsx)(`footer`,{className:`zui-dialog__footer`,children:a}):null]})})]})}N.__docgenInfo={description:`Precomposed dialog content following Base UI anatomy.`,methods:[],displayName:`DialogContent`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},footer:{required:!1,tsType:{name:`ReactNode`},description:`Action row (e.g. Cancel / Confirm). Rendered in a separated footer.`},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},title:{required:!1,tsType:{name:`ReactNode`},description:``}}};var P={Backdrop:D,Close:h,Content:N,Description:b,Popup:M,Portal:m,Root:g,Title:_,Trigger:x,Viewport:y},F={title:`Overlays/Dialog`,component:P.Root},I={render:()=>(0,A.jsxs)(P.Root,{children:[(0,A.jsx)(P.Trigger,{render:(0,A.jsx)(a,{variant:`outline`,children:`Open dialog`})}),(0,A.jsx)(N,{description:`Proceed with this action?`,title:`Confirm`,children:(0,A.jsx)(w,{color:`secondary`,size:`sm`,children:`Review details before continuing.`})})]})},L={render:()=>(0,A.jsx)(C,{gap:`2`,wrap:`wrap`,children:[`sm`,`md`,`lg`].map(e=>(0,A.jsxs)(P.Root,{children:[(0,A.jsx)(P.Trigger,{render:(0,A.jsx)(a,{size:`sm`,variant:`outline`,children:e})}),(0,A.jsx)(N,{size:e,title:`${e} dialog`,children:(0,A.jsxs)(w,{color:`secondary`,size:`sm`,children:[`size="`,e,`"`]})})]},e))})},R={render:function(){let[e,t]=(0,T.useState)(!1);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(a,{size:`sm`,onClick:()=>t(!0),children:`Open`}),(0,A.jsx)(P.Root,{open:e,onOpenChange:t,children:(0,A.jsx)(N,{title:`Controlled dialog`,children:(0,A.jsx)(P.Close,{render:(0,A.jsx)(a,{size:`sm`,variant:`outline`,children:`Close`})})})})]})}},z={render:()=>(0,A.jsxs)(P.Root,{children:[(0,A.jsx)(P.Trigger,{render:(0,A.jsx)(a,{variant:`outline`,children:`Open dialog`})}),(0,A.jsx)(N,{description:`Review the checklist before production.`,footer:(0,A.jsxs)(C,{gap:`2`,justify:`flex-end`,wrap:`wrap`,children:[(0,A.jsx)(P.Close,{render:(0,A.jsx)(a,{variant:`outline`,children:`Cancel`})}),(0,A.jsx)(P.Close,{render:(0,A.jsx)(a,{children:`Deploy`})})]}),title:`Confirm deployment`,children:(0,A.jsx)(w,{color:`secondary`,size:`sm`,children:`Modal with footer actions.`})})]})};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog.Root>
      <Dialog.Trigger render={<Button variant="outline">Open dialog</Button>} />
      <DialogContent description="Proceed with this action?" title="Confirm">
        <Text color="secondary" size="sm">
          Review details before continuing.
        </Text>
      </DialogContent>
    </Dialog.Root>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap="2" wrap="wrap">
      {(["sm", "md", "lg"] as const).map(size => <Dialog.Root key={size}>
          <Dialog.Trigger render={<Button size="sm" variant="outline">{size}</Button>} />
          <DialogContent size={size} title={\`\${size} dialog\`}>
            <Text color="secondary" size="sm">
              size=&quot;{size}&quot;
            </Text>
          </DialogContent>
        </Dialog.Root>)}
    </Flex>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function ControlledStory() {
    const [open, setOpen] = useState(false);
    return <>
        <Button size="sm" onClick={() => setOpen(true)}>
          Open
        </Button>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <DialogContent title="Controlled dialog">
            <Dialog.Close render={<Button size="sm" variant="outline">Close</Button>} />
          </DialogContent>
        </Dialog.Root>
      </>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog.Root>
      <Dialog.Trigger render={<Button variant="outline">Open dialog</Button>} />
      <DialogContent description="Review the checklist before production." footer={<Flex gap="2" justify="flex-end" wrap="wrap">
            <Dialog.Close render={<Button variant="outline">Cancel</Button>} />
            <Dialog.Close render={<Button>Deploy</Button>} />
          </Flex>} title="Confirm deployment">
        <Text color="secondary" size="sm">
          Modal with footer actions.
        </Text>
      </DialogContent>
    </Dialog.Root>
}`,...z.parameters?.docs?.source}}};var B=[`Default`,`Sizes`,`Controlled`,`WithFooter`];export{R as Controlled,I as Default,L as Sizes,z as WithFooter,B as __namedExportsOrder,F as default};