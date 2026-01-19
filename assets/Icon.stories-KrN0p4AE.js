import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as N}from"./index-BlmOqGMO.js";import{m as h,I as n,n as p,s as q}from"./Alert-5RVefPd9.js";import"./index-yBjzXJbu.js";const K={title:"Components/Icon",component:n,parameters:{layout:"centered",docs:{description:{component:"A comprehensive set of Material Icons for SmartGate applications. Search, browse by category, or copy icon names for use in your components."}}},argTypes:{name:{control:"select",options:h()},size:{control:"select",options:["sm","md","lg"]},color:{control:"color"},disabled:{control:"boolean"}},tags:["autodocs"]},c={args:{name:"home",size:"md"}},o={render:()=>e.jsx("div",{className:"flex items-center gap-8 p-6",children:["sm","md","lg"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{name:"home",size:s}),e.jsxs("span",{className:"text-sm text-gray-600",children:[s," (",s==="sm"?18:s==="md"?24:32,"px)"]})]},s))})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-6 p-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{name:"add_circle",size:"lg",onClick:()=>alert("Clicked!"),className:"text-green-600"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Clickable"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{name:"settings",size:"lg",disabled:!0}),e.jsx("span",{className:"text-sm text-gray-600",children:"Disabled"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{name:"download",size:"lg",className:"text-blue-600"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Colored"})]})]})},i={render:()=>e.jsx("div",{className:"p-6 max-w-7xl",children:Object.entries(p).map(([s,r])=>e.jsxs("div",{className:"mb-12",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 capitalize border-b pb-2",children:[s.replace(/_/g," ")," (",r.length,")"]}),e.jsx("div",{className:"grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3",children:r.map(t=>e.jsxs("div",{className:"flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer",onClick:()=>navigator.clipboard.writeText(t),children:[e.jsx(n,{name:t,size:"md",className:"text-gray-700 group-hover:text-gray-900"}),e.jsx("span",{className:"mt-2 text-xs font-mono text-center text-gray-600 group-hover:text-gray-800",children:t})]},t))})]},s))})},d={render:()=>{const s=["home","search","settings","person","notifications","mail","dashboard","edit","delete","add_circle","check_circle","cancel","info","help","visibility","download","upload","link","more_vert"];return e.jsx("div",{className:"p-6 max-w-4xl",children:e.jsx("div",{className:"grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6",children:s.map(r=>e.jsxs("div",{className:"flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group",children:[e.jsx(n,{name:r,size:"md",className:"text-gray-700 group-hover:text-gray-900"}),e.jsx("span",{className:"mt-2 text-xs font-mono text-center text-gray-600",children:r})]},r))})})}},m={render:()=>{const[s,r]=N.useState(""),[t,u]=N.useState(null),x=q(s),M=async a=>{await navigator.clipboard.writeText(a),u(a),setTimeout(()=>u(null),2e3)};return e.jsxs("div",{className:"p-6 max-w-7xl",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("input",{type:"text",placeholder:"Search 150+ icons...",value:s,onChange:a=>r(a.target.value),className:"w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:[x.length," of ",h().length," icons found"]})]}),e.jsx("div",{className:"grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-3",children:x.map(a=>e.jsxs("div",{className:"flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer",onClick:()=>M(a),children:[e.jsx(n,{name:a,size:"md",className:t===a?"text-green-600":"text-gray-700"}),e.jsx("span",{className:`mt-1 text-xs font-mono text-center ${t===a?"text-green-600 font-semibold":"text-gray-600"}`,children:t===a?"Copied!":a})]},a))}),x.length===0&&e.jsxs("div",{className:"text-center py-12 text-gray-500",children:[e.jsx(n,{name:"search",size:"lg",className:"mx-auto mb-4 text-gray-400"}),e.jsxs("p",{children:['No icons found matching "',s,'"']}),e.jsx("p",{className:"text-sm mt-2",children:"Try a different search term"})]})]})}},g={render:()=>e.jsx("div",{className:"p-6 max-w-4xl",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-900 mb-2",children:"Available Icons"}),e.jsxs("code",{className:"text-sm text-blue-700",children:["Total: ",h().length," icons"]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-green-900 mb-2",children:"Categories"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(p).map(s=>e.jsxs("span",{className:"px-2 py-1 bg-green-100 text-green-800 text-xs rounded capitalize",children:[s.replace(/_/g," ")," (",p[s].length,")"]},s))})]})]})})};var v,f,b;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: "home",
    size: "md"
  }
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,j,I;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8 p-6">
      {(["sm", "md", "lg"] as const).map(size => <div key={size} className="flex flex-col items-center gap-2">
          <Icon name="home" size={size} />
          <span className="text-sm text-gray-600">
            {size} ({size === "sm" ? 18 : size === "md" ? 24 : 32}px)
          </span>
        </div>)}
    </div>
}`,...(I=(j=o.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,z,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6 p-6">
      <div className="flex flex-col items-center gap-2">
        <Icon name="add_circle" size="lg" onClick={() => alert("Clicked!")} className="text-green-600" />
        <span className="text-sm text-gray-600">Clickable</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="settings" size="lg" disabled />
        <span className="text-sm text-gray-600">Disabled</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="download" size="lg" className="text-blue-600" />
        <span className="text-sm text-gray-600">Colored</span>
      </div>
    </div>
}`,...(w=(z=l.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var k,S,_;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-7xl">
      {Object.entries(iconCategories).map(([category, icons]) => <div key={category} className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize border-b pb-2">
            {category.replace(/_/g, " ")} ({icons.length})
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
            {icons.map(iconName => <div key={iconName} className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer" onClick={() => navigator.clipboard.writeText(iconName)}>
                <Icon name={iconName} size="md" className="text-gray-700 group-hover:text-gray-900" />
                <span className="mt-2 text-xs font-mono text-center text-gray-600 group-hover:text-gray-800">
                  {iconName}
                </span>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var T,A,O;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const featuredIcons: IconName[] = ["home", "search", "settings", "person", "notifications", "mail", "dashboard", "edit", "delete", "add_circle", "check_circle", "cancel", "info", "help", "visibility", "download", "upload", "link", "more_vert"];
    return <div className="p-6 max-w-4xl">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {featuredIcons.map(name => <div key={name} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
              <Icon name={name} size="md" className="text-gray-700 group-hover:text-gray-900" />
              <span className="mt-2 text-xs font-mono text-center text-gray-600">
                {name}
              </span>
            </div>)}
        </div>
      </div>;
  }
}`,...(O=(A=d.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var R,D,G;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = React.useState("");
    const [copiedIcon, setCopiedIcon] = React.useState<IconName | null>(null);
    const filteredIcons = searchIcons(search);
    const handleCopy = async (iconName: IconName) => {
      await navigator.clipboard.writeText(iconName);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(null), 2000);
    };
    return <div className="p-6 max-w-7xl">
        <div className="mb-6">
          <input type="text" placeholder="Search 150+ icons..." value={search} onChange={e => setSearch(e.target.value)} className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <p className="mt-2 text-sm text-gray-500">
            {filteredIcons.length} of {getAllIconNames().length} icons found
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-3">
          {filteredIcons.map(iconName => <div key={iconName} className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => handleCopy(iconName)}>
              <Icon name={iconName} size="md" className={copiedIcon === iconName ? "text-green-600" : "text-gray-700"} />
              <span className={\`mt-1 text-xs font-mono text-center \${copiedIcon === iconName ? "text-green-600 font-semibold" : "text-gray-600"}\`}>
                {copiedIcon === iconName ? "Copied!" : iconName}
              </span>
            </div>)}
        </div>

        {filteredIcons.length === 0 && <div className="text-center py-12 text-gray-500">
            <Icon name="search" size="lg" className="mx-auto mb-4 text-gray-400" />
            <p>No icons found matching "{search}"</p>
            <p className="text-sm mt-2">Try a different search term</p>
          </div>}
      </div>;
  }
}`,...(G=(D=m.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var E,U,$;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-4xl">
      <div className="grid gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Available Icons</h3>
          <code className="text-sm text-blue-700">
            Total: {getAllIconNames().length} icons
          </code>
        </div>

        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {Object.keys(iconCategories).map(category => <span key={category} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded capitalize">
                {category.replace(/_/g, " ")} (
                {iconCategories[category as keyof typeof iconCategories].length}
                )
              </span>)}
          </div>
        </div>
      </div>
    </div>
}`,...($=(U=g.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const L=["Default","Sizes","Interactive","Categories","IconGrid","AllIconsSearch","IconUtilities"];export{m as AllIconsSearch,i as Categories,c as Default,d as IconGrid,g as IconUtilities,l as Interactive,o as Sizes,L as __namedExportsOrder,K as default};
