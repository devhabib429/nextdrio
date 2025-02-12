"use client";

import { useAdminStore } from "@/lib/store";
import { Card } from "@/components/ui/card";
import { 
  BarChart3, 
  Users, 
  Calendar, 
  Briefcase,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export default function AdminDashboard() {
  const { services, projects, events } = useAdminStore();

  const stats = [
    {
      title: "Total Services",
      value: services.length.toString(),
      change: "+2.5%",
      trend: "up",
      icon: Briefcase,
    },
    {
      title: "Total Projects",
      value: projects.length.toString(),
      change: "+12.5%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Total Events",
      value: events.length.toString(),
      change: "-3.2%",
      trend: "down",
      icon: Calendar,
    },
    {
      title: "Total Views",
      value: "1,234",
      change: "+8.1%",
      trend: "up",
      icon: BarChart3,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              {stat.trend === "up" ? (
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  {stat.change}
                </div>
              ) : (
                <div className="flex items-center text-red-500">
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                  {stat.change}
                </div>
              )}
            </div>
            <h2 className="text-2xl font-bold mb-1">{stat.value}</h2>
            <p className="text-muted-foreground">{stat.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}