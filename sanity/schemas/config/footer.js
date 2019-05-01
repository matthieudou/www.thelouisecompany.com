export default {
  title: 'Footer',
  name: 'footer',
  type: 'object',
  fields: [
    {
      title: 'Email de la boite',
      name: 'email',
      type: 'email'
    }
  ],

  preview: {
    select: {},
    prepare () {
      return {
        title: 'Footer'
      }
    }
  }
}
