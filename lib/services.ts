import { Service } from "@/types";
import { sampleServices } from "./data";

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return sampleServices.find(service => service.slug === slug) || null;
}

export async function getAllServices(): Promise<Service[]> {
  return sampleServices;
} 