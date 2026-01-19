import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{X as c,Y as i,Z as a,_ as t,h as m}from"./Alert-5RVefPd9.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const v={title:"Components/Tabs",component:c,parameters:{layout:"padded"},tags:["autodocs"]},n={render:()=>e.jsxs(c,{defaultValue:"overview",children:[e.jsxs(i,{children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"academic",children:"Academic"}),e.jsx(a,{value:"attendance",children:"Attendance"}),e.jsx(a,{value:"remarks",children:"Remarks"})]}),e.jsx(t,{value:"overview",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-body-medium text-neutral-600",children:"Student performance summary and recent activity."}),e.jsx(m,{size:"sm",children:"View Report"})]})}),e.jsx(t,{value:"academic",children:e.jsx("p",{className:"text-body-medium text-neutral-600",children:"Academic scores and subject-wise breakdown."})}),e.jsx(t,{value:"attendance",children:e.jsx("p",{className:"text-body-medium text-neutral-600",children:"Attendance trends and monthly status."})}),e.jsx(t,{value:"remarks",children:e.jsx("p",{className:"text-body-medium text-neutral-600",children:"Recent teacher remarks and notes."})})]})};var s,r,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="academic">Academic</TabsTrigger>
        <TabsTrigger value="attendance">Attendance</TabsTrigger>
        <TabsTrigger value="remarks">Remarks</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="space-y-4">
          <p className="text-body-medium text-neutral-600">
            Student performance summary and recent activity.
          </p>
          <Button size="sm">View Report</Button>
        </div>
      </TabsContent>
      <TabsContent value="academic">
        <p className="text-body-medium text-neutral-600">
          Academic scores and subject-wise breakdown.
        </p>
      </TabsContent>
      <TabsContent value="attendance">
        <p className="text-body-medium text-neutral-600">
          Attendance trends and monthly status.
        </p>
      </TabsContent>
      <TabsContent value="remarks">
        <p className="text-body-medium text-neutral-600">
          Recent teacher remarks and notes.
        </p>
      </TabsContent>
    </Tabs>
}`,...(d=(r=n.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const x=["Default"];export{n as Default,x as __namedExportsOrder,v as default};
