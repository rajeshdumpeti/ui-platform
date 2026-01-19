import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as a}from"./Alert-CBSgC9Zi.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";const g={title:"Components/Radio",component:a,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}},tags:["autodocs"]},s={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{name:"status",label:"Active",defaultChecked:!0}),e.jsx(a,{name:"status",label:"Inactive"}),e.jsx(a,{name:"status",label:"On Leave"})]})},i={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{name:"delivery",label:"Email",description:"Notifications will be sent via email.",defaultChecked:!0}),e.jsx(a,{name:"delivery",label:"SMS",description:"Messages may incur carrier charges."})]})},r={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{name:"size",size:"xs",label:"Extra small"}),e.jsx(a,{name:"size",size:"sm",label:"Small"}),e.jsx(a,{name:"size",size:"md",label:"Medium"}),e.jsx(a,{name:"size",size:"lg",label:"Large"}),e.jsx(a,{name:"size",size:"xl",label:"Extra large"})]})};var l,t,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Radio name="status" label="Active" defaultChecked />
      <Radio name="status" label="Inactive" />
      <Radio name="status" label="On Leave" />
    </div>
}`,...(n=(t=s.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var m,o,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Radio name="delivery" label="Email" description="Notifications will be sent via email." defaultChecked />
      <Radio name="delivery" label="SMS" description="Messages may incur carrier charges." />
    </div>
}`,...(d=(o=i.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Radio name="size" size="xs" label="Extra small" />
      <Radio name="size" size="sm" label="Small" />
      <Radio name="size" size="md" label="Medium" />
      <Radio name="size" size="lg" label="Large" />
      <Radio name="size" size="xl" label="Extra large" />
    </div>
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const j=["Default","WithDescription","Sizes"];export{s as Default,r as Sizes,i as WithDescription,j as __namedExportsOrder,g as default};
