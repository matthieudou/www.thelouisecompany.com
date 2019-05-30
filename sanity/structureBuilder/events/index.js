import S from '@sanity/desk-tool/structure-builder'

import EventIcon from 'react-icons/lib/md/event-available'

export default S.listItem()
  .title('Events')
  .icon(EventIcon)
  .child(
    S.editor()
      .id('listEditor')
      .schemaType('eventPage')
      .documentId('eventPage')
  )
