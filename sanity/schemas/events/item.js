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
      title: 'Link from homepages',
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
      category: 'category.fr',
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
