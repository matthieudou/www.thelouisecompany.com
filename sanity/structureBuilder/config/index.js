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
          .title('Informations générales')
          .icon(ConfigIcon)
          .child(
            S.editor()
              .id('generalInformations')
              .schemaType('generalInformations')
              .documentId('config-generalInformations')
          ),
        S.listItem()
          .title('Sharing')
          .icon(FooterIcon)
          .child(
            S.editor()
              .id('sharing')
              .schemaType('sharing')
              .documentId('config-sharing')
          ),
        S.listItem()
          .title('Socials')
          .icon(FooterIcon)
          .child(
            S.editor()
              .id('socials')
              .schemaType('socials')
              .documentId('config-socials')
          ),
        S.listItem()
          .title('Contact')
          .icon(ContactIcon)
          .child(
            S.editor()
              .id('contact')
              .schemaType('contact')
              .documentId('config-contact')
          )
      ])
  )
