"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, Trash, ExternalLink, FileText } from "lucide-react";

const contactRequests = [
  {
    id: 1,
    name: "David Wilson",
    email: "david@techcorp.com",
    phone: "+1234567890",
    subject: "DevOps Consultation",
    message: "Looking to improve our deployment pipeline and infrastructure management.",
    status: "new",
    createdAt: "2024-03-18T10:30:00Z"
  },
  {
    id: 2,
    name: "Emma Thompson",
    email: "emma@innovate.io",
    phone: "+1987654321",
    subject: "Cloud Migration Services",
    message: "Need help migrating our applications to AWS cloud infrastructure.",
    status: "in_progress",
    createdAt: "2024-03-17T14:20:00Z"
  }
];

type StatusVariant = "default" | "secondary" | "destructive" | "outline"

const getStatusColor = (status: string): StatusVariant => {
  switch (status) {
    case 'new': return 'default'
    case 'in_progress': return 'secondary'
    case 'completed': return 'outline'
    default: return 'destructive'
  }
}

const getStatusText = (status: string): string => {
  switch (status) {
    case 'new': return 'New'
    case 'in_progress': return 'In Progress'
    case 'completed': return 'Completed'
    default: return status
  }
}

export default function ContactRequestsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Contact Requests</h1>
        <p className="text-muted-foreground mt-2">
          Manage and respond to contact inquiries
        </p>
      </div>

      <div className="grid gap-6">
        {contactRequests.map((request) => (
          <Card key={request.id} className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg h-fit">
                  <MessageSquare className="w-6 h-6 text-primary" />
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
                      <Phone className="w-4 h-4" />
                      {request.phone}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-1">Subject</div>
                    <p className="text-muted-foreground">{request.subject}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Message</div>
                    <p className="text-muted-foreground">{request.message}</p>
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