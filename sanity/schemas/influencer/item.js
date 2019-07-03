export default {
  title: 'ManagementItem item',
  name: 'managementItem',
  type: 'object',
  fields: [
    {
      title: 'First name',
      name: 'firstName',
      type: 'string'
    },
    {
      title: 'Last name',
      name: 'lastName',
      type: 'string'
    },
    {
      title: 'Socials',
      name: 'socials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'social',
          fields: [
            {
              name: 'socialName',
              title: 'Social name',
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
                ],
                layout: 'radio',
                direction: 'horizontal'
              }
            },
            {
              name: 'amount',
              title: 'Number',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      title: 'Profession',
      name: 'profession',
      type: 'localeString'
    },
    {
      title: 'Sector',
      name: 'sector',
      type: 'localeString'
    },
    {
      title: 'Location',
      name: 'location',
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
    }
  ],

  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      location: 'location',
      sector: 'sector',
      media: 'media'
    },
    prepare ({ firstName, lastName, media, location, sector }) {
      return {
        title: firstName + ' ' + lastName,
        subtitle: sector && sector.en ? sector.en || sector.fr : '' + ' ' + location && location.en ? location.en || location.fr : '',
        media: media[0]
      }
    }
  }
}
