"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ServiceForm({ service = null, onClose }) {
  const { addService, updateService } = useAdminStore();
  const [formData, setFormData] = useState(
    service || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      icon: "",
      features: [""],
      benefits: [""],
      technologies: [""],
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (service) {
      updateService(service.id, formData);
    } else {
      addService(formData);
    }
    onClose();
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayItem = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], ""],
    });
  };

  const removeArrayItem = (field, index) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: newArray });
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[90vh]">
        <DialogHeader>
          <DialogTitle>
            {service ? "Edit Service" : "Add New Service"}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-full pr-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Enter service title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Icon</Label>
                <Input
                  value={formData.icon}
                  onChange={(e) =>
                    setFormData({ ...formData, icon: e.target.value })
                  }
                  placeholder="Enter icon name (e.g., Cloud, Code2)"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Enter service description"
                className="min-h-[100px]"
                required
              />
            </div>

            {["features", "benefits", "technologies"].map((field) => (
              <div key={field} className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="capitalize text-lg">{field}</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addArrayItem(field)}
                  >
                    Add {field.slice(0, -1)}
                  </Button>
                </div>

                <div className="space-y-3">
                  {formData[field].map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={item}
                        onChange={(e) =>
                          handleArrayChange(field, index, e.target.value)
                        }
                        placeholder={`Enter ${field.slice(0, -1)}`}
                        className="flex-1"
                        required
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeArrayItem(field, index)}
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="sticky bottom-0 flex justify-end gap-2 pt-4 bg-background">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                {service ? "Update" : "Create"} Service
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}