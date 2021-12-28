// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '拉钩教育',
  siteDesctiption: '大前端',
  plugins: [
    {
      use:'@gridsome/source-filesystem',
      option:{
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
        remark:{

        }
      }
    }
  ],
  transformers: {
    remark:{

    }
  }
}
