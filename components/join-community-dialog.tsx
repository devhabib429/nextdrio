"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Twitter, 
  MessageCircle, 
  Send, 
  X, 
  Globe,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const communityPlatforms = [
  {
    name: "X (Twitter)",
    icon: Twitter,
    description: "Follow us for latest updates and tech discussions",
    link: "https://twitter.com/yourhandle",
    color: "hover:bg-black/10 hover:text-black",
    followers: "10K+"
  },
  {
    name: "Discord",
    icon: MessageCircle,
    description: "Join our active developer community",
    link: "https://discord.gg/yourinvite",
    color: "hover:bg-indigo-500/10 hover:text-indigo-500",
    members: "5K+"
  },
  {
    name: "Telegram",
    icon: Send,
    description: "Get instant updates and connect with members",
    link: "https://t.me/yourchannel",
    color: "hover:bg-blue-500/10 hover:text-blue-500",
    members: "3K+"
  },
  {
    name: "GitHub",
    icon: Github,
    description: "Collaborate on open source projects",
    link: "https://github.com/yourorg",
    color: "hover:bg-gray-900/10 hover:text-gray-900",
    stars: "1K+"
  }
];

interface JoinCommunityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function JoinCommunityDialog({ 
  open, 
  onOpenChange 
}: JoinCommunityDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            Join Our Community
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Connect with us across these platforms and become part of our growing community
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 mt-6">
          {communityPlatforms.map((platform) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`p-4 rounded-xl border group transition-all duration-300 ${platform.color}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-background">
                    <platform.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {platform.description}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a 
                    href={platform.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Join <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              {(platform.followers || platform.members || platform.stars) && (
                <div className="mt-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    {platform.followers || platform.members || platform.stars}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
} 