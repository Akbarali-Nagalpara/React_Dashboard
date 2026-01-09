/**
 * Application Constants
 * Centralized location for all magic numbers, repeated values, and configuration
 */

// Navigation menu items configuration
export const NAVIGATION_ITEMS = {
  STARRED: ['Starred', 'Recent', 'My gallery'],
  DATA: [
    { id: 'dashboard', label: 'Dashboard', isActive: true }
  ],
  REPORTS: [
    'Deals by me',
    'Deals by user',
    'Lost overview',
    'My reports',
    'Revenue dashboard',
    'Deal duration',
    'New report'
  ],
  ANALYTICS: [
    { id: 'analytics', label: 'Analytics', badge: '12' },
    { id: 'folders', label: 'Manage folders' }
  ]
};

// User data configuration
export const MOCK_USERS = [
  { id: 1, name: 'Artem A.', initial: 'A', color: '#1a1a1a' },
  { id: 2, name: 'Eren Y.', initial: 'E', color: '#ea4c89' },
  { id: 3, name: 'Kristin A.', initial: 'K', color: '#4a90e2' },
];

// Deal data configuration
export const MOCK_DEALS = [
  { 
    id: 'deal-1',
    name: 'Dr.Ubbble', 
    avatar: { initial: 'D', color: '#ea4c89' }, 
    amount: 237450, 
    percentage: -28, 
    status: '$298,832' 
  },
  { 
    id: 'deal-2',
    name: 'Instagram', 
    avatar: { initial: 'I', color: '#e4405f' }, 
    amount: 342623, 
    percentage: 37, 
    status: '(28) 851' 
  },
  { 
    id: 'deal-3',
    name: 'Behance', 
    avatar: { initial: 'B', color: '#1769ff' }, 
    amount: 388585, 
    percentage: 21, 
    status: '$196,341' 
  },
  { 
    id: 'deal-4',
    name: 'Artem A.', 
    avatar: { initial: 'A', color: '#4a90e2' }, 
    amount: 208843, 
    percentage: 32, 
    status: '$117,119' 
  },
  { 
    id: 'deal-5',
    name: 'Mikola A.', 
    avatar: { initial: 'M', color: '#6c63ff' }, 
    amount: 196361, 
    percentage: 35, 
    status: '$34,200' 
  },
];

// Platform data configuration
export const PLATFORM_DATA = {
  DRIBBBLE: { name: 'Dribbble', revenue: 19525, percentage: 28 },
  INSTAGRAM: { name: 'Instagram', revenue: 28100, percentage: 45 },
  BEHANCE: { name: 'Behance', revenue: 12820, percentage: 15 },
  LINKEDIN: { name: 'Linkedin', revenue: 34200, percentage: 52 },
  GOOGLE: { name: 'Google Ads', revenue: 23750, percentage: 38 },
};

// Statistics configuration
export const STATS_CONFIG = {
  DEALS: { title: 'Deals', value: '72', change: 15.3 },
  UNIQUE: { title: 'Unique', value: '9.8', change: 1.2 },
  WIN_RATE: { title: 'Win rate', value: '8.1%', change: -1.5 },
};

// Date/Time formatting options
export const DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

// App branding
export const APP_CONFIG = {
  LOGO: 'G',
  COMPANY_NAME: 'Codenome.com',
  PAGE_TITLE: 'New report',
};

// Timer intervals (in milliseconds)
export const INTERVALS = {
  CLOCK_UPDATE: 1000, // 1 second
  DATA_REFRESH: 30000, // 30 seconds
};

// Chart configuration
export const CHART_CONFIG = {
  GRADIENT_ID: 'colorRevenue',
  GRADIENT_COLORS: {
    START: '#ea4c89',
    END: '#f093fb',
  },
  ANIMATION_DURATION: 1000,
};
