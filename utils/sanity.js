const sanityClient = require('@sanity/client')
require('dotenv').config()

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.NODE_ENV || 'production',
  token: '',
  useCdn: process.env.NODE_ENV === 'production'
})
