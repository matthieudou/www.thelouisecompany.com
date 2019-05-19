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
      slug: 'slug',
      thumbnails: 'images'
    },
    prepare ({ title, slug, thumbnails }) {
      return {
        title: title && title.en ? title.en || title.fr : '',
        subtitle: `/en/production/${slug && slug.en ? slug.en.current : '...'}`,
        media: thumbnails[0]
      }
    }
  }
}
