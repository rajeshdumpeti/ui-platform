import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{i as s}from"./Alert-CBSgC9Zi.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";const z={title:"Components/Checkbox",component:s,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}},tags:["autodocs"]},a={args:{label:"Send me product updates"}},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{label:"Active students only",defaultChecked:!0}),e.jsx(s,{label:"Include archived records",description:"Archived data will be read-only."}),e.jsx(s,{label:"Disabled option",disabled:!0})]})},l={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{size:"xs",label:"Extra small"}),e.jsx(s,{size:"sm",label:"Small"}),e.jsx(s,{size:"md",label:"Medium"}),e.jsx(s,{size:"lg",label:"Large"}),e.jsx(s,{size:"xl",label:"Extra large"})]})};var o,t,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Send me product updates"
  }
}`,...(d=(t=a.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var c,i,n;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="Active students only" defaultChecked />
      <Checkbox label="Include archived records" description="Archived data will be read-only." />
      <Checkbox label="Disabled option" disabled />
    </div>
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,p,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox size="xs" label="Extra small" />
      <Checkbox size="sm" label="Small" />
      <Checkbox size="md" label="Medium" />
      <Checkbox size="lg" label="Large" />
      <Checkbox size="xl" label="Extra large" />
    </div>
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const C=["Default","Variations","Sizes"];export{a as Default,l as Sizes,r as Variations,C as __namedExportsOrder,z as default};
