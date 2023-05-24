import "./balance.css";
import balanceImg from "../../assets/logo.svg";

const Balance = () => {
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
