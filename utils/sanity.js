const sanityClient = require('@sanity/client')
require('dotenv').config()

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  token: '',
  useCdn: process.env.NODE_ENV === 'production'
})
