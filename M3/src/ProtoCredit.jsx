import React from 'react';
import DataTable from './Datatable';
import Navbar from './Navbar';
import SecondNav from "./SecondNav"
const columns = [
  {
    Header: 'Transaction ID',
    accessor: 'transactionid',
  },
  {
    Header: 'Card Number',
    accessor: 'cardnumber',
  },
  {
    Header: 'Merchant Name',
    accessor: 'merchantname',
  },
  {
    Header:'Amount',
    accessor:'amount'
  },
  {
    Header: 'Date',
    accessor: 'date',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];

const data = [
    {
      transactionid: '1',
      cardnumber: '**** **** **** 1234',
      merchantname: 'ABC Store',
      amount: 100.50,
      date: '2023-05-20',
      status: 'Approved',
    },
    {
      transactionid: '2',
      cardnumber: '**** **** **** 5678',
      merchantname: 'XYZ Shop',
      amount: 75.25,
      date: '2023-05-19',
      status: 'Declined',
    },
    {
      transactionid: '3',
      cardnumber: '**** **** **** 9012',
      merchantname: 'E-commerce Co',
      amount: 200.10,
      date: '2023-05-18',
      status: 'Approved',
    },
    {
      transactionid: '4',
      cardnumber: '**** **** **** 3456',
      merchantname: 'Online Marketplace',
      amount: 50.75,
      date: '2023-05-17',
      status: 'Pending',
    },
    {
      transactionid: '5',
      cardnumber: '**** **** **** 7890',
      merchantname: 'Fashion Store',
      amount: 300.60,
      date: '2023-05-16',
      status: 'Approved',
    },
  ];
  

const CreditTrans = () => {
  return (
    <div className="trans">
      <Navbar></Navbar>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default CreditTrans;