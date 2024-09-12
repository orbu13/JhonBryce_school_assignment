import { useEffect, useState } from "react"
import './orders.css'

export default function OrdersPage(){
    const [userChoice, setUserChoice] = useState('')
    const [orders, setOrders] = useState([])
    function getOrders(){
        if(userChoice != ''){
            fetch('http://localhost:1212/orders/' + userChoice)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
                setOrders(data)
            })
        }
    }
    return <div>
        <h2>
            welcome to orders page
        </h2>
        <select onChange={(e)=>{
            setUserChoice(e.target.value)
        }}>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Returned">Returned</option>
            <option value="Awaiting Payment">Awaiting Payment</option>
            <option value="Awaiting Fulfillment">Awaiting Fulfillment</option>
            <option value="Awaiting Shipment">Awaiting Shipment</option>
            <option value="Awaiting Pickup">Awaiting Pickup</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
            <option value="On Hold">On Hold</option>
            <option value="Partially Shipped">Partially Shipped</option>
            <option value="Awaiting Restock">Awaiting Restock</option>
            <option value="Awaiting Dispatch">Awaiting Dispatch</option>
            <option value="Delayed">Delayed</option>
            <option value="Partially Returned">Partially Returned</option>
            <option value="Partial Payment">Partial Payment</option>
            <option value="Refunded">Refunded</option>
        </select>
        <button onClick={getOrders}>Check</button>
        <table>
            <tr>
                <th>
                    Status
                </th>
                <th>
                    Created at
                </th>
                <th>
                    Updated at 
                </th>
                <th>
                    Is active
                </th>
                <th>
                    Priority
                </th>
                <th>
                    Description
                </th>
            </tr>
            {orders.map((order)=>{
                return <tr>
                    <td>
                        {order.status_name}
                    </td>
                    <td>
                        {order.created_at}
                    </td>
                    <td>
                        {order.updated_at}
                    </td>
                    <td>
                        {order.is_active.toString()}
                    </td>
                    <td>
                        {order.priority}
                    </td>
                    <td>
                        {order.description}
                    </td>
                </tr>
            })}
        </table>
    </div>
}
