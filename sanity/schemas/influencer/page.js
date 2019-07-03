export default {
  title: 'Management page',
  name: 'managementPage',
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
      title: 'Management items',
      name: 'managementItems',
      type: 'array',
      of: [
        { type: 'managementItem' }
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
        title: 'Management page'
      }
    }
  }
}
