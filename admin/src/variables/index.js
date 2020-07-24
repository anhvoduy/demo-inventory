var defaultWidth =
  window.screen.width > 768
    ? (window.screen.width * 1) / 3
    : window.screen.width;

var style = {
  Wrapper: {},
  Containers: {
    DefaultStyle: {
      position: "fixed",
      width: defaultWidth,
      padding: "10px 10px 10px 20px",
      zIndex: 9998,
      WebkitBoxSizing: "",
      MozBoxSizing: "",
      boxSizing: "",
      height: "auto",
      display: "inline-block",
      border: "0",
      fontSize: "14px",
      WebkitFontSmoothing: "antialiased",
      fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
      fontWeight: "400",
      color: "#FFFFFF"
    },

    tl: {
      top: "0px",
      bottom: "auto",
      left: "0px",
      right: "auto"
    },

    tr: {
      top: "0px",
      bottom: "auto",
      left: "auto",
      right: "0px"
    },

    tc: {
      top: "0px",
      bottom: "auto",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    },

    bl: {
      top: "auto",
      bottom: "0px",
      left: "0px",
      right: "auto"
    },

    br: {
      top: "auto",
      bottom: "0px",
      left: "auto",
      right: "0px"
    },

    bc: {
      top: "auto",
      bottom: "0px",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    }
  },

  NotificationItem: {
    DefaultStyle: {
      position: "relative",
      width: "100%",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "14px",
      margin: "10px 0 0",
      padding: "10px",
      display: "block",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      opacity: 0,
      transition: "all 0.5s ease-in-out",
      WebkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",

      isHidden: {
        opacity: 0
      },

      isVisible: {
        opacity: 1
      }
    },

    success: {
      borderTop: 0,
      backgroundColor: "#a1e82c",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    error: {
      borderTop: 0,
      backgroundColor: "#fc727a",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    warning: {
      borderTop: 0,
      backgroundColor: "#ffbc67",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    info: {
      borderTop: 0,
      backgroundColor: "#63d8f1",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    }
  },

  Title: {
    DefaultStyle: {
      fontSize: "30px",
      margin: "0",
      padding: 0,
      fontWeight: "bold",
      color: "#FFFFFF",
      display: "block",
      left: "15px",
      position: "absolute",
      top: "50%",
      marginTop: "-15px"
    }
  },

  MessageWrapper: {
    DefaultStyle: {
      marginLeft: "55px",
      marginRight: "30px",
      padding: "0 12px 0 0",
      color: "#FFFFFF",
      maxWidthwidth: "89%"
    }
  },

  Dismiss: {
    DefaultStyle: {
      fontFamily: "inherit",
      fontSize: "21px",
      color: "#000",
      float: "right",
      position: "absolute",
      right: "10px",
      top: "50%",
      marginTop: "-13px",
      backgroundColor: "#FFFFFF",
      display: "block",
      borderRadius: "50%",
      opacity: ".4",
      lineHeight: "11px",
      width: "25px",
      height: "25px",
      outline: "0 !important",
      textAlign: "center",
      padding: "6px 3px 3px 3px",
      fontWeight: "300",
      marginLeft: "65px"
    },

    success: {
      // color: '#f0f5ea',
      // backgroundColor: '#a1e82c'
    },

    error: {
      // color: '#f4e9e9',
      // backgroundColor: '#fc727a'
    },

    warning: {
      // color: '#f9f6f0',
      // backgroundColor: '#ffbc67'
    },

    info: {
      // color: '#e8f0f4',
      // backgroundColor: '#63d8f1'
    }
  },

  Action: {
    DefaultStyle: {
      background: "#ffffff",
      borderRadius: "2px",
      padding: "6px 20px",
      fontWeight: "bold",
      margin: "10px 0 0 0",
      border: 0
    },

    success: {
      backgroundColor: "#a1e82c",
      color: "#ffffff"
    },

    error: {
      backgroundColor: "#fc727a",
      color: "#ffffff"
    },

    warning: {
      backgroundColor: "#ffbc67",
      color: "#ffffff"
    },

    info: {
      backgroundColor: "#63d8f1",
      color: "#ffffff"
    }
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  }
};

// for Reports
const thReport = ['ID', 'Code', 'Name_VN', 'Name_En', 'Action'];
const tdReport = [
  ['1', 'rpt001', 'Danh sách tài khoản', 'Accounts', 'Action'],
  ['2', 'rpt002', 'Sổ cái tài khoản', 'Subsidiary ledger', 'Action'],
  ['3', 'rpt003', 'Sổ nhật ký chung', 'General journal', 'Action'],
  ['6', 'rpt006', 'Bảng cân đối phát sinh', 'GL Balance', 'Action'],
  ['7', 'rpt007', 'Bảng cân đối kế toán', 'Balance Sheet', 'Action'],
  ['8', 'rpt008', 'Báo cáo kết quả hoạt động kinh doanh', 'Income Statement', 'Action']
];

//
// //
// // // For tables
// //
//
const thArray = ["ID", "Name", "Salary", "Country", "City"];
const tdArray = [
  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
  ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
  ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
];

//
// //
// // // For Gold
// //
//
const thGold = ["ID", "Name", "Buy", "Sell", "Difference", "Avg", "DateTime"];
const tdGold = [
  ["1", "Vàng SJC 1L - 10L", "54,400", "56,000", "1,600", "55,200", "24-07-2020 11:30:00"],
  ["2", "Vàng SJC 1L - 10L", "54,400", "56,000", "1,600", "55,200", "24-07-2020 11:40:00"],
  ["3", "Vàng SJC 1L - 10L", "54,400", "56,000", "1,600", "55,200", "24-07-2020 11:50:00"]
];

//
// //
// // // For icons
// //
//
const iconsArray = [
  "pe-7s-album",
  "pe-7s-arc",
  "pe-7s-back-2",
  "pe-7s-bandaid",
  "pe-7s-car",
  "pe-7s-diamond",
  "pe-7s-door-lock",
  "pe-7s-eyedropper",
  "pe-7s-female",
  "pe-7s-gym",
  "pe-7s-hammer",
  "pe-7s-headphones",
  "pe-7s-helm",
  "pe-7s-hourglass",
  "pe-7s-leaf",
  "pe-7s-magic-wand",
  "pe-7s-male",
  "pe-7s-map-2",
  "pe-7s-next-2",
  "pe-7s-paint-bucket",
  "pe-7s-pendrive",
  "pe-7s-photo",
  "pe-7s-piggy",
  "pe-7s-plugin",
  "pe-7s-refresh-2",
  "pe-7s-rocket",
  "pe-7s-settings",
  "pe-7s-shield",
  "pe-7s-smile",
  "pe-7s-usb",
  "pe-7s-vector",
  "pe-7s-wine",
  "pe-7s-cloud-upload",
  "pe-7s-cash",
  "pe-7s-close",
  "pe-7s-bluetooth",
  "pe-7s-cloud-download",
  "pe-7s-way",
  "pe-7s-close-circle",
  "pe-7s-id",
  "pe-7s-angle-up",
  "pe-7s-wristwatch",
  "pe-7s-angle-up-circle",
  "pe-7s-world",
  "pe-7s-angle-right",
  "pe-7s-volume",
  "pe-7s-angle-right-circle",
  "pe-7s-users",
  "pe-7s-angle-left",
  "pe-7s-user-female",
  "pe-7s-angle-left-circle",
  "pe-7s-up-arrow",
  "pe-7s-angle-down",
  "pe-7s-switch",
  "pe-7s-angle-down-circle",
  "pe-7s-scissors",
  "pe-7s-wallet",
  "pe-7s-safe",
  "pe-7s-volume2",
  "pe-7s-volume1",
  "pe-7s-voicemail",
  "pe-7s-video",
  "pe-7s-user",
  "pe-7s-upload",
  "pe-7s-unlock",
  "pe-7s-umbrella",
  "pe-7s-trash",
  "pe-7s-tools",
  "pe-7s-timer",
  "pe-7s-ticket",
  "pe-7s-target",
  "pe-7s-sun",
  "pe-7s-study",
  "pe-7s-stopwatch",
  "pe-7s-star",
  "pe-7s-speaker",
  "pe-7s-signal",
  "pe-7s-shuffle",
  "pe-7s-shopbag",
  "pe-7s-share",
  "pe-7s-server",
  "pe-7s-search",
  "pe-7s-film",
  "pe-7s-science",
  "pe-7s-disk",
  "pe-7s-ribbon",
  "pe-7s-repeat",
  "pe-7s-refresh",
  "pe-7s-add-user",
  "pe-7s-refresh-cloud",
  "pe-7s-paperclip",
  "pe-7s-radio",
  "pe-7s-note2",
  "pe-7s-print",
  "pe-7s-network",
  "pe-7s-prev",
  "pe-7s-mute",
  "pe-7s-power",
  "pe-7s-medal",
  "pe-7s-portfolio",
  "pe-7s-like2",
  "pe-7s-plus",
  "pe-7s-left-arrow",
  "pe-7s-play",
  "pe-7s-key",
  "pe-7s-plane",
  "pe-7s-joy",
  "pe-7s-photo-gallery",
  "pe-7s-pin",
  "pe-7s-phone",
  "pe-7s-plug",
  "pe-7s-pen",
  "pe-7s-right-arrow",
  "pe-7s-paper-plane",
  "pe-7s-delete-user",
  "pe-7s-paint",
  "pe-7s-bottom-arrow",
  "pe-7s-notebook",
  "pe-7s-note",
  "pe-7s-next",
  "pe-7s-news-paper",
  "pe-7s-musiclist",
  "pe-7s-music",
  "pe-7s-mouse",
  "pe-7s-more",
  "pe-7s-moon",
  "pe-7s-monitor",
  "pe-7s-micro",
  "pe-7s-menu",
  "pe-7s-map",
  "pe-7s-map-marker",
  "pe-7s-mail",
  "pe-7s-mail-open",
  "pe-7s-mail-open-file",
  "pe-7s-magnet",
  "pe-7s-loop",
  "pe-7s-look",
  "pe-7s-lock",
  "pe-7s-lintern",
  "pe-7s-link",
  "pe-7s-like",
  "pe-7s-light",
  "pe-7s-less",
  "pe-7s-keypad",
  "pe-7s-junk",
  "pe-7s-info",
  "pe-7s-home",
  "pe-7s-help2",
  "pe-7s-help1",
  "pe-7s-graph3",
  "pe-7s-graph2",
  "pe-7s-graph1",
  "pe-7s-graph",
  "pe-7s-global",
  "pe-7s-gleam",
  "pe-7s-glasses",
  "pe-7s-gift",
  "pe-7s-folder",
  "pe-7s-flag",
  "pe-7s-filter",
  "pe-7s-file",
  "pe-7s-expand1",
  "pe-7s-exapnd2",
  "pe-7s-edit",
  "pe-7s-drop",
  "pe-7s-drawer",
  "pe-7s-download",
  "pe-7s-display2",
  "pe-7s-display1",
  "pe-7s-diskette",
  "pe-7s-date",
  "pe-7s-cup",
  "pe-7s-culture",
  "pe-7s-crop",
  "pe-7s-credit",
  "pe-7s-copy-file",
  "pe-7s-config",
  "pe-7s-compass",
  "pe-7s-comment",
  "pe-7s-coffee",
  "pe-7s-cloud",
  "pe-7s-clock",
  "pe-7s-check",
  "pe-7s-chat",
  "pe-7s-cart",
  "pe-7s-camera",
  "pe-7s-call",
  "pe-7s-calculator",
  "pe-7s-browser",
  "pe-7s-box2",
  "pe-7s-box1",
  "pe-7s-bookmarks",
  "pe-7s-bicycle",
  "pe-7s-bell",
  "pe-7s-battery",
  "pe-7s-ball",
  "pe-7s-back",
  "pe-7s-attention",
  "pe-7s-anchor",
  "pe-7s-albums",
  "pe-7s-alarm",
  "pe-7s-airplay"
];

//
// //
// // // // For dashboard's charts
// //
//
// Data for Pie Chart
var dataPie = {
  labels: ["40%", "20%", "40%"],
  series: [40, 20, 40]
};
var legendPie = {
  names: ["Open", "Bounce", "Unsubscribe"],
  types: ["info", "danger", "warning"]
};

// data for Gold Chart
var dataGolds = {
  labels: [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00"
  ],
  series: [
    [53.40, 53.45, 53.47, 54.57, 54.58, 54.59, 55.10, 55.30, 55.40, 55.50, 55.65, 55.75, 55.80],
    [54.40, 54.45, 54.50, 55.50, 55.60, 55.80, 56.00, 56.20, 56.40, 56.60, 56.70, 56.80, 56.90]
  ]
};

var optionsGolds = {
  low: 48.00,
  high: 58.00,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: false
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};
var responsiveGolds = [
  [
    "screen and (max-width: 640px)",
    {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendGolds = {
  names: ["Buy", "Sell"],
  types: ["info", "danger"]
};

// Data for Line Chart
var dataSales = {
  labels: [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00"
  ],
  series: [
    [287, 385, 490, 492, 554, 586, 698, 695],
    [67, 152, 143, 240, 287, 335, 435, 437]
  ]
};
var optionsSales = {
  low: 0,
  high: 2000,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: false
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};
var responsiveSales = [
  [
    "screen and (max-width: 640px)",
    {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendSales = {
  names: ["Open", "Click", "Click Second Time"],
  types: ["info", "danger", "warning"]
};

// Data for Bar Chart
var dataBar = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
};
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};
var responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendBar = {
  names: ["Tesla Model S", "BMW 5 Series"],
  types: ["info", "danger"]
};

module.exports = {
  style, // For notifications (App container and Notifications view)
  thArray,
  tdArray, // For tables (TableList view)
  thGold,
  tdGold,
  iconsArray, // For icons (Icons view)
  thReport,
  tdReport,
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataGolds,
  optionsGolds,
  responsiveGolds,
  legendGolds,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar // For charts (Dashboard view)
};


/*
1. Break-even point: Điểm hòa vốn
 
2. Business entity concept: Nguyên tắc doanh nghiệp là một thực thể
 
3. Business purchase: Mua lại doanh nghiệp
 
4. Calls in arrear: Vốn gọi trả sau
 
5. Capital: Vốn
 
6. Authorized capital: Vốn điều lệ
 
7. Called-up capital: Vốn đã gọi
 
8. Capital expenditure: Chi phí đầu tư
 
9. Invested capital: Vốn đầu tư
 
10. Issued capital: Vốn phát hành
 
11. Uncalled capital: Vốn chưa gọi
 
12. Working capital: Vốn lưu động (hoạt động)
 
13. Capital redemption reserve: Quỹ dự trữ bồi hoàn vốn cổ phần
 
14. Carriage: Chi phí vận chuyển
 
15. Carriage inwards: Chi phí vận chuyển hàng hóa mua
 
16. Carriage outwards: Chi phí vận chuyển hàng hóa bán
 
17. Carrying cost: Chi phí bảo tồn hàng lưu kho
 
18. Cash book: Sổ tiền mặt
 
19. Cash discounts: Chiết khấu tiền mặt
 
20. Cash flow statement: Bảng phân tích lưu chuyển tiền mặt
 
21. Category method: Phương pháp chủng loại
 
22. Cheques: Sec (chi phiếú)
 
23. Clock cards: Thẻ bấm giờ
 
24. Closing an account: Khóa một tài khoản
 
25. Closing stock: Tồn kho cuối kỳ
 
26. Commission errors: Lỗi ghi nhầm tài khoản thanh toán
 
27. Company accounts: Kế toán công ty
 
28. Company Act 1985: Luật công ty năm 1985
 
29. Compensating errors: Lỗi tự triệt tiêu
 
30. Concepts of accounting: Các nguyên tắc kế toán
 
31. Conservatism: Nguyên tắc thận trọng
 
32. Consistency: Nguyên tắc nhất quán
 
33. Control accounts : Tài khoản kiểm tra
 
34. Conventions: Quy ước
 
35. Conversion costs: Chi phí chế biến
 
36. Cost accumulation: Sự tập hợp chi phí
 
37. Cost application: Sự phân bổ chi phí
 
38. Cost concept: Nguyên tắc giá phí lịch sử
 
39. Cost object: Đối tượng tính giá thành
 
40. Cost of goods sold: Nguyên giá hàng bán
 
41. Credit balance: Số dư có
 
42. Credit note: Giấy báo có
 
43. Credit transfer: Lệnh chi
 
44. Creditor: Chủ nợ
 
45. Cumulative preference shares: Cổ phần ưu đãi có tích lũy
 
46. Current accounts: Tài khoản vãng lai
 
47. Current assets: Tài sản lưu động
 
48. Curent liabilities: Nợ ngắn hạn
 
49. Current ratio: Hệ số lưu hoạt
 
50. Debentures: Trái phiếu, giấy nợ
 
51. Debenture interest: Lãi trái phiếu
 
52. Debit note: Giấy báo Nợ
 
53. Debtor: Con nợ
 
54. Depletion: Sự hao cạn
 
55. Depreciation: Khấu hao
 
56. Causes of depreciation: Các nguyên do tính khấu hao
 
57. Depreciation of goodwill: Khấu hao uy tín
 
58. Nature of depreciation: Bản chất của khấu hao
 
59. Provision for depreciation: Dự phòng khấu hao
 
60. Reducing balance method: Phương pháp giảm dần
 
61. Straight-line method: Phương pháp đường thẳng
 
62. Direct costs: Chi phí trực tiếp
 
63. Directors: Hội đồng quản trị
 
64. Directors’ remuneration: Thù kim thành viên Hội đồng quản trị
 
65. Discounts: Chiết khấu
 
66. Discounts allowed: Chiết khấu bán hàng
 
67. Cash discounts: Chiết khấu tiền mặt
 
68. Provision for discounts: Dự phòng chiết khấu
 
69. Discounts received: Chiết khấu mua hàng
 
70. Dishonored cheques: Sec bị từ chối
 
71. Disposal of fixed assets: Thanh lý tài sản cố định
 
72. Dividends: Cổ tức
 
73. Double entry rules: Các nguyên tắc bút toán kép
 
74. Dual aspect concept: Nguyên tắc ảnh hưởng kép
 
75. Drawing: Rút vốn
 
76. Equivalent units: Đơn vị tương đương
 
77. Equivalent unit cost: Giá thành đơn vị tương đương
 
78. Errors: Sai sót
 
79. Expenses prepaid: Chi phí trả trước
 
80. Factory overhead expenses: Chi phí quản lý phân xưởng
 
81. FIFO (First In First Out): Phương pháp nhập trước xuất trước
 
82. Final accounts: Báo cáo quyết toán
 
83. Finished goods: Thành phẩm
 
84. First call: Lần gọi thứ nhất
 
85. Fixed assets: Tài sản cố định
 
86. Fixed capital: Vốn cố định
 
87. Fixed expenses: Định phí / Chi phí cố định
 
88. General ledger: Sổ cái
 
89. General reserve: Quỹ dự trữ chung
 
90. Going concerns concept: Nguyên tắc hoạt động lâu dài
 
91. Goods stolen: Hàng bị đánh cắp
 
92. Goodwill: Uy tín
 
93. Gross loss: Lỗ gộp
 
94. Gross profit: Lãi gộp
 
95. Gross profit percentage: Tỷ suất lãi gộp
 
96. Historical cost: Giá phí lịch sử
 
97. Horizontal accounts: Báo cáo quyết toán dạng chữ T
 
98. Impersonal accounts: Tài khoản phí thanh toán
 
99. Imprest systems: Chế độ tạm ứng
 
100. Income tax: Thuế thu nhập
 
101. Increase in provision: Tăng dự phòng
 
102. Indirect costs: Chi phí gián tiếp
 
103. Installation cost: Chi phí lắp đặt, chạy thử
 
104. Intangible assets: Tài sản vô hình
 
105. Interpretation of accounts: Phân tích các báo cáo quyết toán
 
106. Investments: Đầu tư
 
107. Invoice: Hóa đơn
 
108. Issue of shares: Phát hành cổ phần
 
109. Issued share capital:Vốn cổ phần phát hành
 
110. Job-order cost system: Hệ thống hạch toán chi phí sản xuất theo công việc/ loạt sản phẩm
 
111. Journal: Nhật ký chung
 
112. Journal entries: Bút toán nhật ký
 
113. Liabilities: Công nợ
 
114. LIFO (Last In First Out): Phương pháp nhập sau xuất trước
 
115. Limited company: Công ty trách nhiệm hữu hạn
 
116. Liquidity: Khả năng thanh toán bằng tiền mặt (tính lỏng/ tính thanh khoản)
 
117. Liquidity ratio: Hệ số khả năng thanh toán
 
118. Long-term liabilities: Nợ dài hạn
 
119. Loss: Lỗ
 
120. Gross loss: Lỗ gộp
 
121. Net loss: Lỗ ròng
 
122. Machine hour method: Phương pháp giờ máy
 
123. Manufacturing account: Tài khoản sản xuất
 
124. Mark-up: Tỷ suất lãi trên giá vốn
 
125. Margin: Tỷ suất lãi trên giá bán
 
126. Matching expenses against revenue: Khế hợp chi phí với thu nhập
 
127. Materiality: Tính trọng yếu
 
128. Materials: Nguyên vật liệu
 
129. Money mesurement concept: Nguyên tắc thước đo bằng tiền
 
130. Net assets: Tài sản thuần
 
131. Net book value: Giá trị thuần
 
132. Net realizable value: Giá trị thuần thực hiện được
 
133. Nominal accounts: Tài khoản định danh
 
134. Nominal ledger: Sổ tổng hợp
 
135. Notes to accounts: Ghi chú của báo cáo quyết toán
 
136. Objectivity: Tính khách quan
 
137. Omissions, errors: Lỗi ghi thiếu
 
138. Opening entries: Các bút toán khởi đầu doanh nghiệp
 
139. Opening stock: Tồn kho đầu kỳ
 
140. Operating gains: lợi nhuận trong hoạt động
 
141. Ordinary shares: Cổ phần thường
 
142. Original entry, errors : Lỗi phát sinh từ nhật ký
 
143. Output in equivalent units: Lượng sản phẩm tính theo đơn vị tương đương
 
144. Overdraft: Nợ thấu chi
 
145. Overhead application base: Tiêu thức phân bổ chi phí quản lý phân xưởng
 
146. Overhead application rate: Hệ số phân bổ chi phí quản lý phân xưởng
 
147. Oversubscription of shares: Đăng ký cổ phần vượt mức
 
148. Paid-up capital: Vốn đã góp
 
149. Par, issued at: Phát hành theo mệnh giá
 
150. Periodic stock: Phương pháp theo dõi tồn kho định kỳ
 
151. Perpetual stock: Phương pháp theo dõi tồn kho liên tục
 
152. Personal accounts: Tài khoản thanh toán
 
153. Petty cash books: Sổ quỹ tạp phí
 
154. Petty cashier: Thủ quỹ tạp phí
 
155. Physical deteration: Sự hao mòn vật chất
 
156. Physical units: Đơn vị (sản phẩm thực tế)
 
157. Posting: Vào sổ tài khoản
 
158. Predetermined application rate: Hệ số phân bổ chi phí định trước
 
159. Preference shares: Cổ phần ưu đãi
 
160. Cummulative preference share: Cổ phần ưu đãi có tích lũy
 
161. Non-cummulative preference share: Cổ phần ưu đãi không tích lũy
 
162. Preliminary expenses: Chi phí khởi lập
 
163. Prepaid expenses: Chi phí trả trước
 
164. Private company: Công ty tư nhân
 
165. Profitability: Khả năng sinh lời
 
166. Prime cost: Giá thành cơ bản
 
167. Principle, error of: Lỗi định khoản
 
168. Process cost system: Hệ thống hạch toán CPSX theo giai đoạn công nghệ
 
169. Product cost: Giá thành sản phẩm
 
170. Production cost: Chi phí sản xuất
 
171. Profits: lợi nhuận, lãi
 
172. Appropriation of profit: Phân phối lợi nhuận
 
173. Gross profit: Lãi gộp
 
174. Net profit: Lãi ròng
 
175. Profit and loss account: Tài khoản kết quả
*/