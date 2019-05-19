export default {
  title: 'Production items',
  name: 'productionItem',
  type: 'document',
  fields: [
    {
      title: 'Titre',
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
      title: 'Vidéo',
      name: 'video',
      type: 'url'
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [
        { type: 'image' }
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      clientName: 'clientName',
      thumbnails: 'images'
    },
    prepare ({ title, clientName, thumbnails }) {
      return {
        title: title && title.en ? title.en || title.fr : '',
        subtitle: clientName.toUpperCase(),
        media: thumbnails[0]
      }
    }
  }
}
