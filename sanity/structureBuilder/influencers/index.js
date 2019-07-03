import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .title('Influencers')
  .child(
    S.editor()
      .id('listEditor')
      .schemaType('managementPage')
      .documentId('managementPage')
  )
