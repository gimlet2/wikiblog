const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Andrei\'s tech blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  theme: '@vuepress/blog',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      // {
      //   text: 'Guide',
      //   link: '/guide/',
      // },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/gimlet2',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/gimlet2',
        },
      ],
    },
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/blog', {
      feed: {
        canonical_base: 'https://restmonkeys.com',
      },
      sitemap: {
        hostname: 'https://restmonkeys.com'
      },
      frontmatters: [
        {
          // Unique ID of current classification
          id: 'tag',
          // Decide that the frontmatter keys will be grouped under this classification
          keys: ['tag', 'tags'],
          // Path of the `entry page` (or `list page`)
          path: '/tag/',
          // Layout of the `entry page`
          layout: 'Tags',
          // Layout of the `scope page`
          scopeLayout: 'Tag'
        },
      ],
      directories: [
        {
          // Unique ID of current classification
          id: 'post',
          // Target directory
          dirname: '_posts',
          // Path of the `entry page` (or `list page`)
          path: '/',
          pagination: {
            lengthPerPage: 5,
          },
        },
      ],
    },]
  ]
}
