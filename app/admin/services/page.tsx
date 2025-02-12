"use client";

import { useState, useEffect } from "react";
import { useAdminStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";
import { ServiceForm } from "@/components/admin/service-form";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function ServicesAdmin() {
  const { services, loading, error, fetchServices, deleteService } = useAdminStore();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleEdit = (service) => {
    setEditingService(service);
    setIsFormOpen(true);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Services</h1>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="w-4 h-4 mr-2" /> Add Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="p-6">
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit(service)}
              >
                <Edit className="w-4 h-4 mr-2" /> Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteService(service.id)}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {isFormOpen && (
        <ServiceForm
          service={editingService}
          onClose={() => {
            setIsFormOpen(false);
            setEditingService(null);
          }}
        />
      )}
    </div>
  );
}