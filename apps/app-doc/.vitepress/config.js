
const nav = [
  { text: '首页', link: '/', activeMatch: '^/$' },
  {
    text: '手册',
    link: '/manual/',
    activeMatch: '^/manual/'
  },
  {
    text: 'VitePress',
    link: 'https://vitepress.vuejs.org/'
  }
]

const sidebar = {
  '/manual/': [
    {
      text: 'Guide',
      items: [
        {text: '指南', link: '/manual/guide'},
        {text: '参考', link: '/manual/reference'},

      ]
    },
  ],


}

const config = {
  lang: 'zh-CN',
  title: 'Monorepo',
  description: 'Monorepo Doc.',
  base: '/',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  outDir: 'dist',
  scrollOffset: 'header',
  lastUpdated: true,
  themeConfig: {
    docsDir: 'src',
    docsBranch: 'main',
    outDir: 'dist',
    nav: nav,
    sidebar: sidebar,
  },
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: 'favicon.png',
        type: 'image/x-icon'
      }
    ]
  ],
  markdown: {
    lineNumbers: false,
    toc: {
      includeLevel: [1, 2]
    },
  },
  vite: {
//    publicDir: 'resources'
  }
}

export default config
