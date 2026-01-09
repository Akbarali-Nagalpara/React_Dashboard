/**
 * DealRow Component
 * Displays individual deal information in a list format
 * @param {Object} props - Component props
 * @param {string} props.name - Deal/user name
 * @param {Object} props.avatar - Avatar configuration
 * @param {string} props.avatar.initial - Avatar initial letter
 * @param {string} props.avatar.color - Avatar background color
 * @param {number} props.amount - Deal amount
 * @param {number} props.percentage - Performance percentage
 * @param {string} props.status - Deal status or identifier
 * @param {Array} [props.platforms] - Optional platform icons
 */
import PropTypes from 'prop-types';
import { formatCurrency } from '../utils/formatters';
import './DealRow.css';

const DealRow = ({ name, avatar, amount, percentage, status, platforms }) => {
  const isPositive = percentage >= 0;
  const absolutePercentage = Math.abs(percentage);
  const changeLabel = `${isPositive ? '+' : '-'}${absolutePercentage}%`;
  
  return (
    <article className="deal-row" role="listitem">
      <div className="deal-user">
        <div 
          className="deal-avatar" 
          style={{ backgroundColor: avatar.color }}
          aria-label={`${name} avatar`}
        >
          {avatar.initial}
        </div>
        <div className="deal-info">
          <h3 className="deal-name">{name}</h3>
          <p className="deal-id">{status}</p>
        </div>
      </div>

      <div className="deal-stats">
        <div className="deal-amount" aria-label={`Amount: ${formatCurrency(amount)}`}>
          {formatCurrency(amount)}
        </div>
        <div className="deal-metrics">
          <span className="deal-count" aria-label="Count">118</span>
          <span className="deal-percentage" aria-label="Percentage">{percentage}%</span>
          <span 
            className={`deal-change ${isPositive ? 'positive' : 'negative'}`}
            aria-label={`Change: ${changeLabel}`}
          >
            {changeLabel}
          </span>
        </div>
      </div>

      {platforms && platforms.length > 0 && (
        <div className="deal-platforms" aria-label="Platforms">
          {platforms.map((platform, index) => (
            <div key={index} className="platform-icon" aria-hidden="true">
              {platform}
            </div>
          ))}
        </div>
      )}
    </article>
  );
};

DealRow.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    initial: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  amount: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(PropTypes.node),
};

DealRow.defaultProps = {
  platforms: null,
};

export default DealRow;
