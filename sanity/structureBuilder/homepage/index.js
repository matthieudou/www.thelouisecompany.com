import S from '@sanity/desk-tool/structure-builder'

import HomepageIcon from 'react-icons/lib/md/home'

export default S.listItem()
  .title('Homepage')
  .icon(HomepageIcon)
  .child(
    S.editor()
      .id('homepagePage')
      .schemaType('homepagePage')
      .documentId('homepagePage')
  )
