const sanityClient = require('@sanity/client')
require('dotenv').config()

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.NODE_ENV,
  token: '',
  useCdn: process.env.NODE_ENV === 'production'
})

const generateRoutesFromSlug = (string, slugObjects) => {
  return slugObjects.map(item => `${string}${item.slug}`)
}

const xQuery = `
*[_type == 'movie' && releaseYear >= 1979]
`

export const generatedRoutes = () => {
  const promises = [
    client.fetch(xQuery)
  ]

  return Promise.all(promises)
    .then(([xResponse]) => {
      return [
        ...generateRoutesFromSlug('/x/', xResponse)
      ]
    })
}
