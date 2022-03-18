import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";
export const Products = ()=>{
       
     const [data,setData] = useState([]);
   
     useEffect(()=>{
        GetData();
     })
      const GetData = ()=>{
          axios.get("http://localhost:4400/products").then((res)=>{
              setData([...res.data])
          })
      }

      return (
      <div>
        <h2>Welcome to Produts page</h2>
          <table>
     <thead>
         <tr>
             <th>Id</th>
             <th>Item</th>
             <th>Price</th>
         </tr>
     </thead>
              {data.map((el)=>(
              <tbody key={el.id}>
                  <tr >
                      <td>{el.id}</td>
                      <td>{el.name}</td>
                      <td>{el.price}</td>
                     <Link to = {`${el.id}`}>More Details</Link>
                  </tr>
              </tbody>
              ))}
          </table>

        
          </div>
      )
}