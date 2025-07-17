// ./src/sanity/lib/client.ts
import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

import {apiVersion, dataset, projectId} from '@/lib/sanity/config'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = imageUrlBuilder(client)

export function urlFor(source: string) {
  return builder.image(source)
}