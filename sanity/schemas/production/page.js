export default {
  title: 'Production page',
  name: 'productionPage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    },
    {
      title: 'Background image',
      name: 'image',
      type: 'altImage'
    },
    {
      title: 'Production items',
      name: 'productionItems',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'productionItem' }
          ]
        }
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
