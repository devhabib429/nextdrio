import { getServices } from '@/sanity/sanity-utils'
import React from 'react'

interface Service {
  slug: { current: string }
}

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service: Service) => ({
    slug: service.slug.current
  }))
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 