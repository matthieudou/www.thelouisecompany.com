export default {
  title: 'Charity page',
  name: 'charityPage',
  type: 'object',
  fieldsets: [
    { name: 'base', title: 'Header informations' },
    { name: 'firstSection', title: 'First section' },
    { name: 'secondSection', title: 'Second section' }
  ],
  fields: [
    // HEADER INFORMATIONS
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
      fieldset: 'base'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'localeText',
      fieldset: 'base'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      fieldset: 'base',
      of: [
        { type: 'altImage' }
      ]
    },

    // FIRST SECTION
    {
      name: 'firstSectionSubtitle',
      title: 'sup header',
      type: 'localeString',
      fieldset: 'firstSection'
    },
    {
      name: 'firstSectionTitle',
      title: 'Title',
      type: 'localeString',
      fieldset: 'firstSection'
    },
    {
      name: 'firstSectionText',
      title: 'Text',
      type: 'localeText',
      fieldset: 'firstSection'
    },

    // SECOND SECTION
    {
      name: 'secondSectionImage',
      title: 'Image',
      type: 'altImage',
      fieldset: 'secondSection'
    },
    {
      name: 'secondSectionCitation',
      title: 'Citation',
      type: 'localeString',
      fieldset: 'secondSection'
    },
    {
      name: 'secondSectionCitationAuthor',
      title: 'Citation author',
      type: 'string',
      fieldset: 'secondSection'
    },
    {
      name: 'secondSectionTitle',
      title: 'Title',
      type: 'localeString',
      fieldset: 'secondSection'
    },
    {
      name: 'secondSectionText',
      title: 'Text',
      type: 'localeText',
      fieldset: 'secondSection'
    },

    // VIDEO SECTION
    {
      name: 'mediaItems',
      title: 'Media items',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [
        { type: 'altImage' },
        { type: 'video' }
      ]
    },

    // META
    {
      title: 'Meta',
      name: 'meta',
      type: 'meta'
    }
  ],

  preview: {
    select: {},
    prepare () {
      return {
        title: 'Charity page'
      }
    }
  }
}
