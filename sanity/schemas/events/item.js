export default {
  title: 'Events items',
  name: 'eventItem',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    },
    {
      title: 'Category',
      name: 'category',
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
      category: 'category',
      media: 'media'
    },
    prepare ({ title, category, media }) {
      return {
        title: title && title.en ? title.en || title.fr : '',
        subtitle: category.toUpperCase(),
        media: media[0]
      }
    }
  }
}
