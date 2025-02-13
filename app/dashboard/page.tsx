"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Calendar,
  Briefcase,
  MessageSquare,
  ArrowRight,
  MapPin,
  Users,
} from "lucide-react";

// Updated mock data to match public forms
const summaryData = {
  events: {
    total: 4,
    upcoming: 2,
    recentEvents: [
      {
        title: "NextJS Workshop 2024",
        date: "2024-04-15",
        category: "Workshop",
        location: "Virtual",
        speakers: ["John Doe", "Jane Smith"]
      },
      {
        title: "DevOps Summit",
        date: "2024-05-20",
        category: "Conference",
        location: "New York",
        speakers: ["Mike Johnson", "Sarah Wilson"]
      }
    ]
  },
  careers: {
    openings: [
      {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        experience: "5+ years"
      },
      {
        title: "DevOps Engineer",
        department: "Operations",
        location: "Hybrid",
        type: "Full-time",
        experience: "3+ years"
      }
    ],
    totalApplications: 8
  },
  inquiries: {
    contact: {
      total: 5,
      new: 2,
      recent: [
        {
          name: "John Smith",
          email: "john@example.com",
          phone: "+1234567890",
          subject: "Service Inquiry",
          message: "Interested in your services",
          status: "new"
        }
      ]
    },
    projects: {
      total: 3,
      new: 1,
      recent: [
        {
          name: "Sarah Johnson",
          email: "sarah@company.com",
          phone: "+1987654321",
          companyName: "Tech Solutions Inc",
          projectType: "Cloud Migration",
          projectDescription: "Need help with AWS migration",
          budget: "$50,000 - $100,000",
          timeline: "6 months",
          additionalInfo: "Urgent requirement",
          status: "new"
        }
      ]
    }
  }
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid gap-6">
        {/* Events Summary */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Events</h2>
            </div>
            <Link 
              href="/dashboard/events"
              className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Events</p>
                  <p className="text-2xl font-bold">{summaryData.events.total}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Upcoming</p>
                  <p className="text-2xl font-bold text-primary">{summaryData.events.upcoming}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Recent Events</p>
              <div className="space-y-3">
                {summaryData.events.recentEvents.map((event, index) => (
                  <div key={index} className="border-b last:border-0 pb-2">
                    <p className="font-medium">{event.title}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {event.speakers.length} speakers
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Careers Summary */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Careers</h2>
            </div>
            <Link 
              href="/dashboard/careers"
              className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Latest Openings</p>
              <div className="space-y-2">
                {summaryData.careers.openings.map((job, index) => (
                  <div key={index} className="border-b pb-2 last:border-0">
                    <p className="font-medium">{job.title}</p>
                    <div className="flex gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline">{job.type}</Badge>
                      <Badge variant="outline">{job.location}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Applications</p>
              <p className="text-2xl font-bold">{summaryData.careers.totalApplications}</p>
            </div>
          </div>
        </Card>

        {/* Inquiries Summary */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Inquiries</h2>
            </div>
            <Link 
              href="/dashboard/inquiries"
              className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Contact Requests</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">{summaryData.inquiries.contact.total}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">New</p>
                  <p className="text-2xl font-bold text-primary">{summaryData.inquiries.contact.new}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Project Requests</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">{summaryData.inquiries.projects.total}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">New</p>
                  <p className="text-2xl font-bold text-primary">{summaryData.inquiries.projects.new}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 