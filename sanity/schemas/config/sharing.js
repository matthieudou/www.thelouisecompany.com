export default {
  name: 'sharing',
  title: 'Sharing',
  type: 'object',
  fields: [
    {
      title: 'Sharing',
      name: 'sharing',
      type: 'meta'
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
