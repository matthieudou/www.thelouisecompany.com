export default {
  title: 'Production page',
  name: 'productionPage',
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
      title: 'Production items',
      name: 'productionItems',
      type: 'array',
      of: [
        { type: 'productionItem' }
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
        title: 'Production page'
      }
    }
  }
}
