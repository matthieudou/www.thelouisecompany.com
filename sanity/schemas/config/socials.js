export default {
  title: 'Socials',
  name: 'socials',
  type: 'object',
  fields: [
    {
      title: 'Socials',
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'social',
          name: 'social',
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook', default: true },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Vimeo', value: 'vimeo' },
                  { title: 'Youtube', value: 'youtube' },
                  { title: 'Pinterest', value: 'pinterest' }
                ]
              },
              validation: Rule => Rule.required()
            },
            {
              title: 'Link',
              name: 'link',
              type: 'url'
            }
          ]
        }
      ]
    },
    {
      title: 'Catch phrase',
      name: 'catchPhrase',
      type: 'localeString'
    }
  ],

  preview: {
    select: {},
    prepare () {
      return {
        title: 'Socials'
      }
    }
  }
}
