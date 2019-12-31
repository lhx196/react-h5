import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/**
 * path 路由路径
 * component 组件地址
 */
interface TRouterConfig {
  path: string;
  component: string;
}

/**
 * 路由配置文件
 * 第一个放置首页/默认路由
 */
const routerConfig: Array<TRouterConfig> = [
  {
    path: '/home',
    component: '/home',
  },
  {
    path: '/user',
    component: '/user',
  },
];

const Routers = () => {
  return (
    <Switch>
      {routerConfig.map((i, index) => (
        <Route key={index} path={i.path} component={require(`../pages${i.component}`).default} exact />
      ))}
      <Redirect to={routerConfig[0].path} />
    </Switch>
  );
};
export default Routers;
