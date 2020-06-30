import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
/* refer to https://react.i18next.com/guides/quick-start */

// the translations (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'login': 'Login',
      'username': 'Username',
      'password': 'Password',
      'inventory': 'Inventory',
      'Dashboard': 'Dashboard',
      'Accounts': 'Accounts',
      'Transactions': 'Transactions',
      'Reports': 'Reports',
      'Maps': 'Maps',

      'User Profile': 'User Profile',
      'Table List': 'Table List',
      'Icons': 'Icons',
      'Typography': 'Typography',
      'Notifications': 'Notifications',
      'last_update': 'Last updated, Today',
      'refresh': 'Refresh',
      'sign_out': 'Sign out'
    }
  },
  vi: {
    translation: {
      'login': 'Đăng nhập',
      'username': 'Tên đăng nhập',
      'password': 'Mật khẩu',
      'inventory': 'Quản lý kho',
      'Dashboard': 'Bảng điện tử',
      'Accounts': 'Tài khoản',
      'Transactions': 'Giao dịch',
      'Reports': 'Báo cáo',
      'Maps': 'Bản đồ',
      
      'User Profile': 'User Profile',
      'Table List': 'Table List',
      'Icons': 'Icons',
      'Typography': 'Typography',
      'Notifications': 'Notifications',
      'last_update': 'Last updated, Today',
      'refresh': 'Đồng bộ',
      'sign_out': 'Đăng xuất'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;