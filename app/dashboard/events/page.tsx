"use client";

import { useState } from "react";
import { useData } from "@/lib/hooks/useData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Edit, Trash, MapPin, Users, Link as LinkIcon } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { DeleteConfirmDialog } from "@/components/ui/delete-confirm-dialog";
import { format } from "date-fns";

interface Event {
  _id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  location: string;
  speakers: string[];
  link: string;
}

export default function EventsPage() {
  const { data: events, loading, error, deleteItem } = useData<Event>('/api/events');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [deletingEvent, setDeletingEvent] = useState<Event | null>(null);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  const handleDelete = async () => {
    if (!deletingEvent) return;
    await deleteItem(deletingEvent._id);
    setDeletingEvent(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-muted-foreground mt-2">
            Manage your upcoming and past events
          </p>
        </div>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      {events.length === 0 ? (
        <Card className="p-8 text-center text-muted-foreground">
          <Calendar className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-lg font-medium mb-2">No events found</p>
          <p className="text-sm text-muted-foreground mb-4">
            Get started by creating your first event
          </p>
          <Button onClick={() => setShowAddModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </Card>
      ) : (
        <div className="grid gap-6">
          {events.map((event) => (
            <Card key={event._id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg h-fit">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">{event.category}</Badge>
                      <Badge variant="outline">
                        {format(new Date(event.date), 'PPP')}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 max-w-2xl">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      {event.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      )}
                      {event.speakers.length > 0 && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.speakers.join(", ")}
                        </div>
                      )}
                      {event.link && (
                        <div className="flex items-center gap-1">
                          <LinkIcon className="w-4 h-4" />
                          <a 
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Event Link
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setEditingEvent(event)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-destructive"
                    onClick={() => setDeletingEvent(event)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Add/Edit Event Modal will be added here */}
      
      <DeleteConfirmDialog
        open={!!deletingEvent}
        onClose={() => setDeletingEvent(null)}
        onConfirm={handleDelete}
        title="Delete Event"
        description="Are you sure you want to delete this event? This action cannot be undone."
      />
    </div>
  );
} 