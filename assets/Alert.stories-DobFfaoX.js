import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{A as r}from"./Alert-CBSgC9Zi.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";const v={title:"Components/Alert",component:r,parameters:{layout:"padded"},tags:["autodocs"]},t={args:{title:"Heads up!",description:"Student records will sync after approval.",variant:"info"}},a={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(r,{title:"Success",description:"Attendance updated.",variant:"success"}),e.jsx(r,{title:"Warning",description:"Sync delayed.",variant:"warning"}),e.jsx(r,{title:"Error",description:"Save failed.",variant:"error"}),e.jsx(r,{title:"Info",description:"New policy applied.",variant:"info"})]})};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: "Heads up!",
    description: "Student records will sync after approval.",
    variant: "info"
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,c,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Alert title="Success" description="Attendance updated." variant="success" />
      <Alert title="Warning" description="Sync delayed." variant="warning" />
      <Alert title="Error" description="Save failed." variant="error" />
      <Alert title="Info" description="New policy applied." variant="info" />
    </div>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const f=["Default","Variants"];export{t as Default,a as Variants,f as __namedExportsOrder,v as default};
