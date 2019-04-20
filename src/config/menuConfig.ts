/**
 * menuConfig 菜单配置
 * @author guobin201314@gmail.com on 2019-01-28
 */

export const menuConfig = [
  {
    title: '首页',
    key: '/home'
  },
  {
    title: 'UI',
    key: '/ui',
    children: [
      {
        title: '按钮',
        key: '/ui/buttons',
      },
      {
        title: '弹框',
        key: '/ui/modals',
      },
      {
        title: 'Loading',
        key: '/ui/loadings',
      },
      {
        title: '通知提醒',
        key: '/ui/notification',
      },
      {
        title: '全局Message',
        key: '/ui/messages',
      },
      {
        title: 'Tab页签',
        key: '/ui/tabs',
      },
      {
        title: '图片画廊',
        key: '/ui/gallery',
      },
      {
        title: '轮播图',
        key: '/ui/carousel',
      }
    ]
  },
  {
    title: '表单',
    key: '/form',
    children: [
      {
        title: '登录',
        key: '/form/login',
      },
      {
        title: '注册',
        key: '/form/reg',
      }
    ]
  },
  {
    title: '表格',
    key: '/table',
    children: [
      {
        title: '基础表格',
        key: '/table/basic',
      },
      {
        title: '高级表格',
        key: '/table/high',
      }
    ]
  },
  {
    title: '富文本',
    key: '/rich'
  },
  {
    title: '城市管理',
    key: '/city'
  },
  {
    title: 'Http管理',
    key: '/http',
    children: [
      {
        title: 'ajax',
        key: '/http/ajax'
      },
      {
        title: 'fetch',
        key: '/http/fetch'
      }
    ]
  },
  {
    title: '员工管理',
    key: '/user'
  },
  {
    title: '车辆地图',
    key: '/bikeMap'
  },
  {
    title: '图表',
    key: '/charts',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar'
      },
      {
        title: '饼图',
        key: '/charts/pie'
      },
      {
        title: '折线图',
        key: '/charts/line'
      },
    ]
  },
  {
    title: 'Canvas',
    key: '/canvas',
    children:
      [
        {
          title: '基础图形',
          key: '/canvas/basic'
        },
        {
          title: '不规则图形',
          key: '/canvas/high'
        },
        {
          title: '动画',
          key: '/canvas/animate'
        },
      ]
  },
  {
    title: '权限设置',
    key: '/permission'
  }
];
