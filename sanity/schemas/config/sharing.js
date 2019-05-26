export default {
  name: 'sharing',
  title: 'Sharing',
  type: 'object',
  fields: [
    {
      title: 'Sharing image',
      name: 'thumbnail',
      description: 'Image that will be shown when sharing the website on social media',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeText'
    }
  ],

  preview: {
    select: {},
    prepare () {
      return {
        title: 'Sharing'
      }
    }
  }
}
