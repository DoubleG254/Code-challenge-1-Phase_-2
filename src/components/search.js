import React, { useState } from "react";
import Table from "./table";
function Search({transactions,onDelete}){
    const [description,setDescription]=useState("")
    function descriptionSearch(e){
        e.preventDefault()
        setDescription("")
    }
    //the table only displays transactions that meet the description input
    const listTransaction=transactions.filter((transaction)=>{
        if (description==="") {
            return true
        } else {
            return transaction.description===description
        }
    })
    return(
        <>
        <form onSubmit={descriptionSearch}>
            <input
             type="text"
             value= {description}
             onChange={(e)=>setDescription(e.target.value)}
             placeholder="Description"
            />
           
        </form>
        <div>
          <Table transactions={listTransaction} onDelete={onDelete}/>
        </div>

        </>
    )
}

export default Search