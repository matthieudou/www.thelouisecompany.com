import S from '@sanity/desk-tool/structure-builder'

import HomepageIcon from 'react-icons/lib/md/home'

export default S.listItem()
  .title('Home')
  .icon(HomepageIcon)
  .child(
    S.editor()
      .id('homePage')
      .schemaType('homePage')
      .documentId('homePage')
  )
