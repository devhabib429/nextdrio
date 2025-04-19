"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  Building2, 
  Briefcase, 
  Trash, 
  ExternalLink, 
  MessageSquare
} from "lucide-react";

type StatusVariant = "default" | "secondary" | "destructive" | "outline";

const projectRequests = [
  {
    id: 1,
    name: "Alex Martinez",
    email: "alex@enterprise.com",
    company: "Enterprise Solutions",
    serviceInterested: "Web Development",
    message: "Looking to migrate our legacy systems to AWS. Need comprehensive solution including planning, execution, and post-migration support.",
    status: "new",
    createdAt: "2024-03-18T11:45:00Z"
  },
  {
    id: 2,
    name: "Sarah Lee",
    email: "sarah@fintech.co",
    company: "FinTech Solutions",
    serviceInterested: "DevOps Implementation",
    message: "Need help setting up robust DevOps practices and tools. Focus on automation and continuous deployment.",
    status: "in_progress",
    createdAt: "2024-03-17T15:30:00Z"
  }
];

const getStatusColor = (status: string): StatusVariant => {
  switch (status) {
    case 'new': return 'default';
    case 'in_progress': return 'secondary';
    case 'completed': return 'outline';
    default: return 'destructive';
  }
};

const getStatusText = (status: string): string => {
  switch (status) {
    case 'new': return 'New';
    case 'in_progress': return 'In Progress';
    case 'completed': return 'Completed';
    default: return status;
  }
};

export default function ProjectRequestsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Project Requests</h1>
        <p className="text-muted-foreground mt-2">
          Manage and track project inquiries
        </p>
      </div>

      <div className="grid gap-6">
        {projectRequests.map((request) => (
          <Card key={request.id} className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg h-fit">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{request.name}</h3>
                    <Badge variant={getStatusColor(request.status)}>
                      {getStatusText(request.status)}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${request.email}`} className="hover:text-primary">
                        {request.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {request.company}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium mb-1">Service Interested In</div>
                      <p className="text-muted-foreground">{request.serviceInterested}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium mb-1">
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </div>
                      <p className="text-muted-foreground">{request.message}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col gap-2 shrink-0">
                <Button variant="outline" size="icon">
                  <ExternalLink className="w-4 h-4" />
                </Button>
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