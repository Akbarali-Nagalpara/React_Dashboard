/**
 * App Component
 * Main application container managing layout and state
 */
import { useState, useCallback } from 'react';
import { 
  RiDribbbleFill, 
  RiInstagramFill, 
  RiBehanceFill, 
  RiLinkedinFill 
} from 'react-icons/ri';
import { SiDribbble, SiGoogle } from 'react-icons/si';

// Component imports
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import RevenueCard from './components/RevenueCard';
import StatCard from './components/StatCard';
import DealRow from './components/DealRow';
import PlatformCard from './components/PlatformCard';
import SalesCard from './components/SalesCard';
import ChartCard from './components/ChartCard';
import DarkStatCard from './components/DarkStatCard';
import PinkCard from './components/PinkCard';

// Constants and utilities
import { MOCK_DEALS, MOCK_USERS, PLATFORM_DATA, STATS_CONFIG, APP_CONFIG } from './constants';

import './App.css';

const App = () => {
  // State management
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Event handlers with useCallback for performance optimization
  const handleToggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  // Render method
  return (
    <div className="app">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={handleCloseSidebar} 
      />
      
      <main className="main-content">
        <Header onMenuClick={handleToggleSidebar} />
        
        <div className="content-area">
          {/* Report Info Bar */}
          <div className="report-info-bar">
            <div className="report-users">
              {MOCK_USERS.map((user) => (
                <div 
                  key={user.id}
                  className="user-circle" 
                  style={{ backgroundColor: user.color }}
                  title={user.name}
                >
                  {user.initial}
                </div>
              ))}
            </div>

            <div className="report-actions">
              <button className="action-icon-btn" aria-label="Filter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="action-icon-btn" aria-label="Download">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="action-icon-btn" aria-label="Upload">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 20V7m0 0l-4 4m4-4l4 4M5 3h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Page Header */}
          <header className="page-header">
            <h1 className="page-title">{APP_CONFIG.PAGE_TITLE}</h1>
          </header>

          <div className="dashboard-grid">
            {/* Row 1: Key Metrics Overview */}
            <section className="row-1" aria-label="Key performance metrics">
              <RevenueCard />
              <DarkStatCard />
              <StatCard 
                title={STATS_CONFIG.DEALS.title} 
                value={STATS_CONFIG.DEALS.value} 
                change={STATS_CONFIG.DEALS.change} 
              />
              <StatCard 
                title={STATS_CONFIG.UNIQUE.title} 
                value={STATS_CONFIG.UNIQUE.value} 
                change={STATS_CONFIG.UNIQUE.change} 
              />
              <StatCard 
                title={STATS_CONFIG.WIN_RATE.title} 
                value={STATS_CONFIG.WIN_RATE.value} 
                change={STATS_CONFIG.WIN_RATE.change} 
              />
            </section>

            {/* Row 2: Deals Management Section */}
            <section className="row-2" aria-label="Recent deals">
              <div className="deals-section">
                <div className="section-header">
                  <div className="filters">
                    <button 
                      className="filter-btn" 
                      aria-label="Open filters"
                    >
                      📊 Filters
                    </button>
                    <button 
                      className="icon-btn-sm"
                      aria-label="View options"
                    >
                      ☰
                    </button>
                    <button 
                      className="icon-btn-sm"
                      aria-label="Settings"
                    >
                      ⚙
                    </button>
                  </div>
                  <button 
                    className="details-btn"
                    aria-label="View details"
                  >
                    Details
                  </button>
                </div>

                <div className="deals-list" role="list">
                  {MOCK_DEALS.map((deal) => (
                    <DealRow 
                      key={deal.id} 
                      {...deal} 
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Row 3: Platform Value Distribution */}
            <section className="row-3" aria-label="Platform value breakdown">
              <div className="row-3-left">
                <PinkCard />
              </div>
              
              <div className="row-3-right">
                <PlatformCard 
                  name={PLATFORM_DATA.DRIBBBLE.name}
                  icon={<RiDribbbleFill />} 
                  revenue={PLATFORM_DATA.DRIBBBLE.revenue}
                  percentage={PLATFORM_DATA.DRIBBBLE.percentage}
                />
                <PlatformCard 
                  name={PLATFORM_DATA.INSTAGRAM.name}
                  icon={<RiInstagramFill />} 
                  revenue={PLATFORM_DATA.INSTAGRAM.revenue}
                  percentage={PLATFORM_DATA.INSTAGRAM.percentage}
                />
              </div>
            </section>

            {/* Row 4: Platform Performance & Sales */}
            <section className="row-4" aria-label="Platform performance metrics">
              <div className="row-4-platforms">
                <PlatformCard 
                  name={PLATFORM_DATA.BEHANCE.name}
                  icon={<RiBehanceFill />} 
                  revenue={PLATFORM_DATA.BEHANCE.revenue}
                  percentage={PLATFORM_DATA.BEHANCE.percentage}
                />
                <PlatformCard 
                  name={PLATFORM_DATA.LINKEDIN.name}
                  icon={<RiLinkedinFill />} 
                  revenue={PLATFORM_DATA.LINKEDIN.revenue}
                  percentage={PLATFORM_DATA.LINKEDIN.percentage}
                />
                <PlatformCard 
                  name={PLATFORM_DATA.GOOGLE.name}
                  icon={<SiGoogle />} 
                  revenue={PLATFORM_DATA.GOOGLE.revenue}
                  percentage={PLATFORM_DATA.GOOGLE.percentage}
                />
              </div>
              <SalesCard />
            </section>

            {/* Row 5: Revenue Analytics */}
            <section className="row-5" aria-label="Revenue analytics chart">
              <ChartCard />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
