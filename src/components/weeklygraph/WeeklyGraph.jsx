import { Bar } from "react-chartjs-2";
import "./weeklygraph.css";
import { Chart as ChartJS } from "chart.js/auto";
import totalData from "../../data.json";

const WeeklyGraph = ({ data }) => {
  const chartOptions = {
    onHover: (event, chartElement) => {
      chartElement.length === 1
        ? (event.native.target.style.cursor = "pointer")
        : (event.native.target.style.cursor = "default");
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.parsed.y !== null) {
              return " $" + context.parsed.y.toFixed(2);
            }
            return null;
          },
        },
      },
    },
  };

  const amounts = totalData.map((item) => item.amount);
  const sum = amounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <>
      <h2 className="graph__title">Spending - Last 7 days</h2>
      <Bar data={data} options={chartOptions} />
      <div className="total">
        <div className="total__title">
          <p>Total this week</p>
        </div>
        <div className="total__amount">
          <div className="total__amount-amount">
            <h2>${sum}</h2>
          </div>
          <div className="total__amount-percent">
            <div className="total__amount-percent-number">
              <p>+2.4%</p>
            </div>
            <div className="total__amount-percent-text">
              <p>from last week</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyGraph;
