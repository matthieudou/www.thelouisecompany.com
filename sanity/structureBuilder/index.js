import S from '@sanity/desk-tool/structure-builder'

import config from './config'
import homepage from './homepage'
import advertainment from './advertainment'
import influencers from './influencers'
import events from './events'
import charity from './charity'

export default () =>
  S.list()
    .title('Content')
    .items([
      config,
      homepage,
      advertainment,
      influencers,
      events,
      charity
    ])
