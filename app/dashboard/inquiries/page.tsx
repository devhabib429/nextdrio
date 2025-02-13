"use client";

import { useState } from "react";
import { useData } from "@/lib/hooks/useData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Trash, Building2, Mail, Clock } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { DeleteConfirmDialog } from "@/components/ui/delete-confirm-dialog";
import { format } from "date-fns";

interface Inquiry {
  _id: string;
  type: 'contact' | 'project';
  name: string;
  email: string;
  company: string;
  message: string;
  service?: string;
  status: 'new' | 'inProgress' | 'completed';
  createdAt: string;
}

export default function InquiriesPage() {
  const { data: inquiries, loading, error, deleteItem } = useData<Inquiry>('/api/inquiries');
  const [deletingInquiry, setDeletingInquiry] = useState<Inquiry | null>(null);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  const handleDelete = async () => {
    if (!deletingInquiry) return;
    await deleteItem(deletingInquiry._id);
    setDeletingInquiry(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'default';
      case 'inProgress': return 'warning';
      case 'completed': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Inquiries</h1>
        <p className="text-muted-foreground mt-2">
          Manage contact and project inquiries
        </p>
      </div>

      {inquiries.length === 0 ? (
        <Card className="p-8 text-center text-muted-foreground">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-lg font-medium">No inquiries yet</p>
        </Card>
      ) : (
        <div className="grid gap-6">
          {inquiries.map((inquiry) => (
            <Card key={inquiry._id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg h-fit">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{inquiry.name}</h3>
                      <Badge>{inquiry.type}</Badge>
                      <Badge variant={getStatusColor(inquiry.status) as any}>
                        {inquiry.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 max-w-2xl">
                      {inquiry.message}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${inquiry.email}`} className="hover:text-primary">
                          {inquiry.email}
                        </a>
                      </div>
                      {inquiry.company && (
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {inquiry.company}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {format(new Date(inquiry.createdAt), 'PPp')}
                      </div>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-destructive"
                  onClick={() => setDeletingInquiry(inquiry)}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
      
      <DeleteConfirmDialog
        open={!!deletingInquiry}
        onClose={() => setDeletingInquiry(null)}
        onConfirm={handleDelete}
        title="Delete Inquiry"
        description="Are you sure you want to delete this inquiry? This action cannot be undone."
      />
    </div>
  );
} 