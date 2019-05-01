export default {
  name: 'contact',
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
        title: 'Contact page'
      }
    }
  }
}
