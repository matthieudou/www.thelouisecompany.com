import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .title('Influencers')
  .child(
    S.list()
      .title('Influencers')
      .items([
        S.listItem()
          .title('Page')
          .child(
            S.editor()
              .id('listEditor')
              .schemaType('influencerPage')
              .documentId('influencerPage')
          ),
        S.listItem()
          .title('Items')
          .child(
            S.documentTypeList('influencerItem')
          )
      ])
  )
