import { Service } from "@/types";
import { sampleServices } from "@/lib/data";
import ServiceContent from "@/components/service-content";

export async function generateStaticParams() {
  return sampleServices.map((service) => ({
    slug: service.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const service = sampleServices.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceContent serviceData={JSON.parse(JSON.stringify(service))} />;
}