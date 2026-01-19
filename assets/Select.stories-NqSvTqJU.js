import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{z as l}from"./Alert-CBSgC9Zi.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";const z={title:"Components/Select",component:l,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}},tags:["autodocs"]},s={args:{options:[{label:"All Classes",value:"all"},{label:"Class 10-A",value:"10a"},{label:"Class 9-B",value:"9b"},{label:"Class 8-C",value:"8c"}]}},a={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(l,{size:"xs",options:[{label:"XS",value:"xs"}]}),e.jsx(l,{size:"sm",options:[{label:"SM",value:"sm"}]}),e.jsx(l,{size:"md",options:[{label:"MD",value:"md"}]}),e.jsx(l,{size:"lg",options:[{label:"LG",value:"lg"}]}),e.jsx(l,{size:"xl",options:[{label:"XL",value:"xl"}]})]})},n={render:()=>e.jsxs(l,{children:[e.jsx("option",{value:"",children:"Select status"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"}),e.jsx("option",{value:"leave",children:"On Leave"})]})};var o,t,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "All Classes",
      value: "all"
    }, {
      label: "Class 10-A",
      value: "10a"
    }, {
      label: "Class 9-B",
      value: "9b"
    }, {
      label: "Class 8-C",
      value: "8c"
    }]
  }
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var r,c,p;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Select size="xs" options={[{
      label: "XS",
      value: "xs"
    }]} />
      <Select size="sm" options={[{
      label: "SM",
      value: "sm"
    }]} />
      <Select size="md" options={[{
      label: "MD",
      value: "md"
    }]} />
      <Select size="lg" options={[{
      label: "LG",
      value: "lg"
    }]} />
      <Select size="xl" options={[{
      label: "XL",
      value: "xl"
    }]} />
    </div>
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,v,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Select>
      <option value="">Select status</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
      <option value="leave">On Leave</option>
    </Select>
}`,...(d=(v=n.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};const j=["Default","Sizes","WithPlaceholder"];export{s as Default,a as Sizes,n as WithPlaceholder,j as __namedExportsOrder,z as default};
