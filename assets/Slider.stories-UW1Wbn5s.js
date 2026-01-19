import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{R as p}from"./index-BlmOqGMO.js";import{F as c}from"./Alert-5RVefPd9.js";import"./index-yBjzXJbu.js";const S={title:"Components/Slider",component:c,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{min:0,max:100,defaultValue:60,label:"Attendance threshold",helperText:"Set the minimum attendance percentage."}},a={render:()=>{const[t,d]=p.useState(75);return r.jsxs("div",{className:"w-72 space-y-2",children:[r.jsx(c,{min:0,max:100,value:t,onChange:i=>d(Number(i.target.value)),label:`Score: ${t}`}),r.jsxs("div",{className:"text-sm text-neutral-500",children:["Current value: ",t]})]})}};var n,s,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    defaultValue: 60,
    label: "Attendance threshold",
    helperText: "Set the minimum attendance percentage."
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,o,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState(75);
    return <div className="w-72 space-y-2">
        <Slider min={0} max={100} value={value} onChange={event => setValue(Number(event.target.value))} label={\`Score: \${value}\`} />
        <div className="text-sm text-neutral-500">Current value: {value}</div>
      </div>;
  }
}`,...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const f=["Default","Interactive"];export{e as Default,a as Interactive,f as __namedExportsOrder,S as default};
