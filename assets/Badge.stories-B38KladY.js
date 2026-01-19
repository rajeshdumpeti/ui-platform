import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as a}from"./Alert-CBSgC9Zi.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";const y={title:"Components/Badge",component:a,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["default","primary","secondary","success","warning","error","info"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}},tags:["autodocs"]},r={args:{children:"Badge"}},n={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",children:"Error"}),e.jsx(a,{variant:"info",children:"Info"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(a,{size:"xs",children:"XS"}),e.jsx(a,{size:"sm",children:"SM"}),e.jsx(a,{size:"md",children:"MD"}),e.jsx(a,{size:"lg",children:"LG"}),e.jsx(a,{size:"xl",children:"XL"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{variant:"success",dot:!0,children:"Active"}),e.jsx(a,{variant:"warning",dot:!0,children:"On Leave"}),e.jsx(a,{variant:"error",dot:!0,children:"Inactive"}),e.jsx(a,{variant:"info",dot:!0,children:"Stable"})]})};var d,t,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Badge"
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var o,l,g;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,p,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Badge size="xs">XS</Badge>
      <Badge size="sm">SM</Badge>
      <Badge size="md">MD</Badge>
      <Badge size="lg">LG</Badge>
      <Badge size="xl">XL</Badge>
    </div>
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var v,B,u;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <Badge variant="success" dot>
        Active
      </Badge>
      <Badge variant="warning" dot>
        On Leave
      </Badge>
      <Badge variant="error" dot>
        Inactive
      </Badge>
      <Badge variant="info" dot>
        Stable
      </Badge>
    </div>
}`,...(u=(B=i.parameters)==null?void 0:B.docs)==null?void 0:u.source}}};const z=["Default","Variants","Sizes","WithDot"];export{r as Default,s as Sizes,n as Variants,i as WithDot,z as __namedExportsOrder,y as default};
