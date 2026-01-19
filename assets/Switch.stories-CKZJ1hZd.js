import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{$ as a}from"./Alert-5RVefPd9.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const g={title:"Components/Switch",component:a,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}},tags:["autodocs"]},s={args:{label:"Enable notifications",defaultChecked:!0}},l={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Attendance alerts",defaultChecked:!0}),e.jsx(a,{label:"Weekly summary"}),e.jsx(a,{label:"Disabled switch",disabled:!0})]})},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{size:"xs",label:"Extra small"}),e.jsx(a,{size:"sm",label:"Small"}),e.jsx(a,{size:"md",label:"Medium"}),e.jsx(a,{size:"lg",label:"Large"}),e.jsx(a,{size:"xl",label:"Extra large"})]})};var t,i,c;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Enable notifications",
    defaultChecked: true
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var n,o,d;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Switch label="Attendance alerts" defaultChecked />
      <Switch label="Weekly summary" />
      <Switch label="Disabled switch" disabled />
    </div>
}`,...(d=(o=l.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Switch size="xs" label="Extra small" />
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium" />
      <Switch size="lg" label="Large" />
      <Switch size="xl" label="Extra large" />
    </div>
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const z=["Default","Variations","Sizes"];export{s as Default,r as Sizes,l as Variations,z as __namedExportsOrder,g as default};
