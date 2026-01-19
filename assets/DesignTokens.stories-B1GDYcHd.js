import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const p={brand:{primary:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},secondary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}},semantic:{success:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},warning:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},error:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},info:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"}}},t={fontFamily:{sans:["Inter","ui-sans-serif","system-ui","-apple-system","sans-serif"],mono:["JetBrains Mono","ui-monospace","SFMono-Regular","monospace"],serif:["ui-serif","Georgia","Cambria","Times New Roman","serif"]},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem"},fontWeight:{light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{normal:"1.5"}},D={0:"0",1:"0.125rem",2:"0.25rem",3:"0.375rem",4:"0.5rem",5:"0.625rem",6:"0.75rem",8:"1rem",10:"1.25rem",12:"1.5rem",16:"2rem",20:"2.5rem",24:"3rem",32:"4rem",40:"5rem",48:"6rem",56:"7rem",64:"8rem"},g={radius:{none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",base:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","2xl":"0 25px 50px -12px rgb(0 0 0 / 0.25)",inner:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"}},Z={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},n={xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},E={xs:`(min-width: ${n.xs})`,sm:`(min-width: ${n.sm})`,md:`(min-width: ${n.md})`,lg:`(min-width: ${n.lg})`,xl:`(min-width: ${n.xl})`,"2xl":`(min-width: ${n["2xl"]})`},u={duration:{fastest:"75ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"500ms",slowest:"700ms"},easing:{linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",bounce:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},P={title:"Design System/Tokens",parameters:{layout:"fullscreen"}},r={render:()=>e.jsxs("div",{className:"p-8 space-y-8",children:[e.jsx("h1",{className:"text-display-large text-neutral-900",children:"Color System"}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-heading-large mb-6",children:"Brand Colors"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-heading-small mb-4",children:"Primary"}),e.jsx("div",{className:"space-y-2",children:Object.entries(p.brand.primary).map(([s,a])=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-16 h-16 rounded-lg border border-neutral-200",style:{backgroundColor:a}}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-body-medium font-medium",children:["primary-",s]}),e.jsx("p",{className:"text-caption text-neutral-600",children:a})]})]},s))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-heading-small mb-4",children:"Secondary"}),e.jsx("div",{className:"space-y-2",children:Object.entries(p.brand.secondary).map(([s,a])=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-16 h-16 rounded-lg border border-neutral-200",style:{backgroundColor:a}}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-body-medium font-medium",children:["secondary-",s]}),e.jsx("p",{className:"text-caption text-neutral-600",children:a})]})]},s))})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-heading-large mb-6",children:"Semantic Colors"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:Object.entries(p.semantic).map(([s,a])=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-heading-small mb-4 capitalize",children:s}),e.jsx("div",{className:"space-y-2",children:Object.entries(a).slice(-3).map(([x,h])=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-12 h-12 rounded border border-neutral-200",style:{backgroundColor:h}}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-body-small font-medium",children:[s,"-",x]}),e.jsx("p",{className:"text-caption text-neutral-600",children:h})]})]},x))})]},s))})]})]})},i={render:()=>e.jsxs("div",{className:"p-8 space-y-8",children:[e.jsx("h1",{className:"text-display-large text-neutral-900",children:"Typography Scale"}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-heading-large mb-6",children:"Font Families"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:Object.entries(t.fontFamily).map(([s,a])=>e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"text-heading-small mb-2 capitalize",children:s}),e.jsx("p",{className:"text-body-small text-neutral-600",style:{fontFamily:a[0]},children:a.join(", ")}),e.jsx("p",{className:"text-body-large mt-4",style:{fontFamily:a[0]},children:"The quick brown fox jumps over the lazy dog"})]},s))})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-heading-large mb-6",children:"Font Sizes"}),e.jsx("div",{className:"space-y-4",children:Object.entries(t.fontSize).map(([s,a])=>e.jsxs("div",{className:"border-b pb-4",children:[e.jsxs("p",{className:"text-caption text-neutral-600 mb-1",children:["text-",s]}),e.jsxs("p",{style:{fontSize:a,lineHeight:t.lineHeight.normal},children:["The quick brown fox jumps over the lazy dog (",a,")"]})]},s))})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-heading-large mb-6",children:"Font Weights"}),e.jsx("div",{className:"space-y-3",children:Object.entries(t.fontWeight).map(([s,a])=>e.jsx("div",{children:e.jsxs("p",{className:"text-body-medium capitalize",style:{fontWeight:a},children:[s," - ",a," - The quick brown fox jumps over the lazy dog"]})},s))})]})]})},d={render:()=>e.jsxs("div",{className:"p-8 space-y-8",children:[e.jsx("h1",{className:"text-display-large text-neutral-900",children:"Spacing Scale"}),e.jsx("div",{className:"space-y-6",children:Object.entries(D).map(([s,a])=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"w-[5.6rem] text-body-medium font-medium",children:["spacing-",s]}),e.jsx("div",{className:"w-[5.6rem] text-caption text-neutral-600",children:a}),e.jsx("div",{className:"h-8 bg-primary-500 rounded",style:{width:a}})]},s))})]})},l={render:()=>e.jsxs("div",{className:"p-8 space-y-8",children:[e.jsx("h1",{className:"text-display-large text-neutral-900",children:"Borders & Shadows"}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-heading-large mb-6",children:"Border Radius"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:Object.entries(g.radius).map(([s,a])=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-20 h-20 mx-auto mb-2 bg-primary-500",style:{borderRadius:a}}),e.jsxs("p",{className:"text-body-small font-medium",children:["rounded-",s]}),e.jsx("p",{className:"text-caption text-neutral-600",children:a})]},s))})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-heading-large mb-6",children:"Shadows"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Object.entries(g.shadows).map(([s,a])=>e.jsxs("div",{className:"p-6 bg-white rounded-lg text-center",children:[e.jsx("div",{className:"w-32 h-32 mx-auto mb-4 bg-white rounded-lg",style:{boxShadow:a}}),e.jsxs("p",{className:"text-body-medium font-medium",children:["shadow-",s]}),e.jsx("p",{className:"text-caption text-neutral-600 mt-2",children:a})]},s))})]})]})},c={render:()=>e.jsxs("div",{className:"p-8 space-y-8",children:[e.jsx("h1",{className:"text-display-large text-neutral-900",children:"Z-Index Scale"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Object.entries(Z).map(([s,a])=>e.jsxs("div",{className:"p-4 border rounded-lg text-center",children:[e.jsx("div",{className:"text-display-medium text-primary-600 font-bold",children:a}),e.jsxs("p",{className:"text-body-medium font-medium mt-2",children:["z-",s]}),e.jsx("p",{className:"text-caption text-neutral-600 capitalize",children:s.replace(/([A-Z])/g," $1").toLowerCase()})]},s))})]})},m={render:()=>e.jsxs("div",{className:"p-8 space-y-8",children:[e.jsx("h1",{className:"text-display-large text-neutral-900",children:"Breakpoints"}),e.jsx("div",{className:"space-y-4",children:Object.entries(n).map(([s,a])=>e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded-lg",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-body-large font-medium",children:["breakpoint-",s]}),e.jsx("p",{className:"text-caption text-neutral-600",children:E[s]})]}),e.jsx("div",{className:"text-body-large font-semibold text-primary-600",children:a})]},s))})]})},o={render:()=>e.jsxs("div",{className:"p-8 space-y-8",children:[e.jsx("h1",{className:"text-display-large text-neutral-900",children:"Animations & Transitions"}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-heading-large mb-6",children:"Durations"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:Object.entries(u.duration).map(([s,a])=>e.jsxs("div",{className:"p-4 border rounded-lg text-center",children:[e.jsx("div",{className:"w-16 h-16 mx-auto mb-2 bg-primary-500 rounded-full animate-pulse",style:{animationDuration:a}}),e.jsxs("p",{className:"text-body-small font-medium",children:["duration-",s]}),e.jsx("p",{className:"text-caption text-neutral-600",children:a})]},s))})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-heading-large mb-6",children:"Easing Functions"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:Object.entries(u.easing).map(([s,a])=>e.jsxs("div",{className:"p-4 border rounded-lg text-center",children:[e.jsx("div",{className:"w-16 h-16 mx-auto mb-2 bg-gradient-primary rounded-lg transition-transform hover:scale-110",style:{transitionTimingFunction:a}}),e.jsxs("p",{className:"text-body-small font-medium",children:["ease-",s]}),e.jsx("p",{className:"text-caption text-neutral-600",children:a})]},s))})]})]})};var b,y,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Color System</h1>

      {/* Brand Colors */}
      <section>
        <h2 className="text-heading-large mb-6">Brand Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Colors */}
          <div>
            <h3 className="text-heading-small mb-4">Primary</h3>
            <div className="space-y-2">
              {Object.entries(colors.brand.primary).map(([key, value]) => <div key={key} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg border border-neutral-200" style={{
                backgroundColor: value
              }} />
                  <div>
                    <p className="text-body-medium font-medium">
                      primary-{key}
                    </p>
                    <p className="text-caption text-neutral-600">{value}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Secondary Colors */}
          <div>
            <h3 className="text-heading-small mb-4">Secondary</h3>
            <div className="space-y-2">
              {Object.entries(colors.brand.secondary).map(([key, value]) => <div key={key} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg border border-neutral-200" style={{
                backgroundColor: value
              }} />
                  <div>
                    <p className="text-body-medium font-medium">
                      secondary-{key}
                    </p>
                    <p className="text-caption text-neutral-600">{value}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Semantic Colors */}
      <section>
        <h2 className="text-heading-large mb-6">Semantic Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Object.entries(colors.semantic).map(([category, scale]) => <div key={category}>
              <h3 className="text-heading-small mb-4 capitalize">{category}</h3>
              <div className="space-y-2">
                {Object.entries(scale).slice(-3).map(([key, value]) => <div key={key} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded border border-neutral-200" style={{
                backgroundColor: value
              }} />
                      <div>
                        <p className="text-body-small font-medium">
                          {category}-{key}
                        </p>
                        <p className="text-caption text-neutral-600">{value}</p>
                      </div>
                    </div>)}
              </div>
            </div>)}
        </div>
      </section>
    </div>
}`,...(N=(y=r.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var v,j,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Typography Scale</h1>

      {/* Font Families */}
      <section>
        <h2 className="text-heading-large mb-6">Font Families</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(typography.fontFamily).map(([name, fonts]) => <div key={name} className="p-4 border rounded-lg">
              <h3 className="text-heading-small mb-2 capitalize">{name}</h3>
              <p className="text-body-small text-neutral-600" style={{
            fontFamily: fonts[0]
          }}>
                {fonts.join(", ")}
              </p>
              <p className={\`text-body-large mt-4\`} style={{
            fontFamily: fonts[0]
          }}>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>)}
        </div>
      </section>

      {/* Font Sizes */}
      <section>
        <h2 className="text-heading-large mb-6">Font Sizes</h2>
        <div className="space-y-4">
          {Object.entries(typography.fontSize).map(([name, size]) => <div key={name} className="border-b pb-4">
              <p className="text-caption text-neutral-600 mb-1">text-{name}</p>
              <p style={{
            fontSize: size,
            lineHeight: typography.lineHeight.normal
          }}>
                The quick brown fox jumps over the lazy dog ({size})
              </p>
            </div>)}
        </div>
      </section>

      {/* Font Weights */}
      <section>
        <h2 className="text-heading-large mb-6">Font Weights</h2>
        <div className="space-y-3">
          {Object.entries(typography.fontWeight).map(([name, weight]) => <div key={name}>
              <p className="text-body-medium capitalize" style={{
            fontWeight: weight
          }}>
                {name} - {weight} - The quick brown fox jumps over the lazy dog
              </p>
            </div>)}
        </div>
      </section>
    </div>
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var w,k,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Spacing Scale</h1>

      <div className="space-y-6">
        {Object.entries(spacing).map(([scale, value]) => <div key={scale} className="flex items-center gap-6">
            <div className="w-[5.6rem] text-body-medium font-medium">
              spacing-{scale}
            </div>
            <div className="w-[5.6rem] text-caption text-neutral-600">
              {value}
            </div>
            <div className="h-8 bg-primary-500 rounded" style={{
          width: value
        }} />
          </div>)}
      </div>
    </div>
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var O,z,F;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Borders & Shadows</h1>

      {/* Border Radius */}
      <section>
        <h2 className="text-heading-large mb-6">Border Radius</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(borders.radius).map(([name, radius]) => <div key={name} className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 bg-primary-500" style={{
            borderRadius: radius
          }} />
              <p className="text-body-small font-medium">rounded-{name}</p>
              <p className="text-caption text-neutral-600">{radius}</p>
            </div>)}
        </div>
      </section>

      {/* Shadows */}
      <section>
        <h2 className="text-heading-large mb-6">Shadows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(borders.shadows).map(([name, shadow]) => <div key={name} className="p-6 bg-white rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg" style={{
            boxShadow: shadow
          }} />
              <p className="text-body-medium font-medium">shadow-{name}</p>
              <p className="text-caption text-neutral-600 mt-2">{shadow}</p>
            </div>)}
        </div>
      </section>
    </div>
}`,...(F=(z=l.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var C,T,B;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Z-Index Scale</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(zIndex).map(([name, value]) => <div key={name} className="p-4 border rounded-lg text-center">
            <div className="text-display-medium text-primary-600 font-bold">
              {value}
            </div>
            <p className="text-body-medium font-medium mt-2">z-{name}</p>
            <p className="text-caption text-neutral-600 capitalize">
              {name.replace(/([A-Z])/g, " $1").toLowerCase()}
            </p>
          </div>)}
      </div>
    </div>
}`,...(B=(T=c.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var I,A,R;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Breakpoints</h1>

      <div className="space-y-4">
        {Object.entries(breakpoints).map(([name, value]) => <div key={name} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="text-body-large font-medium">breakpoint-{name}</p>
              <p className="text-caption text-neutral-600">
                {mediaQueries[name as keyof typeof mediaQueries]}
              </p>
            </div>
            <div className="text-body-large font-semibold text-primary-600">
              {value}
            </div>
          </div>)}
      </div>
    </div>
}`,...(R=(A=m.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var W,$,q;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">
        Animations & Transitions
      </h1>

      {/* Durations */}
      <section>
        <h2 className="text-heading-large mb-6">Durations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(animations.duration).map(([name, duration]) => <div key={name} className="p-4 border rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-primary-500 rounded-full animate-pulse" style={{
            animationDuration: duration
          }} />
              <p className="text-body-small font-medium">duration-{name}</p>
              <p className="text-caption text-neutral-600">{duration}</p>
            </div>)}
        </div>
      </section>

      {/* Easing Functions */}
      <section>
        <h2 className="text-heading-large mb-6">Easing Functions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(animations.easing).map(([name, easing]) => <div key={name} className="p-4 border rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-gradient-primary rounded-lg transition-transform hover:scale-110" style={{
            transitionTimingFunction: easing
          }} />
              <p className="text-body-small font-medium">ease-{name}</p>
              <p className="text-caption text-neutral-600">{easing}</p>
            </div>)}
        </div>
      </section>
    </div>
}`,...(q=($=o.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const Q=["Colors","Typography","Spacing","BordersAndShadows","ZIndex","Breakpoints","Animations"];export{o as Animations,l as BordersAndShadows,m as Breakpoints,r as Colors,d as Spacing,i as Typography,c as ZIndex,Q as __namedExportsOrder,P as default};
