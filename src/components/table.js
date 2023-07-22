import React from "react";
import TableContent from "./tableContent";

function Table({ transactions,onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <td>Date</td>
          <td>Description</td>
          <td>Category</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TableContent
            key={transaction.id}
           transaction={transaction}
           onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
