import React from "react";
import Transactions from "../Transactions/Transactions";
import "./info.css";

const Info = ({ wallet, data, transactions }) => {
  return (
    <div className="info">
      <div className="info-balance">
        <p>
          Balance: {data !== null && (data.result / 1e18).toFixed(2) + " ETH"}
        </p>
      </div>
      <div className="transactions-container">
        {transactions?.status === "0" ? (
          <p className="no-transactions-p">No transactions found.</p>
        ) : (
          transactions?.result.map((transaction) => (
            <Transactions data={transaction} />
          ))
        )}
      </div>
    </div>
  );
};

export default Info;
