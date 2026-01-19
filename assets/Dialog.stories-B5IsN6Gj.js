import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as l}from"./index--qcDGAq6.js";import{k as s,h as i}from"./Alert-CBSgC9Zi.js";import"./index-yBjzXJbu.js";const f={title:"Components/Dialog",component:s,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>{const[c,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"danger",onClick:()=>n(!0),children:"Delete Student"}),e.jsx(s,{open:c,onClose:()=>n(!1),title:"Delete student record?",description:"This action cannot be undone.",confirmText:"Delete",cancelText:"Cancel"})]})}};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button variant="danger" onClick={() => setOpen(true)}>
          Delete Student
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Delete student record?" description="This action cannot be undone." confirmText="Delete" cancelText="Cancel" />
      </>;
  }
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,f as default};
