import Navbar from './components/navbarCompo/navbar'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './components/homeCompo/home'
import CustomerPage from './components/customersCompo/customers'
import OrdersPage from './components/ordersCompo/orders'
import ProductsPage from './components/productsCompo/products'
import ReportPage from './components/reportsCompo/reports'
import OrdersFullDataPage from './components/ordersFullDataCompo/ordersFullData'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/customers' element={<CustomerPage/>}/>
        <Route path='/orders' element={<OrdersPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/reports' element={<ReportPage/>}/>
        <Route path='/fullDataOrders' element={<OrdersFullDataPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
