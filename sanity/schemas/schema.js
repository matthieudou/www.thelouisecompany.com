// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import altImage from './altImage'
import { localeString, localeText, localeSlug } from './localizedContent'

import test from './test'
import websiteConfig from './config/websiteConfig'
import homepageContent from './homepage/index'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // PRIMARY TYPES
    blockContent,
    localeString,
    localeText,
    localeSlug,
    altImage,

    // LAYOUT TYPES
    test,
    websiteConfig,
    homepageContent
  ])
})
