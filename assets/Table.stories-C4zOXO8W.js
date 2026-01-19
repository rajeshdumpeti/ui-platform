import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as u,N as o,O as n,U as s,V as m,W as l,a as b,B as r,P as T}from"./Alert-CBSgC9Zi.js";import"./index-yBjzXJbu.js";import"./index--qcDGAq6.js";const p={title:"Components/Table",component:u,parameters:{layout:"padded"},tags:["autodocs"]},C=[{name:"Aarav Patel",id:"#2023001",className:"Class 10-A",guardian:"Rajesh Patel",contact:"+91 98765 43210",status:"Active",statusVariant:"success"},{name:"Diya Sharma",id:"#2023002",className:"Class 9-B",guardian:"Anjali Sharma",contact:"+91 91234 56789",status:"Active",statusVariant:"success"},{name:"Rohan Gupta",id:"#2023015",className:"Class 10-A",guardian:"Suresh Gupta",contact:"+91 99887 76655",status:"Inactive",statusVariant:"warning"},{name:"Ananya Singh",id:"#2023089",className:"Class 8-C",guardian:"Priya Singh",contact:"+91 88776 65544",status:"Active",statusVariant:"success"},{name:"Kabir Mehta",id:"#2023042",className:"Class 11-B",guardian:"Vikram Mehta",contact:"+91 77665 54433",status:"Active",statusVariant:"success"}],t={render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsxs(u,{children:[a.jsx(o,{children:a.jsxs(n,{children:[a.jsx(s,{children:"Avatar"}),a.jsx(s,{children:"Full Name"}),a.jsx(s,{children:"Student ID"}),a.jsx(s,{children:"Class"}),a.jsx(s,{children:"Guardian"}),a.jsx(s,{children:"Contact"}),a.jsx(s,{children:"Status"})]})}),a.jsx(m,{children:C.map(e=>a.jsxs(n,{children:[a.jsx(l,{children:a.jsx(b,{name:e.name})}),a.jsx(l,{className:"font-medium text-neutral-900",children:e.name}),a.jsx(l,{muted:!0,children:e.id}),a.jsx(l,{children:a.jsx(r,{variant:"info",size:"xs",children:e.className})}),a.jsx(l,{children:e.guardian}),a.jsx(l,{muted:!0,children:e.contact}),a.jsx(l,{children:a.jsx(r,{variant:e.statusVariant,dot:!0,children:e.status})})]},e.id))})]}),a.jsxs("div",{className:"flex items-center justify-between text-sm text-neutral-600",children:[a.jsx("span",{children:"Showing 1 to 5 of 245"}),a.jsx(T,{currentPage:1,totalPages:10})]})]})};var d,i,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
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
          {students.map(student => <TableRow key={student.id}>
              <TableCell>
                <Avatar name={student.name} />
              </TableCell>
              <TableCell className="font-medium text-neutral-900">
                {student.name}
              </TableCell>
              <TableCell muted>{student.id}</TableCell>
              <TableCell>
                <Badge variant="info" size="xs">
                  {student.className}
                </Badge>
              </TableCell>
              <TableCell>{student.guardian}</TableCell>
              <TableCell muted>{student.contact}</TableCell>
              <TableCell>
                <Badge variant={student.statusVariant as "success" | "warning"} dot>
                  {student.status}
                </Badge>
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between text-sm text-neutral-600">
        <span>Showing 1 to 5 of 245</span>
        <Pagination currentPage={1} totalPages={10} />
      </div>
    </div>
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const v=["StudentDirectory"];export{t as StudentDirectory,v as __namedExportsOrder,p as default};
