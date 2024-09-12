import { useEffect, useState } from "react"
import './reports.css'

export default function ReportPage(){

    const [reports, setReports] = useState([])

    useEffect(()=>{
        fetch('http://localhost:1212/report')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setReports(data)
        })
    },[])

    return <div>
        <h2>
            welcome to ReportPage
        </h2>
        <table>
            <tr>
                <th>
                    Employee name
                </th>
                <th>
                    Number of orders 
                </th>
            </tr>
            {reports.map((report)=>{
                return <tr>
                    <td>
                    {report.first_name} {report.last_name}
                    </td>
                    <td>
                    {report.orders_made}
                    </td>
                </tr>
            })}
        </table>
    </div>
}