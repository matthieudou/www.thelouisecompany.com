import S from '@sanity/desk-tool/structure-builder'

import EventIcon from 'react-icons/lib/md/event-available'
import PageIcon from 'react-icons/lib/md/date-range'

export default S.listItem()
  .title('Events')
  .icon(EventIcon)
  .child(
    S.list()
      .title('Events')
      .items([
        S.listItem()
          .title('Page')
          .icon(PageIcon)
          .child(
            S.editor()
              .id('listEditor')
              .schemaType('eventPage')
              .documentId('eventPage')
          ),
        S.listItem()
          .title('Items')
          .child(
            S.documentTypeList('eventItem')
          )
      ])
  )
