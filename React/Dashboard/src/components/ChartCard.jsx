/**
 * ChartCard Component
 * Displays revenue analytics chart with platform icons
 */
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RiDribbbleFill, RiInstagramFill, RiFacebookFill } from 'react-icons/ri';
import { SiGoogle } from 'react-icons/si';
import './ChartCard.css';

const ChartCard = () => {
  // Generate chart data
  const chartData = useMemo(() => [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 },
    { name: 'Jul', value: 7000 },
    { name: 'Aug', value: 6500 },
    { name: 'Sep', value: 8000 },
    { name: 'Oct', value: 7500 },
    { name: 'Nov', value: 9000 },
    { name: 'Dec', value: 8500 },
  ], []);

  return (
    <article className="chart-card" aria-label="Revenue analytics chart">
      <header className="chart-header">
        <div className="chart-title-section">
          <h3 className="chart-title">Revenue</h3>
          <div className="chart-platforms">
            <RiDribbbleFill className="platform-icon-sm dribbble" title="Dribbble" />
            <RiInstagramFill className="platform-icon-sm instagram" title="Instagram" />
            <SiGoogle className="platform-icon-sm google" title="Google" />
            <RiFacebookFill className="platform-icon-sm facebook" title="Facebook" />
          </div>
        </div>
        <div className="chart-value">
          <span className="chart-amount">$54,232</span>
          <span className="chart-label">Total Revenue</span>
        </div>
      </header>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ea4c89" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ea4c89" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              stroke="#999" 
              fontSize={12}
              tickLine={false}
            />
            <YAxis 
              stroke="#999" 
              fontSize={12}
              tickLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                padding: '8px 12px'
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#ea4c89" 
              strokeWidth={2}
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
};

ChartCard.propTypes = {};

export default ChartCard;
