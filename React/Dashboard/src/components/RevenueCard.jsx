import './RevenueCard.css';

const RevenueCard = () => {
  return (
    <div className="revenue-card">
      <div className="revenue-label">Revenue</div>
      <div className="revenue-display">
        <div className="revenue-main">
          <span className="amount-value">$528,976</span>
          <span className="amount-cents">.82</span>
        </div>
        <div className="revenue-badges">
          <span className="badge positive">↑ 12%</span>
          <span className="badge increase">+$72,801</span>
        </div>
      </div>
      <div className="revenue-meta">
        vs prev: <strong>$450,801.23</strong> · Jan 1 - Aug 21, 2025
      </div>
    </div>
  );
};

export default RevenueCard;
