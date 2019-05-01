export default {
  name: 'websiteConfig',
  type: 'object',
  fields: [
    {
      name: 'img',
      type: 'altImage'
    }
  ],

  preview: {
    select: {},
    prepare () {
      return {
        title: 'Global config'
      }
    }
  }
}
