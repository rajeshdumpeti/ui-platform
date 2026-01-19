import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as i}from"./index-BlmOqGMO.js";import{w as d,h as a}from"./Alert-5RVefPd9.js";import"./index-yBjzXJbu.js";const f={title:"Components/Modal",component:d,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>{const[l,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal"}),e.jsx(d,{open:l,onClose:()=>n(!1),title:"Edit Student",description:"Update student details and save.",footer:e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{children:"Save"})]}),children:e.jsx("p",{className:"text-body-medium text-neutral-600",children:"Add form controls inside the modal content area."})})]})}};var o,s,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Edit Student" description="Update student details and save." footer={<div className="flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button>Save</Button>
            </div>}>
          <p className="text-body-medium text-neutral-600">
            Add form controls inside the modal content area.
          </p>
        </Modal>
      </>;
  }
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,f as default};
