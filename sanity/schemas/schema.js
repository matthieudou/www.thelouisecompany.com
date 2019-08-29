// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import altImage from './altImage'
import video from './video'
import meta from './objects/meta'
import { localeString, localeText, localeSlug, localeBlock, localeArray } from './localizedContent'

import generalInformations from './config/generalInformations'
import sharing from './config/sharing'
import contact from './config/contact'
import socials from './config/socials'
import activePages from './config/activePages'

import homePage from './home/page'
import homeHero from './home/hero'
import homeServices from './home/services'
import homeCitation from './home/citation'
import homeClients from './home/clients'
import homeWhoWeAre from './home/whoWeAre'
import homeActuality from './home/actuality'

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
    video,
    localeString,
    localeText,
    localeSlug,
    localeBlock,
    localeArray,
    meta,

    // LAYOUT TYPES

    generalInformations,
    sharing,
    contact,
    socials,
    activePages,

    homePage,
    homeHero,
    homeServices,
    homeCitation,
    homeClients,
    homeWhoWeAre,
    homeActuality,

    productionPage,
    productionItem,

    influencerPage,
    influencerItem,

    eventPage,
    eventItem,

    charityPage
  ])
})
