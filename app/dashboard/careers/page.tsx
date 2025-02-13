"use client";

import { useState } from "react";
import { useData } from "@/lib/hooks/useData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Plus, Edit, Trash } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { AddCareerModal } from "@/components/careers/add-career-modal";
import { EditCareerModal } from "@/components/careers/edit-career-modal";

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
  const { data: careers, loading, error, addItem, deleteItem, updateItem } = useData<Career>('/api/careers');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCareer, setEditingCareer] = useState<Career | null>(null);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Careers Management</h1>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Position
        </Button>
      </div>

      {careers.length === 0 ? (
        <Card className="p-8 text-center text-muted-foreground">
          No open positions found. Create your first position!
        </Card>
      ) : (
        <div className="grid gap-6">
          {careers.map((career) => (
            <Card key={career._id} className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{career.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {career.department} • {career.location}
                    </p>
                    <div className="flex gap-2">
                      <Badge>{career.type}</Badge>
                      <Badge variant="outline">{career.status}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
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
                    onClick={() => deleteItem(career._id)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <AddCareerModal 
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={addItem}
      />

      <EditCareerModal
        career={editingCareer}
        onClose={() => setEditingCareer(null)}
        onUpdate={updateItem}
      />
    </div>
  );
} 