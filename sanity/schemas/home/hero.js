import hashtagIcon from 'react-icons/lib/fa/hashtag'

export default {
  title: 'Hero',
  name: 'homeHero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: Rule => [
        Rule.custom(titles => (titles.fr || '').length < 65 ? true : 'Title fr is too long.').warning(),
        Rule.custom(titles => (titles.en || '').length < 65 ? true : 'Title en is too long.').warning()
      ]
    },
    {
      name: 'subtitle',
      title: 'Suptitle',
      type: 'localeString'
    },
    {
      name: 'cta',
      title: 'Button',
      type: 'localeString'
    },
    {
      name: 'videoLink',
      title: 'Video link',
      description: 'Vimeo link of the opened background video',
      type: 'url'
    },
    {
      name: 'backgroundImage',
      title: 'Background image',
      description: 'Image is displayed when video is not loaded and on mobile',
      type: 'image'
    },
    {
      name: 'hashtags',
      title: 'Hashtags',
      type: 'array',
      of: [
        {
          name: 'hashtag',
          title: 'hashtag',
          type: 'object',
          fields: [
            {
              name: 'hashtag1',
              title: 'First hashtag',
              type: 'string'
            },
            {
              name: 'hashtag2',
              title: 'Second hashtag',
              type: 'string'
            }
          ],
          preview: {
            select: {
              first: 'hashtag1',
              second: 'hashtag2'
            },
            prepare ({ first, second }) {
              return {
                title: '#' + first.toUpperCase() + '#' + second.toUpperCase(),
                media: hashtagIcon
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
        title: 'Hero'
      }
    }
  }
}
