"use client";

import { useState, useEffect } from "react";
import { useAdminStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Edit, Trash2, Calendar, MapPin, Clock } from "lucide-react";
import { EventForm } from "@/components/admin/event-form";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function EventsAdmin() {
  const { events, loading, error, fetchEvents, deleteEvent } = useAdminStore();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleEdit = (event: { id: string; title: string; date: string; time: string; location: string; description: string; topics: string[] }) => {
    setEditingEvent(event);
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">Manage Events</h1>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="w-4 h-4 mr-2" /> Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="p-6">
            <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                {event.date}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                {event.time}
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                {event.location}
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{event.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {event.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {topic}
                </span>
              ))}
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit(event)}
              >
                <Edit className="w-4 h-4 mr-2" /> Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteEvent(event.id)}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {isFormOpen && (
        <EventForm
          event={editingEvent}
          onClose={() => {
            setIsFormOpen(false);
            setEditingEvent(null);
          }}
        />
      )}
    </div>
  );
}