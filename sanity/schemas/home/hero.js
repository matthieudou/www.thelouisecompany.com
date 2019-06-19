import hashtagIcon from 'react-icons/lib/fa/hashtag'

export default {
  title: 'Hero',
  name: 'homeHero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
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
