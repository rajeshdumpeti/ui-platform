import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{b as o,K as u,I as t,z as b,h as x,T as h,N as T,O as r,U as l,V as j,W as s,a as p,B as d,P as C}from"./Alert-5RVefPd9.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const w={title:"Patterns/Student Directory",parameters:{layout:"padded"}},v=[{name:"Aarav Patel",id:"#2023001",className:"Class 10-A",guardian:"Rajesh Patel",contact:"+91 98765 43210",status:"Active",statusVariant:"success"},{name:"Diya Sharma",id:"#2023002",className:"Class 9-B",guardian:"Anjali Sharma",contact:"+91 91234 56789",status:"Active",statusVariant:"success"},{name:"Rohan Gupta",id:"#2023015",className:"Class 10-A",guardian:"Suresh Gupta",contact:"+91 99887 76655",status:"Inactive",statusVariant:"warning"}],n={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(o,{items:[{label:"Home",href:"#"},{label:"Students",href:"#"},{label:"All Students"}]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h1",{className:"text-display-medium text-neutral-900",children:"Student Directory"}),e.jsx("p",{className:"text-body-medium text-neutral-500",children:"View and manage student records across all classes."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx("div",{className:"flex-1 min-w-[16rem]",children:e.jsx(u,{fullWidth:!0,leftIcon:e.jsx(t,{name:"search",size:"sm"}),placeholder:"Search by name or admission number..."})}),e.jsx(b,{options:[{label:"All Classes",value:"all"},{label:"Class 10-A",value:"10a"},{label:"Class 9-B",value:"9b"}]}),e.jsx(x,{variant:"secondary",leftIcon:e.jsx(t,{name:"filter_list",size:"sm"}),children:"Filters"})]}),e.jsxs(h,{children:[e.jsx(T,{children:e.jsxs(r,{children:[e.jsx(l,{children:"Avatar"}),e.jsx(l,{children:"Full Name"}),e.jsx(l,{children:"Student ID"}),e.jsx(l,{children:"Class"}),e.jsx(l,{children:"Guardian"}),e.jsx(l,{children:"Contact"}),e.jsx(l,{children:"Status"})]})}),e.jsx(j,{children:v.map(a=>e.jsxs(r,{children:[e.jsx(s,{children:e.jsx(p,{name:a.name})}),e.jsx(s,{className:"font-medium text-neutral-900",children:a.name}),e.jsx(s,{muted:!0,children:a.id}),e.jsx(s,{children:e.jsx(d,{variant:"info",size:"xs",children:a.className})}),e.jsx(s,{children:a.guardian}),e.jsx(s,{muted:!0,children:a.contact}),e.jsx(s,{children:e.jsx(d,{variant:a.statusVariant,dot:!0,children:a.status})})]},a.id))})]}),e.jsxs("div",{className:"flex items-center justify-between text-sm text-neutral-600",children:[e.jsx("span",{children:"Rows per page: 10"}),e.jsx(C,{currentPage:1,totalPages:10})]})]})};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <Breadcrumbs items={[{
      label: "Home",
      href: "#"
    }, {
      label: "Students",
      href: "#"
    }, {
      label: "All Students"
    }]} />

      <div className="space-y-2">
        <h1 className="text-display-medium text-neutral-900">
          Student Directory
        </h1>
        <p className="text-body-medium text-neutral-500">
          View and manage student records across all classes.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[16rem]">
          <Input fullWidth leftIcon={<Icon name="search" size="sm" />} placeholder="Search by name or admission number..." />
        </div>
        <Select options={[{
        label: "All Classes",
        value: "all"
      }, {
        label: "Class 10-A",
        value: "10a"
      }, {
        label: "Class 9-B",
        value: "9b"
      }]} />
        <Button variant="secondary" leftIcon={<Icon name="filter_list" size="sm" />}>
          Filters
        </Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Avatar</TableHeaderCell>
            <TableHeaderCell>Full Name</TableHeaderCell>
            <TableHeaderCell>Student ID</TableHeaderCell>
            <TableHeaderCell>Class</TableHeaderCell>
            <TableHeaderCell>Guardian</TableHeaderCell>
            <TableHeaderCell>Contact</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id}>
              <TableCell>
                <Avatar name={row.name} />
              </TableCell>
              <TableCell className="font-medium text-neutral-900">
                {row.name}
              </TableCell>
              <TableCell muted>{row.id}</TableCell>
              <TableCell>
                <Badge variant="info" size="xs">
                  {row.className}
                </Badge>
              </TableCell>
              <TableCell>{row.guardian}</TableCell>
              <TableCell muted>{row.contact}</TableCell>
              <TableCell>
                <Badge variant={row.statusVariant as "success" | "warning"} dot>
                  {row.status}
                </Badge>
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between text-sm text-neutral-600">
        <span>Rows per page: 10</span>
        <Pagination currentPage={1} totalPages={10} />
      </div>
    </div>
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const H=["DirectoryLayout"];export{n as DirectoryLayout,H as __namedExportsOrder,w as default};
