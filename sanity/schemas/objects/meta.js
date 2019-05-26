export default {
  title: 'Meta',
  name: 'meta',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      description: 'Image that will be shown when sharing the website on social media',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Description',
      name: 'description',
      description: 'Description has to be between 50 and 160 characters',
      type: 'localeText',
      validation: Rule => [
        Rule.custom(texts => {
          const frCondition = texts['fr'].length < 160
          const enCondition = texts['en'].length < 160
          return frCondition && enCondition
        })
      ]
    }
  ]
}
