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
