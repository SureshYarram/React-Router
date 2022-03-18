import { useState ,useEffect} from "react";
import axios from "axios"
import { useParams } from "react-router";

export const ProductDetails = ({data})=>{
  
    const [res,setRes] = useState({});
   
      const {id } = useParams();

    useEffect(()=>{
        GetData();
     })
      const GetData = ()=>{
          axios.get(`http://localhost:4400/products/${id}`).then((res)=>{
              setRes(res.data)
          })
      }





       
    return(

        <div>
            <h2>product details page </h2>
              <table>
                  <thead>
                      <tr>
                          <th>Id</th>
                          <th>Item</th>
                          <th>Price</th>
                      </tr>
                  </thead>
              <tbody key={res.id}>
                  <tr >
                      <td>{res.id}</td>
                      <td>{res.name}</td>
                      <td>{res.price}</td>
                    
                  </tr>
              </tbody>
              </table>
    
           
        </div>
    )
}