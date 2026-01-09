/**
 * StatCard Component
 * Displays a statistical metric with its value and percentage change
 * @param {Object} props - Component props
 * @param {string} props.title - The metric title
 * @param {string|number} props.value - The current value
 * @param {number} props.change - Percentage change (positive or negative)
 * @param {React.ReactNode} [props.icon] - Optional icon element
 * @param {string} [props.trend] - Optional trend description
 */
import PropTypes from 'prop-types';
import './StatCard.css';

const StatCard = ({ title, value, change, icon, trend }) => {
  const isPositive = change >= 0;
  const changeLabel = `${isPositive ? '+' : ''}${change}%`;
  
  return (
    <article className="stat-card" role="article" aria-label={`${title} metric`}>
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        {icon && <span className="stat-icon" aria-hidden="true">{icon}</span>}
      </div>
      <div className="stat-content">
        <div className="stat-value" aria-label="Current value">{value}</div>
        <div 
          className={`stat-change ${isPositive ? 'positive' : 'negative'}`}
          aria-label={`Change: ${changeLabel}`}
        >
          {changeLabel}
        </div>
      </div>
      {trend && <div className="stat-trend" aria-label="Trend">{trend}</div>}
    </article>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  change: PropTypes.number.isRequired,
  icon: PropTypes.node,
  trend: PropTypes.string,
};

StatCard.defaultProps = {
  icon: null,
  trend: null,
};

export default StatCard;
