import React from 'react';
import './table.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function List() {

    const rows = [
        {
          id: 1143155,
          product: "iQOO Z6 Lite 5G",
          img: "https://m.media-amazon.com/images/I/4105IiC5tDL._SX300_SY300_QL70_FMwebp_.jpg",
          customer: "Nivetha",
          date: "1 March",
          amount: 10999,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Queen of Everything Mug with Crown",
          img: "https://m.media-amazon.com/images/I/41d0xLCimXL._SX300_SY300_QL70_FMwebp_.jpg",
          customer: "Meghana",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Eternal Forever Rose Flower",
          img: "https://m.media-amazon.com/images/I/41NjCavmAIL._SX300_SY300_QL70_FMwebp_.jpg",
          customer: "Gayathrie",
          date: "1 March",
          amount: 499,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Janarthan",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Prabakaran",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];

  return (
  <TableContainer component={Paper} className="table">
   <Table sx={{ minWidth: 650 }} aria-label="simple table">
     <TableHead>
       <TableRow>
         <TableCell className="tableCell">Tracking ID</TableCell>
         <TableCell className="tableCell">Product</TableCell>
         <TableCell className="tableCell">Customer</TableCell>
         <TableCell className="tableCell">Date</TableCell>
         <TableCell className="tableCell">Amount</TableCell>
         <TableCell className="tableCell">Payment Method</TableCell>
         <TableCell className="tableCell">Status</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {rows.map((row) => (
         <TableRow key={row.id}>
           <TableCell className="tableCell">{row.id}</TableCell>
           <TableCell className="tableCell">
             <div className="cellWrapper">
               <img src={row.img} alt="" className="image" />
               {row.product}
             </div>
           </TableCell>
           <TableCell className="tableCell">{row.customer}</TableCell>
           <TableCell className="tableCell">{row.date}</TableCell>
           <TableCell className="tableCell">{row.amount}</TableCell>
           <TableCell className="tableCell">{row.method}</TableCell>
           <TableCell className="tableCell">
             <span className={`status ${row.status}`}>{row.status}</span>
           </TableCell>
         </TableRow>
       ))}
     </TableBody>
   </Table>
 </TableContainer>
  )
}
