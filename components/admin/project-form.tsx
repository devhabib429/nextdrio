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

export function ProjectForm({ project = null, onClose }) {
  const { addProject, updateProject } = useAdminStore();
  const [formData, setFormData] = useState(
    project || {
      id: crypto.randomUUID(),
      name: "",
      description: "",
      image: "",
      url: "#",
      category: "",
      tags: [""],
      metrics: {
        stars: 0,
        forks: 0,
        contributors: 0,
      },
      impact: [""],
      technologies: [""],
      link: "#",
      github: "#",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project) {
      updateProject(project.id, formData);
    } else {
      addProject(formData);
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

  const handleMetricsChange = (metric, value) => {
    setFormData({
      ...formData,
      metrics: {
        ...formData.metrics,
        [metric]: parseInt(value) || 0,
      },
    });
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {project ? "Edit Project" : "Add New Project"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Name</Label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label>Category</Label>
              <Input
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div>
            <Label>Description</Label>
            <Textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>

          <div>
            <Label>Image URL</Label>
            <Input
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              required
            />
          </div>

          <div>
            <Label>URL</Label>
            <Input
              value={formData.url}
              onChange={(e) =>
                setFormData({ ...formData, url: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Stars</Label>
              <Input
                type="number"
                value={formData.metrics.stars}
                onChange={(e) => handleMetricsChange("stars", e.target.value)}
                required
              />
            </div>
            <div>
              <Label>Forks</Label>
              <Input
                type="number"
                value={formData.metrics.forks}
                onChange={(e) => handleMetricsChange("forks", e.target.value)}
                required
              />
            </div>
            <div>
              <Label>Contributors</Label>
              <Input
                type="number"
                value={formData.metrics.contributors}
                onChange={(e) => handleMetricsChange("contributors", e.target.value)}
                required
              />
            </div>
          </div>

          {["tags", "impact", "technologies"].map((field) => (
            <div key={field}>
              <Label className="capitalize">{field}</Label>
              {formData[field].map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    value={item}
                    onChange={(e) =>
                      handleArrayChange(field, index, e.target.value)
                    }
                    required
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => removeArrayItem(field, index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => addArrayItem(field)}
              >
                Add {field.slice(0, -1)}
              </Button>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>GitHub URL</Label>
              <Input
                value={formData.github}
                onChange={(e) =>
                  setFormData({ ...formData, github: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label>Live Demo URL</Label>
              <Input
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {project ? "Update" : "Create"} Project
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}