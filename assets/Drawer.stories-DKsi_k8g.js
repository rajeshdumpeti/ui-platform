import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as c}from"./index-BlmOqGMO.js";import{l,h as n}from"./Alert-5RVefPd9.js";import"./index-yBjzXJbu.js";const x={title:"Components/Drawer",component:l,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>{const[p,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open Drawer"}),e.jsx(l,{open:p,onClose:()=>s(!1),title:"Filters",footer:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(n,{variant:"ghost",onClick:()=>s(!1),children:"Reset"}),e.jsx(n,{children:"Apply"})]}),children:e.jsxs("div",{className:"space-y-3 text-body-small text-neutral-600",children:[e.jsx("p",{children:"Class level"}),e.jsx("p",{children:"Status"}),e.jsx("p",{children:"Sort order"})]})})]})}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Filters" footer={<div className="flex gap-3">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Reset
              </Button>
              <Button>Apply</Button>
            </div>}>
          <div className="space-y-3 text-body-small text-neutral-600">
            <p>Class level</p>
            <p>Status</p>
            <p>Sort order</p>
          </div>
        </Drawer>
      </>;
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,x as default};
