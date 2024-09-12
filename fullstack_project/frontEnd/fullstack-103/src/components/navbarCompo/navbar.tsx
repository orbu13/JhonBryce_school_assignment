import {Link} from 'react-router-dom'
import './navbar.css'
export default function Navbar(){
    return <nav><ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
        <li><Link to='/customers'>Customers</Link></li>
        <li><Link to='/reports'>Reports</Link></li>
        <li><Link to='fullDataOrders'>Full data orders</Link></li>
            </ul></nav>
}