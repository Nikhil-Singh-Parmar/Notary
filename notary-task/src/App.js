import './App.css';
import { useEffect,useState } from 'react';
import axios from "axios";
import { Table } from "reactstrap"
function App() {
  const [data,setData] = useState([]);
  const url = "http://demo2211087.mockable.io/mock";
 
 function fetchResponse(){
  axios
  .post(url, {})
  .then(res => {setData(res.data.companies)})
  .catch(err => console.log(err));

 }
  return (
    <>{
      data.length === 0 ?  <button  className='btn' onClick={fetchResponse}>Fetch Response</button> :
      <Table>
        <thead>
          <tr>
            
            <th style={{width: "200px",paddingLeft:"300px"}}>
              Name
            </th>
            <th style={{width: "300px",paddingLeft:"300px"}}>
              Email
            </th>
            <th style={{width: "300px",paddingLeft:"140px"}}>
              Active
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item)=>{
            return(
              <tr>
              
              <td style={{width: "200px",paddingLeft:"300px"}}>
                {item.name}
              </td>
              <td style={{width: "300px",paddingLeft:"300px"}}>
                {item.email}
              </td>
              <td style={{width: "300px",paddingLeft:"300px"}}>
                {item.status}
              </td>
            </tr>
            )
          })}
          
          
        
        </tbody>
      </Table>
    }
   
    
    </>
  );
}

export default App;
