import { useState } from "react";
import "./App.css";
import { Balance, WeeklyGraph } from "./components";
import data from "./data.json";

function App() {
  const currentDate = new Date().getDay();
  const colors = data.map((_, index) =>
    index === currentDate - 1 ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
  );
  const hoveredColors = colors.map((color, index) =>
    index === currentDate - 1 ? "hsl(186, 49%, 80%)" : "hsl(10, 100%, 76%)"
  );
  const [userdata] = useState({
    labels: data.map((data) => data.day),
    datasets: [
      {
        data: data.map((data) => data.amount),
        backgroundColor: colors,
        hoverBackgroundColor: hoveredColors,
        borderRadius: 5,
      },
    ],
  });

  return (
    <main className="container">
      <Balance />
      <div className="graph">
        <WeeklyGraph data={userdata} />
      </div>
    </main>
  );
}

export default App;
