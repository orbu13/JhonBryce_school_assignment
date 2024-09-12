import { useEffect, useState } from "react"
import './customer.css'

export default function CustomerPage(){
          const [customers, setCustomers] = useState([])
          useEffect(()=>{
                fetch('http://localhost:1212/customers')
                .then((res)=>{
                    return res.json()
                })
                .then((data)=>{
                    console.log(data)
                    setCustomers(data)
                })
            },[])

    return <div>
        <h2>
            welcome to customer page
        </h2>
        <table>
            <tr>
                <th>
                    First name
                </th>
                <th>
                    Last name
                </th>
                <th>
                    Email address
                </th>
                <th>
                    Phone number
                </th>
                <th>
                    Home address
                </th>
            </tr>
        {customers.map((customer)=>{
            return <tr>
                <td>
                    {customer.first_name}
                </td>
                <td>
                    {customer.last_name}
                </td>
                <td>
                    {customer.email}
                </td>
                <td>
                    {customer.phone}
                </td>
                <td>
                    {customer.address.street}, {customer.address.city}, {customer.address.state}, {customer.address.zip_code}
                </td>
            </tr>
        })}
        </table>
    </div>
}
