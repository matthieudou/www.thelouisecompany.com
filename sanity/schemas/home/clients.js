export default {
  title: 'Clients',
  name: 'homeClients',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'localeText'
    },
    {
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [
        {
          name: 'client',
          title: 'Client',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'thumbnail',
              title: 'Thumbnail',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ]
        }
      ],

      preview: {
        select: {
          title: 'name',
          thumbnail: 'thumbnail'
        },
        prepare ({ title, thumbnail }) {
          return {
            title: title,
            media: thumbnail
          }
        }
      }
    }
  ],

  preview: {
    select: {},
    prepare () {
      return {
        title: 'Clients'
      }
    }
  }
}
