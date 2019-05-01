export default {
  name: 'altImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      type: 'localeString'
    }
  ],

  preview: {
    select: {
      image: 'altImage',
      title: 'alt'
    },

    prepare (selection) {
      return {
        title: selection.title,
        media: selection.image
      }
    }
  }
}
