import Dashboard from './views/dashboard';
import Forrest from './views/forrest';
import Icons from './views/icons';
import Maps from './views/maps';
import Accounts from './views/accounts';
import Customer from './views/customer';
import Transactions from './views/transactions';
import Reports from './views/reports';
import TableList from './views/tablelist';
import Notifications from './views/notification';
import Typography from './views/typography';
import UserProfile from './views/userProfile';
import Upgrade from './views/upgrade';

import Rpt001 from './views/reports/rpt001';
import Rpt002 from './views/reports/rpt002';
import Rpt003 from './views/reports/rpt003';
import Rpt006 from './views/reports/rpt006';
import Rpt007 from './views/reports/rpt007';
import Rpt008 from './views/reports/rpt008';

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    redirect: false,
    layout: "/admin"
  },
  {
    path: "/forrest",
    name: "Forrest",
    icon: "pe-7s-graph3",
    component: Forrest,
    redirect: false,
    layout: "/admin"
  },
  {
    path: "/accounts",
    name: "Accounts",
    icon: "pe-7s-note2",
    component: Accounts,
    redirect: false,
    layout: "/admin"
  },
  {
    path: "/customer",
    name: "Customer",
    icon: "pe-7s-user",
    component: Customer,
    redirect: false,
    layout: "/admin"
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: "pe-7s-note",
    component: Transactions,
    redirect: false,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "pe-7s-server",
    component: Reports,
    redirect: false,
    layout: "/admin"
  },  
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    redirect: false,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    redirect: false,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    redirect: false,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    redirect: false,
    layout: "/admin"
  }, 
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    redirect: false,
    layout: "/admin"
  },  
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    redirect: false,
    layout: "/admin"
  },   
  {
    upgrade: false,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade,
    redirect: false,
    layout: "/admin"
  },

  // routes for report list
  {
    path: '/rpt001',
    name: 'rpt001',
    icon: '',
    component: Rpt001,
    redirect: true,
    layout: '/admin'
  },
  {
    path: '/rpt002',
    name: 'rpt002',
    icon: '',
    component: Rpt002,
    redirect: true,
    layout: '/admin'
  },
  {
    path: '/rpt003',
    name: 'rpt003',
    icon: '',
    component: Rpt003,
    redirect: true,
    layout: '/admin'
  },
  {
    path: '/rpt006',
    name: 'rpt006',
    icon: '',
    component: Rpt006,
    redirect: true,
    layout: '/admin'
  },
  {
    path: '/rpt007',
    name: 'rpt007',
    icon: '',
    component: Rpt007,
    redirect: true,
    layout: '/admin'
  },
  {
    path: '/rpt008',
    name: 'rpt008',
    icon: '',
    component: Rpt008,
    redirect: true,
    layout: '/admin'
  }
];

export default routes;
