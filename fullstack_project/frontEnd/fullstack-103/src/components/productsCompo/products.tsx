import { useEffect, useState } from "react"
import './products.css'

export default function ProductsPage(){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:1212/products')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setProducts(data)
        })
    },[])

    return <div>
        <h2>
            welcome to productsPage
        </h2>
        <table>
            <tr>
                <th>
                    Category
                </th>
                <th>
                    Price
                </th>
                <th>
                    Product name
                </th>
                <th>
                    Stock quantity
                </th>
            </tr>
            {products.map((product)=>{
                return <tr>
                    <td>
                        {product.category}
                    </td>
                    <td>
                        {product.price}
                    </td>
                    <td>
                        {product.product_name}
                    </td>
                    <td>
                        {product.stock_quantity}
                    </td>
                </tr>

            })}
        </table>
    </div>
}