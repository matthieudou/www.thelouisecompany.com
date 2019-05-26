export default {
  title: 'Production page',
  name: 'productionPage',
  type: 'document',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'localeString'
    },
    {
      title: 'Image',
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
