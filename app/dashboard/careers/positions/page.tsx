"use client";

import { useState } from "react";
import { useData } from "@/lib/hooks/useData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Plus, Edit, Trash, MapPin, Clock } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { DeleteConfirmDialog } from "@/components/ui/delete-confirm-dialog";

interface Career {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  status: 'open' | 'closed';
}

export default function CareersPage() {
  const { data: careers, loading, error, deleteItem } = useData<Career>('/api/careers');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCareer, setEditingCareer] = useState<Career | null>(null);
  const [deletingCareer, setDeletingCareer] = useState<Career | null>(null);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  const handleDelete = async () => {
    if (!deletingCareer) return;
    await deleteItem(deletingCareer._id);
    setDeletingCareer(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Open Positions</h1>
          <p className="text-muted-foreground mt-2">
            Manage job openings and career opportunities
          </p>
        </div>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Position
        </Button>
      </div>

      {careers.length === 0 ? (
        <Card className="p-8 text-center text-muted-foreground">
          <Briefcase className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-lg font-medium mb-2">No open positions</p>
          <p className="text-sm text-muted-foreground mb-4">
            Get started by adding your first job opening
          </p>
          <Button onClick={() => setShowAddModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Position
          </Button>
        </Card>
      ) : (
        <div className="grid gap-6">
          {careers.map((career) => (
            <Card key={career._id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg h-fit">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{career.title}</h3>
                      <Badge variant={career.status === 'open' ? 'default' : 'secondary'}>
                        {career.status}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline">{career.type}</Badge>
                      <Badge variant="outline">{career.department}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 max-w-2xl">
                      {career.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {career.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {career.experience}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setEditingCareer(career)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-destructive"
                    onClick={() => setDeletingCareer(career)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Add/Edit Career Modal will be added here */}
      
      <DeleteConfirmDialog
        open={!!deletingCareer}
        onClose={() => setDeletingCareer(null)}
        onConfirm={handleDelete}
        title="Delete Position"
        description="Are you sure you want to delete this position? This action cannot be undone."
      />
    </div>
  );
} 