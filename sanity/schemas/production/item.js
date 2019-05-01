export default {
  title: 'Production items',
  name: 'productionItem',
  type: 'document',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'localeString'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'localeSlug'
    }
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare ({ title, slug }) {
      return {
        title: title && title.en ? title.en || title.fr : '',
        subtitle: `/en/production/${slug && slug.en ? slug.en.current : '...'}`
      }
    }
  }
}
