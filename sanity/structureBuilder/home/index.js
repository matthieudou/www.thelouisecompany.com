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
          .title('Who we are')
          .icon(HomepageIcon)
          .child(
            S.editor()
              .id('homeWhoWeAre')
              .schemaType('homeWhoWeAre')
              .documentId('homeWhoWeAre')
          ),
        S.listItem()
          .title('Actuality')
          .icon(HomepageIcon)
          .child(
            S.editor()
              .id('homeActuality')
              .schemaType('homeActuality')
              .documentId('homeActuality')
          ),
        // S.listItem()
        //   .title('Services')
        //   .icon(HomepageIcon)
        //   .child(
        //     S.editor()
        //       .id('homeServices')
        //       .schemaType('homeServices')
        //       .documentId('homeServices')
        //   ),
        S.listItem()
          .title('Citation')
          .icon(HomepageIcon)
          .child(
            S.editor()
              .id('homeCitation')
              .schemaType('homeCitation')
              .documentId('homeCitation')
          ),
        S.listItem()
          .title('Clients')
          .icon(HomepageIcon)
          .child(
            S.editor()
              .id('homeClients')
              .schemaType('homeClients')
              .documentId('homeClients')
          )
        // S.listItem()
        //   .title('Other')
        //   .icon(HomepageIcon)
        //   .child(
        //     S.editor()
        //       .id('homePage')
        //       .schemaType('homePage')
        //       .documentId('homePage')
        //   )
      ])
  )
