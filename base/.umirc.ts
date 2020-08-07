import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    "navTheme": "light",
    "primaryColor": "#13C2C2",
    "layout": "top",
    "contentWidth": "Fixed",
    "fixedHeader": false,
    "fixSiderbar": true,
    "logo": "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/112559/35/11283/3523/5efbf774E285d108b/c0fa626df4979a21.png",
    "menu": {
      "locale": true
    },
    "title": "微前端",
    "pwa": false,
    "iconfontUrl": "",
    "splitMenus": false,
    "footerRender": false
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', name: '基座', component: '@/pages/index', },
    { path: '/app1', name: 'app1', microApp: 'app1', },
    { path: '/app2', name: 'app1', microApp: 'app2', },

  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:7001', // html entry
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:7002', // html entry
        },
      ],
    },
  },
});

// {
    //   // path: '/', component: '@/layout/base',
    //   routes: [
    //     { path: '/', component: '@/pages/index', },
    //     { path: '/app1', microApp: 'app1', },
    //     { path: '/app2', microApp: 'app2', },
    //   ]
    // },
