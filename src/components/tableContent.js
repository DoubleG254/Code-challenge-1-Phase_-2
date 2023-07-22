import React from "react";
 
function TableContent({transaction,onDelete}){
    const{date,description,category,amount,id}=transaction
    //delete row from the DOM and server
    function handleDelete(){
      fetch(`http://localhost:3000/transactions/${id}`,{
        method:"DELETE"
      })
      onDelete(id)
    }
    return(
    <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td>
    <button onClick={handleDelete}>Remove</button></td>
    </tr>
    
    )
}

export default TableContent