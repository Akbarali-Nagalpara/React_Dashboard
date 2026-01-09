import './DarkStatCard.css';

const DarkStatCard = () => {
  return (
    <div className="dark-stat-card">
      <div className="dark-card-header">
        <span className="dark-label">Total sales</span>
      </div>
      <div className="dark-amount">$42,300</div>
      <div className="dark-subtext">Real time</div>
    </div>
  );
};

export default DarkStatCard;
