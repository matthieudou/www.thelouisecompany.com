const supportedLanguages = [
  { id: 'fr', title: 'Français', isDefault: true },
  { id: 'en', title: 'English' }
]

export const localeString = {
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Traductions',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => (
    {
      title: ' ',
      description: lang.title,
      name: lang.id,
      type: 'string',
      fieldset: lang.isDefault ? null : 'translations'
    }
  ))
}

export const localeText = {
  name: 'localeText',
  type: 'object',
  fieldsets: [
    {
      title: 'Traductions',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => (
    {
      title: ' ',
      description: lang.title,
      name: lang.id,
      type: 'text',
      fieldset: lang.isDefault ? null : 'translations'
    }
  ))
}

export const localeSlug = {
  name: 'localeSlug',
  type: 'object',
  fieldsets: [
    {
      title: 'Traductions',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => (
    {
      title: ' ',
      description: lang.title,
      name: lang.id,
      type: 'slug',
      fieldset: lang.isDefault ? null : 'translations'
    }
  ))
}
