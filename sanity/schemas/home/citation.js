export default {
  title: 'Citation',
  name: 'homeCitation',
  type: 'object',
  fields: [
    {
      name: 'citation',
      title: 'Citation',
      type: 'localeText'
    },
    {
      name: 'thumbnail',
      title: 'Image',
      type: 'altImage'
    },
    {
      name: 'signature',
      title: 'Signature',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {},
    prepare () {
      return {
        title: 'Citation'
      }
    }
  }
}
