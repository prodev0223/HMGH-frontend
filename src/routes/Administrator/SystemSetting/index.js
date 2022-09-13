import { dynamicWrapper, createRoute } from '../../../utils/core';
import { routerLinks } from "../../constant";

const routesConfig = app => ({
  path: routerLinks['SystemSetting'],
  title: 'SystemSetting',
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);