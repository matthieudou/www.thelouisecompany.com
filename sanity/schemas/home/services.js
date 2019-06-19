export default {
  title: 'Services',
  name: 'homeServices',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localeString'
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          name: 'service',
          title: 'Service',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'localeString'
            },
            {
              name: 'thumbnail',
              title: 'Image',
              type: 'altImage'
            },
            {
              name: 'checks',
              title: 'List',
              type: 'array',
              of: [
                { type: 'localeString' }
              ]
            }
          ],
          preview: {
            select: {
              thumbnail: 'thumbnail',
              title: 'title'
            },
            prepare ({ thumbnail, title }) {
              return {
                title: title && title.en ? title.en || title.fr : '',
                media: thumbnail
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {},
    prepare () {
      return {
        title: 'Services'
      }
    }
  }
}
