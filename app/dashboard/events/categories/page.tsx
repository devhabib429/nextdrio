"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Workshop",
    description: "Interactive learning sessions",
    count: 5,
    color: "blue"
  },
  {
    id: 2,
    name: "Conference",
    description: "Large-scale professional events",
    count: 3,
    color: "green"
  },
  {
    id: 3,
    name: "Seminar",
    description: "Educational presentations",
    count: 4,
    color: "purple"
  },
  {
    id: 4,
    name: "Webinar",
    description: "Online educational events",
    count: 6,
    color: "orange"
  }
];

export default function CategoriesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Event Categories</h1>
          <p className="text-muted-foreground mt-2">
            Manage and organize your event categories
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <Badge variant="secondary">
                  {category.count} {category.count === 1 ? 'event' : 'events'}
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Edit className="w-4 h-4" />
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