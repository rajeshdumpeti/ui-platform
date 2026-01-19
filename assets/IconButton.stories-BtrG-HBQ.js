import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{o as a,I as s}from"./Alert-5RVefPd9.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const g={title:"Components/IconButton",component:a,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","ghost","link","danger","success"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}},tags:["autodocs"]},n={args:{ariaLabel:"Search",icon:e.jsx(s,{name:"search",size:"sm"})}},r={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{ariaLabel:"Add",icon:e.jsx(s,{name:"add",size:"sm"})}),e.jsx(a,{ariaLabel:"Edit",variant:"secondary",icon:e.jsx(s,{name:"edit",size:"sm"})}),e.jsx(a,{ariaLabel:"Delete",variant:"danger",icon:e.jsx(s,{name:"delete",size:"sm"})}),e.jsx(a,{ariaLabel:"Success",variant:"success",icon:e.jsx(s,{name:"check",size:"sm"})}),e.jsx(a,{ariaLabel:"Ghost",variant:"ghost",icon:e.jsx(s,{name:"more_vert",size:"sm"})})]})};var o,t,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Search",
    icon: <Icon name="search" size="sm" />
  }
}`,...(c=(t=n.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <IconButton ariaLabel="Add" icon={<Icon name="add" size="sm" />} />
      <IconButton ariaLabel="Edit" variant="secondary" icon={<Icon name="edit" size="sm" />} />
      <IconButton ariaLabel="Delete" variant="danger" icon={<Icon name="delete" size="sm" />} />
      <IconButton ariaLabel="Success" variant="success" icon={<Icon name="check" size="sm" />} />
      <IconButton ariaLabel="Ghost" variant="ghost" icon={<Icon name="more_vert" size="sm" />} />
    </div>
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const I=["Default","Variants"];export{n as Default,r as Variants,I as __namedExportsOrder,g as default};
