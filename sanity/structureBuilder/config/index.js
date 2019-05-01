import S from '@sanity/desk-tool/structure-builder'

import ConfigIcon from 'react-icons/lib/md/settings-applications'
import FooterIcon from 'react-icons/lib/md/vertical-align-bottom'
import ContactIcon from 'react-icons/lib/md/contact-mail'

export default S.listItem()
  .title('Configuration')
  .icon(ConfigIcon)
  .child(
    S.list()
      .title('Configuration')
      .items([
        S.listItem()
          .title('Configuration globale')
          .icon(ConfigIcon)
          .child(
            S.editor()
              .id('websiteConfig')
              .schemaType('websiteConfig')
              .documentId('websiteConfig')
          ),
        S.listItem()
          .title('Pied de page')
          .icon(FooterIcon)
          .child(
            S.editor()
              .id('footer')
              .schemaType('footer')
              .documentId('footer')
          ),
        S.listItem()
          .title('Contact')
          .icon(ContactIcon)
          .child(
            S.editor()
              .id('contact')
              .schemaType('contact')
              .documentId('contact')
          )
      ])
  )
