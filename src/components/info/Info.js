import React from 'react'
import Transactions from '../Transactions/Transactions';
import "./info.css";

const Info = ({wallet, data, transactions}) => {


  return (
    <div className="info">
        <div className="info-address">
            <p>
                Address: <a href={`https://www.etherscan.io/address/${wallet}`}>{wallet}</a>
            </p>
        </div>
        <div className="info-balance">
            <p>Balance: {data !== null && data.result * 10e-18 + " ETH"}</p>
        </div>
        <h3>Transactions</h3>
        {transactions?.status == "0" ? "No Transactions" : transactions?.result.
        map((transaction) => (
            <Transactions data={transaction}/>
        ))}
    </div>
  )
}

export default Info