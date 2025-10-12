import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shadowrocket(小火箭)官网",
  description: "Shadowrocket(小火箭）官网提供最新版本下载、使用教程和机场推荐，帮助用户轻松访问互联网资源。",
  lang: 'zh-CN',
  cleanUrls: false, // 禁用干净URL，保留.html后缀
  sitemap: {
    hostname: 'https://shadowrocket.uk'
  },
  head: [
    ['meta', { name: 'keywords', content: 'Shadowrocket,Shadowrocket官网,Shadowrocket下载地址,小火箭,网络工具' }],
    ['meta', { name: 'author', content: 'Shadowrocket官方团队' }],
    ['meta', { property: 'og:title', content: 'Shadowrocket官网 - 专业网络工具' }],
    ['meta', { property: 'og:description', content: 'Shadowrocket官网提供最新版本下载、使用教程和机场推荐，帮助用户轻松访问互联网资源。' }],
    ['meta', { property: 'og:url', content: 'https://shadowrocket.uk' }],
    ['meta', { property: 'og:image', content: 'https://shadowrocket.uk/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Shadowrocket官网 - 专业网络工具' }],
    ['meta', { name: 'twitter:description', content: 'Shadowrocket官网提供最新版本下载、使用教程和机场推荐，帮助用户轻松访问互联网资源。' }],
    ['meta', { name: 'twitter:image', content: 'https://shadowrocket.uk/logo.png' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Shadowrocket官网',
      'url': 'https://shadowrocket.uk',
      'description': 'Shadowrocket官网提供最新版本下载、使用教程和机场推荐，帮助用户轻松访问互联网资源。',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://shadowrocket.uk/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    })],
    ['script', { 
      async: true, 
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2394457707130437',
      crossorigin: 'anonymous'
    }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduction.html' },
      { text: '下载', link: '/download.html' },
      { text: '教程', link: '/tutorial.html' },
      { text: '🎉机场推荐', link: 'https://jichangdaohang.com' },
      { text: '常见问题', link: '/faq.html' }
    ],

    sidebar: [
      {
        text: 'Shadowrocket指南',
        items: [
          { text: '产品介绍', link: '/introduction.html' },
          { text: '下载安装', link: '/download.html' },
          { text: '使用教程', link: '/tutorial.html' },
          { text: '🎉机场推荐', link: '/airport.html' },
          { text: '常见问题解答', link: '/faq.html' }
        ]
      }
    ],
       // 文章翻页
       docFooter: {
        prev: '上一篇',
        next: '下一篇'
       },
   
         // 移动端 - 外观
       darkModeSwitchLabel: '外观',
   
         // 移动端 - 返回顶部
       returnToTopLabel: '返回顶部',
   
         // 移动端 - menu
       sidebarMenuLabel: '菜单',
   
       outlineTitle: '本页导航',
    footer: {
      message: '本站内容仅供参考，不构成任何建议',
      copyright: '© 2024 <a href="https://shadowrocket.uk" target="_blank">Shadowrocket</a> 版权所有'
    }
  }
})
