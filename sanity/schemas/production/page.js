export default {
  title: 'Production index',
  name: 'productionPage',
  type: 'document',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'localeString'
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
          ],
          options: {
            layout: 'grid'
          }
        }
      ],
      options: {
        layout: 'grid',
        editModal: 'fullscreen'
      }
    }
  ]
}
