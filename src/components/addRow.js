import React,{useState} from "react";


function AddRow({onAdd}){
  const [date,setDate]=useState("")
  const [description,setDescription]=useState("")
  const [category,setCategory]=useState("")
  const [amount,setAmount]=useState("")
  function formSubmit(e) {
   e.preventDefault();
   const newRow = {
     date: date,
     description: description,
     category: category,
     amount: amount,
   };
 //Updating transaction data to the server and the DOM
   fetch("https://transactions-sf47.onrender.com/transactions", {
     method: "POST",
     headers: { 'Content-Type': "application/json" },
     body: JSON.stringify(newRow)
   })
   .then(resp => resp.json())
   .then(info => {
     onAdd(info);
     // Reset the form fields after successful form submission
     setDate("");
     setDescription("");
     setCategory("");
     setAmount("");
   });
 }
 
   
   return(
     <form onSubmit={formSubmit}>
      <h2>Add Transaction</h2>
      <label htmlFor="date">Date</label>
      <input type="text" id="date" value={date} onChange={(e)=>setDate(e.target.value)} placeholder="YYYY-MM-DD"/>
      <br/>
      <label htmlFor="description">Description</label>
      <input type="text" id="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <br/>
      <label htmlFor="category">Category</label>
      <input type="text" id="category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
      <br/>
      <label htmlFor="amount">Amount</label>
      <input type="text" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <br/>
     <input type="submit"/>
     </form>
   )

}

export default AddRow