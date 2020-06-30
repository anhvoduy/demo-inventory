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
      'User Profile': 'User Profile',
      'Table List': 'Table List',
      'Typography': 'Typography',
      'Notifications': 'Notifications',
      'Icons': 'Icons',
      'Maps': 'Maps',
      'Reports': 'Reports',
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
      'User Profile': 'User Profile',
      'Table List': 'Table List',
      'Typography': 'Typography',
      'Notifications': 'Notifications',
      'Icons': 'Biểu tượng',
      'Maps': 'Bản đồ',
      'Reports': 'Báo cáo',
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