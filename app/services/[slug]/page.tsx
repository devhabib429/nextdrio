import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { Service } from "@/types";
import { sampleServices } from "@/lib/data";
import ServiceContent from "@/components/service-content";

// Define valid services and their metadata
const services = {
  devops: {
    title: "DevOps Solutions",
    description: "Streamline your development and deployment processes with modern DevOps practices"
  },
  erpnext: {
    title: "ERPNext Solutions",
    description: "Comprehensive business management and automation solutions"
  }
};

// Helper function to get icon name
const getIconName = (icon: any) => {
  return (icon?.render?.displayName || icon?.displayName || 'Trophy') as string;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services];
  return service ? {
    title: `${service.title} - NextDrio`,
    description: service.description
  } : {
    title: 'Services - NextDrio',
    description: 'Our services'
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const validSlugs = Object.keys(services);
  const service = sampleServices.find(s => s.slug === params.slug);

  if (!validSlugs.includes(params.slug)) {
    redirect('/services');
  }

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

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}