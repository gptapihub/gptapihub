import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'GPT API中转站调用教程',
  description: '专业的 GPT API 调用教程、国内接入方案、API 中转站使用指南，帮助开发者快速完成 OpenAI API 接入、chatgpt api中转站、api中转站',
  lastUpdated: true,

  head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '32x32' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#10b981' }]
  ],
 

  themeConfig: {
    logo: '/favicon.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: 'API 教程', link: '/blog/gpt-api/' },
      { text: '中转站', link: 'https://jeniya.cn', target: '_blank' },
      { text: '模型价格', link: '/pricing' },
      { 
        text: '更多',
        items: [
          { text: '支持模型', link: '/models' },
          { text: '接入文档', link: '/docs' },
          { text: '免责声明', link: '/disclaimer' }
        ]
      }
    ],

    sidebar: {
      '/blog/gpt-api/': [
        {
          text: '📚 GPT API 教程',
          collapsed: false,
          items: [
            { text: 'GPT API 教程首页', link: '/blog/gpt-api/' },
            { text: 'GPT API 国内怎么调用？免翻墙直连 OpenAI API 接入完整教程', link: '/blog/gpt-api/how-to-call-gpt-api-in-china.html' },
            { text: 'GPT API中转是什么？国内开发者为什么要用 GPT API 中转站？', link: '/blog/gpt-api/what-is-gpt-api-relay.html' },
            { text: 'OpenAI API Key 怎么获取？拿到 Key 之后下一步该做什么', link: '/blog/gpt-api/openai-api-key-get-and-use-guide.html' },
            { text: 'GPT API 中转站怎么选？开发者最该关注的 8 个问题', link: '/blog/gpt-api/gpt-api-middleman-selection-guide.html' },
            { text: 'GPT API 国内怎么调用？2026 年可落地接入教程', link: '/blog/gpt-api/gpt-api-china-call-guide.html' },
            { text: 'GPT API 专题总览：从 Key、接入、报错到模型选择一篇讲清', link: '/blog/gpt-api/gpt-api-topic-overview' }
          ]
        },
        {
          text: '📖 基础文档',
          collapsed: false,
          items: [
            { text: '支持模型', link: '/models' },
            { text: '模型价格', link: '/pricing' },
            { text: '接入文档', link: '/docs' },
            { text: '免责声明', link: '/disclaimer' }
          ]
        }
      ],
      '/blog/api-middleman/': [
        {
          text: '🔄 API 中转站教程',
          collapsed: false,
          items: [
            { text: '中转站首页', link: '/blog/api-middleman/' },
            { text: 'API中转站是什么？开发者为什么要用大模型 API 中转站', link: '/blog/api-middleman/what-is-api-middleman' },
  
          ]
        },
        {
          text: '📖 基础文档',
          collapsed: false,
          items: [
            { text: '支持模型', link: '/models' },
            { text: '模型价格', link: '/pricing' },
            { text: '接入文档', link: '/docs' },
            { text: '免责声明', link: '/disclaimer' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: '专注 GPT API 调用教程、API 中转站接入说明、模型价格与使用指南、AI中转站',
      copyright: '© 2026 GPT API 中转站调用教程 | <a href="/disclaimer">免责声明</a>'
    }
  }
})