/**
 * Header Component
 * Simplified navigation bar with search, add button, and profile
 * @param {Object} props - Component props
 * @param {Function} props.onMenuClick - Callback for mobile menu toggle
 */
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { RiSearchLine } from 'react-icons/ri';
import './Header.css';

const Header = ({ onMenuClick }) => {
  // Event handlers
  const handleSearch = useCallback((event) => {
    // TODO: Implement search functionality
    console.log('Search:', event.target.value);
  }, []);

  return (
    <header className="header" role="banner">
      <div className="header-container">
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={onMenuClick}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Search Bar */}
        <div className="search-bar" role="search">
          <RiSearchLine className="search-icon" aria-hidden="true" />
          <input 
            type="search" 
            placeholder='Try searching "insights"'
            aria-label="Search dashboard"
            onChange={handleSearch}
          />
        </div>

        {/* Right Actions */}
        <div className="header-actions">
          {/* Profile Avatar */}
          <button className="profile-btn" aria-label="User profile">
            <div className="profile-avatar">A</div>
          </button>

          {/* Add Button */}
          <button className="add-btn" aria-label="Add new item">
            +
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default Header;
