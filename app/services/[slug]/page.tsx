import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import DevOpsPage from '../devops/page';
import ERPNextPage from '../erpnext/page';

// Define valid services and their metadata
const services = {
  devops: {
    title: "DevOps Solutions",
    description: "Streamline your development and deployment processes with modern DevOps practices",
    component: DevOpsPage
  },
  erpnext: {
    title: "ERPNext Solutions",
    description: "Comprehensive business management and automation solutions",
    component: ERPNextPage
  }
};

// Helper function to get icon name
const getIconName = (icon: any) => {
  return (icon?.render?.displayName || icon?.displayName || 'Trophy') as string;
};

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services[resolvedParams.slug as keyof typeof services];
  return service ? {
    title: `${service.title} - NextDrio`,
    description: service.description
  } : {
    title: 'Services - NextDrio',
    description: 'Our services'
  };
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = services[resolvedParams.slug as keyof typeof services];

  if (!service) {
    redirect('/services');
  }

  const ServiceComponent = service.component;
  return <ServiceComponent />;
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}