import S from '@sanity/desk-tool/structure-builder'

import config from './config'
import homepage from './homepage'
import production from './production'
import influencers from './influencers'
import events from './events'
import charity from './charity'

export default () =>
  S.list()
    .title('Content')
    .items([
      config,
      homepage,
      production,
      influencers,
      events,
      charity
    ])
