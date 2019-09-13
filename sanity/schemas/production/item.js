export default {
  title: 'Production items',
  name: 'productionItem',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    },
    {
      title: 'Name of the client',
      name: 'clientName',
      type: 'localeString'
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
    },
    {
      name: 'hash',
      title: 'link from homepage',
      type: 'string',
      options: {
        list: [
          { title: 'First', value: 'first' },
          { title: 'Second', value: 'second' },
          { title: 'Third', value: 'third' },
          { title: 'Fourth', value: 'fourth' }
        ]
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      clientName: 'clientName.fr',
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
