export async function getService(slug: string) {
  const service = await client.fetch(`
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      _createdAt,
      name,
      slug,
      // Add other fields you need from your Sanity schema
    }
  `, { slug })
  
  return service
}

export async function getServices() {
  const services = await client.fetch(`
    *[_type == "service"] {
      _id,
      _createdAt,
      name,
      slug,
      // Add other fields you need
    }
  `)
  
  return services
} 