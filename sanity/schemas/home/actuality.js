export default {
  title: 'Actuality',
  name: 'homeActuality',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          name: 'actuality',
          title: 'Actuality',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'localeString'
            },
            {
              name: 'type',
              title: 'Type',
              type: 'localeString'
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
              options: {
                list: [
                  { title: 'Events', value: 'events' },
                  { title: 'Contact', value: 'contact' },
                  { title: 'Charity', value: 'charity' },
                  { title: 'Management', value: 'management' },
                  { title: 'Production', value: 'production' }
                ],
                layout: 'radio',
                direction: 'horizontal'
              }
            },
            {
              name: 'hash',
              title: 'Specific item',
              type: 'string',
              options: {
                list: [
                  { title: 'First', value: 'first' },
                  { title: 'Second', value: 'second' },
                  { title: 'Third', value: 'third' },
                  { title: 'Fourth', value: 'fourth' }
                ]
              }
            },
            {
              name: 'thumbnail',
              title: 'Thumbnail',
              type: 'altImage',
              options: {
                hotspot: true
              }
            },
            {
              name: 'logo',
              title: 'Logo',
              type: 'altImage',
              options: {
                hotspot: true
              }
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'type',
              thumbnail: 'thumbnail'
            },
            prepare ({ title, subtitle, thumbnail }) {
              return {
                title: title && title.en ? title.en || title.fr : '',
                subtitle: subtitle && subtitle.en ? subtitle.en || subtitle.fr : '',
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
        title: 'Actuality'
      }
    }
  }
}
