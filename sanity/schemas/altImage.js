export default {
  title: 'Image',
  name: 'altImage',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Description',
      name: 'alt',
      type: 'localeString',
      options: {
        isHighlighted: true
      }
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
