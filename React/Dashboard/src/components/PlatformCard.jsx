/**
 * PlatformCard Component
 * Displays platform-specific revenue metrics with icon and percentage
 * @param {Object} props - Component props
 * @param {string} props.name - Platform name
 * @param {React.ReactNode} props.icon - Platform icon element
 * @param {number} props.revenue - Revenue amount
 * @param {number} props.percentage - Performance percentage
 * @param {string} [props.trend] - Optional trend description
 */
import PropTypes from 'prop-types';
import { formatCurrency } from '../utils/formatters';
import './PlatformCard.css';

const PlatformCard = ({ name, icon, revenue, percentage, trend }) => {
  return (
    <article className="platform-card" role="article" aria-label={`${name} platform metrics`}>
      <div className="platform-icon-wrapper" aria-hidden="true">
        {icon}
      </div>
      <div className="platform-details">
        <h3 className="platform-name">{name}</h3>
        <p className="platform-label">by referrer category</p>
      </div>
      <div className="platform-stats">
        <div className="platform-revenue" aria-label={`Revenue: ${formatCurrency(revenue)}`}>
          {formatCurrency(revenue)}
        </div>
        <div className="platform-percentage" aria-label={`Performance: ${percentage}%`}>
          {percentage}%
        </div>
      </div>
      {trend && <div className="platform-trend" aria-label="Trend">{trend}</div>}
    </article>
  );
};

PlatformCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  revenue: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  trend: PropTypes.string,
};

PlatformCard.defaultProps = {
  trend: null,
};

export default PlatformCard;
