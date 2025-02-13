"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Mail, Building2, Calendar, FileText, Trash } from "lucide-react";

const applications = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    position: "Senior Full Stack Developer",
    company: "Previous Tech Inc",
    experience: "7 years",
    status: "under_review",
    appliedDate: "2024-03-15"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    position: "DevOps Engineer",
    company: "Cloud Solutions Ltd",
    experience: "5 years",
    status: "shortlisted",
    appliedDate: "2024-03-14"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    position: "Senior Full Stack Developer",
    company: "Web Corp",
    experience: "6 years",
    status: "rejected",
    appliedDate: "2024-03-13"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'under_review': return 'default';
    case 'shortlisted': return 'success';
    case 'rejected': return 'destructive';
    default: return 'secondary';
  }
};

const getStatusText = (status: string) => {
  return status.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

export default function ApplicationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Applications</h1>
        <p className="text-muted-foreground mt-2">
          Review and manage job applications
        </p>
      </div>

      <div className="grid gap-6">
        {applications.map((application) => (
          <Card key={application.id} className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg h-fit">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{application.name}</h3>
                    <Badge variant={getStatusColor(application.status)}>
                      {getStatusText(application.status)}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Applied for: {application.position}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {application.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {application.company}
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Experience: {application.experience}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Applied: {new Date(application.appliedDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col gap-2">
                <Button variant="ghost" size="icon" className="text-destructive">
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 