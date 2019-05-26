export default {
  name: 'generalInformations',
  type: 'object',
  fieldsets: [
    {
      title: 'Contact informations',
      name: 'contactInfo'
    }
  ],
  fields: [
    {
      name: 'senderEmail',
      title: 'Sender email',
      description: 'email that sends the contact emails and defines the reply to email',
      type: 'email',
      fieldset: 'contactInfo'
    },
    {
      name: 'senderName',
      title: 'Sender name',
      description: 'Name that will be displayed on the email sent',
      type: 'string',
      fieldset: 'contactInfo'
    }
  ],

  preview: {
    select: {},
    prepare () {
      return {
        title: 'Global config'
      }
    }
  }
}
