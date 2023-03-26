// 页面路由
export const routeData = [
  {
    path: '/',
    redirect: '/demo', // 跳转指定页面
  },
  {
    path: "/demo",
    componentH5: () => import('../views/MC/demo'),
    componentPc: () => import('../views/PC/demo'),
  },
  {
    path: "/page",
    component: () => import('../views/MC/page'),
  }
];
