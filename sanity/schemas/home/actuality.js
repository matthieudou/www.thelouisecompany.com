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
              name: 'thumbnail',
              title: 'Thumbnail',
              type: 'altImage',
              options: {
                hotspot: true
              }
            }
          ]
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
