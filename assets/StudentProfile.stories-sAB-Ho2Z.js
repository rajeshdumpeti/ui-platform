import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{b as p,a as d,B as c,h as x,X as h,Y as j,Z as s,_ as f,C as n,c as t,d as r,f as i,y as g,L as b,j as m,I as N}from"./Alert-5RVefPd9.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const A={title:"Patterns/Student Profile",parameters:{layout:"padded"}},l={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx(p,{items:[{label:"Dashboard",href:"#"},{label:"Students",href:"#"},{label:"Aarav Sharma"}]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(d,{name:"Aarav Sharma",size:"lg"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("h1",{className:"text-display-medium text-neutral-900",children:"Aarav Sharma"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-sm text-neutral-500",children:[e.jsx("span",{children:"ID: #VT-2023-892"}),e.jsx("span",{children:"Class 10-B"}),e.jsx(c,{variant:"success",size:"xs",dot:!0,children:"Active Status"})]})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(x,{variant:"ghost",children:"Edit Profile"}),e.jsx(x,{children:"Download Report"})]})]}),e.jsxs(h,{defaultValue:"overview",children:[e.jsxs(j,{children:[e.jsx(s,{value:"overview",children:"Overview"}),e.jsx(s,{value:"academic",children:"Academic"}),e.jsx(s,{value:"attendance",children:"Attendance"}),e.jsx(s,{value:"remarks",children:"Remarks"})]}),e.jsxs(f,{value:"overview",children:[e.jsxs("div",{className:"grid gap-6 lg:grid-cols-3",children:[e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{children:"Personal Details"})}),e.jsxs(i,{className:"space-y-3 text-sm text-neutral-600",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Date of Birth"}),e.jsx("span",{className:"font-medium text-neutral-900",children:"12 Aug 2008"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Gender"}),e.jsx("span",{className:"font-medium text-neutral-900",children:"Male"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Blood Group"}),e.jsx("span",{className:"font-medium text-neutral-900",children:"O+"})]})]})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{children:"Attendance"})}),e.jsxs(i,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-neutral-500",children:"Year to Date"}),e.jsx(c,{variant:"success",size:"xs",children:"Good"})]}),e.jsx("div",{className:"text-3xl font-semibold text-neutral-900",children:"92%"}),e.jsx(g,{value:92,variant:"primary"}),e.jsxs("div",{className:"flex justify-between text-xs text-neutral-500",children:[e.jsx("span",{children:"Present: 180 Days"}),e.jsx("span",{children:"Absent: 15 Days"})]})]})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{children:"Recent Results"})}),e.jsx(i,{className:"space-y-3",children:[{subject:"Mathematics",score:"95/100",variant:"success"},{subject:"Science",score:"88/100",variant:"info"},{subject:"English",score:"82/100",variant:"primary"}].map(a=>e.jsxs("div",{className:"flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2 text-sm",children:[e.jsx("span",{className:"text-neutral-700",children:a.subject}),e.jsx(c,{variant:a.variant,size:"xs",children:a.score})]},a.subject))})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{children:"Teacher Notes & Remarks"})}),e.jsx(i,{children:e.jsxs(b,{children:[e.jsx(m,{leading:e.jsx(d,{name:"Mrs. Iyer",size:"sm"}),title:"Mrs. Iyer",subtitle:"Mathematics Teacher",meta:"2 days ago",trailing:e.jsx("p",{className:"text-sm text-neutral-600",children:"Great improvement in Mathematics this week."})}),e.jsx(m,{leading:e.jsx(d,{name:"Mr. David",size:"sm"}),title:"Mr. David",subtitle:"Sports Coach",meta:"1 week ago",trailing:e.jsx("p",{className:"text-sm text-neutral-600",children:"Selected for the inter-school cricket tournament."})}),e.jsx(m,{leading:e.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-info-100 text-info-600",children:e.jsx(N,{name:"info",size:"sm"})}),title:"System Admin",subtitle:"Automated notice",meta:"2 weeks ago",trailing:e.jsx("p",{className:"text-sm text-neutral-600",children:"Fee reminder sent to guardian contact."})})]})})]})})]})]})]})};var o,u,v;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <Breadcrumbs items={[{
      label: "Dashboard",
      href: "#"
    }, {
      label: "Students",
      href: "#"
    }, {
      label: "Aarav Sharma"
    }]} />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar name="Aarav Sharma" size="lg" />
          <div className="space-y-1">
            <h1 className="text-display-medium text-neutral-900">
              Aarav Sharma
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
              <span>ID: #VT-2023-892</span>
              <span>Class 10-B</span>
              <Badge variant="success" size="xs" dot>
                Active Status
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="ghost">Edit Profile</Button>
          <Button>Download Report</Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="remarks">Remarks</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-neutral-600">
                <div className="flex justify-between">
                  <span>Date of Birth</span>
                  <span className="font-medium text-neutral-900">
                    12 Aug 2008
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Gender</span>
                  <span className="font-medium text-neutral-900">Male</span>
                </div>
                <div className="flex justify-between">
                  <span>Blood Group</span>
                  <span className="font-medium text-neutral-900">O+</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    Year to Date
                  </span>
                  <Badge variant="success" size="xs">
                    Good
                  </Badge>
                </div>
                <div className="text-3xl font-semibold text-neutral-900">
                  92%
                </div>
                <ProgressBar value={92} variant="primary" />
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>Present: 180 Days</span>
                  <span>Absent: 15 Days</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[{
                subject: "Mathematics",
                score: "95/100",
                variant: "success"
              }, {
                subject: "Science",
                score: "88/100",
                variant: "info"
              }, {
                subject: "English",
                score: "82/100",
                variant: "primary"
              }].map(item => <div key={item.subject} className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2 text-sm">
                    <span className="text-neutral-700">{item.subject}</span>
                    <Badge variant={item.variant as "success" | "info" | "primary"} size="xs">
                      {item.score}
                    </Badge>
                  </div>)}
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Teacher Notes & Remarks</CardTitle>
              </CardHeader>
              <CardContent>
                <List>
                  <ListItem leading={<Avatar name="Mrs. Iyer" size="sm" />} title="Mrs. Iyer" subtitle="Mathematics Teacher" meta="2 days ago" trailing={<p className="text-sm text-neutral-600">
                        Great improvement in Mathematics this week.
                      </p>} />
                  <ListItem leading={<Avatar name="Mr. David" size="sm" />} title="Mr. David" subtitle="Sports Coach" meta="1 week ago" trailing={<p className="text-sm text-neutral-600">
                        Selected for the inter-school cricket tournament.
                      </p>} />
                  <ListItem leading={<div className="flex h-8 w-8 items-center justify-center rounded-full bg-info-100 text-info-600">
                        <Icon name="info" size="sm" />
                      </div>} title="System Admin" subtitle="Automated notice" meta="2 weeks ago" trailing={<p className="text-sm text-neutral-600">
                        Fee reminder sent to guardian contact.
                      </p>} />
                </List>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
}`,...(v=(u=l.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const B=["ProfileOverview"];export{l as ProfileOverview,B as __namedExportsOrder,A as default};
