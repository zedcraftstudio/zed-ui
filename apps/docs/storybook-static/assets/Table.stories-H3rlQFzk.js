import{s as e}from"./iframe-Fsv4RreF.js";import{t}from"./react-Dv9OFCKq.js";import{i as n,r,t as i}from"./Box-XznTsHG2.js";import{t as a}from"./jsx-runtime-CkXrEl7v.js";import{r as o}from"./dist-DqDbN6FL.js";import{t as s}from"./Button-Ply743O2.js";import{n as c}from"./Stack-yxIjSOSs.js";import{t as l}from"./Checkbox-Dotfc0yr.js";import{t as u}from"./Flex-BN-j_dZ-.js";var d=e(t(),1),f=a();function p(e,t){let a=o(`Table`),{as:s,className:c,interactive:l=!1,showColumnBorder:u=!1,size:d,stickyHeader:p=!1,striped:m=!1,variant:h,...g}=e,_=d??a?.size??`md`,v=h??a?.variant??`line`;return(0,f.jsx)(i,{ref:t,as:s??`table`,className:r(`zui-table`,c),"data-interactive":n(l),"data-show-column-border":n(u),"data-size":_,"data-sticky-header":n(p),"data-striped":n(m),"data-variant":v,...g})}var m=(0,d.forwardRef)(p);function h(e,t){return(0,f.jsx)(m,{ref:t,...e})}var g=(0,d.forwardRef)(h);function _(e,t){let{className:n,...a}=e;return(0,f.jsx)(i,{ref:t,className:r(`zui-table-scroll-area`,n),...a})}var v=(0,d.forwardRef)(_);function y(e,t){let{as:n,className:a,...o}=e;return(0,f.jsx)(i,{ref:t,as:n??`thead`,className:r(`zui-table__head`,a),...o})}var b=(0,d.forwardRef)(y);function x(e,t){let{as:n,className:a,...o}=e;return(0,f.jsx)(i,{ref:t,as:n??`tbody`,className:r(`zui-table__body`,a),...o})}var S=(0,d.forwardRef)(x);function C(e,t){let{as:n,className:a,...o}=e;return(0,f.jsx)(i,{ref:t,as:n??`tfoot`,className:r(`zui-table__foot`,a),...o})}var w=(0,d.forwardRef)(C);function T(e,t){let{as:n,className:a,...o}=e;return(0,f.jsx)(i,{ref:t,as:n??`tr`,className:r(`zui-table__row`,a),...o})}var E=(0,d.forwardRef)(T);function D(e,t){let{as:n,className:a,sticky:o=!1,...s}=e;return(0,f.jsx)(i,{ref:t,as:n??`th`,className:r(`zui-table__cell`,`zui-table__cell--head`,a),"data-sticky":o?`true`:void 0,scope:`col`,...s})}var O=(0,d.forwardRef)(D);function k(e,t){let{as:n,className:a,sticky:o=!1,...s}=e;return(0,f.jsx)(i,{ref:t,as:n??`td`,className:r(`zui-table__cell`,a),"data-sticky":o?`true`:void 0,...s})}var A=(0,d.forwardRef)(k);function j(e,t){let{as:n,className:a,side:o=`bottom`,...s}=e;return(0,f.jsx)(i,{ref:t,as:n??`caption`,className:r(`zui-table__caption`,a),"data-side":o,...s})}var M=(0,d.forwardRef)(j);function N(e,t){let{as:n,className:a,...o}=e;return(0,f.jsx)(i,{ref:t,as:n??`colgroup`,className:r(`zui-table__column-group`,a),...o})}var P=(0,d.forwardRef)(N);function F(e,t){let{as:n,className:a,htmlWidth:o,style:s,...c}=e;return(0,f.jsx)(i,{ref:t,as:n??`col`,className:r(`zui-table__column`,a),style:{...s,width:o},...c})}var I=(0,d.forwardRef)(F);m.__docgenInfo={description:``,methods:[],displayName:`TableRoot`},g.__docgenInfo={description:"Root table element. Wrap with `TableScrollArea` when horizontal scrolling is needed.",methods:[],displayName:`Table`},v.__docgenInfo={description:``,methods:[],displayName:`TableScrollArea`},b.__docgenInfo={description:``,methods:[],displayName:`TableHeader`},S.__docgenInfo={description:``,methods:[],displayName:`TableBody`},w.__docgenInfo={description:``,methods:[],displayName:`TableFooter`},E.__docgenInfo={description:``,methods:[],displayName:`TableRow`},O.__docgenInfo={description:``,methods:[],displayName:`TableHead`},A.__docgenInfo={description:``,methods:[],displayName:`TableCell`},M.__docgenInfo={description:``,methods:[],displayName:`TableCaption`},P.__docgenInfo={description:``,methods:[],displayName:`TableColumnGroup`},I.__docgenInfo={description:``,methods:[],displayName:`TableColumn`};var L=[{product:`Laptop`,category:`Electronics`,price:`999.99`},{product:`Coffee Maker`,category:`Home Appliances`,price:`49.99`},{product:`Desk Chair`,category:`Furniture`,price:`150`},{product:`Smartphone`,category:`Electronics`,price:`799.99`},{product:`Headphones`,category:`Accessories`,price:`199.99`}];function R(e){return(0,f.jsxs)(m,{...e,children:[(0,f.jsx)(b,{children:(0,f.jsxs)(E,{children:[(0,f.jsx)(O,{children:`Product`}),(0,f.jsx)(O,{children:`Category`}),(0,f.jsx)(O,{children:`Price`})]})}),(0,f.jsx)(S,{children:L.map(e=>(0,f.jsxs)(E,{children:[(0,f.jsx)(A,{children:e.product}),(0,f.jsx)(A,{children:e.category}),(0,f.jsx)(A,{children:e.price})]},e.product))})]})}var z={title:`Data Display/Table`,component:m,args:{size:`md`,variant:`line`}},B={render:e=>(0,f.jsx)(R,{...e})},V={render:()=>(0,f.jsx)(c,{gap:`6`,children:[`sm`,`md`,`lg`].map(e=>(0,f.jsx)(R,{size:e},e))})},H={render:()=>(0,f.jsxs)(c,{gap:`6`,children:[(0,f.jsx)(R,{variant:`line`}),(0,f.jsx)(R,{variant:`outline`}),(0,f.jsx)(R,{variant:`subtle`})]})},U={render:()=>(0,f.jsx)(R,{striped:!0})},W={render:()=>(0,f.jsxs)(m,{children:[(0,f.jsx)(M,{children:`Product inventory and pricing information`}),(0,f.jsx)(b,{children:(0,f.jsxs)(E,{children:[(0,f.jsx)(O,{children:`Product`}),(0,f.jsx)(O,{children:`Category`}),(0,f.jsx)(O,{children:`Price`})]})}),(0,f.jsx)(S,{children:L.map(e=>(0,f.jsxs)(E,{children:[(0,f.jsx)(A,{children:e.product}),(0,f.jsx)(A,{children:e.category}),(0,f.jsx)(A,{children:e.price})]},e.product))})]})},G={render:()=>(0,f.jsx)(R,{interactive:!0})},K={render:()=>(0,f.jsxs)(m,{variant:`outline`,children:[(0,f.jsx)(b,{children:(0,f.jsxs)(E,{children:[(0,f.jsx)(O,{children:`Product`}),(0,f.jsx)(O,{children:`Category`}),(0,f.jsx)(O,{children:`Price`})]})}),(0,f.jsx)(S,{children:L.map(e=>(0,f.jsxs)(E,{children:[(0,f.jsx)(A,{children:e.product}),(0,f.jsx)(A,{children:e.category}),(0,f.jsx)(A,{children:e.price})]},e.product))}),(0,f.jsx)(w,{children:(0,f.jsxs)(E,{children:[(0,f.jsx)(A,{colSpan:2,children:`Total`}),(0,f.jsx)(A,{children:`2199.96`})]})})]})},q={render:()=>(0,f.jsx)(v,{style:{maxHeight:`12rem`},children:(0,f.jsxs)(m,{stickyHeader:!0,children:[(0,f.jsx)(b,{children:(0,f.jsxs)(E,{children:[(0,f.jsx)(O,{children:`Product`}),(0,f.jsx)(O,{children:`Category`}),(0,f.jsx)(O,{children:`Price`})]})}),(0,f.jsx)(S,{children:[...L,...L].map((e,t)=>(0,f.jsxs)(E,{children:[(0,f.jsx)(A,{children:e.product}),(0,f.jsx)(A,{children:e.category}),(0,f.jsx)(A,{children:e.price})]},`${e.product}-${t}`))})]})})},J={render:function(){let[e,t]=(0,d.useState)([]),n=e.length===L.length;return(0,f.jsxs)(m,{interactive:!0,variant:`outline`,children:[(0,f.jsx)(b,{children:(0,f.jsxs)(E,{children:[(0,f.jsx)(O,{children:(0,f.jsx)(l,{"aria-label":`Select all rows`,checked:n,indeterminate:e.length>0&&!n,onCheckedChange:e=>t(e?L.map(e=>e.product):[])})}),(0,f.jsx)(O,{children:`Product`}),(0,f.jsx)(O,{children:`Category`}),(0,f.jsx)(O,{children:`Price`})]})}),(0,f.jsx)(S,{children:L.map(n=>(0,f.jsxs)(E,{children:[(0,f.jsx)(A,{children:(0,f.jsx)(l,{"aria-label":`Select ${n.product}`,checked:e.includes(n.product),onCheckedChange:e=>t(t=>e?[...t,n.product]:t.filter(e=>e!==n.product))})}),(0,f.jsx)(A,{children:n.product}),(0,f.jsx)(A,{children:n.category}),(0,f.jsxs)(A,{children:[`$`,n.price]})]},n.product))})]})}},Y={render:()=>(0,f.jsxs)(m,{variant:`outline`,children:[(0,f.jsxs)(P,{children:[(0,f.jsx)(I,{htmlWidth:`40%`}),(0,f.jsx)(I,{htmlWidth:`35%`}),(0,f.jsx)(I,{htmlWidth:`25%`})]}),(0,f.jsx)(b,{children:(0,f.jsxs)(E,{children:[(0,f.jsx)(O,{children:`Product`}),(0,f.jsx)(O,{children:`Category`}),(0,f.jsx)(O,{children:`Price`})]})}),(0,f.jsx)(S,{children:L.map(e=>(0,f.jsxs)(E,{children:[(0,f.jsx)(A,{children:e.product}),(0,f.jsx)(A,{children:e.category}),(0,f.jsx)(A,{children:e.price})]},e.product))})]})},X={render:function(){let[e,t]=(0,d.useState)(1),n=Math.ceil(L.length/3),r=L.slice((e-1)*3,e*3);return(0,f.jsxs)(c,{gap:`4`,children:[(0,f.jsxs)(m,{variant:`outline`,children:[(0,f.jsx)(b,{children:(0,f.jsxs)(E,{children:[(0,f.jsx)(O,{children:`Product`}),(0,f.jsx)(O,{children:`Category`}),(0,f.jsx)(O,{children:`Price`})]})}),(0,f.jsx)(S,{children:r.map(e=>(0,f.jsxs)(E,{children:[(0,f.jsx)(A,{children:e.product}),(0,f.jsx)(A,{children:e.category}),(0,f.jsx)(A,{children:e.price})]},e.product))})]}),(0,f.jsx)(u,{gap:`2`,justify:`center`,children:Array.from({length:n},(e,t)=>t+1).map(n=>(0,f.jsx)(s,{onClick:()=>t(n),size:`sm`,variant:n===e?`solid`:`outline`,children:n},n))})]})}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <ProductTable {...args} />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="6">
      {(["sm", "md", "lg"] as const).map(size => <ProductTable key={size} size={size} />)}
    </Stack>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="6">
      <ProductTable variant="line" />
      <ProductTable variant="outline" />
      <ProductTable variant="subtle" />
    </Stack>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <ProductTable striped />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <TableRoot>
      <TableCaption>Product inventory and pricing information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PRODUCTS.map(row => <TableRow key={row.product}>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>)}
      </TableBody>
    </TableRoot>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <ProductTable interactive />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <TableRoot variant="outline">
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PRODUCTS.map(row => <TableRow key={row.product}>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell>2199.96</TableCell>
        </TableRow>
      </TableFooter>
    </TableRoot>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <TableScrollArea style={{
    maxHeight: "12rem"
  }}>
      <TableRoot stickyHeader>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...PRODUCTS, ...PRODUCTS].map((row, index) => <TableRow key={\`\${row.product}-\${index}\`}>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>)}
        </TableBody>
      </TableRoot>
    </TableScrollArea>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function SelectionStory() {
    const [selected, setSelected] = useState<string[]>([]);
    const allSelected = selected.length === PRODUCTS.length;
    const someSelected = selected.length > 0 && !allSelected;
    return <TableRoot interactive variant="outline">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox aria-label="Select all rows" checked={allSelected} indeterminate={someSelected} onCheckedChange={checked => setSelected(checked ? PRODUCTS.map(row => row.product) : [])} />
            </TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {PRODUCTS.map(row => <TableRow key={row.product}>
              <TableCell>
                <Checkbox aria-label={\`Select \${row.product}\`} checked={selected.includes(row.product)} onCheckedChange={checked => setSelected(current => checked ? [...current, row.product] : current.filter(item => item !== row.product))} />
              </TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>\${row.price}</TableCell>
            </TableRow>)}
        </TableBody>
      </TableRoot>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <TableRoot variant="outline">
      <TableColumnGroup>
        <TableColumn htmlWidth="40%" />
        <TableColumn htmlWidth="35%" />
        <TableColumn htmlWidth="25%" />
      </TableColumnGroup>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PRODUCTS.map(row => <TableRow key={row.product}>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.category}</TableCell>
            <TableCell>{row.price}</TableCell>
          </TableRow>)}
      </TableBody>
    </TableRoot>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function PaginationStory() {
    const [page, setPage] = useState(1);
    const pageSize = 3;
    const pageCount = Math.ceil(PRODUCTS.length / pageSize);
    const rows = PRODUCTS.slice((page - 1) * pageSize, page * pageSize);
    return <Stack gap="4">
        <TableRoot variant="outline">
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map(row => <TableRow key={row.product}>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.price}</TableCell>
              </TableRow>)}
          </TableBody>
        </TableRoot>
        <Flex gap="2" justify="center">
          {Array.from({
          length: pageCount
        }, (_, index) => index + 1).map(pageNumber => <Button key={pageNumber} onClick={() => setPage(pageNumber)} size="sm" variant={pageNumber === page ? "solid" : "outline"}>
              {pageNumber}
            </Button>)}
        </Flex>
      </Stack>;
  }
}`,...X.parameters?.docs?.source}}};var Z=[`Default`,`Sizes`,`Variants`,`Striped`,`Caption`,`Interactive`,`WithFooter`,`StickyHeader`,`Selection`,`ColumnGroup`,`Pagination`];export{W as Caption,Y as ColumnGroup,B as Default,G as Interactive,X as Pagination,J as Selection,V as Sizes,q as StickyHeader,U as Striped,H as Variants,K as WithFooter,Z as __namedExportsOrder,z as default};