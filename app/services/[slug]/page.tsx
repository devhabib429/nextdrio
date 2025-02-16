import { Service } from "@/types";
import { sampleServices } from "@/lib/data";
import ServiceContent from "@/components/service-content";

export async function generateStaticParams() {
  return sampleServices.map((service) => ({
    slug: service.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Helper function to get icon name
const getIconName = (icon: any) => {
  return (icon?.render?.displayName || icon?.displayName || 'Trophy') as string;
};

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = sampleServices.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Service not found</h2>
          <p className="text-muted-foreground">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  const serializedService = {
    ...service,
    metrics: service.metrics.map(m => ({ ...m, icon: getIconName(m.icon) })),
    process: service.process.map(p => ({ ...p, icon: getIconName(p.icon) })),
    expertise: service.expertise.map(e => ({ ...e, icon: getIconName(e.icon) }))
  };

  return (
    <main className="relative w-full min-h-screen">
      <ServiceContent serviceData={serializedService} />
    </main>
  );
}