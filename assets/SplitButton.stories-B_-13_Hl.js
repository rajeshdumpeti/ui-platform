import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as f}from"./index-BlmOqGMO.js";import{J as a,M as v,v as t,I as r}from"./Alert-5RVefPd9.js";import"./index-yBjzXJbu.js";const w={title:"Components/SplitButton",component:a,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>{const[p,u]=f.useState(!1);return e.jsxs("div",{className:"relative inline-flex flex-col items-start gap-3",children:[e.jsx(a,{label:"Export",onClick:()=>alert("Primary action"),onToggle:()=>u(x=>!x)}),p&&e.jsxs(v,{className:"w-40",children:[e.jsx(t,{icon:e.jsx(r,{name:"download",size:"sm"}),children:"Download CSV"}),e.jsx(t,{icon:e.jsx(r,{name:"description",size:"sm"}),children:"Download PDF"})]})]})}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{label:"Primary"}),e.jsx(a,{label:"Secondary",variant:"secondary"}),e.jsx(a,{label:"Danger",variant:"danger"}),e.jsx(a,{label:"Success",variant:"success"})]})};var o,l,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div className="relative inline-flex flex-col items-start gap-3">
        <SplitButton label="Export" onClick={() => alert("Primary action")} onToggle={() => setOpen(prev => !prev)} />
        {open && <Menu className="w-40">
            <MenuItem icon={<Icon name="download" size="sm" />}>
              Download CSV
            </MenuItem>
            <MenuItem icon={<Icon name="description" size="sm" />}>
              Download PDF
            </MenuItem>
          </Menu>}
      </div>;
  }
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <SplitButton label="Primary" />
      <SplitButton label="Secondary" variant="secondary" />
      <SplitButton label="Danger" variant="danger" />
      <SplitButton label="Success" variant="success" />
    </div>
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const D=["Default","Variants"];export{n as Default,s as Variants,D as __namedExportsOrder,w as default};
