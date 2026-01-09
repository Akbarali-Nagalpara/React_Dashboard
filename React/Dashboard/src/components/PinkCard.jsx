import './PinkCard.css';

const PinkCard = () => {
  return (
    <div className="pink-card">
      <div className="pink-card-header">
        <div className="pink-card-label">Platform value</div>
        <div className="pink-card-sublabel">by dribbble</div>
      </div>
      
      <div className="pink-card-amount">$19,525</div>
      
      <div className="pink-card-breakdown">
        <div className="breakdown-row">
          <span className="breakdown-value">$72,801.23</span>
          <span className="breakdown-badge pink-badge">+12%</span>
        </div>
        <div className="breakdown-row">
          <span className="breakdown-value">$450,801</span>
          <span className="breakdown-badge dark-badge">+$824</span>
        </div>
      </div>

      <div className="pink-card-footer">
        <span className="footer-badge">$19,801</span>
      </div>
    </div>
  );
};

export default PinkCard;
