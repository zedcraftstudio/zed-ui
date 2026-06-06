import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{i as n,r}from"./Box-XznTsHG2.js";import{t as i}from"./jsx-runtime-CkXrEl7v.js";import{r as a}from"./dist-DqDbN6FL.js";import{f as o,i as s,l as c,m as l,n as u,t as d,u as f}from"./useIsoLayoutEffect-BfjTaIXP.js";import{a as p,n as m,t as h}from"./useTransitionStatus-BLaCuT3W.js";import{n as g}from"./Stack-yxIjSOSs.js";import{t as _}from"./useControlled-Df-hywyB.js";import{n as v,r as y,t as ee}from"./useValueChanged-B6ncKU6l.js";import{F as te,p as ne,t as re,w as ie,x as ae}from"./createBaseUIEventDetails-CIym2k9y.js";import{a as b,i as oe,n as x,r as se,t as ce}from"./LabelableContext-DyIWXld8.js";import{t as S}from"./FieldItemContext-CZ2OQbRQ.js";import{t as C}from"./useAriaLabelledBy-BBw3_jwq.js";import{n as le,t as ue}from"./CompositeRoot-BqZ6QXpX.js";import{t as de}from"./CompositeItem-CVNmylLF.js";import{t as fe}from"./useLabelableId-CuS_LVyO.js";import{t as pe}from"./serializeValue-B_EucO5O.js";import{M as me}from"./composite-KklygyPZ.js";import{d as w}from"./composite-Bk0DZNyS.js";var T=function(e){return e.checked=`data-checked`,e.unchecked=`data-unchecked`,e.disabled=`data-disabled`,e.readonly=`data-readonly`,e.required=`data-required`,e.valid=`data-valid`,e.invalid=`data-invalid`,e.touched=`data-touched`,e.dirty=`data-dirty`,e.filled=`data-filled`,e.focused=`data-focused`,e}({}),E={checked(e){return e?{[T.checked]:``}:{[T.unchecked]:``}},...p,...b},D=e(t()),he=D.createContext(void 0);function O(){return D.useContext(he)}var ge=D.createContext(void 0);function k(){let e=D.useContext(ge);if(e===void 0)throw Error(l(52));return e}var A=i(),j=D.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,readOnly:a=!1,required:l=!1,"aria-labelledby":p,value:m,inputRef:h,nativeButton:g=!1,id:_,style:ee,...b}=e,x=O(),{disabled:se,readOnly:ue,required:me,form:w,checkedValue:T,touched:he=!1,validation:k,name:j}=x??{},M=x?.setCheckedValue??f,N=x?.setTouched??f,P=x?.registerControlRef??f,F=x?.registerInputRef??f,{setDirty:I,validityData:L,setTouched:R,setFilled:z,state:B,disabled:V}=oe(),H=S(),{labelId:U,getDescriptionProps:W}=ce(),G=V||H.disabled||se||i,K=ue||a,q=me||l,J=w,Y=x?T===m:m===``,X=D.useRef(null),Z=D.useRef(null),Q=u(e=>{e&&P(e,G)}),$=o(h,Z,F);d(()=>{Z.current?.checked&&z(!0)},[z]),d(()=>{if(Z.current){if(G&&Y){F(null);return}X.current&&P(X.current,G),F(Z.current)}},[Y,G,P,F]);let _e=ie(),ve=fe({id:_,implicit:!1,controlRef:X}),ye=g?void 0:ve,be=C(p,U,Z,!g,ye),xe={role:`radio`,"aria-checked":Y,"aria-required":q||void 0,"aria-readonly":K||void 0,"aria-labelledby":be,[le]:Y?``:void 0,id:g?ve:_e,onKeyDown(e){e.key===`Enter`&&e.preventDefault()},onClick(e){if(e.defaultPrevented||G||K)return;e.preventDefault();let t=Z.current;t&&t.dispatchEvent(new(te(t)).PointerEvent(`click`,{bubbles:!0,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey}))},onFocus(e){e.defaultPrevented||G||K||!he||(Z.current?.click(),N(!1))}},{getButtonProps:Se,buttonRef:Ce}=ae({disabled:G,native:g}),we={type:`radio`,ref:$,form:J,id:ye,name:j,tabIndex:-1,style:j?y:v,"aria-hidden":!0,...m===void 0?c:{value:pe(m)},disabled:G,checked:Y,required:q,readOnly:K,onChange(e){if(e.nativeEvent.defaultPrevented||G||K||m===void 0)return;let t=re(ne,e.nativeEvent);t.isCanceled||(R(!0),I(m!==L.initialValue),z(!0),M(m,t))},onFocus(){X.current?.focus()}},Te=D.useMemo(()=>({...B,required:q,disabled:G,readOnly:K,checked:Y}),[B,G,K,Y,q]),Ee=Te,De=x!==void 0,Oe=[t,X,Ce,Q],ke=[xe,W,k?.getValidationProps??c,b,Se],Ae=s(`span`,e,{enabled:!De,state:Te,ref:Oe,props:ke,stateAttributesMapping:E});return(0,A.jsxs)(ge.Provider,{value:Ee,children:[De?(0,A.jsx)(de,{tag:`span`,render:n,className:r,style:ee,state:Te,refs:Oe,props:ke,stateAttributesMapping:E}):Ae,(0,A.jsx)(`input`,{...we,suppressHydrationWarning:!0})]})}),M=D.forwardRef(function(e,t){let{render:n,className:r,style:i,keepMounted:a=!1,...o}=e,c=k(),l=c.checked,{mounted:u,transitionStatus:d,setMounted:f}=h(l),p={...c,transitionStatus:d},g=D.useRef(null),_=a||u,v=s(`span`,e,{ref:[t,g],state:p,props:o,stateAttributesMapping:E});return m({open:l,ref:g,onComplete(){l||f(!1)}}),_?v:null}),N=D.createContext({legendId:void 0,setLegendId:()=>{},disabled:void 0});function P(e=!1){let t=D.useContext(N);if(!t&&!e)throw Error(l(86));return t}var F=[w],I=D.forwardRef(function(e,t){let{render:n,className:r,disabled:i,readOnly:a,required:o,onValueChange:s,value:c,defaultValue:l,form:d,name:f,inputRef:p,id:m,style:h,...g}=e,{setTouched:v,setFocused:y,shouldValidateOnChange:te,validationMode:ne,name:re,disabled:ae,state:S,validation:C,setDirty:le,setFilled:de,validityData:fe}=oe(),{labelId:pe}=ce(),{clearErrors:w}=x(),T=P(!0),E=ae||i,O=re??f,ge=ie(m),[k,j]=_({controlled:c,default:l,name:`RadioGroup`,state:`value`}),[M,N]=D.useState(!1),I=u((e,t)=>{s?.(e,t),!t.isCanceled&&j(e)}),L=D.useRef(null),R=D.useRef(null),z=D.useRef(null);function B(e){let t;return p&&(typeof p==`function`?t=p(e):p.current=e),R.current=e,C.inputRef.current=e,t}let V=u((e,t=!1)=>{if(e){if(t){L.current===e&&(L.current=null);return}L.current??=e}}),H=u(e=>{if(!e||e.disabled)return;z.current||=e;let t=R.current;if(e.checked||t==null||t.disabled)return B(e)});se(L,ge,k??null),ee(k,()=>{w(O),le(k!==fe.initialValue),de(k!=null),te()?C.commit(k):C.commit(k,!0);let e=z.current;k==null&&e&&!e.disabled&&B(e)});let U=g[`aria-labelledby`]??pe??T?.legendId,W={...S,disabled:E??!1,required:o??!1,readOnly:a??!1},G=D.useMemo(()=>({...S,checkedValue:k,disabled:E,form:d,validation:C,name:O,readOnly:a,registerControlRef:V,registerInputRef:H,required:o,setCheckedValue:I,setTouched:N,touched:M}),[k,E,d,C,S,O,a,V,H,o,I,N,M]),K={role:`radiogroup`,"aria-required":o||void 0,"aria-disabled":E||void 0,"aria-readonly":a||void 0,"aria-labelledby":U,onFocus(){y(!0)},onBlur(e){me(e.currentTarget,e.relatedTarget)||(v(!0),y(!1),ne===`onBlur`&&C.commit(k))},onKeyDownCapture(e){e.key.startsWith(`Arrow`)&&(v(!0),N(!0),y(!0))}};return(0,A.jsx)(he.Provider,{value:G,children:(0,A.jsx)(ue,{render:n,className:r,style:h,state:W,props:[K,C.getValidationProps,g],refs:[t],stateAttributesMapping:b,enableHomeAndEndKeys:!1,modifierKeys:F})})}),L=(0,D.forwardRef)(function({className:e,orientation:t=`vertical`,...n},i){return(0,A.jsx)(I,{ref:i,className:r(`zui-radio-group`,e),"data-orientation":t,...n})});L.displayName=`RadioGroup`;var R=(0,D.forwardRef)(function({className:e,color:t,description:i,disabled:o,invalid:s=!1,label:c,size:l,value:u,variant:d,...f},p){let m=a(`Radio`),h=t??m?.color??`primary`,g=l??m?.size??`md`,_=d??m?.variant??`outline`;return(0,A.jsxs)(`label`,{className:r(`zui-radio`,e),"data-disabled":n(o),children:[(0,A.jsx)(j,{ref:p,className:`zui-radio__control`,"data-color":h,"data-invalid":n(s),"data-size":g,"data-variant":_,disabled:o,value:u,...f,children:(0,A.jsx)(M,{className:`zui-radio__indicator`,children:(0,A.jsx)(`span`,{className:`zui-radio__dot`})})}),c||i?(0,A.jsxs)(`span`,{className:`zui-radio__content`,children:[c?(0,A.jsx)(`span`,{className:`zui-radio__label`,children:c}):null,i?(0,A.jsx)(`span`,{className:`zui-radio__description`,children:i}):null]}):null]})});R.displayName=`Radio`,L.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{className:{required:!1,tsType:{name:`string`},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:``,defaultValue:{value:`"vertical"`,computed:!1}}}},R.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{className:{required:!1,tsType:{name:`string`},description:``},color:{required:!1,tsType:{name:`union`,raw:`"primary" | "neutral" | "success" | "warning" | "danger" | "info"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"neutral"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"info"`}]},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},invalid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"outline" | "solid" | "soft"`,elements:[{name:`literal`,value:`"outline"`},{name:`literal`,value:`"solid"`},{name:`literal`,value:`"soft"`}]},description:``}}};var z=(0,D.forwardRef)(function({className:e,color:t,description:i,disabled:o,invalid:s=!1,label:c,showIndicator:l=!0,size:u,value:d,variant:f,...p},m){let h=a(`Radio`),g=t??h?.color??`primary`,_=u??h?.size??`md`,v=f??`outline`;return(0,A.jsx)(`label`,{className:r(`zui-radio-card`,e),"data-color":g,"data-disabled":n(o),"data-invalid":n(s),"data-size":_,"data-variant":v,children:(0,A.jsxs)(`span`,{className:`zui-radio-card__body`,children:[(0,A.jsxs)(`span`,{className:`zui-radio-card__content`,children:[c?(0,A.jsx)(`span`,{className:`zui-radio-card__label`,children:c}):null,i?(0,A.jsx)(`span`,{className:`zui-radio-card__description`,children:i}):null]}),l?(0,A.jsx)(j,{ref:m,className:`zui-radio__control`,"data-color":g,"data-invalid":n(s),"data-size":_,"data-variant":`outline`,disabled:o,value:d,...p,children:(0,A.jsx)(M,{className:`zui-radio__indicator`,children:(0,A.jsx)(`span`,{className:`zui-radio__dot`})})}):(0,A.jsx)(j,{ref:m,className:`zui-radio-card__hidden-control`,"data-color":g,"data-invalid":n(s),disabled:o,value:d,...p})]})})});z.displayName=`RadioCard`,z.__docgenInfo={description:``,methods:[],displayName:`RadioCard`,props:{className:{required:!1,tsType:{name:`string`},description:``},color:{required:!1,tsType:{name:`union`,raw:`"primary" | "neutral" | "success" | "warning" | "danger" | "info"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"neutral"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"info"`}]},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},invalid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:``},showIndicator:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"outline" | "subtle" | "solid"`,elements:[{name:`literal`,value:`"outline"`},{name:`literal`,value:`"subtle"`},{name:`literal`,value:`"solid"`}]},description:``}}};var B={title:`Forms/Radio`,component:R,decorators:[e=>(0,A.jsx)(L,{defaultValue:`option-a`,children:(0,A.jsx)(e,{})})],args:{label:`Option A`,value:`option-a`}},V={},H={decorators:[e=>(0,A.jsx)(L,{defaultValue:`checked`,children:(0,A.jsx)(e,{})})],args:{label:`Selected option`,value:`checked`}},U={render:()=>(0,A.jsxs)(g,{gap:`3`,children:[(0,A.jsx)(L,{defaultValue:`solid`,children:(0,A.jsx)(R,{value:`solid`,variant:`solid`,label:`Solid`})}),(0,A.jsx)(L,{defaultValue:`outline`,children:(0,A.jsx)(R,{value:`outline`,variant:`outline`,label:`Outline`})}),(0,A.jsx)(L,{defaultValue:`soft`,children:(0,A.jsx)(R,{value:`soft`,variant:`soft`,label:`Soft`})})]}),decorators:[]},W={render:()=>(0,A.jsx)(L,{defaultValue:`primary`,children:(0,A.jsxs)(g,{gap:`3`,children:[(0,A.jsx)(R,{value:`primary`,color:`primary`,label:`Primary`}),(0,A.jsx)(R,{value:`success`,color:`success`,label:`Success`}),(0,A.jsx)(R,{value:`danger`,color:`danger`,label:`Danger`})]})}),decorators:[]},G={render:()=>(0,A.jsx)(L,{defaultValue:`md`,children:(0,A.jsxs)(g,{gap:`3`,children:[(0,A.jsx)(R,{value:`sm`,size:`sm`,label:`Small`}),(0,A.jsx)(R,{value:`md`,size:`md`,label:`Medium`}),(0,A.jsx)(R,{value:`lg`,size:`lg`,label:`Large`})]})}),decorators:[]},K={render:()=>{let[e,t]=(0,D.useState)(`starter`);return(0,A.jsx)(L,{value:e,onValueChange:e=>t(e),children:(0,A.jsxs)(g,{gap:`3`,children:[(0,A.jsx)(R,{value:`starter`,label:`Starter`}),(0,A.jsx)(R,{value:`pro`,label:`Pro`}),(0,A.jsx)(R,{value:`enterprise`,label:`Enterprise`})]})})},decorators:[]},q={args:{description:`Best for teams getting started.`,label:`Starter plan`,value:`starter`}},J={args:{disabled:!0,label:`Disabled option`,value:`disabled`}},Y={args:{invalid:!0,label:`Required selection`,value:`invalid`}},X={render:()=>(0,A.jsxs)(L,{defaultValue:`starter`,orientation:`horizontal`,children:[(0,A.jsx)(R,{value:`starter`,label:`Starter`}),(0,A.jsx)(R,{value:`pro`,label:`Pro`}),(0,A.jsx)(R,{value:`enterprise`,label:`Enterprise`})]}),decorators:[]},Z={render:()=>(0,A.jsx)(L,{defaultValue:`react`,children:(0,A.jsx)(z,{description:`Component-based UI library with a large ecosystem.`,label:`React`,value:`react`})}),decorators:[]},Q={render:()=>(0,A.jsx)(L,{defaultValue:`outline`,children:(0,A.jsxs)(g,{gap:`3`,style:{maxWidth:`20rem`},children:[(0,A.jsx)(z,{description:`Border highlight`,label:`Outline`,value:`outline`,variant:`outline`}),(0,A.jsx)(z,{description:`Soft background`,label:`Subtle`,value:`subtle`,variant:`subtle`}),(0,A.jsx)(z,{description:`Filled card`,label:`Solid`,value:`solid`,variant:`solid`})]})}),decorators:[]},$={render:()=>{let[e,t]=(0,D.useState)(`pro`);return(0,A.jsx)(L,{value:e,onValueChange:e=>t(e),children:(0,A.jsx)(g,{gap:`3`,style:{maxWidth:`20rem`},children:[{value:`starter`,label:`Starter`,description:`For individuals and small teams getting started.`},{value:`pro`,label:`Pro`,description:`For growing teams that need more capacity.`},{value:`enterprise`,label:`Enterprise`,description:`For organizations with advanced requirements.`}].map(e=>(0,A.jsx)(z,{description:e.description,label:e.label,value:e.value},e.value))})})},decorators:[]};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <RadioGroup defaultValue="checked">
        <Story />
      </RadioGroup>],
  args: {
    label: "Selected option",
    value: "checked"
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      <RadioGroup defaultValue="solid">
        <Radio value="solid" variant="solid" label="Solid" />
      </RadioGroup>
      <RadioGroup defaultValue="outline">
        <Radio value="outline" variant="outline" label="Outline" />
      </RadioGroup>
      <RadioGroup defaultValue="soft">
        <Radio value="soft" variant="soft" label="Soft" />
      </RadioGroup>
    </Stack>,
  decorators: []
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="primary">
      <Stack gap="3">
        <Radio value="primary" color="primary" label="Primary" />
        <Radio value="success" color="success" label="Success" />
        <Radio value="danger" color="danger" label="Danger" />
      </Stack>
    </RadioGroup>,
  decorators: []
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="md">
      <Stack gap="3">
        <Radio value="sm" size="sm" label="Small" />
        <Radio value="md" size="md" label="Medium" />
        <Radio value="lg" size="lg" label="Large" />
      </Stack>
    </RadioGroup>,
  decorators: []
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("starter");
    return <RadioGroup value={value} onValueChange={v => setValue(v as string)}>
        <Stack gap="3">
          <Radio value="starter" label="Starter" />
          <Radio value="pro" label="Pro" />
          <Radio value="enterprise" label="Enterprise" />
        </Stack>
      </RadioGroup>;
  },
  decorators: []
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    description: "Best for teams getting started.",
    label: "Starter plan",
    value: "starter"
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: "Disabled option",
    value: "disabled"
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    label: "Required selection",
    value: "invalid"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="starter" orientation="horizontal">
      <Radio value="starter" label="Starter" />
      <Radio value="pro" label="Pro" />
      <Radio value="enterprise" label="Enterprise" />
    </RadioGroup>,
  decorators: []
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="react">
      <RadioCard description="Component-based UI library with a large ecosystem." label="React" value="react" />
    </RadioGroup>,
  decorators: []
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="outline">
      <Stack gap="3" style={{
      maxWidth: "20rem"
    }}>
        <RadioCard description="Border highlight" label="Outline" value="outline" variant="outline" />
        <RadioCard description="Soft background" label="Subtle" value="subtle" variant="subtle" />
        <RadioCard description="Filled card" label="Solid" value="solid" variant="solid" />
      </Stack>
    </RadioGroup>,
  decorators: []
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [plan, setPlan] = useState("pro");
    const options = [{
      value: "starter",
      label: "Starter",
      description: "For individuals and small teams getting started."
    }, {
      value: "pro",
      label: "Pro",
      description: "For growing teams that need more capacity."
    }, {
      value: "enterprise",
      label: "Enterprise",
      description: "For organizations with advanced requirements."
    }];
    return <RadioGroup value={plan} onValueChange={v => setPlan(v as string)}>
        <Stack gap="3" style={{
        maxWidth: "20rem"
      }}>
          {options.map(option => <RadioCard key={option.value} description={option.description} label={option.label} value={option.value} />)}
        </Stack>
      </RadioGroup>;
  },
  decorators: []
}`,...$.parameters?.docs?.source}}};var _e=[`Default`,`Checked`,`Variants`,`Colors`,`Sizes`,`Controlled`,`WithDescription`,`Disabled`,`Invalid`,`Horizontal`,`RadioCardDefault`,`RadioCardVariants`,`RadioCardGroup`];export{H as Checked,W as Colors,K as Controlled,V as Default,J as Disabled,X as Horizontal,Y as Invalid,Z as RadioCardDefault,$ as RadioCardGroup,Q as RadioCardVariants,G as Sizes,U as Variants,q as WithDescription,_e as __namedExportsOrder,B as default};