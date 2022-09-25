import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import getTransactions from "./transactionsService";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  useEffect(function useEffectFunction() {
    getTransactions().then((result) => setTransactions(result));
  }, []);

  function filterTransactions(term) {
    let results = transactions.filter((transaction) =>
      transaction.description?.includes(term)
    );
    console.log("Results:" + transactions);
    setTransactions(results);
  }

  return (
    <div>
      <Search filterTransactions={filterTransactions} />
      <AddTransactionForm setTransactions={setTransactions} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
