import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .title('Production')
  .child(
    S.editor()
      .id('listEditor')
      .schemaType('productionPage')
      .documentId('productionPage')
  )
