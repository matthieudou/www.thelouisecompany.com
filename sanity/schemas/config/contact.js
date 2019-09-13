import fileIcon from 'react-icons/lib/fa/file'

export default {
  name: 'contact',
  type: 'object',
  fieldsets: [
    {
      title: 'Contact',
      name: 'contact'
    },
    {
      title: 'Localisation',
      name: 'geolocation'
    }
  ],
  fields: [
    {
      title: 'Email de la boite',
      name: 'email',
      type: 'email',
      fieldset: 'contact'
    },
    {
      title: 'Numéro de téléphone',
      name: 'phone',
      type: 'string',
      fieldset: 'contact'
    },
    {
      title: 'Sujets de contact',
      name: 'contactSubjects',
      type: 'localeArray'
    },
    {
      title: 'Rue',
      name: 'streetName',
      type: 'localeString',
      fieldset: 'geolocation'
    },
    {
      title: 'Numero',
      name: 'streetNumber',
      type: 'string',
      fieldset: 'geolocation'
    },
    {
      title: 'Code postal',
      name: 'postalCode',
      type: 'string',
      fieldset: 'geolocation'
    },
    {
      title: 'Ville',
      name: 'city',
      type: 'localeString',
      fieldset: 'geolocation'
    },
    {
      title: 'Pays',
      name: 'country',
      type: 'localeString',
      fieldset: 'geolocation'
    },
    {
      name: 'addressTitle',
      title: 'Titre de l’adresse',
      type: 'localeString'
    },
    {
      name: 'emailTitle',
      title: 'Titre de l’email',
      type: 'localeString'
    },
    {
      name: 'phoneTitle',
      title: 'Titre du téléphone',
      type: 'localeString'
    },
    {
      name: 'informationsTitle',
      title: 'Titre des informations',
      type: 'localeString'
    },
    {
      name: 'informationsItems',
      title: 'Fichiers informations',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Fichier',
          type: 'object',
          fields: [
            {
              name: 'file',
              title: 'Fichier',
              type: 'file'
            },
            {
              name: 'text',
              title: 'Texte',
              type: 'localeString'
            }
          ],
          preview: {
            select: {
              title: 'text.fr'
            },
            prepare ({ title }) {
              return {
                title,
                media: fileIcon
              }
            }
          }
        }
      ]
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
