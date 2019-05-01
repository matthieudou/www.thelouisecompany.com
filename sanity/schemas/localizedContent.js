const supportedLanguages = [
  { id: 'fr', title: 'Français', isDefault: true },
  { id: 'en', title: 'English' }
]

export const localeString = {
  name: 'localeString',
  type: 'object',
  fields: supportedLanguages.map(lang => (
    {
      title: ' ',
      description: lang.title,
      name: lang.id,
      type: 'string'
    }
  ))
}

export const localeText = {
  name: 'localeText',
  type: 'object',
  fields: supportedLanguages.map(lang => (
    {
      title: ' ',
      description: lang.title,
      name: lang.id,
      type: 'text'
    }
  ))
}

export const localeSlug = {
  name: 'localeSlug',
  type: 'object',
  fields: supportedLanguages.map(lang => (
    {
      title: ' ',
      description: lang.title,
      name: lang.id,
      type: 'slug',
      options: {
        source: doc => doc.title ? doc.title[lang.id] : null
      }
    }
  ))
}

export const localeBlock = {
  name: 'localeBlock',
  type: 'object',
  fields: supportedLanguages.map(lang => (
    {
      title: ' ',
      description: lang.title,
      name: lang.id,
      type: 'blockContent'
    }
  ))
}
