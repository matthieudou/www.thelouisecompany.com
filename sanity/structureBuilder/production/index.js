import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .title('Production')
  .child(
    S.list()
      .title('Production')
      .items([
        S.listItem()
          .title('Page')
          .child(
            S.editor()
              .id('listEditor')
              .schemaType('productionPage')
              .documentId('productionPage')
          ),
        S.listItem()
          .title('Items')
          .child(
            S.documentTypeList('productionItem')
          )
      ])
  )
