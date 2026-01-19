import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Avatar } from "../components/Avatar";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { List, ListItem } from "../components/List";
import { Icon } from "../components/Icon";

const meta: Meta = {
  title: "Patterns/Student Profile",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

export const ProfileOverview: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Dashboard", href: "#" },
          { label: "Students", href: "#" },
          { label: "Aarav Sharma" },
        ]}
      />

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
                {[
                  { subject: "Mathematics", score: "95/100", variant: "success" },
                  { subject: "Science", score: "88/100", variant: "info" },
                  { subject: "English", score: "82/100", variant: "primary" },
                ].map((item) => (
                  <div
                    key={item.subject}
                    className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2 text-sm"
                  >
                    <span className="text-neutral-700">{item.subject}</span>
                    <Badge variant={item.variant as "success" | "info" | "primary"} size="xs">
                      {item.score}
                    </Badge>
                  </div>
                ))}
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
                  <ListItem
                    leading={
                      <Avatar name="Mrs. Iyer" size="sm" />
                    }
                    title="Mrs. Iyer"
                    subtitle="Mathematics Teacher"
                    meta="2 days ago"
                    trailing={
                      <p className="text-sm text-neutral-600">
                        Great improvement in Mathematics this week.
                      </p>
                    }
                  />
                  <ListItem
                    leading={
                      <Avatar name="Mr. David" size="sm" />
                    }
                    title="Mr. David"
                    subtitle="Sports Coach"
                    meta="1 week ago"
                    trailing={
                      <p className="text-sm text-neutral-600">
                        Selected for the inter-school cricket tournament.
                      </p>
                    }
                  />
                  <ListItem
                    leading={
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-info-100 text-info-600">
                        <Icon name="info" size="sm" />
                      </div>
                    }
                    title="System Admin"
                    subtitle="Automated notice"
                    meta="2 weeks ago"
                    trailing={
                      <p className="text-sm text-neutral-600">
                        Fee reminder sent to guardian contact.
                      </p>
                    }
                  />
                </List>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
