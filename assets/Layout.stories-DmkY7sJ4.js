import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{p as C,C as w,q as y,r as c,G as v,t as E}from"./Alert-CBSgC9Zi.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";const b={title:"Components/Layout",component:C,parameters:{layout:"padded"},tags:["autodocs"]},s={render:()=>e.jsx("div",{className:"space-y-6",children:["sm","md","lg","xl","full"].map(a=>e.jsx(C,{size:a,children:e.jsx(w,{className:"p-4",children:e.jsxs("p",{className:"text-sm text-neutral-600",children:["Container size: ",a]})})},a))})},r={render:()=>e.jsxs(y,{direction:"row",gap:"md",align:"center",children:[e.jsx(c,{className:"h-12 w-12 rounded-lg bg-primary-100"}),e.jsx(c,{className:"h-12 w-12 rounded-lg bg-success-100"}),e.jsx(c,{className:"h-12 w-12 rounded-lg bg-warning-100"})]})},n={render:()=>e.jsx(v,{cols:3,gap:"md",children:Array.from({length:6}).map((a,o)=>e.jsxs(w,{className:"p-4 text-sm text-neutral-500",children:["Grid item ",o+1]},o))})},t={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-neutral-600",children:"Section one"}),e.jsx(E,{}),e.jsx("p",{className:"text-sm text-neutral-600",children:"Section two"})]})};var d,m,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {(["sm", "md", "lg", "xl", "full"] as const).map(size => <Container key={size} size={size}>
          <Card className="p-4">
            <p className="text-sm text-neutral-600">Container size: {size}</p>
          </Card>
        </Container>)}
    </div>
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var l,p,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Stack direction="row" gap="md" align="center">
      <Box className="h-12 w-12 rounded-lg bg-primary-100" />
      <Box className="h-12 w-12 rounded-lg bg-success-100" />
      <Box className="h-12 w-12 rounded-lg bg-warning-100" />
    </Stack>
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,g,N;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Grid cols={3} gap="md">
      {Array.from({
      length: 6
    }).map((_, index) => <Card key={index} className="p-4 text-sm text-neutral-500">
          Grid item {index + 1}
        </Card>)}
    </Grid>
}`,...(N=(g=n.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var h,j,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm text-neutral-600">Section one</p>
      <Divider />
      <p className="text-sm text-neutral-600">Section two</p>
    </div>
}`,...(S=(j=t.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const B=["ContainerSizes","StackExample","GridExample","DividerExample"];export{s as ContainerSizes,t as DividerExample,n as GridExample,r as StackExample,B as __namedExportsOrder,b as default};
