import { useEffect, useState } from "react"
import './orderFullData.css'

export default function OrdersFullDataPage(){
    const [ordersData, setOrdersData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:1212/orderData')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setOrdersData(data)
        })    
    },[])
    return <div>
        <h2>
            welcome to order full data page
        </h2>
        <table>
            <tr>
                <th>
                    Order id
                </th>
                <th>
                    Employee
                </th>
                <th>
                    Customer
                </th>
                <th>
                    Shipper
                </th>
            </tr>
            {ordersData.map((order)=>{
                return <tr>
                    <td>
                        {order._id}
                    </td>
                    <td>
                        {order.employee.first_name}{order.employee.last_name}
                    </td>
                    <td>
                        {order.customer.first_name}{order.customer.last_name}
                    </td>
                    <td>
                        {order.shipper.company_name}
                    </td>
                </tr>
            })}
        </table>
    </div>
}