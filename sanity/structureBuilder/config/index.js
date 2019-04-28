import S from '@sanity/desk-tool/structure-builder'

import ConfigIcon from 'react-icons/lib/md/settings-applications'
import Config from 'react-icons/lib/md/settings'
import Footer from 'react-icons/lib/md/vertical-align-bottom'

export default S.listItem()
  .title('Configuration')
  .icon(ConfigIcon)
  .child(
    S.list()
      .title('Configuration')
      .items([
        S.listItem()
          .title('Configuration globale')
          .icon(Config)
          .child(
            S.editor()
              .id('websiteConfig')
              .schemaType('websiteConfig')
              .documentId('websiteConfig')
          ),
        S.listItem()
          .title('Pied de page')
          .icon(Footer)
          .child(
            S.editor()
              .id('websiteFooter')
              .schemaType('websiteConfig')
              .documentId('websiteConfig')
          )
      ])
  )
