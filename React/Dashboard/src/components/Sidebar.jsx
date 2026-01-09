/**
 * Sidebar Component
 * Main navigation sidebar with collapsible menu for mobile devices
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether sidebar is open (mobile view)
 * @param {Function} props.onClose - Callback to close the sidebar
 */
import PropTypes from 'prop-types';
import { RiHome5Fill, RiBarChartBoxFill, RiSettings3Fill, RiCloseLine } from 'react-icons/ri';
import { BiSolidNotification } from 'react-icons/bi';
import { APP_CONFIG } from '../constants';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      <aside 
        className={`sidebar ${isOpen ? 'open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon" aria-hidden="true">{APP_CONFIG.LOGO}</div>
            <span className="logo-text">{APP_CONFIG.COMPANY_NAME}</span>
          </div>
          <button 
            className="sidebar-close" 
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <RiCloseLine />
          </button>
        </div>

      {/* Navigation Sections */}
      <nav className="sidebar-nav">
        {/* Quick Access */}
        <div className="nav-section">
          <div className="nav-label">Starred</div>
          <div className="nav-label">Recent</div>
          <div className="nav-label">My gallery</div>
        </div>

        {/* Data Section */}
        <div className="nav-section">
          <h2 className="nav-label">DATA</h2>
          <button className="nav-item active" aria-current="page">
            <div className="nav-icon-wrapper" aria-hidden="true">
              <RiHome5Fill />
            </div>
            <span>Dashboard</span>
          </button>
        </div>

        {/* Reports Section */}
        <div className="nav-section">
          <h2 className="nav-label">REPORTS</h2>
          <button className="nav-item">Deals by me</button>
          <button className="nav-item">Deals by user</button>
          <button className="nav-item">Lost overview</button>
          <button className="nav-item">My reports</button>
          <button className="nav-item">Revenue dashboard</button>
          <button className="nav-item">Deal duration</button>
          <button className="nav-item">New report</button>
        </div>

        {/* Analytics Section */}
        <div className="nav-section">
          <h2 className="nav-label">ANALYTICS</h2>
          <button className="nav-item">
            <div className="nav-icon-wrapper" aria-hidden="true">
              <RiBarChartBoxFill />
            </div>
            <span>Analytics</span>
            <span className="badge" aria-label="12 notifications">12</span>
          </button>
          <button className="nav-item">Manage folders</button>
        </div>
      </nav>

      {/* Footer Actions */}
      <footer className="sidebar-footer">
        <button className="footer-icon" aria-label="Notifications">
          <BiSolidNotification />
        </button>
        <button className="footer-icon" aria-label="Settings">
          <RiSettings3Fill />
        </button>
      </footer>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
