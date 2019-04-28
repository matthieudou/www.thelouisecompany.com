import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .title('Homepage')
  .child(
    S.editor()
      .id('homepageContent')
      .schemaType('homepageContent')
      .documentId('homepageContent')
  )
