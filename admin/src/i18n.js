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
      'Icons': 'Icons',
      'Maps': 'Maps',
      'Notifications': 'Notifications',
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
      'User Profile': 'Thông tin nhân viên',
      'Table List': 'Table List',
      'Typography': 'Typography',
      'Icons': 'Biểu tượng',
      'Maps': 'Bản đồ',
      'Notifications': 'Thông báo',
      'Reports': 'Báo cáo',
      'last_update': 'Last updated, Today',
      'refresh': 'Đồng bộ',
      'sign_out': 'Đăng xuất'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;