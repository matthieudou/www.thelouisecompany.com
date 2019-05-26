// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import altImage from './altImage'
import meta from './objects/meta'
import { localeString, localeText, localeSlug, localeBlock } from './localizedContent'

import test from './test'

import generalInformations from './config/generalInformations'
import sharing from './config/sharing'
import contact from './config/contact'

import homePage from './home/page'

import productionPage from './production/page'
import productionItem from './production/item'

import influencerPage from './influencer/page'
import influencerItem from './influencer/item'

import eventPage from './events/page'
import eventItem from './events/item'

import charityPage from './charity/page'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // PRIMARY TYPES
    blockContent,
    altImage,
    localeString,
    localeText,
    localeSlug,
    localeBlock,
    meta,

    // LAYOUT TYPES
    test,

    generalInformations,
    sharing,
    contact,

    homePage,

    productionPage,
    productionItem,

    influencerPage,
    influencerItem,

    eventPage,
    eventItem,

    charityPage
  ])
})
