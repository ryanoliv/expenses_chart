import "./balance.css";
import balanceImg from "../../assets/logo.svg";
// import balances from "../../data.json";

const Balance = () => {
  // const amounts = balances.map((balance) => balance.amount);
  // const sum = amounts.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   0
  // );

  return (
    <div className="balance">
      <div className="balance__text">
        <h1 className="balance__text-title">My Balance</h1>
        <p className="balance__text-amount">$921.48</p>
      </div>
      <div className="balance__img">
        <img src={balanceImg} alt="balance" />
      </div>
    </div>
  );
};

export default Balance;
