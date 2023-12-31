import "./SpendingStats.scss";

function SpendingStats({ thisMonth, lastMonthPercent }) {
  return (
    <div className="spending__statistics">
      <div>
        <h2 className="spending__subheading">Total this month</h2>
        <p className="spending__value spending__value--large">{`$${
          !thisMonth ? `0.00` : thisMonth
        }`}</p>
      </div>
      <div className="spending__stat-group" role="text">
        <span className="spending__value">
          {`+${!lastMonthPercent ? `0.00` : lastMonthPercent}%`}
        </span>
        <span className="spending__subheading">from last month</span>
      </div>
    </div>
  );
}

export default SpendingStats;
