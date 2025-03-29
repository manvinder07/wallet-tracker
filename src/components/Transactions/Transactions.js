import React from "react";
import "./transactions.css";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import the FontAwesome icon

const Transactions = ({ data }) => {
  const shortenAddress = (address) => {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "";
  };

  return (
    <>
      <div className="transaction-container">
        <div className="transaction">
          <div className="transaction-header">Transaction Details</div>
          <div className="transaction-info">
            <p>
              <b>Hash </b>
              <span className="address-shortened" title={data.hash}>
                {shortenAddress(data.blockHash)}
              </span>
            </p>
          </div>
          <div className="transaction-info">
            <p>
              <b>Block </b> {"#" + data.blockNumber}
            </p>
          </div>
          <div className="transaction-info">
            <p>
              <b>From </b>{" "}
              <span className="address-shortened" title={data.from}>
                {shortenAddress(data.from)}
              </span>
            </p>
          </div>
          <div className="transaction-info">
            <p>
              <b>To </b>{" "}
              <span className="address-shortened" title={data.to}>
                {shortenAddress(data.to)}
              </span>
            </p>
          </div>
          <div className="transaction-info">
            <p>
              <b>Value </b> {(data.value / 1e18).toFixed(3)} ETH
            </p>
          </div>
          <div className="transaction-info">
            <p>
              <b>Gas: </b> {data.gas}
            </p>
          </div>
          <div className="transaction-info">
            <p className="view-link">
              <a target="_blank" href={`https://etherscan.io/tx/${data.hash}`}>
                <FaExternalLinkAlt className="link-image-view" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
