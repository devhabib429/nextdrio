"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Server, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <div className="space-y-6">
          <h1 className="text-4xl font-bold sm:text-6xl">
            Modern Software Solutions for the Digital Age
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Transform your business with cutting-edge DevOps, Full Stack Development,
            UI/UX Design, and ERPNext solutions. We build scalable, secure, and efficient
            systems that drive growth.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/services">
              Explore Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center space-y-4 p-6 border rounded-lg"
          >
            <Server className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">DevOps</h3>
            <p className="text-muted-foreground text-center">
              Streamline your development and operations with modern DevOps practices
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center space-y-4 p-6 border rounded-lg"
          >
            <Code2 className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">Full Stack Development</h3>
            <p className="text-muted-foreground text-center">
              End-to-end solutions using cutting-edge technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center space-y-4 p-6 border rounded-lg"
          >
            <Database className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">ERPNext</h3>
            <p className="text-muted-foreground text-center">
              Comprehensive business management solutions with ERPNext
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center space-y-4 p-6 border rounded-lg"
          >
            <Palette className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p className="text-muted-foreground text-center">
              Create exceptional user experiences with modern design
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}