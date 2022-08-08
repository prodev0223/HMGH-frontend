import { createRoutes } from '../utils/core';
import { routerLinks } from './constant';
import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';
import ThemeLayout from '../layouts/ThemeLayout';

import NotFound from './Pages/404';
import Page403 from './Pages/403';
import Page500 from './Pages/500';


import Dashboard from './Dashboard';
import Blank from './Blank';
import Login from './Sign/Login';
import Home from './ThemeDemo/Home';
import CreateAccount from './Sign/CreateAccount';
import SubsidyRequest from './Sign/SubsidyRequest';
import SubsidyReview from './Sign/SubsidyReview';

const routesConfig = app => [
  
  // {
  //   path: '/administrator',
  //   title: 'System center',
  //   component: BasicLayout,
  //   indexRoute: routerLinks['Dashboard'],
  //   childRoutes: [
  //     Page403(), 
  //     Page500(), 
  //     Dashboard(app), 
  //     Blank(app),
  //     
  //   ]
  // },
  // {
  //   path: '/home',
  //   title: 'System center',
  //   component: ThemeLayout,
  //   indexRoute: routerLinks['Home'],
  //   childRoutes: [
  //     Home(app),
  //   ]
  // },
  {
    path: '/',
    title: 'Login',
    indexRoute: routerLinks['Login'],
    component: UserLayout,
    childRoutes: [
      Login(app), 
      CreateAccount(app),
      SubsidyRequest(app),
      // 💬 generate admin to here
      SubsidyReview(app),
      NotFound()]
  }
];

export default app => createRoutes(app, routesConfig);
