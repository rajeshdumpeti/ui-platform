import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{R as p}from"./index-BlmOqGMO.js";import{P as m}from"./Alert-5RVefPd9.js";import"./index-yBjzXJbu.js";const f={title:"Components/Pagination",component:m,parameters:{layout:"centered"},argTypes:{currentPage:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},siblingCount:{control:{type:"number",min:0,max:2}}},tags:["autodocs"]},e={args:{currentPage:1,totalPages:10,siblingCount:1}},a={render:()=>{const[r,u]=p.useState(3);return t.jsxs("div",{className:"space-y-3",children:[t.jsx(m,{currentPage:r,totalPages:12,onPageChange:u}),t.jsxs("div",{className:"text-sm text-neutral-600",children:["Page ",r," of 12"]})]})}};var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 10,
    siblingCount: 1
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var c,g,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(3);
    return <div className="space-y-3">
        <Pagination currentPage={page} totalPages={12} onPageChange={setPage} />
        <div className="text-sm text-neutral-600">
          Page {page} of 12
        </div>
      </div>;
  }
}`,...(i=(g=a.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};const v=["Default","Interactive"];export{e as Default,a as Interactive,v as __namedExportsOrder,f as default};
