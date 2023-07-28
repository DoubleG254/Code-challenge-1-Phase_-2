import React, { useState, useEffect } from "react";
import Table from "./table";
import AddRow from "./addRow";
import Search from "./search";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://transactions-sf47.onrender.com/transactions")
      .then((resp) => resp.json())
      .then(
        (info) => {
          setData(info);
          setLoading(false);
        }
      )
      //error message in case server doesnt load
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  //Update/Add new transactions to the DOM 
  function onAdd(newRow){
    const updateTransaction=[...data,newRow]
    setData(updateTransaction)
  }
  //Delete a transaction
  function onDelete(id){
    const updateTransaction= data.filter(transact=>transact.id !==id)
    setData(updateTransaction)
  }

  return (
    <div>
      <AddRow onAdd={onAdd}/>
      <br/>
     <Search transactions={data} onDelete={onDelete}/>
    </div>
  );
}

export default App;