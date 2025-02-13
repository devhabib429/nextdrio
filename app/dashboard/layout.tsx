"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Calendar,
    Briefcase,
    MessageSquare,
    Settings,
    ChevronLeft,
    ChevronRight,
    Rocket,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarItems = [
    {
        title: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "Events",
        href: "/dashboard/events",
        icon: Calendar,
        subItems: [
            { title: "All Events", href: "/dashboard/events" },
            { title: "Categories", href: "/dashboard/events/categories" }
        ]
    },
    {
        title: "Careers",
        href: "/dashboard/careers",
        icon: Briefcase,
        subItems: [
            { title: "Open Positions", href: "/dashboard/careers/positions" },
            { title: "Applications", href: "/dashboard/careers/applications" }
        ]
    },
    {
        title: "Inquiries",
        href: "/dashboard/inquiries",
        icon: MessageSquare,
        subItems: [
            { title: "All Inquiries", href: "/dashboard/inquiries" },
            { title: "Contact Requests", href: "/dashboard/inquiries/contact" },
            { title: "Project Requests", href: "/dashboard/inquiries/projects" }
        ]
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings
    }
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-background">
            <motion.aside
                initial={false}
                animate={{ width: collapsed ? "5rem" : "280px" }}
                className={cn(
                    "fixed top-0 left-0 z-40 h-screen border-r bg-card",
                    "transition-all duration-300"
                )}
            >
                {/* Sidebar header */}
                <div className="flex h-16 items-center justify-between px-4 border-b">
                    {!collapsed && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2"
                        >
                            <Rocket className="h-6 w-6" />
                            <span className="font-bold">NextDrio Admin</span>
                        </motion.div>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        {collapsed ? <ChevronRight /> : <ChevronLeft />}
                    </Button>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {sidebarItems.map((item) => (
                        <div key={item.title}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                                    "hover:bg-muted",
                                    pathname === item.href && "bg-primary/10 text-primary"
                                )}
                                onClick={() => item.subItems && setOpenSubMenu(openSubMenu === item.title ? null : item.title)}
                            >
                                <item.icon className="h-5 w-5" />
                                {!collapsed && (
                                    <>
                                        <span className="flex-1">{item.title}</span>
                                        {item.subItems && (
                                            <ChevronRight className={cn(
                                                "h-4 w-4 transition-transform",
                                                openSubMenu === item.title && "rotate-90"
                                            )} />
                                        )}
                                    </>
                                )}
                            </Link>
                            {!collapsed && item.subItems && openSubMenu === item.title && (
                                <div className="ml-8 mt-2 space-y-1">
                                    {item.subItems.map((subItem) => (
                                        <Link
                                            key={subItem.href}
                                            href={subItem.href}
                                            className={cn(
                                                "block px-3 py-2 rounded-lg text-sm transition-colors",
                                                "hover:bg-muted",
                                                pathname === subItem.href && "bg-primary/10 text-primary"
                                            )}
                                        >
                                            {subItem.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </motion.aside>

            {/* Main Content */}
            <main className={cn(
                "transition-all duration-300",
                collapsed ? "ml-20" : "ml-[280px]"
            )}>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
} 