export default {
  title: 'Contenu de la homepage',
  name: 'homePage',
  type: 'object',
  fields: [
    {
      title: 'Titre',
      type: 'localeString',
      name: 'title'
    },
    {
      title: 'Texte',
      type: 'localeText',
      name: 'text'
    }
  ],

  preview: {
    select: {},
    prepare () {
      return {
        title: 'Home page'
      }
    }
  }
}
