import React from 'react'
import '../assets/css/style.css';
export default function Get({ val }) {
  console.log(val, 'valvalvalval');
  return (
    <table className="table">
      <thead>
        <th>DETAILS</th>
      </thead>
      <tbody>
        {
          val ? (val.map((item, index) => {
            return (
              <tr>
                <td><span style={{color: "blue"}}>Job</span> Pursuit Manager</td>
                <td><span style={{color: "blue"}}>$/Hr</span> $5</td>
                <td><span style={{color: "blue"}}>Hr/Week</span> {item.hours}</td>
                <td><span style={{color: "blue"}}>Cost</span> {item.cost}</td>
              </tr>
            )
          })) : null
        }
      </tbody>
    </table>
  )
}
