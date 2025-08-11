/**
 * tabbar 选择的策略，更详细的介绍见 tabbar.md 文件
 * 0: 'NATIVE_TABBAR'
 * 2: 'FULL_CUSTOM_TABBAR'
 * 1: 'HALF_CUSTOM_TABBAR'
 * 3: 'NO_TABBAR'
 *
 * 温馨提示：本文件的任何代码更改了之后，都需要重新运行，否则 pages.json 不会更新导致错误
 */

// TODO：通过这里切换使用tabbar的策略
export const selectedTabbarStrategy = 0

// 0 和 1 时，需要tabbar缓存
export const cacheTabbarEnable = selectedTabbarStrategy < 2

// selectedTabbarStrategy==0 时，需要填 iconPath 和 selectedIconPath
// selectedTabbarStrategy==1 or 2 时，需要填 icon 和 iconType
// selectedTabbarStrategy==3 时，tabbarList 不生效
export const tabbarList = [
  {
    iconPath: 'static/tabbar/home.png',
    selectedIconPath: 'static/tabbar/homeHL.png',
    pagePath: 'pages/index/index',
    text: '首页',
    icon: 'home',
    iconType: 'uiLib',
  },
  {
    iconPath: 'static/tabbar/example.png',
    selectedIconPath: 'static/tabbar/exampleHL.png',
    pagePath: 'pages/about/about',
    text: '关于',
    icon: 'i-carbon-code',
    // 注意 unocss 的图标需要在 页面上引入一下，或者配置到 unocss.config.ts 的 safelist 中
    iconType: 'unocss',
  },
  // {
  //   pagePath: 'pages/my/index',
  //   text: '我的',
  //   icon: '/static/logo.svg',
  //   iconType: 'local',
  // },
  // {
  //   pagePath: 'pages/mine/index',
  //   text: '我的',
  //   icon: 'iconfont icon-my',
  //   iconType: 'iconfont',
  // },
]

const _tabbar = {
  color: '#999999',
  selectedColor: '#018d71',
  backgroundColor: '#F8F8F8',
  borderStyle: 'black',
  height: '50px',
  fontSize: '10px',
  iconWidth: '24px',
  spacing: '3px',
  list: tabbarList,
}

// 0和1 需要显示底部的tabbar的各种配置，以利用缓存
export const tabBar = cacheTabbarEnable ? _tabbar : undefined
