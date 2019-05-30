import icon from 'react-icons/lib/fa/play-circle-o'

export default {
  title: 'Video',
  name: 'video',
  icon,
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      options: {
        isHighlighted: true
      }
    },
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
    select: {}
  }
}
