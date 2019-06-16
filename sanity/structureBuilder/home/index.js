import S from '@sanity/desk-tool/structure-builder'

import HomepageIcon from 'react-icons/lib/md/home'

export default S.listItem()
  .title('Home')
  .icon(HomepageIcon)
  .child(
    S.list()
      .title('Content')
      .items([
        S.listItem()
          .title('Hero')
          .icon(HomepageIcon)
          .child(
            S.editor()
              .id('homeHero')
              .schemaType('homeHero')
              .documentId('homeHero')
          ),
        S.listItem()
          .title('Other')
          .icon(HomepageIcon)
          .child(
            S.editor()
              .id('homePage')
              .schemaType('homePage')
              .documentId('homePage')
          )
      ])
  )
