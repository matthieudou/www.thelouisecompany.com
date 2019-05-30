export default {
  title: 'Production items',
  name: 'productionItem',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    },
    {
      title: 'Name of the client',
      name: 'clientName',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeText'
    },
    {
      title: 'Media',
      name: 'media',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [
        { type: 'altImage' },
        { type: 'video' }
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      clientName: 'clientName',
      media: 'media'
    },
    prepare ({ title, clientName, media }) {
      return {
        title: title && title.en ? title.en || title.fr : '',
        subtitle: clientName.toUpperCase(),
        media: media[0]
      }
    }
  }
}
