module.exports = {
    title: 'Type文档',
    description: '文档描述',
    theme: 'reco',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'tone的小博客',
                items: [
                    { text: 'Github', link: 'https://github.com/Tone-X/' },
                    { text: 'baidu', link: 'https://www.baidu.com/' }
                ]
            }
        ],
        sidebar: [{
                title: '欢迎学习',
                path: '/',
                collapsable: false, //不折叠
                children: [
                    { title: '文章阅读', path: '/handbook/文章阅读' },
                    { title: '学前必读', path: '/' }
                ]
            },
            {
                title: '知识笔记',
                path: '/handbook/lombok',
                collapsable: false, //不折叠
                children: [
                    { title: 'mysql', path: '/handbook/mysql' },
                    { title: 'lombok', path: '/handbook/lombok' },
                    { title: '文章阅读', path: '/handbook/文章阅读' }
                ]
            },
        ]
    }
}