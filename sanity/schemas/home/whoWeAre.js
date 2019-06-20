export default {
  title: 'Who we are',
  name: 'homeWhoWeAre',
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
      name: 'aside',
      title: 'Aside',
      type: 'localeText'
    },
    {
      name: 'cta',
      title: 'Call to action',
      type: 'localeString'
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'altImage'
    }
  ],

  preview: {
    select: {},
    prepare () {
      return {
        title: 'Who we are'
      }
    }
  }
}
