import S from '@sanity/desk-tool/structure-builder'

import CharityIcon from 'react-icons/lib/md/accessibility'

export default S.listItem()
  .title('Charity')
  .icon(CharityIcon)
  .child(
    S.editor()
      .id('charityPage')
      .schemaType('charityPage')
      .documentId('charityPage')
  )
