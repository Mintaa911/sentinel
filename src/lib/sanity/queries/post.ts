export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "author": author->{
      name,
      "image": image.asset->url
    },
    publishedAt,
    "mainImage": mainImage.asset->url,
    categories[]->{
      _id,
      title
    },
    body
  }
`

export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    "author": author->name,
    publishedAt,
    "mainImage": mainImage.asset->url,
    categories[]->{
      _id,
      title
    },
    body,
    excerpt
  }
`