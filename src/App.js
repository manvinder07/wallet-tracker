import "./App.css";
import { useState } from "react";
import Info from "./components/info/Info";

function App() {
  const [wallet, setWallet] = useState("");
  const [data, setData] = useState(null);
  const [transactions, setTransactions] = useState(null);

  function updateWallet(e) {
    setWallet(e.target.value);
  }

  function getWalletData(wallet) {
    fetch(
      `https://api.etherscan.io/api?module=account&action=balance&address=${wallet}&tag=latest&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 0) {
          setData(data);
        }
      });

    fetch(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${wallet}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((transactions) => {
        setTransactions(transactions);
      });
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      getWalletData(wallet);
    }
  }

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Ethereum Wallet Tracker</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter Wallet Address"
            className="input"
            onChange={updateWallet}
            onKeyDown={handleKeyPress} // Trigger the search on pressing Enter
          />
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        <Info wallet={wallet} data={data} transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
