import './SalesCard.css';

const SalesCard = () => {
  return (
    <div className="sales-card">
      <div className="sales-header">
        <span className="sales-label">Sales dynamic</span>
      </div>
      <div className="sales-percentage">45.3%</div>
      <div className="sales-amount">$71,048</div>
      <div className="sales-metrics">
        <div className="sales-metric">
          <span className="metric-label">28.1%</span>
          <span className="metric-value">$85,945</span>
        </div>
        <div className="sales-metric">
          <span className="metric-label">Other</span>
          <span className="metric-value">9%</span>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
