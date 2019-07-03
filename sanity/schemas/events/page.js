export default {
  title: 'Production page',
  name: 'eventPage',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'localeText'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        { type: 'altImage' }
      ]
    },
    {
      title: 'Events items',
      name: 'eventItems',
      type: 'array',
      of: [
        { type: 'eventItem' }
      ]
    },
    {
      title: 'Meta',
      name: 'meta',
      type: 'meta'
    }
  ],

  preview: {
    select: {},
    prepare () {
      return {
        title: 'Events page page'
      }
    }
  }
}
