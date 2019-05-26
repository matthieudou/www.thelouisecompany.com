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
      title: 'Video link',
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
      images: 'images'
    },
    prepare ({ title, clientName, images }) {
      return {
        title: title && title.en ? title.en || title.fr : '',
        subtitle: clientName.toUpperCase(),
        media: images[0]
      }
    }
  }
}
