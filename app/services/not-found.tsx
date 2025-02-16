import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <p className="text-muted-foreground">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/services">
            View All Services
          </Link>
        </Button>
      </div>
    </div>
  );
} 